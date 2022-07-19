import React,{useState} from 'react'
import Displaydata from './Displaydata';
function Showprofile() {
    const [userName,setUserName] = useState("");
    const [data,setData] = useState({});
    const [repoData,setRepoData] = useState([]);



    const onChangeHandler =(e)=>{
        setUserName(e.target.value)
    }

    const onSubmitHandler =(e)=>{
        e.preventDefault();
        fetch(`https://api.github.com/users/${userName}`)
        .then((response)=>{
          return response.json();
        }).then((originalData)=>{
          if(originalData){
            setData(originalData);
            console.log(data);
          }
        })
    }

    async function repoDataURL(){
        await fetch(`https://api.github.com/users/${userName}/events`)
        .then((res) => res.json())
        .then(
            (result)=>{
                console.log(result);
                const list = result.map((item)=>(
                   
                    <div className="text-center">
                        <a target ="blank" href={item.svn_url}>
                            {item.created_at}
                           
                        </a>
                        
                    </div>
                  

                ));
                setRepoData(list);
                console.log(repoData.item.type);
            },
            (error) =>{
                console.log(error);
                
               
            }
            
            );
            
    }
    // console.log(repoData);
    // console.log(repoData);



    return (
        <>
        <div className="container my-5" >
            <div className="row mt-auto">
                <div className="col-lg-8 col-sm-12 text-center mx-auto">
                    <h1 className="display-4 mb-3">Find your Github profile</h1>
                </div>
            </div>
            <div className="row">
                
                <div className="col-md-6 mx-auto text-center">
                    <div className="row mb-5 justify-content-center">
                        <form id="myform" autoComplete='off' onSubmit={onSubmitHandler}>
                         <div className="col-lg-8 col-sm-12 my-2 form-group">
                            <input className="form-control form-control-lg" placeholder="Github username" type={userName} id="w"  onChange={onChangeHandler}/>
                        </div>
                        <div className="col-lg-3 col-sm-12 my-2 form-group">
                            <button className="btn btn-primary btn-block w-100 btn-lg">Search</button>
                            
                        </div>
                        </form>
                        
                    </div>


               
                </div>
            </div>
        </div>
        <Displaydata data={data}></Displaydata>
    
   
        <button className='btn btn-primary btn-block w-100 btn-lg' onClick={repoDataURL}>Recent repostroies</button>
       
       
       
        </>

    )
};

export default Showprofile;