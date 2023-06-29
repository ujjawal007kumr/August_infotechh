const SSR = ({serverRenderedData}) => {
  return (
    <div>
        <h1>Server-Side Rendering Example</h1>
        <p>{serverRenderedData}</p>
    </div>
  );
};

export async function getServerSideProps() {
    const serverRenderedData = 'This data was rendered on the server';

    return {
        props :{
            serverRenderedData,
        },
    };
}

export default SSR;