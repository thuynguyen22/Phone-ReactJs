import React from 'react';
import {Link} from 'react-router-dom';

const CustomCard = ({product}) => {
    
    const to_slug = (str) => {
        str = str.toLowerCase();
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
     
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
     
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
     
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
     
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
        return str;
    }

    const addToBasket = (id) => {
        console.log(id);
        if(localStorage.getItem('basket')) {
            //add to basket
            let basket = JSON.parse(localStorage.getItem('basket'));
            basket.push(id);
            console.log(basket);
            localStorage.setItem('basket', JSON.stringify(basket));
        }
        else {
            //create => add to basket
            let basket = new Array();
            basket.push(id);
            localStorage.setItem('basket', JSON.stringify(basket));
        }
    }

    return (
        <>
            <div className="product category__products">
                <div className="product__header">
                    <img src={product.media.source} alt="product" />
                </div>
                <div className="product__footer">
                    <h3>{product.price.formatted_with_symbol}</h3>
                    <div className="product__price">
                    <h4>{product.name}</h4>
                    </div>
                </div>
                <ul>
                    <li>
                    <Link data-tip="Quick View" data-place="left" to={"detail" + "/" + product.id + "/" + to_slug(product.name)}>
                        <svg>
                        <use xlinkHref="./images/sprite.svg#icon-eye" />
                        </svg>
                    </Link>
                    </li>
                    <li>
                    <a data-tip="Add To Wishlist" data-place="left" href="#">
                        <svg>
                        <use xlinkHref="./images/sprite.svg#icon-heart-o"/>
                        </svg>
                    </a>
                    </li>
                    <li>
                    <a data-tip="Add To Compare" data-place="left" onClick={ () => addToBasket(product.id) }>
                        <svg>
                            <use xlinkHref="./images/sprite.svg#icon-cart-plus" />
                        </svg>
                    </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default CustomCard;