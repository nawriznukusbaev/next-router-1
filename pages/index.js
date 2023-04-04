import { GetServerSideProps } from 'next';
import Link from "next/link";

const Index = ({data}) =>{
    console.log(data)
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
            <p style={{fontSize:"30px", color:'black', fontWeight:"bold"}}>Users</p>
            <div style={{display:'flex',flexDirection:'column',width:'500px',height:"auto", alignItems:"center", border:'solid 2px black'}}>
                {
                    data.map(({name,id})=>{
                        return (
                            <p style={{fontSize:'20px',fontWeight:'bold', color:'blue', height:'25px',border:'solid 2px black'}}>
                                <Link href={{
                                    pathname: name.toLocaleLowerCase().replaceAll(/ /gi, ''),
                                    query:{
                                        user_id:id
                                    }
                                }}
                                key={name}

                                >{name}</Link>

                            </p>
                        )
                    })
                }

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