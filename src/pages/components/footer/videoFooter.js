import React from 'react'
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function videoFooter() {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__text'>
            <h3>@gu1.al</h3>
            <p>Descrição do Video</p>
            <div className='videoFooter__music'>
                <MusicNoteIcon className='videoFooter__icon'/>
                <div className='videoFooterMusic__text'>
                    <p>Titulo da Música</p>    
                </div>
            </div>
        </div>
        <img 
            className='videoFooter__record'
            alt='Imagem de um vinil girando'
            src='https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/vinil.png?alt=media&token=d174bbec-b930-41e4-ab50-af1ea81bb7da'
        />
    </div>
  )
}

export default videoFooter