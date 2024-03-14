const sampleListings = [
  {
    title: "Tractor Rental",
    description:
    "Efficient tractor rentals for all your agricultural needs, ensuring reliable performance and maximum productivity.",
    image: "http://surl.li/rohwb", 
    price: 200,
    location: "Punjab",
    country: "India",
  },
  {
      title: "Roto Seed Drill Rental",
      description:
      "Enhance your seeding process with our roto seed drill rentals, offering precision and efficiency for optimal crop establishment and yield.",
      image: "https://cpimg.tistatic.com/02754188/b/5/Roto-Seed-Drill.png",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
  {
    title: "Harvester Rental",
    description:
    "Reliable harvester rentals tailored to optimize your harvesting operations, delivering efficiency and convenience for your agricultural endeavors.",
    image: "http://surl.li/roisx",
    price: 300,
    location: "Maharashtra",
    country: "India",
  },
  {
    title: "Trailer Rental",
    description:
    "Convenient trailer rentals designed to transport goods securely, providing flexible solutions for all your hauling needs.",
    image: "http://surl.li/roive",
    price: 100,
    location: "Rajasthan",
    country: "India",

  },

  {
      title: "Cultivator Rental",
      description:
      "Streamline your land preparation with cultivator rentals, offering precision and power for enhanced soil cultivation and crop yield.",
      image: "http://surl.li/roiri",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },

    {
      title: "Cultipackers Rental",
      description:         
      "Enhance seedbed preparation with our cultipacker rentals, ensuring optimal soil compaction for improved seed germination and crop establishment.",
      image: "https://www.glacierv.com/product_images/PMICultipackerATV8Foothr.jpg", 
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },

    {
      title: "Plows Rental",
      description:   
"Boost your field productivity with our plow rentals, offering robust equipment for efficient soil tillage and preparation.",
      image: "https://images.jdmagicbox.com/quickquotes/images_main/mouldboard-plough-3-furrow-375358101-p3frg.jpg", 
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Harrow Rental",
      description:
      "Elevate your land maintenance with our harrow rentals, providing effective soil cultivation and seedbed preparation for optimal crop growth.",
      image: "https://www.fieldking.com/images/tillage/harrow/lg/tandem-disc-harrow-heavy-duty.png", 
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Sprinklers Rental",
      description:
      "Maximize your irrigation efficiency with our sprinkler rentals, delivering precise water distribution for lush and healthy crops.",
      image: "",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },

    {
      title: "Thresher Rental",
      description:
      "Optimize your harvest efficiency with our thresher rentals, providing reliable and high-performance equipment for grain separation.",
      image: "https://www.tractorjunction.com/blog/wp-content/uploads/2021/03/Mahindra-Thresher.jpg",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Roto Seed Drill Rental",
      description:
      "Enhance your seeding process with our roto seed drill rentals, offering precision and efficiency for optimal crop establishment and yield.",
      image: "https://www.ksagri.in/wp-content/uploads/2015/05/ROTO-SEED-DRILL-870X580.png",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Harvester Rental",
      description:
      "Reliable harvester rentals tailored to optimize your harvesting operations, delivering efficiency and convenience for your agricultural endeavors.",
      image: "http://surl.li/roitg",
      price: 300,
      location: "Maharashtra",
      country: "India",
    },
    {
      title: "Rake Rental",
      description:
      "Efficiently gather and manage your harvest with our rake rentals, ensuring thorough and hassle-free collection of crops and debris.",
      image: "https://media.tractorsupply.com/is/image/TractorSupplyCompany/2128325?wid=456&hei=456&fmt=jpeg&qlt=100,0&resMode=sharp2&op_usm=0.9,1.0,8,0",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Baler Rental",
      description:
      "Effortlessly bundle your harvested crops with our baler rentals, providing reliable equipment for efficient baling and storage.",
      image: "https://www.fieldking.com/images/post-harvest/mini-round-baler/lg/mini-round-baler.png",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Trailer Rental",
      description:
      "Convenient trailer rentals designed to transport goods securely, providing flexible solutions for all your hauling needs.",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/9/MV/AI/KS/23072181/hydraulic-tractor-trolley-mounted-on-two-wheel-trailer-chassis--500x500.jpg",
      price: 100,
      location: "Rajasthan",
      country: "India",

    },


    {
      title: "Wheelbarrow Rental",
      description:
      "Simplify your hauling tasks with our wheelbarrow rentals, offering sturdy and convenient transportation solutions for various materials and terrain.",
      image: "",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Land Mover Rental",
      description:
      "Facilitate seamless land management with our land mover rentals, delivering powerful equipment for earthmoving and leveling tasks.",
      image: "https://ascensotyres.com/wp-content/uploads/2020/10/earth-movers.jpg",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Cultipackers Rental",
      description:         
      "Enhance seedbed preparation with our cultipacker rentals, ensuring optimal soil compaction for improved seed germination and crop establishment.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8f8_lj9xQd0DGuccA2Pnp_5xVntvwScygg&usqp=CAU", 
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },

    {
      title: "Harrow Rental",
      description:
      "Elevate your land maintenance with our harrow rentals, providing effective soil cultivation and seedbed preparation for optimal crop growth.",
      image: "https://image.made-in-china.com/202f0j00cYEfSVqCaMrH/Heavy-Duty-Disc-Harrow.jpg", 
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Rake Rental",
      description:
      "Efficiently gather and manage your harvest with our rake rentals, ensuring thorough and hassle-free collection of crops and debris.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Wooden_rake.jpg/1200px-Wooden_rake.jpg",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Baler Rental",
      description:
      "Effortlessly bundle your harvested crops with our baler rentals, providing reliable equipment for efficient baling and storage.",
      image: "https://lh3.googleusercontent.com/proxy/J01cYJmI-UhecX-1vHtkDbL_m1RtIidkFKWkwhY7E4Ollbg0ug-n_-V4Gnxd0CBJpXECNJdPc1xkMaHG2_TbMe4rp6strqE9FYJOlpiCMdZ9ZsSZBIbGQ9abQMs",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },

    {
      title: "Plows Rental",
      description:   
"Boost your field productivity with our plow rentals, offering robust equipment for efficient soil tillage and preparation.",
      image: "https://international.sonalika.com/wp-content/uploads/2020/09/disc-plough-solis.jpg", 
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },

    {
      title: "Cultivator Rental",
      description:
      "Streamline your land preparation with cultivator rentals, offering precision and power for enhanced soil cultivation and crop yield.",
      image: "http://surl.li/roiru",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Roto Seed Drill Rental",
      description:
      "Enhance your seeding process with our roto seed drill rentals, offering precision and efficiency for optimal crop establishment and yield.",
      image: "https://5.imimg.com/data5/QD/VV/TO/SELLER-4782583/strip-till-drill-or-roto-seed-drill.jpg",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Trolley pump Rental",
      description:
      "Streamline your irrigation processes with our trolley pump rentals, offering portable and efficient water pumping solutions for agricultural needs.",
      image: "https://images.jdmagicbox.com/quickquotes/images_main/trolley-pump-2183695565-mspwwyz7.jpg",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },

    {
      title: "Hand Sickle Rental",
      description:
      "Efficiently harvest your crops with our hand sickle rentals, providing reliable tools for precise and effortless cutting in agricultural fields.",
      image: "https://i.etsystatic.com/25943055/r/il/01fba3/5289043368/il_fullxfull.5289043368_513l.jpg", 
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    }, {
      title: "Hoe Rental",
      description:
      "Optimize your land cultivation with our hoe rentals, offering durable tools for efficient weeding, digging, and soil preparation.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA7hv1RAAg8sZJDOXKvnJ-6l1mDGvRhi620Pz-hSI-xJN6p0NNNsoTLanLhBopBwvM3Q0&usqp=CAU",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Baler Rental",
      description:
      "Effortlessly bundle your harvested crops with our baler rentals, providing reliable equipment for efficient baling and storage.",
      image: "https://www.mahindratractor.com/sites/default/files/2023-08/Round%20Baler%20-%20HV_799x618.webp",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Tractor Rental",
      description:
      "Efficient tractor rentals for all your agricultural needs, ensuring reliable performance and maximum productivity.",
      image: "http://surl.li/roikj", 
      price: 200,
      location: "Punjab",
      country: "India",
    }, 
    {
      title: "Machete Rental",
      description:
      "Easily tackle vegetation and undergrowth with our machete rentals, providing sharp and sturdy tools for precise cutting and clearing.",
      image: "",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Hand Sickle Rental",
      description:
      "Efficiently harvest your crops with our hand sickle rentals, providing reliable tools for precise and effortless cutting in agricultural fields.",
      image: "https://i.redd.it/8ml30tqv6o1b1.jpg", 
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },

    {
      title: "Trolley Pump Rental",
      description:
      "Effortlessly manage your water pumping needs with our trolley pump rentals, offering portable and efficient solutions for irrigation and drainage tasks.",
      image: "", 
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Rake Rental",
      description:
      "Efficiently gather and manage your harvest with our rake rentals, ensuring thorough and hassle-free collection of crops and debris.",
      image: "https://www.burgonandball.com/cdn/shop/products/GTB-SRGRHS-burgon-and-ball-rhs-endorsed-stainless-ground-rake-03_056a9afa-c6ea-4805-b18c-3048d8bd4c2a_grande.jpg?v=1505417686",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    }, 
    {
      title: "Trailer Sprayer Rental",
      description:
      "Efficiently apply pesticides or fertilizers with our trailer sprayer rentals, providing convenient and effective solutions for large-scale agricultural spraying tasks.",
      image: "https://katherineag.com.au/wp-content/uploads/2017/09/Special-5000-1140.jpg",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Trolley pump Rental",
      description:
      "Streamline your irrigation processes with our trolley pump rentals, offering portable and efficient water pumping solutions for agricultural needs.",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/4/NK/TF/LH/20902177/trolley-mounted-pump-for-wagon-loading-unloading-industry-500x500.jpg",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    }, 
    {
      title: "Roto Seed Drill Rental",
      description:
      "Enhance your seeding process with our roto seed drill rentals, offering precision and efficiency for optimal crop establishment and yield.",
      image: "https://www.fieldking.com/images/seeding-and-plantation/roto-seed-drill/lg/roto-seed-drill.png",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Tractor Rental",
      description:
      "Efficient tractor rentals for all your agricultural needs, ensuring reliable performance and maximum productivity.",
      image: "http://surl.li/roilb", 
      price: 200,
      location: "Punjab",
      country: "India",
    },
    {
      title: "Cultivator Rental",
      description:
      "Streamline your land preparation with cultivator rentals, offering precision and power for enhanced soil cultivation and crop yield.",
      image: "http://surl.li/roisk",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Harvester Rental",
      description:
      "Reliable harvester rentals tailored to optimize your harvesting operations, delivering efficiency and convenience for your agricultural endeavors.",
      image: "http://surl.li/roiuf",
      price: 300,
      location: "Maharashtra",
      country: "India",
    },
    {
      title: "Trailer Rental",
      description:
      "Convenient trailer rentals designed to transport goods securely, providing flexible solutions for all your hauling needs.",
      image: "https://5.imimg.com/data5/TA/HZ/PY/SELLER-31569378/tipping-trailer-500x500.jpg",
      price: 100,
      location: "Rajasthan",
      country: "India",

    },
    {
      title: "Thresher Rental",
      description:
      "Optimize your harvest efficiency with our thresher rentals, providing reliable and high-performance equipment for grain separation.",
      image: "https://www.kirloskaroilengines.com/documents/541738/o/THRESHER.png/780924c1-6f27-68c0-0d92-4cf26f7c43a3",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Rake Rental",
      description:
      "Efficiently gather and manage your harvest with our rake rentals, ensuring thorough and hassle-free collection of crops and debris.",
      image: "https://cdn11.bigcommerce.com/s-g62km8uew2/images/stencil/1280x1280/products/2092/41323/HSAS04_Portrait_2__34325.1655288295.jpg?c=1",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    }, 

    {
      title: "Cultipackers Rental",
      description:         
      "Enhance seedbed preparation with our cultipacker rentals, ensuring optimal soil compaction for improved seed germination and crop establishment.",
      image: "https://assets.basspro.com/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,h_250,q_auto,w_400/c_pad,h_250,w_400/v1/ProductImages/200/master1_100848059_alt1?pgw=1", 
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Plows Rental",
      description:   
"Boost your field productivity with our plow rentals, offering robust equipment for efficient soil tillage and preparation.",
      image: "https://www.lanceragrico.com/wp-content/uploads/2023/09/LRP-main.png", 
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Trailer Sprayer Rental",
      description:
      "Efficiently apply pesticides or fertilizers with our trailer sprayer rentals, providing convenient and effective solutions for large-scale agricultural spraying tasks.",
      image: "https://der0u4l55orz6.cloudfront.net/2022/10/26143426/Rectangle-1584-1.jpg",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Harrow Rental",
      description:
      "Elevate your land maintenance with our harrow rentals, providing effective soil cultivation and seedbed preparation for optimal crop growth.",
      image: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Catalogue/fieldking-790-kg-mild-steel-disc-harrow-for-agricultur20230914061030.jpg", 
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Rake Rental",
      description:
      "Efficiently gather and manage your harvest with our rake rentals, ensuring thorough and hassle-free collection of crops and debris.",
      image: "https://i5.walmartimages.com/asr/c9f85f63-e590-4210-a5bc-da232d25956f.e0e4aab3ec55cb0c7200bb90cc37a63a.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    }, 
    {
      title: "Hand Sickle Rental",
      description:
      "Efficiently harvest your crops with our hand sickle rentals, providing reliable tools for precise and effortless cutting in agricultural fields.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxou7PSsPiUJiDUDvWmv58sQ5AkL8_xQ6OZe-u8OM1QLOOA77br6D9t8dJeQ_zc2BVuv4&usqp=CAU", 
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Baler Rental",
      description:
      "Effortlessly bundle your harvested crops with our baler rentals, providing reliable equipment for efficient baling and storage.",
      image: "https://5.imimg.com/data5/ANDROID/Default/2022/12/FI/SA/NC/23732567/product-jpeg.jpg",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
    {
      title: "Trailer Sprayer Rental",
      description:
      "Efficiently apply pesticides or fertilizers with our trailer sprayer rentals, providing convenient and effective solutions for large-scale agricultural spraying tasks.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeRghgtWX4QAqHSXAj-nA4k4hcl3tWVn9Aw&usqp=CAU",
      price: 100,
      location: "Rajasthan",
      country: "India",
      
    },
];

module.exports = { data: sampleListings };