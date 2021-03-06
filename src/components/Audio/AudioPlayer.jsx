import { useEffect, useRef, useState } from 'react'
import { Center, Col } from '@mantine/core'
import { Collapse } from '@mantine/core';
import Buttons from './Buttons'
import PlayBtn from './playBtn'
import Waveform from './waveform'
import TitleBox from './TitleBox'

export default function IndexPage({ url, image, title, artist, description }) {
  const wavesurfer = useRef(null)
  const [opened, setOpened] = useState(false)
  const [playing, setPlaying] = useState(false)

  const handlePlayPause = () => {
    setPlaying(!playing)
    setOpened(!playing)
    wavesurfer.current.playPause()
  }

  return (
    <Center className='space-x-4 relative border-stone-600 shadow-black p-4 hover:bg-black rounded-xl transition'>

      <Center className='absolute overflow-hidden h-full w-full rounded-xl'>
        <img src={image} className={`${playing ? '' : ''} transition object-cover opacity-50 rounded-xl`} alt=""/>
      </Center>

      <div onClick={handlePlayPause} className={`${opened ? '' : ''} transition flex flex-col translate-y-8 justify-center h-full`}>
        <PlayBtn playing={playing}/>
      </div>

      <div className="z-10 w-11/12 space-y-2 flex flex-col">
        <div className='flex justify-between mb-2'>

          <TitleBox title={title} artist={artist}/>

          <Buttons opened={opened}/>
        </div>

        <Waveform wavesurfer={wavesurfer} playing={playing} url={url}/>

        <Collapse in={opened} className='w-full' transitionDuration={100}>
          <div className='text-stone-200 mt-4'>{description}</div>
        </Collapse>

      </div>

    </Center>
  )
}
