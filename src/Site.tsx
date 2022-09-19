import {Box, Container, Grid, IconButton, TextField, Toolbar, Typography} from "@mui/material";
import React, {useState} from "react";
import {string_decode, string_encode} from "./nya";
import {ContentCopy} from "@mui/icons-material";

function Site() {
    const [原文, set原文] = useState('')
    const [密文, set密文] = useState('')

    return (
        <Container maxWidth="xl" sx={{flexGrow: 1}}>
            <Toolbar>
                <Typography variant="h5" sx={{mt: 2, mb: 2}}>
                    喵喵隐者5
                </Typography>
            </Toolbar>
            <Container component="main">
                <Grid container columns={{xs: 6, md: 12}} sx={{mt: 4, mb: 4}} spacing={2}>
                    <Grid item xs={6}>
                        <Box sx={{position: 'relative'}}>
                            <TextField label="原文" fullWidth multiline minRows={5} maxRows={5} value={原文}
                                       onChange={event => {
                                           const {value} = event.target
                                           set原文(value)
                                           set密文(string_encode(value))
                                       }}/>
                            <IconButton size="large" sx={{position: 'absolute', bottom: 4, right: 4}}
                                        onClick={() => {
                                            navigator.clipboard.writeText(原文).finally()
                                        }}>
                                <ContentCopy/>
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{position: 'relative'}}>
                            <TextField label="密文" fullWidth multiline minRows={5} maxRows={5} value={密文}
                                       onChange={event => {
                                           const {value} = event.target
                                           set密文(value)
                                           set原文(string_decode(value))
                                       }}/>
                            <IconButton size="large" sx={{position: 'absolute', bottom: 4, right: 4}}
                                        onClick={() => {
                                            navigator.clipboard.writeText(密文).finally()
                                        }}>
                                <ContentCopy/>
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default Site
