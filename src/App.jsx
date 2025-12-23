import React from 'react';
import Card from './components/Card';

const App = () => {
  const marvelHeroes = [
    {
      bannerIMG: 'https://i.pinimg.com/1200x/38/3e/b1/383eb13e3bdcd850353a7a8597380b5d.jpg',
      profileIMG: 'https://i.pinimg.com/736x/c4/7c/1e/c47c1ea05a6722d420c4caf751d02675.jpg',
      powerLevel: 95,
      name: 'Iron Man',
      about: 'Genius billionaire builds armored suits to protect humanity',
      likedCount: '520k',
      postsCount: 340,
      viewsCount: '980k',
      instaIDUrl: 'https://www.instagram.com/robertdowneyjr/',
      twitterIDUrl: 'https://x.com/RobertDowneyJr',
      threadsIDUrl: 'https://www.threads.com/@robertdowneyjr',
    },
    {
      bannerIMG: 'https://i.pinimg.com/1200x/59/20/61/5920614da6388bb915bd01ea127e69df.jpg',
      profileIMG: 'https://i.pinimg.com/736x/70/1a/b8/701ab85e6ef7f4af1491a06cc885e04f.jpg',
      powerLevel: 75,
      name: 'Captain America',
      about: 'Super soldier symbolizing leadership courage and moral strength',
      likedCount: '460k',
      postsCount: 280,
      viewsCount: '870k',
      instaIDUrl: 'https://www.instagram.com/teamcevans/?hl=en',
      twitterIDUrl: 'https://x.com/chrisevans',
      threadsIDUrl: 'https://www.threads.com/@teamcevans',
    },
    {
      bannerIMG: 'https://i.pinimg.com/1200x/10/b0/3a/10b03a10f4dafa9661c095170c5d259c.jpg',
      profileIMG: 'https://i.pinimg.com/1200x/93/8d/bd/938dbd0c57b6b8550b7f720f65795deb.jpg',
      powerLevel: 95,
      name: 'Hulk',
      about: 'Radiation transformed scientist into unstoppable green powerhouse',
      likedCount: '610k',
      postsCount: 190,
      viewsCount: '1200k',
      instaIDUrl: 'https://www.instagram.com/hulk/',
      twitterIDUrl: 'https://twitter.com/Hulk',
      threadsIDUrl: 'https://www.threads.net/@hulk',
    },
    {
      bannerIMG: 'https://i.pinimg.com/1200x/d0/6d/2a/d06d2af7baa51a099d184e0200d59b30.jpg',
      profileIMG: 'https://i.pinimg.com/1200x/db/6c/86/db6c86989e386be87994f05c887fe6a7.jpg',
      powerLevel: 80,
      name: 'Spider Man',
      about: 'Young hero balances responsibility power and personal sacrifice',
      likedCount: '720k',
      postsCount: 410,
      viewsCount: '1500k',
      instaIDUrl: 'https://www.instagram.com/spiderman/',
      twitterIDUrl: 'https://twitter.com/SpiderMan',
      threadsIDUrl: 'https://www.threads.net/@spiderman',
    },
    {
      bannerIMG: 'https://i.pinimg.com/1200x/d2/db/a4/d2dba4899893186b34649bbb22536747.jpg',
      profileIMG: 'https://i.pinimg.com/736x/38/49/20/384920a78833528e23f9c6e1d0932323.jpg',
      powerLevel: 98,
      name: 'Thor',
      about: 'Asgardian god wields thunder hammer and cosmic strength',
      likedCount: '680k',
      postsCount: 260,
      viewsCount: '1400k',
      instaIDUrl: 'https://www.instagram.com/thorofficial/',
      twitterIDUrl: 'https://twitter.com/ThorOfficial',
      threadsIDUrl: 'https://www.threads.net/@thorofficial',
    },
    {
      bannerIMG: 'https://i.pinimg.com/1200x/00/bb/4d/00bb4dc76902e87a71476b0723563c19.jpg',
      profileIMG: 'https://i.pinimg.com/736x/07/47/e5/0747e5603366634b2d5bc92c98cfcbff.jpg',
      powerLevel: 70,
      name: 'Black Widow',
      about: 'Elite spy assassin mastering combat intelligence and strategy',
      likedCount: '430k',
      postsCount: 310,
      viewsCount: '760k',
      instaIDUrl: 'https://www.instagram.com/blackwidow/',
      twitterIDUrl: 'https://twitter.com/BlackWidow',
      threadsIDUrl: 'https://www.threads.net/@blackwidow',
    },
    {
      bannerIMG: 'https://i.pinimg.com/1200x/cb/f6/2a/cbf62a7fb21fc4378514874033ad60f2.jpg',
      profileIMG: 'https://i.pinimg.com/1200x/8d/88/2d/8d882ddd7c1093997b8079b47b1fa909.jpg',
      powerLevel: 92,
      name: 'Doctor Strange',
      about: 'Master sorcerer protects reality across dimensions',
      likedCount: '510k',
      postsCount: 230,
      viewsCount: '980k',
      instaIDUrl: 'https://www.instagram.com/doctorstrange/',
      twitterIDUrl: 'https://twitter.com/DrStrange',
      threadsIDUrl: 'https://www.threads.net/@doctorstrange',
    },
    {
      bannerIMG: 'https://i.pinimg.com/1200x/99/45/2d/99452d57524032045be5dadab0c11616.jpg',
      profileIMG: 'https://i.pinimg.com/736x/50/b2/f3/50b2f3bb3b5c71379967e0ee1e1aeb39.jpg',
      powerLevel: 65,
      name: 'Ant Man',
      about: 'Size changing hero combines tech intellect and agility',
      likedCount: '390k',
      postsCount: 180,
      viewsCount: '620k',
      instaIDUrl: 'https://www.instagram.com/antman/',
      twitterIDUrl: 'https://twitter.com/AntMan',
      threadsIDUrl: 'https://www.threads.net/@antman',
    },
    {
      bannerIMG: 'https://i.pinimg.com/1200x/fa/77/8b/fa778ba7e9768c1646c12eaeaee15892.jpg',
      profileIMG: 'https://i.pinimg.com/736x/4e/7c/bb/4e7cbbcafb396a204255d4ba414a74af.jpg',
      powerLevel: 88,
      name: 'Black Panther',
      about: 'Wakandan king enhanced by vibranium technology',
      likedCount: '640k',
      postsCount: 270,
      viewsCount: '1100k',
      instaIDUrl: 'https://www.instagram.com/blackpanther/',
      twitterIDUrl: 'https://twitter.com/BlackPanther',
      threadsIDUrl: 'https://www.threads.net/@blackpanther',
    },
    {
      bannerIMG: 'https://i.pinimg.com/1200x/d4/6c/c9/d46cc91751b02766d95015bda2c6b693.jpg',
      profileIMG: 'https://i.pinimg.com/1200x/eb/ab/a2/ebaba2ed4a490dfc61abce8415b17c75.jpg',
      powerLevel: 99,
      name: 'Scarlet Witch',
      about: 'Reality bending chaos magic wielder with immense power',
      likedCount: '700k',
      postsCount: 250,
      viewsCount: '1600k',
      instaIDUrl: 'https://www.instagram.com/scarletwitch/',
      twitterIDUrl: 'https://twitter.com/ScarletWitch',
      threadsIDUrl: 'https://www.threads.net/@scarletwitch',
    },
    {
      bannerIMG: 'https://i.pinimg.com/1200x/fd/d9/19/fdd919ad56e82ae580a7b3212ca473e9.jpg',
      profileIMG: 'https://i.pinimg.com/736x/f1/11/fd/f111fd4ea97d0ce832a9de9c8375b49d.jpg',
      powerLevel: 68,
      name: 'Hawkeye',
      about: 'Master archer delivers precision under extreme pressure',
      likedCount: '350k',
      postsCount: 210,
      viewsCount: '590k',
      instaIDUrl: 'https://www.instagram.com/hawkeye/',
      twitterIDUrl: 'https://twitter.com/Hawkeye',
      threadsIDUrl: 'https://www.threads.net/@hawkeye',
    },
    {
      bannerIMG: 'https://i.pinimg.com/1200x/07/ab/14/07ab1464c2b3a1119b5abf1bfcba00d0.jpg',
      profileIMG: 'https://i.pinimg.com/1200x/f6/f8/e1/f6f8e1c7bb92d6814bd6d89ae8c94a0a.jpg',
      powerLevel: 90,
      name: 'Vision',
      about: 'Synthetic being powered by mind stone intelligence',
      likedCount: '420k',
      postsCount: 160,
      viewsCount: '840k',
      instaIDUrl: 'https://www.instagram.com/vision/',
      twitterIDUrl: 'https://twitter.com/Vision',
      threadsIDUrl: 'https://www.threads.net/@vision',
    },
  ];

  return (
    <div className="flex gap-10 flex-wrap p-10">
      {marvelHeroes.map(function (elem) {
        return (
          <Card
            bannerIMG={elem.bannerIMG}
            profileIMG={elem.profileIMG}
            powerLevel={elem.powerLevel}
            name={elem.name}
            about={elem.about}
            likedCount={elem.likedCount}
            postsCount={elem.postsCount}
            viewsCount={elem.viewsCount}
            instaIDUrl={elem.instaIDUrl}
            twitterIDUrl={elem.twitterIDUrl}
            threadsIDUrl={elem.threadsIDUrl}
          />
        );
      })}
    </div>
  );
};

export default App;
