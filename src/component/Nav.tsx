import { AppBar, Button, TextField, Toolbar, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import React, { useState } from 'react'

type Props = {
    navigate:any
}
const Nav:React.FC<Props> = ({...props}) => {

    const [input, setInput ]:any = useState('');

    const handelChange = (e:any)=>{
        setInput(e.target.value)
    }

    const handelSubmit = (e:any)=>{
        e.preventDefault();
        setInput('');
        props.navigate(`/country/${input}`)
    }

  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h5' sx={{flexGrow:1}}>Weather Report</Typography>
                <form action="" onSubmit={handelSubmit}>
                    <TextField style = {{background: '#D3D3D3', color: 'blue'}} type='text' placeholder='enter country  name' onChange={handelChange}/>
                    <button  style={{height:'3.5rem', color:'black', backgroundColor: 'white', marginTop: '1px' }}  disabled={!input} type='submit'>Search</button>
                </form>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Nav