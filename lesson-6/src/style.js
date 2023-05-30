import styled, {css} from "styled-components";

const getFontSize = ({size}) =>{
    switch(size){
        case "desktop" : return "26px"
        
        case "tablet" : return  "22px"
       
        case "mobile" : return  "18px"
    
        default : return "18px"
    }
}
const getColor = ({color}) =>{
    switch(color){
        case "error" : return "red"
        
        case "warning" : return  "yellow"
       
        case "success" : return  "green"
    
        default : return "black"
    }
}
const common = css`
background-color: pink;
border-radius: 8px;
`

export const Wrapper = styled.div`
display: flex;
`

export const Container = styled.div`
background-color: ${props => props.display? "yellow" : "black"  };
width: 200px;
height: 200px;
margin-left: 10px;
border: none;
border-radius: 8px;

`
export const Title = styled.h1`
color:${getColor};
font-size: ${getFontSize};
/* ${common} */

`
export const Contain = styled.div`
display: flex;
`
export const Button = styled.button`
color:  var(--text-color);
`