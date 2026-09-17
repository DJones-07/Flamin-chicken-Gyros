const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const art=document.querySelector('.hero-art img');
let ticking=false;
function updateHero(){if(art&&!reduced.matches){const p=Math.min(window.scrollY,1100);art.style.transform=`translateY(${p*.16}px) scale(${1+p*.00006})`;}ticking=false;}
window.addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(updateHero);}},{passive:true});
reduced.addEventListener('change',()=>{if(art)art.style.transform='';updateHero();});updateHero();
const reviews=[
['Saleema Muhammad','Food was delicious and the lemonade was everything!!!'],
['Emily Adams','The food tastes so good. I came in with my family we all enjoyed our food very friendly staff and welcoming atmosphere'],
['Bianca Garcia','food was great! loved the blue refresher and lemonade slushy! smash burger was delicious! favorite was the hot chicken and cookies and cream waffles! 10/10 would come here again!'],
['Diana Martinez','The food was fresh, hot, and HUGE portions. I think my fave def had to be the loaded fries with the Nashville hot tenders. Staff was nice, we came in when there was a huge line, workers worked fast af and cleared everyone out. All while being respectful and attentive. Also loveeee that they have a drive through.'],
['Cristal Flores Navarro','Everything we ordered was delicious but what truly stole the show was their Monster Smash Burger along with their BBQ tenders.'],
['Abdelhai Abdelqader','Loved the gyro and crispy fries. Staff were friendly, food came fast, good prices. Plan to be back with my family'],
['Kathy Readingqueen1','Everything came out fresh, hot, and full of flavor. The chicken was crispy, the gyro was on point, and the portions were definitely worth it. The staff was super welcoming too. One of those spots you already know you’re coming back👍👍👍👍'],
['Sophia A','10/10 food and service🔥🔥🔥🔥👏🏼👏🏼👏🏼👏🏼👏🏼gyro was so good'],
['Cats Coffee','Chicken, fries and refreshers were delicious'],
['gharam alsnayyan','I had the beef and chicken platter, wings, fries, and refresher. The beef and chicken platter with the rice and salad was delicious and perfectly seasoned. The wings were cooked perfectly and served on top of a bed of nice crispy fries. The refresher was perfect for a sunny day. Definitely coming back!'],
['Cecil Archbold Jr.',"We had the gyros (yeee-rose) and I must say that I've had better. The meat was ok, but rhe pita bread was quite soggy. Fries and onion rings were cold. The wait was a bit long. That being said, since they're new I would still give them another chance."],
['aviona shephard','Not gon lie, trash. Ordered chicken wings and waffle. Waffles are hard and flavorless, the chicken is your average freezer steroided chicken with mostly fat. Wouldnt eat here again.'],
['Michael McNease','It’s okay waited 27min for my food to only be disappointed with it taste just like any other fast food chain ordered 9 piece wing and only got 2 flats shrimp was good but dry gyro had more tomato’s then meat I get it they just opened but y’all got to do better but I give y’all a 10 for the refresher drinks they were fye'],
['Tityanna Cutrin','Listen this place is gone be my new spot for sure prices are good food was amazing and the wait didn’t take that long I had the mix gyro n man o man was I not disappointed I wanna come back and try yall flaming hot balls and the cheese …'],
['Focuson Thegood999llc','Salty and fries were soggy. Nice people'],
['Jennifer Goewey','Food was good, steak salty. Customer service great!'],
['Ghalih s','The food was great and everything tasted fresh and flavorful. The chicken was really good. you can tell they really care about the community, their customers and the quality of their food. Definitely a great spot in Hazel Crest and somewhere I’ll be coming back to'],
['Rigo Navarrete','Usually not the one to make reviews but I had too, ordered a double og burger repeated it twice and still got upcharged to the triple , would’ve let it slide but the burger just wasn’t good at all. Save your money'],
['priscilla reveles',"The portions here are huge and everything is seasoned well. Staff was very friendly and professional. The Nashville hot chicken sandwich & Waffles + tenders we're my personal favorites. I will definitely be back to try more items on their menu."],
['Ashanti A','Great Customer Service Great Smile❣️❣️❣️❣️'],
['Lanard A','Love the food definitely be back'],
['Yasmine Duran','YUM!!!! Flamin hot mozz stick is to die for <3 love the variety on the menu and the salad option. Something for everyone! Will be back Saturday for grand opening.']];
const list=document.querySelector('#review-list');
if(list){reviews.forEach(([name,quote],i)=>{const card=document.createElement('article');card.className='review';card.hidden=i>=3;const mark=document.createElement('div');mark.className='quote-mark';mark.setAttribute('aria-hidden','true');mark.textContent='“';const block=document.createElement('blockquote');block.textContent=quote;const cite=document.createElement('cite');cite.textContent=name;card.append(mark,block,cite);list.append(card);});const toggle=document.querySelector('.review-toggle');toggle.addEventListener('click',()=>{const expanded=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',expanded);list.querySelectorAll('.review').forEach((card,i)=>card.hidden=!expanded&&i>=3);toggle.textContent=expanded?'SHOW FEWER REVIEWS −':'READ ALL REVIEWS +';if(!expanded)list.scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'});});}
