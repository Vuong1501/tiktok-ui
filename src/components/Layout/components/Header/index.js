import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import styles from './Header.module.scss';
import images from '~/assets/images';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>

                <img src={images.logo} alt="tiktok" className={cx('logo-img')} />

                <div className={cx('search')}>
                    <input placeholder='Search accounts and videos' spellCheck={false} />
                    <button className={cx('clear')}>
                        {/* Clear */}
                        <FontAwesomeIcon icon={faCircleXmark} />

                    </button>

                    {/* Loading icon */}
                    <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

                    <button className={cx('search-btn')}>
                        {/* Search icon */}
                        <FontAwesomeIcon icon={faMagnifyingGlass} />

                    </button>
                </div>

                <div className={cx('actions')}>


                </div>
            </div>
        </header>

    );
}

export default Header;