import { put, takeLatest,call } from "redux-saga/effects";
import { getMovies,getPhotos, getUserByAge, getUserByName, getUserD, getUserRecords } from "../raw/api";
import * as actions from "./reducer";

function* getMovieList({payload}){
const response=yield call(getMovies,null)
if(response)
{
    yield put(actions.setMoviesData(response.movies))
}
else{
    console.log("No data")
}
}
function* getPhotosList({payload})
{
    const response=yield call(getPhotos,null)
    if(response)
    {
        yield put(actions.setPhotos(response))
    }
    else{
        console.log("No data")
    }
   
}
function* getUser({payload})
{   
    const response=yield call(getUserD,payload.name ,payload.age)
    if(response)
    {
        yield put(actions.setUserData(response))
    }
    else{
        console.log("No data")
    }
}
function* getUserRec({payload})
{  
   if(isNumber(payload.data))
    {
        const response=yield call(getUserByAge,payload.data)
        if(response)
        {
            yield put(actions.setUserRecords(response))
        }
        else{
            console.log("No data")
        }
    }
    else if(!isNumber(payload.data))
    {
        const response=yield call(getUserByName,payload.data)
        if(response)
        {
            yield put(actions.setUserRecords(response))
        }
        else{
            console.log("No data")
        }
    }
     if(Object.keys(payload).length==0){
        const response=yield call(getUserRecords,null)
        if(response)
        {
            yield put(actions.setUserRecords(response))
        }
        else{
            console.log("No data")
        }
    }
}
const isNumber=(n)=> 
 { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 
export default function* () {
    yield takeLatest(actions.getMovie ,getMovieList)
    yield takeLatest(actions.getPhotos,getPhotosList)
    yield takeLatest(actions.getUserData,getUser)
    yield takeLatest(actions.getUserRecords,getUserRec)
}

