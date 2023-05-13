import { MovieDetailState, MovieState } from "../../store/movies/type";

export interface MovieListProps{
    list: MovieState[];
    onHandleClick: (_title:string)=>void;
    title:string;
}

export interface MovieDetailsProps{
    details:MovieDetailState;
}

export interface MovieSearchWrapperPropd{
    inputValue:string;
    onChange:(_event:React.ChangeEvent<HTMLInputElement>)=>void;
    onClickItem:(_value:string)=>void;
    selectedValue:string;
}