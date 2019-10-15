import ButtonLink from '../button-link';
import event from '../../data/event.json';
import style from './style';

const PhotoGrid = () => (
    <div class={style.photoGrid}>
        <picture>
            <source src="/assets/gallery/9.webp" type="image/webp" />
            <img src="/assets/gallery/9.jpg" />
        </picture>
        <picture>
            <source src="/assets/gallery/10.webp" type="image/webp" />
            <img src="/assets/gallery/10.jpg" />
        </picture>
        <picture>
            <source src="/assets/gallery/11.webp" type="image/webp" />
            <img src="/assets/gallery/11.jpg" />
        </picture>
        <picture>
            <source src="/assets/gallery/12.webp" type="image/webp" />
            <img src="/assets/gallery/12.jpg" />
        </picture>
        <picture>
            <source src="/assets/gallery/13.webp" type="image/webp" />
            <img src="/assets/gallery/13.jpg" />
        </picture>
        <picture>
            <source src="/assets/gallery/14.webp" type="image/webp" />
            <img src="/assets/gallery/14.jpeg" />
        </picture>
        <picture>
            <source src="/assets/gallery/15.webp" type="image/webp" />
            <img src="/assets/gallery/15.jpg" />
        </picture>
        <picture>
            <source src="/assets/gallery/16.webp" type="image/webp" />
            <img src="/assets/gallery/16.jpg" />
        </picture>

        <section class={style.content}>
            <h3>{event.past_event.hashtag} highlights</h3>
            <p>Last year's festival built lots of excitement. Check out photos from featured talks, hands-on learning sessions, and after-hours fun.</p>

            <ButtonLink href={event.past_event.gallery_url}>
                See all photos
            </ButtonLink>
        </section>
    </div>
);

export default PhotoGrid;
