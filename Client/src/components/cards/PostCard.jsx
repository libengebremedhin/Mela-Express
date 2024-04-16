import React from 'react'
import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

export const PostCard = ({ service }) => {
    return (
        <Box
            component="span"
            sx={{mr:25,  transform: 'scale(0.8)', boxShadow: 3}}
        >
            <Card sx={{ minWidth: 275, height:'auto', width:440 }}>
                <CardContent>
                    <div className='flex'>
                        <Typography variant="h5" component="div" color='primary'>
                            {/* Static content */}
                        </Typography>
                        {/* Assuming AvatarCard is used elsewhere */}
                    </div>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Driver Name: {service.name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {/* Static content */}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Any {/* Static content */}
                    </Typography>
                    <div className='flex gap-5'>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">From {service.origin} to {service.destination}</Typography>
                        <PlaceIcon/>
                    </div>
                </CardContent>
                <hr />
                <CardActions className='flex'>
                    <Button className='' size="medium" sx={{mr:12}} >
                        <EmailIcon/>
                        <Typography variant='h6' sx={{ml:2}}>Email </Typography>
                    </Button>

                    <div className='h-14 border-gray-400 border-r-2 mr-20'></div>

                    <Button className='' size="medium"  sx={{ml:6}}>
                        <CallIcon/>
                        <Typography variant='h6' sx={{ml:2}} >Call</Typography>
                    </Button>
                </CardActions>
            </Card>
        </Box>
    )
}
