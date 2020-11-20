// Styles components
import { Layout } from './styles';
import { HeartIcon, PlayIcon } from "shared/icons"
// import { useThemeContext } from 'services/theme-service';
import { Information, Left, Middle, Right } from "./containers"
import {useSocket} from "services/socket-service"

const Player = () => {

    const song = useSocket()

    return (
        <Layout>



            <Right>
                
            <img src={song.album && song.album.images[0].url } width="80px" height="80px" />
                
                <Information>
                    <p>{song.title}</p>
                    <p>{song.artist && song.artist[0].name }</p>
                </Information>

            </Right>

            <Middle>

                <PlayIcon />
            
                <HeartIcon/> 

                <div>volume</div>

            </Middle>

            <Left>Server</Left>

        </Layout>
    )
};


export default Player;
