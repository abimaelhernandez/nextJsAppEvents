import styles from "@/styles/Home.module.css";


export async function getStaticPath() {
 const {events_categories} = await import('../../../data/data.json')
const allPaths = events_categories.map((event: any) => ({
  return {
    params : {
      cat: event.id.toString()
    }
  }
}))

  // return {
  //   props: {
  //     title: 'Events Category Page',
  //     path : [
  //       {
  //         params: {
  //           cat: '123'
  //         }
  //       }
  //     ]
  //   }
  // }
}

const EventsCategoryPage = () => {
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <a href="/"> home </a>
          <a href="/about-us"> about us </a>
          <a href="/events"> events </a>
        </nav>
      </header>

      <div className="">
        <h1>Category page </h1>
        <a href="/events/london">event category index </a>
        <a href="">event category GG </a>
        <a href="">event 3 </a>
      </div>
    </>
  )
}

export default EventsCategoryPage;

