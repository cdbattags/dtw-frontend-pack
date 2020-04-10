import React from 'react'
import SVG from 'react-inlinesvg'

import './styles.scss'

class Props {
    greeting: string = 'Hello'
}

export default (props: Partial<Props>) => (
    <>
        <p>{ props.greeting } this is the React app!</p>

        <br/>

        <SVG style={{ height: '10vh', width: '10vh' }} src={'./src/image.svg'} />
    </>
)
