import React, { useContext } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { ProfileContainer, ProfileInfo, StyledBox, StyledImage } from './style'
import { Link } from 'react-router-dom'
import StatesContext from '../../../context/StatesContext'


const Profile = () => {

  const context = useContext(StatesContext)
  const { userInfo } = context

  return (
    <>
      {userInfo && (
        <>
          <StyledBox >
            <ProfileContainer>
              <Typography variant={'h4'} color='#9e9e9e' marginBottom={'1em'}>My Profile</Typography>
              <StyledImage component={'img'} src={userInfo.avatar.url}></StyledImage>
              <Box component={Link} to='/me/update' sx={{ width: { xs: '70%', sm: '15em' } }} style={{ textDecoration: 'none' }}><Button variant="contained" sx={{ marginTop: '2em', width: '100%' }} >Edit Profile</Button></Box>

            </ProfileContainer>
            <ProfileInfo  >
              <Box>
                <Typography >Full Name</Typography>
                <Typography color={'#9e9e9e'} fontSize='22px'>{userInfo.name}</Typography>
              </Box>
              <Box>
                <Typography>Email</Typography>
                <Typography color={'#9e9e9e'} fontSize='22px'>{userInfo.email}</Typography>
              </Box>
              <Box>
                <Typography>Joined At</Typography>
                <Typography color={'#9e9e9e'} fontSize='22px'>{String(userInfo.createdAt).substr(0, 10)}</Typography>
              </Box>
              <Box display={'flex'} flexDirection='column' gap={'30px'} >
                <Box component={Link} to='/password/update' style={{ textDecoration: 'none' }}><Button variant="contained" sx={{ width: { xs: '80%', sm: '20em' } }}>Change Password</Button></Box>

              </Box>

            </ProfileInfo>
          </StyledBox>
        </>

      )

      }

    </>

  )
}

export default Profile