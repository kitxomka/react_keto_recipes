import { Link } from 'react-router-dom';

import { Grid, InputBase, Typography,  } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { fade, makeStyles } from '@material-ui/core/styles';

import './Page.css';


const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },

    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputRoot: {
        color: 'inherit',
    },

    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


const Header = () => {

    const classes = useStyles();

    return (
        <Grid container spacing={2} alignItems='center' className='headerGContainer'>
            <Grid item xs={1}>
                <Link to='/' className='headerLink'>
                    <Typography variant="subtitle1" mt={2} className='headerTypography'>Home</Typography>
                </Link>
            </Grid>    
            <Grid item xs={8}>
                <Link to={{ pathname: `/add-new-recipe` }} className='headerLink'>
                    <Typography variant="subtitle1" className='headerTypography'>Add new recipe</Typography>
                </Link>
            </Grid>   
            <Grid item>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </Grid>

        </Grid>

    )
}

export default Header
