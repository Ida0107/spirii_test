
export interface VersionContent {
	labels: {
		versions: string;
	};
	actions: {
		addVersion: string;
		addSelected: string;
		cancel: string;
		save: string;
	};
}

export interface OperatorOption {
	key: string;
	value: string;
	label: string;
}

export interface ErrorMessages {
	invalidVersion: string;
}

export interface DashboardContent {
	versionContent: VersionContent;
	operatorOptions: OperatorOption[];
	errorMessages: ErrorMessages;
}

export const dashboardContent: DashboardContent = {
	versionContent: {
		labels: {
			versions: 'Versions',
		},
		actions: {
			addVersion: 'Add Version',
			addSelected: 'Add',
			cancel: 'Cancel',
			save: 'Save',
		},
	},
	operatorOptions: [
		{
			key: 'equal',
			value: 'equal',
			label: 'equal ='
		},
		{
			key: 'greaterThan',
			value: 'greaterThan',
			label: 'greaterThan >'
		},
		{
			key: 'lessThan',
			value: 'lessThan',
			label: 'lessThan <'
		}
	],
	errorMessages: {
		invalidVersion: 'Version must be formatted as [num].[num].[num].'
	}
}

export const MIN_PRODUCTION_VERSION = '0.0.0';

export const MAX_PRODUCTION_VERSION = '999.0.0';
