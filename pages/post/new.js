import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import AppLayout from "../../components/AppLayout/AppLayout";

export default function NewPost() {

    const handleClick = async () => {
        const response = await fetch('/api/generatePost', {
           method: 'POST' 
        })
        const data = await response.json()
        console.log(data)
    }
    return (
       <div>
            <h1>New Post Page</h1>
            <button className="btn" onClick={handleClick}>Generate</button>
       </div> 
    );
  }
NewPost.getLayout = function getLayout(page, pageProps) {
    return <AppLayout {...pageProps}>{page}</AppLayout>
}

export const getServerSideProps = withPageAuthRequired(() => {
    return {
        props: {}
    }
})