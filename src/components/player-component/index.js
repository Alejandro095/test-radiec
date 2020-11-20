// Styles components
import { Layout } from './styles';
import { HeartIcon, PlayIcon } from "shared/icons"
// import { useThemeContext } from 'services/theme-service';
import { Information, Left, Middle, Right } from "./containers"
import {useSocket} from "services/socket-service"

import usePlayer from 'hooks/use-player';

import Range from 'react-range-progress';


const Player = () => {

    const song = useSocket()
    const play = usePlayer();

    const handler = () =>{}

    return (
        <Layout>

            <Right>
                
            <img src={song.album && song.album.images[0].url} width="80px" height="80px" />
                
                <Information>
                    <p>{song.title}</p>
                    <p>{song.artist && song.artist[0].name }</p>
                </Information>

            </Right>

            <Middle>

                <PlayIcon onClick={play} />
            
                <HeartIcon/> 

                <div>

                <Range
                    value={25}
                    fillColor={{
                        r: 0,
                        g: 198,
                        b: 94,
                        a: 1,
                    }}
                    trackColor={{
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0.25,
                    }}
                    height={6}
                    width="100%"
                    onChange={handler} />
                </div>

            </Middle>

            <Left>Server</Left>

        </Layout>
    )
};


export default Player;
