import Modal from "@/app/_components/modal";
import Images from "@/app/photo_feed/images";
import Image from "next/image";

type Props = {
    params : Promise<{ id : string}>
}

export default async function({
    params,
} : Props ){
  
    const {id} = await params;
    const photo = Images.find((p) => p.id === id);

    return(
        <Modal>
              <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
        </Modal>
    )

    
}