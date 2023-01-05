import {useEffect} from 'react';

const Title = (props) => {
    useEffect(() =>{
      document.title= props.title;
    }, []);     
   }

   export default Title;