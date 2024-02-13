const db = require('../db')
const { Computer, Spec } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async() => {
    const macBookPro = await Computer.findOne({ name: 'Mac Book Pro' }) 
    const macBookAir = await Computer.findOne({ name: 'Mac Book Air' }) 
    const surfacePro = await Computer.findOne({ name: 'Surface Pro 9' }) 
    const aspireIntel = await Computer.findOne({ name: 'Aspire Intel' }) 

    const specs = [
        {
            chip: 'M3',
            memory: '8GB',
            size_in_inches: '14"',
            year: 2023,
            price: 1599.00,
            img_path: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534640_sd.jpg;maxHeight=640;maxWidth=550',
            computerId: macBookPro._id
        },
        {
            chip: 'M3 Pro',
            memory: '36GB',
            size_in_inches: '16"',
            year: 2023,
            price: 2899.00,
            img_path: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534617_sd.jpg;maxHeight=640;maxWidth=550',
            computerId: macBookPro._id
        },
        {
            chip: 'M2',
            memory: '8GB',
            size_in_inches: '13.6"',
            year: 2023,
            price: 949.00,
            img_path: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509650_sd.jpg;maxHeight=640;maxWidth=550',
            computerId: macBookAir._id
        },
        {
            chip: 'M2',
            memory: '16GB',
            size_in_inches: '15"',
            year: 2023,
            price: 1399.00,
            img_path: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534606_sd.jpg;maxHeight=640;maxWidth=550',
            computerId: macBookAir._id
        },
        {
            chip: 'Intel i5',
            memory: '16GB',
            size_in_inches: '13"',
            year: 2023,
            price: 1539.99,
            img_path: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6560/6560599cv11d.jpg;maxHeight=640;maxWidth=550',
            computerId: surfacePro._id
        },
        {
            chip: 'Intel Evo Platform Core i7',
            memory: '256GB',
            size_in_inches: '13"',
            year: 2023,
            price: 1199.99,
            img_path: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6517/6517639_sd.jpg;maxHeight=640;maxWidth=550',
            computerId: surfacePro._id
        },
        {
            chip: 'Intel i5',
            memory: '16GB',
            size_in_inches: '14"',
            year: 2023,
            price: 849.99,
            img_path: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6551/6551127_sd.jpg;maxHeight=640;maxWidth=550',
            computerId: aspireIntel._id
        },
        {
            chip: 'Intel i7',
            memory: '16GB',
            size_in_inches: '15.6"',
            year: 2023,
            price: 999.99,
            img_path: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6551/6551125_sd.jpg;maxHeight=640;maxWidth=550',
            computerId: aspireIntel._id
        },
    ]
    await Spec.insertMany(specs)
    console.log('Inserted specs')
}

const run = async() => {
    await main()
    db.close()
}
  
run()