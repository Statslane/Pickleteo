export const siteUrl='https://pickleteo.com';
export const pages={
'/policies':{title:'Club Policies & Visitor Guidance | Pickleteo',description:'Read Pickleteo’s privacy policy, code of conduct, and liability release. Prepare for your visit in the Mukilteo and Everett area.'},
'/membership':{title:'Pickleball Memberships & Guest Options | Pickleteo',description:'Compare guest registration, Open Play Plus, Premium Plus, and the two-player plan at Pickleteo in the Mukilteo and Everett area. Find a comfortable way to start.'},
'/learn-improve':{title:'Pickleball Classes & Learning | Mukilteo & Everett | Pickleteo',description:'Start with a free beginner pickleball class or explore current group learning at Pickleteo in the Mukilteo and Everett area. Find your next step and book through CourtReserve.'},
'/':{title:'Indoor Pickleball | Mukilteo & Everett Area | Pickleteo',description:'Play, connect, and belong at Pickleteo Paddle Club. Eight indoor courts, a free beginner class, open play, and memberships in the Mukilteo and Everett area.'},
'/open-play':{title:'Pickleball Open Play & Beginner Classes | Pickleteo',description:'Find your open play in the Mukilteo and Everett area. Explore beginner classes, general open play, and DUPR grouped play, then book through CourtReserve.'},
'/the-club':{title:'Indoor Pickleball Courts & Memberships | Pickleteo',description:'Explore eight dedicated indoor pickleball courts, cushioned surfaces, and a welcoming community serving the Mukilteo and Everett area.'},
'/about':{title:'Our Pickleball Community | About Pickleteo Paddle Club',description:'Meet the people behind Pickleteo, a locally owned indoor pickleball club serving the Mukilteo and Everett area. A place to belong, improve, and keep coming back.'},
'/contact':{title:'Visit & Contact Pickleteo | Mukilteo & Everett Area',description:'Plan your first visit to Pickleteo Paddle Club at 2716 119th Street SW, Everett, WA. Get beginner guidance, directions, and help with open play or membership.'},
'/sponsor':{title:'Local Business Partnerships | Pickleteo Paddle Club',description:'Explore facility, court, and category partnerships at Pickleteo Paddle Club. Connect with the pickleball community in the Mukilteo and Everett area.'}
};
export const business={
'@context':'https://schema.org','@type':'SportsActivityLocation','@id':siteUrl+'/#club',name:'Pickleteo Paddle Club',url:siteUrl+'/',image:siteUrl+'/optimized/pickleteo-community.jpg',logo:siteUrl+'/Pickleteologo.png',telephone:'+1-425-513-8946',email:'Info@pickleteo.com',description:pages['/'].description,
address:{'@type':'PostalAddress',streetAddress:'2716 119th Street SW',addressLocality:'Everett',addressRegion:'WA',postalCode:'98204',addressCountry:'US'},
areaServed:[{'@type':'City',name:'Mukilteo'},{'@type':'City',name:'Everett'}],
sameAs:['https://www.facebook.com/people/Pickleteo-Paddle-Club/61592873541442/','https://www.instagram.com/pickleteopaddleclub/']
};
