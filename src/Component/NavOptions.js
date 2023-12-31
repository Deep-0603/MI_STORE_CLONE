import React,{useState,useEffect} from 'react';
import NavCard from "../Component/NavCard.js";
import "../styles/NavOptions.css";


const NavOptions = ({miPhones,redmiPhones,tv,laptop,fitness,home,audio,accessories}) => {
  const [miPhoneToggle,setmiPhoneToggle] = useState(false);
  const [redmiPhoneToggle,setredmiPhoneToggle] = useState(false);
  const [tvToggle,settvToggle] = useState(false);
  const [laptopToggle,setlaptopToggle] = useState(false);
  const [homeToggle,sethomeToggle] = useState(false);
  const [audioToggle,setaudioToggle] = useState(false);
  const [accessoriesToggle,setaccessoriesToggle] = useState(false);
  const [fitnessToggle,setfitnessToggle] = useState(false);
  

  useEffect(() => {
        if(window.location.pathname === "/#miphones")
        {return setmiPhoneToggle(true)}
        if(window.location.pathname === "/#redmiphones")
        {return setredmiPhoneToggle(true)}
        if(window.location.pathname === "/#tv")
        {return settvToggle(true)}
        if(window.location.pathname === "/#laptop")
        {return setlaptopToggle(true)}
        if(window.location.pathname === "/#home")
        {return sethomeToggle(true)}
        if(window.location.pathname === "/#audio")
        {return setaudioToggle(true)}
        if(window.location.pathname === "/#accessories")
        {return setaccessoriesToggle(true)}
        if(window.location.pathname === "/#lifestyle")
        {return setfitnessToggle(true)}
  },[])
  
    return (
    <div className='NavOptions'>
        {
            miPhoneToggle? miPhones.map((item,index) => (
                <NavCard name = {item.name} price = {item.price} image = {item.image} index = {index} key = {item.image}/>
            )) : null
        }

        {
            redmiPhoneToggle? redmiPhones.map((item,index) => (
                <NavCard name = {item.name} price = {item.price} image = {item.image} index = {index} key = {item.image} />
            )) : null
        }

        {
            tvToggle? tv.map((item,index) => (
                <NavCard name = {item.name} price = {item.price} image = {item.image} index = {index} key = {item.image}/>
            )) : null
        }

        {
            laptopToggle? laptop.map((item,index) => (
                <NavCard name = {item.name} price = {item.price} image = {item.image} index = {index} key = {item.image}/>
            )) : null
        }

        {
            fitnessToggle? fitness.map((item,index) => (
                <NavCard name = {item.name} price = {item.price} image = {item.image} index = {index} key = {item.image}/>
            )) : null
        }
        {
            homeToggle? home.map((item,index) => (
                <NavCard name = {item.name} price = {item.price} image = {item.image} index = {index} key = {item.image}/>
            )) : null
        }

        {
            audioToggle? audio.map((item,index) => (
                <NavCard name = {item.name} price = {item.price} image = {item.image} index = {index} key = {item.image}/>
            )) : null
        }

        {
            accessoriesToggle? accessories.map((item,index) => (
                <NavCard name = {item.name} price = {item.price} image = {item.image} index = {index} key = {item.image}/>
            )) : null
        }
      
    </div>
  );
}

export default NavOptions;
