import { Component } from 'preact';
import style from './style';
import logo from '../../images/io.svg';
import heroImage from '../../images/hero-image.jpg';

export default class HeroBlock extends Component {
    render() {
        return (
            <section class={style.hero}>
                <div class={style.details}>
                    <img class={style.logo} src={logo} alt="Google I/O Logo" />
                    <h2 class={style.description}>
                        I/O brings together developers from around the globe for talks, hands-on
                        learning with Google experts, and a first look at Google’s latest developer products.
                    </h2>
                </div>

                <img class={style.heroImage} src={heroImage} alt="Google I/O Extended Cebu 2019" />
            </section>
        );
    }
}
