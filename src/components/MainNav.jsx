import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import SearchIcon from '@mui/icons-material/Search';
import {useHistory} from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  useEffect(()=>{
    if (value===0) history.push("/");
  },[value])

  return (
    <Box sx={{ width: '100%',
        position: "fixed",
        bottom: 0,
        zIndex:100,
    }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{background:"black",
        padding: '20px',
        width: '100%',


    }}
      >
        <BottomNavigationAction 
                label="Trending"
                icon={<WhatshotIcon />}
                style = {{color:"white"}}
                />

        <BottomNavigationAction 
                label="Movies"
                icon={<MovieCreationIcon />}
                style = {{color:"white"}}
                />

        <BottomNavigationAction 
                label="TV Series"
                icon={<MovieFilterIcon />}
                style = {{color:"white"}}
                />

        <BottomNavigationAction 
                label="Search"
                icon={<SearchIcon />}
                style = {{color:"white"}}
                />
        
      </BottomNavigation>
    </Box>
  );
}
