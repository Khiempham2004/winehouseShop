import React from 'react';
import './Staticimage.css';
import { Link } from 'react-router-dom';
const Staticimage = () => {
    
    return (
        <div className='static-container'>
            <div>
                <div className="static-image">
                    <Link to='/'>
                        <img
                            src="https://bizweb.dktcdn.net/100/022/044/themes/895031/assets/banner_1.jpg?1753153258463"
                            alt="Rượu vang"
                            className="ruouvang  "
                        />
                    </Link>
                    {/* Overlay hiển thị khi hover */}
                    {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <h2 className="text-white text-2xl font-bold tracking-widest relative">
                        RƯỢU VANG
                        <span className="absolute inset-0 border-2 border-white m-2"></span>
                    </h2>
                </div> */}
                    <Link to='/'>
                        <img
                            src='https://bizweb.dktcdn.net/100/022/044/themes/895031/assets/banner_2.jpg?1753153258463'
                            alt='Rượu vang'
                            className='ruouvang'
                        />
                    </Link>
                </div>

                <div className='sake-static-image'>
                    <Link to='/'>
                        <img
                            src='https://bizweb.dktcdn.net/100/022/044/themes/895031/assets/banner_3.jpg?1753153258463'
                            alt='Rượu vang'
                            className='ruouvangsake'
                        />
                    </Link>
                    <Link to='/'>
                        <img
                            src='https://bizweb.dktcdn.net/100/022/044/themes/895031/assets/banner_4.jpg?1753153258463 '
                            alt='Rượu vang'
                            className='ruouvangsake'
                        />
                    </Link>
                </div>
            </div>

            <div>
                <Link to='/'>
                    <img
                        src='https://bizweb.dktcdn.net/100/022/044/themes/895031/assets/banner_5.jpg?1753153258463'
                        alt='Rượu vang'
                        className='ruouvangchivas'
                    />
                </Link>
            </div>
        </div>
    );
}

export default Staticimage;
