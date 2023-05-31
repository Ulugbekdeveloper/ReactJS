import React from "react";
import { Wrapper, Description, Title ,InputWrapper, Input,UserIcon, Button } from "./styled";

function Login(){
    return(
        <Wrapper>
             <Description>
            Don't have an account?
           </Description>
           <Title>
            Log In Here
           </Title>
           <InputWrapper>
           <UserIcon/>
           <Input placeholder="Username"/>
           </InputWrapper>
           <InputWrapper>
           <UserIcon/>
           <Input placeholder="Password"/>
           </InputWrapper>
           <InputWrapper>
           <UserIcon/>
           <Input placeholder="Password"/>
           </InputWrapper>
           <Button>Log In</Button>
        </Wrapper>
    )
}

export default Login