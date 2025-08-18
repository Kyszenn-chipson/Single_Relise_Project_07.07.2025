const cars = [
    {
        id: 'lexus-lfa', brand: 'Lexus', model: 'LFA', year: 2010, price: 750000, mileage: 15000, bodyType: 'Купе',
        description: 'Легендарний суперкар початку 10-их років. Ручна збірка, унікальний звук двигуна V10.',
        image: [
            'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/09q4/300860/2012-lexus-lfa-review-car-and-driver-photo-302743-s-original.jpg',
            'https://mag.lexus.co.uk/wp-content/uploads/sites/3/2015/12/Lexus-LFA-with-Vossen-Forged.jpg',
            'https://images.pistonheads.com/nimg/49230/mceu_13704452231732103158681.jpg'
        ],
        specs: {
            enginePowerHp: 552, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'lexus-lfa@cars.com'
        }
    },
    {
        id: 'jaguar-f-type', brand: 'Jaguar', model: 'F-Type R', year: 2015, price: 85000, mileage: 40000, bodyType: 'Купе',
        description: 'Рідкісний суперкар зі своїм шармом та потужним двигуном.',
        image: [
            'https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/d9b636c2ec84ddc3bc7f2eb32861b39bdd5f9683/photos/KYzOOgQE-lmqeKNIDel-(edit).jpg?t=168463055753',
            'https://media.autoexpress.co.uk/image/private/s--BMSAV-AJ--/f_auto,t_content-image-full-mobile@1/v1563183432/autoexpress/2018/01/2_13.jpg',
            'https://img.sm360.ca/images/article/dilawri-group-of-companies/48135//17_jaguar_f_type_r_coupe_002001529261022596.jpg'
        ],
        specs: {
            enginePowerHp: 550, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'jaguar-f-type@cars.com'
        }
    },
    {
        id: 'jaguar-xkr', brand: 'Jaguar', model: 'XKR', year: 2008, price: 45000, mileage: 70000, bodyType: 'Купе',
        description: 'Захопливе поєднання потужності та вишуканої розкоші.',
        image: [
            'https://www.tradeclassics.com/wp-content/uploads/2021/04/2008-Jaguar-XKR-S-Black-Featured-1.jpg',
            'https://www.tradeclassics.com/wp-content/uploads/2021/04/2008-Jaguar-XKR-S-Black-Featured-1-19.jpg',
            'https://www.ultimatecarpage.com/images/car/3637/Jaguar-XKR-S-28739.jpg'
        ],
        specs: {
            enginePowerHp: 420, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'jaguar-xkr@cars.com'
        }
    },
    {
        id: 'mazda-rx8', brand: 'Mazda', model: 'RX8', year: 2009, price: 18000, mileage: 120000, bodyType: 'Купе',
        description: 'Роторна революція. Унікальний спортивний автомобіль.',
        image: [
            'https://www.supercars.net/blog/wp-content/uploads/2016/04/717899.jpg',
            'https://ireland.apollo.olxcdn.com/v1/files/vzdv5othvdmk3-UA/image;s=1000x750',
            'https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/576000/0/576078.jpg'
        ],
        specs: {
            enginePowerHp: 232, fuelType: 'Бензин', transmission: 'Механічна'
        },
        contact: {
            phone: '+380974754398', email: 'mazda-rx8@cars.com'
        }
    },
    {
        id: 'dodge-charger-srt8', brand: 'Dodge', model: 'Charger SRT8', year: 2008, price: 35000, mileage: 85000, bodyType: 'Седан',
        description: 'Сідай за кермо. Відроджуйся. Американська мрія на чотирьох колесах.',
        image: [
            'https://live.staticflickr.com/3316/3326907992_a3f579c00f_b.jpg',
            'https://cdn.dealeraccelerate.com/ab/1/797/27656/1920x1440/2008-dodge-charger-srt8',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/2008_silver_Dodge_Charger_SRT-8_rear.JPG/2560px-2008_silver_Dodge_Charger_SRT-8_rear.JPG'
        ],
        specs: {
            enginePowerHp: 425, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'dodge-charger@cars.com'
        }
    },
    {
        id: 'lamborghini-gallardo', brand: 'Lamborghini', model: 'Gallardo', year: 2012, price: 180000, mileage: 25000, bodyType: 'Купе',
        description: 'Один з легендарних авто компанії Lamborghini з прекрасним двигуном V10.',
        image: ['https://hips.hearstapps.com/hmg-prod/images/gallardo-31-6442d3da29a30.jpg',
                'https://images.pistonheads.com/nimg/48830/mceu_9251263951722602515398.jpg',
                'https://images.pistonheads.com/nimg/43339/lamborghini-gallardo-v10-coupe-S4265942-5.jpg',
                'https://news.dupontregistry.com/wp-content/uploads/2017/05/lamborghini-gallardo-522017-1-1.jpg',
                'https://ca-times.brightspotcdn.com/dims4/default/5e7d352/2147483647/strip/true/crop/600x400+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F85%2F3b%2F9a26b37781da2d78ec3da850e1b5%2Fla-fi-moco-autos-lamborghini-gallardo-main-shot'
        ],
        specs: {
            enginePowerHp: 550, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'lamborghini-gallardo@cars.com'
        }
    },
    {
        id: 'lamborghini-murcielago', brand: 'Lamborghini', model: 'Murcielago LP640-4 Coupe', year: 2007, price: 250000, mileage: 20000, bodyType: 'Купе',
        description: 'Один з легендарних авто компанії Lamborghini з прекрасним двигуном V12.',
        image: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Gray_Lamborghini_LP640.jpg/1200px-Gray_Lamborghini_LP640.jpg',
                'https://cdn.prod.website-files.com/662e6423ff88861916362956/682d18e3136df728bed2013d_gallery_image_17-1747785950541.webp',
                'https://cdn.motor1.com/images/mgl/zxVr84/s1/93611451-d830-4126-89b2-31fa9a95d949.jpg',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Lamborghini_Murci%C3%A9lago_LP-640_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2840%29.jpg/960px-Lamborghini_Murci%C3%A9lago_LP-640_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2840%29.jpg',
                'https://www.europeanprestige.co.uk/blobs/stock/641/images/a4226246-ad43-4260-86a4-b0c883626920/lamborghini-15.jpg?width=2000&height=1333',
                'https://spots.ag/2025/02/04/lamborghini-murcielago-lp670-4-superveloce-92c87-c466404022025002943_1.jpg?1738625416',
                'https://www.alainclass.com/wp-content/uploads/2017/10/1170-LAMBORGHINI-MUR-VERSACE-630-12-copy.jpg'
        ],
        specs: {
            enginePowerHp: 631, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'lamborghini-murcielago@cars.com'
        }
    },
    {
        id: 'lamborghini-huracan', brand: 'Lamborghini', model: 'Huracan Spyder', year: 2018, price: 280000, mileage: 10000, bodyType: 'Кабріолет',
        description: 'Авто, натхнене іспанським бійцівським биком.',
        image: ['https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/10375019/20180307_lambo_huracanspyder_vladsavov12.jpg?quality=90&strip=all&crop=16.666666666667,0,66.666666666667,100',
                'https://upload.wikimedia.org/wikipedia/commons/c/ca/2017_Lamborghini_Huracan_LP610.jpg',
                'https://www.lux-mag.com/wp-content/uploads/2024/02/Lambo-Feature.jpg'],
        specs: {
            enginePowerHp: 610, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'lamborghini-huracan@cars.com'
        }
    },
    {
        id: 'nissan-gt-r', brand: 'Nissan', model: 'GT-R R35', year: 2020, price: 110000, mileage: 5000, bodyType: 'Купе',
        description: 'Ікона сучасних спортивних авто, що ламає стереотипи.',
        image: ['https://i.infocar.ua/i/12/5057/1200x800.jpg',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Nissan_GT-R_front.jpg/1200px-Nissan_GT-R_front.jpg',
                'https://www.stratstone.com/-/media/stratstone/spotlight/nissan-gt-r-nismo/carousel/nissan-gtr-exterior-driving-1920x774px.ashx',
                'https://maxtondesign.com/hpeciai/bb6f7572cced84a29b17ef9489205f35/eng_pl_Rear-Splitter-with-vertical-bars-Nissan-GTR-R35-Facelift-19060_6.jpg',
                'https://i.pinimg.com/736x/99/f4/b6/99f4b6fb60be8234082e0e942ba800f7.jpg',
                'https://images.app.ridemotive.com/u9d60fgh6o9a0ts2huph2vuqyg0m'
        ],
        specs: {
            enginePowerHp: 565, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'nissan-gt-r@cars.com'
        }
    },
    {
        id: 'nissan-370z', brand: 'Nissan', model: '370Z', year: 2017, price: 32000, mileage: 30000, bodyType: 'Купе',
        description: 'Потужність, Пристрасть, Продуктивність в одному флаконі.',
        image: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Nissan_370Z.JPG/960px-Nissan_370Z.JPG',
                'https://cdn11.bigcommerce.com/s-0d425/images/stencil/2048x2048/products/933/3729/user13639_pic32349_1304115571__05053.1407506789.jpg?c=2',
                'https://hips.hearstapps.com/hmg-prod/images/370z-project-clubsport-23-2-1540827534.jpg?crop=1xw:0.9204545454545454xh;center,top&resize=1200:*',
                'https://wieck-nissanao-production.s3.amazonaws.com/photos/8ba450c6109c3e0debfa03cf63dacd85acbc3352/preview-928x522.jpg',
                'https://i.infocar.ua/i/12/2257/1400x936.jpg'
        ],
        specs: {
            enginePowerHp: 332, fuelType: 'Бензин', transmission: 'Механічна'
        },
        contact: {
            phone: '+380974754398', email: 'nissan-370z@cars.com'
        }
    },
    {
        id: 'porsche-911', brand: 'Porsche', model: '911 Turbo S (992)', year: 2022, price: 250000, mileage: 2000, bodyType: 'Купе',
        description: 'Унікальний авто зі своєю унікальною історією та неперевершеною динамікою.',
        image: ['https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ijsxlvQB.bu8/v0/-1x-1.webp',
                'https://moshammer.com/wp-content/uploads/2024/09/porsche.992.turbos.moshammer.aero_.kit_.rear_.wing_.diffuser.5-1024x576.webp',
                'https://images.pistonheads.com/nimg/44616/DSCF4037.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBh4m5V_iUPGD-dKQpWRrhpp9iSqAZ3eWogw&s',
                'https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1590762367/autoexpress/2020/05/Porsche%20911%20Turbo%20S-22.jpg',
                'https://hips.hearstapps.com/hmg-prod/images/2-1586152830.jpg?crop=0.836xw:0.800xh;0,0.104xh&resize=640:*',
                'https://www.europeanprestige.co.uk/blobs/stock/203/images/095107cc-6ed3-47bb-8282-8418b35ca685/1j6a5122-edit.jpg?width=2000&height=1333',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjSq2FdXF6weuOFC3dlBoUdwSnvXHBVThmMQ&s',
                'https://www.supercarclub.pl/wp-content/uploads/2021/11/Porsche-911-992-TurboS.jpg'
        ],
        specs: {
            enginePowerHp: 640, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'porsche-911@cars.com'
        }
    },
    {
        id: 'mercedes-slr', brand: 'Mercedes-Benz', model: 'SLR McLaren', year: 2004, price: 350000, mileage: 18000, bodyType: 'Купе',
        description: 'Рідкісний Mercedes-Benz з 20-річною історією, результат співпраці двох легенд.',
        image: ['https://upload.wikimedia.org/wikipedia/commons/8/8b/Mercedes-Benz_SLR_McLaren_2.jpg',
                'https://upload.wikimedia.org/wikipedia/commons/7/76/Mercedes-Benz_SLR_McLaren_%288615164079%29.jpg',
                'https://gtspirit.com/wp-content/uploads/2021/07/722-SLR-McLaren-Edition.jpg',
                'https://www.williamloughran.co.uk//media/6098/mclaren-slr-2237-1.jpg?anchor=center&mode=crop&width=1400&height=675&rnd=131884936000000000',
                'https://miro.medium.com/1*SeUZensDQFpnowQCFMv9hg.jpeg',
                'https://www.goodwood.com/globalassets/.road--racing/road/news/2023/08-august/slr/mercedes-benzslrmclarencelebratingauniquecollaboration10.jpg?rxy=0.5,0.5',
                'https://cdn.dealeraccelerate.com/bagauction/23/4005/192466/1920x1440/2009-mercedes-benz-slr-mclaren-prototype-stealth',
                'https://live.staticflickr.com/6144/6004520707_bc572a55f0_b.jpg'
        ],
        specs: {
            enginePowerHp: 626, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'mercedes-slr@cars.com'
        }
    },
    {
        id: 'corvette-c6-z06', brand: 'Chevrolet', model: 'Corvette C6 Z06', year: 2012, price: 60000, mileage: 50000, bodyType: 'Купе',
        description: 'Легендарний авто з легендарним двигуном, справжній американський масл-кар.',
        image: ['https://www.lingenfelter.com/mm5/graphics/00000001/3/C6_Corvette_Z06_427_CID_LS7_660_HP_Package_540x540.png',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZ0sc9XVHfnIOP5b9G1IWp2o8MzVo0yVFaQ&s',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Chevrolet_Corvette_Z06_-_Flickr_-_Alexandre_Pr%C3%A9vot_%287%29_%28cropped%29.jpg/960px-Chevrolet_Corvette_Z06_-_Flickr_-_Alexandre_Pr%C3%A9vot_%287%29_%28cropped%29.jpg',
                'https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/11/2009_chevrolet_corvette-zr1_5v0b6789-27817-scaled.jpg',
                'https://cimg1.ibsrv.net/ibimg/hgm/1200x675-1/100/210/chevy-corvette-zr1-motorauthority-034_100210573.jpg',
                'https://wallpapercrafter.com/desktop2/743082-cars-1920x1080-chevrolet-chevrolet-corvette-c6-zr1.jpg'
        ],
        specs: {
            enginePowerHp: 505, fuelType: 'Бензин', transmission: 'Механічна'
        },
        contact: {
            phone: '+380974754398', email: 'corvette-c6@cars.com'
        }
    },
    {
        id: 'corvette-c7-zr1', brand: 'Chevrolet', model: 'Corvette C7 ZR1', year: 2019, price: 130000, mileage: 10000, bodyType: 'Купе',
        description: 'Продовження легендарної історії легендарного масл-кару, з ще більшою потужністю.',
        image: ['https://lapmeta.com/storage/vi-images/NQ34s0wVVE.jpeg',
                'https://autonews.net.ua/wp-content/uploads/2024/11/Screenshot_29-7.png',
                'https://s1.cdn.autoevolution.com/images/news/gallery/man-buys-c7-chevy-corvette-zr1-sends-it-straight-to-the-tuning-shop-he-wants-1000-hp_1.jpg',
                'https://focus.ua/static/storage/originals/7/02/ed0134a4e7a4ed6db1efc6f92a6ad027.jpg',
                'https://strassewheels.com/wp-content/uploads/2022/08/DSC_4747-Edit-e1660686728481.jpg',
                'https://i0.wp.com/strassewheels.com/wp-content/uploads/2019/02/Zr1-2-1.jpg?fit=2048%2C1235&ssl=1'
        ],
        specs: {
            enginePowerHp: 755, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'corvette-c7@cars.com'
        }
    },
    {
        id: 'corvette-c8-zr1', brand: 'Chevrolet', model: 'Corvette C8 ZR1', year: 2024, price: 180000, mileage: 500, bodyType: 'Купе',
        description: 'Нове покоління Corvette з середньомоторною компоновкою, інновації та потужність.',
        image: ['https://speednik.s3.amazonaws.com/powerautorax55/wp-content/blogs.dir/1/files/2024/06/chevrolet-teases-possible-twin-turbo-zr1-c8-corvette-2024-06-03_13-54-36_373859.png',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTsFHnI1K6RcpXKX2wJjLBuLiMP-yPylPlZg&s',
                'https://www.auto-data.net/images/f101/Chevrolet-Corvette-Convertible-C8.jpg',
                'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2025/performance/zr1/mov/01-images/2025-zr1-masthead-01.png?imwidth=1200',
                'https://s1.cdn.autoevolution.com/images/news/850-hp-2025-chevy-corvette-zr1-unofficially-drops-thick-camouflage-after-first-sighting-215570-7.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfGrKV_kH2d5zH9rnNRje41Wny1759tGVM4Q&s',
                'https://cimg0.ibsrv.net/ibimg/hgm/1920x1080-1/100/945/2025-chevrolet-corvette-zr1-reaches-top-speed-of-233-mph--oct-2024_100945432.jpg',
                'https://hips.hearstapps.com/hmg-prod/images/2025-chevrolet-corvette-zr-1-1809-68309389318ba.jpg?crop=0.616xw:0.519xh;0.324xw,0.357xh&resize=1200:*'
        ],
        specs: {
            enginePowerHp: 850, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'corvette-c8@cars.com'
        }
    },
    {
        id: 'ferrari-f355', brand: 'Ferrari', model: 'F355', year: 1998, price: 150000, mileage: 60000, bodyType: 'Купе',
        description: 'Один із легендарних Ferrari старої школи, з неперевершеним дизайном.',
        image: ['https://upload.wikimedia.org/wikipedia/commons/b/b9/Ferrari_F355_Berlinetta_1X7A7333.jpg',
                'https://cdn.ferrari.com/cms/network/media/img/resize/5dd52a0584077c3b24327a54-ferrari-f355-berlinetta-1994-intro-share?width=1080',
                'https://news.dupontregistry.com/wp-content/uploads/2017/07/F355-Feature.jpg',
                'https://media.fastestlaps.com/ferrari-f355.png',
                'https://cdn.prod.website-files.com/662e6423ff88861916362956/67ec0b75623d7d087b7b746e_main_image-1743522664144.webp',
                'https://cdn.rmsothebys.com/5/8/1/a/c/8/581ac86ce75c20cd85b621454f4630399c38a677.webp',
                'https://prod-01-loadandpay-media.s3.eu-west-1.amazonaws.com/medias/cache/app_auction_slides_thumb/616d3c657406a097173729.jpg',
                'https://images.squarespace-cdn.com/content/v1/5caed8960cf57d49530e8c60/1709662661311-M2ADBYOAFQ5K3QPZ2ITU/01.jpg'
        ],
        specs: {
            enginePowerHp: 375, fuelType: 'Бензин', transmission: 'Механічна'
        },
        contact: {
            phone: '+380974754398', email: 'ferrari-f355@cars.com'
        }
    },
    {
        id: 'range-rover-svr', brand: 'Land Rover', model: 'Range Rover SVR', year: 2015, price: 70000, mileage: 65000, bodyType: 'Позашляховик',
        description: 'Британський спортивний кросовер, поєднання розкоші та динаміки.',
        image: ['https://www.cnet.com/a/img/resize/6e32ea2c080370d66f3f06fea5ace9ea1f7dce57/hub/2015/08/05/b801da55-42ed-4f87-b2ed-9c9267f2da45/landroverrangeroversvr-4.jpg?auto=webp&fit=crop&height=900&width=1200',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcXN_pDcr66CoJsS31OyyHnYdED8h0uXblg&s',
                'https://car-images.bauersecure.com/wp-images/12593/rrs_svr_2018_100.jpg',
                'https://upload.wikimedia.org/wikipedia/commons/5/52/2021_Land_Rover_Range_Rover_Sport_SVR_5.0_Front.jpg',
                'https://images.clickdealer.co.uk/vehicles/5533/5533039/large1/152204831.jpg',
                'https://www.mansory.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/661d6e0d2e84ef511db18f17/6818c3fcb0a8134cb1a6f6ec_Range%2520Rover%2520Sport%2520SVR-Gallery-001.webp',
                'https://www.carscoops.com/wp-content/uploads/2019/05/c9147706-range-rover-sport-svr-tuning-overfinch-supersport-0.jpg'
        ],
        specs: {
            enginePowerHp: 550, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'range-rover-svr@cars.com'
        }
    },
    {
        id: 'dodge-viper-srt10-acr', brand: 'Dodge', model: 'Viper SRT10 ACR', year: 2008, price: 120000, mileage: 12000, bodyType: 'Купе',
        description: 'Екзотичний суперкар у єдиному екземплярі, створений для треку.',
        image: ['https://www.supercars.net/blog/wp-content/uploads/2016/04/2008_Dodge_ViperSRT10ACR1.jpg',
                'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/08q1/267367/2008-dodge-viper-srt10-acr-photo-161901-s-original.jpg',
                'https://bringatrailer.com/wp-content/uploads/2023/08/2008_dodge_viper-srt-10-acr_Outside-16-scaled.jpg',
                'https://static.wikia.nocookie.net/gran-turismo/images/1/1d/Dodge_Viper_SRT10_ACR_%2708.jpg/revision/latest?cb=20190202141106',
                'https://bringatrailer.com/wp-content/uploads/2024/03/2008_dodge_viper-srt-10-acr_26acr-17257.jpg',
                'https://www.automoblog.com/wp-content/uploads/2011/09/Dodge-Viper_SRT10_ACR_2008_1024x768_wallpaper_0c.jpg',
        ],
        specs: {
            enginePowerHp: 600, fuelType: 'Бензин', transmission: 'Механічна'
        },
        contact: {
            phone: '+380974754398', email: 'dodge-viper@cars.com'
        }
    },
    {
        id: 'dodge-srt-viper-gts', brand: 'Dodge', model: 'SRT Viper GTS', year: 2013, price: 90000, mileage: 28000, bodyType: 'Купе',
        description: '640-сильна смертельна пастка, справжній американський звір.',
        image: ['https://hips.hearstapps.com/autoweek/assets/s3fs-public/121009991.jpg',
                'https://www.drivingemotions.com/galleria_images/179/179_p37_l.jpg',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/%22_14_Fiat-Chrysler_SRT_Viper_GTS_%28cropped%29.jpg/1200px-%22_14_Fiat-Chrysler_SRT_Viper_GTS_%28cropped%29.jpg',
                'https://www.sportscarmarket.com/wp-content/uploads/2023/11/2013-dodge-srt-viper-gts-main.jpg',
                'https://www.netcarshow.com/Dodge-SRT_Viper-2013-Rear_Three-Quarter.0c3f0b58.jpg',
                'https://www.stradamotorsports.com/imagetag/32/main/l/Used-2013-Dodge-SRT-Viper-GTS-1632370135.jpg',
                'https://www.exoticcarhacks.com/wp-content/uploads/2024/06/2013-dodge-srt-viper-gts-launch-edition-makes-people-crazy-during-online-auction_10.jpg',
                'https://i.redd.it/x2nrfc3exur11.jpg',
                'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2016/01/2015-Dodge-Viper-GT-102.jpg',
                'https://www.supercars.net/blog/wp-content/uploads/2016/04/2013_Dodge_SRTViperGTSR-0-1536.jpg',
                'https://gtspirit.com/wp-content/uploads/2013/02/the-srt-viper-gts-r-returns-to-le-mans-in-2013_100417628_l.jpg',
                'https://cdn-fastly.autoguide.com/media/2023/06/08/12438571/2013-srt-viper-gts-r-revealed-set-to-run-in-american-le-mans.jpg?size=720x845&nocrop=1',
                'https://www.cardivision.com/sites/default/files/image-gallery/Dodge-SRT-Viper-GTS-R-h114072.jpg'
        ],
        specs: {
            enginePowerHp: 640, fuelType: 'Бензин', transmission: 'Механічна'
        },
        contact: {
            phone: '+380974754398', email: 'dodge-srt-viper@cars.com'
        }
    },
    {
        id: 'bugatti-chiron', brand: 'Bugatti', model: 'Chiron Super Sport', year: 2023, price: 3500000, mileage: 1000, bodyType: 'Купе',
        description: 'Гіперкар, легендарність якого неможливо переоцінити, вершина інженерної думки.',
        image: ['https://www.netcarshow.com/Bugatti-Chiron_Super_Sport_300-2021-1280-355cb16c22db487fd939ee88b09bd2d46d.jpg',
                'https://www.topgear.com/sites/default/files/2021/10/_Z3A7276.jpg',
                'https://wheelco.in.ua/wp-content/uploads/2022/12/20221204034945135260.jpg',
                'https://news.dupontregistry.com/wp-content/uploads/2023/08/2-bugatti-chirons-for-sale-scaled.jpg',
                'https://news.dupontregistry.com/wp-content/uploads/2023/11/Bugatti-Main.jpg',
                'https://www.topgear.com/sites/default/files/images/big-read/2021/12/9b9f13ca6d2814a774ce33264fa3ac5b/_Z3A7471_2.jpg',
                'https://hips.hearstapps.com/hmg-prod/images/rt-bugatti-chiron-super-sport-atiyeh-2-666b54d990459.jpg?crop=1xw:1xh;center,top&resize=980:*'
        ],
        specs: {
            enginePowerHp: 1600, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'bugatti-chiron@cars.com'
        }
    }
];
