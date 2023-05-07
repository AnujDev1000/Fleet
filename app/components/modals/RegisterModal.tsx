'use client'

import { useState, useCallback } from 'react'
import axios from 'axios'
import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"

import useRegisterModel from '@/app/hooks/useRegisterModel'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import Modal from './Modal'
import Heading from './Heading'
import Input from '../inputs/Input'
import { toast } from "react-hot-toast"

const RegisterModal = () => {
    const registerModal = useRegisterModel()
    const [isLoading, setIsLoading] = useState(false)
    
    const { register, handleSubmit, formState: { errors }, } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        axios.post("/api/register", data)
            .then(() => {
                registerModal.onClose()
            })
            .catch((err) => {
                toast.error("Something went wrong!")
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title='Welcome to Fleet' subTitle='Create an Account' />
            <Input id='email' label='Email' disabled={isLoading} register={register} errors={errors} required />
            <Input id='name' label='Name' disabled={isLoading} register={register} errors={errors} required />
            <Input id='password' label='Password' disabled={isLoading} register={register} errors={errors} required />
        </div>
    )

    return (
        <Modal disabled={isLoading} isOpen={registerModal.isOpen} title='Register' actionLabel='Continue' onClose={registerModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} />
    )
}

export default RegisterModal
