import React, { createContext, ReactNode, useContext, useState } from 'react'


// tipagem 
export type ShoppingCartType = {
    productCart: IProductCart[];
    addProduct: (id:number) => void;
    removeProduct: (id:number) => void;
    getItemQuantity: (id:number) => number;
    clearProduct: (id:number) => void;
    sumQuantity: () => number
}

// 5.1 - tipagem do useState
interface IProductCart {
    id: number,
    qtd: number
}

// 2.1 - tipagem das props da children
interface IChildrenProps {
    children: ReactNode
}


//  1 - criar função de contexto, para compartilhar com toda a aplicação

export const ShoppingCartContext = createContext<ShoppingCartType | null>(null);


//  2 -  export pra usar no App.tsx
//lógica das infos que irei compartilhar
export function ShoppingCartProvider ({ children }: IChildrenProps) {

    // 5 - array que vamos manusear e imprimir na tela
    const [productCart, setProductCart] = useState<IProductCart[]>([]);


    // 6 add Product
    function addProduct(id: number) {

        // 6.1 - procurar no carrinho se item existe
        const itemFound = productCart.find((item) => item.id === id);
        
        // 6.2 - não existe, find retorna undefined
        if( !itemFound ){
            // adicionar no carrinho
            console.log( 'não existe', id );
            setProductCart((itemFound) => [...itemFound, { id: id, qtd: 1 }]);
        }
        //  6.3 - existe, find retorna o objeto de array e somamos 1 a qtd 
        else{
            console.log( 'existe', id);
            itemFound.qtd += 1;
        }
        // no fina coloco tudo no carrinho
        // setProductCart(itemFound => [...itemFound]);  
        setProductCart(productCart => [...productCart]);  

        
    }

    // 7 - pegar qtd de cada item de id que cliquei id
    function getItemQuantity(id: number) {

        const itemFound = productCart.find( item => item.id === id);
        if( itemFound ){
            return itemFound.qtd;
        }  
        return 0;
    }


    // 8
    function removeProduct(id: number) {
        // verificar se o id clicado e o que consta no carrinho são iguais
        const itemFound = productCart.find( item => item.id === id);
        if( itemFound && itemFound.qtd > 1) {
            itemFound.qtd -= 1; 
            setProductCart((productCart) => [...productCart]);
        }
        else{
            clearProduct(id);
        }
        return;
    }

    // 9 - limpar produtos
    function clearProduct(id: number){
        const itemFound = productCart.find(item => item.id === id);
        if( itemFound ){
            const itemFiltered = productCart.filter( item => item.id !== id)
            setProductCart(itemFiltered);
        }
    }

    // 10 - somar quantidades de cada produto
    function sumQuantity(){
        let cartQuantity = 0

        if( productCart.length === 0) {
            cartQuantity = 0;
        };
        
        cartQuantity = productCart.reduce( (total, item) => {
            return total + item.qtd;
        }, 0)

        return cartQuantity;
    }


    //  3 - a variável que tem a createContext, criação do contexto,
    // é usada para ter acesso ao componente Provider
    // o atributo 'value' terá funções que vou ter lá no createContext
    return(
        <ShoppingCartContext.Provider
            value={{
                productCart,
                addProduct,
                removeProduct,
                getItemQuantity,
                clearProduct,
                sumQuantity
            }}
        >
            {/*  4 lógica da aplicação */}
            {children}
        </ShoppingCartContext.Provider>
    )
    
}