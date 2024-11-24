import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ButtonProps } from '@/types/type'

const getbgVariant = (variant: ButtonProps['bgVariant']) => {
    switch (variant) {
        case "secondary":
            return "bg-gray-500"
        case "danger":
            return "bg-red-500"
        case "success":
            return "bg-green-500"
        case "outline":
            return "bg-transparent border-neutral-300 border-[0.5px]"
        default:
            return "bg-[#0286FF]"
    }
}
const getTextVariant = (variant: ButtonProps['textVariant']) => {
    switch (variant) {
        case "primary":
            return "text-black"
        case "secondary":
            return "text-grey-100"
        case "danger":
            return "text-red-100"
        case "success":
            return "text-green-100"
        default:
            return "text-white"
    }
}

const CustomButton = ({ onPress, title, bgVariant = "primary", textVariant = "default", IconLeft, IconRight, className, ...props }: ButtonProps) => (
    <TouchableOpacity
        onPress={onPress}
        className={`w-full rounded-full p-3 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getbgVariant(bgVariant)} ${className}`}
        {...props}
    >
        {IconLeft && <IconLeft />}
        <Text className={`text-lg font-bold ${getTextVariant(textVariant)}`}>{title}</Text>
        {IconRight && <IconRight />}
    </TouchableOpacity>
)

export default CustomButton

const styles = StyleSheet.create({})