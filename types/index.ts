import React, { SetStateAction } from "react";

export interface emailInputProps {
    label: string,
    placeholder: string,
    type: string,
    setValue: Function,
}

export interface emailInputPropsFade {
    id: string
    label: string,
    placeholder: string,
    type: string,
    setValue?: Function,
    value: any,
    error?: string | undefined;
    isDisabled: boolean;
    touched: boolean | undefined;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined
    blur: React.FocusEventHandler<HTMLInputElement> | undefined
}

export interface pwInputProps {
    id: string
    label: string,
    placeholder: string,
    setValue?: Function,
    value: any,
    error?: string | undefined;
    isDisabled: boolean;
    touched: boolean | undefined;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined
    blur: React.FocusEventHandler<HTMLInputElement> | undefined
}

export interface searchInputProps{
    placeholder: string;
    type: string;
    setValue: Function
}

export interface dropDownProps {
    label: string,
    placeholder: string,
    type: string,
    data: { 
        id: number,
        name: string,
    }[],
    setValue: Function
}


export interface dropDownPropsFade {
    label: string,
    placeholder: string,
    type: string,
    data: any,
    setValue: Function,
    value: any,
    error?:string
}

export interface sidebarLink {
    id: number,
    title: String,
    route: String,
}

export interface incubateeData{
    name: string,
    LGA: string,
    phoneNumber: number,
    status: string,
    date: string,
    time: string
}

export interface loginDetails{
    request: string,
    access: string
}

export interface fileUploadProps{
    label: string,
    setSelectedImage: Function
}

export interface fetchType {
    method: string,
    url: string,
    // headers?: {}
}

export interface signUpType{
    firstname: string;
    lastname: string
    email: string;
    password: string;
    confirmPassword: string;
}

export interface loginType{
    email: string;
    password: string;
    confirmPassword: string;
}

export type statusType = 'pending' | 'done' | 'failed'


export interface IndicatorProps {
    text: string;
    status: statusType;
}

export interface courseData {
    id: string;
    videos: string;
    title: string;
    isCompleted: boolean;
    instructor: string;
    total: number;
    completed: number;
    photo: string;
}

export interface onboardingPanelProps{
    data: courseData[];
    action: () => void;
    loading: boolean;
    // setIsPlaying :  Function;
    // setCurrentId: Function;
}

export interface SWWType {
    action?: () => void;
    actionText?: string;
    message?: string;
}

export interface CardData {
    data: courseData;
    action: () => void;
}

export interface CourseProps {
    ongoing: courseData[];
}

export interface ModalProps {
    isOpen: boolean; 
    setIsOpen: Function; 
    children: React.ReactNode;
}

export interface UserDetails {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    created_at: string | null; 
    photo: string | null;
    user_type: string | null;
    phone_number: string | null
}

export interface infoProps {
    data: {
        id: number;
        label: string;
        detail: string;
        hyperlink?: string;
        icon: React.ReactNode
    }
}

export interface expertiseProps{
    data:{
        id: number;
        name: string;
        description: string;
        icon?: React.ReactNode;
        photo?: string;
    };
    setModalOpen?: React.Dispatch<SetStateAction<boolean>>;
}


export interface experienceData {
    id: number;
    company: string;
    role: string;
    companyLocation: string;
    startDate: string;
    endDate: string
    summary: string[];
    stack: string[];
}

export type experienceProps = {
    data: experienceData[]
}
export interface educationData {
    id: number;
    school: string;
    course: string;
    startDate: string;
    endDate: string
    summary?: string[];
}

export type educationProps = {
    data: educationData[]
}

export interface skillsData {
    id: number;
    name: string;
    years: number;
    percentage: number;
}

export type skillsProps = {
    data: skillsData[]
}

export interface projectsData {
    id: number;
    name: string;
    categories: string[];
    category: string;
    image: string;
    link: string;
}

export type projectsProps = {
    data: projectsData;
}