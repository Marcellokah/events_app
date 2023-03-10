import Image from 'next/image';
import Link from 'next/link';

const EventsPage = ({ data }) => {
    return (
        
            <div className='events_page'>
                {data.map((ev) => (
                    <Link className='card' key={ev.id} href={`/events/${ev.id}`} passHref>
                        <Image src={ev.image} alt={ev.title} width={300} height={200} />
                        <h2>{ev.title}</h2>
                    </Link>
                ))}
            </div>
    );
}

export default EventsPage;

export async function getStaticProps() {
    const { events_categories } = await import('/data/data.json');

    return {
        props: {
            data: events_categories
        }
    }
}