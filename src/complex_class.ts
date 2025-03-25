{
    interface Product{
        product_name: string;
        product_price: number;
        product_qty: number
    }

    interface Course{
        course_name: string;
        course_price: number;   
    }

    function isCourseProdcut(item: Product | Course){
        if((item as Course).course_name){
            console.log("This is a course");
        }else{
            console.log("This is a product");
        }    
    }

    class Seller<T> {
        public cart: T[] = [];

        addProduct(item: T): void{
            this.cart.push(item);
        }

        getCart(): T[]{
            return this.cart;
        }
    }

    let product: Product = {product_name: "Laptop", product_price: 50000, product_qty: 10};
    let course: Course = {course_name: "React", course_price: 5000};
    let seller = new Seller<Product>();
    let seller1 = new Seller<Course>();

    seller.addProduct(product);
    seller1.addProduct(course);

    isCourseProdcut(product);
}
