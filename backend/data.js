import bcrypt from 'bcryptjs';

const data = {

    users: [
        {
          name: 'Basir',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],

    products: [
        {
           
            name: 'Sensodyne toothpaste',
            image: '/images1/p1.jpg',
            price: 120,
            countInStock: 0,
            description: 'high quality product',

        },

        {
            
            name: 'Colgate Triple Action',
            image: '/images1/p2.jpg',
            price: 100,
            countInStock: 20,
            description: 'high quality product',

        },

        {

            
            name: 'EMOFORM-F',
            image: '/images1/p3.jpg',
            price: 90,
            countInStock: 30,
            description: 'high quality product',


        },

        {
            
            name: 'Oral-B',
            image: '/images1/p4.png',
            price: 220,
            countInStock: 30,
            description: 'high quality product',
        },

        {

           
            name: 'Crest Pro-Health',
            image: '/images1/p5.jpg',
            price: 120,
            countInStock: 30,
            description: 'high quality product',

        },
           
              

            
           
    ],
};
export default data;