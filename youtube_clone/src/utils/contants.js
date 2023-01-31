import {BsCode, BsCollectionPlay, BsMusicNote, BsPlayBtn} from "react-icons/bs";
import {  BiMoviePlay } from "react-icons/bi";
import { SiGooglecast, SiYoutubegaming } from "react-icons/si";
import { IoIosFitness, IoIosSchool } from "react-icons/io";
import {GrHistory} from "react-icons/gr";
import { MdDeveloperMode, MdFaceRetouchingNatural, MdLiveTv, MdOutlineWatchLater, MdTheaterComedy } from "react-icons/md";
import { TbHanger } from "react-icons/tb";
import { IoFitnessSharp } from "react-icons/io5";
import { AiOutlineHistory } from "react-icons/ai";

export const sidet = [
    
    { name: 'Library', icon: <BsCollectionPlay size={20}/>, },
    { name: 'History', icon: <AiOutlineHistory size={20}/>, },
    { name: 'Your videos', icon: <BsPlayBtn size={20}/>, },
    { name: 'Watch later', icon: <MdOutlineWatchLater size={20}/>, },
   
];

export const categories = [
    // <BsCode/>
    { name: 'New videos', icon: <BsCode size={20}/>, },
    { name: 'Coding', icon:  <BsCode  size={20}/>, },
    { name: 'ReactJS', icon: <BsCode size={20}/>, },
    { name: 'NextJS', icon: <BsCode size={20}/>, },
    { name: 'Music', icon: <BsMusicNote  size={20}/> },
    { name: 'Education', icon: <IoIosSchool size={20}/> },
    { name: 'Podcast', icon: <SiGooglecast  size={20}/>, },
    { name: 'Movie', icon: <BiMoviePlay  size={20}/>, },
    { name: 'Gaming', icon: <SiYoutubegaming  size={20}/>, },
    { name: 'Live', icon: <MdLiveTv  size={20}/>, },
    { name: 'Sport', icon: <IoFitnessSharp size={20}/>, },
    { name: 'Fashion', icon: <TbHanger  size={20}/>, },
    { name: 'Beauty', icon: <MdFaceRetouchingNatural  size={20}/>, },
    { name: 'Comedy', icon: <MdTheaterComedy  size={20}/>, },
    { name: 'Gym', icon: <IoIosFitness  size={20}/>, },
    { name: 'Crypto', icon: <MdDeveloperMode  size={20}/>, },
  ];