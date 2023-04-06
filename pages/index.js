import { GetServerSideProps } from 'next';
import Link from "next/link";

const Index = ({data}) =>{
    console.log(data)
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
            <p style={{fontSize:"30px", color:'black', fontWeight:"bold"}}>Users</p>
            <div style={{display:'flex',flexDirection:'column',width:'1200px', alignItems:"center",  justifyContent:'center'}}>
                <ul style={{listStyle:'none'}}>
                {
                    data.map(({name,id})=>{
                        return (
                            <li style={{width:'1100px',fontSize:'20px',fontWeight:'bold', backgroundColor:'orange', color:'white',
                                height:'35px',border:'solid 0.1px black',display:'flex', alignItems:'center' }}>
                                <Link style={{textDecoration:"none"}} href={{
                                    pathname: name.toLocaleLowerCase(),
                                    query:{
                                        user_id:id
                                    }
                                }}
                                key={name}

                                ><p style={{margin:0}}>{name}</p></Link>

                            </li>
                        )
                    })
                }
                </ul>

            </div>
        </div>
    )
}


export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()


    return { props: { data } }
}

export default Index;