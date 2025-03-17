// Context API 이용하기 위한 import

import { createContext, useState } from "react";

const data = [
    {
        title: "Psycho",
        artist: "Red Velvet",
        releaseDate: "2019.12.23",
        gender: "female",
    },
    {
        title: "Feel My Rhythm",
        artist: "Red Velvet",
        releaseDate: "2022.03.21",
        gender: "female",
    },
    {
        title: "Beatbox",
        artist: "NCT DREAM",
        releaseDate: "2022.05.30",
        gender: "male",
    },
    {
        title: "Attention",
        artist: "NewJeans",
        releaseDate: "2022.08.01",
        gender: "female",
    },
    {
        title: "Rush Hour",
        artist: "Crush (feat. j-hope of BTS)",
        releaseDate: "2022.09.22",
        gender: "male",
    },
];

    const [playlist, setPlaylist] = useState(data);
    
return (
    <>
        <h1>K-POP 플레이 리스트</h1>
        <Main data={data} playlist={playlist} setPlaylist={setPlaylist} />
    </>
);


// cerateContext()를 사용하여 context 객체 생성
const KPopContext = createContext();

// Provider 컴포넌트를 리턴하는 KPopContextProvider를 생성
const KPopContextProvider = ({Children}) => {
    const [playlist, setPlaylist] = useState(data);

    return (
        <KPopContextProvider value={{data, playlist, setPlaylist}}>
            {children}
        </KPopContextProvider>
    );
}

export {KPopContext, KPopContextProvider};