import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/fe53f937c3f6e5885fb30c39a65dad2b~c5_300x300.webp?lk3s=a5d48078&x-expires=1708671600&x-signature=wOlOP9QaBdTYeRdBJ%2BxdW2rX4P4%3D"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>tintomtom</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>Hoang Namm</span>
            </div>
        </div>
    );
}

export default AccountItem;
