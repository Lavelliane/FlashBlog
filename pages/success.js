import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import AppLayout from "../components/AppLayout/AppLayout";
import axios from "axios";
import { getAppProps } from "../utils/getAppProps";

export default function Success() {
  
  return (
    <div>
      <h1>Payment Success</h1>
    </div>
  )
}
Success.getLayout = function getLayout(page, pageProps) {
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