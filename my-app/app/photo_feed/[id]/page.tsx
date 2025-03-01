import Images from "../images";
import Image from "next/image";


type Props = {
    params : Promise<{ id : string}>
}

export default async function ImagePage({
    params,
}: Props){
  
    const {id} = await params;
    const photo = Images.find((p) => p.id === id)
    return(
        <div>
            <Image
            src={photo.src}
            alt = {photo.name}
            width={400}
            height={500}
            />
        </div>
    );
}