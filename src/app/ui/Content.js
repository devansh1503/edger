import { Photo } from "./subcomponents/Photo"
import { Quotes } from "./subcomponents/Quotes"
import { Wallpaper } from "./subcomponents/Wallpaper"

export const Content = ({
    type,
}) =>{
    switch(type){
        case "photography": return <div>
            <Photo/>
        </div>
        case "wallpaper": return <div>
            <Wallpaper/>
        </div>
        case "quotes": return <div>
            <Quotes/>
        </div>
    }
}