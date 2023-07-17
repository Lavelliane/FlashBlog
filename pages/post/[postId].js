import { withPageAuthRequired } from "@auth0/nextjs-auth0";

function Post() {
  return (
    <div>This is the post page</div>
  )
}
export default Post

export const getServerSideProps = withPageAuthRequired(() => {
    return {
        props: {}
    }
})