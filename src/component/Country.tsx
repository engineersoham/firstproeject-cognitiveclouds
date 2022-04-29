import { Avatar, Button, CircularProgress, Table, TableCell, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import { url } from 'inspector';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { useNavigate, useParams } from 'react-router-dom';

const Country = () => {
    const [data, setData]: any = useState<any>();
    const country:any  = useLocation().state
    const navigate = useNavigate()
    const fetchData = async () => {
        try {
            const res = await axios(`https://restcountries.com/v3.1/name/${country}`)
            console.log(res.data[0]);
            setData(res.data[0])
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {

        console.log(country);
        fetchData()
        console.log(data)
    }, [country])

    return (
        <>
            {data ? <div>
                <Button data-testid='back' sx={{m:2}} variant='contained' onClick={() => navigate(-1)}>Back</Button>
                <Typography sx={{ textAlign: 'center' }} variant='h4'>Country Details</Typography>
                <Table sx={{ backgroundColor:'#E2E6F0', m:'auto', width:'25rem', height:'13rem', borderRadius: '10px', boreder: '1px solid black', boxShadow: '5px 10px #888888' }}>
                    <TableRow>
                        <TableCell>
                            <b>{country}</b>
                        </TableCell>
                        
                            <TableCell >
                                <Avatar src={data.flags.png} variant='rounded' />
                            </TableCell>
                           
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Capital City :
                        </TableCell>
                        <TableCell>
                            {data.capital[0]}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Population :
                        </TableCell>
                        <TableCell>
                            {data.population}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Latitude :
                        </TableCell>
                        <TableCell>
                            {data.latlng[0]}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Longitude :
                        </TableCell>
                        <TableCell>
                            {data.latlng[1]}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>

                        </TableCell>
                        <TableCell>
                          <Button data-testid='capital'  title="capitalweather" variant='contained' onClick={() => navigate(`/weather/${data.capital[0]}`)}>capital Weather</Button>
                        </TableCell>
                        
                    </TableRow>
                </Table>

            </div>
                :
                <><CircularProgress />loading...</>
            }
        </>
    )
}

export default Country