'use client'
import React from 'react'
import { Html, Body, Container, Text, Link, Preview, Tailwind } from '@react-email/components'

const WelcomeTemplate = ({ name }: { name: string }) => {
    return (
        <Html>
            <Preview>Welcome aboard!</Preview>
            <Tailwind>
                <Body className='bg-white'>
                    <Container>
                        <Text className='font-blod text-3xl'>Hello {name}</Text>
                        <Link href="https://news.purchains.com/">www.news.purchains.com</Link>
                    </Container>
                </Body>
            </Tailwind>

        </Html>
    )
}

export default WelcomeTemplate