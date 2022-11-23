import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const URL = 'https://api.thecatapi.com/v1/images/search'
const API_KEY = ''

export default function KittyOfTheDay(){
    const [image, setImage] = useState('');
    const [breed, setBreed] = useState(0);
    const [description, setDescription] = useState(0);

    useEffect(() => {
        const address = URL+'?has_breeds=true&'+'size=med&'+'api_key='+API_KEY
        console.log(address)

        axios.get(address)
        .then((response) => {
            console.log(response.data[0]);
            setImage(response.data[0].url);
            setBreed(response.data[0].breeds[0].name);
            setDescription(response.data[0].breeds[0].description)
        }).catch(error => {
            alert(error);
        });
    }, [])

    return(

        <div className="picture">
        <img src={image} alt = 'kitty' />
        <h1>This playfull furball's breed is {breed}. Say hi!</h1>

        <h3>{description}</h3>
        </div>
    )

}
