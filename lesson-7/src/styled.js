import styled from "styled-components";
import   {ReactComponent as User} from "./icon/user-line-svgrepo-com.svg"

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
background-color: #2A393E;
color: white;
`

export const Wrapper = styled.div`
width: 380px;
height: fit-content  ;
border: 2px solid #445859;
margin: 10px;
padding: 30px;
border-radius: 5px;
display: flex;
align-items: center;
flex-direction: column;
box-sizing: border-box;
`

export const Description = styled.div`
color: white;
font-weight: 600;
font-size: 22px;
`
export const Title = styled.div`
color: #E7C961;
font-size: 28px;
`

export const InputWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
position: relative;
`

export const Input = styled.input`
width: 100%;
height: 45px;
border-radius:4px ;
background-color:rgba(104, 105,102, .5);
border: 1px solid #354545;
margin-top: 20px;
outline: none;
padding-left: 50px;  
color: white;
font-size: 22px;
`

export const UserIcon = styled(User)`
width: 30px;
height: 30px;
position: absolute;
top: 28px;
left: 8px;
`

export const Button = styled.button`
width: 123px;
height: 45px;
background: #00908D;
color: white;
font-weight: 700;
font-size: 22px;
margin-left: auto;
margin-top: ${props => props.selection? "0" : "20px"};
border: 0;
outline: none;
border-radius: 4px;
`

export const Info = styled.div`
display: flex;
width: 100%;
margin-top: 20px;
`

export const Checkbox = styled.input`
width: 45px;
height: 45px;
background-color:rgba(104, 105,102, .5);
border: 1px solid #354545;
margin-right: 10px;
`
export const Span = styled.span`
display: flex;
align-items: center;
justify-content: center;
width: 130px;
`

export const Forget = styled.div`
margin-left: auto;
margin-top: 20px;
font-weight: 400;
font-size: 16px;

`