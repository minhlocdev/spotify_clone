import Chip from "@/components/Chip";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

export default function Home() {
  return ( 
    <div className="
      bg-neutral-900
      rounded-lg
      h-full
      w-full
      overflow-hidden
      overflow-y-auto
    ">
      <Header>
        <div>
          <h1
            className="
              text-white
              text-3xl
              font-semibold
            "
          >
            Welcome
          </h1>
          <div
            className="
              flex 
              items-center
              gap-x-2
              mt-2
            "
          >
            <Chip active={true} name="All"/>
            <Chip active={false} name="Music"/>
            <Chip active={false} name="Podcasts"/>
          </div>
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-3
              2xl:grid-cols-4
              gap-3
              mt-4
            "
          >
            <ListItem
              image="/images/like.jpg"
              name="Liked Songs"
              href="liked"
            />
            <ListItem
              image="/images/spotify-minimal-playlist-album-cover-cyan.jpg"
              name="Hot day vibes"
              href="hot-days-vibes"
            />       
            <ListItem
              image="/images/groovy.jpg"
              name="Groovy Vibes & Funky"
              href="groove-vibes-&-funky"
            />  
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Newest songs
          </h1>
        </div>
        <div>
          List of Songs
        </div>
      </div>
    </div>
  )
}
