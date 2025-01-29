import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Menu.module.css';
import { menuData } from './menu.data';
import MenuItem from './Menu-item/MenuItem';
import { SearchMenu } from '../Search/Search';
import Cart from '../Cart/Cart';

export const Menu: FC = () => {
    return (
        <div>
            <div className={styles.container}>
                <Link href='/'>
                    <Image
                        src='/logo.png' 
                        alt='Logo' 
                        width={100} 
                        height={100} 
                        className={styles.logo}
                    />
                </Link>
                <SearchMenu className={styles.search} />
                <button className={styles.button}>Hello</button>
                <div className={styles.sidepanel}>
                    {menuData.map((item) => (
                        <MenuItem key={item.link} item={item} />
                    ))}
                </div>
                <div className={styles.cart}>
                    <Cart />
                </div>
            </div>
        </div>
    );
};
