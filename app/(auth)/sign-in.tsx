import { View, ScrollView, Image, Text } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '@/constants'
import InputField from '@/components/InputField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'
import OAuth from '@/components/OAuth'

const SignIn = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const onSignInPress = async () => {

    }

    return (
        <ScrollView className='flex-1 bg-white'>
            <View className='flex-1 bg-white'>
                <View className='relative w-full h-[250px]'>
                    <Image
                        source={images.signUpCar}
                        className='z-0 w-full h-[250px]'
                    />
                    <Text
                        className='absolute bottom-5 left-5 text-2xl font-jakartaSemiBold text-black'
                    >
                        Welcome
                    </Text>
                </View>
                <View className='p-3'>
                    <InputField
                        label='Email'
                        placeholder='Enter your email'
                        icon={icons.email}
                        value={form.email}
                        onChangeText={(text) => setForm({ ...form, email: text })}
                    />
                    <InputField
                        label='Password'
                        placeholder='Enter your Password'
                        icon={icons.lock}
                        value={form.password}
                        onChangeText={(text) => setForm({ ...form, password: text })}
                        secureTextEntry={true}
                    />
                    <CustomButton
                        title='Sign In'
                        onPress={onSignInPress}
                        className='mt-6'
                    />
                    <OAuth />
                    <Link href={'/(auth)/sign-up'} className='text-lg text-center text-general-200 mt-5'>
                        <Text>Dont't have an Account?</Text>
                        <Text className='text-primary-500'> Sign Up</Text>
                    </Link>
                </View>
            </View>
        </ScrollView>
    )
}

export default SignIn