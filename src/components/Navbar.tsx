import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Sheet from '@mui/joy/Sheet';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

  const navlinks = [
    {
      link: "/",
      label: "Products"
    },
    {
      link: "/about",
      label: "About"
    }
  ]

  return (
    <Sheet
      variant="solid"
      color="success"
      invertedColors
      sx={[
        {
          display: 'flex',
          alignItems: 'center',
          flexGrow: 1,
          p: 2,
          borderRadius: { xs: 0, sm: 'sm' },
          minWidth: 'min-content',
          fontFamily: 'Roboto'
        }
      ]}
    >
      <Box>
          ACC Products
      </Box>
      <Box sx={{ marginLeft: '3rem', display: 'flex', gap: '10px' }}>
        {navlinks.map((navlink) => (
          <NavLink to={navlink.link} key={navlink.link}>
          {({isActive}) => (
          <Button
          sx={{ '--Button-radius': '1.5rem' }}
          variant={isActive ? "soft" : "outlined"}
          >
            {navlink.label}
          </Button>
          )}
        </NavLink>
        ))}
      
      </Box>

    </Sheet>
  );
}
