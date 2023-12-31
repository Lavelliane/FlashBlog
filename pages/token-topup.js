import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import AppLayout from "../components/AppLayout/AppLayout";
import axios from "axios";
import { getAppProps } from "../utils/getAppProps";

export default function TokenTopup() {

  async function handleClick(){
    const result = await axios.post('/api/addTokens')
    console.log(result);
    window.location.href = result.data.session.url
  }
  return (
    <div>
      <h1>Token top-up</h1>
      <button className="btn" onClick={handleClick}>Add tokens</button>
    </div>
  )
}
TokenTopup.getLayout = function getLayout(page, pageProps) {
    return <AppLayout {...pageProps}>{page}</AppLayout>
}
export const getServerSideProps = withPageAuthRequired(
  {
    async getServerSideProps(ctx) {
      const props = await getAppProps(ctx)
      return {
        props
      }
    }
  }
)