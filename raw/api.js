import config from "../config";
export const getMovies = async () =>{
    try {
    
            const response = await fetch('https://reactnative.dev/movies.json');
            const json=await response.json();
               return json;
        
       
    } catch (error) {
        console.log(error);
    }
       
    }
export const getPhotos=async ()=>{
    try {
          const response=await fetch('https://jsonplaceholder.typicode.com/photos');
          const json=await response.json();
          return json;
    }catch (error)
    {
        console.log(error);
    }
}    
export const getUserD=async (Name,Age)=>{
    try {
          await fetch(`${config.serverUrl}/api/post`, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: Name,
              age: Age,
            }),
          }) .then((resp) => {return resp.json()})
          .then(res=>{
             console.log("Response : "+JSON.stringify(res))
               
          })
          .catch((e)=>{
            console.log("Error :: "+e)
          });
         
    }catch (error)
    {
        console.log(error);
    }
}  
export const getUserRecords=async ()=>{
    try {
        console.log("Here in Re")
          const response=await fetch(`${config.serverUrl}/api/getAll`);
          const json=await response.json();
          return json;
    }catch (error)
    {
        console.log(error);
    }
}      
export const getUserByName=async (name)=>{
    try {
          const response=await fetch(`${config.serverUrl}/api/getByName/`+name);
          const json=await response.json();
          return json;
    }catch (error)
    {
        console.log(error);
    }
}      
export const getUserByAge=async (age)=>{
    try {
          const response=await fetch(`${config.serverUrl}/api/getByAge/`+age);
          const json=await response.json();
          return json;
    }catch (error)
    {
        console.log(error);
    }
}      
export const deleteByName=async (name)=>{
    try {  
          const response=await fetch(`${config.serverUrl}/api/delete/`+name,{
            method: 'DELETE',
          });
          const json=await response.json();
          return json;
    }catch (error)
    {
        console.log(error);
    }
}      