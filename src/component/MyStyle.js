import { styled } from '@mui/material/styles';
import {Button, TableCell, ListItem, List, ListItemText, Box, IconButton} from '@mui/material';
import { Drawer, Paper } from "@mui/material";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';


export const CustomButton = styled(Button)({
    color: '#fff',
    backgroundColor: '#fdb8b9',
    '&:hover': {
        backgroundColor: '#c1a5fc',
    },
});

export const CustomLoginButton = styled(Button)({
    color: '#fff',
    backgroundColor: '#fdb8b9',
    width: '300px',
    height: '50px',
    margin : '50px 0 30px 0',
    '&:hover': {
        backgroundColor: '#c1a5fc',

    },
});

export const CustomCurrentLoginButton = styled(Button)({
    color: '#fff',
    backgroundColor: '#fdb8b9',
    width: '100px',
    height: '50px',
    margin : '20px 0 30px 0',
    '&:hover': {
        backgroundColor: '#c1a5fc',

    },
});


export const CustomCategoryButton = styled(Button)({
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#fff',
    backgroundColor: '#fdb8b9',
    width: '25%',
    height: '50px',
    margin : '20px 0 30px 0',
    '&:hover': {
        backgroundColor: '#c1a5fc',
    },
    '&:click': {
        backgroundColor: '#c1a5fc',
    }
})

export const CustomList = styled(List)({
    backgroundColor: '#fdb8b9',
})

export const CustomListItemButton = styled(ListItem)({
    color: '#fff',
        '&:hover': {
        color: '#c1a5fc',
    },

});

export const CustomPaper = styled(Paper)({
    backgroundColor: '#fdb8b9',
    height: '100%',
});


export const CustomAccordion = styled(Accordion)({
    backgroundColor: '#fdb8b9',
    color: '#fff',
        '&:hover': {
        color: '#c1a5fc',
    }
});

export const CustomTypography = styled(Typography)({
    fontFamily: 'Dongle',
    fontSize: '23px',
});

export const CustomFavoriteIcon = styled(IconButton)({
    color: '#fdb8b9',

});


// 채팅

export const ChatBubble = styled(Paper)((
    { theme, position }) => ({
    maxWidth: '80%',
    padding: theme.spacing(1),
    wordWrap: 'break-word',
    marginBottom: theme.spacing(1),
    alignSelf: position === 'right' ? 'flex-end' : 'flex-start',
}));

export const ChatBox = styled(Box)({
    maxHeight: 400,
    overflow: 'auto',
    backgroundColor: '#fdb8b9',
    height: '100%',
});