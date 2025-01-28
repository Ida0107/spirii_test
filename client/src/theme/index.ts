import { ThemeOptions } from '@mui/material/styles';

const palette = {
	primary: {
		main: '#4F46E5',
		light: '#F8FAFC'
	},
	secondary: {
		main: '#CBD5E1',
		dark: '#334155',
		light: '#98A2B3'
	},
	text: {
		primary: '#64748B',
		secondary: '#64748B'
	},
	background: {
		default: '#E2E8F0',
	},
};

export const createDefaultTheme = (): ThemeOptions => {
	const defaultOptions: ThemeOptions = {
		palette,
	};
	return defaultOptions;
};

export const defaultTheme = createDefaultTheme();
