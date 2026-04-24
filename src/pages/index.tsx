export async function getServerSideProps() {
    return {
        redirect: {
            destination: '/categoria',
            permanent: false,
        }
    }
}

export default function Index(){
    return null
}