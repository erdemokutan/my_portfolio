import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

    





    



const Hero = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(
        theme.breakpoints.up('md'),
        { defaultMatches: true }
    );

    return (
        
        
        <div id='home'>
            
            
            <Box sx={{ width: 1, height: 1 }}>
                <Container padding={0} maxWidth='100%'>
                    <Box
                        display='flex'
                        flexDirection={{ xs: 'column', md: 'row' }}
                        position='relative'
                        minHeight={{ md: 600 }} 
                    >
                        <Box
                            width={1}
                            order={{ xs: 2, md: 1 }}
                            display='flex'
                            alignItems='center'
                        >
                            <Container>
                                <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
                                    <Box marginBottom={2}>
                                    
                                        <Typography
                                            color={theme.palette.text.primary}
                                            variant='h2'
                                            fontWeight={700}
                                            align='center'
                                           

                                        >
                                            
                                            Hello There{' '} 
                                        </Typography>
                                        <Typography
                                            color={theme.palette.primary.main}
                                            variant='h2'
                                            fontWeight={700}
                                            align='center'
                                            marginBottom={3}
                                        >
                                             
                                        </Typography>
                                    </Box>
                                    <Box marginBottom={3}>
                                        <Typography
                                            variant='h6'
                                            component='p'
                                            color={theme.palette.text.secondary}
                                            align='center'
                                        >
                                           I am AI enthusiast & Full-Stack Developer <br/>(っ▀¯▀)つ <br/>
                                             I am a self-taught developer with a passion for learning new technologies. <br/><br/><br/>
                                             

                                             
                                        </Typography>
                                        
                                        <Typography
                                            variant='h6'
                                            component='p'
                                            color='#e5383b'
                                            align='center'
                                        >NOTICE! <br/>I will not be with you for a while as I have to do my military duty <br/> Hope to see you soon <br/>
                                        
                                        

                                                 
                                          
                                        </Typography>
                                      
                                        
                                        
                                    </Box>
                                    
                                    
                                </Box>
                                
                                
                            </Container>
                            
                        </Box>
                        <Box
                            sx={{
                                flex: { xs: '0 0 100%', md: '0 0 50%' },
                                position: 'relative',
                                maxWidth: { xs: '100%', md: '50%' },
                                order: { xs: 1, md: 2 }
                            }}
                        >
                            <Box
                                sx={{
                                    width: { xs: 1, md: '50vw' },
                                    height: '100%',
                                    position: 'relative'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <Box
                                          sx={{
                                            overflow: 'hidden',
                                            left: '0%',
                                            width: 1,
                                            height: 1,
                                            position: { xs: 'relative', md: 'absolute' },
                                            clipPath: {
                                                xs: 'none',
                                                md: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
                                            },
                                            shapeOutside: {
                                                xs: 'none',
                                                md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                height: { xs: 'auto', md: 1 },
                                                '& img': {
                                                    objectFit: 'cover',
                                                },
                                                '& .lazy-load-image-loaded': {
                                                    height: 1,
                                                    width: 1,
                                                },
                                            }}
                                        >
                                            
                                            <Box 
                                                component={LazyLoadImage}
                                                src='/images/pp.jpeg'
                                                alt='Background Image'
                                                effect='blur'
                                                height={{ xs: 'cover', md: 1, lg: 1}}
                                                maxHeight={{ xs: 800, md: 1000, lg: 1000}}
                                                
                                                width={1}
                                                maxWidth={1}
                                            />
                                            
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
                <Divider sx={{ mt: 3}} />
            </Box>
        </div>     
        
    );
};

export default Hero;