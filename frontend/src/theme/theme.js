import { createTheme } from '@mui/material/styles';
import typography from './typography';

export default {
    dark: createTheme({
        palette: {
            mode: 'dark',
            background: {
                default: 'rgb(49, 34, 68)',
                paper: 'rgb(75, 56, 105)',
            },
            text: {
                primary: 'rgba(242, 92, 84)',
                secondary: 'rgba(247, 178, 103)',
            },
            primary: {
                main: 'rgb(159, 255, 203)',
                contrastText: 'rgb(242, 92, 84)',
            },
            divider: 'rgb(58, 1, 92)',
        },
        typography: typography,

        
    }),
    light: createTheme({
        palette: {
            mode: 'light',
            background: {
                paper: 'rgb(192, 96, 20)',
                default: 'rgb(243, 244, 237)',
            },
            text: {
                primary: 'rgb(66, 70, 66)',
                secondary: 'rgb(83, 97, 98)',
            },
            primary: {
                main: 'rgb(49, 34, 68)',
                contrastText: 'rgb(159, 255, 203)',
            },
            divider: 'rgba(0, 0, 0, 0.12)',
        },
        typography: typography,
    })
};