import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function RegisterPage() {
    const { register, watch, errors, handleSubmit }= useForm();
    const [loading, setLoading] = useState(false);

    const password = useRef();
    password.current = watch("password");

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
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                />
                {
                    errors.email &&
                    <p>이메일 입력은 필수입니다.</p>
                }

                <Label>아이디</Label>
                <Input
                    name='id'
                    {...register("id", { required: true, maxLength: 15 })}
                />
                {
                    errors.id &&
                    errors.id.type === "required" &&
                    <p>아이디 입력은 필수입니다.</p>
                }
                {
                    errors.id &&
                    errors.id.type === "maxLength" &&
                    <p>아이디가 최대 길이를 초과했습니다.</p>
                }

                <Label>비밀번호</Label>
                <Input
                    name='password'
                    type='password'
                    {...register("password", { required: true, minLength: 8 })}
                />

                <Label>비밀번호 확인</Label>
                <Input
                    name='password_confirm'
                    type='password'
                    {...register("password_confirm", {
                        required: true,
            
                        validate: (value) => value === password.current,
                    })}
                />

                <Input type='submit' disabled={loading} />
                <Link style={{ color: 'gray', textDecoration: 'none' }} to='login'>이미 계정이 존재한다면</Link>
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