import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';
import { Component, Injectable } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

import { FlatTreeControl } from '@angular/cdk/tree';

/**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
 */
export class FileNode {
	children: FileNode[];
	filename: string;
	type: any;
}

/** Flat node with expandable and level information */
export class FileFlatNode {
	constructor(public expandable: boolean, public filename: string, public level: number, public type: any) {}
}

/**
 * The file structure tree data in string. The data could be parsed into a Json object
 */
const TREE_DATA = JSON.stringify({
	Dashboard: 'png',
	Calendar: {
		'Aircraft and Crew Calendar': ''
	},
	Trips: {
		'Create Trip': 'png',
		'Trips List': {
			'Trip Details': {
				'Trip Summary': 'dir',
				'Legs List': {
					'Leg Details': {
						'Leg Summary': {
							'Pax Details': {
								APIS: 'dir'
							},
							'Services Details': 'dir',
							'Permits Details': 'dir'
						},
						Airports: 'dir',
						'Feasibility Checks': {
							'Crew Feasibility': 'dir',
							'Aircraft Feasibility': 'dir'
						},
						Alerts: 'dir',
						'Leg Preparation': {
							'Fuel on Board': 'dir',
							Payload: 'dir',
							Performance: 'dir',
							'Weight & Balance': 'dir',
							'Weather/NOTAMs, Weather Brief': 'dir'
						},
						Routes: {
							'SkyVector Map': 'dir',
							'Router to Alternates': 'dir',
							'Select Route': 'dir',
							'Save Routes/Custom Stored Routes': 'dir',
							'ETOPS/ETP': 'dir',
							'Route Optimize': 'dir',
							CDR: 'dir',
							'Routing: Full List of Route Options': 'dir',
							'Military Requirements for Flight Planning': 'dir'
						},
						'Filing Flight Plan': {
							'Notification Filing': 'dir',
							'Flight Plan (PDF)': {
								'Notifitacion EDCT/CTOT': 'dir',
								'Notifitacion PDC/DCL (PDF)': 'dir'
							}
						},
						Safety: {
							'FRAT FLight Risk Assessment Tool': 'dir',
							'Flight Risk (link to 3rd party)': 'dir'
						}
					}
				},
				'Edit Trip': 'dir',
				'Slot Reservation': 'dir',
				'Runwat Analysis': 'dir',
				'Flight Brief': {
					'Intelligence Brief': 'dir',
					'Flight Risk Summary': 'dir',
					'Fax/Email Package': 'dir',
					'Package Status': 'dir',
					'FAA Perti Document': 'dir',
					'Informative Leg PDF Documents': 'dir',
					GENDEC: 'dir'
				},
				'Schedule Crew': 'dir',
				Pax: {
					'Add Passengers': 'dir',
					'Passengers Details': 'dir'
				},
				Fuel: {
					Tankering: 'dir',
					'Fuel Planner': 'dir',
					'Fuel Guzzlers': 'dir'
				},
				Services: {
					'Cost Paramenters': 'dir'
				},
				Permits: 'dir'
			}
		}
	},
	Aircraft: {
		'Photo Booth Library': {
			Contents: 'dir',
			Pictures: 'dir'
		},
		Sun: 'png',
		Woods: 'jpg'
	},
	Airports: {
		'Photo Booth Library': {
			Contents: 'dir',
			Pictures: 'dir'
		},
		Sun: 'png',
		Woods: 'jpg'
	},
	'Document Manager': 'png',
	Directory: {
		'Photo Booth Library': {
			Contents: 'dir',
			Pictures: 'dir'
		},
		Sun: 'png',
		Woods: 'jpg'
	},
	'Messages Datalink': 'png'
});

const SECOND_TREE_DATA = JSON.stringify({
	Settings: {
		'User Profile': 'png',
		'User Preferences': 'png',
		'Roles/permissions': 'png',
		'RolesLog Out': 'png'
	},
	Chat: 'png',
	Feedback: 'png',
	'Track FLights': 'png',
	'Weather Videos': 'png',
	Notifications: 'png'
});

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
@Injectable()
export class FileDatabase {
	dataChange = new BehaviorSubject<FileNode[]>([]);
	secondDataChange = new BehaviorSubject<FileNode[]>([]);
	get data(): FileNode[] {
		return this.dataChange.value;
	}
	constructor() {
		this.initialize();
	}

	initialize() {
		// Parse the string to json object.
		const dataObject = JSON.parse(TREE_DATA);

		const secondDataObject = JSON.parse(SECOND_TREE_DATA);

		// Build the tree nodes from Json object. The result is a list of `FileNode` with nested
		//     file node as children.
		const data = this.buildFileTree(dataObject, 0);
		const secondData = this.buildFileTree(secondDataObject, 0);

		// Notify the change.
		this.dataChange.next(data);
		this.secondDataChange.next(secondData);
	}

	/**
	 * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
	 * The return value is the list of `FileNode`.
	 */
	buildFileTree(obj: { [key: string]: any }, level: number): FileNode[] {
		return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
			const value = obj[key];
			const node = new FileNode();
			node.filename = key;

			if (value != null) {
				if (typeof value === 'object') {
					node.children = this.buildFileTree(value, level + 1);
				} else {
					node.type = value;
				}
			}

			return accumulator.concat(node);
		}, []);
	}
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ],
	providers: [ FileDatabase ]
})
export class AppComponent {
	title = 'tree-test';

	treeControl: FlatTreeControl<FileFlatNode>;
	treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;
	dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;
	secondDataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;
	constructor(database: FileDatabase) {
		this.treeFlattener = new MatTreeFlattener(
			this.transformer,
			this._getLevel,
			this._isExpandable,
			this._getChildren
		);
		this.treeControl = new FlatTreeControl<FileFlatNode>(this._getLevel, this._isExpandable);
		this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
		this.secondDataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

		database.dataChange.subscribe((data) => (this.dataSource.data = data));
		database.secondDataChange.subscribe((secondData) => (this.secondDataSource.data = secondData));
	}

	transformer = (node: FileNode, level: number) => {
		return new FileFlatNode(!!node.children, node.filename, level, node.type);
	};

	private _getLevel = (node: FileFlatNode) => node.level;

	private _isExpandable = (node: FileFlatNode) => node.expandable;

	private _getChildren = (node: FileNode): Observable<FileNode[]> => observableOf(node.children);

	hasChild = (_: number, _nodeData: FileFlatNode) => _nodeData.expandable;
}
