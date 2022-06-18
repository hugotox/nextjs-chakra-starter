import { Heading, Link } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import NextLink from 'next/link'

import { Banner } from '../components/banner'
import { getLangFiles } from '../utils/pages'

export default function Profile() {
  return (
    <>
      <Heading>Profile page</Heading>
      <NextLink href="/" passHref>
        <Link>Home</Link>
      </NextLink>
      <br />
      <Banner />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: await getLangFiles(locale),
    },
  }
}
