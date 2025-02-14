import React from 'react'
import FlexBetween from './FlexBetween'
import { Palette } from '@mui/icons-material'
import { Box, Typography, useTheme } from '@mui/material'


type BoxHeaderProps = {
  icon?: React.ReactNode;
  title?: string;
  sideText?: string;
  subtitle?: string;
}

const Boxheader = ( { icon, title, sideText, subtitle }: BoxHeaderProps) => {
  const { palette } =  useTheme();
  return (
    <FlexBetween 
    color={palette.grey[400]} 
    margin="1.5rem 1rem 0 1rem"
    >
      <FlexBetween>
        {icon}
        <Box width="100%">
          <Typography variant='h4' mb="-0.14rem">
            {title}
          </Typography>
          <Typography variant='h6'>{subtitle}</Typography>
        </Box>
      </FlexBetween>
      <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>{sideText}</Typography>
    </FlexBetween>
  )
}

export default Boxheader;