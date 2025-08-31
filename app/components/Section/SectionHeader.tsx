import React from 'react'

type Props = {
    plaintext: string;
    highlightText: string;
}

const SectionHeader = ({plaintext, highlightText}: Props) => {
  return (
    <h2 className='text-[22px] md:text-[35px] px-20 text-center'>
        {plaintext}{" "}<span className='highlight px-2 whitespace-nowrap'>{highlightText}</span>
    </h2>
  )
}

export default SectionHeader