import {useRouter} from "next/router";



const UserPage = () =>{



}
export async function getServerSideProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()
    return { props: { data } }
}
export default UserPage;