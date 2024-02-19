import { useNavigate, useParams } from "react-router-dom"
import { characters, defaultHero } from "../../utils/constants"
import { useContext, useEffect } from "react";
import { AppContext } from "../../utils/context";

export const withHeroId = (route: string) => (Component: React.FC<any>) => (props: any) => {
    let { heroId = defaultHero } = useParams();
    // useParams забирает динамические параметры в адресной строке
    // между /: ***** и /
    const { changeHero } = useContext(AppContext);
    // программный переход на новый адрес
    const navigate = useNavigate();

    heroId = characters[heroId] ? heroId : defaultHero;

    useEffect(() => {
        navigate(`/${route}/${heroId}`);
        changeHero(heroId);
    }, [heroId])

    return <Component heroId={heroId} {...props} />
}