import styles from "@/styles/Home.module.css";
import Image from "next/image";

export async function getStaticProps() {
  const {events_categories} = await import('../../data/data.json') 
  console.log('inside getStaticProps', events_categories);
  return {
    props: {
      title: 'Events Page',
      data: JSON.parse(JSON.stringify(events_categories))
    },
  }
}

interface EventProps {
  title : string;
  data : any;
}

const EventsPage = ({ title, data}: EventProps) => {
console.log('inside EventsPage', data);
  return (
    <>
    <header>
      <nav className={styles.nav}>
        <a href="/"> home </a>
        <a href="/about-us"> about us </a>
        <a href="/events"> events </a>
      </nav>
    </header>

    <div className={styles.content}>

      <h1 className={styles.content_title}>Events Title {title }</h1>
      
      <div>
        {data && data.map((item: any, i: number) => {
          return (
            <>
            <a href={`/events/${item.id}`} key={item.id}>
              <Image 
                src={item.image} 
                alt={item.title}
                width={300}
                height={300}
              />
              <h2>
                {item.title}
              </h2>
            </a>
           </>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default EventsPage;
