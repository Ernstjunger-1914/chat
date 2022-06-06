import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

function RegisterPage() {
    const { register, watch, errors, handleSubmit }= useForm(); 

    return (
        <RegisterDiv>
            <PageTitleDiv>
                회원가입
            </PageTitleDiv>
            <Form>
                <Label>이메일</Label>
                <Input 
                    name='email'
                    type='email'
                    ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                />
                {
                    errors.email &&
                    <p>이메일 입력은 필수입니다.</p>
                }

                <Label>아이디</Label>
                <Input
                    name='name'
                    ref={register({ required: true, maxLength: 15 })}
                />

                <Label>비밀번호</Label>
                
            </Form>
        </RegisterDiv>
    );
}

const RegisterDiv = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
`;

const PageTitleDiv = styled.div`
    text-align: center;
`;

const Form = styled.form`
    width: 375px;
    margin: 0 auto;
`;

const Label = styled.label`
    line-height: 2;
    text-align: left;
    display: block;
    margin: 5px 0;
    font-size: 14px;
    font-weight: 200;
`;

const Input = styled.input`
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #000;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
`;

export default RegisterPage;