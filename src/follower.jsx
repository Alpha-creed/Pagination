import { Typography } from '@mui/material'
import { CardActions } from '@mui/material'
import { Link } from '@mui/material'
import { Button } from '@mui/material'
import { Avatar } from '@mui/material'
import { CardContent } from '@mui/material'
import {Card} from '@mui/material'

export const Follower = ({avatar_url,html_url,login})=>{
    return (
        <Card sx={{maxWidth:275,minWidth:150}}>
            <CardContent>
                <Avatar alt={login} src={avatar_url} sx={{width:110,height:110}}/>
                <Typography variant='h4'>
                    ${login}
                </Typography>
            </CardContent>
            <CardActions style={{justifyContent:'center'}}>
               <Link href={html_url} underline="none">
                <Button >
                    View Profile
                </Button>
                </Link>
            </CardActions>
        </Card>
    )
}