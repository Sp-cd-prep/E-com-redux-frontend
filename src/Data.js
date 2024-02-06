const data = [

    {
        id: 1,
        name: "Pizza",
        category: "Food",
        price:280,
        image: "https://img.freepik.com/premium-photo/aesthetic-dripping-tasty-pizza-slice-generative-ai_863013-1954.jpg",
        text: "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven",
    },
    {
        id: 2,
        name: "Burger",
        category: "Food",
        price:290,
        image: "https://c4.wallpaperflare.com/wallpaper/672/503/735/fast-food-junk-food-food-hamburger-wallpaper-preview.jpg",
        text: "A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world",
    },
    {
        id: 3,
        name: "SandWich",
        category: "Food",
        price:210,
        image: "https://img.freepik.com/free-photo/grilled-sandwich-with-bacon-fried-egg-tomato-lettuce-served-wooden-cutting-board_1150-42571.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697846400&semt=ais",
        text: "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type.",
    },
    {
        id: 4,
        name: "Chiken",
        category: "Food",
        price:230,
        image: "https://images.pexels.com/photos/2994900/pexels-photo-2994900.jpeg?cs=srgb&dl=pexels-engin-akyurt-2994900.jpg&fm=jpg",
        text: "Chickens are gregarious birds and live together in flocks. They have a communal approach to the incubation of eggs and raising of young.",
    },
    {
        id: 5,
        name: "Cake",
        category: "Food",
        price:280,
        image: "https://w0.peakpx.com/wallpaper/843/986/HD-wallpaper-cakes-food-cake-fruit-caramel-dessert-sweet.jpg",
        text: "  It is a derivation of 'kaka', an Old Norse word. Medieval European bakers often made fruitcakes and gingerbread.",
    },
    {
        id: 6,
        name: "Samosa",
        category: "Food",
        price:180,
        image: "https://img.pikbest.com/origin/09/34/66/56wpIkbEsTdFz.jpg!w700wp",
        text: "A samosa is a fried South Asian pastry with a savoury filling, including ingredients such as spiced potatoes, onions, peas, meat or fish. It may take different forms, including triangular, cone, or half-moon shapes, depending on the region.",
    },
    {
        id: 7,
        name: "Laddu",
        category: "Food",
        price:380,
        image: "https://img.freepik.com/premium-photo/tangy-crispy-kacha-aam-ke-ladoo_670382-125211.jpg",
        text: "Laddu or laddoo is a spherical sweet from the Indian subcontinent made of various ingredients and sugar syrup or jaggery. It has been described as perhaps the most universal and ancient of Indian sweets.",
    },
    {
        id: 15,
        name: "Genius",
        category: "Bollywood",
        image: "https://i.ytimg.com/vi/uBpWp8OorHY/maxresdefault.jpg",
        text: "Genius is a 2018 Indian Hindi-language romantic psychological action thriller film directed by Anil Sharma. It marks the debut of his son Utkarsh Sharma as a male lead, who also featured as a child actor in Sharma's 2001 film Gadar: Ek Prem Katha. Ishita Chauhan, Nawazuddin Siddiqui, and Mithun Chakraborty, with Ayesha Jhulka,[3] and Malti Chahar play supporting roles in the film.",
    },
    {
        id: 16,
        name: "Dhadkan",
        category: "Bollywood",
        image: "https://jmathur.files.wordpress.com/2017/06/dhadkan-2000-c2a6-hd-hindi-sub-engc2a6-sunil-shetty.jpg",
        text: "Dhadkan (transl. Heartbeat) is a 2000 Indian Hindi-language romantic drama musical film directed by Dharmesh Darshan and produced by Ratan Jain.[2] It stars Akshay Kumar, Shilpa Shetty, Suniel Shetty and Mahima Chaudhry.[3][4] Being inspired by the novel Wuthering Heights, it also features Parmeet Sethi, Kiran Kumar, Sushma Seth and Manjeet Kullar in supporting roles.[5] The story follows, Anjali and Dev are in love with each other and plan to marry, but her family gets her married to Ram. Years later, Dev shows up to reunite with Anjali, however, she has fallen in love with Ram. The music was composed by Nadeem–Shravan."
    },
    {
        id: 17,
        name: "Mummy Kasam",
        category: "Bollywood",
        image: "https://i.pinimg.com/736x/03/fd/99/03fd9957159010cf8f051f22f9e2d9ac.jpg",
        text: "Mummy Kasam is a Hindi language song and is sung by Gurinder Seagal, Payal Dev and Ikka. Mummy Kasam, from the album Nawabzaade, was released in the year 2018."
    },
    {
        id: 18,
        name: "Gabbar",
        category: "Bollywood",
        image: "https://cdn.wallpapersafari.com/5/15/jQpFEH.jpg",
        text: "Gabbar Singh Rajput (Akshay Kumar) creates his own vigilante military network called the Anti-Corruption Force (ACF) that eliminates the most corrupt individuals, from all walks of life, in a systematic manner."
    },
    {
        id: 19,
        name: "krrish 4",
        category: "Bollywood",
        image: "https://i.ytimg.com/vi/lD6tF6uxV4c/hqdefault.jpg",
        text: "Rakesh Roshan recently gave some major updates about the much-awaited ‘Krrish 4’, starring his son Hrithik Roshan. The film’s scripting has been underway ever since rumours abounded in 2020 that they were gearing up for the fourth instalment."
    },
    {
        id: 20,
        name: "Sanam Teri Kasam",
        category: "Bollywood",
        image: "https://v3img.voot.com/jioimage/12/26/8a0e8f3374c811e688d58522ba040c22_1582111969083_l.jpg",
        text: "Sanam Teri Kasam is a 2016 Indian romantic film starring Harshvardhan Rane and Pakistani actress Mawra Hocane. It is directed by the duo Radhika Rao-Vinay Sapru and produced by Deepak Mukut. The film is a modern rendition of the novel Love Story by Eric Segal."
    },
    {
        id: 22,
        name: "Zindagi Na Milegi Dobara",
        category: "Bollywood",
        image: "https://www.searchhyderabad.com/wp-content/uploads/listing-uploads/logo/2022/11/Zindagi-Na-Milegi-Dobara-Movie-OTT-Platform.jpg",
        text: "Zindagi Na Milegi Dobara is a 2011 Indian coming-of-age film directed by Zoya Akhtar. It showcases the transformative journey of three friends during a bachelor road trip."
    },
    {
        id: 29,
        name: "Control",
        category: "Hollywood",
        image: "https://i.ytimg.com/vi/5M9VLIzdsKo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDTlTyO2ZSNwZewHKhUxhxbOlDK6A",
        text: "A woman is imprisoned by a mysterious organization intent on testing her latent psychic abilities. This film is not based upon or associated in any way with the CONTROL® video game and franchise developed by Remedy Entertainment Plc.",
    },
    {
        id: 30,
        name: "Transformers",
        category: "Hollywood",
        image: "https://w.forfun.com/fetch/18/18dddb6d9414748a863c764a6487cea6.jpeg",
        text: "Transformers is a series of science fiction action films based on the Transformers franchise of the 1980s. Michael Bay directed the first five live action films: Transformers, Revenge of the Fallen, Dark of the Moon, Age of Extinction, and The Last Knight, and has served as a producer for subsequent films."
    },
    {
        id: 31,
        name: "Avatar",
        category: "Hollywood",
        image: "https://cdn.wallpapersafari.com/86/95/Idsx01.jpg",
        text: "Avatar (marketed as James Cameron's Avatar) is a 2009 epic science fiction film directed, written, co-produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez,[6] and Sigourney Weaver. It is the first installment in the Avatar film series. It is set in the mid-22nd century, when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium.[a] The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi, a humanoid species indigenous to Pandora. The title of the film refers to a genetically engineered Na'vi body operated from the brain of a remotely located human that is used to interact with the natives of Pandora."
    },
    {
        id: 32,
        name: "The Maze Runner",
        category: "Hollywood",
        image: "https://c4.wallpaperflare.com/wallpaper/726/46/535/movies-hollywood-movies-wallpaper-preview.jpg",
        text: "The Maze Runner is a 2014 American dystopian science fiction film directed by Wes Ball, in his directorial debut, based on James Dashner's 2009 novel of the same name. The film is the first installment in The Maze Runner film series and was produced by Ellen Goldsmith-Vein, Wyck Godfrey, Marty Bowen, and Lee Stollman with a screenplay by Noah Oppenheim, Grant Pierce Myers, and T.S. Nowlin."
    },
     {
        id: 34,
        name: "The Dark Knight",
        category: "Hollywood",
        image: "https://wallpapercave.com/wp/wp2162756.jpg",
        text: "The Dark Knight is a 2008 superhero film directed by Christopher Nolan. It is known for Heath Ledger's iconic portrayal of the Joker."
    },
    {
        id: 35,
        name: "Thor",
        category: "Hollywood",
        image: "https://e0.pxfuel.com/wallpapers/131/142/desktop-wallpaper-thor-the-dark-world-12.jpg",
        text: "Thor: The Dark World is a 2013 American superhero film based on the Marvel Comics character Thor, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the sequel to Thor (2011) and the eighth film in the Marvel Cinematic Universe (MCU)."
    },
    {
        id: 36,
        name: "Pirates Caribbean",
        category: "Hollywood",
        image: "https://cdn.wallpapersafari.com/45/66/q2rdlZ.jpg",
        text: "Pirates of the Caribbean is an American fantasy supernatural swashbuckler film series produced by Jerry Bruckheimer and based on Walt Disney's theme park attraction of the same name. The film series serves as a major component of the eponymous media franchise."
    },
    {
        id: 57,
        name: "Artificial Intelligence",
        category: "Technology",
        image: "https://media.istockphoto.com/id/1034901762/photo/artificial-intelligence-and-future-concept.jpg?b=1&s=612x612&w=0&k=20&c=FIqKKZ0av1jOCyhMRr902POYe-FZwVib5KFKw17v-kA=",
        text: "Artificial intelligence is the intelligence of machines or software, as opposed to the intelligence of humans or animals. It is also the field of study in computer science that develops and studies intelligent machines. AI may also refer to the machines themselves",
    },
    {
        id: 58,
        name: " Internet of Things",
        category: "Technology",
        image: "https://images.squarespace-cdn.com/content/v1/55181a36e4b05c72e7f6a2a3/1644642964684-IFR844O0H5ODZMLIHES2/2-1-1.png?format=750w",
        text: "IoT connects everyday objects to the internet, enabling smart homes, cities, and industries through data-driven automation.",

    },
    {
        id: 59,
        name: "Robotics",
        category: "Technology",
        image: "https://c4.wallpaperflare.com/wallpaper/796/270/435/cyberpunk-digital-art-futuristic-wallpaper-preview.jpg",
        text: "Robotics is an interdisciplinary field that involves the design, construction, operation, and use of robots.Robotics integrates many fields that deal with specific aspects of robotics. For example, within mechanical engineering, the term robotics refers to the construction of the physical structures of a robots, while in computer science, robotics focuses on the study of robotic software.",
    },
    {
        id: 60,
        name: "Cybersecurity",
        category: "Technology",
        image: "https://m.economictimes.com/thumb/msid-95410508,width-1200,height-800,resizemode-4,imgsize-34558/cisos-pick-for-2023-cybersecurity-stack-whats-in-and-whats-out.jpg",
        text: "Cyber security is the application of technologies, processes, and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and protect against the unauthorised exploitation of systems, networks, and technologies.",
    },
    {
        id: 61,
        name: "5G Technology",
        category: "Technology",
        image: "https://img.freepik.com/free-photo/technology-particle-dots-5g-digital-corporate-background_53876-102624.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697846400&semt=ais",
        text: "5G technology revolutionizes wireless communication, providing faster speeds and low latency for a wide range of applications.",
    },
    {
        id: 62,
        name: "Machine Learning",
        category: "Technology",
        image: "https://thumbs.dreamstime.com/b/machine-learning-concept-as-modern-technology-machine-learning-concept-as-modern-technology-134730803.jpg",
        text: "Machine Learning is the field of study that gives computers the capability to learn without being explicitly programmed. ML is one of the most exciting technologies that one would have ever come across. As it is evident from the name, it gives the computer that makes it more similar to humans: The ability to learn. Machine learning is actively being used today, perhaps in many more places than one would expect",
    },
    {
        id: 63,
        name: "Space Exploration",
        category: "Technology",
        image: "https://media.istockphoto.com/id/182062885/photo/space-station-in-earth-orbit.jpg?s=612x612&w=0&k=20&c=F_P2YJ3QDbSW2n6dWkh6JNYeQGI1-2q-wOBk9-sw_Xo=",
        text: "Space exploration is investigation, by means of crewed and uncrewed spacecraft, of the reaches of the universe beyond Earth's atmosphere and the use of the information so gained to increase knowledge of the cosmos and benefit humanity.",
    },
      {
        id: 71,
        name: "Dhosa",
        category: "Home",
        image: "https://e1.pxfuel.com/desktop-wallpaper/123/90/desktop-wallpaper-appetizer-healthy-masala-dosa.jpg",
        text: "A dosa is a thin savory pancake in South Indian cuisine made from a fermented batter of ground black lentils and rice. Dosas are served hot, often with chutney and sambar. Dosa is a signature dish in South India and Sri Lanka, and is popularly served in their respective restaurants around the world",
    },
    {
        id: 72,
        name: "Poori",
        category: "Home",
        image: "https://t3.ftcdn.net/jpg/05/00/04/18/360_F_500041894_FIwsCmxDUhLayLRXYAIzpaDSAWaZ3IZe.jpg",
        text: "Poori or Puri is a traditional Indian fried bread that is delicious to enjoy with almost any main dish. It’s a simple unleavened bread made from just whole wheat flour, salt, and water. Here I share my poori recipe with step-by-step photos and the best tips for making puri at home – crispy, fluffy, and soft and I bet you’ll love making homemade puri to enjoy with your favorite meals!",
    },
    {
        id: 73,
        name: "Pizza",
        category: "Home",
        image: "https://t3.ftcdn.net/jpg/05/60/70/82/360_F_560708240_pMZPOuSfvblWGRoaiZFLT4wiFTzQPwQe.jpg",
        text: "Pizza is sold fresh or frozen, and whole or in portion-size slices. Methods have been developed to overcome challenges such as preventing the sauce from combining with the dough, and producing a crust that can be frozen and reheated without becoming rigid. There are frozen pizzas with raw ingredients and self-rising crusts. ",
    },

    {
        id: 74,
        name: "Drishyam 2",
        category: "Home",
        image: "https://m.economictimes.com/thumb/msid-97123793,width-1200,height-900,resizemode-4,imgsize-87908/drishyam-2-minted-rs-240-crore-in-eight-weeks-since-its-release-.jpg",
        text: "Drishyam 2: The Resumption, or simply Drishyam 2 is a 2021 Indian Malayalam-language crime thriller film written and directed by Jeethu Joseph and produced by Antony Perumbavoor through the company Aashirvad Cinemas.[2] A sequel to their 2013 film Drishyam and the second installment to the series, the film stars Mohanlal, Meena, Ansiba Hassan, Esther Anil. The story takes place six years after the events of Drishyam.[3]",
    },
    {
        id: 75,
        name: "Bhuj",
        category: "Home",
        image: "https://s3.india.com/wp-content/uploads/2020/06/bhuj-the-pride-of-india-movie-posters-released-main.jpg",
        text: "Bhuj: The Pride of India is a 2021 Indian Hindi-language war film[2] directed by Abhishek Dudhaiya.[3] Set during the Indo-Pakistani War of 1971, it follows Indian Air Force Squadron Leader Vijay Karnik — then in-charge of the Bhuj Air Force Base who, with the help of 300 local women of Madhapar Village, reconstructed the damaged landing strip in 72 hours.[4] The film features Ajay Devgn as Karnik, alongside Sanjay Dutt, Sonakshi Sinha, Nora Fatehi, Sharad Kelkar, Ammy Virk and Ihana Dhillon.",
    },
    {
        id: 76,
        name: "Big Boss 17",
        category: "Home",
        image: "https://www.auditionformdates.in/wp-content/uploads/2023/10/bigg-boss-17-contestants-List-with-photos.jpg",
        text: "Bigg Boss 17, which went on-air on October 15, has many interesting faces this year. One of the most controversial reality show on Hindi small screen is based on the theme of ‘Dil, Dimaag aur Dum’ this time. Apart from many interesting and new things, the house has a European design. The reality show has contestants, who have been a part of several controversies. The house features some very popular couples from the television industry like Ankita Lokhande- Vicky Jain and Aishwarya Sharma-Neil Bhat and also single contestants like Munawar Faruqui, Abhishek Kumar and many more. Let’s take a look at the names, who all are rocking this season. Netizens are already rooting for their favrouites.",
    },
    {
        id: 77,
        name: "Indian Idol",
        category: "Home",
        image: "https://www.koimoi.com/wp-content/new-galleries/2021/05/indian-idol-12-heres-why-neha-kakkar-himesh-reshammiya-vishal-dadlani-should-not-be-replaced-001.jpg",
        text: "Indian Idol is an Indian Hindi-language singing reality show of Sony TV. It is an Indian version of the British show Pop Idol and is part of Indian Idol series. It has aired on Sony Entertainment Television since 2004.[1] Originally produced by Miditech Studios and its iconic producer-brothers, Niret Alva, Nikhil J Alva and Nivedith Alva, the series was an instant success when it launched. The brothers produced the first 5 seasons of the series and were instrumental in laying the foundation for its future success.",
    },
    {
        id: 78,
        name: "Mother India",
        category: "Home",
        image: "https://m.media-amazon.com/images/M/MV5BNmM5NzkzNjUtMjJlZC00ZmY0LWJlMjUtN2QyY2IyZDIyYjUwXkEyXkFqcGdeQXVyODMyODMxNDY@._V1_.jpg",
        text: "Mother India played a key role in shaping the young Republic of India's national identity in its early years following independence from the British Raj, due to how the film was able to successfully convey a sense of Indian nationalism to the urban and rural masses.",
    },

    {
        id: 82,
        category: "Home",
        name: "Healthy Habits for a Balanced Lifestyle",
        image: "https://possible.in/wp-content/uploads/2020/11/balanced-diet-chart-1-1024x683.jpg",
        text: "Explore healthy habits that contribute to a bscover practices that promote overall well-being."
    },
];

export default data