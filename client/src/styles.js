// import { brown, pink } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
          },
    heading: {
        color: '#a52a2a',
        
    },
    image: {
        marginLeft: '15px',
    },
    [theme.breakpoints.down('sm')]: {
    mainContainer: {
        flexDirection:"column-reverse",

    }
}

}));