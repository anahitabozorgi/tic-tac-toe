import React from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

const MyLapTop = styled(Button)({
    
    background: 'pink',
    borderRadius: 0,
    color: 'black',
    height:"10vw",
    paddingleft:"35vw",
    width:"10vw",
    marginRight: "0.83vw",
    marginTop: "0.83vw",
    fontSize:"10vw",
});

const MyMobile = styled(Button)({
    
    background: 'pink',
    borderRadius: 0,
    color: 'black',
    height:"20vw",
    paddingleft:"35vw",
    width:"20vw",
    marginRight: "2vw",
    marginTop: "2vw",
    fontSize:"10vw",
    
});


function IsResponsive(props , matches){
    
    if(!matches){
    return(<MyLapTop className="fontstyle" onClick={props.onClick}> {props.value} </MyLapTop>)
    }else{
    return(<MyMobile className="fontstyle" onClick={props.onClick}> {props.value} </MyMobile>) 
    }
}

function Square(props){

    const matches = useMediaQuery('(max-width:900px)');

    return (
        IsResponsive(props , matches)
    );
}
 
export default Square;

