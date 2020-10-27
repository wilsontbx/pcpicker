const newProduct =
    [
        {
            name: 'Intel Core i7-10700K',
            slug: 'intel-core-i7-10700k',
            type: 'cpu',
            manufacturer: 'Intel',
            price: 599,
            url: 'https://www.lazada.sg/products/intel-core-i7-10700k-comet-lake-8-core-16-thread-38ghz-51-ghz-turbo-16mb-cache-lga-1200-95w-desktop-processor-intel-uhd-graphics-630-bx8070110700ksrh72-i790472759-s2600518546.html',
            image: 'https://cdna.pcpartpicker.com/static/forever/images/product/6a40f9732bef504af112c33a980482b2.1600.jpg',
            properties: {
                core: '8',
                base_clock: '3.8 GHz',
                tdp: '125 W',
                socket: 'LGA1200'
            }
        },
        {
            name: 'AMD Ryzen 9 3950X',
            slug: 'amd-ryzen-9-3950x',
            type: 'cpu',
            manufacturer: 'AMD',
            price: 1187,
            url: 'https://www.lazada.sg/products/dct-amd-ryzen-9-3950x-35ghz-16-core-32-thread-processor-3yrs-by-amd-i750046578-s2422508104.html',
            image: 'https://cdna.pcpartpicker.com/static/forever/images/product/bb4c0b72e3f78893b1e5b19ab570b2c1.1600.jpg',
            properties: {
                core: '16',
                base_clock: '3.5 GHz',
                tdp: '105 W',
                socket: 'AM4'
            }
        },
        {
            name: 'Cooler Master Hyper 212 RGB Black Edition',
            slug: 'cooler-master-hyper-212-rgb-black-edition',
            type: 'cooler',
            manufacturer: 'Cooler Master',
            price: 79,
            url: 'https://www.lazada.sg/products/cooler-master-hyper-212-rgb-black-edition-i326874816-s690042185.html',
            image: 'https://images-eu.ssl-images-amazon.com/images/I/51XdFIoS4DL.jpg',
            properties: {
                fan_rpm: '650 - 2000 RPM',
                noise_level: '8 - 30 dBA',
            }
        },
        {
            name: 'Corsair H100i RGB PRO XT',
            slug: 'corsair-h100i-rgb-pro-xt',
            type: 'cooler',
            manufacturer: 'Corsair',
            price: 169,
            url: 'https://www.lazada.sg/products/corsair-icue-h100i-rgb-pro-xt-aio-liquid-cooler-i578826488-s1655176666.html',
            image: 'https://cdna.pcpartpicker.com/static/forever/images/product/adc0e1d172f0de205c1c74fe9e80ef31.1600.jpg',
            properties: {
                fan_rpm: '2400 RPM',
                noise_level: '37 dB',
            }
        },
        {
            name: 'Asus ROG STRIX Z490-E GAMING',
            slug: 'asus-rog-strix-z490-e-gaming',
            type: 'motherboard',
            manufacturer: 'Asus',
            price: 619,
            url : 'https://www.lazada.sg/products/asus-rog-strix-z490-e-gaming-lga-1200-atx-gaming-motherboard-i725278175-s2299070012.html',
            image: 'https://cdna.pcpartpicker.com/static/forever/images/product/5cec77090557e1460b50fc38c59befdd.1600.jpg',
            properties: {
                socket: 'LGA1200',
                form_factor: 'ATX',
                ram_slots: 4,
                max_ram: 128,
            }
        },
        {
            name: 'Asus ROG Strix X570-E Gaming',
            slug: 'asus-rog-strix-x570-e-gaming',
            type: 'motherboard',
            manufacturer: 'Asus',
            price: 579,
            url : 'https://www.lazada.sg/products/free-same-day-delivery-asus-rog-strix-x570-e-gaming-atx-motherboard-order-before-2pm-on-working-day-will-deliver-on-the-same-day-order-after-2pm-will-deliver-on-the-next-working-day-i386696668-s916880931.html',
            image: 'https://cdna.pcpartpicker.com/static/forever/images/product/5ea06f23ef2f87c115fdf6be24173a03.1600.jpg',
            properties: {
                socket: 'AM4',
                form_factor: 'ATX',
                ram_slots: 4,
                max_ram: 128,
            }
        },
        {
            name: 'Corsair Vengeance LPX 3000Mhz',
            slug: 'corsair-vengeance-plx-3000mhz',
            type: 'ram',
            manufacturer: 'Corsair',
            price: 119,
            url: 'https://www.lazada.sg/products/corsair-vengeance-lpx-16gb-2x8gb-ddr4-3000mhz-c15-dimm-desktop-memory-kit-black-cmk16gx4m2b3000c15-i214800639-s325622684.html',
            image: 'https://cdna.pcpartpicker.com/static/forever/images/product/0d7ccc6bb32c1a857bdfc56d9eb74081.1600.jpg',
            properties: {
                speed: '3000',
                modules: '2x8GB',
                size: '8GB',
            }
        },
        {
            name: 'G.Skill Trident Z RGB 3200Mhz',
            slug: 'g.skill-trident-z-rgb-3200mhz',
            type: 'ram',
            manufacturer: 'G.Skill',
            price: 169,
            url: 'https://www.lazada.sg/products/gskill-trident-z-rgb-3200mhz-2x8gb-ddr4-dual-channel-kit-i304638125-s539816377.html',
            image: 'https://cdna.pcpartpicker.com/static/forever/images/product/d19422479fca6e5117bb55db3d25eac2.1600.jpg',
            properties: {
                speed: '3200',
                modules: '2x8GB',
                size: '8 GB',
            }
        },
        {
            name: 'ASUS RTX 3080 TUF GAMING',
            slug: 'asus-rtx-3080-tuf-gaming',
            type: 'gpu',
            manufacturer: 'ASUS',
            price: 1199,
            url: 'https://www.lazada.sg/products/asus-tuf-rtx3080-o10g-gaming-tuf-gaming-geforce-rtx-3080-buffed-up-design-with-chart-topping-thermal-performance-i1178750214-s4686788312.html',
            image: 'https://cdna.pcpartpicker.com/static/forever/images/product/fb6d82978eb72f5837ad25344c2332fd.1600.jpg',
            properties: {
                memory: '10 GB',
                core_clock: '1440 MHz',
                tdp: '320 W',
            }
        },
        {
            name: 'MSI RTX 3090 Gaming X Trio',
            slug: 'msi-rtx-3090-gaming-x-trio',
            type: 'gpu',
            manufacturer: 'MSI',
            price: 2588,
            url: 'https://www.lazada.sg/products/nvidia-graphics-cardmsi-geforce-rtx-3090-gaming-x-trio-24g-24gb-graphics-card-with-directx-12-384-bit-gddr6x-pci-express-40-hdcp-ready-sli-support-i1189152452-s4751594814.html',
            image: 'https://cdna.pcpartpicker.com/static/forever/images/product/ab7a473e9b91ba2b2411f5e7239b1009.1600.jpg',
            properties: {
                memory: '24 GB',
                core_clock: '1400 MHz',
                tdp: '350 W',
            }
        },
        {
            name: 'Samsung 860 Evo 500 GB',
            slug: 'samsung-860-evo-500-gb',
            type: 'storage',
            manufacturer: 'samsung',
            price: 109,
            url :'https://www.lazada.sg/products/pre-order-super-deal-samsung-860-evo-solid-state-drives-ssd-250gb-500gb-1tb-2tb-ship-by-21st-oct-or-earlier-i389424513-s927790452.html',
            image: 'https://images-na.ssl-images-amazon.com/images/I/41VPXg9b6bL.jpg',
            properties: {
                series: '860 Evo Series',
                type: 'SSD',
                capacity: '500 GB',
            }
        },
        {
            name: 'Samsung 970 Evo Plus 1 TB',
            slug: 'samsung-970-evo=plus-1-tb',
            type: 'storage',
            manufacturer: 'samsung',
            price: 299,
            url: 'https://www.lazada.sg/products/dynacore-samsung-970-evo-plus-1tb-m2-nvme-gen-30-v-nand-ssd-mz-v7s1t0bw-i329286086-s702592280.html',
            image: 'https://images-eu.ssl-images-amazon.com/images/I/414OowPSf4L.jpg',
            properties: {
                series: '970 Evo Plus Series',
                type: 'SSD',
                capacity: '1 TB',
            }
        },
        {
            name: 'Cooler Master MWE Gold 650 W 80+',
            slug: 'cooler-master-mwe-gold-650-w-80+',
            type: 'psu',
            manufacturer: 'Cooler Master',
            price: 129,
            url:'https://www.lazada.sg/products/cooler-master-mwe-gold-650-v2-full-modular-80-gold-650w-psu-i396654862-s958114970.html',
            image: 'https://images-na.ssl-images-amazon.com/images/I/51sXglSjloL.jpg',
            properties: {
                form: 'ATX',
                watts: '650 W',
                efficiency: '80+ Gold',
                modular: 'Full',
            }
        },
        {
            name: 'Corsair HX Platinum 1000 W 80+',
            slug: 'corsair-hx-platinum-1000-w-80+',
            type: 'psu',
            manufacturer: 'Corsair',
            price: 341,
            url: 'https://www.lazada.sg/products/corsair-hx1000i-1000w-80-platinum-full-modular-power-supply-i711992847-s2240838984.html',
            image: 'https://images-na.ssl-images-amazon.com/images/I/51sXglSjloL.jpg',
            properties: {
                form: 'ATX',
                watts: '1000 W',
                efficiency: '80+ Platinum',
                modular: 'Full',
            }
        },
        {
            name: 'NZXT H510 ATX Mid Tower Case',
            slug: 'nzxt-h510-atx-mid-tower-case',
            type: 'case',
            manufacturer: 'NZXT',
            price: 244,
            url: 'https://www.lazada.sg/products/nzxt-h510-elite-mid-tower-atx-case-blackwhite-i372150288-s868122560.html', 
            image: 'https://cdna.pcpartpicker.com/static/forever/images/product/9ee310e7133fd5145c9226f089714fa0.1600.jpg',
            properties: {
                power_supply: 'No',
            }
        },
        {
            name: 'Corsair iCUE 465X RGB Mid Tower Black',
            slug: 'corsair-icue-465x-rgb-mid-tower-black',
            type: 'case',
            manufacturer: 'Corsair',
            price: 219,
            url: 'https://www.lazada.sg/products/corsair-icue-465x-rgb-mid-tower-atx-smart-case-black-i406414239-s1003948242.html',
            image: 'https://images-eu.ssl-images-amazon.com/images/I/41jozctKOsL.jpg',
            properties: {
                power_supply: 'No',
            }
        },
    ]

module.exports = newProduct