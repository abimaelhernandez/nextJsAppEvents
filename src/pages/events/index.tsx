// import { getServerSideProps } from "next/dist/build/templates/pages";

import { title } from "process";

interface EventProps {
  title : string;
}

const EventsPage = ({ title }: EventProps) => {

  return (
    <>
    <div>
      <h1>Events Page {title }</h1>
      <div>
        <a href="">
          <h1>
            Events london
          </h1>
        </a>
        <a href="">
          <h1>
            Events San Francisco
          </h1>
        </a>
        <a href="">
          <h1>
            Events in barcelona 
          </h1>
        </a>
      </div>
    </div>
    </>
  )
}

export default EventsPage;


export async function getServerSideProps() {
  return {
    props: {
      title: 'events title'
    },
  }
}