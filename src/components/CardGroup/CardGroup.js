import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        {id:1 ,name:'Laptop', price:12500},
        {id:2 ,name:'Laptop pro', price:12500},
        {id:3 ,name:'Laptop legand', price:12500}
    ]
    return (
        <div>
            <h2>This is my cards</h2>
            <div className="card-group">
                {
                    products.map(product => <Card 
                        key={product.id} 
                        product ={product}
                        ></Card>)
                }
</div>
        </div>
    );
};

export default CardGroup;