import React from "react";
import { Button, Description,  Input,  InputWrapper, Title, UserIcon, Wrapper, Info, Checkbox, Span, Forget} from "./styled";

function Register(){
    return(
        <Wrapper>
           <Description>
            Already have an account?
           </Description>
           <Title>Regiter now</Title>
           <InputWrapper>
           <UserIcon/>
           <Input placeholder="Username"/>
           </InputWrapper>
           <InputWrapper>
           <UserIcon/>
           <Input placeholder="Password"/>
           </InputWrapper>
           <Info>
            <Span>
            <Checkbox type="checkbox"/>
            Keep me logged in
            </Span>
           <Button selection>Log In</Button>
           </Info>
           <Forget>Forget your Password ?</Forget>
        </Wrapper>
    )
}

export default Register