export interface Cart{
    items : Array<CartItem>;
}
export interface CartItem{
    p_desc : string;
    p_name : string;
    p_price : number;
    p_quantity: number;
    p_id : number
}