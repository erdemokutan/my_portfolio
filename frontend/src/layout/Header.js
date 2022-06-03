import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { alpha, useTheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DevicesIcon from '@mui/icons-material/DevicesOutlined';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LightModeIcon from '@mui/icons-material/LightMode';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faE } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faE);

import ColorModeContext from '../components/ColorModeContext';
import CustomButton from '../components/CustomButton';

const Header = ({ onSidebarOpen }) => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 38,
    });

    return (
        <React.Fragment>
            <AppBar
                position='sticky'
                color='transparent'
                elevation={theme.palette.mode === 'dark' ? (0) : (trigger ? 1 : 0)}
                sx={{
                    top: 0,
                    border: 0,
                    backgroundColor: trigger ? theme.palette.background.default : 'transparent',
                }}
            >
                <Toolbar sx={{ minHeight: 70 }}>
                    <Box 
                        alignItems='center'
                        sx={{ display: { md: 'block', lg: 'none' } }}
                    >
                        <Button
                            onClick={() => onSidebarOpen()}
                            aria-label='Menu'
                            variant='outlined'
                            sx={{
                                borderRadius: 2,
                                minWidth: 'auto',
                                padding: 1,
                                color: theme.palette.primary.main,
                                borderColor: alpha(theme.palette.primary.main, 0.2),
                            }}
                        >
                            <MenuIcon fontSize='medium' />
                        </Button>
                    </Box>
                    <Link href='/' style={{ textDecoration: 'none' }}>
                        <IconButton size='large' disabled>
                            <Avatar
                                variant='rounded'
                                sx={{
                                    backgroundColor: theme.palette.primary.main,
                                    height: 30,
                                    width: 30,
                                    marginRight: '15px'
                                }}
                            >
                                <FontAwesomeIcon 
                                    icon={faE} 
                                    style={{ 
                                        color: theme.palette.common.white, 
                                        height: 20, 
                                        width: 20 
                                    }} 
                                />
                            </Avatar>
                            <Typography 
                                variant='h3' 
                                component='div' 
                                sx={{ 
                                    fontSize: '1.5rem',
                                    filter: 'drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.5))',
                                    flexGrow: 1,
                                    color: theme.palette.text.primary,
                                    fontFamily: '"Orbitron", sans-serif',
                                    fontWeight: 'bold',
                                    textDecoration: 'none',
                                    display: { md: 'inline', xs: 'none' }
                                }}
                            >
                                Erdem Okutan
                            </Typography>
                        </IconButton>
                    </Link>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box 
                        sx={{ 
                            alignItems: 'center',
                            display: { lg: 'flex', md: 'none', xs: 'none' } 
                        }}
                    >
                        <CustomButton 
                            href='#home'
                            icon={<HomeIcon />}
                            text='Home'
                        />
                        <CustomButton 
                            href='#about'
                            icon={<InfoIcon />}
                            text='About'
                        />
                        <CustomButton 
                            href='#projects'
                            icon={<ListIcon />}
                            text='Projects'
                        />
                        <CustomButton 
                            href='#technologies'
                            icon={<DevicesIcon />}
                            text='Technologies'
                        />
                        <CustomButton 
                            href='#contact'
                            icon={<EmailIcon />}
                            text='Contact'
                        />
                    </Box>
                    <Divider
                        orientation='vertical'
                        sx={{ 
                            height: 32, 
                            mx: 2,
                            display: { lg: 'flex', md: 'none', xs: 'none' }
                        }} 
                    />
                    <Box sx={{ display: 'flex' }}>
                        <IconButton
                            onClick={colorMode.toggleColorMode}
                            aria-label='Theme Mode'
                            color={theme.palette.mode === 'dark' ? 'warning' : 'inherit' }
                        >
                            {theme.palette.mode === 'dark' 
                                ? (
                                    <LightModeIcon fontSize='medium' />
                                ) 
                                : (
                                    <DarkModeIcon fontSize='medium' />
                                )
                            }
                        </IconButton>
                    </Box>
                    <Divider
                        orientation='vertical'
                        sx={{ 
                            height: 32, 
                            mx: 2,
                            display: { lg: 'flex', md: 'none', xs: 'none' } 
                        }} 
                    />
                    <Box sx={{ display: { lg: 'flex', md: 'none', xs: 'none' } }}>
                        <IconButton 
                            aria-label='GitHub' 
                            color='primary'
                            href='https://github.com/erdemokutan'
                            target=''
                        >
                            <GitHubIcon fontSize='large' />
                        </IconButton>
                        <IconButton 
                            aria-label='LinkedIn' 
                            color='primary'
                            href='https://linkedin.com/in/erdemokutan'
                            target=''
                        >
                            <LinkedInIcon fontSize='large' />
                        </IconButton>
                        <IconButton 
                            aria-label='Instagram' 
                            color='primary'
                            href='https://instagram.com/okutan_erdem'
                            target=''
                        >
                            <InstagramIcon fontSize='large' />
                        </IconButton>
                        <IconButton 
                            aria-label='Twitter' 
                            color='primary'
                            href='https://twitter.com/zihinzugurdu'
                            target=''
                        >
                            <TwitterIcon fontSize='large' />
                        </IconButton>
                    </Box>
                    {theme.palette.mode === 'dark' && <Divider />}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

Header.propTypes = {
    onSidebarOpen: PropTypes.func,
};

export default Header;