import {styled} from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { blue } from "@mui/material/colors";
import { green } from "@mui/material/colors";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useFetch } from "./useFetch";
import { Divider } from "@mui/material";
import { Grid } from "@mui/material";
import { Follower } from "./follower";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";

function App() {
  const {loading,data} = useFetch()
  const [page,setPage] = useState(0)
  const [followers,setFollowers] = useState([])
  const [selected,setSelected] = useState("")

  useEffect(()=>{
    if(loading) return 
    setFollowers(data[page])
  },[loading,page])

  const clicks = (value)=>{
    //this is a toggle to add/remove from slected array
    if(selected.indexOf(value)>-1){
      //if exist,remove
      setSelected(prev =>prev.filter(item=>item !== value))
    }else{
      setSelected(value)
    }
  }

  const nextPage = () =>{
    setPage((oldPage)=>{
      let nextPage = oldPage + 1
      if(nextPage > data.length -1){
        nextPage = 0
      }
      return nextPage
    })
  }
  const prevPage = () =>{
    setPage((oldPage) =>{
      let prevPage = oldPage + 1
      if(prevPage < 0){
        prevPage = data.length -1
      }
      return prevPage
    })
  }

  const handlePage = (index) => {
    setPage(index)

  }

  const Content = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(6),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(1),
    },

  }));

  return (
    <Content>
  <Box>
  <Typography variant="h5">
    {loading?'loading...':'Pagination'}
</Typography>
<Divider/>

<Grid container spacing={{xs:8,md:3 ,sm:10}}  columns={{ xs: 4, sm: 8, md: 8 }} >
  {followers.map((follow,index)=>{
     return(
    <Grid item xs={2} sm={4} md={2} key={index}>
     <Follower key={follow.id} {...follow}/>
    </Grid>
     )
  })}
</Grid>
{!loading && (
  <Stack direction="row" spacing={2} sx={{flexWrap:"wrap"}}>
    <Button onClick={prevPage}>
      Prev
    </Button>
    {data.map((item,index)=>{
      return (
        //add the disabled
        <Button key={index} variant={selected === item?'contained':'outline'} onClick={()=> {clicks(item);handlePage(index)}}>
        {index+1}
        </Button>
      )
    })}
    <Button onClick={nextPage}>
              next
            </Button>
  </Stack>
)}
</Box>
   </Content>

  );
}

export default App;
