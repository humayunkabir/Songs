import React, { Component } from 'react';
import Song from '../Song/Song';

class Songs extends Component {
  state = {
    songs: [
      {
        id: 2698,
        song_name: 'Khali Khali Dil',
        song_link: 'Jn__xRrgyLs',
        album_name: 'Tera Intezaar'
      },
      {
        id: 1667,
        song_name: 'Main Agar',
        song_link: '2KX1gtpGmr0',
        album_name: 'Tubelight'
      },
      {
        id: 1651,
        song_name: 'Dhingana',
        song_link: '8z-WAHG6KB4',
        album_name: 'Raees'
      },
      {
        id: 1680,
        song_name: 'Twist Kamariya (Bareilly Ki Barfi)',
        song_link: 'emdoqHkeAE8',
        album_name: 'Bareilly Ki Barfi'
      },
      {
        id: 1639,
        song_name: 'Kisi Se Pyar Ho Jaye',
        song_link: 'C0KbzZj3UjA',
        album_name: 'Kaabil'
      },
      {
        id: 2688,
        song_name: 'Main Hoon Saath Tere',
        song_link: 'JJPdkXOz8-I',
        album_name: 'Shaadi Mein Zaroor Aana'
      },
      {
        id: 1657,
        song_name: 'Butterfly',
        song_link: 'PHLWb8RPL54',
        album_name: 'Jab Harry met Sejal'
      },
      {
        id: 2721,
        song_name: 'Jaane De (Qarib Qarib Singlle)',
        song_link: 'SGnplPaW1dw',
        album_name: 'Qarib Qarib Singlle'
      },
      {
        id: 2669,
        song_name: 'Golmaal Title Track',
        song_link: 'SWvQyQsJw04',
        album_name: 'Golmaal Again'
      },
      {
        id: 1633,
        song_name: 'Ullu Ka Pattha',
        song_link: 'h2GhQBI5YGw',
        album_name: 'Jagga Jasoos'
      },
      {
        id: 2706,
        song_name: 'Peh Gaya Khalara (Fukrey Returns)',
        song_link: 'pXs2MEuHFj0',
        album_name: 'Fukrey Returns'
      },
      {
        id: 1674,
        song_name: 'Cheez Badi ',
        song_link: 'Ek17-Sh7jtA',
        album_name: 'Machine'
      },
      {
        id: 2682,
        song_name: 'Farrata',
        song_link: 'zzcADCuQA2U',
        album_name: 'Tumhari Sulu'
      },
      {
        id: 1646,
        song_name: 'Bakheda',
        song_link: 'gwMhODNWi38',
        album_name: "Toilettes: Une Histoire d'Amour"
      },
      {
        id: 2038,
        song_name: 'Aa To Sahii Full Video Song',
        song_link: '8R4NDog2690',
        album_name: 'Judwaa 2'
      },
      {
        id: 1691,
        song_name: 'Roke Na Ruke Naina',
        song_link: 'MQ-9qj4gUZs',
        album_name: 'Badrinath Ki Dulhania'
      },
      {
        id: 2699,
        song_name: 'Mehfooz',
        song_link: 'G0voVCZaRwE',
        album_name: 'Tera Intezaar'
      },
      {
        id: 1668,
        song_name: 'Kuch Nahi',
        song_link: 'BO99lX_I4jg',
        album_name: 'Tubelight'
      },
      {
        id: 1652,
        song_name: 'Enu Naam Che Raees',
        song_link: 'f-Yb7coBIMw',
        album_name: 'Raees'
      },
      {
        id: 1640,
        song_name: 'Kaabil Hoon',
        song_link: 'O65JHeSDhuc',
        album_name: 'Kaabil'
      },
      {
        id: 1681,
        song_name: 'Bairaagi (Bareilly Ki Barfi)',
        song_link: '6hJF5xsCJtk',
        album_name: 'Bareilly Ki Barfi'
      },
      {
        id: 2689,
        song_name: 'Pallo Latke',
        song_link: 'FjQk-2jHevs',
        album_name: 'Shaadi Mein Zaroor Aana'
      },
      {
        id: 1658,
        song_name: 'Hawayein',
        song_link: 'cs1e0fRyI18',
        album_name: 'Jab Harry met Sejal'
      },
      {
        id: 508,
        song_name: 'Enna Sona ',
        song_link: '1I2aa1sf5NA',
        album_name: 'OK Jaanu'
      },
      {
        id: 2670,
        song_name: 'Maine Tujhko Dekha',
        song_link: 'O3-hJuKpt8c',
        album_name: 'Golmaal Again'
      },
      {
        id: 1634,
        song_name: ' Galti Se Mistake',
        song_link: '05TA9jNnCdU',
        album_name: 'Jagga Jasoos'
      },
      {
        id: 2707,
        song_name: 'Tu Mera Bhai Nahi Hai',
        song_link: 'K3aOwgOld9Q',
        album_name: 'Fukrey Returns'
      },
      {
        id: 1675,
        song_name: 'Go Pagal',
        song_link: 'iFARFbekNl8',
        album_name: 'Jolly LLB 2'
      },
      {
        id: 2683,
        song_name: 'Rafu',
        song_link: 'oS-0jES79d8',
        album_name: 'Tumhari Sulu'
      },
      {
        id: 1647,
        song_name: 'Gori Tu Latth Maar',
        song_link: '2WIm3PLAo-w',
        album_name: "Toilettes: Une Histoire d'Amour"
      },
      {
        id: 2039,
        song_name: 'Kudiya Shehar Diyan',
        song_link: '92GZNSJICQE',
        album_name: 'Poster Boys'
      },
      {
        id: 1692,
        song_name: 'Humsafar',
        song_link: 'jIqRbFQl-ds',
        album_name: 'Badrinath Ki Dulhania'
      },
      {
        id: 2700,
        song_name: 'Oh Julie',
        song_link: 'VBDvtf6eJSU',
        album_name: 'Julie 2'
      },
      {
        id: 1669,
        song_name: 'Itna Tumhe',
        song_link: 'DWplVuPBtvo',
        album_name: 'Machine'
      },
      {
        id: 1653,
        song_name: 'Halka Halka',
        song_link: 'nXCgarpO92A',
        album_name: 'Raees'
      },
      {
        id: 1641,
        song_name: 'Haseeno Ka Deewana',
        song_link: 'ldy17W1xi-c',
        album_name: 'Kaabil'
      },
      {
        id: 1682,
        song_name: 'Mere Rashke Qamar',
        song_link: 'UGkLd1pxHQ0',
        album_name: 'Baadshaho'
      },
      {
        id: 2690,
        song_name: 'Tu Banja Gali Benaras Ki',
        song_link: '8TMljz7W-r8',
        album_name: 'Shaadi Mein Zaroor Aana'
      },
      {
        id: 1659,
        song_name: 'Hawayein (Film Version)',
        song_link: 'cs1e0fRyI18',
        album_name: 'Jab Harry met Sejal'
      },
      {
        id: 1686,
        song_name: 'Disco Disco',
        song_link: 'I5SzASOuZVA',
        album_name: 'A Gentleman'
      },
      {
        id: 509,
        song_name: 'The Humma Song ',
        song_link: '1tVL11ULjYY',
        album_name: 'OK Jaanu'
      },
      {
        id: 2671,
        song_name: 'Itna Sannata Kyun Hai',
        song_link: 'GF1r9GJnIM4',
        album_name: 'Golmaal Again'
      },
      {
        id: 1635,
        song_name: 'Jhumritalaiyya',
        song_link: 'exUQkIkyBBI',
        album_name: 'Jagga Jasoos'
      },
      {
        id: 1676,
        song_name: 'Bawara Mann',
        song_link: 'xuMFlMMz--4',
        album_name: 'Jolly LLB 2'
      },
      {
        id: 2684,
        song_name: 'Aaj Zid',
        song_link: 'vCxVELoXIu0',
        album_name: 'Aksar 2'
      },
      {
        id: 1648,
        song_name: 'Subha Ki Train',
        song_link: 'gWFi9giL974',
        album_name: "Toilettes: Une Histoire d'Amour"
      },
      {
        id: 2692,
        song_name: 'Kudiya Shehar Diyan',
        song_link: 'd1iYid7iOl8',
        album_name: 'Poster Boys'
      },
      {
        id: 1693,
        song_name: 'Badri ki Dulhania (Title Track)',
        song_link: '1YBl3Zbt80A',
        album_name: 'Badrinath Ki Dulhania'
      },
      {
        id: 2665,
        song_name: 'Main Kaun Hoon',
        song_link: 'XyZ0aXrpJIc',
        album_name: 'Secret Superstar'
      },
      {
        id: 1660,
        song_name: 'Main Hoon',
        song_link: 'fRboF7OGWXY',
        album_name: 'Munna Michael'
      },
      {
        id: 2702,
        song_name: 'Kharama Kharama',
        song_link: 'BanOtf5J1Wo',
        album_name: 'Julie 2'
      },
      {
        id: 1670,
        song_name: 'Chatur Naar',
        song_link: 'scyqtxYBlP4',
        album_name: 'Machine'
      },
      {
        id: 1642,
        song_name: 'Kuch Din',
        song_link: '_KgB9lLIh1o',
        album_name: 'Kaabil'
      },
      {
        id: 1683,
        song_name: 'Piya More',
        song_link: 'Y-xtph3p6fc',
        album_name: 'Baadshaho'
      },
      {
        id: 2691,
        song_name: 'Jogi',
        song_link: 'q5gGKGyQM9Y',
        album_name: 'Shaadi Mein Zaroor Aana'
      },
      {
        id: 1664,
        song_name: 'Radio (From "Tubelight")',
        song_link: 'FIMz4M2Vuw4',
        album_name: 'Tubelight'
      },
      {
        id: 507,
        song_name: 'Laila Main Laila',
        song_link: '95I5VaR7GeU',
        album_name: 'Raees'
      },
      {
        id: 1687,
        song_name: 'Baat Ban Jaye',
        song_link: 'MNdSI78fdHg',
        album_name: 'A Gentleman'
      },
      {
        id: 1677,
        song_name: 'Jolly Good Fellow',
        song_link: 'iz3nhmKcg8c',
        album_name: 'Jolly LLB 2'
      },
      {
        id: 510,
        song_name: 'Ok Jaanu ',
        song_link: 'eNTAj6J1mcU',
        album_name: 'OK Jaanu'
      },
      {
        id: 2672,
        song_name: 'Hum Nahi Sudhrenge',
        song_link: 'IwSZzuvevyc',
        album_name: 'Golmaal Again'
      },
      {
        id: 1636,
        song_name: ' Phir Wahi',
        song_link: 'AEyZHaW_tnw',
        album_name: 'Jagga Jasoos'
      },
      {
        id: 2685,
        song_name: 'Jaana Ve',
        song_link: 'aq1brn98Zi4',
        album_name: 'Aksar 2'
      },
      {
        id: 1654,
        song_name: 'Radha',
        song_link: 'U5Gyw-nGf1I',
        album_name: 'Jab Harry met Sejal'
      },
      {
        id: 2693,
        song_name: 'Kendhi Menoo',
        song_link: 'NMlH6QitBWM',
        album_name: 'Poster Boys'
      },
      {
        id: 1694,
        song_name: 'Tamma Tamma Again',
        song_link: 'EEX_XM6SxmY',
        album_name: 'Badrinath Ki Dulhania'
      },
      {
        id: 2666,
        song_name: 'Meri Pyaari Ammi',
        song_link: 'z4I2H6Mulc0',
        album_name: 'Secret Superstar'
      },
      {
        id: 1661,
        song_name: 'Ding Dang',
        song_link: 'wo0ospGvxXc',
        album_name: 'Munna Michael'
      },
      {
        id: 2703,
        song_name: 'Mala Seena',
        song_link: 'SoE7OW5F4iI',
        album_name: 'Julie 2'
      },
      {
        id: 1671,
        song_name: "Brake'an Fail",
        song_link: '9LuoLNbizmA',
        album_name: 'Machine'
      },
      {
        id: 2679,
        song_name: 'Ban Ja Rani ',
        song_link: 'hlvbDjksdCg',
        album_name: 'Tumhari Sulu'
      },
      {
        id: 1643,
        song_name: 'Mon Amour',
        song_link: 'aMbAZegLgd4',
        album_name: 'Kaabil'
      },
      {
        id: 1684,
        song_name: 'Socha Hai',
        song_link: '0SgJam0z6uY',
        album_name: 'Baadshaho'
      },
      {
        id: 1688,
        song_name: 'Chandralekha',
        song_link: 'oZk1hztvYSQ',
        album_name: 'A Gentleman'
      },
      {
        id: 2696,
        song_name: 'Intezaar Title',
        song_link: 'qwrJTuVEM0I',
        album_name: 'Tera Intezaar'
      },
      {
        id: 1665,
        song_name: 'Naach Meri Jaan',
        song_link: 'xbAEUGhAubU',
        album_name: 'Tubelight'
      },
      {
        id: 1649,
        song_name: 'Zaalima',
        song_link: 'lpdRqn6xwiM',
        album_name: 'Raees'
      },
      {
        id: 1678,
        song_name: 'Sweety Tera Drama (Bareilly Ki Barfi)',
        song_link: 'RpuhD_xKadk',
        album_name: 'Bareilly Ki Barfi'
      },
      {
        id: 2673,
        song_name: 'Ghoomar Song',
        song_link: '6cKErCWrb44',
        album_name: 'Padmavati'
      },
      {
        id: 1637,
        song_name: 'Musafir ',
        song_link: 'JA3LFzTDAsc',
        album_name: 'Jagga Jasoos'
      },
      {
        id: 2686,
        song_name: 'Tanhaiyaan',
        song_link: '843tRSfVnKA',
        album_name: 'Aksar 2'
      },
      {
        id: 1655,
        song_name: 'Beech Beech Mein',
        song_link: 'wp1qNO_mPOg',
        album_name: 'Jab Harry met Sejal'
      },
      {
        id: 2719,
        song_name: 'Khatam Kahani (Qarib Qarib Singlle)',
        song_link: 'DlAi7Vu5Ewc',
        album_name: 'Qarib Qarib Singlle'
      },
      {
        id: 2694,
        song_name: 'Noor E Khuda',
        song_link: 'YsirNSHLywQ',
        album_name: 'Poster Boys'
      },
      {
        id: 1695,
        song_name: 'Humsafar',
        song_link: 'jIqRbFQl-ds',
        album_name: 'Badrinath Ki Dulhania'
      },
      {
        id: 2667,
        song_name: 'Sapne Re',
        song_link: 'tQZdmF3VZyg',
        album_name: 'Secret Superstar'
      },
      {
        id: 1662,
        song_name: 'Pyar Ho',
        song_link: '19Q9l85Feqw',
        album_name: 'Munna Michael'
      },
      {
        id: 2704,
        song_name: 'Koi Hausla Toh Hoh',
        song_link: '6lGv-QVotGs',
        album_name: 'Julie 2'
      },
      {
        id: 1672,
        song_name: 'Tu Hi Toh Mera',
        song_link: 'QLpjCxQNl-E',
        album_name: 'Machine'
      },
      {
        id: 786,
        song_name: 'Soniye - Rare ',
        song_link: 'A9MnkEEP0lE',
        album_name: 'Six X'
      },
      {
        id: 619,
        song_name: 'Mar Gaye (Punjabi Version) ',
        song_link: 'JZE4-Bek4rY',
        album_name: 'Beiimaan Love'
      },
      {
        id: 870,
        song_name: 'Muchhi Re',
        song_link: '9FEY1fhA294',
        album_name: 'Veerappan'
      },
      {
        id: 1043,
        song_name: 'ROCK THA PARTY',
        song_link: 'gwqenR0crHo',
        album_name: 'Rocky Handsome'
      },
      {
        id: 908,
        song_name: 'High Heels Te Nachche',
        song_link: 'N_KpjLhJa1k',
        album_name: 'Ki & Ka'
      },
      {
        id: 515,
        song_name: 'Dil Ke Paas ',
        song_link: 'DwsV4uTaQwM',
        album_name: 'Wajah Tum Ho'
      },
      {
        id: 1075,
        song_name: 'Yaad Hai Na (Unplugged)',
        song_link: '0Yu6vr3hrUg',
        album_name: 'Raaz Reboot'
      },
      {
        id: 543,
        song_name: 'Ishq Mubarak ',
        song_link: 'qQJ7Bp3eWyY',
        album_name: 'Tum Bin 2'
      },
      {
        id: 1712,
        song_name: 'Haminastu',
        song_link: 'mX5NorzYOa8',
        album_name: 'Fitoor'
      },
      {
        id: 582,
        song_name: 'Dard Ka Pata ',
        song_link: 'XgXDQvaWTXo',
        album_name: 'Gandhigiri'
      },
      {
        id: 1088,
        song_name: 'Main Teri Yaadon Mein',
        song_link: 'xZneyP0QxAk',
        album_name: 'Sanam Teri Kasam'
      },
      {
        id: 799,
        song_name: 'JEELEY YEH LAMHE',
        song_link: 'Jd3mjnDHnRc',
        album_name: 'Days of Tafree'
      },
      {
        id: 876,
        song_name: 'Baby Ko Bass Pasand Hai',
        song_link: 'aWMTj-rejvc',
        album_name: 'Sultan'
      },
      {
        id: 844,
        song_name: 'Resham Ka Rumaal',
        song_link: '8pLylomQCe0',
        album_name: 'Great Grand Masti'
      },
      {
        id: 922,
        song_name: 'Dard',
        song_link: '51xWny9Wsdo',
        album_name: 'Sarbjit'
      },
      {
        id: 1056,
        song_name: 'Aankhein Milayenge Darr Se',
        song_link: 'yRwg7QgJUHk',
        album_name: 'Neerja'
      },
      {
        id: 914,
        song_name: 'Aafreen',
        song_link: 'wLmH8lQKIOc',
        album_name: '1920 London'
      },
      {
        id: 559,
        song_name: 'Nashe Si Chadh Gayi ',
        song_link: 'Wd2B8OAotU8',
        album_name: 'Befikre'
      },
      {
        id: 825,
        song_name: 'Khair Mangda',
        song_link: 'Jafq7tqCZVM',
        album_name: 'A Flying Jatt'
      },
      {
        id: 865,
        song_name: 'Long Night',
        song_link: 'Sz8mQNLrx9k',
        album_name: 'A Scandall'
      },
      {
        id: 1719,
        song_name: 'Fake Ishq',
        song_link: 'IQDH9DgpY-w',
        album_name: 'Housefull 3'
      },
      {
        id: 512,
        song_name: 'Ae Zindagi Gale Laga Le - Take 1 ',
        song_link: 'xQx5H14YTyQ',
        album_name: 'Dear Zindagi'
      },
      {
        id: 1069,
        song_name: 'Anandoloke',
        song_link: '1CpLbkdxdZo',
        album_name: 'Kahaani 2'
      },
      {
        id: 1706,
        song_name: 'Teri Khair Mangdi',
        song_link: 'dMByhaezv9A',
        album_name: 'Baar Baar Dekho'
      },
      {
        id: 573,
        song_name: 'Neat Quarter ',
        song_link: '3OEc9db6U8Q',
        album_name: 'Saat Uchakkey'
      },
      {
        id: 608,
        song_name: 'Bol Do Na Zara ',
        song_link: 'C5Z8WQv1Wf4',
        album_name: 'Azhar'
      },
      {
        id: 780,
        song_name: 'Jab Tak  ',
        song_link: '0mQLTWvXbXM',
        album_name: 'M.S. Dhoni: The Untold Story'
      },
      {
        id: 793,
        song_name: 'Om Ganapataye Namaha Deva ',
        song_link: 'IEBMWn_X3yo',
        album_name: 'Banjo'
      },
      {
        id: 839,
        song_name: 'Sau Tarah Ke',
        song_link: 'r2ecLFsdbzI',
        album_name: 'Dishoom'
      },
      {
        id: 879,
        song_name: 'Ikk Kudi',
        song_link: 'cyKZXbxx2lc',
        album_name: 'Udta Punjab'
      },
      {
        id: 1050,
        song_name: 'Humne Pee Rakhi Hai',
        song_link: '6nVaq23shLI',
        album_name: 'Sanam Re'
      },
      {
        id: 902,
        song_name: 'Ghaint Fan (Punjabi)',
        song_link: '0aOWAa3gbRg',
        album_name: 'Fan'
      },
      {
        id: 522,
        song_name: 'Dhaakad ',
        song_link: '0zFoHrvbRu4',
        album_name: 'Dangal'
      },
      {
        id: 1082,
        song_name: 'Kheech Meri Photo',
        song_link: 'piMC2DyaTeo',
        album_name: 'Sanam Teri Kasam'
      },
      {
        id: 551,
        song_name: 'Manzar Naya ',
        song_link: 'awaSW33N8N8',
        album_name: 'Rock On 2'
      },
      {
        id: 1723,
        song_name: 'Wafa Ne Bewafai',
        song_link: '8qdBFcHxiEg',
        album_name: 'Teraa Surroor'
      },
      {
        id: 666,
        song_name: 'Maya Thagni ',
        song_link: 'BkclzmMAdcI',
        album_name: 'Jai Gangaajal'
      },
      {
        id: 1063,
        song_name: 'Qatl-E-Aam (Unplugged)',
        song_link: 'vosWN0CkDP4',
        album_name: 'Raman Raghav 2.0'
      },
      {
        id: 921,
        song_name: 'Do Peg Maar',
        song_link: 'NSXK3fBDD0c',
        album_name: 'One Night Stand'
      },
      {
        id: 965,
        song_name: 'Jawaani Le Doobi',
        song_link: '_d3bMvcF4w0',
        album_name: 'Kyaa Kool Hain Hum 3'
      },
      {
        id: 1696,
        song_name: 'SOCH NA SAKE',
        song_link: 'MRtRcTfszjY',
        album_name: 'Airlift'
      },
      {
        id: 819,
        song_name: 'Happy Oye',
        song_link: '5cw87Y8zcyw',
        album_name: 'Happy Bhag Jayegi'
      },
      {
        id: 861,
        song_name: 'Pagalon Sa Naach',
        song_link: 'U_eYOX7qHQc',
        album_name: 'Junooniyat'
      },
      {
        id: 1101,
        song_name: 'Baadal',
        song_link: 'ZN_FPvihdAw',
        album_name: 'Naam Hai Akira'
      },
      {
        id: 1703,
        song_name: 'Saathi Rey',
        song_link: 'SYU4zsp8_fY',
        album_name: 'Kapoor & Sons'
      },
      {
        id: 787,
        song_name: 'Banni  ',
        song_link: 'tYav1pM0KQg',
        album_name: 'Six X'
      },
      {
        id: 620,
        song_name: 'Mar Gaye ',
        song_link: 'JZE4-Bek4rY',
        album_name: 'Beiimaan Love'
      },
      {
        id: 871,
        song_name: 'Veer Veer Veerappan ',
        song_link: 'AHXPabRPZAc',
        album_name: 'Veerappan'
      },
      {
        id: 1044,
        song_name: 'REHNUMA',
        song_link: '6Ss2Ga7A0TA',
        album_name: 'Rocky Handsome'
      },
      {
        id: 896,
        song_name: 'Haq Hai',
        song_link: 'mYJ_ysSbH8I',
        album_name: 'Te3n'
      },
      {
        id: 684,
        song_name: 'Chakora ',
        song_link: '7t9bT5QohRo',
        album_name: 'Mirzya'
      },
      {
        id: 516,
        song_name: 'Maahi Ve ',
        song_link: 'Z2g_5a8TSmQ',
        album_name: 'Wajah Tum Ho'
      },
      {
        id: 1076,
        song_name: 'The Sound of Raaz',
        song_link: 'QnO0MKV-I0s',
        album_name: 'Raaz Reboot'
      },
      {
        id: 544,
        song_name: 'Teri Fariyad ',
        song_link: 'CCfSQHtjHk0',
        album_name: 'Tum Bin 2'
      },
      {
        id: 1713,
        song_name: 'Honedo Batiya',
        song_link: 'C1jgfpUZFd4',
        album_name: 'Fitoor'
      },
      {
        id: 560,
        song_name: 'Labon Ka Karobaar ',
        song_link: 'o1naAWn2IsY',
        album_name: 'Befikre'
      },
      {
        id: 1089,
        song_name: 'sanam teri kasam reprise',
        song_link: '6tq4WI-w2Pk',
        album_name: 'Sanam Teri Kasam'
      },
      {
        id: 800,
        song_name: 'Ya Ali Murtaza (Qawwali)',
        song_link: 'SVKaWbYPPws',
        album_name: 'Freaky Ali'
      },
      {
        id: 877,
        song_name: 'Jag Ghoomeya',
        song_link: 'sCFPZr0UexY',
        album_name: 'Sultan'
      },
      {
        id: 1095,
        song_name: 'Mera Mann',
        song_link: 'uQ7Vm_fVsUg',
        album_name: 'Laal Rang'
      },
      {
        id: 845,
        song_name: 'I Wanna Tera Ishq',
        song_link: 'H4GICVXWcyk',
        album_name: 'Great Grand Masti'
      },
      {
        id: 923,
        song_name: 'TUNG LAK',
        song_link: '9WfgCE0Yn7Y',
        album_name: 'Sarbjit'
      },
      {
        id: 1057,
        song_name: 'Gehra Ishq',
        song_link: 'WFUI113kj4s',
        album_name: 'Neerja'
      },
      {
        id: 915,
        song_name: 'Aaj Ro Len De',
        song_link: 'PdrTQmsxzpU',
        album_name: '1920 London'
      },
      {
        id: 826,
        song_name: 'Raj Karega Khalsa',
        song_link: 'gftrEAfkK9U',
        album_name: 'A Flying Jatt'
      },
      {
        id: 866,
        song_name: 'Labon Se',
        song_link: 'cFRtejU9FsU',
        album_name: 'A Scandall'
      },
      {
        id: 891,
        song_name: 'High Heels Te Nachche',
        song_link: 'N_KpjLhJa1k',
        album_name: 'Ki & Ka'
      },
      {
        id: 513,
        song_name: 'Tu Hi Hai ',
        song_link: 'gFmHPFlB42c',
        album_name: 'Dear Zindagi'
      },
      {
        id: 1070,
        song_name: 'Lo maan liya',
        song_link: 'wsxUywlCbiA',
        album_name: 'Raaz Reboot'
      },
      {
        id: 1707,
        song_name: 'Kho Gaye Hum Kahan',
        song_link: 'YrViHuM5w0I',
        album_name: 'Baar Baar Dekho'
      },
      {
        id: 574,
        song_name: 'Curves Mere Killerrr Killerrr ',
        song_link: 'vEkpgvEqEFA',
        album_name: 'Fuddu'
      },
      {
        id: 609,
        song_name: 'Tu Hi Na Jaane ',
        song_link: 'SnoG34KHIcw',
        album_name: 'Azhar'
      },
      {
        id: 781,
        song_name: 'Har Gully Mein Dhoni Hai  ',
        song_link: 'EwE8wH9g95w',
        album_name: 'M.S. Dhoni: The Untold Story'
      },
      {
        id: 1724,
        song_name: 'Teri Yaad',
        song_link: 'O_91EGrqP28',
        album_name: 'Teraa Surroor'
      },
      {
        id: 794,
        song_name: 'Udan Choo ',
        song_link: 'gRhH6HEpKTo',
        album_name: 'Banjo'
      },
      {
        id: 840,
        song_name: 'Toh Dishoom',
        song_link: 'OCZTqrm2QJA',
        album_name: 'Dishoom'
      },
      {
        id: 892,
        song_name: 'Chitta Ve',
        song_link: 'XhypXqLR9co',
        album_name: 'Udta Punjab'
      },
      {
        id: 1051,
        song_name: 'Kya Tujhe Ab Ye Dil Bataye',
        song_link: '0q-BBxqRf14',
        album_name: 'Sanam Re'
      },
      {
        id: 903,
        song_name: 'Jabardast Fan (Bhojpuri)',
        song_link: 'vlRUKAxoBHE',
        album_name: 'Fan'
      },
      {
        id: 523,
        song_name: 'Haanikaarak Bapu ',
        song_link: '6RB89BOxaYY',
        album_name: 'Dangal'
      },
      {
        id: 1083,
        song_name: 'Bewajah',
        song_link: 'gBvwiYnzlhw',
        album_name: 'Sanam Teri Kasam'
      },
      {
        id: 552,
        song_name: 'Tere Mere Dil ',
        song_link: 'hbT-SyjmjXA',
        album_name: 'Rock On 2'
      },
      {
        id: 1704,
        song_name: "Let's Nacho",
        song_link: 'TLnwqAarPkM',
        album_name: 'Kapoor & Sons'
      },
      {
        id: 667,
        song_name: 'Najar Tori Raja ',
        song_link: 'VmwFwmPrJW8',
        album_name: 'Jai Gangaajal'
      },
      {
        id: 1064,
        song_name: 'DAMA DAMA DAM',
        song_link: 'JkmpYNtjK6I',
        album_name: 'Madaari'
      },
      {
        id: 966,
        song_name: 'Oh Boy',
        song_link: 'pgpR_we26-A',
        album_name: 'Kyaa Kool Hain Hum 3'
      },
      {
        id: 1697,
        song_name: 'DIL CHEEZ TUJHE DEDI',
        song_link: 'BkA0lq-0f14',
        album_name: 'Airlift'
      },
      {
        id: 571,
        song_name: 'The Breakup Song ',
        song_link: 'CvPdtf8Ijj4',
        album_name: 'Ae Dil Hai Mushkil'
      },
      {
        id: 820,
        song_name: 'Gabru Ready to Mingle Hai',
        song_link: 'g8sHkZ3ggGg',
        album_name: 'Happy Bhag Jayegi'
      },
      {
        id: 882,
        song_name: 'Mujhko Barsaat Bana Lo',
        song_link: 'QzJfW1sij9k',
        album_name: 'Junooniyat'
      },
      {
        id: 788,
        song_name: 'Soniye',
        song_link: 'A9MnkEEP0lE',
        album_name: 'Six X'
      },
      {
        id: 621,
        song_name: 'Mere Peeche Hindustan ',
        song_link: 'R321kMJ4p-o',
        album_name: 'Beiimaan Love'
      },
      {
        id: 872,
        song_name: 'Khallas ',
        song_link: 'NT-dRsPuQpo',
        album_name: 'Veerappan'
      },
      {
        id: 1045,
        song_name: 'ALFAZON KI TARAH ',
        song_link: 'Kgnl3HRjsfw',
        album_name: 'Rocky Handsome'
      },
      {
        id: 897,
        song_name: 'Rootha',
        song_link: 'ET3nchYvtPA',
        album_name: 'Te3n'
      },
      {
        id: 685,
        song_name: 'Aave Re Hitchki ',
        song_link: 'j2moTDbXNFI',
        album_name: 'Mirzya'
      },
      {
        id: 517,
        song_name: 'Wajah Tum Ho ',
        song_link: 'z5yFvEmfqXQ',
        album_name: 'Wajah Tum Ho'
      },
      {
        id: 1077,
        song_name: 'Tere Bin',
        song_link: 'qYx0WRHqfJg',
        album_name: 'Wazir'
      },
      {
        id: 616,
        song_name: 'Koi Fariyaad ',
        song_link: 'CCfSQHtjHk0',
        album_name: 'Tum Bin 2'
      },
      {
        id: 1714,
        song_name: 'Tere Liye',
        song_link: 'DMqYjc3i1RA',
        album_name: 'Fitoor'
      },
      {
        id: 1090,
        song_name: 'Lapak Jhapak',
        song_link: '9saAYWnk544',
        album_name: 'Ghayal Once Again'
      },
      {
        id: 801,
        song_name: 'Parinda Hai Parinda',
        song_link: 's4JLu2INYMM',
        album_name: 'Freaky Ali'
      },
      {
        id: 880,
        song_name: '440 Volt',
        song_link: 'y2i-QCubGZ0',
        album_name: 'Sultan'
      },
      {
        id: 1096,
        song_name: 'Aye Khuda',
        song_link: 'DC-vuEussQs',
        album_name: 'Laal Rang'
      },
      {
        id: 846,
        song_name: 'Lipstick Laga Ke',
        song_link: 'XbkbgxsZexY',
        album_name: 'Great Grand Masti'
      },
      {
        id: 924,
        song_name: 'Nindiya',
        song_link: '-ZObLKU9ZKM',
        album_name: 'Sarbjit'
      },
      {
        id: 1058,
        song_name: 'Aisa Kyun Maa',
        song_link: '39W9cxXZwPM',
        album_name: 'Neerja'
      },
      {
        id: 916,
        song_name: 'Gumnaam Hai Koi',
        song_link: 'NNkJHuB2-Nw',
        album_name: '1920 London'
      },
      {
        id: 867,
        song_name: 'Jeena Marna',
        song_link: 'smPtPgnTE3w',
        album_name: 'Do Lafzon Ki Kahani'
      },
      {
        id: 904,
        song_name: 'Pump It',
        song_link: 'p3BYNRmv_JM',
        album_name: 'Ki & Ka'
      },
      {
        id: 514,
        song_name: 'Love You Zindagi ',
        song_link: '2ZBPjt9NQtk',
        album_name: 'Dear Zindagi'
      },
      {
        id: 1071,
        song_name: 'Raaz Aankhein Teri',
        song_link: '4q2zPsZU3dc',
        album_name: 'Raaz Reboot'
      },
      {
        id: 1708,
        song_name: 'Sau Aasmaan',
        song_link: 'mpjNh-uGBY4',
        album_name: 'Baar Baar Dekho'
      },
      {
        id: 625,
        song_name: 'Tu Zaroorat Nahi Tu Zaroori Hai ',
        song_link: '5_u7CHkFZYk',
        album_name: 'Fuddu'
      },
      {
        id: 610,
        song_name: 'Oye Oye ',
        song_link: 'I3dxAXgIhCU',
        album_name: 'Azhar'
      },
      {
        id: 782,
        song_name: 'Besabriyaan  ',
        song_link: 'y1FF64dIWa0',
        album_name: 'M.S. Dhoni: The Untold Story'
      },
      {
        id: 795,
        song_name: 'Rada ',
        song_link: '-hXg3LbL6hk',
        album_name: 'Banjo'
      },
      {
        id: 841,
        song_name: 'Jaaneman Aah (Version 1)',
        song_link: 'w_M_9T-_qM0',
        album_name: 'Dishoom'
      },
      {
        id: 893,
        song_name: 'Da Da Dasse',
        song_link: 'f5vd4YEYFfA',
        album_name: 'Udta Punjab'
      },
      {
        id: 1052,
        song_name: 'Tere Liye',
        song_link: 'mhlfyXfmCNI',
        album_name: 'Sanam Re'
      },
      {
        id: 909,
        song_name: 'Agar Tu Hota',
        song_link: '-pQqwTGVvSw',
        album_name: 'Baaghi'
      },
      {
        id: 524,
        song_name: 'Labon Ka Karobaar ',
        song_link: 'o1naAWn2IsY',
        album_name: 'Befikre'
      },
      {
        id: 1084,
        song_name: 'Tera Chehra',
        song_link: 'qh2dv9_QHeo',
        album_name: 'Sanam Teri Kasam'
      },
      {
        id: 553,
        song_name: 'Rock on Revisited ',
        song_link: 'MHdsrhdHz-o',
        album_name: 'Rock On 2'
      },
      {
        id: 890,
        song_name: 'Pyaar Ki',
        song_link: 'iWPUpWJ44pI',
        album_name: 'Housefull 3'
      },
      {
        id: 668,
        song_name: 'Dheere Dheere ',
        song_link: 'fsVu-q2FPQ0',
        album_name: 'Jai Gangaajal'
      },
      {
        id: 1065,
        song_name: 'MASOOM SA',
        song_link: 'OpMI86Lazhg',
        album_name: 'Madaari'
      },
      {
        id: 967,
        song_name: 'House Party',
        song_link: '3XGpBxkSSCU',
        album_name: 'Kyaa Kool Hain Hum 3'
      },
      {
        id: 1698,
        song_name: 'MERA NACHAN NU',
        song_link: 'tE9DIKFptbY',
        album_name: 'Airlift'
      },
      {
        id: 679,
        song_name: 'Ae Dil Hai Mushkil ',
        song_link: 'vUCM_0evdQY',
        album_name: 'Ae Dil Hai Mushkil'
      },
      {
        id: 555,
        song_name: 'Raatein ',
        song_link: 'YuWwoGbFr1s',
        album_name: 'Shivaay'
      },
      {
        id: 821,
        song_name: 'Aashiq Tera',
        song_link: 'emh8zR4ZqZ0',
        album_name: 'Happy Bhag Jayegi'
      },
      {
        id: 885,
        song_name: 'Nachange Saari Raat',
        song_link: 'lQh3iy86QUE',
        album_name: 'Junooniyat'
      },
      {
        id: 789,
        song_name: 'Sajan Sawan',
        song_link: '9CIXm2gTaS8',
        album_name: 'Six X'
      },
      {
        id: 622,
        song_name: 'Main Adhoora ',
        song_link: 'VkMG5z-5Tjo',
        album_name: 'Beiimaan Love'
      },
      {
        id: 835,
        song_name: 'SARSARIYA',
        song_link: 'ljBK-wMUhzU',
        album_name: 'Mohenjo Daro'
      },
      {
        id: 873,
        song_name: 'Tay Hai',
        song_link: 'Xs3--MgVRks',
        album_name: 'Rustom'
      },
      {
        id: 1046,
        song_name: 'TITLIYAN',
        song_link: 'cp3OpQdL5FU',
        album_name: 'Rocky Handsome'
      },
      {
        id: 898,
        song_name: 'Kyun Re',
        song_link: 'BDTeebS_DT4',
        album_name: 'Te3n'
      },
      {
        id: 686,
        song_name: 'Teen Gawah Hain Ishq Ke ',
        song_link: 'QdLZsx3dXyQ',
        album_name: 'Mirzya'
      },
      {
        id: 518,
        song_name: 'Wajah Tum Ho - Lounge ',
        song_link: 'z5yFvEmfqXQ',
        album_name: 'Wajah Tum Ho'
      },
      {
        id: 1078,
        song_name: 'Tu Mere Paas',
        song_link: 'eOhzGXu-Mh0',
        album_name: 'Wazir'
      },
      {
        id: 617,
        song_name: 'Ishq Mubarak ',
        song_link: 'qQJ7Bp3eWyY',
        album_name: 'Tum Bin 2'
      },
      {
        id: 1715,
        song_name: 'Rangaa Re (Hindi Version)',
        song_link: 'GM7qHTL6i_s',
        album_name: 'Fitoor'
      },
      {
        id: 1091,
        song_name: 'Khuda Hai Tere Andar',
        song_link: 'HUbUMXtpbEU',
        album_name: 'Ghayal Once Again'
      },
      {
        id: 802,
        song_name: 'Din Mein Karengey Jagrata',
        song_link: 'oUVRiYY8fKc',
        album_name: 'Freaky Ali'
      },
      {
        id: 857,
        song_name: 'Nachange Saari Raat',
        song_link: 'lQh3iy86QUE',
        album_name: 'Junooniyat'
      },
      {
        id: 1097,
        song_name: 'Kharch Karod',
        song_link: 'U1sps8WVYEA',
        album_name: 'Laal Rang'
      },
      {
        id: 886,
        song_name: 'Teri Kamar Ko',
        song_link: 'rF0d0pA24Uw',
        album_name: 'Great Grand Masti'
      },
      {
        id: 925,
        song_name: 'Rabba ',
        song_link: 'ARf9uxHqvO8',
        album_name: 'Sarbjit'
      },
      {
        id: 1059,
        song_name: 'Qatl-E-Aam',
        song_link: 'JtjOFtBVrzY',
        album_name: 'Raman Raghav 2.0'
      },
      {
        id: 917,
        song_name: 'Ki Kara',
        song_link: 'd6YdYNGuoaY',
        album_name: 'One Night Stand'
      },
      {
        id: 868,
        song_name: 'Kuch To Hai',
        song_link: 'M6tn4k12Jjk',
        album_name: 'Do Lafzon Ki Kahani'
      },
      {
        id: 905,
        song_name: 'Foolishq',
        song_link: 'oLkpHCiWsgI',
        album_name: 'Ki & Ka'
      },
      {
        id: 531,
        song_name: 'Just Go To Hell Dil ',
        song_link: '1dOVj7NBbxE',
        album_name: 'Dear Zindagi'
      },
      {
        id: 1072,
        song_name: 'O Meri Jaan',
        song_link: 'rHmlw2DclNg',
        album_name: 'Raaz Reboot'
      },
      {
        id: 1709,
        song_name: 'Kala Chashma',
        song_link: 'k4yXQkG2s1E',
        album_name: 'Baar Baar Dekho'
      },
      {
        id: 579,
        song_name: 'Soorat Teri ',
        song_link: 'L6DbgHu1qW0',
        album_name: 'Gandhigiri'
      },
      {
        id: 611,
        song_name: 'Itni Si Baat Hain ',
        song_link: 't7buUbo_1Qs',
        album_name: 'Azhar'
      },
      {
        id: 783,
        song_name: 'Jab Tak (Redux)  ',
        song_link: '0mQLTWvXbXM',
        album_name: 'M.S. Dhoni: The Untold Story'
      },
      {
        id: 554,
        song_name: 'Jaago ',
        song_link: 'xl6FhsnxBcE',
        album_name: 'Rock On 2'
      },
      {
        id: 796,
        song_name: 'Pee Paa Ke ',
        song_link: 'IqTnlsoiko0',
        album_name: 'Banjo'
      },
      {
        id: 854,
        song_name: 'Baby Ko Bass Pasand Hai',
        song_link: 'aWMTj-rejvc',
        album_name: 'Sultan'
      },
      {
        id: 842,
        song_name: 'JAANEMAN AAH',
        song_link: 'w_M_9T-_qM0',
        album_name: 'Dishoom'
      },
      {
        id: 894,
        song_name: 'Ikk Kudi',
        song_link: 'ZbX_nlzv7uU',
        album_name: 'Udta Punjab'
      },
      {
        id: 1053,
        song_name: 'Tum Bin',
        song_link: 'v-uxLX_qqjg',
        album_name: 'Sanam Re'
      },
      {
        id: 910,
        song_name: "Let's Talk About Love",
        song_link: '_c5B2I5k7KM',
        album_name: 'Baaghi'
      },
      {
        id: 525,
        song_name: 'Nashe Si Chadh Gayi ',
        song_link: 'Wd2B8OAotU8',
        album_name: 'Befikre'
      },
      {
        id: 1085,
        song_name: 'Haal - E - Dil (Male)',
        song_link: 'uAbE8Te5f8c',
        album_name: 'Sanam Teri Kasam'
      },
      {
        id: 1716,
        song_name: 'Pyar Ki',
        song_link: 'iWPUpWJ44pI',
        album_name: 'Housefull 3'
      },
      {
        id: 669,
        song_name: 'Sab Dhan Maati (Remix) ',
        song_link: 'LaIP6mj4qVQ',
        album_name: 'Jai Gangaajal'
      },
      {
        id: 1066,
        song_name: 'Mehram',
        song_link: 'I6pAVOwMemw',
        album_name: 'Kahaani 2'
      },
      {
        id: 968,
        song_name: 'Kya Kool Hain Hum (Title Song)',
        song_link: 'AKMYPjU52ng',
        album_name: 'Kyaa Kool Hain Hum 3'
      },
      {
        id: 1699,
        song_name: 'TU BHOOLA JISE',
        song_link: 'wrXKov_UmCA',
        album_name: 'Airlift'
      },
      {
        id: 680,
        song_name: 'Channa Mereya',
        song_link: 'z-diRlyLGzo',
        album_name: 'Ae Dil Hai Mushkil'
      },
      {
        id: 556,
        song_name: 'Bolo Har Har Har ',
        song_link: 'CBqdVosM4gU',
        album_name: 'Shivaay'
      },
      {
        id: 822,
        song_name: 'Zara Si Dosti',
        song_link: 'z-P9w51cp4k',
        album_name: 'Happy Bhag Jayegi'
      },
      {
        id: 862,
        song_name: 'Mast Hawa',
        song_link: 'FKNj-I8NYW0',
        album_name: 'Shorgul'
      },
      {
        id: 618,
        song_name: 'Pyaar De ',
        song_link: 'hV-FwW1LgxU',
        album_name: 'Beiimaan Love'
      },
      {
        id: 790,
        song_name: 'Chhori Chhichhori ',
        song_link: 'Soi4tCqrPMU',
        album_name: 'Wah Taj'
      },
      {
        id: 623,
        song_name: 'Hug Me ',
        song_link: 'JRVwbtkf7C8',
        album_name: 'Beiimaan Love'
      },
      {
        id: 836,
        song_name: 'Sindhu Ma',
        song_link: 'mZCJWRVFA1o',
        album_name: 'Mohenjo Daro'
      },
      {
        id: 874,
        song_name: 'Dekha Hazaro Dafaa',
        song_link: 't1tzKrOPCx0',
        album_name: 'Rustom'
      },
      {
        id: 1047,
        song_name: 'Sanam Re',
        song_link: 'DS-raAyMxl4',
        album_name: 'Sanam Re'
      },
      {
        id: 899,
        song_name: 'Grahan',
        song_link: 'wdulG4NC0-4',
        album_name: 'Te3n'
      },
      {
        id: 687,
        song_name: 'Chal Maar ',
        song_link: '2bJsQsjEURc',
        album_name: 'Tutak Tutak Tutiya'
      },
      {
        id: 519,
        song_name: 'Dil Mein Chhupa Loonga ',
        song_link: '58kOTj-Fe1E',
        album_name: 'Wajah Tum Ho'
      },
      {
        id: 1079,
        song_name: 'Maula',
        song_link: 'vZ_zbkUKnrc',
        album_name: 'Wazir'
      },
      {
        id: 548,
        song_name: 'Rang Laal ',
        song_link: 'FRGtm8VNsIw',
        album_name: 'Force 2'
      },
      {
        id: 1720,
        song_name: 'Itemwaale',
        song_link: '5DR4GNExB1w',
        album_name: 'Tere Bin Laden Dead or Alive'
      },
      {
        id: 1060,
        song_name: 'Behooda',
        song_link: 'LWs5C3lFlC8',
        album_name: 'Raman Raghav 2.0'
      },
      {
        id: 918,
        song_name: 'Le Chala',
        song_link: 'sGInosbHzWk',
        album_name: 'One Night Stand'
      },
      {
        id: 1093,
        song_name: 'Bhaang Ragad Ke',
        song_link: 'IkzlYyqexB8',
        album_name: 'Laal Rang'
      },
      {
        id: 810,
        song_name: 'Tujhse Hi Hai Roshni',
        song_link: 'gB6uYfo-zx0',
        album_name: 'Pink'
      },
      {
        id: 858,
        song_name: 'Mujhko Barsaat Bana Lo',
        song_link: 'UtbVzzmDWCM',
        album_name: 'Junooniyat'
      },
      {
        id: 1098,
        song_name: 'Kharch Karod (Slow)',
        song_link: 'Et46hHWedp8',
        album_name: 'Laal Rang'
      },
      {
        id: 884,
        song_name: 'Kar Gayi Chull',
        song_link: 'NTHz9ephYTw',
        album_name: 'Kapoor & Sons'
      },
      {
        id: 784,
        song_name: 'Kaun Tujhe  ',
        song_link: 'JHUrRSBtUNE',
        album_name: 'M.S. Dhoni: The Untold Story'
      },
      {
        id: 869,
        song_name: 'Ankhiyaan',
        song_link: 'Qpi_JW1pNX0',
        album_name: 'Do Lafzon Ki Kahani'
      },
      {
        id: 906,
        song_name: 'Most Wanted Munda',
        song_link: 'o8sJRwvRYCU',
        album_name: 'Ki & Ka'
      },
      {
        id: 532,
        song_name: 'Tu Hi Hai ',
        song_link: 'gFmHPFlB42c',
        album_name: 'Dear Zindagi'
      },
      {
        id: 1073,
        song_name: 'Yaad Hai Na',
        song_link: '_FRbTRnPFnY',
        album_name: 'Raaz Reboot'
      },
      {
        id: 541,
        song_name: 'Tum Bin ',
        song_link: 'RXG2U57zUfo',
        album_name: 'Tum Bin 2'
      },
      {
        id: 1710,
        song_name: 'Pashmina',
        song_link: 'uxTXp0-iZrY',
        album_name: 'Fitoor'
      },
      {
        id: 580,
        song_name: 'Ka Kha ',
        song_link: '_dS1_zUwgr0',
        album_name: 'Gandhigiri'
      },
      {
        id: 887,
        song_name: 'Bol Do Na Zara',
        song_link: 'C5Z8WQv1Wf4',
        album_name: 'Azhar'
      },
      {
        id: 797,
        song_name: 'Bappa ',
        song_link: 'cGcw33hVrS4',
        album_name: 'Banjo'
      },
      {
        id: 855,
        song_name: 'Sachi Muchi',
        song_link: 'sCFPZr0UexY',
        album_name: 'Sultan'
      },
      {
        id: 881,
        song_name: 'Sau Tarah Ke',
        song_link: 'r2ecLFsdbzI',
        album_name: 'Dishoom'
      },
      {
        id: 895,
        song_name: 'Ud-daa Punjab',
        song_link: 'A7taKS3E-DM',
        album_name: 'Udta Punjab'
      },
      {
        id: 1054,
        song_name: 'Chhote Chhote Tamashe',
        song_link: 'cFvnb7t9HZY',
        album_name: 'Sanam Re'
      },
      {
        id: 911,
        song_name: 'Sab Tera',
        song_link: 'WRQHV3kDcyo',
        album_name: 'Baaghi'
      },
      {
        id: 526,
        song_name: 'You And Me ',
        song_link: 'TZ82ZR70vcc',
        album_name: 'Befikre'
      },
      {
        id: 1086,
        song_name: 'Haal - E - Dil (Female)',
        song_link: 'MPuYJ5YIGts',
        album_name: 'Sanam Teri Kasam'
      },
      {
        id: 1717,
        song_name: 'Taang Uthake',
        song_link: 'rohyOGXD0Ug',
        album_name: 'Housefull 3'
      },
      {
        id: 1067,
        song_name: 'Lamhon Ke Rasgulle',
        song_link: 'nFPsBXBpq0I',
        album_name: 'Kahaani 2'
      },
      {
        id: 1700,
        song_name: 'SOCH NA SAKE',
        song_link: 'MRtRcTfszjY',
        album_name: 'Airlift'
      },
      {
        id: 681,
        song_name: 'Bulleya ',
        song_link: 'hXh35CtnSyU',
        album_name: 'Ae Dil Hai Mushkil'
      },
      {
        id: 557,
        song_name: 'Darkhaast ',
        song_link: 'uIZMKRzxH5E',
        album_name: 'Shivaay'
      },
      {
        id: 823,
        song_name: 'Yaaram',
        song_link: 'V8hCFmFx-0Y',
        album_name: 'Happy Bhag Jayegi'
      },
      {
        id: 863,
        song_name: 'Tere Bina',
        song_link: 'n2PjimABt-c',
        album_name: 'Shorgul'
      },
      {
        id: 791,
        song_name: 'Kanha Mere Kanha (Female) ',
        song_link: '7OG8KKWO7EY',
        album_name: 'Wah Taj'
      },
      {
        id: 624,
        song_name: 'Rang Reza (Female) ',
        song_link: 'ygcnCJPEfis',
        album_name: 'Beiimaan Love'
      },
      {
        id: 837,
        song_name: 'TU HAI',
        song_link: 'UiN3AY7bdBg',
        album_name: 'Mohenjo Daro'
      },
      {
        id: 875,
        song_name: 'Rustom Vahi - Marathi',
        song_link: 'p9ZpY3OXbgY',
        album_name: 'Rustom'
      },
      {
        id: 1048,
        song_name: 'Gazab Ka Hai Yeh Din',
        song_link: '7_Xci4YewJo',
        album_name: 'Sanam Re'
      },
      {
        id: 900,
        song_name: 'Kyun Re',
        song_link: 'BDTeebS_DT4',
        album_name: 'Te3n'
      },
      {
        id: 688,
        song_name: 'Rail Gaddi ',
        song_link: 'r-B322Up_Bc',
        album_name: 'Tutak Tutak Tutiya'
      },
      {
        id: 520,
        song_name: 'Dil Ke Paas (Unplugged) ',
        song_link: 'kNE3VuwvN54',
        album_name: 'Wajah Tum Ho'
      },
      {
        id: 1080,
        song_name: ' Khel Khel Mein',
        song_link: 'LZZIdfW8SHY',
        album_name: 'Wazir'
      },
      {
        id: 549,
        song_name: 'O Janiya ',
        song_link: '-WRzl9L4z3g',
        album_name: 'Force 2'
      },
      {
        id: 1721,
        song_name: 'Main Woh Chaand',
        song_link: '8hBQJH2pHQ0',
        album_name: 'Teraa Surroor'
      },
      {
        id: 1061,
        song_name: 'Paani Ka Raasta',
        song_link: 'h5Khx-SJrHI',
        album_name: 'Raman Raghav 2.0'
      },
      {
        id: 919,
        song_name: 'Ishq Da Sutta',
        song_link: '1MdoqnlRjCQ',
        album_name: 'One Night Stand'
      },
      {
        id: 1094,
        song_name: 'Bawli Booch',
        song_link: 'f026HZbW7n0',
        album_name: 'Laal Rang'
      },
      {
        id: 811,
        song_name: 'Kaari Kaari',
        song_link: 'fFdyUJcqMQQ',
        album_name: 'Pink'
      },
      {
        id: 859,
        song_name: 'Ishqe Di Lat Tadpave',
        song_link: 'oU4FmHwQ8to',
        album_name: 'Junooniyat'
      },
      {
        id: 1099,
        song_name: 'Rajj Rajj Ke (Version 1)',
        song_link: 'f3UAyGAwzA8',
        album_name: 'Naam Hai Akira'
      },
      {
        id: 1701,
        song_name: 'Bolna',
        song_link: 'GYFDRoJtfGM',
        album_name: 'Kapoor & Sons'
      },
      {
        id: 785,
        song_name: 'Phir Kabhi  ',
        song_link: '1vFVXljZoZM',
        album_name: 'M.S. Dhoni: The Untold Story'
      },
      {
        id: 888,
        song_name: 'Kuch To Hai',
        song_link: 'SvscrxzfQ0w',
        album_name: 'Do Lafzon Ki Kahani'
      },
      {
        id: 907,
        song_name: 'Ji Huzoori',
        song_link: 'hNubz3rGwrA',
        album_name: 'Ki & Ka'
      },
      {
        id: 533,
        song_name: 'Love You Zindagi ',
        song_link: '2ZBPjt9NQtk',
        album_name: 'Dear Zindagi'
      },
      {
        id: 1074,
        song_name: 'Hummein Tummein Jo Tha',
        song_link: 'fInGtthwejE',
        album_name: 'Raaz Reboot'
      },
      {
        id: 542,
        song_name: 'Dekh Lena ',
        song_link: 'QNg1yg08MAY',
        album_name: 'Tum Bin 2'
      },
      {
        id: 1711,
        song_name: 'Yeh Fitoor Mera',
        song_link: 'Iqu_W5W4YO4',
        album_name: 'Fitoor'
      },
      {
        id: 581,
        song_name: 'Yaara Ve ',
        song_link: 'Z59h2pBtU6U',
        album_name: 'Gandhigiri'
      },
      {
        id: 889,
        song_name: 'Itni Si Baat Hain',
        song_link: 'tucWbkH5WX0',
        album_name: 'Azhar'
      },
      {
        id: 798,
        song_name: 'MAIN HU TU HO',
        song_link: 'a2BbHI7Cy4k',
        album_name: 'Days of Tafree'
      },
      {
        id: 856,
        song_name: 'Bulleya',
        song_link: 'a9Hxkc9YxGE',
        album_name: 'Sultan'
      },
      {
        id: 843,
        song_name: 'Teri Kamar Ko',
        song_link: 'rF0d0pA24Uw',
        album_name: 'Great Grand Masti'
      },
      {
        id: 883,
        song_name: 'Salamat',
        song_link: 'DDJl3qbgRpw',
        album_name: 'Sarbjit'
      },
      {
        id: 1055,
        song_name: 'Jeete Hain Chal',
        song_link: 'AxvUWofBdo4',
        album_name: 'Neerja'
      },
      {
        id: 912,
        song_name: 'Rootha Kyun ',
        song_link: '5l3q6tbK0zo',
        album_name: '1920 London'
      },
      {
        id: 527,
        song_name: 'Ude Dil Befikre ',
        song_link: 'wzY8Bzz9FS4',
        album_name: 'Befikre'
      },
      {
        id: 1087,
        song_name: 'Ek Number',
        song_link: 'l3pKT6hoVXk',
        album_name: 'Sanam Teri Kasam'
      },
      {
        id: 864,
        song_name: 'Shaam O Seher',
        song_link: 'LmQTdM_fHD0',
        album_name: 'Shorgul'
      },
      {
        id: 1718,
        song_name: 'Malamaal',
        song_link: 'ZeCc0Tt6bx4',
        album_name: 'Housefull 3'
      },
      {
        id: 511,
        song_name: 'Just Go To Hell Dil ',
        song_link: '1dOVj7NBbxE',
        album_name: 'Dear Zindagi'
      },
      {
        id: 1068,
        song_name: 'Aaur Main Khush Hoon',
        song_link: 'PXWzF0vrysI',
        album_name: 'Kahaani 2'
      },
      {
        id: 1705,
        song_name: 'Nachde Ne Saare',
        song_link: 'HgIW7P4dsXU',
        album_name: 'Baar Baar Dekho'
      },
      {
        id: 572,
        song_name: 'Cycle Se Chalaang ',
        song_link: 'n-aOZk1Rxmk',
        album_name: 'Saat Uchakkey'
      },
      {
        id: 607,
        song_name: 'Jeetne Ke Liye ',
        song_link: '1kG-xcTLJOY',
        album_name: 'Azhar'
      },
      {
        id: 558,
        song_name: 'Tere Naal Ishqa ',
        song_link: 'H6KHuDmw570',
        album_name: 'Shivaay'
      },
      {
        id: 824,
        song_name: 'A Flying Jatt (Title Track)',
        song_link: 'VMQ4c3XK6CI',
        album_name: 'A Flying Jatt'
      },
      {
        id: 792,
        song_name: 'Tu Hi Bata Mere Khuda ',
        song_link: 'u0M0kfcSsYY',
        album_name: 'Wah Taj'
      },
      {
        id: 838,
        song_name: 'Whispers Of The Mind',
        song_link: 'hODCIwMw3Yw',
        album_name: 'Mohenjo Daro'
      },
      {
        id: 878,
        song_name: 'Ud-Daa Punjab',
        song_link: 'Ezsb5afVXQQ',
        album_name: 'Udta Punjab'
      },
      {
        id: 1049,
        song_name: 'Hua Hain Aaj Pehli Baar',
        song_link: 'DGVJtAHzzDQ',
        album_name: 'Sanam Re'
      },
      {
        id: 901,
        song_name: 'Jabra Song',
        song_link: 'd4_szl5EEww',
        album_name: 'Fan'
      },
      {
        id: 771,
        song_name: 'Tutak Tutak Tutiya ',
        song_link: 'oklP0LK6868',
        album_name: 'Tutak Tutak Tutiya'
      },
      {
        id: 521,
        song_name: 'Gilheriyaan ',
        song_link: 'RunYl3Q0SYI',
        album_name: 'Dangal'
      },
      {
        id: 1081,
        song_name: 'Sanam teri kasam',
        song_link: 'PoNCz6-tVjQ',
        album_name: 'Sanam Teri Kasam'
      },
      {
        id: 550,
        song_name: 'Rang Laal ',
        song_link: 'FRGtm8VNsIw',
        album_name: 'Force 2'
      },
      {
        id: 1722,
        song_name: 'Bekhudi',
        song_link: 'SfEk5W3zH98',
        album_name: 'Teraa Surroor'
      },
      {
        id: 1062,
        song_name: 'Raghav Theme',
        song_link: '-WtneTL1ugQ',
        album_name: 'Raman Raghav 2.0'
      },
      {
        id: 920,
        song_name: 'Ijazat',
        song_link: 'Ob4wvIHUmnA',
        album_name: 'One Night Stand'
      },
      {
        id: 812,
        song_name: 'Jeenay De Mujhe',
        song_link: 'jH2I72uC-pQ',
        album_name: 'Pink'
      },
      {
        id: 860,
        song_name: 'Junooniyat (Title Track)',
        song_link: '-3YhpYR1Lro',
        album_name: 'Junooniyat'
      },
      {
        id: 1100,
        song_name: 'Kehkasha tu meri',
        song_link: 'xYcZbsWPFXw',
        album_name: 'Naam Hai Akira'
      },
      {
        id: 1702,
        song_name: 'Buddhu Sa Mann',
        song_link: 'THiUK0AgSbs',
        album_name: 'Kapoor & Sons'
      },
      {
        id: 1208,
        song_name: 'Hasi',
        song_link: 'oyaudgo5_8Y',
        album_name: 'Hamari Adhuri Kahani'
      },
      {
        id: 831,
        song_name: 'If You Hold My Hand',
        song_link: 'OU7_n4nAb0Q',
        album_name: 'Any Body Can Dance 2'
      },
      {
        id: 1010,
        song_name: 'Pehli Dafa',
        song_link: '7JHX_86hwgg',
        album_name: 'Barkhaa'
      },
      {
        id: 1113,
        song_name: 'Man Kasturi',
        song_link: '6Z-CpOkkUFo',
        album_name: 'Masaan'
      },
      {
        id: 1143,
        song_name: 'Calcutta Kiss',
        song_link: 'AXi2nYjkD04',
        album_name: 'Detective Byomkesh Bakshy!'
      },
      {
        id: 944,
        song_name: 'The Singh is Bliing Rap',
        song_link: 'gxCW-wBmKl8',
        album_name: 'Singh Is Bliing'
      },
      {
        id: 1176,
        song_name: 'Damaa Dam Mast Kalandar',
        song_link: 'xDmyaffqpMA',
        album_name: 'Welcome Back'
      },
      {
        id: 761,
        song_name: 'Neendein Khul Jaati Hain',
        song_link: 'H53fwtX_A2E',
        album_name: 'Hate Story 3'
      },
      {
        id: 957,
        song_name: 'Tod Tadaiyya',
        song_link: 'Zl8z48MFzu0',
        album_name: 'Un tr\u00e9sor appel\u00e9 Amour'
      },
      {
        id: 564,
        song_name: 'Sapna Jahan ',
        song_link: 'lHJp_3g2MAI',
        album_name: 'Brothers'
      },
      {
        id: 1189,
        song_name: 'Sooraj Dooba Hain',
        song_link: 'nJZcbidTutE',
        album_name: 'Roy'
      },
      {
        id: 740,
        song_name: 'Sau Aasoon',
        song_link: 'wUKyMsf2ySk',
        album_name: 'Katti Batti'
      },
      {
        id: 984,
        song_name: 'Teri Meri Kahaani',
        song_link: 'ZWAGn4yyRMM',
        album_name: 'Gabbar is Back'
      },
      {
        id: 1221,
        song_name: 'Tu Mili Sab Mila',
        song_link: 'DfwRU8nCqYQ',
        album_name: 'Meeruthiya Gangsters'
      },
      {
        id: 664,
        song_name: 'Dil Dhadakne Do ',
        song_link: 'jCEdTq3j-0U',
        album_name: 'Dil Dhadakne Do'
      },
      {
        id: 1860,
        song_name: 'Reham O Karam',
        song_link: 'zUx-E3dlM0I',
        album_name: 'Tanu Weds Manu Returns'
      },
      {
        id: 1156,
        song_name: 'Gehlore Ki Goriya',
        song_link: 'EZByLPMZKi4',
        album_name: 'Manjhi: The Mountain Man'
      },
      {
        id: 998,
        song_name: 'Mere Naina Kafir Ho Gaye',
        song_link: 'SnlqApqO1M0',
        album_name: 'Dolly Ki Doli'
      },
      {
        id: 1234,
        song_name: 'Baaton Ko Teri',
        song_link: '1n-g0IhmNuQ',
        album_name: 'All Is Well'
      },
      {
        id: 1107,
        song_name: 'Ab Tohe Jane Na Doongi',
        song_link: 'kNggy_Ck0pI',
        album_name: 'Bajirao Mastani'
      },
      {
        id: 1137,
        song_name: 'Chori Chori',
        song_link: 'Oj5gGxzsEBc',
        album_name: 'Hunterrr'
      },
      {
        id: 931,
        song_name: 'Main Nahi Jaana Pardes',
        song_link: 'nZwnIa26JUI',
        album_name: 'Tevar'
      },
      {
        id: 1170,
        song_name: '20-20',
        song_link: 'gW68rNq-bZI',
        album_name: 'Welcome Back'
      },
      {
        id: 1203,
        song_name: 'Ghaghara',
        song_link: 'igwwXv5cuig',
        album_name: 'Dirty Politics'
      },
      {
        id: 753,
        song_name: 'Aaj Ki Party',
        song_link: 'vlS7oilbya0',
        album_name: 'Bajrangi Bhaijaan'
      },
      {
        id: 734,
        song_name: 'Saiyaan Superstar',
        song_link: 'R6iovtWNKo4',
        album_name: 'Ek Paheli Leela'
      },
      {
        id: 1896,
        song_name: 'Tu Isaq Mera',
        song_link: '7356o8uJSuo',
        album_name: 'Hate Story 3'
      },
      {
        id: 973,
        song_name: 'O Khuda',
        song_link: 'JG-53KJY4aY',
        album_name: 'Khamoshiyan'
      },
      {
        id: 1215,
        song_name: 'Meeruthiya Gangsters title track',
        song_link: '77b_4rHpbxY',
        album_name: 'Meeruthiya Gangsters'
      },
      {
        id: 1024,
        song_name: 'Katra Katra',
        song_link: '8PmgDiGuTZ0',
        album_name: 'Alone'
      },
      {
        id: 1119,
        song_name: 'Mat Ja Re',
        song_link: 'vNPn5TFPUxo',
        album_name: 'Tanu Weds Manu Returns'
      },
      {
        id: 1150,
        song_name: 'Mohabbat Buri Bimari',
        song_link: 'e-MNLzGL1eQ',
        album_name: 'Bombay Velvet'
      },
      {
        id: 951,
        song_name: 'Prem Leela',
        song_link: '7S-IJLL7tQ8',
        album_name: 'Un tr\u00e9sor appel\u00e9 Amour'
      },
      {
        id: 1183,
        song_name: 'Bam Bam',
        song_link: 'n5tfmmn4NiA',
        album_name: 'Kis Kisko Pyaar Karoon'
      },
      {
        id: 1131,
        song_name: 'Main Jo',
        song_link: 'tyiVM_02gqI',
        album_name: 'Nh10'
      },
      {
        id: 937,
        song_name: 'Safarnama',
        song_link: '7mTDBsdfw88',
        album_name: 'Tamasha'
      },
      {
        id: 1163,
        song_name: 'Maazaa My Lord',
        song_link: 'frk3fwifccI',
        album_name: 'Hawaizaada'
      },
      {
        id: 1196,
        song_name: 'Zindagi',
        song_link: 'DbAnltR78rU',
        album_name: 'D\u00e9esses indiennes en col\u00e8re'
      },
      {
        id: 747,
        song_name: 'Bandeyaa',
        song_link: 'iaF6zS7OE8o',
        album_name: 'Jazbaa'
      },
      {
        id: 775,
        song_name: 'Thode Se Hum ',
        song_link: 'fg7JhMMnkSY',
        album_name: 'Badmashiyaan'
      },
      {
        id: 991,
        song_name: 'Dard Karaara ',
        song_link: '2CeoFnb16l4',
        album_name: 'Dum Laga Ke Haisha'
      },
      {
        id: 1228,
        song_name: 'Gud Naal Ishq Mitha',
        song_link: 'cLfTJUE8Ic0',
        album_name: 'I Love New Year'
      },
      {
        id: 1209,
        song_name: 'Tu Takke',
        song_link: 'gSxw6k-mnEM',
        album_name: 'Dharam Sankat Mein'
      },
      {
        id: 832,
        song_name: 'Hey Ganaraya',
        song_link: 'bT4hlF8VgZY',
        album_name: 'Any Body Can Dance 2'
      },
      {
        id: 1011,
        song_name: 'Tu Itni Khoobsurat Hai',
        song_link: 'PKIlSv9yMTY',
        album_name: 'Barkhaa'
      },
      {
        id: 1114,
        song_name: 'Insaaf',
        song_link: '9SVVXdliUkg',
        album_name: 'Talvar'
      },
      {
        id: 1144,
        song_name: 'Bach Ke Bakshy',
        song_link: 'bjKQzuAaGOM',
        album_name: 'Detective Byomkesh Bakshy!'
      },
      {
        id: 945,
        song_name: 'Gulaabo',
        song_link: 'bUTdUaVmj8o',
        album_name: 'Shaandaar'
      },
      {
        id: 1177,
        song_name: 'Sharabi',
        song_link: 'PqGn1GTmEJs',
        album_name: 'Pyaar Ka Punchnama 2'
      },
      {
        id: 834,
        song_name: 'Love To Hate You',
        song_link: 'a3n0na_BETk',
        album_name: 'Hate Story 3'
      },
      {
        id: 1157,
        song_name: 'O Rahi',
        song_link: 'MLbH3GrPrn0',
        album_name: 'Manjhi: The Mountain Man'
      },
      {
        id: 959,
        song_name: 'Aaj Unse Kehna Hai',
        song_link: '-E67reqiMNw',
        album_name: 'Un tr\u00e9sor appel\u00e9 Amour'
      },
      {
        id: 1005,
        song_name: 'Gaaye Jaa',
        song_link: 'JiTxg-qhcgs',
        album_name: 'Brothers'
      },
      {
        id: 1190,
        song_name: 'Tu Hai Ki Nahi',
        song_link: '61floBUAiTY',
        album_name: 'Roy'
      },
      {
        id: 741,
        song_name: 'Lip To Lip',
        song_link: '-eu9o0d3V6Q',
        album_name: 'Katti Batti'
      },
      {
        id: 985,
        song_name: 'Aao Raja',
        song_link: '66VN2ZIWPnw',
        album_name: 'Gabbar is Back'
      },
      {
        id: 1222,
        song_name: 'Ishq Karenge',
        song_link: 'BJCQDQONV9I',
        album_name: 'Bangistan'
      },
      {
        id: 665,
        song_name: 'Pehli Baar ',
        song_link: 'VkJlv0m6els',
        album_name: 'Dil Dhadakne Do'
      },
      {
        id: 1125,
        song_name: 'Gerua',
        song_link: 'AEIVhBS6baE',
        album_name: 'Dilwale'
      },
      {
        id: 999,
        song_name: 'Babaji Ka Thullu ',
        song_link: '8sQ22JhrvnM',
        album_name: 'Dolly Ki Doli'
      },
      {
        id: 1235,
        song_name: 'Nachan Farrate',
        song_link: '4dF1uxUTYZI',
        album_name: 'All Is Well'
      },
      {
        id: 1108,
        song_name: 'Pinga',
        song_link: 'tzRFLMn4kpM',
        album_name: 'Bajirao Mastani'
      },
      {
        id: 1138,
        song_name: 'Na Heer Na Hoor',
        song_link: 'oHCKT49zQfA',
        album_name: 'Hunterrr'
      },
      {
        id: 939,
        song_name: 'Tung Tung Baje',
        song_link: 'Vl38bvY_KqI',
        album_name: 'Singh Is Bliing'
      },
      {
        id: 1171,
        song_name: 'Tutti Bole Wedding Di',
        song_link: 'r2LwEwLiRhc',
        album_name: 'Welcome Back'
      },
      {
        id: 1204,
        song_name: 'Chal Dum',
        song_link: '5-zETniFgcU',
        album_name: 'Dirty Politics'
      },
      {
        id: 754,
        song_name: 'Chicken Song',
        song_link: 'mBaUe-9v7zQ',
        album_name: 'Bajrangi Bhaijaan'
      },
      {
        id: 735,
        song_name: 'Khuda Bhi',
        song_link: 'IgK5-PUeARg',
        album_name: 'Ek Paheli Leela'
      },
      {
        id: 974,
        song_name: 'Main Hoon Hero Tera',
        song_link: 'VW8Yy9pfrT8',
        album_name: 'Hero'
      },
      {
        id: 1216,
        song_name: 'Mastam Mastam',
        song_link: 'UVQStaaMHzw',
        album_name: 'Meeruthiya Gangsters'
      },
      {
        id: 1025,
        song_name: 'Awaara',
        song_link: '5aWM4bpm5wY',
        album_name: 'Alone'
      },
      {
        id: 1120,
        song_name: 'Ghani Bawri',
        song_link: 'IcMUB8qY-qo',
        album_name: 'Tanu Weds Manu Returns'
      },
      {
        id: 1151,
        song_name: 'Dhadaam Dhadaam',
        song_link: 'eV4ItiYXGKM',
        album_name: 'Bombay Velvet'
      },
      {
        id: 952,
        song_name: 'Prem Ratan Dhan Payo (Title Song)',
        song_link: 'bPk9bSvQQoc',
        album_name: 'Un tr\u00e9sor appel\u00e9 Amour'
      },
      {
        id: 1184,
        song_name: 'Neeli Bullet',
        song_link: 'ust-6vhyywI',
        album_name: 'Main Aur Charles'
      },
      {
        id: 1132,
        song_name: 'Maati Ka Palang',
        song_link: 'iuDPks7S4ss',
        album_name: 'Nh10'
      },
      {
        id: 926,
        song_name: 'Main Toh Superman',
        song_link: 'pIBgqZBGJHk',
        album_name: 'Tevar'
      },
      {
        id: 938,
        song_name: 'Tu Koi Aur Hai',
        song_link: 'BV8x5eQHYq0',
        album_name: 'Tamasha'
      },
      {
        id: 1164,
        song_name: 'Dil-E-Nadaan',
        song_link: '6Ms9oXS8W5w',
        album_name: 'Hawaizaada'
      },
      {
        id: 1197,
        song_name: 'Ishq E Fillum',
        song_link: 'ZVQpqgo0HVM',
        album_name: 'Shamitabh'
      },
      {
        id: 748,
        song_name: 'Kahaaniya',
        song_link: 'FMg8uqdCIO8',
        album_name: 'Jazbaa'
      },
      {
        id: 992,
        song_name: 'Carbon Copy',
        song_link: '95IT38dK0Ig',
        album_name: 'Drishyam'
      },
      {
        id: 1229,
        song_name: 'Aao Na',
        song_link: 'FgxE4URpMhc',
        album_name: 'I Love New Year'
      },
      {
        id: 1102,
        song_name: 'Deewani Mastani',
        song_link: 'h6lHUn20J5g',
        album_name: 'Bajirao Mastani'
      },
      {
        id: 979,
        song_name: 'Tumhe Apna Banane Ka',
        song_link: 'wHDh_ruJ8Ug',
        album_name: 'Hate Story 3'
      },
      {
        id: 1210,
        song_name: 'Tu Takke MBA Swag (Remix)',
        song_link: 'D6uYVmGmBe4',
        album_name: 'Dharam Sankat Mein'
      },
      {
        id: 833,
        song_name: 'Happy Hour',
        song_link: 'YLOpzudN23g',
        album_name: 'Any Body Can Dance 2'
      },
      {
        id: 1019,
        song_name: 'Jee Karda',
        song_link: 'VAJK04HOLd0',
        album_name: 'Badlapur'
      },
      {
        id: 1115,
        song_name: 'Patli Gali',
        song_link: 'vaCm8Cl3FrU',
        album_name: 'Talvar'
      },
      {
        id: 1145,
        song_name: 'Jaanam',
        song_link: 'E8aagPqvyCA',
        album_name: 'Detective Byomkesh Bakshy!'
      },
      {
        id: 946,
        song_name: 'Shaam Shaandaar',
        song_link: 'D21Di3NXcYM',
        album_name: 'Shaandaar'
      },
      {
        id: 1178,
        song_name: 'Paro',
        song_link: 'zN6YlySa_44',
        album_name: 'Pyaar Ka Punchnama 2'
      },
      {
        id: 932,
        song_name: 'Matargashti',
        song_link: '6vKucgAeF_Q',
        album_name: 'Tamasha'
      },
      {
        id: 1158,
        song_name: 'Dum Kham',
        song_link: 'PVsrx6yLOKM',
        album_name: 'Manjhi: The Mountain Man'
      },
      {
        id: 960,
        song_name: 'Journey Song',
        song_link: '2__nNm0NK4A',
        album_name: 'Piku'
      },
      {
        id: 1191,
        song_name: 'Chittiyaan Kalaiyaan',
        song_link: 'zpsVpnvFfZQ',
        album_name: 'Roy'
      },
      {
        id: 742,
        song_name: 'Daddy Mummy',
        song_link: 'm-xXYvuZmGw',
        album_name: 'Bhaag Johnny'
      },
      {
        id: 986,
        song_name: 'Warna Gabbar Aa Jayega',
        song_link: 'KSxUwq-ejYo',
        album_name: 'Gabbar is Back'
      },
      {
        id: 1223,
        song_name: 'Hogi Kranti',
        song_link: '_5uYnkFUfdQ',
        album_name: 'Bangistan'
      },
      {
        id: 1000,
        song_name: 'Dil Dhadakne Do Title Song',
        song_link: '56ZzM4mz4yY',
        album_name: 'Dil Dhadakne Do'
      },
      {
        id: 1126,
        song_name: 'Manma Emotion Jaage',
        song_link: 'kclXuc_J50Y',
        album_name: 'Dilwale'
      },
      {
        id: 827,
        song_name: 'Bezubaan Phir Se',
        song_link: 'xutBFUf3LoU',
        album_name: 'Any Body Can Dance 2'
      },
      {
        id: 1006,
        song_name: 'Khuda Bhi Na Dikhe',
        song_link: 'MMSDmtNQHbw',
        album_name: 'Barkhaa'
      },
      {
        id: 1236,
        song_name: 'Mere Humsafar',
        song_link: 'shMMpLOAd7U',
        album_name: 'All Is Well'
      },
      {
        id: 1109,
        song_name: 'Aaj Ibaadat',
        song_link: 'MJwLrARiuVQ',
        album_name: 'Bajirao Mastani'
      },
      {
        id: 1139,
        song_name: 'Naina',
        song_link: 'Hyfb8U4H06Y',
        album_name: 'Hunterrr'
      },
      {
        id: 940,
        song_name: 'Singh and Kaur',
        song_link: 'Tt3LDWqmVJs',
        album_name: 'Singh Is Bliing'
      },
      {
        id: 1172,
        song_name: 'Welcome Back (Title Track)',
        song_link: 'tbBFVpRmtvg',
        album_name: 'Welcome Back'
      },
      {
        id: 1205,
        song_name: 'Hamari Adhuri Kahani',
        song_link: 'f3FFOBrMmdg',
        album_name: 'Hamari Adhuri Kahani'
      },
      {
        id: 755,
        song_name: 'Zindagi Kuch Toh Bata (Reprise)',
        song_link: 'jwrCYAIdkeM',
        album_name: 'Bajrangi Bhaijaan'
      },
      {
        id: 736,
        song_name: 'Glamorous Ankhiyaan',
        song_link: 'hQEGw1RfsE4',
        album_name: 'Ek Paheli Leela'
      },
      {
        id: 975,
        song_name: 'Dance Ke Legend',
        song_link: 'WpM6enJvNXg',
        album_name: 'Hero'
      },
      {
        id: 1217,
        song_name: 'Babaji Ka Ghanta',
        song_link: 't-BIFL1q04I',
        album_name: 'Meeruthiya Gangsters'
      },
      {
        id: 1026,
        song_name: 'Touch My Body',
        song_link: 'L51CPTxtJEA',
        album_name: 'Alone'
      },
      {
        id: 1121,
        song_name: 'Old School Girl',
        song_link: 'gjBzeSJnuM8',
        album_name: 'Tanu Weds Manu Returns'
      },
      {
        id: 1152,
        song_name: 'Naak Pe Gussa',
        song_link: 'MJhPbUikNLA',
        album_name: 'Bombay Velvet'
      },
      {
        id: 953,
        song_name: 'Jalte Diye',
        song_link: '8wFdbwtr61I',
        album_name: 'Un tr\u00e9sor appel\u00e9 Amour'
      },
      {
        id: 1185,
        song_name: 'Woh Tho Yahin Hai Lekin',
        song_link: 'BN_JUmBgoPk',
        album_name: 'Main Aur Charles'
      },
      {
        id: 1103,
        song_name: 'Aayat',
        song_link: '85LA5CKMW_I',
        album_name: 'Bajirao Mastani'
      },
      {
        id: 1133,
        song_name: 'Kya Karein',
        song_link: 'QsQs-15xj14',
        album_name: 'Nh10'
      },
      {
        id: 927,
        song_name: 'Radha Nachegi',
        song_link: 'K9UUbq0SZcw',
        album_name: 'Tevar'
      },
      {
        id: 1165,
        song_name: 'Udd Jayega',
        song_link: '4ogtgY6G0Ss',
        album_name: 'Hawaizaada'
      },
      {
        id: 1198,
        song_name: 'Sha Sha Sha Mi Mi Mi',
        song_link: 'up9Bow379zc',
        album_name: 'Shamitabh'
      },
      {
        id: 749,
        song_name: 'Aaj Raat Ka Scene',
        song_link: 'exl8JVjQt3Y',
        album_name: 'Jazbaa'
      },
      {
        id: 993,
        song_name: 'Dum Ghutta Hai',
        song_link: 'e86Qiv_fymA',
        album_name: 'Drishyam'
      },
      {
        id: 1230,
        song_name: 'Judaai',
        song_link: '6vWyHnOWVMQ',
        album_name: 'I Love New Year'
      },
      {
        id: 980,
        song_name: 'Tu Isaq Mera | Meet Bros ft. Neha Kakkar',
        song_link: 'Qqv9CEv73FI',
        album_name: 'Hate Story 3'
      },
      {
        id: 1211,
        song_name: 'Neelanand',
        song_link: 'dayDRw0zrJY',
        album_name: 'Dharam Sankat Mein'
      },
      {
        id: 1020,
        song_name: 'Jeena Jeena ',
        song_link: 'SjsIws_8ozg',
        album_name: 'Badlapur'
      },
      {
        id: 1116,
        song_name: 'Zinda',
        song_link: 'oFvPh0nPnFI',
        album_name: 'Talvar'
      },
      {
        id: 1146,
        song_name: 'Chase In Chinatown',
        song_link: 'N0AOqy-nF5o',
        album_name: 'Detective Byomkesh Bakshy!'
      },
      {
        id: 947,
        song_name: 'Nazdeekiyaan',
        song_link: 'nR_5zMRkS5g',
        album_name: 'Shaandaar'
      },
      {
        id: 1179,
        song_name: 'Heeriye',
        song_link: 'LNGL4ATaBUU',
        album_name: 'Pyaar Ka Punchnama 2'
      },
      {
        id: 933,
        song_name: 'Heer Toh Badi Sad Hai',
        song_link: 'dioKyJt5-PE',
        album_name: 'Tamasha'
      },
      {
        id: 1159,
        song_name: 'Beparwah',
        song_link: 'wfRD9Cy5vNg',
        album_name: 'Baby'
      },
      {
        id: 961,
        song_name: 'Bezubaan',
        song_link: 'RVRlV53TjzY',
        album_name: 'Piku'
      },
      {
        id: 1192,
        song_name: 'Boond Boond',
        song_link: 'HC-Mp0Kbo9I',
        album_name: 'Roy'
      },
      {
        id: 743,
        song_name: 'Iss Qadar Pyar Hai',
        song_link: '77zKcxMytnA',
        album_name: 'Bhaag Johnny'
      },
      {
        id: 987,
        song_name: 'Coffee Peetey Peetey',
        song_link: 'uZheKCBWMlo',
        album_name: 'Gabbar is Back'
      },
      {
        id: 1224,
        song_name: 'Saturday Night',
        song_link: 'vTSr_RBoYK0',
        album_name: 'Bangistan'
      },
      {
        id: 1001,
        song_name: 'Gallan Goodiyaan ',
        song_link: 'jCEdTq3j-0U',
        album_name: 'Dil Dhadakne Do'
      },
      {
        id: 1127,
        song_name: 'Janam Janam',
        song_link: 'pIBoAh4OXhQ',
        album_name: 'Dilwale'
      },
      {
        id: 828,
        song_name: 'Sun Saathiya',
        song_link: 'TGpG56pg3UU',
        album_name: 'Any Body Can Dance 2'
      },
      {
        id: 1007,
        song_name: 'Lafze Bayaan',
        song_link: 'nFpHpMbpVvQ',
        album_name: 'Barkhaa'
      },
      {
        id: 1237,
        song_name: 'Tu Milade',
        song_link: '_GgBhl3UIgY',
        album_name: 'All Is Well'
      },
      {
        id: 1110,
        song_name: 'Fitoori',
        song_link: 'ECWOuVtnOqU',
        album_name: 'Bajirao Mastani'
      },
      {
        id: 1140,
        song_name: 'Bachpan',
        song_link: 'Ee1H09umooQ',
        album_name: 'Hunterrr'
      },
      {
        id: 941,
        song_name: 'Cinema Dekhe Mamma',
        song_link: 'V-CWDpbN9Fk',
        album_name: 'Singh Is Bliing'
      },
      {
        id: 1173,
        song_name: 'Meet Me Daily Baby',
        song_link: 'xx82pTgJ2_Y',
        album_name: 'Welcome Back'
      },
      {
        id: 756,
        song_name: 'Tu Jo Mila',
        song_link: '6DCOjq0omBc',
        album_name: 'Bajrangi Bhaijaan'
      },
      {
        id: 1186,
        song_name: 'Ya Rabba',
        song_link: 'axkrNDX_ZvY',
        album_name: 'Main Aur Charles'
      },
      {
        id: 737,
        song_name: 'Dhol Baaje',
        song_link: 'Vo_Gk1ITskU',
        album_name: 'Ek Paheli Leela'
      },
      {
        id: 976,
        song_name: 'Yadaan Teriyaan',
        song_link: 'LP9QaJ6d568',
        album_name: 'Hero'
      },
      {
        id: 1218,
        song_name: 'Hum Toh Jeete Hain',
        song_link: 'AzhvTt2h9-o',
        album_name: 'Meeruthiya Gangsters'
      },
      {
        id: 1027,
        song_name: 'Chand Aasmano Se Laapata',
        song_link: '5gs_5byOJQg',
        album_name: 'Alone'
      },
      {
        id: 661,
        song_name: 'Phir Bhi Yeh Zindagi ',
        song_link: '7Ngw_e2uEZ0',
        album_name: 'Dil Dhadakne Do'
      },
      {
        id: 1122,
        song_name: 'Ho Gaya Hai Pyar',
        song_link: 'K7b3e5ALYo4',
        album_name: 'Tanu Weds Manu Returns'
      },
      {
        id: 1153,
        song_name: 'Sylvia',
        song_link: 'sKFXnA6nahA',
        album_name: 'Bombay Velvet'
      },
      {
        id: 954,
        song_name: 'Aaj Unse Milna Hai',
        song_link: 'PlA-vdbx6dY',
        album_name: 'Un tr\u00e9sor appel\u00e9 Amour'
      },
      {
        id: 1104,
        song_name: 'Malhari',
        song_link: 'l_MyUGq7pgs',
        album_name: 'Bajirao Mastani'
      },
      {
        id: 1134,
        song_name: 'Khoney De',
        song_link: 'qZjbCkHZTdU',
        album_name: 'Nh10'
      },
      {
        id: 928,
        song_name: "Let's Celebrate",
        song_link: 'IsAVGCIQ0Q8',
        album_name: 'Tevar'
      },
      {
        id: 1166,
        song_name: 'Dil Todne Ki Masheen',
        song_link: 'dX4YxoQOaug',
        album_name: 'Hawaizaada'
      },
      {
        id: 1199,
        song_name: 'Piddly Si Baatein',
        song_link: 'CGxWrLqT6aE',
        album_name: 'Shamitabh'
      },
      {
        id: 750,
        song_name: 'Selfie Le Le Re',
        song_link: 'TITGBTGJZS8',
        album_name: 'Bajrangi Bhaijaan'
      },
      {
        id: 995,
        song_name: 'Phatte Tak Nachna',
        song_link: 'n9IBrL5tI3s',
        album_name: 'Dolly Ki Doli'
      },
      {
        id: 1231,
        song_name: 'Halki Halki',
        song_link: 'nPchBaOtmeI',
        album_name: 'I Love New Year'
      },
      {
        id: 981,
        song_name: 'Wajah Tum Ho',
        song_link: '__ZvXBf1rmw',
        album_name: 'Hate Story 3'
      },
      {
        id: 970,
        song_name: 'Dance Ke Legend',
        song_link: 'WpM6enJvNXg',
        album_name: 'Khamoshiyan'
      },
      {
        id: 1212,
        song_name: 'Allah Hoo (Ravi Chowdhary Version)',
        song_link: '6PtSnjtWYes',
        album_name: 'Dharam Sankat Mein'
      },
      {
        id: 1021,
        song_name: 'Judaai',
        song_link: 'etkZRuajJys',
        album_name: 'Badlapur'
      },
      {
        id: 2043,
        song_name: 'Hona Hai Kya',
        song_link: 'ZCVsAyZATNA',
        album_name: 'Talvar'
      },
      {
        id: 1147,
        song_name: "Life's A Bitch",
        song_link: 'iFng0lnrPqc',
        album_name: 'Detective Byomkesh Bakshy!'
      },
      {
        id: 948,
        song_name: 'Senti Wali Mental',
        song_link: 'qIh6Yk-E1So',
        album_name: 'Shaandaar'
      },
      {
        id: 1180,
        song_name: 'DJ Bajega To Pappu Nachega',
        song_link: 'ZEJ3P92bKZo',
        album_name: 'Kis Kisko Pyaar Karoon'
      },
      {
        id: 934,
        song_name: 'Agar Tum Saath Ho',
        song_link: 'xRb8hxwN5zc',
        album_name: 'Tamasha'
      },
      {
        id: 1160,
        song_name: 'Main Tujhse Pyaar Nahin Karta',
        song_link: '6GlVn2oK1rw',
        album_name: 'Baby'
      },
      {
        id: 962,
        song_name: 'Lamhe Guzar Gaye',
        song_link: 'U-r9RboQe0I',
        album_name: 'Piku'
      },
      {
        id: 1193,
        song_name: 'Yaara Re',
        song_link: 'gbxNewi30Sw',
        album_name: 'Roy'
      },
      {
        id: 744,
        song_name: 'Aankhon Aankhon',
        song_link: 'opCjqS8wj4k',
        album_name: 'Bhaag Johnny'
      },
      {
        id: 772,
        song_name: ' Thode Se Hum Official Video ',
        song_link: 'fg7JhMMnkSY',
        album_name: 'Badmashiyaan'
      },
      {
        id: 988,
        song_name: 'Sunder Susheel',
        song_link: 'Nb3KaPh4dwM',
        album_name: 'Dum Laga Ke Haisha'
      },
      {
        id: 1225,
        song_name: 'Maula',
        song_link: 'Nyh8TIFGDfw',
        album_name: 'Bangistan'
      },
      {
        id: 1002,
        song_name: 'Pehli Baar',
        song_link: 'VkJlv0m6els',
        album_name: 'Dil Dhadakne Do'
      },
      {
        id: 1128,
        song_name: 'Tukur Tukur',
        song_link: '0-ggsgFh5TI',
        album_name: 'Dilwale'
      },
      {
        id: 1206,
        song_name: 'Humnava',
        song_link: 'ktPD6TMovxs',
        album_name: 'Hamari Adhuri Kahani'
      },
      {
        id: 829,
        song_name: 'Chunar',
        song_link: 'pTnWKvslwDU',
        album_name: 'Any Body Can Dance 2'
      },
      {
        id: 1008,
        song_name: 'Mann Quanto Maula',
        song_link: 'H8ot2uO61Gw',
        album_name: 'Barkhaa'
      },
      {
        id: 1238,
        song_name: 'Yolo',
        song_link: '6FLqyGt-oIY',
        album_name: 'All Is Well'
      },
      {
        id: 1111,
        song_name: 'Gajanana',
        song_link: 'wGkcQmzysu0',
        album_name: 'Bajirao Mastani'
      },
      {
        id: 1141,
        song_name: 'Ye Naa Gade',
        song_link: 'FXfFB5wzi9U',
        album_name: 'Hunterrr'
      },
      {
        id: 942,
        song_name: 'Mahi Aaja',
        song_link: '_2Wloi2FwHE',
        album_name: 'Singh Is Bliing'
      },
      {
        id: 1174,
        song_name: 'Time Lagaye Kaiko',
        song_link: 'e0SqnVpdeM4',
        album_name: 'Welcome Back'
      },
      {
        id: 757,
        song_name: 'Bhar Do Jholi Meri - Reprise ',
        song_link: '0ZGFko8_gH4',
        album_name: 'Bajrangi Bhaijaan'
      },
      {
        id: 562,
        song_name: 'Mera Naam Mary ',
        song_link: 'MHtLjTRdFBE',
        album_name: 'Brothers'
      },
      {
        id: 1187,
        song_name: 'Jee Lo Yaaron',
        song_link: '0hH_EszZ3O4',
        album_name: 'Main Aur Charles'
      },
      {
        id: 738,
        song_name: 'Tere Bin Nahi Laage',
        song_link: 'ODp3B_pQD48',
        album_name: 'Ek Paheli Leela'
      },
      {
        id: 977,
        song_name: 'Khoya Khoya',
        song_link: 'Auwb4vA4UIA',
        album_name: 'Hero'
      },
      {
        id: 1219,
        song_name: 'Naina Tose Lage (Male version)',
        song_link: 'Iwvrtww5HuI',
        album_name: 'Meeruthiya Gangsters'
      },
      {
        id: 662,
        song_name: 'Girls Like To Swing ',
        song_link: 'JTWGBaTV_Ig',
        album_name: 'Dil Dhadakne Do'
      },
      {
        id: 1123,
        song_name: 'O Saathi Mere',
        song_link: 'IBZtxWxpDGE',
        album_name: 'Tanu Weds Manu Returns'
      },
      {
        id: 1154,
        song_name: 'Darbaan',
        song_link: '-uCPiHCr8kE',
        album_name: 'Bombay Velvet'
      },
      {
        id: 955,
        song_name: 'Jab Tum Chaho',
        song_link: 'abCXAUnQfYU',
        album_name: 'Un tr\u00e9sor appel\u00e9 Amour'
      },
      {
        id: 1105,
        song_name: 'Mohe Rang Do Laal',
        song_link: 'XU3eFkY1BTI',
        album_name: 'Bajirao Mastani'
      },
      {
        id: 1135,
        song_name: 'Le Chal Mujhe',
        song_link: 'T9bexYRXnik',
        album_name: 'Nh10'
      },
      {
        id: 929,
        song_name: 'Madamiyan',
        song_link: 'gdmMCmbvWB4',
        album_name: 'Tevar'
      },
      {
        id: 1167,
        song_name: 'Turram Khan',
        song_link: 't6bqRhwwDdA',
        album_name: 'Hawaizaada'
      },
      {
        id: 969,
        song_name: 'Main Hoon Hero Tera',
        song_link: '6aOAskg67Vw',
        album_name: 'Khamoshiyan'
      },
      {
        id: 1200,
        song_name: 'Stereophonic Sannata',
        song_link: 'o0PFiyuhRz4',
        album_name: 'Shamitabh'
      },
      {
        id: 751,
        song_name: 'Tu Chahiye',
        song_link: 'zuvla6ABKbs',
        album_name: 'Bajrangi Bhaijaan'
      },
      {
        id: 996,
        song_name: 'Fashion Khatam Mujhpe (item song)',
        song_link: 'PKhjmDgy_iI',
        album_name: 'Dolly Ki Doli'
      },
      {
        id: 1232,
        song_name: 'Aaja Meri Jaan',
        song_link: 'KOn-GT2DNpU',
        album_name: 'I Love New Year'
      },
      {
        id: 982,
        song_name: 'Neendein Khul Jaati Hain',
        song_link: 'H53fwtX_A2E',
        album_name: 'Hate Story 3'
      },
      {
        id: 971,
        song_name: 'Yadaan Teriyaan',
        song_link: '8vDbfCeOdN8',
        album_name: 'Khamoshiyan'
      },
      {
        id: 1213,
        song_name: 'Allah Hoo (Pardeep Sran Version)',
        song_link: 'SSXN5loHnbo',
        album_name: 'Dharam Sankat Mein'
      },
      {
        id: 1022,
        song_name: 'Badla Badla',
        song_link: 'x_OVEve7hM8',
        album_name: 'Badlapur'
      },
      {
        id: 1117,
        song_name: 'Banno',
        song_link: 'Oju9kp8tLpY',
        album_name: 'Tanu Weds Manu Returns'
      },
      {
        id: 1148,
        song_name: 'Jata Kahan Hai Deewane (Fifi)',
        song_link: 'FlgVLKCayfk',
        album_name: 'Bombay Velvet'
      },
      {
        id: 949,
        song_name: 'Raitaa Phailgaya',
        song_link: 'Koz3cfOCiCE',
        album_name: 'Shaandaar'
      },
      {
        id: 1181,
        song_name: 'Jugni Peeke Tight Hai',
        song_link: 'abcBq_tdTuA',
        album_name: 'Kis Kisko Pyaar Karoon'
      },
      {
        id: 732,
        song_name: 'Desi Look',
        song_link: '53JF_3tjrqU',
        album_name: 'Ek Paheli Leela'
      },
      {
        id: 1129,
        song_name: 'Daayre',
        song_link: 'OLDxNulRUIM',
        album_name: 'Dilwale'
      },
      {
        id: 935,
        song_name: 'Wat Wat Wat',
        song_link: 'vURbICF6T5U',
        album_name: 'Tamasha'
      },
      {
        id: 1161,
        song_name: 'Hawaizaada Dil',
        song_link: 'PJeAa_60g08',
        album_name: 'Hawaizaada'
      },
      {
        id: 963,
        song_name: 'Piku (Title Song)',
        song_link: 'nVrnINi7jp4',
        album_name: 'Piku'
      },
      {
        id: 1194,
        song_name: 'Dil Dola Re',
        song_link: '5IBmiy3epb4',
        album_name: 'D\u00e9esses indiennes en col\u00e8re'
      },
      {
        id: 745,
        song_name: 'Kinna Sona',
        song_link: 'Xd29mNwjUQQ',
        album_name: 'Bhaag Johnny'
      },
      {
        id: 773,
        song_name: 'Garden Garden Gave ',
        song_link: '5U-LZFe8azs',
        album_name: 'Badmashiyaan'
      },
      {
        id: 989,
        song_name: 'Moh Moh Ke Dhaage',
        song_link: 'peBsfgbOlYM',
        album_name: 'Dum Laga Ke Haisha'
      },
      {
        id: 1226,
        song_name: 'Meri Zidd',
        song_link: 'R1-TzJnnMk0',
        album_name: 'Bangistan'
      },
      {
        id: 1003,
        song_name: 'Phir Bhi Yeh Zindagi',
        song_link: '7Ngw_e2uEZ0',
        album_name: 'Dil Dhadakne Do'
      },
      {
        id: 1207,
        song_name: 'Yeh Kaisi Jagah',
        song_link: '705E59Lrcos',
        album_name: 'Hamari Adhuri Kahani'
      },
      {
        id: 830,
        song_name: 'Happy Birthday',
        song_link: 'bV2GklFBaT8',
        album_name: 'Any Body Can Dance 2'
      },
      {
        id: 1009,
        song_name: 'Naughty No. 1',
        song_link: 'zxWLDwoNC9o',
        album_name: 'Barkhaa'
      },
      {
        id: 1112,
        song_name: 'Tu Kisi Rail Si',
        song_link: 'zpf8hrbT2d0',
        album_name: 'Masaan'
      },
      {
        id: 1142,
        song_name: 'Dil Lagaana',
        song_link: 'muTRgDKJ8Fc',
        album_name: 'Hunterrr'
      },
      {
        id: 943,
        song_name: 'Dil Kare Chu Che',
        song_link: '4Lzih-SfYDM',
        album_name: 'Singh Is Bliing'
      },
      {
        id: 1175,
        song_name: 'Nas Nas Mein',
        song_link: 'BCWItl_WtWs',
        album_name: 'Welcome Back'
      },
      {
        id: 758,
        song_name: 'Tumhe Apna Banane Ka',
        song_link: 'wHDh_ruJ8Ug',
        album_name: 'Hate Story 3'
      },
      {
        id: 563,
        song_name: 'Brothers Anthem ',
        song_link: 'lcs_GXu8IA0',
        album_name: 'Brothers'
      },
      {
        id: 1188,
        song_name: 'Main To Yahin Hoon Lekin',
        song_link: 'GeXDfrQjvVw',
        album_name: 'Main Aur Charles'
      },
      {
        id: 739,
        song_name: 'Sarfira',
        song_link: 'fq6Dr478CNc',
        album_name: 'Katti Batti'
      },
      {
        id: 978,
        song_name: 'O Khuda',
        song_link: 'JG-53KJY4aY',
        album_name: 'Hero'
      },
      {
        id: 1220,
        song_name: 'Naina Tose Lage (Female)',
        song_link: 'cq8GbBN_fQs',
        album_name: 'Meeruthiya Gangsters'
      },
      {
        id: 663,
        song_name: 'Pehli Baar ',
        song_link: 'VkJlv0m6els',
        album_name: 'Dil Dhadakne Do'
      },
      {
        id: 1124,
        song_name: 'Mari Gali',
        song_link: 'if5JUlnCNCQ',
        album_name: 'Tanu Weds Manu Returns'
      },
      {
        id: 1155,
        song_name: 'Behroopia',
        song_link: '01i9x4VtfBo',
        album_name: 'Bombay Velvet'
      },
      {
        id: 956,
        song_name: 'Halo Re',
        song_link: 'O-Nn9wShVCI',
        album_name: 'Un tr\u00e9sor appel\u00e9 Amour'
      },
      {
        id: 997,
        song_name: 'Dolly Ki Doli (Title Song)',
        song_link: 'FoaArhZ8VTQ',
        album_name: 'Dolly Ki Doli'
      },
      {
        id: 1233,
        song_name: 'Chaar Shanivaar',
        song_link: '7hPZN8v1oAw',
        album_name: 'All Is Well'
      },
      {
        id: 1106,
        song_name: 'Albela Sajan',
        song_link: 'QmxlJK4hRHU',
        album_name: 'Bajirao Mastani'
      },
      {
        id: 1136,
        song_name: 'Hunterrr 303',
        song_link: 'euvylRF2oTI',
        album_name: 'Hunterrr'
      },
      {
        id: 930,
        song_name: 'Joganiyan',
        song_link: 'V9ubInQ7-iI',
        album_name: 'Tevar'
      },
      {
        id: 1168,
        song_name: 'Teri Dua',
        song_link: '8ywau3KUS54',
        album_name: 'Hawaizaada'
      },
      {
        id: 1201,
        song_name: 'Thappad',
        song_link: 'MKGBp14Zg6g',
        album_name: 'Shamitabh'
      },
      {
        id: 752,
        song_name: 'Bhar Do Jholi Meri',
        song_link: 'vqOI22OR8gM',
        album_name: 'Bajrangi Bhaijaan'
      },
      {
        id: 733,
        song_name: 'Tere Bin Nahi Laage ',
        song_link: 'ODp3B_pQD48',
        album_name: 'Ek Paheli Leela'
      },
      {
        id: 983,
        song_name: 'Love To Hate You',
        song_link: 'a3n0na_BETk',
        album_name: 'Hate Story 3'
      },
      {
        id: 972,
        song_name: 'Khoya Khoya',
        song_link: 'Auwb4vA4UIA',
        album_name: 'Khamoshiyan'
      },
      {
        id: 1214,
        song_name: 'Do You Know Baby',
        song_link: '2jwyh-sEguA',
        album_name: 'Dharam Sankat Mein'
      },
      {
        id: 626,
        song_name: 'Yaqeen ',
        song_link: 'meIxKRPjpGs',
        album_name: '31st October'
      },
      {
        id: 1023,
        song_name: 'Sone Ka Paani ',
        song_link: 'Zf-XQXHRA1o',
        album_name: 'Badlapur'
      },
      {
        id: 1118,
        song_name: 'Move On',
        song_link: 'JOvkJZ6tnjc',
        album_name: 'Tanu Weds Manu Returns'
      },
      {
        id: 1149,
        song_name: 'Aam Hindustani',
        song_link: 'U5tjrnXL6D8',
        album_name: 'Bombay Velvet'
      },
      {
        id: 950,
        song_name: 'Neend Na Mujhko Aaye',
        song_link: 'yx7jzT4_9os',
        album_name: 'Shaandaar'
      },
      {
        id: 1182,
        song_name: 'Samandar Main Kinara',
        song_link: '6U8mmFPcpps',
        album_name: 'Kis Kisko Pyaar Karoon'
      },
      {
        id: 1130,
        song_name: 'Premika',
        song_link: '1cOgX0aB5O4',
        album_name: 'Dilwale'
      },
      {
        id: 936,
        song_name: 'Chali Kahani',
        song_link: '8P0iOywzw4g',
        album_name: 'Tamasha'
      },
      {
        id: 1162,
        song_name: 'Daak Ticket',
        song_link: 'X_yJUTEBlCI',
        album_name: 'Hawaizaada'
      },
      {
        id: 964,
        song_name: 'Teri Meri Baatein',
        song_link: '-sr7ip_ykGA',
        album_name: 'Piku'
      },
      {
        id: 1195,
        song_name: 'Aaoge Tum Kabhi',
        song_link: '7aVnrE6s71s',
        album_name: 'D\u00e9esses indiennes en col\u00e8re'
      },
      {
        id: 746,
        song_name: 'Meri Zindagi',
        song_link: 'd2G3x2L3IKk',
        album_name: 'Bhaag Johnny'
      },
      {
        id: 774,
        song_name: 'Shaitaaniyan ',
        song_link: '1SMEaYuJJis',
        album_name: 'Badmashiyaan'
      },
      {
        id: 990,
        song_name: 'Dum Laga Ke Haisha (Title Song)',
        song_link: 'eWiHhEM-4hM',
        album_name: 'Dum Laga Ke Haisha'
      },
      {
        id: 1227,
        song_name: 'Is Duniya Se Ladna Hai',
        song_link: 'lxjhiKj1Lrg',
        album_name: 'Bangistan'
      },
      {
        id: 1004,
        song_name: 'Girls Like To Swing',
        song_link: 'JTWGBaTV_Ig',
        album_name: 'Dil Dhadakne Do'
      },
      {
        id: 1317,
        song_name: 'Suno- Na Sangemarmar',
        song_link: 'v7jiFpX5SU4',
        album_name: 'Youngistaan'
      },
      {
        id: 1349,
        song_name: 'Tere Naina Maar Hi Daalenge',
        song_link: 'nEE6rRS-CKE',
        album_name: 'Jai Ho'
      },
      {
        id: 1240,
        song_name: 'Love Is a Waste of Time',
        song_link: 'xfjP63fasj8',
        album_name: 'PK'
      },
      {
        id: 1381,
        song_name: 'Thaayein Kare Katta',
        song_link: 'UyYNh4bnXio',
        album_name: 'Revolver Rani'
      },
      {
        id: 1272,
        song_name: 'Tu Hi Toh Hai',
        song_link: 'TyZDyd9FBBE',
        album_name: 'Holiday'
      },
      {
        id: 1418,
        song_name: 'Nissar',
        song_link: '2tf4qEjMICU',
        album_name: 'Dishkiyaoon'
      },
      {
        id: 1304,
        song_name: 'Veerey Di Wedding',
        song_link: 'oUhFK_10BiA',
        album_name: 'Entertainment'
      },
      {
        id: 727,
        song_name: 'Paaji Tussi Such A Pussy Cat ',
        song_link: '2zb4veLzMJQ',
        album_name: 'Happy Ending'
      },
      {
        id: 1330,
        song_name: 'Mausam Yeh Kyun Badal gaya',
        song_link: 'zqOxrsfgn9s',
        album_name: 'Sonali Cable'
      },
      {
        id: 1362,
        song_name: 'Bol Beliya',
        song_link: 'x3l6c1aPeyU',
        album_name: 'Kill Dil'
      },
      {
        id: 1253,
        song_name: 'Tu Kuja',
        song_link: '_7oqN2WeRNM',
        album_name: 'Highway'
      },
      {
        id: 1394,
        song_name: 'Punjabi Mast',
        song_link: 'KRbMlHjjvEY',
        album_name: 'Action Jackson'
      },
      {
        id: 1285,
        song_name: 'Jashn',
        song_link: 'ufpdtabUku8',
        album_name: 'Bobby Jasoos'
      },
      {
        id: 695,
        song_name: 'Tu Meri',
        song_link: 'YAOIbHBEvi0',
        album_name: 'Bang Bang'
      },
      {
        id: 1431,
        song_name: 'Aashiq Mizaaj',
        song_link: 'QHgyEknJ5Is',
        album_name: 'The Shaukeens'
      },
      {
        id: 1375,
        song_name: 'Banjarey',
        song_link: 'a6XkY53VlhM',
        album_name: 'Fugly'
      },
      {
        id: 1266,
        song_name: 'Salaam India',
        song_link: 'iii1NM-Zv1g',
        album_name: 'Mary Kom'
      },
      {
        id: 1412,
        song_name: 'Ishq Khuda',
        song_link: 'gIgAjoNEJpI',
        album_name: 'Heartless'
      },
      {
        id: 1298,
        song_name: 'Soney Do',
        song_link: '_FzVZZBD6HY',
        album_name: 'CityLights'
      },
      {
        id: 708,
        song_name: 'Hai Yehi Zindagi',
        song_link: 'TcaqalhM8Lk',
        album_name: 'Kick'
      },
      {
        id: 1435,
        song_name: 'Kaboom',
        song_link: 'WBiJghav3To',
        album_name: 'One by Two'
      },
      {
        id: 1343,
        song_name: 'Daawat-e-Ishq title track',
        song_link: 'xsWs0qWQlzE',
        album_name: 'Daawat-e-Ishq'
      },
      {
        id: 1324,
        song_name: 'Sapnon Ko Ginte Ginte',
        song_link: 'tx8IS1noqCE',
        album_name: 'Hawaa Hawaai'
      },
      {
        id: 1356,
        song_name: 'Pinacolada (Remix)',
        song_link: 'k7_sA4xs7K4',
        album_name: 'Darr @ the Mall'
      },
      {
        id: 1247,
        song_name: 'Maahi Ve',
        song_link: 'O8dTlOVm8a8',
        album_name: 'Highway'
      },
      {
        id: 657,
        song_name: 'Manwa Laage ',
        song_link: 'd8IT-16kA8M',
        album_name: 'Happy New Year'
      },
      {
        id: 1388,
        song_name: 'Main Mushtanda',
        song_link: 'tfKciDxtx3E',
        album_name: 'Kaanchi'
      },
      {
        id: 1279,
        song_name: 'Maa Ka Phone',
        song_link: 'YVLgGkOcnYY',
        album_name: 'Khoobsurat'
      },
      {
        id: 689,
        song_name: 'Lucky Tu Lucky Me',
        song_link: 'LwvU3DG9qrU',
        album_name: "La mari\u00e9e d'Humpty Sharma"
      },
      {
        id: 1425,
        song_name: 'Namak Paare',
        song_link: 'V18w48Y1eCY',
        album_name: 'Raja Natwarlal'
      },
      {
        id: 1311,
        song_name: 'O Heeriye',
        song_link: '8K2Vz9iQorc',
        album_name: 'Bewakoofiyaan'
      },
      {
        id: 721,
        song_name: 'Ata Majhi Satakli ',
        song_link: 'M3KqzpP6Ej0',
        album_name: 'Singham Returns'
      },
      {
        id: 1406,
        song_name: 'Tu Zaroori',
        song_link: '38J7z-ZJz2A',
        album_name: 'Zid'
      },
      {
        id: 1292,
        song_name: 'Rang Si Hui',
        song_link: '67EBFbnmc4U',
        album_name: 'Gulaab Gang'
      },
      {
        id: 702,
        song_name: 'Banjaara',
        song_link: '0NFxcNheoLc',
        album_name: 'Ek Villain'
      },
      {
        id: 570,
        song_name: 'Saaiyaan ',
        song_link: 'FvVXaDOuaV0',
        album_name: 'Gunday'
      },
      {
        id: 1736,
        song_name: 'Haider Theme',
        song_link: 'ichLf4xSRjo&vl=',
        album_name: 'Haider'
      },
      {
        id: 1337,
        song_name: 'Caller Tune',
        song_link: '8HnGpDTozTk',
        album_name: 'Humshakals'
      },
      {
        id: 1369,
        song_name: 'Shanivaar Raati',
        song_link: 'Ee_9J9lGgS0',
        album_name: 'Main Tera Hero'
      },
      {
        id: 1260,
        song_name: 'Mardaani Anthem',
        song_link: 'XHizXKSN5II',
        album_name: 'Mardaani'
      },
      {
        id: 1318,
        song_name: 'Tanki Hai Hum Remix',
        song_link: 'ZDm0lbnWuwY',
        album_name: 'Youngistaan'
      },
      {
        id: 1350,
        song_name: 'Photocopy',
        song_link: 'BgWWJfsTIhA',
        album_name: 'Jai Ho'
      },
      {
        id: 1241,
        song_name: 'Nanga Punga Dost',
        song_link: 'AKKKRw0IW88',
        album_name: 'PK'
      },
      {
        id: 1382,
        song_name: 'Kaafi Nahi Chaand',
        song_link: '4Pa6SPBop-8',
        album_name: 'Revolver Rani'
      },
      {
        id: 1273,
        song_name: 'Ashq Na Ho',
        song_link: 'FDgGdKanrdM',
        album_name: 'Holiday'
      },
      {
        id: 1419,
        song_name: 'Ghoor Ghoor Ke',
        song_link: 'ELM3RCdCUIk',
        album_name: 'Ekkees Toppon Ki Salaami'
      },
      {
        id: 1305,
        song_name: 'Maange Maange',
        song_link: 'L1SgFpQAcFU',
        album_name: 'Entertainment'
      },
      {
        id: 583,
        song_name: 'Meri Maa ',
        song_link: 'PGv2khQzE-Q',
        album_name: 'Yaariyan'
      },
      {
        id: 728,
        song_name: 'Mileya Mileya ',
        song_link: 'zDtvoZAHVTY',
        album_name: 'Happy Ending'
      },
      {
        id: 1331,
        song_name: 'Sapney Apney',
        song_link: 'k-VRr0TImb4',
        album_name: 'Sonali Cable'
      },
      {
        id: 1363,
        song_name: 'Sweeta',
        song_link: 'FLWR8baTG-M',
        album_name: 'Kill Dil'
      },
      {
        id: 1254,
        song_name: 'Heera',
        song_link: 'xvuMpTTiXaU',
        album_name: 'Highway'
      },
      {
        id: 1395,
        song_name: 'Chichora Piya',
        song_link: 'bC53bbMCtng',
        album_name: 'Action Jackson'
      },
      {
        id: 1286,
        song_name: 'Tu',
        song_link: 'QGJdBK2xtys',
        album_name: 'Bobby Jasoos'
      },
      {
        id: 696,
        song_name: 'Zehnaseeb',
        song_link: 'KLYwt0YmQw8',
        album_name: 'Hasee Toh Phasee'
      },
      {
        id: 1432,
        song_name: 'Ishq Kutta Hai',
        song_link: 'leedD9kusIA',
        album_name: 'The Shaukeens'
      },
      {
        id: 1376,
        song_name: 'Good In Bed',
        song_link: 'eKFyf9SGR8I',
        album_name: 'Fugly'
      },
      {
        id: 1038,
        song_name: 'Sawan aaya hai',
        song_link: 'B5_6jfGsyjA',
        album_name: 'Creature'
      },
      {
        id: 1267,
        song_name: 'Chaoro (Lori)',
        song_link: 'ZyreLU0-60Y',
        album_name: 'Mary Kom'
      },
      {
        id: 1413,
        song_name: 'What a Feeling',
        song_link: 'ROfT0Ur7X-k',
        album_name: 'Heartless'
      },
      {
        id: 1299,
        song_name: 'Ek Charraiya',
        song_link: '48nxJ3G3T3A',
        album_name: 'CityLights'
      },
      {
        id: 709,
        song_name: 'Yaar Naa Miley',
        song_link: 'Zti5s48tc7k',
        album_name: 'Kick'
      },
      {
        id: 1436,
        song_name: 'Khushfehmiyan',
        song_link: 'gas4bEinBPA',
        album_name: 'One by Two'
      },
      {
        id: 1344,
        song_name: 'Mannat',
        song_link: '_7dxX6mF0Iw',
        album_name: 'Daawat-e-Ishq'
      },
      {
        id: 1325,
        song_name: 'Sar Utha Ke',
        song_link: '2-x1xJYMEqs',
        album_name: 'Hawaa Hawaai'
      },
      {
        id: 1357,
        song_name: 'Chaahatein',
        song_link: 'EF5cLAmU6k4',
        album_name: 'Darr @ the Mall'
      },
      {
        id: 1248,
        song_name: 'Kahaan Hoon Main',
        song_link: 'iAxCcecVaig',
        album_name: 'Highway'
      },
      {
        id: 658,
        song_name: 'Dance Like A Chammiya ',
        song_link: 'jVa4JQs--w0',
        album_name: 'Happy New Year'
      },
      {
        id: 1389,
        song_name: 'Mushtanda Mika songh feat mishti',
        song_link: '3Vz0RwEvthE',
        album_name: 'Kaanchi'
      },
      {
        id: 1280,
        song_name: 'Naina',
        song_link: 'a6rT8WslhFU',
        album_name: 'Khoobsurat'
      },
      {
        id: 690,
        song_name: 'Daingad Daingad',
        song_link: 'wgyZZbEwt-I',
        album_name: "La mari\u00e9e d'Humpty Sharma"
      },
      {
        id: 1426,
        song_name: 'Kabhi Ruhani Kabhi Rumani',
        song_link: 'VpdwkEOhzrk',
        album_name: 'Raja Natwarlal'
      },
      {
        id: 1312,
        song_name: 'Party To Banti Hai (Feat. Mika Singh)',
        song_link: 'Cyi2LrnmFZQ',
        album_name: 'Bhoothnath Returns'
      },
      {
        id: 722,
        song_name: 'Kuch Toh Hua Hai ',
        song_link: 'fA7fIScVxJc',
        album_name: 'Singham Returns'
      },
      {
        id: 1261,
        song_name: 'Ziddi Dil',
        song_link: 'puKD3nkB1h4',
        album_name: 'Mary Kom'
      },
      {
        id: 1407,
        song_name: 'Mareez - E - Ishq',
        song_link: 'Ph9WRhlPacY',
        album_name: 'Zid'
      },
      {
        id: 1293,
        song_name: 'Rangi Saari Gulaabi',
        song_link: 'VE17ZzXdyy0',
        album_name: 'Gulaab Gang'
      },
      {
        id: 703,
        song_name: 'Galliyan',
        song_link: 'FxAG_11PzCk',
        album_name: 'Ek Villain'
      },
      {
        id: 776,
        song_name: 'Desi Romance ',
        song_link: '7q3r8NFD_-o',
        album_name: 'Shaadi Ke Side Effects'
      },
      {
        id: 1338,
        song_name: 'Piya Ke Bazaar',
        song_link: 'eg5ftU16dQM',
        album_name: 'Humshakals'
      },
      {
        id: 1370,
        song_name: 'Galat Baat Hai',
        song_link: 'coQ95u7w_18',
        album_name: 'Main Tera Hero'
      },
      {
        id: 1319,
        song_name: 'Daata Di Diwani (Qawwali)',
        song_link: 'vuYVNtt8C3w',
        album_name: 'Youngistaan'
      },
      {
        id: 1351,
        song_name: 'Tumko To Aana Hi Tha',
        song_link: 'c0F63O5uE-M',
        album_name: 'Jai Ho'
      },
      {
        id: 1242,
        song_name: 'Chaar Kadam',
        song_link: 'WKbwopSXLWU',
        album_name: 'PK'
      },
      {
        id: 652,
        song_name: 'Sharabi ',
        song_link: 'IAtKh-ZAc4Q',
        album_name: 'Happy New Year'
      },
      {
        id: 1383,
        song_name: 'Chal Lade Re Bhaiya',
        song_link: 'xQdEqHxDOtM',
        album_name: 'Revolver Rani'
      },
      {
        id: 1274,
        song_name: 'Blame the Night',
        song_link: 'z7R7_VA00f0',
        album_name: 'Holiday'
      },
      {
        id: 1420,
        song_name: 'Tod De Kataar',
        song_link: 'N3wHZiQpUQY',
        album_name: 'Ekkees Toppon Ki Salaami'
      },
      {
        id: 1306,
        song_name: 'Gulcharrey',
        song_link: 'OKNRYTvKErc',
        album_name: 'Bewakoofiyaan'
      },
      {
        id: 584,
        song_name: 'Love Me Thoda Aur ',
        song_link: 'lz1-1Q8Gync',
        album_name: 'Yaariyan'
      },
      {
        id: 729,
        song_name: 'G Phaad Ke (Remix) ',
        song_link: 'SnjztxAUL8I',
        album_name: 'Happy Ending'
      },
      {
        id: 565,
        song_name: 'Mann Kunto Maula ',
        song_link: '-Dby8p6mZhY',
        album_name: 'Gunday'
      },
      {
        id: 1332,
        song_name: 'Rabba',
        song_link: 'o4mHtJLgMLs',
        album_name: 'Heropanti'
      },
      {
        id: 1364,
        song_name: 'Daiyya Maiyya',
        song_link: 'pIgqU8ZjYPQ',
        album_name: 'Kill Dil'
      },
      {
        id: 1255,
        song_name: 'Dil Ka Mizaaj Ishqiya',
        song_link: 'WbLTM4Su7e8',
        album_name: 'Dedh Ishqiya'
      },
      {
        id: 1396,
        song_name: 'Dhoom Dhaam',
        song_link: '1EUb3st77zk',
        album_name: 'Action Jackson'
      },
      {
        id: 1287,
        song_name: 'B.O.B.B.',
        song_link: 'lvFupTm1SuM',
        album_name: 'Bobby Jasoos'
      },
      {
        id: 697,
        song_name: 'Drama Queen',
        song_link: '0Qs-Suk42dY',
        album_name: 'Hasee Toh Phasee'
      },
      {
        id: 1345,
        song_name: 'Rangreli',
        song_link: 'zkU_0IAI9sk',
        album_name: 'Daawat-e-Ishq'
      },
      {
        id: 1377,
        song_name: 'Dhuaan',
        song_link: 'P6nQc6s6thM',
        album_name: 'Fugly'
      },
      {
        id: 1039,
        song_name: 'Hum Naa Rahein Hum',
        song_link: 'RtEq-jSRZ1U',
        album_name: 'Creature'
      },
      {
        id: 1268,
        song_name: 'Fanny Re',
        song_link: '5N7QbQ1fkyM',
        album_name: 'Finding Fanny'
      },
      {
        id: 1414,
        song_name: 'Tu Hi Hai Aashiqui',
        song_link: '48Zs5dx7Ofg',
        album_name: 'Dishkiyaoon'
      },
      {
        id: 1300,
        song_name: 'Darbadar',
        song_link: 'WrpNPQbZIJ0',
        album_name: 'CityLights'
      },
      {
        id: 710,
        song_name: 'Hangover',
        song_link: '1gqBb4Y7LJA',
        album_name: 'Kick'
      },
      {
        id: 1437,
        song_name: 'Sheher Mera',
        song_link: 'RA5ye5exWb8',
        album_name: 'One by Two'
      },
      {
        id: 1326,
        song_name: 'Choolhe Ke Angaarey',
        song_link: 'U4q43NT22cQ',
        album_name: 'Hawaa Hawaai'
      },
      {
        id: 1358,
        song_name: 'Pinacolada',
        song_link: '7kFBC-53tIQ',
        album_name: 'Darr @ the Mall'
      },
      {
        id: 1249,
        song_name: 'Wanna Mash Up?',
        song_link: 'jdfYFBmWL_8',
        album_name: 'Highway'
      },
      {
        id: 659,
        song_name: 'World Dance Medley ',
        song_link: 'G_mCIeEb6cM',
        album_name: 'Happy New Year'
      },
      {
        id: 1390,
        song_name: 'Kambal Ke Neeche',
        song_link: 'zR7_aRpRdvk',
        album_name: 'Kaanchi'
      },
      {
        id: 1281,
        song_name: 'Baby Doll',
        song_link: 'kShTN0Jz6Jg',
        album_name: 'Ragini MMS 2'
      },
      {
        id: 691,
        song_name: 'Samjhawan',
        song_link: '6XGdeSKL6eE',
        album_name: "La mari\u00e9e d'Humpty Sharma"
      },
      {
        id: 1427,
        song_name: 'Flip Your Collar Back',
        song_link: 'vgL9EQpoaSE',
        album_name: 'Raja Natwarlal'
      },
      {
        id: 1313,
        song_name: 'Har Har Gange',
        song_link: 'gyabpQ1DWb0',
        album_name: 'Bhoothnath Returns'
      },
      {
        id: 723,
        song_name: 'Singham Returns Theme ',
        song_link: 'M3KqzpP6Ej0',
        album_name: 'Singham Returns'
      },
      {
        id: 1262,
        song_name: 'Sukoon Mila',
        song_link: 'rRx88tN2LYo',
        album_name: 'Mary Kom'
      },
      {
        id: 1408,
        song_name: 'Zid',
        song_link: 'vYEvvx1eEvI',
        album_name: 'Zid'
      },
      {
        id: 1294,
        song_name: 'Mauj Ki Malhare',
        song_link: 'ehqWDq0wfpA',
        album_name: 'Gulaab Gang'
      },
      {
        id: 704,
        song_name: 'Chaandaniya',
        song_link: 'hchJmTf4x0Y',
        album_name: '2 States'
      },
      {
        id: 1339,
        song_name: 'Just Look Into My Eyes',
        song_link: 'rnSdTRDMJZ0',
        album_name: 'Humshakals'
      },
      {
        id: 1371,
        song_name: 'Besharmi Ki Height (Remix By Dj Notorious)',
        song_link: 'r35q-3Y9xvM',
        album_name: 'Main Tera Hero'
      },
      {
        id: 1320,
        song_name: ' Tanki Hai Hum',
        song_link: 'cpqrYoUN9fE',
        album_name: 'Youngistaan'
      },
      {
        id: 1352,
        song_name: 'Love You Till The End (House Mix)',
        song_link: 'Us_4qtQ6EqE',
        album_name: 'Jai Ho'
      },
      {
        id: 1243,
        song_name: 'Bhagwan Hai Kahan Re Tu',
        song_link: 'G6SutyLlzws',
        album_name: 'PK'
      },
      {
        id: 653,
        song_name: 'Lovely ',
        song_link: 'HT7g_9eNnYk',
        album_name: 'Happy New Year'
      },
      {
        id: 1384,
        song_name: 'Sulgi Hui Hai Raakh',
        song_link: 'rpgjyeT0eCY',
        album_name: 'Revolver Rani'
      },
      {
        id: 1275,
        song_name: 'Palang Tod',
        song_link: '2cdwvFefE_g',
        album_name: 'Holiday'
      },
      {
        id: 1421,
        song_name: 'Hum Tumhe Kaise Bataye (Ghazal)',
        song_link: 'akaqD60G9_0',
        album_name: 'Ekkees Toppon Ki Salaami'
      },
      {
        id: 1307,
        song_name: 'Khamakhaan',
        song_link: 'kH2uh44Kndo',
        album_name: 'Bewakoofiyaan'
      },
      {
        id: 585,
        song_name: 'Sunny Sunny ',
        song_link: 'MXJCnccDLA0',
        album_name: 'Yaariyan'
      },
      {
        id: 730,
        song_name: 'Paaji Tussi Such A Pussyc',
        song_link: 'Ouf1AYsjOSA',
        album_name: 'Happy Ending'
      },
      {
        id: 698,
        song_name: 'Shake It Like Shammi',
        song_link: 'mkPZfrePAxo',
        album_name: 'Hasee Toh Phasee'
      },
      {
        id: 566,
        song_name: 'Tune Maari Entriyaan ',
        song_link: '-8SlOkUAW-4',
        album_name: 'Gunday'
      },
      {
        id: 1333,
        song_name: 'Raat Bhar',
        song_link: '1k8pZ6aX2t4',
        album_name: 'Heropanti'
      },
      {
        id: 1365,
        song_name: 'Baawra',
        song_link: 'I3LiyjvXqKU',
        album_name: 'Kill Dil'
      },
      {
        id: 1256,
        song_name: 'Horn Ok Please',
        song_link: 'bs7z8nrplNY',
        album_name: 'Dedh Ishqiya'
      },
      {
        id: 1397,
        song_name: 'AJ Theme',
        song_link: 'lvSXz0GfFV0',
        album_name: 'Action Jackson'
      },
      {
        id: 1288,
        song_name: 'Sweety',
        song_link: 'WSTwewxP3sg',
        album_name: 'Bobby Jasoos'
      },
      {
        id: 1346,
        song_name: 'Shayarana',
        song_link: 'DUZkUoB0Pfo',
        album_name: 'Daawat-e-Ishq'
      },
      {
        id: 1378,
        song_name: 'G Pe Danda',
        song_link: 'krp3Y21iBdo',
        album_name: 'Fugly'
      },
      {
        id: 1040,
        song_name: 'Naam-E-Wafa',
        song_link: 'sDL2B_GHaSI',
        album_name: 'Creature'
      },
      {
        id: 1269,
        song_name: 'Mahi Ve',
        song_link: '1tFO_TXZC_g',
        album_name: 'Finding Fanny'
      },
      {
        id: 1415,
        song_name: 'Nachle Tu',
        song_link: 'gxymueVaHTc',
        album_name: 'Dishkiyaoon'
      },
      {
        id: 1301,
        song_name: 'Citylights',
        song_link: 'DM5833K_5p8',
        album_name: 'CityLights'
      },
      {
        id: 711,
        song_name: 'Jumme Ki Raat',
        song_link: 'dv_Qjzca56k',
        album_name: 'Kick'
      },
      {
        id: 1438,
        song_name: 'Khuda Na Khasta',
        song_link: '2O-Iqz4e6Uw',
        album_name: 'One by Two'
      },
      {
        id: 1327,
        song_name: 'Ek mulaqat',
        song_link: 'Zmo8CW0w95M',
        album_name: 'Sonali Cable'
      },
      {
        id: 1359,
        song_name: 'Kill Dil title track',
        song_link: 'Rn6HPDltaWk',
        album_name: 'Kill Dil'
      },
      {
        id: 1250,
        song_name: 'Sooha Saaha',
        song_link: 'quynSbmjHqg',
        album_name: 'Highway'
      },
      {
        id: 1391,
        song_name: 'Thumka',
        song_link: 'pQoEENXAW48',
        album_name: 'Kaanchi'
      },
      {
        id: 1282,
        song_name: 'Chaar Botal Vodka',
        song_link: 'x8F5dz8kv1w',
        album_name: 'Ragini MMS 2'
      },
      {
        id: 692,
        song_name: 'Saturday Saturday',
        song_link: 'OljkSVLIt6c',
        album_name: "La mari\u00e9e d'Humpty Sharma"
      },
      {
        id: 1428,
        song_name: 'Alcoholic',
        song_link: 'UarDmusg3YQ',
        album_name: 'The Shaukeens'
      },
      {
        id: 1314,
        song_name: 'Party With The Bhoothnath',
        song_link: 'W7kdKf_aqX4',
        album_name: 'Bhoothnath Returns'
      },
      {
        id: 724,
        song_name: 'Sun Le Zara ',
        song_link: '3liDQFr4qS0',
        album_name: 'Singham Returns'
      },
      {
        id: 1263,
        song_name: 'Adhure',
        song_link: '8wareW7_fxA',
        album_name: 'Mary Kom'
      },
      {
        id: 1409,
        song_name: 'Mashooqana',
        song_link: 'ArbuCuwZlG4',
        album_name: 'Heartless'
      },
      {
        id: 1295,
        song_name: 'Kisse Lambe',
        song_link: 'qgRRu40ap3k',
        album_name: 'Kya Dilli Kya Lahore'
      },
      {
        id: 705,
        song_name: 'Iski Uski',
        song_link: 'xQMMBANbcdQ',
        album_name: '2 States'
      },
      {
        id: 1340,
        song_name: 'Barbaad Raat',
        song_link: 'MD1S8Peje1Q',
        album_name: 'Humshakals'
      },
      {
        id: 1372,
        song_name: 'Palat - Tera Hero Idhar Hai (Remix)',
        song_link: 'g9mfQtzL9Us',
        album_name: 'Main Tera Hero'
      },
      {
        id: 1321,
        song_name: 'Youngistaan Anthem',
        song_link: 'lw6d0E0sc8g',
        album_name: 'Youngistaan'
      },
      {
        id: 1353,
        song_name: 'Naacho Re',
        song_link: 'l6dr6ZPFcRk',
        album_name: 'Jai Ho'
      },
      {
        id: 1244,
        song_name: 'Dil Darbadar',
        song_link: 'Lu19nuVPx64',
        album_name: 'PK'
      },
      {
        id: 654,
        song_name: 'India Waale ',
        song_link: 'X-DDknSzELI',
        album_name: 'Happy New Year'
      },
      {
        id: 1385,
        song_name: 'Zardozi Lamhe',
        song_link: '8l1reKrTTyo',
        album_name: 'Revolver Rani'
      },
      {
        id: 1276,
        song_name: 'Abhi Toh Party Shuru Hui Hai',
        song_link: '8LZgzAZ2lpQ',
        album_name: 'Khoobsurat'
      },
      {
        id: 1422,
        song_name: 'Ekkees Toppon Ki Salaami',
        song_link: 'WQ0jGdxp344',
        album_name: 'Ekkees Toppon Ki Salaami'
      },
      {
        id: 1308,
        song_name: 'bewakoofiyaan title track',
        song_link: 'x574781jPKE',
        album_name: 'Bewakoofiyaan'
      },
      {
        id: 586,
        song_name: 'Baarish - Yaariyan ',
        song_link: 'Qvd-I7lTecI',
        album_name: 'Yaariyan'
      },
      {
        id: 731,
        song_name: 'Jaise Mera Tu ',
        song_link: 'aF108_YsXIw',
        album_name: 'Happy Ending'
      },
      {
        id: 1289,
        song_name: 'Tu (Reprise)',
        song_link: 'Ea3yYnvUjZY',
        album_name: 'Bobby Jasoos'
      },
      {
        id: 699,
        song_name: 'Punjabi Wedding Song',
        song_link: 'NuTx6Q4151s',
        album_name: 'Hasee Toh Phasee'
      },
      {
        id: 567,
        song_name: 'Jiya ',
        song_link: 'zlbWbcstXk4',
        album_name: 'Gunday'
      },
      {
        id: 1334,
        song_name: 'Tabah',
        song_link: 'kWCflvH_B0w',
        album_name: 'Heropanti'
      },
      {
        id: 1366,
        song_name: 'Nakhriley',
        song_link: 'pCi3osjZFyw',
        album_name: 'Kill Dil'
      },
      {
        id: 1257,
        song_name: 'Hamari Atariya',
        song_link: '-BOWrHtthyc',
        album_name: 'Dedh Ishqiya'
      },
      {
        id: 1398,
        song_name: 'Punjabi Mast (Remix Version)',
        song_link: 'x33vzwHKEEM',
        album_name: 'Action Jackson'
      },
      {
        id: 1347,
        song_name: 'Jaadu Tone Waaliyan',
        song_link: '_0zYFikA3mw',
        album_name: 'Daawat-e-Ishq'
      },
      {
        id: 1379,
        song_name: 'Lovely Jind Wali',
        song_link: 'gr-jgUX0ktU',
        album_name: 'Fugly'
      },
      {
        id: 1041,
        song_name: 'Ek Pal Yahi',
        song_link: '158BuIVVfUc',
        album_name: 'Creature'
      },
      {
        id: 1270,
        song_name: 'Shake Your Bootiya',
        song_link: 'v-5oqaPCv9M',
        album_name: 'Finding Fanny'
      },
      {
        id: 1416,
        song_name: 'Tutey',
        song_link: '_TGutoLrhrU',
        album_name: 'Dishkiyaoon'
      },
      {
        id: 1302,
        song_name: 'Johnny Johnny',
        song_link: '4-Joa2I7fVg',
        album_name: 'Entertainment'
      },
      {
        id: 1328,
        song_name: 'Gannu Rocks',
        song_link: 'tnZiDVxsAoo',
        album_name: 'Sonali Cable'
      },
      {
        id: 1360,
        song_name: 'Happy Budday',
        song_link: 'xs_QyY30JQ0',
        album_name: 'Kill Dil'
      },
      {
        id: 1251,
        song_name: 'Patakha Guddi (Male Version)',
        song_link: '_5fCChuvOEk',
        album_name: 'Highway'
      },
      {
        id: 1392,
        song_name: 'Hindustan Kahan Hai',
        song_link: 'jeDHbyP20Hk',
        album_name: 'Kaanchi'
      },
      {
        id: 1283,
        song_name: 'Maine Khud Ko',
        song_link: 'QRzR4ijvB1w',
        album_name: 'Ragini MMS 2'
      },
      {
        id: 693,
        song_name: 'Uff',
        song_link: 'K8KAbu45-kE',
        album_name: 'Bang Bang'
      },
      {
        id: 1429,
        song_name: 'Meherbani',
        song_link: 'kDgBQFbwX2Y',
        album_name: 'The Shaukeens'
      },
      {
        id: 1315,
        song_name: 'Sahib',
        song_link: 'z5BZ403nvD0',
        album_name: 'Bhoothnath Returns'
      },
      {
        id: 725,
        song_name: 'Khamma Ghani ',
        song_link: 'YLwZN74Fqrk',
        album_name: 'Happy Ending'
      },
      {
        id: 1373,
        song_name: 'Fugly Title Track',
        song_link: '7mONKOYjbsk',
        album_name: 'Fugly'
      },
      {
        id: 1264,
        song_name: 'Teri Baari',
        song_link: '858lvkopFOw',
        album_name: 'Mary Kom'
      },
      {
        id: 1410,
        song_name: 'Main Dhoondne Ko Zamaane Mein',
        song_link: 'xYw46RDfdMg',
        album_name: 'Heartless'
      },
      {
        id: 1296,
        song_name: 'Jo Dikhte Ho',
        song_link: '9V2SLp6ErSI',
        album_name: 'Kya Dilli Kya Lahore'
      },
      {
        id: 706,
        song_name: 'Locha-E-Ulfat',
        song_link: 'G6RR2_NQ530',
        album_name: '2 States'
      },
      {
        id: 1433,
        song_name: 'Lonely',
        song_link: '-zIQPymlbro',
        album_name: 'The Shaukeens'
      },
      {
        id: 1341,
        song_name: 'Hum Pagal Nahin Hai',
        song_link: 'hl8SFOD2AcQ',
        album_name: 'Humshakals'
      },
      {
        id: 1322,
        song_name: 'Hawaa Hawaai title track',
        song_link: 'b93_hw5A-UM',
        album_name: 'Hawaa Hawaai'
      },
      {
        id: 1354,
        song_name: 'Jai Jai Jai Jai Ho (Title Track)',
        song_link: 'hTxt3BMzfdo',
        album_name: 'Jai Ho'
      },
      {
        id: 1245,
        song_name: 'PK Dance Theme',
        song_link: 'vvM1TlkRegs',
        album_name: 'PK'
      },
      {
        id: 655,
        song_name: 'Satakli ',
        song_link: 'tsN9vouq-nk',
        album_name: 'Happy New Year'
      },
      {
        id: 1386,
        song_name: 'Kaanchi Re Kaanchi',
        song_link: 'PEmbK6Q8nP4',
        album_name: 'Kaanchi'
      },
      {
        id: 1277,
        song_name: 'Baal Khade',
        song_link: 'mNLRghYzqkM',
        album_name: 'Khoobsurat'
      },
      {
        id: 1423,
        song_name: 'Dukki Tikki',
        song_link: 'I4jL848_Fxk',
        album_name: 'Raja Natwarlal'
      },
      {
        id: 1309,
        song_name: 'Rumaani Sa',
        song_link: 'iipnZur6KMs',
        album_name: 'Bewakoofiyaan'
      },
      {
        id: 587,
        song_name: 'Allah Waariyan ',
        song_link: '1tcbl2a8Dpg',
        album_name: 'Yaariyan'
      },
      {
        id: 1290,
        song_name: 'Gulaabi (title song)',
        song_link: 'J9mhEbBW5U8',
        album_name: 'Gulaab Gang'
      },
      {
        id: 700,
        song_name: 'Humdard',
        song_link: 'FJ55SHCzt88',
        album_name: 'Ek Villain'
      },
      {
        id: 568,
        song_name: 'Jashn E Ishqa ',
        song_link: 'hglPiiRvUj0',
        album_name: 'Gunday'
      },
      {
        id: 1335,
        song_name: 'The Pappi Song',
        song_link: 'y3jVRNi-V5M',
        album_name: 'Heropanti'
      },
      {
        id: 1367,
        song_name: 'Besharmi Ki Height',
        song_link: 'IFYJNLZT_B0',
        album_name: 'Main Tera Hero'
      },
      {
        id: 1258,
        song_name: 'Jagaave Saari Raina',
        song_link: 'E-VxmcdaGPE',
        album_name: 'Dedh Ishqiya'
      },
      {
        id: 1399,
        song_name: 'Gangster Baby',
        song_link: 'HrLcr1JZ6BY',
        album_name: 'Action Jackson'
      },
      {
        id: 1348,
        song_name: 'Baaki Sab First Class Hai',
        song_link: '9N07Mb1gylg',
        album_name: 'Jai Ho'
      },
      {
        id: 1239,
        song_name: 'Tharki Chokro',
        song_link: 'nd4wsdUMorY',
        album_name: 'PK'
      },
      {
        id: 1380,
        song_name: 'Revolver Rani Title Track',
        song_link: 'cLdX66I7QLQ',
        album_name: 'Revolver Rani'
      },
      {
        id: 1042,
        song_name: 'Mehboob Ki',
        song_link: 'zQUSMQDf_3s',
        album_name: 'Creature'
      },
      {
        id: 1271,
        song_name: 'Shaayraana',
        song_link: 'Ygyl9XxYWLg',
        album_name: 'Holiday'
      },
      {
        id: 1417,
        song_name: 'Tu Mere Type Ka Nahi Hai',
        song_link: 'sEKxg2XVzvk',
        album_name: 'Dishkiyaoon'
      },
      {
        id: 1303,
        song_name: 'Tera Naam Doon',
        song_link: '32X3y2REoIc',
        album_name: 'Entertainment'
      },
      {
        id: 726,
        song_name: 'G Phaad Ke ',
        song_link: 'YHI4TjhUFMA',
        album_name: 'Happy Ending'
      },
      {
        id: 1329,
        song_name: 'Cheenti Cheenti Bang Bang',
        song_link: 'J1PorrjJqgo',
        album_name: 'Sonali Cable'
      },
      {
        id: 1361,
        song_name: 'Sajde',
        song_link: 'P4fzOSVy6-o',
        album_name: 'Kill Dil'
      },
      {
        id: 1252,
        song_name: 'Implosive Silence',
        song_link: 'ZWnnzSHEF54',
        album_name: 'Highway'
      },
      {
        id: 1393,
        song_name: 'Keeda',
        song_link: 'YYDf_E9oBsA',
        album_name: 'Action Jackson'
      },
      {
        id: 1284,
        song_name: 'Baby Doll (Remix)',
        song_link: '50X8EXq6Tlc',
        album_name: 'Ragini MMS 2'
      },
      {
        id: 694,
        song_name: 'Meherbaan',
        song_link: '_JND3HuOmDM',
        album_name: 'Bang Bang'
      },
      {
        id: 1430,
        song_name: 'Manali Trance',
        song_link: 'vZ_NpLWuL00',
        album_name: 'The Shaukeens'
      },
      {
        id: 1316,
        song_name: 'Dharavi Rap',
        song_link: '7JwMAWUst78',
        album_name: 'Bhoothnath Returns'
      },
      {
        id: 1374,
        song_name: 'Dhup Chik',
        song_link: 'P5xo7d8jjck',
        album_name: 'Fugly'
      },
      {
        id: 1265,
        song_name: 'Saudebaazi',
        song_link: 'raJoO8Syruk',
        album_name: 'Mary Kom'
      },
      {
        id: 1411,
        song_name: 'Soniye',
        song_link: 'B6T0qtasUzQ',
        album_name: 'Heartless'
      },
      {
        id: 1297,
        song_name: 'Muskurane',
        song_link: 'HQ4Ox7mLqds',
        album_name: 'CityLights'
      },
      {
        id: 707,
        song_name: 'Offo',
        song_link: 'YPlIhgAX9AQ',
        album_name: '2 States'
      },
      {
        id: 1434,
        song_name: "I'm Just Pakaoed",
        song_link: 'ddBRp3QCjqw',
        album_name: 'One by Two'
      },
      {
        id: 1342,
        song_name: 'Khol De Dil Ki Khidki',
        song_link: 'wNGifDM-3hU',
        album_name: 'Humshakals'
      },
      {
        id: 1323,
        song_name: 'Ghoom Gayi',
        song_link: 'zFdpCeEyLEE',
        album_name: 'Hawaa Hawaai'
      },
      {
        id: 1355,
        song_name: 'Photocopy (Clubmix)',
        song_link: 'ob_SSKHVsUA',
        album_name: 'Jai Ho'
      },
      {
        id: 1246,
        song_name: 'Patakha Guddi (Female Version)',
        song_link: 'KrtClCvD1K4',
        album_name: 'Highway'
      },
      {
        id: 656,
        song_name: 'Nonsense Ki Night ',
        song_link: 'llZasorsis8',
        album_name: 'Happy New Year'
      },
      {
        id: 1387,
        song_name: 'Tu Sab Kuch Re',
        song_link: 'EuHk5rZbueg',
        album_name: 'Kaanchi'
      },
      {
        id: 1278,
        song_name: 'Preet',
        song_link: 'BJXl0kO0YC0',
        album_name: 'Khoobsurat'
      },
      {
        id: 1424,
        song_name: 'Tere Hoke Rehengay',
        song_link: '31hFKQ0K-jU',
        album_name: 'Raja Natwarlal'
      },
      {
        id: 1310,
        song_name: 'Aye Jigida',
        song_link: 'e46frqKYUj0',
        album_name: 'Bewakoofiyaan'
      },
      {
        id: 1291,
        song_name: 'Dheemi Dheemi Si',
        song_link: '8YCYP8kOIlo',
        album_name: 'Gulaab Gang'
      },
      {
        id: 701,
        song_name: 'Zaroorat',
        song_link: 'VMEXKJbsUmE',
        album_name: 'Ek Villain'
      },
      {
        id: 569,
        song_name: 'Tune Mari Entriya ',
        song_link: '2I3NgxDAiqE',
        album_name: 'Gunday'
      },
      {
        id: 1735,
        song_name: 'Operation Bulbul',
        song_link: '73kIBWN6rU',
        album_name: 'Haider'
      },
      {
        id: 1336,
        song_name: 'Tere Binaa',
        song_link: 'ujedSCzYXYs',
        album_name: 'Heropanti'
      },
      {
        id: 1368,
        song_name: 'Palat - Tera Hero Idhar Hai',
        song_link: '9vkcYxbGdTE',
        album_name: 'Main Tera Hero'
      },
      {
        id: 1259,
        song_name: 'Kya Hoga',
        song_link: 'zHwUUgMw7u4',
        album_name: 'Dedh Ishqiya'
      },
      {
        id: 1405,
        song_name: 'Saanson Ko',
        song_link: 'GbvE52piC14',
        album_name: 'Zid'
      },
      {
        id: 1606,
        song_name: 'Solah Baras Ki',
        song_link: 'PUStPtsqZAA',
        album_name: 'Sixteen'
      },
      {
        id: 1540,
        song_name: 'Jai Govinda Jai Gopala',
        song_link: '055zsjwJ3Vs',
        album_name: 'Bullett Raja'
      },
      {
        id: 650,
        song_name: 'Lungi Dance ',
        song_link: '69CEiHfS_mc',
        album_name: 'Chennai Express'
      },
      {
        id: 2194,
        song_name: 'Roshni',
        song_link: 'mDV09ShEt2o',
        album_name: 'Ankur Arora Murder Case'
      },
      {
        id: 1441,
        song_name: 'Shikayatein',
        song_link: 'eN5dP3BZALQ',
        album_name: 'Lootera'
      },
      {
        id: 1473,
        song_name: 'Go Pagal',
        song_link: 'iFARFbekNl8',
        album_name: 'Jolly LLB'
      },
      {
        id: 1569,
        song_name: 'Tose Naina',
        song_link: 'nDMwW41AlSI',
        album_name: 'Mickey Virus'
      },
      {
        id: 1505,
        song_name: 'Media Se',
        song_link: 'GwammA7vAkE',
        album_name: 'Saheb Biwi Aur Gangster Returns'
      },
      {
        id: 1454,
        song_name: 'Piya Milenge',
        song_link: 'HXVO-SyVfng',
        album_name: 'Raanjhanaa'
      },
      {
        id: 1486,
        song_name: 'Tattad Tattad',
        song_link: 'sIooFGRBZJY',
        album_name: 'Ram-Leela'
      },
      {
        id: 1582,
        song_name: 'Rabba Main Kya Karoon Title Song',
        song_link: 'TfS5ioMcMSY',
        album_name: 'Rabba Main Kya Karoon'
      },
      {
        id: 1518,
        song_name: 'Allah Meherbaan',
        song_link: '5wpsj26ad94',
        album_name: 'Ghanchakkar'
      },
      {
        id: 1619,
        song_name: 'Saajna',
        song_link: '1ybUPCdkYvI',
        album_name: 'I, Me aur Main'
      },
      {
        id: 631,
        song_name: 'Dhoom Tap ',
        song_link: 'gel8aSLHoWY',
        album_name: 'Dhoom 3'
      },
      {
        id: 672,
        song_name: 'Krrish Krrish Title',
        song_link: '2fC6P-9wfQQ',
        album_name: 'Krrish 3'
      },
      {
        id: 2188,
        song_name: 'Mera Yaar',
        song_link: 'ycS5PagXvhQ',
        album_name: 'Bhaag Milkha Bhaag'
      },
      {
        id: 538,
        song_name: 'Balam Pichkari ',
        song_link: '0WtRNGubWGA',
        album_name: 'Yeh Jawaani Hai Deewani'
      },
      {
        id: 1467,
        song_name: 'Chanchal Mann Ati Random',
        song_link: 'CdWe8J-m_Ug',
        album_name: 'Shuddh Desi Romance'
      },
      {
        id: 1555,
        song_name: 'Tu Hi Tu',
        song_link: 'vBCcpZLG4Ew',
        album_name: 'Nautanki Saala!'
      },
      {
        id: 1499,
        song_name: 'Oye Boy Charlie',
        song_link: 'jXlNjZnnCgc',
        album_name: 'Matru ki Bijlee ka Mandola'
      },
      {
        id: 1595,
        song_name: 'Kaddu Katega',
        song_link: 'InQtgnMtPIY',
        album_name: 'R... Rajkumar'
      },
      {
        id: 1534,
        song_name: 'Tayyab Ali',
        song_link: '0ERAFwcBbxo',
        album_name: 'Once Upon a Time in Mumbai Dobaara!'
      },
      {
        id: 1480,
        song_name: 'Poore Chand',
        song_link: 'sbxSqFBvAb8',
        album_name: 'Ram-Leela'
      },
      {
        id: 1576,
        song_name: 'Darmiyan',
        song_link: 'yrfhfCnj8I4',
        album_name: 'Inkaar'
      },
      {
        id: 1512,
        song_name: 'Be Intehaan',
        song_link: '72kpFGVJyH8',
        album_name: 'Race 2'
      },
      {
        id: 1613,
        song_name: 'Hip Hop Pammi',
        song_link: 'Zv4rb8sNICA',
        album_name: 'Ramaiya Vastavaiya'
      },
      {
        id: 1448,
        song_name: 'Kaun Mera',
        song_link: 'AKMzH_qXN5M',
        album_name: 'Special 26'
      },
      {
        id: 1461,
        song_name: 'Alvida',
        song_link: 'UFqozHVmiDc',
        album_name: 'D-Day'
      },
      {
        id: 1549,
        song_name: 'Ishq Mohallah',
        song_link: '94BADWNhR3E',
        album_name: 'Chashme Baddoor'
      },
      {
        id: 602,
        song_name: 'Sapna Re Sapna ',
        song_link: 'w_yMJ84K-is',
        album_name: 'Ek Thi Daayan'
      },
      {
        id: 1493,
        song_name: 'Satyagraha Title Song',
        song_link: '1Q4nLbEDiiY',
        album_name: 'Satyagraha'
      },
      {
        id: 1589,
        song_name: 'Dhating Naach',
        song_link: 'NBw5Gdmb1Pg',
        album_name: 'Phata Poster Nikhla Hero'
      },
      {
        id: 1525,
        song_name: 'Mere Dad Ki Maruti Title song',
        song_link: '8O6GsAg1ABI',
        album_name: 'Mere Dad Ki Maruti'
      },
      {
        id: 1031,
        song_name: 'Aasi Mar Jange (Hum Mar Jaayenge)',
        song_link: 'krJsyb_yf7A',
        album_name: 'Aashiqui 2'
      },
      {
        id: 1607,
        song_name: 'Chad Gayi',
        song_link: '2y-Dp61K95w',
        album_name: 'Sixteen'
      },
      {
        id: 1541,
        song_name: "Don't Touch My Body",
        song_link: 'KL_pp0UV9hY',
        album_name: 'Bullett Raja'
      },
      {
        id: 651,
        song_name: 'Kashmir Main Tu Kanyakumari ',
        song_link: 'v0exwjcYU5U',
        album_name: 'Chennai Express'
      },
      {
        id: 1442,
        song_name: 'Monta Re',
        song_link: 'vge5JTkRGLQ',
        album_name: 'Lootera'
      },
      {
        id: 1474,
        song_name: 'Bawara Mann',
        song_link: 'xuMFlMMz--4',
        album_name: 'Jolly LLB'
      },
      {
        id: 1570,
        song_name: 'Sajna Ve Sajna Ve',
        song_link: '4mnKZysvULc',
        album_name: 'Mickey Virus'
      },
      {
        id: 1506,
        song_name: 'Slowly Slowly',
        song_link: 'CzcePPh7wPU',
        album_name: 'Go Goa Gone'
      },
      {
        id: 1455,
        song_name: 'Ay Sakhi',
        song_link: 'rEKEeNk5nB4',
        album_name: 'Raanjhanaa'
      },
      {
        id: 1487,
        song_name: 'Ambarsariya',
        song_link: '9UDkYz64ehA',
        album_name: 'Fukrey'
      },
      {
        id: 1583,
        song_name: 'Dua',
        song_link: 'eMoi5amFMKU',
        album_name: 'Rabba Main Kya Karoon'
      },
      {
        id: 1519,
        song_name: 'Jholu Ram',
        song_link: 'Nj_gb4tHD2o',
        album_name: 'Ghanchakkar'
      },
      {
        id: 1620,
        song_name: 'Capuchino',
        song_link: 'aMsKDih5r_4',
        album_name: 'I, Me aur Main'
      },
      {
        id: 632,
        song_name: 'Kamli ',
        song_link: 'mVRP9KUQk28',
        album_name: 'Dhoom 3'
      },
      {
        id: 645,
        song_name: 'Apna Bombay Talkies ',
        song_link: 'VByWs3tTyGk',
        album_name: 'Bombay Talkies'
      },
      {
        id: 2189,
        song_name: 'Maston Ka Jhund',
        song_link: 'yWeVII7qF3A',
        album_name: 'Bhaag Milkha Bhaag'
      },
      {
        id: 539,
        song_name: 'Subhanallah ',
        song_link: 'QYO6AlxiRE4',
        album_name: 'Yeh Jawaani Hai Deewani'
      },
      {
        id: 1468,
        song_name: 'Shuddh Desi Romance Title song',
        song_link: 'varo0G9I-gk',
        album_name: 'Shuddh Desi Romance'
      },
      {
        id: 1556,
        song_name: 'Draamebaaz',
        song_link: 'aoFAPojtynA',
        album_name: 'Nautanki Saala!'
      },
      {
        id: 1500,
        song_name: 'Lootnewale',
        song_link: 'KBQKHrdrtbY',
        album_name: 'Matru ki Bijlee ka Mandola'
      },
      {
        id: 1596,
        song_name: 'Naino Mein Sapna',
        song_link: '-UKivKSxo0A',
        album_name: 'Himmatwala'
      },
      {
        id: 1535,
        song_name: 'Tu Hi Khwahish',
        song_link: 'CB1XRxtn1TU',
        album_name: 'Once Upon a Time in Mumbai Dobaara!'
      },
      {
        id: 1481,
        song_name: 'Nagada Sang Dhol',
        song_link: 'vK5E_aeBGYA',
        album_name: 'Ram-Leela'
      },
      {
        id: 1577,
        song_name: 'Maula Tu Malik Hai',
        song_link: 'w5v6QioQu4g',
        album_name: 'Inkaar'
      },
      {
        id: 762,
        song_name: 'Aye Manya ',
        song_link: 'gYgKzJGQLaM',
        album_name: 'Shootout at Wadala'
      },
      {
        id: 1513,
        song_name: 'Lat Lag Gayee',
        song_link: 'KxCjVIFxZNo',
        album_name: 'Race 2'
      },
      {
        id: 1614,
        song_name: 'Bairiyaa',
        song_link: 'vfndCiKYO40',
        album_name: 'Ramaiya Vastavaiya'
      },
      {
        id: 1449,
        song_name: 'Manja',
        song_link: 'VDqgUT_QqzU',
        album_name: 'Kai po che!'
      },
      {
        id: 1032,
        song_name: 'Sokha Nai Yetho (Aasan Nahin Yahan)',
        song_link: 'sSiq6JUL4K0',
        album_name: 'Aashiqui 2'
      },
      {
        id: 1462,
        song_name: 'Murshid Khele Holi',
        song_link: 'Gofs_CXC8R8',
        album_name: 'D-Day'
      },
      {
        id: 1550,
        song_name: 'Andha Ghoda Race Mein Dauda',
        song_link: '_DwUIk5gSVk',
        album_name: 'Chashme Baddoor'
      },
      {
        id: 603,
        song_name: 'Lautungi Main ',
        song_link: '7vJS4twx02U',
        album_name: 'Ek Thi Daayan'
      },
      {
        id: 1494,
        song_name: 'Aiyo Ji',
        song_link: 'ad15mFfnID4',
        album_name: 'Satyagraha'
      },
      {
        id: 1590,
        song_name: 'Janam Janam',
        song_link: '54HSbGLy0WI',
        album_name: 'Phata Poster Nikhla Hero'
      },
      {
        id: 2621,
        song_name: 'Banno Re Aese Kyun Sharmaye',
        song_link: 'EmByD9IVdQ4',
        album_name: 'Mere Dad Ki Maruti'
      },
      {
        id: 1507,
        song_name: 'Khoon Choos Le',
        song_link: 'FObSokq76CQ',
        album_name: 'Go Goa Gone'
      },
      {
        id: 1608,
        song_name: 'Love Love Love',
        song_link: 'a7gmmANZ5z4',
        album_name: 'Sixteen'
      },
      {
        id: 1542,
        song_name: 'Bullett Raja Title song',
        song_link: 'N8jFXyGRONs',
        album_name: 'Bullett Raja'
      },
      {
        id: 716,
        song_name: 'Moto Ghotali ',
        song_link: 'VMoxSJfCOi0',
        album_name: 'Gori Tere Pyaar Mein!'
      },
      {
        id: 1443,
        song_name: 'Zinda',
        song_link: 'cgHLvt0rxmM',
        album_name: 'Lootera'
      },
      {
        id: 1475,
        song_name: 'Jolly Good Fellow',
        song_link: 'iz3nhmKcg8c',
        album_name: 'Jolly LLB'
      },
      {
        id: 1571,
        song_name: 'Ye Hai Zila Ghaziabad',
        song_link: '6vnXNXnttes',
        album_name: 'Zila Ghaziabad'
      },
      {
        id: 1456,
        song_name: 'Nazar Laaye',
        song_link: 'l92IWAxi0Cs',
        album_name: 'Raanjhanaa'
      },
      {
        id: 1488,
        song_name: 'Rabba',
        song_link: 'zYbIGbLI1UU',
        album_name: 'Fukrey'
      },
      {
        id: 1584,
        song_name: 'Bari Barsi',
        song_link: 'LSrf-3FwP6w',
        album_name: 'Rabba Main Kya Karoon'
      },
      {
        id: 1520,
        song_name: 'Punjabiyan Di Battery',
        song_link: 'XL9OxEGhWWA',
        album_name: 'Mere Dad Ki Maruti'
      },
      {
        id: 1621,
        song_name: 'Darbadar',
        song_link: 'V9Aw5bY1Kb4',
        album_name: 'I, Me aur Main'
      },
      {
        id: 633,
        song_name: 'Malang ',
        song_link: 'SxoTAvwCr4A',
        album_name: 'Dhoom 3'
      },
      {
        id: 646,
        song_name: 'Bombay Talkies ',
        song_link: 'VByWs3tTyGk',
        album_name: 'Bombay Talkies'
      },
      {
        id: 2190,
        song_name: 'Bhaag Milkha Bhaag',
        song_link: 'NFgvJvxkED8',
        album_name: 'Bhaag Milkha Bhaag'
      },
      {
        id: 540,
        song_name: 'Dilli Wali Girlfriend ',
        song_link: '1cDoRqPnCXU',
        album_name: 'Yeh Jawaani Hai Deewani'
      },
      {
        id: 1469,
        song_name: 'Maula Sun Le Re',
        song_link: 'Ur2vQfw9dNc',
        album_name: 'Madras Cafe'
      },
      {
        id: 1557,
        song_name: 'Sapna Mera Toota',
        song_link: 'EiI-OQob6bc',
        album_name: 'Nautanki Saala!'
      },
      {
        id: 1501,
        song_name: 'Chaar Dina Ki',
        song_link: 'ZdCYDDzl3ac',
        album_name: 'Matru ki Bijlee ka Mandola'
      },
      {
        id: 1597,
        song_name: 'Taki Taki',
        song_link: 'Or8ZVXB0AXo',
        album_name: 'Himmatwala'
      },
      {
        id: 1536,
        song_name: 'Chugliyaan',
        song_link: '-vWBml1h8M4',
        album_name: 'Once Upon a Time in Mumbai Dobaara!'
      },
      {
        id: 1482,
        song_name: 'Laal Ishq',
        song_link: 'bD1gepaUZms',
        album_name: 'Ram-Leela'
      },
      {
        id: 1578,
        song_name: 'Inkaar Theme',
        song_link: 't-WRDJpsucU',
        album_name: 'Inkaar'
      },
      {
        id: 763,
        song_name: 'Ala Re Ala ',
        song_link: 'tKBa64-w4XA',
        album_name: 'Shootout at Wadala'
      },
      {
        id: 1514,
        song_name: 'Allah Duhai Hai',
        song_link: 'wsl7lKB_STM',
        album_name: 'Race 2'
      },
      {
        id: 1615,
        song_name: 'Peecha Chhute',
        song_link: 'ZIc4JdsQ2Co',
        album_name: 'Ramaiya Vastavaiya'
      },
      {
        id: 1450,
        song_name: 'Shubhaarambh',
        song_link: 'J7zjLEaZa60',
        album_name: 'Kai po che!'
      },
      {
        id: 534,
        song_name: 'Ilahi ',
        song_link: 'fdubeMFwuGs',
        album_name: 'Yeh Jawaani Hai Deewani'
      },
      {
        id: 1463,
        song_name: 'Ek Ghadi',
        song_link: 'pFTF5C1aVtI',
        album_name: 'D-Day'
      },
      {
        id: 1551,
        song_name: 'Dhichkyaaon Doom Doom 2',
        song_link: 'Eye7tFVxLBw',
        album_name: 'Chashme Baddoor'
      },
      {
        id: 604,
        song_name: 'Yaaram ',
        song_link: 'mbGNF4QXaEE',
        album_name: 'Ek Thi Daayan'
      },
      {
        id: 1495,
        song_name: 'Raske Bhare Tore Naina',
        song_link: 'mx3ArxqKwJk',
        album_name: 'Satyagraha'
      },
      {
        id: 1591,
        song_name: 'Gandi Baat',
        song_link: 'vvLBXO94EfA',
        album_name: 'R... Rajkumar'
      },
      {
        id: 1526,
        song_name: 'Barbaadiyaan',
        song_link: '7ju3WI0mqOQ',
        album_name: 'Aurangzeb'
      },
      {
        id: 1508,
        song_name: 'Babaji Ki Booti',
        song_link: 'Ah_xyj4qIvU',
        album_name: 'Go Goa Gone'
      },
      {
        id: 1609,
        song_name: 'Ishq Ki Ada',
        song_link: 'PfSihax5Pk8',
        album_name: 'Sixteen'
      },
      {
        id: 1543,
        song_name: 'O Sajna',
        song_link: '2Fa8-rhlm2A',
        album_name: 'Table No. 21'
      },
      {
        id: 717,
        song_name: 'Chingam Chabake ',
        song_link: 'CTGLJbhPRNs',
        album_name: 'Gori Tere Pyaar Mein!'
      },
      {
        id: 1444,
        song_name: 'Manmarziyan',
        song_link: 'RFNmDyBKqk8',
        album_name: 'Lootera'
      },
      {
        id: 1476,
        song_name: 'O Re Rangreza (Qawaali)',
        song_link: 'YLJlyXPcc3I',
        album_name: 'Jolly LLB'
      },
      {
        id: 1572,
        song_name: 'Ranjha Jogi',
        song_link: 'CxzcMeQqlts',
        album_name: 'Zila Ghaziabad'
      },
      {
        id: 1457,
        song_name: 'Tu Mun Shudi',
        song_link: '0Leqs-ufnx8',
        album_name: 'Raanjhanaa'
      },
      {
        id: 1489,
        song_name: 'Fuk Fuk Fukrey',
        song_link: 'VALU1FgacQQ',
        album_name: 'Fukrey'
      },
      {
        id: 1585,
        song_name: 'Tu Mere Agal Bagal Hai',
        song_link: 'EO4MDG8VnO0',
        album_name: 'Phata Poster Nikhla Hero'
      },
      {
        id: 1521,
        song_name: 'Main Senti Hoon',
        song_link: 'ppI9xEqauE0',
        album_name: 'Mere Dad Ki Maruti'
      },
      {
        id: 1622,
        song_name: 'Meri Jaaniye',
        song_link: '1ItY175JhJc',
        album_name: 'I, Me aur Main'
      },
      {
        id: 647,
        song_name: 'Bachchan ',
        song_link: 'wNjIpo6wafs',
        album_name: 'Bombay Talkies'
      },
      {
        id: 2191,
        song_name: ' Dabba',
        song_link: 'B7uakEomIV8',
        album_name: 'The Lunchbox'
      },
      {
        id: 1942,
        song_name: 'Dil Dar-Ba-Dar',
        song_link: 'HEVj8Png91o',
        album_name: 'Yeh Jawaani Hai Deewani'
      },
      {
        id: 1470,
        song_name: 'Jaise Milein Ajnabi',
        song_link: 'efeX-YZcRiw',
        album_name: 'Madras Cafe'
      },
      {
        id: 1558,
        song_name: 'Dil Ki Toh Lag Gayi',
        song_link: 'KhnC1y25bjQ',
        album_name: 'Nautanki Saala!'
      },
      {
        id: 1502,
        song_name: 'Chor Police',
        song_link: '93EdxeuNAM8',
        album_name: 'Matru ki Bijlee ka Mandola'
      },
      {
        id: 1598,
        song_name: 'Dhoka Dhoka',
        song_link: '4l6zgp1w6ow',
        album_name: 'Himmatwala'
      },
      {
        id: 1537,
        song_name: 'Bismillah',
        song_link: 'n6iyy3oNazQ',
        album_name: 'Once Upon a Time in Mumbai Dobaara!'
      },
      {
        id: 1451,
        song_name: 'Meethi Boliyaan',
        song_link: 'yTkuErFgRS8',
        album_name: 'Kai po che!'
      },
      {
        id: 1483,
        song_name: 'Ishqyaun Dhishqyaun',
        song_link: '_frF4Cm-7SQ',
        album_name: 'Ram-Leela'
      },
      {
        id: 1579,
        song_name: 'Kuch Bhi Ho Sakta Hai',
        song_link: '0WPXhOpP4J0',
        album_name: 'Inkaar'
      },
      {
        id: 764,
        song_name: 'Laila ',
        song_link: 'eO5du5L02TQ',
        album_name: 'Shootout at Wadala'
      },
      {
        id: 1515,
        song_name: 'Be Intehaan (Unplugged)',
        song_link: '_nnGaSu_u-c',
        album_name: 'Race 2'
      },
      {
        id: 1616,
        song_name: 'Rang Jo Lagyo',
        song_link: 'zRaoAWEY9Jo',
        album_name: 'Ramaiya Vastavaiya'
      },
      {
        id: 535,
        song_name: 'Kabira ',
        song_link: 'jHNNMj5bNQw',
        album_name: 'Yeh Jawaani Hai Deewani'
      },
      {
        id: 1464,
        song_name: 'Dhuaan',
        song_link: '4NFlL12hxhg',
        album_name: 'D-Day'
      },
      {
        id: 1552,
        song_name: 'Mera Mann Kehne Laga',
        song_link: 'cSZrQDf8mj8',
        album_name: 'Nautanki Saala!'
      },
      {
        id: 605,
        song_name: 'Kaali Kaali ',
        song_link: '1CZlW-jIv5o',
        album_name: 'Ek Thi Daayan'
      },
      {
        id: 1496,
        song_name: 'Janta Rocks',
        song_link: 'Kx27cbLcayA',
        album_name: 'Satyagraha'
      },
      {
        id: 1592,
        song_name: 'Saree Ke Fall Sa',
        song_link: 'EkxOXF9J77w',
        album_name: 'R... Rajkumar'
      },
      {
        id: 1527,
        song_name: 'Jigra Fakira',
        song_link: 'h4-tSWZHpNQ',
        album_name: 'Aurangzeb'
      },
      {
        id: 1573,
        song_name: 'Baap Ka Maal',
        song_link: 'iQKmQ7X168A',
        album_name: 'Zila Ghaziabad'
      },
      {
        id: 1509,
        song_name: 'Khushamdeed',
        song_link: 'DrjMgzVoCB8',
        album_name: 'Go Goa Gone'
      },
      {
        id: 1610,
        song_name: 'Bas Tu Hi Hai',
        song_link: 'o9hKvLLtlDE',
        album_name: 'Sixteen'
      },
      {
        id: 1544,
        song_name: 'Mann Mera',
        song_link: 'SlHnlxDt2TQ',
        album_name: 'Table No. 21'
      },
      {
        id: 718,
        song_name: 'Tooh',
        song_link: '91kbNw9DZBg',
        album_name: 'Gori Tere Pyaar Mein!'
      },
      {
        id: 1445,
        song_name: 'Gore Mukhde Pe Zulfa Di Chaava',
        song_link: '_SaEl4cKaAo',
        album_name: 'Special 26'
      },
      {
        id: 1477,
        song_name: 'Ram Chahe Leela',
        song_link: 'BDSsW194IJU',
        album_name: 'Ram-Leela'
      },
      {
        id: 1458,
        song_name: 'Aise Na Dekho',
        song_link: 'WB3E_2XIoa4',
        album_name: 'Raanjhanaa'
      },
      {
        id: 1490,
        song_name: 'Beda Paar',
        song_link: 'G-4xANAnVgU',
        album_name: 'Fukrey'
      },
      {
        id: 1586,
        song_name: 'Main Rang Sharbaton Ka',
        song_link: 'GnzZyGQi2ps',
        album_name: 'Phata Poster Nikhla Hero'
      },
      {
        id: 1522,
        song_name: 'Haaay',
        song_link: 'oyF0bkCaYNw',
        album_name: 'Mere Dad Ki Maruti'
      },
      {
        id: 1028,
        song_name: 'Tum Hi Ho',
        song_link: 'IJq0yyWug1k',
        album_name: 'Aashiqui 2'
      },
      {
        id: 1538,
        song_name: 'Tamanche Pe Disco',
        song_link: 'ju12RhZFGRo',
        album_name: 'Bullett Raja'
      },
      {
        id: 648,
        song_name: 'Tera Rasta Chodoon Na ',
        song_link: 'KOdPt6MkpiY',
        album_name: 'Chennai Express'
      },
      {
        id: 2192,
        song_name: 'Aaja Ab Jee Le Zara',
        song_link: 'IeQvDNQSW1g',
        album_name: 'Ankur Arora Murder Case'
      },
      {
        id: 1439,
        song_name: 'Sawaar Loon',
        song_link: '24twxrXRiII',
        album_name: 'Lootera'
      },
      {
        id: 1471,
        song_name: 'Sun Le Re (Reprise)',
        song_link: 'cVQmLKVvd0M',
        album_name: 'Madras Cafe'
      },
      {
        id: 1559,
        song_name: 'So Gaya Yeh Jahan',
        song_link: 'lPrbOV2C2BI',
        album_name: 'Nautanki Saala!'
      },
      {
        id: 1503,
        song_name: 'Idhar Gire',
        song_link: 'iih2IMC1nI0',
        album_name: 'Saheb Biwi Aur Gangster Returns'
      },
      {
        id: 1599,
        song_name: 'Bum Pe Laat',
        song_link: 'SHAKW-lgBfs',
        album_name: 'Himmatwala'
      },
      {
        id: 1452,
        song_name: 'Raanjhanaa',
        song_link: 'vqnrwNzDdOI',
        album_name: 'Raanjhanaa'
      },
      {
        id: 1484,
        song_name: 'Mor Bani Thanghat Kare',
        song_link: 'MF0CTJ46vTY',
        album_name: 'Ram-Leela'
      },
      {
        id: 1580,
        song_name: 'Khulla Saand',
        song_link: '1YJiV1tcWtg',
        album_name: 'Rabba Main Kya Karoon'
      },
      {
        id: 765,
        song_name: 'Babli Badmas ',
        song_link: '_jFIHVKeVec',
        album_name: 'Shootout at Wadala'
      },
      {
        id: 1516,
        song_name: 'Ghanchakkar Babu',
        song_link: '5_BSCbAExZ8',
        album_name: 'Ghanchakkar'
      },
      {
        id: 1617,
        song_name: 'Jadoo Ki Jhappi',
        song_link: 'wb6I65vk1cE',
        album_name: 'Ramaiya Vastavaiya'
      },
      {
        id: 629,
        song_name: 'u Hi Junoon ',
        song_link: '3WAuIGzFjEI',
        album_name: 'Dhoom 3'
      },
      {
        id: 670,
        song_name: 'God Allah Aur Bhagwan',
        song_link: 'cxX_pFYiAGY',
        album_name: 'Krrish 3'
      },
      {
        id: 2186,
        song_name: 'Gurbani',
        song_link: '6xMKn_Hy4II',
        album_name: 'Bhaag Milkha Bhaag'
      },
      {
        id: 536,
        song_name: 'Badtameez Dil ',
        song_link: 'II2EO3Nw4m0',
        album_name: 'Yeh Jawaani Hai Deewani'
      },
      {
        id: 1465,
        song_name: 'Tere Mere Beech Mein',
        song_link: '3t0dsPbruok',
        album_name: 'Shuddh Desi Romance'
      },
      {
        id: 1553,
        song_name: 'Saadi Galli Aaja',
        song_link: 'eaOBeo-5PGo',
        album_name: 'Nautanki Saala!'
      },
      {
        id: 606,
        song_name: 'Totey Udh Gaye ',
        song_link: 'BiAPF6y4MU0',
        album_name: 'Ek Thi Daayan'
      },
      {
        id: 1497,
        song_name: 'Matru Ki Bijlee Ka Mandola',
        song_link: 'oFmoDDfXEUQ',
        album_name: 'Matru ki Bijlee ka Mandola'
      },
      {
        id: 1593,
        song_name: 'Dhokha Dhadi',
        song_link: 'hrcICKdEkYQ',
        album_name: 'R... Rajkumar'
      },
      {
        id: 1528,
        song_name: 'Barbaadi',
        song_link: 'n3NHPVGB0bQ',
        album_name: 'Aurangzeb'
      },
      {
        id: 1574,
        song_name: 'Tu Hai Rab Mera',
        song_link: 'kbfBCDYe6FI',
        album_name: 'Zila Ghaziabad'
      },
      {
        id: 1510,
        song_name: 'I Keel Ded Peepul (Boris Mix)',
        song_link: 'MP-k8Q0XbUs',
        album_name: 'Go Goa Gone'
      },
      {
        id: 1611,
        song_name: 'Jhagde',
        song_link: 'OHZ1uftFkpE',
        album_name: 'Sixteen'
      },
      {
        id: 1545,
        song_name: 'If You Lie You Die',
        song_link: '3eKPdNi4xWQ',
        album_name: 'Table No. 21'
      },
      {
        id: 719,
        song_name: 'Naina ',
        song_link: 'A2t3uq4G6ec',
        album_name: 'Gori Tere Pyaar Mein!'
      },
      {
        id: 1446,
        song_name: 'Mujh Mein Tu - I',
        song_link: 'eJfGY7q0dGU',
        album_name: 'Special 26'
      },
      {
        id: 1478,
        song_name: 'Lahu Munh Lag Gaya',
        song_link: 'szVW_w-W8cQ',
        album_name: 'Ram-Leela'
      },
      {
        id: 1459,
        song_name: 'Tum Tak',
        song_link: 'k09uvR5eUao',
        album_name: 'Raanjhanaa'
      },
      {
        id: 1547,
        song_name: 'Dhichkyaaon Doom Doom 1',
        song_link: 'dXIo8ZMnCSI',
        album_name: 'Chashme Baddoor'
      },
      {
        id: 1491,
        song_name: 'Karle Jugaad Karle',
        song_link: 'MWxb5oAEzRA',
        album_name: 'Fukrey'
      },
      {
        id: 1587,
        song_name: 'Hey Mr. DJ',
        song_link: 'fhwfwZhYfJs',
        album_name: 'Phata Poster Nikhla Hero'
      },
      {
        id: 1523,
        song_name: 'Hip Hip Hurrah',
        song_link: 'xUA-Gb0pk2E',
        album_name: 'Mere Dad Ki Maruti'
      },
      {
        id: 1029,
        song_name: 'Sunn Raha Hai',
        song_link: 'cDJAi8RFDh4',
        album_name: 'Aashiqui 2'
      },
      {
        id: 1539,
        song_name: 'Saamne Hai Savera',
        song_link: 'zC-7F-oMOas',
        album_name: 'Bullett Raja'
      },
      {
        id: 649,
        song_name: 'Titli ',
        song_link: 'V8zXLMIjlcw',
        album_name: 'Chennai Express'
      },
      {
        id: 2193,
        song_name: 'Tera Aks Hai',
        song_link: '9qxJso-7HEA',
        album_name: 'Ankur Arora Murder Case'
      },
      {
        id: 1440,
        song_name: 'Ankahee',
        song_link: 'fF1gioN6SwU',
        album_name: 'Lootera'
      },
      {
        id: 1472,
        song_name: 'Madras Cafe Theme',
        song_link: 'T1MOjRyjuoI',
        album_name: 'Madras Cafe'
      },
      {
        id: 1568,
        song_name: 'Pyaar China Ka Maal Hai',
        song_link: 'dGcbQiu3mzk',
        album_name: 'Mickey Virus'
      },
      {
        id: 1504,
        song_name: 'Jugni',
        song_link: 'IiTfHLs_5gU',
        album_name: 'Saheb Biwi Aur Gangster Returns'
      },
      {
        id: 1600,
        song_name: 'Thanks God Its Friday',
        song_link: 'gPyjRgySyVg',
        album_name: 'Himmatwala'
      },
      {
        id: 1453,
        song_name: 'Banarasiya',
        song_link: 'hqaOn_Vugeo',
        album_name: 'Raanjhanaa'
      },
      {
        id: 1485,
        song_name: 'Dhoop',
        song_link: 'qWUQsQf9-60',
        album_name: 'Ram-Leela'
      },
      {
        id: 1581,
        song_name: 'Muh Meetha Kara De',
        song_link: 'J46cMek7zOo',
        album_name: 'Rabba Main Kya Karoon'
      },
      {
        id: 1517,
        song_name: 'Lazy Lad',
        song_link: 'bRm3_MO4LVQ',
        album_name: 'Ghanchakkar'
      },
      {
        id: 1618,
        song_name: 'Hello Jaane Jana',
        song_link: 'dCXBfKs3UI8',
        album_name: 'I, Me aur Main'
      },
      {
        id: 630,
        song_name: 'Dhoom Machale Dhoom ',
        song_link: 'GUBa1wRxQko',
        album_name: 'Dhoom 3'
      },
      {
        id: 671,
        song_name: 'Raghupati Raghav',
        song_link: 'UVWB9UHpXzY',
        album_name: 'Krrish 3'
      },
      {
        id: 2187,
        song_name: 'Zinda',
        song_link: 'Ax0G_P2dSBw',
        album_name: 'Bhaag Milkha Bhaag'
      },
      {
        id: 537,
        song_name: 'Ghagra ',
        song_link: 'caoGNx1LF2Q',
        album_name: 'Yeh Jawaani Hai Deewani'
      },
      {
        id: 1466,
        song_name: 'Gulabi',
        song_link: 'A9OvRvEcRNY',
        album_name: 'Shuddh Desi Romance'
      },
      {
        id: 1554,
        song_name: 'Dhak Dhak',
        song_link: 'fa2PVUDfegA',
        album_name: 'Nautanki Saala!'
      },
      {
        id: 1498,
        song_name: 'Khamakha',
        song_link: 'ZGgwYFRbohI',
        album_name: 'Matru ki Bijlee ka Mandola'
      },
      {
        id: 1594,
        song_name: 'Mat Maari',
        song_link: 'kuEeCAnB3EI',
        album_name: 'R... Rajkumar'
      },
      {
        id: 1533,
        song_name: 'Ye Tune Kya Kiya',
        song_link: 'w9Qo6p4XsXE',
        album_name: 'Once Upon a Time in Mumbai Dobaara!'
      },
      {
        id: 1479,
        song_name: 'Ang Laga De',
        song_link: '5QpB607FdB4',
        album_name: 'Ram-Leela'
      },
      {
        id: 1575,
        song_name: 'Chhamiya No. 1',
        song_link: '6kubbkKdiFk',
        album_name: 'Zila Ghaziabad'
      },
      {
        id: 1511,
        song_name: 'Party on My Mind',
        song_link: 'UJpjx0ssWHE',
        album_name: 'Race 2'
      },
      {
        id: 1612,
        song_name: 'Jeene Laga Hoon',
        song_link: 'qpIdoaaPa6U',
        album_name: 'Ramaiya Vastavaiya'
      },
      {
        id: 1546,
        song_name: 'Har Ek Friend Kamina Hota Hai',
        song_link: 'EzqSZHjDcxI',
        album_name: 'Chashme Baddoor'
      },
      {
        id: 720,
        song_name: 'Dil Duffer ',
        song_link: 'tQCiknhpN-w',
        album_name: 'Gori Tere Pyaar Mein!'
      },
      {
        id: 1447,
        song_name: 'Dharpakad',
        song_link: '2bhWHtmY-Xc',
        album_name: 'Special 26'
      },
      {
        id: 1460,
        song_name: 'Dama Dam Mast Qalandar',
        song_link: 'F2VGSsLUJz0',
        album_name: 'D-Day'
      },
      {
        id: 1548,
        song_name: 'Early Morning',
        song_link: 'PPWm2SsHlbw',
        album_name: 'Chashme Baddoor'
      },
      {
        id: 1492,
        song_name: 'Lag Gayi Lottery',
        song_link: 'HWmX3J_c99M',
        album_name: 'Fukrey'
      },
      {
        id: 1588,
        song_name: 'Mere Bina Tu (duet version)',
        song_link: '_McbiWu9RJs',
        album_name: 'Phata Poster Nikhla Hero'
      },
      {
        id: 1524,
        song_name: 'Mere Dad Ka Mash Up',
        song_link: 'Euy5AgSrpQg',
        album_name: 'Mere Dad Ki Maruti'
      },
      {
        id: 1030,
        song_name: 'Bula Deni Mainu (Bhula Dena)',
        song_link: 'hMPjjT1_yE0',
        album_name: 'Aashiqui 2'
      },
      {
        id: 2098,
        song_name: 'Kar Chalna Shuru Tu',
        song_link: '7FtPcvGqvSA',
        album_name: 'Ek Main Aur Ekk Tu'
      },
      {
        id: 2130,
        song_name: 'Halkat Jawani',
        song_link: 'WjsqMlDDMk0',
        album_name: 'Heroine'
      },
      {
        id: 2166,
        song_name: 'Sava Dollar (Lavni)',
        song_link: 'XtKNNC1OZ7k',
        album_name: 'Aiyyaa'
      },
      {
        id: 678,
        song_name: 'The Disco Song ',
        song_link: 'mcL6ZErM49Q',
        album_name: 'Student of the Year'
      },
      {
        id: 2065,
        song_name: 'Yaariyaan',
        song_link: 'RIGTU4yWLd0',
        album_name: 'Cocktail'
      },
      {
        id: 612,
        song_name: 'Dil Garden Garden Hogaya ',
        song_link: '1k_XRI3-j1w',
        album_name: 'Kyaa Super Kool Hain Hum'
      },
      {
        id: 2046,
        song_name: 'Chinta Ta Ta Chita Chita',
        song_link: '5dmwtnQBkLk',
        album_name: 'Rowdy Rathore'
      },
      {
        id: 1729,
        song_name: 'Mashallah',
        song_link: '9_BUZaTcozs',
        album_name: 'Ek Tha Tiger'
      },
      {
        id: 2078,
        song_name: 'Do U Know',
        song_link: '5lf_Ujt0BXo',
        album_name: 'Housefull 2'
      },
      {
        id: 767,
        song_name: 'Abhi Mujh Me Kahi ',
        song_link: '7Vj6c9vDrgE',
        album_name: 'Agneepath'
      },
      {
        id: 2111,
        song_name: 'Oo Lala',
        song_link: 'zbwEIHpefe4',
        album_name: 'London Paris New York'
      },
      {
        id: 2143,
        song_name: 'Mujhko Khud Se',
        song_link: '7BGMxb_EmPE',
        album_name: 'Cigarette Ki Tarah'
      },
      {
        id: 2179,
        song_name: 'Desi Mem',
        song_link: 'CLy-l5BpXgA',
        album_name: 'Kamaal Dhamaal Malamaal'
      },
      {
        id: 2017,
        song_name: 'Phir Le Aya Dil (Reprise)',
        song_link: 'SWtu9ijRncc',
        album_name: 'Barfi!'
      },
      {
        id: 2124,
        song_name: 'Hath Me Thari Saaje Chuda',
        song_link: 'K2Ms6TUiRSQ',
        album_name: 'Jalpari: The Desert Mermaid'
      },
      {
        id: 2156,
        song_name: 'Chaahat',
        song_link: 'o4TaBRmA3CU',
        album_name: 'Blood Money'
      },
      {
        id: 2030,
        song_name: 'Gustakh Dil (From "English Vinglish)',
        song_link: 'IT-q8dRekuA',
        album_name: 'English Vinglish'
      },
      {
        id: 2059,
        song_name: 'Aafaton Ke Parinde',
        song_link: 'aSl73rs5t0k',
        album_name: 'Ishaqzaade'
      },
      {
        id: 2091,
        song_name: 'Gelaya Gelaya',
        song_link: 'SxRSPyJewgg',
        album_name: 'Chakravyuh'
      },
      {
        id: 2105,
        song_name: 'Raabta',
        song_link: 'zlt38OOqwDc',
        album_name: 'Agent Vinod'
      },
      {
        id: 2137,
        song_name: 'Aromale (My Beloved)',
        song_link: 'bOaB4fAjfXc',
        album_name: 'Ekk Deewana Tha'
      },
      {
        id: 2164,
        song_name: 'Mujhko Teri Zaroorat Hai',
        song_link: 'PWRccF9AvRc&vl=en',
        album_name: 'Jodi Breakers'
      },
      {
        id: 2072,
        song_name: 'Motorwada',
        song_link: 'olDTiq_kv-8',
        album_name: 'Luv Shuv Tey Chicken Khurana'
      },
      {
        id: 2146,
        song_name: 'Sing Raja',
        song_link: 'kKeYFaidd7s',
        album_name: 'Joker'
      },
      {
        id: 2178,
        song_name: 'Ramba Mein Samba',
        song_link: 'wk3uSsu38OI',
        album_name: 'Shirin Farhad Ki Toh Nikal Padi'
      },
      {
        id: 2024,
        song_name: 'Mere Nishaan',
        song_link: '8c6GRDxa6HQ',
        album_name: 'OMG: Oh My God!'
      },
      {
        id: 2053,
        song_name: 'Ae Mere Mann',
        song_link: 'iWp4R9rGv98',
        album_name: 'Ferrari Ki Sawaari'
      },
      {
        id: 2085,
        song_name: 'Lonely',
        song_link: '7G20a6UCSno',
        album_name: 'Khiladi 786'
      },
      {
        id: 2118,
        song_name: 'Jeene De',
        song_link: 'QBAsedLVCuQ',
        album_name: 'Tere Naal Love Ho Gaya'
      },
      {
        id: 638,
        song_name: 'Ishq Shava ',
        song_link: 'iEJPDYrLtsI',
        album_name: "Jusqu'\u00e0 mon dernier souffle"
      },
      {
        id: 2099,
        song_name: 'Bol Bachchan',
        song_link: 'aJyTmT17Npg',
        album_name: 'Bol Bachchan'
      },
      {
        id: 2131,
        song_name: 'Saiyaan',
        song_link: 'V6aQUiJWje4',
        album_name: 'Heroine'
      },
      {
        id: 2167,
        song_name: 'Aga Bai',
        song_link: 'CHwlXtF3zXs',
        album_name: 'Aiyyaa'
      },
      {
        id: 2066,
        song_name: 'Second Hand Jawaani',
        song_link: 'nnm9JXRZQ8',
        album_name: 'Cocktail'
      },
      {
        id: 613,
        song_name: 'Shirt Da Button ',
        song_link: 'qgDxKAqLVgU',
        album_name: 'Kyaa Super Kool Hain Hum'
      },
      {
        id: 2047,
        song_name: 'Aa Re Pritam Pyaare',
        song_link: 'EY8oryof0bU',
        album_name: 'Rowdy Rathore'
      },
      {
        id: 1730,
        song_name: 'Laapata',
        song_link: '3PqxT1VqyNc',
        album_name: 'Ek Tha Tiger'
      },
      {
        id: 2079,
        song_name: 'Tu Hi Mera',
        song_link: 'yBa3FVQKAvY',
        album_name: 'Jannat 2'
      },
      {
        id: 596,
        song_name: 'Rafta Rafta',
        song_link: 'G5IhKUA74EI',
        album_name: 'Raaz 3: The Third Dimension'
      },
      {
        id: 768,
        song_name: 'Gun Gun Guna ',
        song_link: 'fxzk-9XJPTI',
        album_name: 'Agneepath'
      },
      {
        id: 2112,
        song_name: 'Apnaa Mujhe Tu Lagaa',
        song_link: 'T573FrZQgCY',
        album_name: '1920: Evil Returns'
      },
      {
        id: 2148,
        song_name: 'Bittoo Sab Ki Lega',
        song_link: '0kC5PKNgkmc',
        album_name: 'Bittoo Boss'
      },
      {
        id: 2180,
        song_name: 'Zor Naache',
        song_link: 'VgyCT-DH3uc',
        album_name: 'Kamaal Dhamaal Malamaal'
      },
      {
        id: 2018,
        song_name: 'Aashiyan (Solo)',
        song_link: 'LR4yMpe-29g',
        album_name: 'Barfi!'
      },
      {
        id: 2125,
        song_name: 'Rani Tu Mein Raja',
        song_link: 'HJEO3sFC2sk',
        album_name: 'Son of Sardaar'
      },
      {
        id: 2157,
        song_name: 'Abhi Abhi',
        song_link: 'm8hSKo0m04Q',
        album_name: 'Jism 2'
      },
      {
        id: 673,
        song_name: 'Kukkad ',
        song_link: '1Na8nKEUjYI',
        album_name: 'Student of the Year'
      },
      {
        id: 2031,
        song_name: 'Navrai Majhi',
        song_link: 'hEHNef66HT0',
        album_name: 'English Vinglish'
      },
      {
        id: 2060,
        song_name: 'Jiya Tu',
        song_link: 'Hl8BePMoF1s',
        album_name: 'Gangs of Wasseypur'
      },
      {
        id: 2092,
        song_name: 'Yenaithu',
        song_link: 'T5V2kKqa8Wc',
        album_name: 'Chakravyuh'
      },
      {
        id: 2073,
        song_name: 'Luni Hasi',
        song_link: 'Qj8DrWUWlwI',
        album_name: 'Luv Shuv Tey Chicken Khurana'
      },
      {
        id: 2106,
        song_name: 'Agent Vinod',
        song_link: 'lTadcpZ_oM0',
        album_name: 'Agent Vinod'
      },
      {
        id: 2138,
        song_name: 'Hosanna',
        song_link: 'dfNdRsNSFx4',
        album_name: 'Ekk Deewana Tha'
      },
      {
        id: 2170,
        song_name: 'Boom Boom ',
        song_link: '7iI2IY4wvm8',
        album_name: 'Ajab Gazabb Love'
      },
      {
        id: 2012,
        song_name: 'Aami Shotti Bolchi',
        song_link: 'JS6LV_kijUU',
        album_name: 'Kahaani'
      },
      {
        id: 2040,
        song_name: 'Muskaanein Jhooti Hai',
        song_link: 'C2ViVnJpsTs',
        album_name: 'Talaash'
      },
      {
        id: 2147,
        song_name: 'Yeh Joker',
        song_link: 'f2YLQ58lzfM',
        album_name: 'Joker'
      },
      {
        id: 2183,
        song_name: 'Tere Bina',
        song_link: 'qYR5ah3LAdA',
        album_name: 'Tezz'
      },
      {
        id: 2025,
        song_name: 'Tu Hi Tu',
        song_link: 'Qy09kIWRysc',
        album_name: 'OMG: Oh My God!'
      },
      {
        id: 2054,
        song_name: 'Good Night',
        song_link: 'dxuDTi92x70',
        album_name: 'Ferrari Ki Sawaari'
      },
      {
        id: 2086,
        song_name: 'Balma',
        song_link: 'qLUS2pDKmmc',
        album_name: 'Khiladi 786'
      },
      {
        id: 2119,
        song_name: 'Pee Pa Pee Pa Ho Gaya',
        song_link: 'TCbU6Y9-cAE',
        album_name: 'Tere Naal Love Ho Gaya'
      },
      {
        id: 639,
        song_name: 'Jab Tak Hai Jaan - The Poem ',
        song_link: 'Z1kW1MbNI5Y',
        album_name: "Jusqu'\u00e0 mon dernier souffle"
      },
      {
        id: 614,
        song_name: 'Volume High Karle ',
        song_link: 'APKf6xFBCx4',
        album_name: 'Kyaa Super Kool Hain Hum'
      },
      {
        id: 2100,
        song_name: 'Chalao Na Naino Se',
        song_link: 'z-2ObrQ2Ct0',
        album_name: 'Bol Bachchan'
      },
      {
        id: 2132,
        song_name: 'Main Heroine Hoon',
        song_link: 'KMqIThhLg',
        album_name: 'Heroine'
      },
      {
        id: 2168,
        song_name: 'Mahek Bhi',
        song_link: 'aqaI2UEG-ZI',
        album_name: 'Aiyyaa'
      },
      {
        id: 2067,
        song_name: 'Tera Naam Japdi Phiran',
        song_link: 'RPSWVTZkgJo',
        album_name: 'Cocktail'
      },
      {
        id: 2048,
        song_name: 'Chamak Challo Chel Chabeli',
        song_link: 'wgFGn7iEPos',
        album_name: 'Rowdy Rathore'
      },
      {
        id: 1731,
        song_name: 'Banjaara',
        song_link: '7QF7z76ehyo',
        album_name: 'Ek Tha Tiger'
      },
      {
        id: 2080,
        song_name: 'Tera Deedar Hua',
        song_link: 'i_HFdi1xxFM',
        album_name: 'Jannat 2'
      },
      {
        id: 597,
        song_name: 'Kya Raaz Hai ',
        song_link: 'NPPX-RZ-fkk',
        album_name: 'Raaz 3: The Third Dimension'
      },
      {
        id: 769,
        song_name: 'Deva Shree Ganesha ',
        song_link: 'RYqJ5w-GrfM',
        album_name: 'Agneepath'
      },
      {
        id: 2113,
        song_name: 'Uska Hi Banana',
        song_link: 'NE4d86SFw6I',
        album_name: '1920: Evil Returns'
      },
      {
        id: 2149,
        song_name: 'Kaun Kenda',
        song_link: 'Ud0nbk7U5Pk',
        album_name: 'Bittoo Boss'
      },
      {
        id: 2181,
        song_name: 'Ishq Ki Dafli Baje',
        song_link: 'madJKqZTUU8',
        album_name: 'Kamaal Dhamaal Malamaal'
      },
      {
        id: 2019,
        song_name: 'Kyon',
        song_link: 'X_q9IXvt3ro',
        album_name: 'Barfi!'
      },
      {
        id: 2126,
        song_name: 'Po Po',
        song_link: 'rnuosKzu2Ig',
        album_name: 'Son of Sardaar'
      },
      {
        id: 2158,
        song_name: 'Yeh Kasoor',
        song_link: 'FzjRz4ijgCM',
        album_name: 'Jism 2'
      },
      {
        id: 674,
        song_name: 'Vele ',
        song_link: 'kNlY7VKDdno',
        album_name: 'Student of the Year'
      },
      {
        id: 2032,
        song_name: 'Dagabaaz Re',
        song_link: '3m2-HuJKO3k',
        album_name: 'Dabangg 2'
      },
      {
        id: 2061,
        song_name: 'Hunter',
        song_link: '4dEJLFqR6_s',
        album_name: 'Gangs of Wasseypur'
      },
      {
        id: 2093,
        song_name: 'Ninthalli Nillalaare',
        song_link: 'pDhHQsbZ820',
        album_name: 'Chakravyuh'
      },
      {
        id: 2094,
        song_name: 'Ek Main Aur Ekk Tu',
        song_link: 'R_a3NAVU9YY',
        album_name: 'Ek Main Aur Ekk Tu'
      },
      {
        id: 1725,
        song_name: 'Rokda',
        song_link: 'vGY4onEbQ0M',
        album_name: 'Vicky Donor'
      },
      {
        id: 2074,
        song_name: 'Makkhan Malai',
        song_link: 'F_q-CNZYKUI',
        album_name: 'Luv Shuv Tey Chicken Khurana'
      },
      {
        id: 2107,
        song_name: 'London, Paris, New York',
        song_link: 'TdbQ2CX3jCQ',
        album_name: 'London Paris New York'
      },
      {
        id: 2139,
        song_name: 'Phoolon Jaisi',
        song_link: 'IvespFaebwU',
        album_name: 'Ekk Deewana Tha'
      },
      {
        id: 2171,
        song_name: 'Tu',
        song_link: '5RxtYQNmqJI',
        album_name: 'Ajab Gazabb Love'
      },
      {
        id: 2013,
        song_name: 'Piya Tu Kaahe Rootha Re',
        song_link: 'agaBErK_ncI',
        album_name: 'Kahaani'
      },
      {
        id: 2041,
        song_name: 'Jee Le Zaraa',
        song_link: 'h01UTFWScIc',
        album_name: 'Talaash'
      },
      {
        id: 2152,
        song_name: 'Gunaah',
        song_link: '3Zv3phlk9Ug',
        album_name: 'Blood Money'
      },
      {
        id: 2184,
        song_name: 'Main Hoon Shab',
        song_link: 'yK69eR374m8',
        album_name: 'Tezz'
      },
      {
        id: 2026,
        song_name: 'Go Go Govinda',
        song_link: 'DYtcl4H-Heo',
        album_name: 'OMG: Oh My God!'
      },
      {
        id: 2055,
        song_name: 'Ishaqzaade',
        song_link: 'Lf1M-XJpUpQ',
        album_name: 'Ishaqzaade'
      },
      {
        id: 2087,
        song_name: 'Long Drive',
        song_link: 'nEWp0dTrqlk',
        album_name: 'Khiladi 786'
      },
      {
        id: 2120,
        song_name: 'Tu Mohabbat Hai ',
        song_link: 'ApnLd04X7-U',
        album_name: 'Tere Naal Love Ho Gaya'
      },
      {
        id: 640,
        song_name: 'Challa ',
        song_link: 'jC-H0g6T26g',
        album_name: "Jusqu'\u00e0 mon dernier souffle"
      },
      {
        id: 615,
        song_name: 'Hum Toh Hai Cappuccino ',
        song_link: 'cQKqfyR40zs',
        album_name: 'Kyaa Super Kool Hain Hum'
      },
      {
        id: 2101,
        song_name: 'Nach Le Nach Le',
        song_link: '4fceMX3XBSE',
        album_name: 'Bol Bachchan'
      },
      {
        id: 2133,
        song_name: 'Khwahishein',
        song_link: 'DTk1M7s3yj4',
        album_name: 'Heroine'
      },
      {
        id: 2169,
        song_name: 'Wakda',
        song_link: 'VTTwVdHNcns',
        album_name: 'Aiyyaa'
      },
      {
        id: 2068,
        song_name: 'Luttna',
        song_link: '80ygnCWU0fk',
        album_name: 'Cocktail'
      },
      {
        id: 2182,
        song_name: 'Ringa Ringa',
        song_link: 'sDblg489sIY',
        album_name: 'Kamaal Dhamaal Malamaal'
      },
      {
        id: 2020,
        song_name: 'Ala Barfi',
        song_link: '_oyI0C2kBRc',
        album_name: 'Barfi!'
      },
      {
        id: 2049,
        song_name: 'Tera Ishq Bada Teekha',
        song_link: '7cdzYerM720',
        album_name: 'Rowdy Rathore'
      },
      {
        id: 1732,
        song_name: 'Saiyaara',
        song_link: 'A5pSnIwbpaM',
        album_name: 'Ek Tha Tiger'
      },
      {
        id: 2081,
        song_name: 'Tujhe Sochta Hoon',
        song_link: 'ybFzlvrNw6o',
        album_name: 'Jannat 2'
      },
      {
        id: 598,
        song_name: 'Oh My Love ',
        song_link: 'pAHyorX2Bg0',
        album_name: 'Raaz 3: The Third Dimension'
      },
      {
        id: 770,
        song_name: 'Chikni Chameli ',
        song_link: 'MQM7CNoAsBI',
        album_name: 'Agneepath'
      },
      {
        id: 2114,
        song_name: 'Jaavedaan Hai',
        song_link: 'wvy7g7HNMgw',
        album_name: '1920: Evil Returns'
      },
      {
        id: 634,
        song_name: 'Jab Tak Hai Jaan ',
        song_link: 'VAt6TO2gdko',
        album_name: "Jusqu'\u00e0 mon dernier souffle"
      },
      {
        id: 2150,
        song_name: 'Kick Lag Gayi',
        song_link: 'WFR7mcZW54U',
        album_name: 'Bittoo Boss'
      },
      {
        id: 2095,
        song_name: 'Gubbare',
        song_link: 'XanTuIWUEQ0',
        album_name: 'Ek Main Aur Ekk Tu'
      },
      {
        id: 2127,
        song_name: 'Tu Kamaal Di Kudi',
        song_link: 'i_DfdixQldQ',
        album_name: 'Son of Sardaar'
      },
      {
        id: 2159,
        song_name: 'Maula',
        song_link: 'I2ZQWP6mSZk',
        album_name: 'Jism 2'
      },
      {
        id: 675,
        song_name: 'Radha ',
        song_link: 'kZqH9Kfv6BI',
        album_name: 'Student of the Year'
      },
      {
        id: 2033,
        song_name: 'Pandeyjee Seeti',
        song_link: 'gSaaNGMPl_g',
        album_name: 'Dabangg 2'
      },
      {
        id: 2062,
        song_name: 'Keh Ke Lunga',
        song_link: 'E_HbyQ6Y46U',
        album_name: 'Gangs of Wasseypur'
      },
      {
        id: 1726,
        song_name: 'Kho Jaane Do',
        song_link: 'u8hTNH07V1M',
        album_name: 'Vicky Donor'
      },
      {
        id: 2075,
        song_name: 'Papa Toh Band Bajaye',
        song_link: 'HixoMOoLwIM',
        album_name: 'Housefull 2'
      },
      {
        id: 2108,
        song_name: 'Voh Dekhnay Mein',
        song_link: 'nD1jhw6F-J4',
        album_name: 'London Paris New York'
      },
      {
        id: 2140,
        song_name: 'Sharminda Hoon',
        song_link: '4AnV0bzHEwE',
        album_name: 'Ekk Deewana Tha'
      },
      {
        id: 2172,
        song_name: 'Sun Soniye',
        song_link: 'veuzmx1ak7g',
        album_name: 'Ajab Gazabb Love'
      },
      {
        id: 2014,
        song_name: 'Tore Bina',
        song_link: 'qitrcE_c7PI',
        album_name: 'Kahaani'
      },
      {
        id: 2042,
        song_name: 'Jiya Lage Na',
        song_link: 'FMInvVQFKrs',
        album_name: 'Talaash'
      },
      {
        id: 2153,
        song_name: 'Teri Yaadon Se',
        song_link: 'zjUXQhWOghs',
        album_name: 'Blood Money'
      },
      {
        id: 2185,
        song_name: 'Laila',
        song_link: 'a0tCOhfnsSg',
        album_name: 'Tezz'
      },
      {
        id: 2027,
        song_name: 'Hari Bol',
        song_link: 'nwkGbdcTkWo',
        album_name: 'OMG: Oh My God!'
      },
      {
        id: 2056,
        song_name: 'Chokra Jawaan',
        song_link: 'T4tedh_11hg',
        album_name: 'Ishaqzaade'
      },
      {
        id: 2088,
        song_name: 'Sari Sari Raat',
        song_link: 'bKwu64vFRA0',
        album_name: 'Khiladi 786'
      },
      {
        id: 2121,
        song_name: 'Fann Ban Gayi',
        song_link: 'ju5pJCVZkP0',
        album_name: 'Tere Naal Love Ho Gaya'
      },
      {
        id: 2102,
        song_name: 'Jab Se Dekhi Hai',
        song_link: 'gTGAKKucXjk',
        album_name: 'Bol Bachchan'
      },
      {
        id: 2134,
        song_name: 'Tujhpe Fida',
        song_link: 'V5TAR-q3a_4',
        album_name: 'Heroine'
      },
      {
        id: 2161,
        song_name: 'Kunwara',
        song_link: 'IwQY1QqgsFU',
        album_name: 'Jodi Breakers'
      },
      {
        id: 2069,
        song_name: 'Jugni ',
        song_link: 'x_NoA_Fp2Rc',
        album_name: 'Cocktail'
      },
      {
        id: 2175,
        song_name: 'Kukuduku',
        song_link: 'KQx9KbIteRs',
        album_name: 'Shirin Farhad Ki Toh Nikal Padi'
      },
      {
        id: 2021,
        song_name: 'Saawali Si Raat',
        song_link: 'v-eUWdjBgJA',
        album_name: 'Barfi!'
      },
      {
        id: 2050,
        song_name: 'Chandaniya (Lori Lori)',
        song_link: 'uFKK3q9lxNA',
        album_name: 'Rowdy Rathore'
      },
      {
        id: 1733,
        song_name: 'Mashallah (Remix)',
        song_link: 'k5buySsS3Dk',
        album_name: 'Ek Tha Tiger'
      },
      {
        id: 2082,
        song_name: 'Rab Ka Shukrana',
        song_link: 'Vevz_tqQHMM',
        album_name: 'Jannat 2'
      },
      {
        id: 599,
        song_name: 'Deewana Kar Raha ',
        song_link: 'I9cTsZKn8bY',
        album_name: 'Raaz 3: The Third Dimension'
      },
      {
        id: 2115,
        song_name: 'Khud Ko Tere',
        song_link: 'Ia1AUBtKrXk',
        album_name: '1920: Evil Returns'
      },
      {
        id: 635,
        song_name: 'Jiya Re ',
        song_link: 'smn3mDBOUy4',
        album_name: "Jusqu'\u00e0 mon dernier souffle"
      },
      {
        id: 2151,
        song_name: 'Audi',
        song_link: 'KEDZPup7qX8',
        album_name: 'Bittoo Boss'
      },
      {
        id: 2096,
        song_name: 'Aunty Ji',
        song_link: '4HYrrHIk6l8',
        album_name: 'Ek Main Aur Ekk Tu'
      },
      {
        id: 2128,
        song_name: 'Bichdann',
        song_link: '5OZDMw2aUIg',
        album_name: 'Son of Sardaar'
      },
      {
        id: 2160,
        song_name: 'Yeh Jism',
        song_link: 'n8xoaUc4u3Q',
        album_name: 'Jism 2'
      },
      {
        id: 676,
        song_name: 'Ishq Wala Love ',
        song_link: 'VmH8tELQ3aE',
        album_name: 'Student of the Year'
      },
      {
        id: 2034,
        song_name: 'Fevicol Se',
        song_link: 'zE7Pwgl6sLA',
        album_name: 'Dabangg 2'
      },
      {
        id: 2063,
        song_name: 'Tum Hi Ho Bandhu',
        song_link: 'o1RducJbUdc',
        album_name: 'Cocktail'
      },
      {
        id: 1727,
        song_name: 'Pani Da Rang (Male) ',
        song_link: '_hRnWA0A20E',
        album_name: 'Vicky Donor'
      },
      {
        id: 2076,
        song_name: 'Anarkali Disco Chali',
        song_link: 'sONw3dihCRs',
        album_name: 'Housefull 2'
      },
      {
        id: 2109,
        song_name: 'Ting Rang',
        song_link: 'k9-sQdxfkck',
        album_name: 'London Paris New York'
      },
      {
        id: 2141,
        song_name: 'Sunlo Zara',
        song_link: 'OU-084U3JLU',
        album_name: 'Ekk Deewana Tha'
      },
      {
        id: 2173,
        song_name: 'Nachde Punjabi',
        song_link: 'vbUun60yJZU',
        album_name: 'Ajab Gazabb Love'
      },
      {
        id: 2015,
        song_name: 'Ekla Cholo Re',
        song_link: 'd9QOzkxMKU',
        album_name: 'Kahaani'
      },
      {
        id: 2044,
        song_name: 'Laakh Duniya Kahe',
        song_link: 'fu1ukLfioPU',
        album_name: 'Talaash'
      },
      {
        id: 2154,
        song_name: 'Jo Tere Sang',
        song_link: 'mf97nknAtz4',
        album_name: 'Blood Money'
      },
      {
        id: 2028,
        song_name: 'Dhak Dhuk',
        song_link: '9bSDoLoXCXc',
        album_name: 'English Vinglish'
      },
      {
        id: 2057,
        song_name: 'Pareshaan',
        song_link: 'zQl7zYkEP6M',
        album_name: 'Ishaqzaade'
      },
      {
        id: 2089,
        song_name: 'Hookah Bar',
        song_link: 'AihilcnejBA',
        album_name: 'Khiladi 786'
      },
      {
        id: 2122,
        song_name: 'Piya O Re Piya (Sad)',
        song_link: 'Fm23HC3Rcac',
        album_name: 'Tere Naal Love Ho Gaya'
      },
      {
        id: 2103,
        song_name: 'I Will Do The Talking Tonight',
        song_link: 'Y0VIRAucFmI',
        album_name: 'Agent Vinod'
      },
      {
        id: 2135,
        song_name: 'Kya Hai Mohabbat',
        song_link: '2HH6sWX6mUs',
        album_name: 'Ekk Deewana Tha'
      },
      {
        id: 2162,
        song_name: 'Bipasha',
        song_link: 'DhytQnmTtxw',
        album_name: 'Jodi Breakers'
      },
      {
        id: 2070,
        song_name: 'Mein Sharabi',
        song_link: 'xS7ykJIAoBw',
        album_name: 'Cocktail'
      },
      {
        id: 2176,
        song_name: 'Khatti Meethi',
        song_link: 'ga5YZzz62wg',
        album_name: 'Shirin Farhad Ki Toh Nikal Padi'
      },
      {
        id: 2022,
        song_name: 'Phir Le Aya Dil',
        song_link: 'y7TC2Ef__zw',
        album_name: 'Barfi!'
      },
      {
        id: 2051,
        song_name: 'Maara Re',
        song_link: 'Z73nY7yVV2E',
        album_name: 'Ferrari Ki Sawaari'
      },
      {
        id: 1734,
        song_name: 'Laapata (Remix)',
        song_link: 'rD5DOnHgUVg',
        album_name: 'Ek Tha Tiger'
      },
      {
        id: 2083,
        song_name: 'Jannatein Kahan',
        song_link: '9SdbF5rFeTc',
        album_name: 'Jannat 2'
      },
      {
        id: 600,
        song_name: 'Khayalo Mein B ',
        song_link: 'p4sXmItpSVo',
        album_name: 'Raaz 3: The Third Dimension'
      },
      {
        id: 2116,
        song_name: 'Majboor Tu Bhi Kahin',
        song_link: 'FLqRq-_tQWQ',
        album_name: '1920: Evil Returns'
      },
      {
        id: 636,
        song_name: 'Heer ',
        song_link: 'nd3ATvRsEN0',
        album_name: "Jusqu'\u00e0 mon dernier souffle"
      },
      {
        id: 2144,
        song_name: 'Kafirana',
        song_link: 'b5COhEvimNU',
        album_name: 'Joker'
      },
      {
        id: 2097,
        song_name: 'Aahatein',
        song_link: 'oeamZR8r91c',
        album_name: 'Ek Main Aur Ekk Tu'
      },
      {
        id: 2129,
        song_name: 'Yeh Jo Halki Halki Khumariya',
        song_link: 'HjmMJ-4hC0c',
        album_name: 'Son of Sardaar'
      },
      {
        id: 2165,
        song_name: 'Dreamum Wakeupum',
        song_link: 'AQeC89lO2w0',
        album_name: 'Aiyyaa'
      },
      {
        id: 677,
        song_name: 'Mashup Of The Year ',
        song_link: 'KVIcmBefqLY',
        album_name: 'Student of the Year'
      },
      {
        id: 2035,
        song_name: 'Saanson Ne',
        song_link: 'P9VkQX6kWUU',
        album_name: 'Dabangg 2'
      },
      {
        id: 2064,
        song_name: 'Daaru Desi',
        song_link: '3nA1hmKCRpE',
        album_name: 'Cocktail'
      },
      {
        id: 2045,
        song_name: 'Dhadhang Dhang',
        song_link: '5iGf_KNuN4w',
        album_name: 'Rowdy Rathore'
      },
      {
        id: 1728,
        song_name: 'Mar Jayian',
        song_link: 'XWivZEFt9uo',
        album_name: 'Vicky Donor'
      },
      {
        id: 2077,
        song_name: 'Right Now Now',
        song_link: 'm_4lF320DfQ',
        album_name: 'Housefull 2'
      },
      {
        id: 766,
        song_name: 'O Saiyan',
        song_link: 'WxMAsRnMUlA',
        album_name: 'Agneepath'
      },
      {
        id: 2110,
        song_name: 'Thehree Si Zindagi',
        song_link: 'pqLnEyOUIVY',
        album_name: 'London Paris New York'
      },
      {
        id: 2142,
        song_name: 'Doorian',
        song_link: 'OhXLFq17SVc',
        album_name: 'Cigarette Ki Tarah'
      },
      {
        id: 2174,
        song_name: 'Dariya Ho',
        song_link: 'OiNpbvkHw-E',
        album_name: 'Kamaal Dhamaal Malamaal'
      },
      {
        id: 2016,
        song_name: 'Main Kya Karoon',
        song_link: '02ossVAJM30',
        album_name: 'Barfi!'
      },
      {
        id: 2123,
        song_name: 'Neeli Neeli Khili Khili Si Duniya',
        song_link: 'b5P2CcjPN6w',
        album_name: 'Jalpari: The Desert Mermaid'
      },
      {
        id: 2155,
        song_name: 'Arzoo',
        song_link: 'X0pzrfCjls4',
        album_name: 'Blood Money'
      },
      {
        id: 2029,
        song_name: 'Manhattan (feat. Bianca Gomes)',
        song_link: 'jvIaluknw9k',
        album_name: 'English Vinglish'
      },
      {
        id: 2058,
        song_name: 'Jhalla Wallah',
        song_link: 'fqjXS7X9_5s',
        album_name: 'Ishaqzaade'
      },
      {
        id: 2090,
        song_name: 'Tu Hoor Pari',
        song_link: '8hmE2eVhPa0',
        album_name: 'Khiladi 786'
      },
      {
        id: 2104,
        song_name: 'Pungi',
        song_link: 'Sjh1PQ9B73Y',
        album_name: 'Agent Vinod'
      },
      {
        id: 2136,
        song_name: 'Dost Hai (Girl I Loved You)',
        song_link: 'sIKVPGx5KWQ',
        album_name: 'Ekk Deewana Tha'
      },
      {
        id: 2163,
        song_name: 'Darmiyaan',
        song_link: 'qBMj-I6qleY',
        album_name: 'Jodi Breakers'
      },
      {
        id: 2071,
        song_name: 'Kikli Kalerdi ',
        song_link: 'YCcBkrjUWfM',
        album_name: 'Luv Shuv Tey Chicken Khurana'
      },
      {
        id: 2177,
        song_name: 'Ishq Mein Tere Bina',
        song_link: '8pLuiUP5ElQ',
        album_name: 'Shirin Farhad Ki Toh Nikal Padi'
      },
      {
        id: 2023,
        song_name: "Don't Worry (Hey Ram)",
        song_link: 'JKYqxq3aJGg',
        album_name: 'OMG: Oh My God!'
      },
      {
        id: 2052,
        song_name: 'Mala Jau De',
        song_link: 'FIYgIGWe0TY',
        album_name: 'Ferrari Ki Sawaari'
      },
      {
        id: 2084,
        song_name: 'Sang Hoon Tere',
        song_link: '71i9pWhve0E',
        album_name: 'Jannat 2'
      },
      {
        id: 601,
        song_name: 'Zindagi Se ',
        song_link: 'a7nO5NVXJys',
        album_name: 'Raaz 3: The Third Dimension'
      },
      {
        id: 2117,
        song_name: 'Piya O Re Piya',
        song_link: 'pB9GZfY82TM',
        album_name: 'Tere Naal Love Ho Gaya'
      },
      {
        id: 637,
        song_name: 'Saans ',
        song_link: 'VAt6TO2gdko',
        album_name: "Jusqu'\u00e0 mon dernier souffle"
      },
      {
        id: 2145,
        song_name: 'Jugnu',
        song_link: '0pGTTIwjxV8',
        album_name: 'Joker'
      },
      {
        id: 1965,
        song_name: 'Tu Mera Hero',
        song_link: 'jPnzUdIG74s',
        album_name: 'Desi Boyz'
      },
      {
        id: 2004,
        song_name: 'Woh Ek Pal',
        song_link: 'xj6TC0wSo0c',
        album_name: 'Not a Love Story'
      },
      {
        id: 1900,
        song_name: 'Dushman Mera',
        song_link: 'v8gZ8Sqcrtc',
        album_name: 'Don 2'
      },
      {
        id: 1932,
        song_name: 'Jaa Chudail',
        song_link: 'PwmQl_IL3h0',
        album_name: 'Delhi Belly'
      },
      {
        id: 595,
        song_name: 'Ooh La La',
        song_link: 'eedLcadTiYM',
        album_name: 'The Dirty Picture'
      },
      {
        id: 1946,
        song_name: 'Sajh Dhaj Ke',
        song_link: 'C87WJjQKLNI&vl=en',
        album_name: 'Mausam'
      },
      {
        id: 1978,
        song_name: 'Teri Meri',
        song_link: 'tyxswccv-VU',
        album_name: 'Bodyguard'
      },
      {
        id: 644,
        song_name: 'Raftaarein ',
        song_link: 'MlE-GojmNwM',
        album_name: 'Ra.One'
      },
      {
        id: 1998,
        song_name: 'Rozaana',
        song_link: 'OgbgosaRpzo',
        album_name: 'Love Breakups Zindagi'
      },
      {
        id: 1926,
        song_name: 'Manu Bhaiya',
        song_link: 'zWvtqphdR9g',
        album_name: 'Tanu Weds Manu'
      },
      {
        id: 1959,
        song_name: 'Uh Oh Uh Oh 2.0',
        song_link: 'ZNkTpwYV8k8',
        album_name: 'Mujhse Fraaandship Karoge'
      },
      {
        id: 589,
        song_name: 'Aye Khuda',
        song_link: 'T8_vDn1wsYE',
        album_name: 'Murder 2'
      },
      {
        id: 1939,
        song_name: 'Awaara',
        song_link: 'MMILKVYhxVw',
        album_name: '7 Khoon Maaf'
      },
      {
        id: 1972,
        song_name: 'Jazba',
        song_link: 'GiKfmRE8vUk',
        album_name: 'Ladies vs. Ricky Bahl'
      },
      {
        id: 2011,
        song_name: 'Tik Tuk',
        song_link: 'E369ZeAEDfk',
        album_name: 'Rascals'
      },
      {
        id: 1992,
        song_name: 'Fully Faltu',
        song_link: 'N4aimmg6Pc4',
        album_name: 'F.A.L.T.U'
      },
      {
        id: 1920,
        song_name: 'Laila O Laila',
        song_link: 'QLrWkShCvVA',
        album_name: 'Chalo Dilli'
      },
      {
        id: 1953,
        song_name: 'Life Bahot Simple Hai',
        song_link: '6TF9qlWZgEU',
        album_name: 'Stanley Ka Dabba'
      },
      {
        id: 1985,
        song_name: 'Baby Doll',
        song_link: 'kShTN0Jz6Jg',
        album_name: 'Ragini MMS'
      },
      {
        id: 1966,
        song_name: 'Achha Lagta Hai',
        song_link: 'Cc_cNEjAh_Y',
        album_name: 'Aarakshan'
      },
      {
        id: 2005,
        song_name: 'Chal Kudie',
        song_link: 'TJyPI_c5yt8',
        album_name: 'Double Dhamaal'
      },
      {
        id: 1901,
        song_name: 'Dil Dhadakne Do',
        song_link: 'WuMWwPHTSoY',
        album_name: 'Zindagi Na Milegi Dobara'
      },
      {
        id: 1933,
        song_name: 'Dilli',
        song_link: 'u4NKZqnKh5o',
        album_name: 'No One Killed Jessica'
      },
      {
        id: 1914,
        song_name: 'Life Sahi Hai',
        song_link: 'fu6FmbBJawY',
        album_name: 'Pyaar Ka Punchnama'
      },
      {
        id: 1947,
        song_name: 'Ik Tu Hi Tu Hi',
        song_link: 'hH6jAQaZ2zc',
        album_name: 'Mausam'
      },
      {
        id: 1979,
        song_name: 'Ypd Title Track (Rdb Version) Part 1',
        song_link: 'SwMj68qPEbY',
        album_name: 'Yamla Pagla Deewana'
      },
      {
        id: 1986,
        song_name: 'Chaar Botal Vodka',
        song_link: 'x8F5dz8kv1w',
        album_name: 'Ragini MMS'
      },
      {
        id: 1999,
        song_name: 'Rab Rakha',
        song_link: 'uBgJ0J2vtRk',
        album_name: 'Love Breakups Zindagi'
      },
      {
        id: 1927,
        song_name: 'Saathiyaa',
        song_link: 'ScPHwfk6bBM',
        album_name: 'Singham'
      },
      {
        id: 1960,
        song_name: 'Make Some Noise for the Desi Boyz',
        song_link: 'lyWHtKq1PcQ',
        album_name: 'Desi Boyz'
      },
      {
        id: 590,
        song_name: 'Aa Zara',
        song_link: 'J2-mYFWQ5W4',
        album_name: 'Murder 2'
      },
      {
        id: 1940,
        song_name: 'Tere Liye',
        song_link: 'SOo4nldZxw8',
        album_name: '7 Khoon Maaf'
      },
      {
        id: 1973,
        song_name: 'Thug Le',
        song_link: 'LEYXdZ_rVbo',
        album_name: 'Ladies vs. Ricky Bahl'
      },
      {
        id: 1993,
        song_name: 'Tera Intezaar (Revisited)',
        song_link: 'VgEQuYlGr0U',
        album_name: 'Love U... Mr. Kalakaar!'
      },
      {
        id: 1921,
        song_name: 'Kaun Se Badi Baat',
        song_link: 'w_sz9udDA_o',
        album_name: 'Chalo Dilli'
      },
      {
        id: 1954,
        song_name: 'Dabba',
        song_link: 'w1L7zdrweDg',
        album_name: 'Stanley Ka Dabba'
      },
      {
        id: 1967,
        song_name: 'Mauka',
        song_link: 'h3Q2mt11cmM',
        album_name: 'Aarakshan'
      },
      {
        id: 2006,
        song_name: 'Oye Oye',
        song_link: 'SuhOxvJIZBY',
        album_name: 'Double Dhamaal'
      },
      {
        id: 1902,
        song_name: 'Ik Junoon Remix',
        song_link: '9X5QdmBUPsI',
        album_name: 'Zindagi Na Milegi Dobara'
      },
      {
        id: 1934,
        song_name: 'Aali Re',
        song_link: 'HRnbmQYAIp0',
        album_name: 'No One Killed Jessica'
      },
      {
        id: 1915,
        song_name: 'Koi Aa Raha Paas Hai',
        song_link: 'F197On7tpho',
        album_name: 'Pyaar Ka Punchnama'
      },
      {
        id: 1948,
        song_name: 'Poore Se Zara Sa Kam Hain',
        song_link: 'qUB1PBVk8OA',
        album_name: 'Mausam'
      },
      {
        id: 1980,
        song_name: 'Charha De Rang',
        song_link: 'jZTMQiTay0Y',
        album_name: 'Yamla Pagla Deewana'
      },
      {
        id: 1987,
        song_name: 'Aam Aadmi ',
        song_link: 'U0DVxJIRrq4',
        album_name: 'Chala Mussaddi - Office Office'
      },
      {
        id: 2000,
        song_name: 'Love Love Love',
        song_link: 'ycJpr8Fk4PQ',
        album_name: 'Love Breakups Zindagi'
      },
      {
        id: 1928,
        song_name: 'Maula Maula',
        song_link: 'hd_vBwpm5IU',
        album_name: 'Singham'
      },
      {
        id: 1961,
        song_name: 'Subha Hone Na De',
        song_link: 'Y7G-tYRzwYY',
        album_name: 'Desi Boyz'
      },
      {
        id: 591,
        song_name: 'Hale Dil',
        song_link: 'uSibwB2TQC4',
        album_name: 'Murder 2'
      },
      {
        id: 1941,
        song_name: 'Sararara',
        song_link: 'Sh2l86zw8lg',
        album_name: 'Yeh Saali Zindagi'
      },
      {
        id: 1974,
        song_name: 'Jigar Da Tukda',
        song_link: 'c9w47mortQw',
        album_name: 'Ladies vs. Ricky Bahl'
      },
      {
        id: 1994,
        song_name: 'Bhoore Bhoore Badal',
        song_link: 'pn6zrL29-o',
        album_name: 'Love U... Mr. Kalakaar!'
      },
      {
        id: 1922,
        song_name: 'Sadi Gali',
        song_link: 'w_HaezV0DqI',
        album_name: 'Tanu Weds Manu'
      },
      {
        id: 1955,
        song_name: 'Nanhi Si Jaan',
        song_link: 'AHoggKB4LQM',
        album_name: 'Stanley Ka Dabba'
      },
      {
        id: 1968,
        song_name: 'Kaun Si Dor',
        song_link: 'pAljtmCtHJI',
        album_name: 'Aarakshan'
      },
      {
        id: 2007,
        song_name: 'Jalebi Bai',
        song_link: 'DUy7Kqh9HCY',
        album_name: 'Double Dhamaal'
      },
      {
        id: 1903,
        song_name: 'Khaabon Ke Parinday',
        song_link: 'rga784YnL3M',
        album_name: 'Zindagi Na Milegi Dobara'
      },
      {
        id: 1935,
        song_name: 'Yeh Pal',
        song_link: 'dhwc9ClET-E',
        album_name: 'No One Killed Jessica'
      },
      {
        id: 1916,
        song_name: 'Kutta',
        song_link: '4f19PKtkinU',
        album_name: 'Pyaar Ka Punchnama'
      },
      {
        id: 1949,
        song_name: 'Tai Tai Phish',
        song_link: 'Y2wFjd_5OlY',
        album_name: 'Chillar Party'
      },
      {
        id: 1981,
        song_name: 'Tinku Jiya',
        song_link: '94A9SNq6sBA',
        album_name: 'Yamla Pagla Deewana'
      },
      {
        id: 1988,
        song_name: 'Le Ja Tu Mujhe',
        song_link: 'hS38moeROtw',
        album_name: 'F.A.L.T.U'
      },
      {
        id: 2001,
        song_name: 'Chhayee Hai Tanhayee',
        song_link: 'XC8z4FrsKTk',
        album_name: 'Love Breakups Zindagi'
      },
      {
        id: 1897,
        song_name: 'Aa Raha Hoon Palat Ke',
        song_link: 'DKEHQAPUk-w',
        album_name: 'Don 2'
      },
      {
        id: 1929,
        song_name: 'Nakkaddwaley Disco, Udhaarwaley Khisko',
        song_link: 'hA45-qlFYPk',
        album_name: 'Delhi Belly'
      },
      {
        id: 1962,
        song_name: 'Jhak Maar Ke',
        song_link: 'R5CxtjmrIE4',
        album_name: 'Desi Boyz'
      },
      {
        id: 592,
        song_name: 'Twinkle Twinkle',
        song_link: 'FgzCCmOmpgQ',
        album_name: 'The Dirty Picture'
      },
      {
        id: 1943,
        song_name: 'Ishq Tere Jalwe',
        song_link: 'KGPZbMx8D5Q',
        album_name: 'Yeh Saali Zindagi'
      },
      {
        id: 1975,
        song_name: 'Fatal Attraction',
        song_link: '5BeP9qqPdDU',
        album_name: 'Ladies vs. Ricky Bahl'
      },
      {
        id: 1995,
        song_name: 'Sarphira Sa Hai Dil',
        song_link: 'F6Ahhuh0tvU',
        album_name: 'Love U... Mr. Kalakaar!'
      },
      {
        id: 1923,
        song_name: 'Yun Hi',
        song_link: 'hKEEbtMkKms',
        album_name: 'Tanu Weds Manu'
      },
      {
        id: 1956,
        song_name: 'Dheaon Dheaon',
        song_link: 'p0KqxGIOWVo',
        album_name: 'Mujhse Fraaandship Karoge'
      },
      {
        id: 641,
        song_name: 'Bhare Naina ',
        song_link: 'lHC1xPUgP5Q',
        album_name: 'Ra.One'
      },
      {
        id: 1936,
        song_name: 'Darling',
        song_link: 'viBaS0fKPGc',
        album_name: '7 Khoon Maaf'
      },
      {
        id: 1969,
        song_name: 'Roshanee',
        song_link: 'WOJ-xXJ3FGM',
        album_name: 'Aarakshan'
      },
      {
        id: 2008,
        song_name: 'Chill Maro',
        song_link: '_-Waky5Csns',
        album_name: 'Double Dhamaal'
      },
      {
        id: 1904,
        song_name: 'Senorita',
        song_link: 'YdVPHlpMpsw',
        album_name: 'Zindagi Na Milegi Dobara'
      },
      {
        id: 1917,
        song_name: 'Chak Glassi',
        song_link: 'xvpjIj2FyzA',
        album_name: 'Pyaar Ka Punchnama'
      },
      {
        id: 1950,
        song_name: 'Aa Rela Hai Apun',
        song_link: 'jD-QEV3d8aM',
        album_name: 'Chillar Party'
      },
      {
        id: 1982,
        song_name: 'Sau Baar',
        song_link: 'J10u7SmxI1g',
        album_name: 'Yamla Pagla Deewana'
      },
      {
        id: 1989,
        song_name: 'Char Baj Gaye (Party Abhi Baaki Hai)',
        song_link: 'cj1jnyy3Egw',
        album_name: 'F.A.L.T.U'
      },
      {
        id: 2002,
        song_name: 'Jab Se Mein Choti Thi',
        song_link: 'Ey7MsOnp-HE',
        album_name: 'Not a Love Story'
      },
      {
        id: 1898,
        song_name: 'Zara Dil Ko Thaam Lo',
        song_link: 'Cm0bRl9L7iA',
        album_name: 'Don 2'
      },
      {
        id: 1930,
        song_name: 'Saigal Blues',
        song_link: 'nLDZ8Pq59xQ',
        album_name: 'Delhi Belly'
      },
      {
        id: 1963,
        song_name: 'Allah Maaf Kare',
        song_link: 'sm2hNJ9c8M8',
        album_name: 'Desi Boyz'
      },
      {
        id: 593,
        song_name: 'Honeymoon Ki Raat',
        song_link: 'e8H_Rn-BsME',
        album_name: 'The Dirty Picture'
      },
      {
        id: 1944,
        song_name: 'Kaise Kahein Alvida',
        song_link: 'dJKpWtY8UUM',
        album_name: 'Yeh Saali Zindagi'
      },
      {
        id: 1976,
        song_name: 'I Love You',
        song_link: 'v7tfNl0SyvQ',
        album_name: 'Bodyguard'
      },
      {
        id: 642,
        song_name: 'Dil Daara ',
        song_link: 'OA7yVcqlX_Y',
        album_name: 'Ra.One'
      },
      {
        id: 1996,
        song_name: 'Reaching For The Rainbow',
        song_link: 'F6Ahhuh0tvU',
        album_name: 'Love U... Mr. Kalakaar!'
      },
      {
        id: 1924,
        song_name: 'Piya',
        song_link: 'tBCAw6_1COI',
        album_name: 'Tanu Weds Manu'
      },
      {
        id: 1957,
        song_name: 'Baatein Shuru',
        song_link: 'NGiLvjXrLJY',
        album_name: 'Mujhse Fraaandship Karoge'
      },
      {
        id: 1937,
        song_name: 'Bekaraan',
        song_link: 'UBIXCrDO10w',
        album_name: '7 Khoon Maaf'
      },
      {
        id: 1970,
        song_name: 'Saans Albeli',
        song_link: '0gk53X1oos8',
        album_name: 'Aarakshan'
      },
      {
        id: 2009,
        song_name: 'Pardaah Nasheen',
        song_link: 'COv4VJf_dTQ',
        album_name: 'Rascals'
      },
      {
        id: 1905,
        song_name: 'Der Lagi Lekin',
        song_link: '3xpXTJvG2hc',
        album_name: 'Zindagi Na Milegi Dobara'
      },
      {
        id: 1918,
        song_name: 'Baanwre',
        song_link: 'qiqWINUDjvA',
        album_name: 'Pyaar Ka Punchnama'
      },
      {
        id: 1951,
        song_name: 'Chatte Batte',
        song_link: '_1NqYDqUzm0',
        album_name: 'Chillar Party'
      },
      {
        id: 1983,
        song_name: 'Chamki Jawaani',
        song_link: 'CvhXf_wa5fQ',
        album_name: 'Yamla Pagla Deewana'
      },
      {
        id: 1990,
        song_name: 'Rab Sab Se Sona',
        song_link: '5t2TZhQ8gMs',
        album_name: 'F.A.L.T.U'
      },
      {
        id: 2003,
        song_name: 'Rangeela Re Nals',
        song_link: 'ikwCuQz_diA',
        album_name: 'Not a Love Story'
      },
      {
        id: 1899,
        song_name: 'Hai Ye Maya',
        song_link: 'sIsojuqrF8w',
        album_name: 'Don 2'
      },
      {
        id: 1931,
        song_name: 'Bedardi Raja',
        song_link: 'Ik-OUvMtIaE',
        album_name: 'Delhi Belly'
      },
      {
        id: 1964,
        song_name: 'Let It Be',
        song_link: '_Xm-xyR1VYU',
        album_name: 'Desi Boyz'
      },
      {
        id: 594,
        song_name: 'Ishq Sufiyana (Female)',
        song_link: 'lQi7Kzy964g',
        album_name: 'The Dirty Picture'
      },
      {
        id: 1945,
        song_name: 'Sajh Dhaj Ke',
        song_link: 'C87WJjQKLNI&vl=en',
        album_name: 'Mausam'
      },
      {
        id: 1977,
        song_name: 'Desi Beat',
        song_link: 'XBHd4omXrJw',
        album_name: 'Bodyguard'
      },
      {
        id: 643,
        song_name: 'Chammak Challo ',
        song_link: 'lxB-ki-qE64',
        album_name: 'Ra.One'
      },
      {
        id: 1997,
        song_name: 'Tera Intezaar',
        song_link: 'vc3WznCAViU',
        album_name: 'Love U... Mr. Kalakaar!'
      },
      {
        id: 1925,
        song_name: 'Rangrez',
        song_link: 'bY_LRayav14',
        album_name: 'Tanu Weds Manu'
      },
      {
        id: 1958,
        song_name: 'Chhoo Le',
        song_link: '86aioOxNjsw',
        album_name: 'Mujhse Fraaandship Karoge'
      },
      {
        id: 588,
        song_name: 'Phir Mohabbat',
        song_link: 'QrZQe78xkn4',
        album_name: 'Murder 2'
      },
      {
        id: 1938,
        song_name: "O' Mama",
        song_link: 'KKeJh0aD7Hk',
        album_name: '7 Khoon Maaf'
      },
      {
        id: 1971,
        song_name: 'Aadat Se Majboor',
        song_link: 'sB-S5LBU1eA',
        album_name: 'Ladies vs. Ricky Bahl'
      },
      {
        id: 2010,
        song_name: 'Shake it Saiyyan',
        song_link: 'fdF9ucJQxLw',
        album_name: 'Rascals'
      },
      {
        id: 1906,
        song_name: 'Sooraj Ki Baahon Mein',
        song_link: 'nj-UhS4ZtQg',
        album_name: 'Zindagi Na Milegi Dobara'
      },
      {
        id: 1919,
        song_name: 'Ishq Na Kariyo Kakke',
        song_link: '6NN62PEnoMw',
        album_name: 'Pyaar Ka Punchnama'
      },
      {
        id: 1952,
        song_name: 'Ziddi Piddi',
        song_link: 'DqezFeEOyRE',
        album_name: 'Chillar Party'
      },
      {
        id: 1984,
        song_name: 'Son Titariya',
        song_link: 'Yvix61Q4Tc0',
        album_name: 'Yamla Pagla Deewana'
      },
      {
        id: 1991,
        song_name: 'Awaaz',
        song_link: 'vUa-uRw6yWI',
        album_name: 'F.A.L.T.U'
      },
      {
        id: 1763,
        song_name: 'Chori Kiya Re Jiya',
        song_link: 'FeNA4VaaZCg',
        album_name: 'Dabangg'
      },
      {
        id: 1774,
        song_name: 'Sau Gram Zindagi',
        song_link: 'saH2Shlup1Q',
        album_name: 'Guzaarish'
      },
      {
        id: 1799,
        song_name: 'Pee Loon',
        song_link: 'D8XFTglfSMg',
        album_name: 'Once Upon a Time in Mumbai'
      },
      {
        id: 1825,
        song_name: 'Naiyn Tere',
        song_link: 'uR10OUltemo',
        album_name: 'Khelein Hum Jee Jaan Sey'
      },
      {
        id: 1857,
        song_name: 'Dekha Tujhay Jo Pehli Baar',
        song_link: 'j1bSYNO4ieo',
        album_name: 'Sadiyaan: Boundaries Divide... Love Unites'
      },
      {
        id: 1744,
        song_name: 'Naav',
        song_link: '7Zqk0YZAawI',
        album_name: 'Udaan'
      },
      {
        id: 1806,
        song_name: 'Jaane Ye Kya Hua',
        song_link: 'HEAmcT5Gy_c',
        album_name: 'Karthik Calling Karthik'
      },
      {
        id: 1880,
        song_name: 'Main Kaun Hoon',
        song_link: '_YJ-m3V4h_Q',
        album_name: 'Lamhaa: The Untold Story of Kashmir'
      },
      {
        id: 1838,
        song_name: 'Happy Ending',
        song_link: 'B8jxs7hhTzI',
        album_name: 'Tees Maar Khan'
      },
      {
        id: 1871,
        song_name: 'Banware Se Pooche Banwariya',
        song_link: 'PBVx-8sS3mk',
        album_name: 'Hum Tum Aur Ghost'
      },
      {
        id: 1751,
        song_name: 'Ibn - E - Batuta (Nucleya Remix)[Remix By Mika Singh]',
        song_link: 'sZV3hImzvR8',
        album_name: 'Ishqiya'
      },
      {
        id: 1769,
        song_name: 'Ishq Barse',
        song_link: 'h3zPEjr_4A8',
        album_name: 'Raajneeti'
      },
      {
        id: 1787,
        song_name: 'Papa Jag Jayega (Insane Insomniac mix)',
        song_link: 'TIMi2_VFYI0',
        album_name: 'Housefull'
      },
      {
        id: 1793,
        song_name: 'Zindagi Do Pal Ki',
        song_link: 'XG86T2jNc',
        album_name: 'Kites'
      },
      {
        id: 1819,
        song_name: 'By the Way',
        song_link: '23p7CXjMdkA',
        album_name: 'Aisha'
      },
      {
        id: 1893,
        song_name: 'Do Nishaaniyan',
        song_link: 'tnBw1RQ4sG4',
        album_name: 'Jhootha Hi Sahi'
      },
      {
        id: 1851,
        song_name: 'Atithi Tum Kab Jaoge',
        song_link: 'AnfTsH-Y-s',
        album_name: 'Atithi Tum Kab Jaoge?'
      },
      {
        id: 2958,
        song_name: 'Sajdaa',
        song_link: '3rPEWcY6Oww',
        album_name: 'My Name Is Khan'
      },
      {
        id: 1760,
        song_name: 'Chola Maati Ke Ram',
        song_link: 'LL0ia5Acrqo',
        album_name: 'Peepli (Live)'
      },
      {
        id: 1865,
        song_name: 'Alisha',
        song_link: 'UT_WZpZyF2M',
        album_name: 'Pyaar Impossible!'
      },
      {
        id: 2927,
        song_name: 'Aazaadiyan',
        song_link: '3iCauE_5gMY',
        album_name: 'Udaan'
      },
      {
        id: 2955,
        song_name: 'Humka Peeni Hai',
        song_link: 'ujirsatVZ_g',
        album_name: 'Dabangg'
      },
      {
        id: 1781,
        song_name: 'Daayein Baayein',
        song_link: '0aKe42Oaoy0',
        album_name: 'Guzaarish'
      },
      {
        id: 2943,
        song_name: 'I Am in Love',
        song_link: 'BDQG49CgQL4',
        album_name: 'Once Upon a Time in Mumbai'
      },
      {
        id: 1874,
        song_name: 'Apna Har Din',
        song_link: 'QHfY8jDYpHI',
        album_name: 'Golmaal 3'
      },
      {
        id: 1832,
        song_name: 'Beyond The Snake',
        song_link: 'u_CDjQqI2SY',
        album_name: 'Hisss'
      },
      {
        id: 2963,
        song_name: 'Tarkeebein',
        song_link: 'fXHD2SFm52c',
        album_name: 'Band Baaja Baaraat'
      },
      {
        id: 1813,
        song_name: 'I Feel Good',
        song_link: 'J4_XiSN3AM8',
        album_name: 'Anjaana Anjaani'
      },
      {
        id: 1887,
        song_name: 'Mast Punjabi',
        song_link: 'nogCvtsFAdk',
        album_name: 'No Problem'
      },
      {
        id: 1845,
        song_name: 'Bahara',
        song_link: '7N74i_rAfFE',
        album_name: 'I Hate Luv Storys'
      },
      {
        id: 1754,
        song_name: "I Can't Hold It",
        song_link: '9aXqUE2L_oM',
        album_name: 'LSD: Love, Sex Aur Dhokha'
      },
      {
        id: 2935,
        song_name: 'Ishq Barse (The Bombay Bounce club mix)',
        song_link: 'npk9dmJDsnI',
        album_name: 'Raajneeti'
      },
      {
        id: 1764,
        song_name: 'Hud Hud Dabangg',
        song_link: '9fuBcEpMZF0',
        album_name: 'Dabangg'
      },
      {
        id: 1775,
        song_name: 'Tera Zikr',
        song_link: 'YUK6Xqy_1QI',
        album_name: 'Guzaarish'
      },
      {
        id: 1800,
        song_name: 'Tum Jo Aaye Zindagi Mein',
        song_link: 'kcYjF07It50',
        album_name: 'Once Upon a Time in Mumbai'
      },
      {
        id: 1826,
        song_name: 'Sapne Saloney',
        song_link: '4tYQFP2dnqA',
        album_name: 'Khelein Hum Jee Jaan Sey'
      },
      {
        id: 1858,
        song_name: 'Aankhon Mein Neendein',
        song_link: 'xk5NqP70V0Q',
        album_name: 'We Are Family'
      },
      {
        id: 1745,
        song_name: '9ClvggZ',
        song_link: '9ClvggZ',
        album_name: 'Udaan'
      },
      {
        id: 1807,
        song_name: 'Kaisi Hai Ye Udaasi',
        song_link: 'An9lue176Og',
        album_name: 'Karthik Calling Karthik'
      },
      {
        id: 1881,
        song_name: 'Saajnaa',
        song_link: 'zlMTqjc37Sc',
        album_name: 'Lamhaa: The Untold Story of Kashmir'
      },
      {
        id: 1839,
        song_name: 'Gundello',
        song_link: 'QSgozBI5CbY',
        album_name: 'Rakhta Charitra'
      },
      {
        id: 1872,
        song_name: 'Kal Tum The Yahan',
        song_link: 'Rm6bwn47YF4',
        album_name: 'Hum Tum Aur Ghost'
      },
      {
        id: 1752,
        song_name: 'Dil To Bachcha Hai (Remix By Clinton Cerejo)',
        song_link: 'WwF1MN9h8sM',
        album_name: 'Ishqiya'
      },
      {
        id: 1770,
        song_name: 'Dhan Dhan Dharti',
        song_link: 'lIiXZeYZD4',
        album_name: 'Raajneeti'
      },
      {
        id: 1788,
        song_name: 'Ainvayi Ainvayi',
        song_link: 'pElk1ShPrcE',
        album_name: 'Band Baaja Baaraat'
      },
      {
        id: 1794,
        song_name: 'Dil Kyun Yeh Mera',
        song_link: 'x34L1CXb03s',
        album_name: 'Kites'
      },
      {
        id: 1820,
        song_name: 'Bas Ek Soch',
        song_link: 'LUmJOikvMzA',
        album_name: 'Tere Bin Laden'
      },
      {
        id: 1894,
        song_name: 'Pam Para',
        song_link: 'rezj6ahNWHM',
        album_name: 'Jhootha Hi Sahi'
      },
      {
        id: 1852,
        song_name: 'Jyoti Jalaile',
        song_link: 'hOe4HVZz6WE',
        album_name: 'Atithi Tum Kab Jaoge?'
      },
      {
        id: 2959,
        song_name: 'Noor e Khuda',
        song_link: 'JJ5r5Z6G2Zo',
        album_name: 'My Name Is Khan'
      },
      {
        id: 2947,
        song_name: 'Des Mera',
        song_link: 'CBtiEZNQimI',
        album_name: 'Peepli (Live)'
      },
      {
        id: 1866,
        song_name: 'Pyaar Impossible',
        song_link: 'Bjd9hbDSFt0&vl=en',
        album_name: 'Pyaar Impossible!'
      },
      {
        id: 2928,
        song_name: 'Theme',
        song_link: 'u78GFWuK2Hc',
        album_name: 'Udaan'
      },
      {
        id: 2956,
        song_name: 'Tere Mast Mast Do Nain',
        song_link: '6b0W4W10_Zk',
        album_name: 'Dabangg'
      },
      {
        id: 1782,
        song_name: "Oh Girl You're Mine...",
        song_link: 'QxfTgQNwywU',
        album_name: 'Housefull'
      },
      {
        id: 2944,
        song_name: 'Parda',
        song_link: 'MEr2NPhCyn0',
        album_name: 'Once Upon a Time in Mumbai'
      },
      {
        id: 1875,
        song_name: 'Desi Kali',
        song_link: 'InlbkYfCGU0',
        album_name: 'Golmaal 3'
      },
      {
        id: 1833,
        song_name: 'I Got The Poison',
        song_link: '1V7hURvTsaQ',
        album_name: 'Hisss'
      },
      {
        id: 2964,
        song_name: 'Aadha Ishq',
        song_link: 'AWjQgUDfZG0',
        album_name: 'Band Baaja Baaraat'
      },
      {
        id: 1814,
        song_name: 'Suno Aisha',
        song_link: 'fAzO3s7Dgnw',
        album_name: 'Aisha'
      },
      {
        id: 1888,
        song_name: 'Nana Chi Taang',
        song_link: '6QEDCNLc0AI',
        album_name: 'Khatta Meetha'
      },
      {
        id: 1846,
        song_name: 'Sadka',
        song_link: '9hIgYEF42so',
        album_name: 'I Hate Luv Storys'
      },
      {
        id: 1737,
        song_name: 'Sajdaa',
        song_link: '3rPEWcY6Oww',
        album_name: 'My Name Is Khan'
      },
      {
        id: 1755,
        song_name: 'Mohabbat Bollywood Style',
        song_link: '4YTGjgnCqvk',
        album_name: 'LSD: Love, Sex Aur Dhokha'
      },
      {
        id: 2936,
        song_name: 'Mora Piya (Twilight Mix)',
        song_link: 'qoSB4G93LQE',
        album_name: 'Raajneeti'
      },
      {
        id: 1765,
        song_name: 'Humka Peeni Hai',
        song_link: 'DXa4ArvAB90',
        album_name: 'Dabangg'
      },
      {
        id: 1776,
        song_name: 'Saiba',
        song_link: 'U7SdbwosLcA',
        album_name: 'Guzaarish'
      },
      {
        id: 1801,
        song_name: 'I Am in Love',
        song_link: 'BDQG49CgQL4&vl=en',
        album_name: 'Once Upon a Time in Mumbai'
      },
      {
        id: 1827,
        song_name: 'Taali',
        song_link: 'MxAguhDG4fY',
        album_name: 'Veer'
      },
      {
        id: 1859,
        song_name: "Dil Khol Ke Let's Rock",
        song_link: 'q7PIYmklgyk',
        album_name: 'We Are Family'
      },
      {
        id: 1746,
        song_name: 'Aazaadiyan',
        song_link: '3iCauE_5gMY',
        album_name: 'Udaan'
      },
      {
        id: 1808,
        song_name: 'Anjaana Anjaani Ki Kahani',
        song_link: '7Z0qK1RvzI0',
        album_name: 'Anjaana Anjaani'
      },
      {
        id: 1882,
        song_name: 'Zameen-O-Aasmaa',
        song_link: 'uZILT5noTcI',
        album_name: 'Lamhaa: The Untold Story of Kashmir'
      },
      {
        id: 1840,
        song_name: 'Dorikithe Chastavu',
        song_link: 'SWqkitNvUeQ',
        album_name: 'Rakhta Charitra'
      },
      {
        id: 2937,
        song_name: 'Dil To Bachcha Hai',
        song_link: 'WI70m8-WRto',
        album_name: 'Ishqiya'
      },
      {
        id: 2930,
        song_name: 'Bheegi Si Bhaagi Si',
        song_link: 'kQYt45Lmmbo',
        album_name: 'Raajneeti'
      },
      {
        id: 1789,
        song_name: 'Tarkeebein',
        song_link: 'fXHD2SFm52c&vl=en',
        album_name: 'Band Baaja Baaraat'
      },
      {
        id: 1795,
        song_name: 'Tum Bhi Ho Wahi',
        song_link: 'wdBQhzUru1U',
        album_name: 'Kites'
      },
      {
        id: 1821,
        song_name: 'I Love Amreeka',
        song_link: '5Goj6mLhSxM',
        album_name: 'Tere Bin Laden'
      },
      {
        id: 1895,
        song_name: "I'll Be Waiting",
        song_link: '2Yv0Jd8eGQQ',
        album_name: 'Jhootha Hi Sahi'
      },
      {
        id: 1853,
        song_name: 'Aaja Aaja',
        song_link: '8G3xpN5Kcv4',
        album_name: 'Atithi Tum Kab Jaoge?'
      },
      {
        id: 2960,
        song_name: 'Allah Hi Rahem',
        song_link: 'WgIBgC3a4Vs',
        album_name: 'My Name Is Khan'
      },
      {
        id: 2948,
        song_name: 'Mehngai Dayain',
        song_link: 'BRTHMoh7eS8',
        album_name: 'Peepli (Live)'
      },
      {
        id: 1834,
        song_name: 'Tees Maar Khan',
        song_link: '8eqcLbx6jwI',
        album_name: 'Tees Maar Khan'
      },
      {
        id: 1867,
        song_name: 'You And Me',
        song_link: 'WPUOk3QR8tQ',
        album_name: 'Pyaar Impossible!'
      },
      {
        id: 1747,
        song_name: 'Dil To Bachcha Hai',
        song_link: 'BlHjfL0pcsw',
        album_name: 'Ishqiya'
      },
      {
        id: 2957,
        song_name: 'Munni Badnaam (Remix By Dj Megha,Jaggi)',
        song_link: 'oGiI7Wo0IXA',
        album_name: 'Dabangg'
      },
      {
        id: 1783,
        song_name: 'Papa Jag Jayega',
        song_link: 'vzKXcLv80Y4',
        album_name: 'Housefull'
      },
      {
        id: 2945,
        song_name: 'Babu Rao Mast Hai',
        song_link: 'TpITWDciuw8',
        album_name: 'Once Upon a Time in Mumbai'
      },
      {
        id: 1876,
        song_name: 'Disco Dancer',
        song_link: '1tdEWbOM48',
        album_name: 'Golmaal 3'
      },
      {
        id: 2965,
        song_name: 'Dum Dum',
        song_link: 'w3MMMgxjLFk',
        album_name: 'Band Baaja Baaraat'
      },
      {
        id: 1815,
        song_name: 'Gal Mitthi Mitthi',
        song_link: 'ZHsKQ_R0ZqI',
        album_name: 'Aisha'
      },
      {
        id: 1889,
        song_name: 'Sajde',
        song_link: 'GaaNn-zrxUU',
        album_name: 'Khatta Meetha'
      },
      {
        id: 1847,
        song_name: 'O Mere Khuda',
        song_link: 'qfNsfz9a-0I',
        album_name: 'Prince'
      },
      {
        id: 1738,
        song_name: 'Noor e Khuda',
        song_link: 'JJ5r5Z6G2Zo',
        album_name: 'My Name Is Khan'
      },
      {
        id: 1756,
        song_name: 'Tu Gandi',
        song_link: 'Tu Gandi',
        album_name: 'LSD: Love, Sex Aur Dhokha'
      },
      {
        id: 1771,
        song_name: 'Isak Se Meetha',
        song_link: 'GOsfk9NX0c',
        album_name: 'Aakrosh'
      },
      {
        id: 2951,
        song_name: 'Tere Mast Mast Do Nain',
        song_link: '6b0W4W10_Zk',
        album_name: 'Dabangg'
      },
      {
        id: 1777,
        song_name: 'Jaane Kiske Khwaab',
        song_link: '8CURnd96ZIY',
        album_name: 'Guzaarish'
      },
      {
        id: 1802,
        song_name: 'Parda',
        song_link: 'MEr2NPhCyn0',
        album_name: 'Once Upon a Time in Mumbai'
      },
      {
        id: 1828,
        song_name: 'Surili Akhiyon Wale (From "Veer")',
        song_link: 'GjSOKZ4juzs',
        album_name: 'Veer'
      },
      {
        id: 1861,
        song_name: 'Akela Dil',
        song_link: 'rGrnqSDtJ9w',
        album_name: 'Dulha Mil Gaya'
      },
      {
        id: 2923,
        song_name: 'Kahaani (Aankhon Ke Pardon Pe)',
        song_link: 'y00l9ZufLbU',
        album_name: 'Udaan'
      },
      {
        id: 1809,
        song_name: 'Hairat',
        song_link: '3dSvgGCDnOg',
        album_name: 'Anjaana Anjaani'
      },
      {
        id: 1883,
        song_name: 'No Problem',
        song_link: 'DVkkYlQNmbc',
        album_name: 'No Problem'
      },
      {
        id: 1841,
        song_name: 'Dabbunoda',
        song_link: 'Zidgb5tN_YA',
        album_name: 'Rakhta Charitra'
      },
      {
        id: 2938,
        song_name: 'Ibn - E - Batuta',
        song_link: 'Bn7LkiAmskA',
        album_name: 'Ishqiya'
      },
      {
        id: 2931,
        song_name: 'Mora Piya',
        song_link: 'Yq8Iwzi3dlQ',
        album_name: 'Raajneeti'
      },
      {
        id: 1790,
        song_name: 'dha Ishq',
        song_link: 'AWjQgUDfZG0',
        album_name: 'Band Baaja Baaraat'
      },
      {
        id: 1796,
        song_name: 'Kites in the Sky',
        song_link: 'vsAUTzbjXHk',
        album_name: 'Kites'
      },
      {
        id: 1822,
        song_name: 'Kukudu',
        song_link: 'uR-nO8Iptic',
        album_name: 'Tere Bin Laden'
      },
      {
        id: 1854,
        song_name: 'Jadu Nasha Ehsas Kya',
        song_link: 'mw2xv8rh7ww',
        album_name: 'Sadiyaan: Boundaries Divide... Love Unites'
      },
      {
        id: 2961,
        song_name: 'Rang De',
        song_link: 'AqAzKpvXiDo',
        album_name: 'My Name Is Khan'
      },
      {
        id: 2949,
        song_name: 'Zindagi Se Darte Ho',
        song_link: 'hlvg14dX7Zk',
        album_name: 'Peepli (Live)'
      },
      {
        id: 1835,
        song_name: 'Sheila Ki Jawani',
        song_link: 'ZTmF2v59CtI',
        album_name: 'Tees Maar Khan'
      },
      {
        id: 1868,
        song_name: '10 on 10',
        song_link: 'jEUxlqybO0E',
        album_name: 'Pyaar Impossible!'
      },
      {
        id: 1748,
        song_name: 'Ibn - E - Batuta',
        song_link: 'Bn7LkiAmskA',
        album_name: 'Ishqiya'
      },
      {
        id: 1766,
        song_name: 'Baaja Bajya',
        song_link: 'wUHwP-Q11Ig',
        album_name: 'Do Dooni Chaar'
      },
      {
        id: 1784,
        song_name: 'Aapka Kya Hoga (Dhanno)',
        song_link: "I Don't Know What to Do",
        album_name: 'Housefull'
      },
      {
        id: 2946,
        song_name: 'Tum Jo Aaye Zindagi Mein (reprise)',
        song_link: 'ZYixFUow73w',
        album_name: 'Once Upon a Time in Mumbai'
      },
      {
        id: 1877,
        song_name: 'Yaad Aa Raha Hai',
        song_link: 'NGXqYNsFRlA',
        album_name: 'Golmaal 3'
      },
      {
        id: 2966,
        song_name: 'Mitra',
        song_link: 'wu7MHKKcWVA',
        album_name: 'Band Baaja Baaraat'
      },
      {
        id: 1816,
        song_name: 'Sham',
        song_link: 'fFyXcX-s0C8',
        album_name: 'Aisha'
      },
      {
        id: 1890,
        song_name: 'Bull Shit',
        song_link: 'ilr--_2hzcE',
        album_name: 'Khatta Meetha'
      },
      {
        id: 1848,
        song_name: 'Tere Liye',
        song_link: 'X7L4wvljHhM&vl=en',
        album_name: 'Prince'
      },
      {
        id: 1739,
        song_name: 'Tere Naina',
        song_link: 'qYjPxdLIuk0',
        album_name: 'My Name Is Khan'
      },
      {
        id: 1757,
        song_name: 'Des Mera',
        song_link: 'CBtiEZNQimI',
        album_name: 'Peepli (Live)'
      },
      {
        id: 1772,
        song_name: 'Saude Bazi',
        song_link: 'IOuiCRVukF0',
        album_name: 'Aakrosh'
      },
      {
        id: 2924,
        song_name: 'Geet (Kuchh Naya To Zaroor Hai)',
        song_link: 'eHumVdQ74XE',
        album_name: 'Udaan'
      },
      {
        id: 2952,
        song_name: 'Munni Badnaam',
        song_link: 'Jn5hsfbhWx4',
        album_name: 'Dabangg'
      },
      {
        id: 1778,
        song_name: 'Udi',
        song_link: 'hbP3vLetsnM',
        album_name: 'Guzaarish'
      },
      {
        id: 1803,
        song_name: 'Babu Rao Mast Hai',
        song_link: 'TpITWDciuw8',
        album_name: 'Once Upon a Time in Mumbai'
      },
      {
        id: 1829,
        song_name: 'Salaam Aaya (From "Veer")',
        song_link: 'T5t5adK4Qxo',
        album_name: 'Veer'
      },
      {
        id: 1862,
        song_name: 'Aaja Aaja Mera Ranjhna',
        song_link: 'Ysu86eTV7A8',
        album_name: 'Dulha Mil Gaya'
      },
      {
        id: 1791,
        song_name: 'Mitra',
        song_link: 'wu7MHKKcWVA',
        album_name: 'Band Baaja Baaraat'
      },
      {
        id: 1810,
        song_name: 'Aas Paas Khuda',
        song_link: 'jAUSF4_ygJg',
        album_name: 'Anjaana Anjaani'
      },
      {
        id: 1884,
        song_name: 'Shakira ',
        song_link: 'nEPqs6GQuU0',
        album_name: 'No Problem'
      },
      {
        id: 1842,
        song_name: 'Jab Mila Tu',
        song_link: 'UVKAnn-fo1M',
        album_name: 'I Hate Luv Storys'
      },
      {
        id: 2939,
        song_name: 'Ab Mujhe Koi',
        song_link: 'gLeumI2AmqM',
        album_name: 'Ishqiya'
      },
      {
        id: 2932,
        song_name: 'Ishq Barse',
        song_link: 'h3zPEjr_4A8',
        album_name: 'Raajneeti'
      },
      {
        id: 1797,
        song_name: 'Fire',
        song_link: '3T4iwKJ0_eM',
        album_name: 'Kites'
      },
      {
        id: 1823,
        song_name: 'Shor Sharaba',
        song_link: 'AjcUpsHztog',
        album_name: 'Tere Bin Laden'
      },
      {
        id: 1855,
        song_name: 'Taron Bhari Hai Ye Raat Sajaan',
        song_link: 'QI802OSQ0hc',
        album_name: 'Sadiyaan: Boundaries Divide... Love Unites'
      },
      {
        id: 1742,
        song_name: 'Kahaani (Aankhon Ke Pardon Pe)',
        song_link: 'y00l9ZufLbU',
        album_name: 'Udaan'
      },
      {
        id: 1761,
        song_name: 'Tere Mast Mast Do Nain',
        song_link: '6b0W4W10_Zk',
        album_name: 'Dabangg'
      },
      {
        id: 1836,
        song_name: 'Wallah Re Wallah',
        song_link: 'lh8qHDQJp4E',
        album_name: 'Tees Maar Khan'
      },
      {
        id: 1869,
        song_name: 'Ek Thi Ladki',
        song_link: 'FK6KpCqcylA',
        album_name: 'Pyaar Impossible!'
      },
      {
        id: 1749,
        song_name: 'Ab Mujhe Koi',
        song_link: 'vSYbQlhMEGI',
        album_name: 'Ishqiya'
      },
      {
        id: 1767,
        song_name: 'Bheegi Si Bhaagi Si',
        song_link: 'yHWPO9DDnsk',
        album_name: 'Raajneeti'
      },
      {
        id: 1785,
        song_name: 'Loser',
        song_link: 'ralv2DjK0-g',
        album_name: 'Housefull'
      },
      {
        id: 1804,
        song_name: 'Hey Ya!',
        song_link: 'eyTRJAg6p0w',
        album_name: 'Karthik Calling Karthik'
      },
      {
        id: 1878,
        song_name: 'Madno',
        song_link: 'kEcOAH6dTZA',
        album_name: 'Lamhaa: The Untold Story of Kashmir'
      },
      {
        id: 2967,
        song_name: 'Baari Barsi',
        song_link: '-h3enp1vbnI',
        album_name: 'Band Baaja Baaraat'
      },
      {
        id: 1817,
        song_name: 'Behke Behke',
        song_link: '2zVLY4XUNaw',
        album_name: 'Aisha'
      },
      {
        id: 1891,
        song_name: 'Aila Re Aila',
        song_link: 'tlkWnGOm34k',
        album_name: 'Khatta Meetha'
      },
      {
        id: 1849,
        song_name: 'Kaun Hoon Main',
        song_link: '8nt4Kr8CPNg',
        album_name: 'Prince'
      },
      {
        id: 1740,
        song_name: 'Allah Hi Rahem',
        song_link: '-LraF938Ot0',
        album_name: 'My Name Is Khan'
      },
      {
        id: 1758,
        song_name: 'Mehngai Dayain',
        song_link: 'LEJU0_0e7bw',
        album_name: 'Peepli (Live)'
      },
      {
        id: 1773,
        song_name: 'Sasural Munia',
        song_link: 'oIMMg0l3rSw',
        album_name: 'Aakrosh'
      },
      {
        id: 1863,
        song_name: 'Magar Meri Jaan',
        song_link: '22DPXxtYuiw',
        album_name: 'Dulha Mil Gaya'
      },
      {
        id: 2925,
        song_name: 'Naav',
        song_link: '7Zqk0YZAaw',
        album_name: 'Udaan'
      },
      {
        id: 2953,
        song_name: 'Chori Kiya Re Jiya',
        song_link: 'FeNA4VaaZCg',
        album_name: 'Dabangg'
      },
      {
        id: 1779,
        song_name: 'Keh Na Sakoon',
        song_link: 'fiwq3C0mzvg',
        album_name: 'Guzaarish'
      },
      {
        id: 2941,
        song_name: 'Pee Loon',
        song_link: 'D8XFTglfSMg',
        album_name: 'Once Upon a Time in Mumbai'
      },
      {
        id: 1830,
        song_name: 'Meherbaniyan',
        song_link: 'pEfsrieYjMg',
        album_name: 'Veer'
      },
      {
        id: 1792,
        song_name: 'Baari Barsi',
        song_link: 'h3enp1vbnI',
        album_name: 'Band Baaja Baaraat'
      },
      {
        id: 1811,
        song_name: 'Tumse Hi Tumse',
        song_link: 'KWCLOpaZeLc',
        album_name: 'Anjaana Anjaani'
      },
      {
        id: 1885,
        song_name: 'Babe Di Kripa',
        song_link: 'FS1Yn_P_S3I',
        album_name: 'No Problem'
      },
      {
        id: 1843,
        song_name: 'Bin Tere',
        song_link: 'hRATRz_vDTw',
        album_name: 'I Hate Luv Storys'
      },
      {
        id: 2940,
        song_name: 'Badi Dheere Jali',
        song_link: 'FwB1gXyEnJY',
        album_name: 'Ishqiya'
      },
      {
        id: 2933,
        song_name: 'Dhan Dhan Dharti',
        song_link: 'STZa0Iic6F0',
        album_name: 'Raajneeti'
      },
      {
        id: 1798,
        song_name: 'Zindagi Do Pal Ki (remix)',
        song_link: 'fqdS-ZLnFfs',
        album_name: 'Kites'
      },
      {
        id: 1824,
        song_name: 'Yeh Des Hai Mera',
        song_link: 'IH_dMR47G3s',
        album_name: 'Khelein Hum Jee Jaan Sey'
      },
      {
        id: 1856,
        song_name: 'Sargoshiyo Ke Kya Silsile Hai',
        song_link: 'rtAJc0BiIBI',
        album_name: 'Sadiyaan: Boundaries Divide... Love Unites'
      },
      {
        id: 1743,
        song_name: 'Geet (Kuchh Naya To Zaroor Hai)',
        song_link: 'eHumVdQ74XE',
        album_name: 'Udaan'
      },
      {
        id: 1762,
        song_name: 'Munni Badnaam',
        song_link: 'Jn5hsfbhWx4',
        album_name: 'Dabangg'
      },
      {
        id: 1879,
        song_name: 'Salaam Zindagi',
        song_link: 'k_NlYVTrGz0',
        album_name: 'Lamhaa: The Untold Story of Kashmir'
      },
      {
        id: 1837,
        song_name: 'Badey Dil Wala',
        song_link: 'O0v1InK_eVk',
        album_name: 'Tees Maar Khan'
      },
      {
        id: 1870,
        song_name: 'Dekho Raste Mein',
        song_link: 'Q7hJhvjgJU',
        album_name: 'Hum Tum Aur Ghost'
      },
      {
        id: 1750,
        song_name: 'Badi Dheere Jali',
        song_link: 'FwB1gXyEnJY',
        album_name: 'Ishqiya'
      },
      {
        id: 1768,
        song_name: 'Mora Piya',
        song_link: 'ScwgKQUFiIU',
        album_name: 'Raajneeti'
      },
      {
        id: 1786,
        song_name: "Oh Girl You're Mine... (O Boy! What a Girli mix)",
        song_link: 'QxfTgQNwywU',
        album_name: 'Housefull'
      },
      {
        id: 1805,
        song_name: 'Uff Teri Adaa',
        song_link: 'mcaVtOHBBLo',
        album_name: 'Karthik Calling Karthik'
      },
      {
        id: 2968,
        song_name: 'Band Baaja Baaraat (Theme)',
        song_link: '3kXukXBvDQQ',
        album_name: 'Band Baaja Baaraat'
      },
      {
        id: 1818,
        song_name: 'Lehrein',
        song_link: 'WYDc1JQqduY',
        album_name: 'Aisha'
      },
      {
        id: 1892,
        song_name: 'Cry Cry',
        song_link: 'oeLmEubebI8',
        album_name: 'Jhootha Hi Sahi'
      },
      {
        id: 1850,
        song_name: 'Aa Bhi Jaa Sanam',
        song_link: 'UZONgv-1yuY',
        album_name: 'Prince'
      },
      {
        id: 1741,
        song_name: 'Rang De',
        song_link: 'AqAzKpvXiDo',
        album_name: 'My Name Is Khan'
      },
      {
        id: 1759,
        song_name: 'Zindagi Se Darte Ho',
        song_link: 'hlvg14dX7Zk',
        album_name: 'Peepli (Live)'
      },
      {
        id: 1864,
        song_name: 'Tu Jo Jaan Le',
        song_link: 'Fy8z4eKZv-I',
        album_name: 'Dulha Mil Gaya'
      },
      {
        id: 2926,
        song_name: 'Motumaster',
        song_link: '9ClvggZ_yL8',
        album_name: 'Udaan'
      },
      {
        id: 2954,
        song_name: 'Hud Hud Dabangg',
        song_link: '9fuBcEpMZF0',
        album_name: 'Dabangg'
      },
      {
        id: 1780,
        song_name: 'Chaand Ki Katori',
        song_link: 'PgiP7yQm3B8',
        album_name: 'Guzaarish'
      },
      {
        id: 2942,
        song_name: 'Tum Jo Aaye Zindagi Mein',
        song_link: 'kcYjF07It50',
        album_name: 'Once Upon a Time in Mumbai'
      },
      {
        id: 1873,
        song_name: 'Ale',
        song_link: 'hb2OW4gG98A',
        album_name: 'Golmaal 3'
      },
      {
        id: 1831,
        song_name: 'Lagi Lagi Milan Dhun Lagi',
        song_link: 'GTpM9wGyHI8',
        album_name: 'Hisss'
      },
      {
        id: 2962,
        song_name: 'Ainvayi Ainvayi',
        song_link: 'pElk1ShPrcE',
        album_name: 'Band Baaja Baaraat'
      },
      {
        id: 1812,
        song_name: 'Tujhe Bhula Diya',
        song_link: 'Hb2DeHvvEg',
        album_name: 'Anjaana Anjaani'
      },
      {
        id: 1886,
        song_name: 'We Are Innocent',
        song_link: 'rFKe1C0lsRs',
        album_name: 'No Problem'
      },
      {
        id: 1844,
        song_name: 'I Hate Luv Storys',
        song_link: 'FDzYegv8JHE',
        album_name: 'I Hate Luv Storys'
      },
      {
        id: 1753,
        song_name: 'Tainu TV Per Wekhya',
        song_link: 'h6bbMAhWWPw',
        album_name: 'LSD: Love, Sex Aur Dhokha'
      },
      {
        id: 2934,
        song_name: 'Mora Piya Mo Se Bolat Naahin (Trance mix)',
        song_link: 'gnUEMviIF40',
        album_name: 'Raajneeti'
      },
      {
        id: 2674,
        song_name: 'All Izz Well',
        song_link: 'S-LltgOtFSg',
        album_name: '3 Idiots'
      },
      {
        id: 2675,
        song_name: 'Zoobi Doobi',
        song_link: 'yJ1uLVgv3Vg',
        album_name: '3 Idiots'
      },
      {
        id: 2676,
        song_name: 'Behti Hawa Sa Tha Woh',
        song_link: 'XdbjtoMkerU',
        album_name: '3 Idiots'
      },
      {
        id: 2677,
        song_name: 'Give Me Some Sunshine',
        song_link: 'HZu3bXWhnX4',
        album_name: '3 Idiots'
      },
      {
        id: 714,
        song_name: 'Bakhuda Tumhi Ho ',
        song_link: 'Jpq9tm0gnTM',
        album_name: 'Kismat Konnection'
      },
      {
        id: 627,
        song_name: 'Kaise Mujhe ',
        song_link: 'ndtno2tBGbo',
        album_name: 'Ghajini'
      },
      {
        id: 715,
        song_name: 'Is This Love ',
        song_link: 'ydWsfNb4GME',
        album_name: 'Kismat Konnection'
      },
      {
        id: 628,
        song_name: 'Behka ',
        song_link: 'ME7yIky1pgI',
        album_name: 'Ghajini'
      },
      {
        id: 682,
        song_name: 'Latoo',
        song_link: '3mpx7oiZ_tM',
        album_name: 'Ghajini'
      },
      {
        id: 683,
        song_name: 'Aye Bachu ',
        song_link: 'tVdnEbRKfK0',
        album_name: 'Ghajini'
      },
      {
        id: 712,
        song_name: 'Move Your Body Now ',
        song_link: '_5Ed_YjO38M',
        album_name: 'Kismat Konnection'
      },
      {
        id: 713,
        song_name: 'Aai Paapi ',
        song_link: '2IWAS_pMWHs',
        album_name: 'Kismat Konnection'
      },
      {
        id: 1913,
        song_name: 'Aur Ho',
        song_link: 'w7lNCCSFowk',
        album_name: 'Rock Star'
      },
      {
        id: 1907,
        song_name: 'Phir Se Ud Chala',
        song_link: '2mWaqsC3U7k',
        album_name: 'Rock Star'
      },
      {
        id: 1908,
        song_name: 'Jo Bhi Main',
        song_link: 'd7S_gG48dVM',
        album_name: 'Rock Star'
      },
      {
        id: 1909,
        song_name: 'Katiya Karun',
        song_link: 'UoFGgEiROa8',
        album_name: 'Rock Star'
      },
      {
        id: 1910,
        song_name: 'Kun Faya Kun',
        song_link: 'T94PHkuydcw',
        album_name: 'Rock Star'
      },
      {
        id: 1911,
        song_name: 'Sheher Mein',
        song_link: 'k_Pak8Cz3Ho',
        album_name: 'Rock Star'
      },
      {
        id: 1912,
        song_name: 'Hawaa Hawaa',
        song_link: 'xQryki2ZhYA',
        album_name: 'Rock Star'
      },
      {
        id: 1037,
        song_name: 'Main To Hoon Pagal',
        song_link: 'nd_xICZ3Cwc',
        album_name: 'Baadshah'
      },
      {
        id: 1033,
        song_name: 'Woh Ladki Jo',
        song_link: '_ChywBU14yE',
        album_name: 'Baadshah'
      },
      {
        id: 1034,
        song_name: 'Baadshah O Baadshah',
        song_link: 'IY7c-v_kBLk',
        album_name: 'Baadshah'
      },
      {
        id: 1035,
        song_name: 'Hum To Deewane Huye',
        song_link: '40gJEXq1cUE',
        album_name: 'Baadshah'
      },
      {
        id: 1036,
        song_name: 'Mohabbat Ho Gayee Hain',
        song_link: '31I5C1vLp-4',
        album_name: 'Baadshah'
      },
      {
        id: 2920,
        song_name: 'Tu Ladka Hai London Ka (Jhankar)',
        song_link: 'Wef-WSgS3xs',
        album_name: 'Chaand Kaa Tukdaa'
      },
      {
        id: 2832,
        song_name: 'Ishq Karoge Toh Dard Milega ',
        song_link: 'zFbFU7lZZ-Y',
        album_name: 'Ekka Raja Rani'
      },
      {
        id: 2869,
        song_name: 'Thodi Hansi Hai To Thode Aansoo (I)',
        song_link: '6iZ1sr07-b0',
        album_name: 'Udhaar Ki Zindagi'
      },
      {
        id: 2742,
        song_name: 'Kaash Kahin Aisa Hota',
        song_link: 'yHxzgvh5LW8',
        album_name: 'Mohra'
      },
      {
        id: 2767,
        song_name: 'Kolhapur Se Aayee',
        song_link: 'fZ6Wu6Fj8-I',
        album_name: 'Anjaam'
      },
      {
        id: 2888,
        song_name: 'Garmi Lage Garmi',
        song_link: 'cFzaKj1Dn7A',
        album_name: 'Mr. Azaad'
      },
      {
        id: 2799,
        song_name: 'Dhak Dhak Dil Dhadak Raha Hai',
        song_link: 'ydeSTh_rc8k',
        album_name: 'Laadla'
      },
      {
        id: 2780,
        song_name: 'Jai Ambe Jagdambe',
        song_link: 'Q3Nd7bsVaQU',
        album_name: 'Krantiveer'
      },
      {
        id: 2901,
        song_name: 'Chandi Ki Dori',
        song_link: 'Cr8uYG0QjKI',
        album_name: 'Saajan Ka Ghar'
      },
      {
        id: 2812,
        song_name: 'Yaad Teri Aati Hai',
        song_link: 'nf2cXiQ0C2w',
        album_name: 'Aa Gale Lag Jaa'
      },
      {
        id: 2847,
        song_name: 'Yeh Aalam Yeh Mausam',
        song_link: 'Rxgqv_WNjqk',
        album_name: 'Jai Kishen'
      },
      {
        id: 2723,
        song_name: 'Didi Tera Devar Deewana',
        song_link: '2V56f0xZNqw',
        album_name: 'Hum Aapke Hain Koun...!'
      },
      {
        id: 2755,
        song_name: 'Rim Jhim Rim Jhim',
        song_link: 'EfulJZG60eU',
        album_name: '1942: A Love Story'
      },
      {
        id: 2863,
        song_name: 'Soti Reh Gayi Saari Duniya',
        song_link: 'eI9VDp7oio8',
        album_name: 'Zaalim'
      },
      {
        id: 2736,
        song_name: 'Do Mastanae',
        song_link: 'LI5q2M-JbDc',
        album_name: 'Andaz Apna Apna'
      },
      {
        id: 2761,
        song_name: 'Amma Ooee Amma',
        song_link: '8pVV6K0G5vU',
        album_name: 'Raja Babu'
      },
      {
        id: 2882,
        song_name: 'Yeh Nakhra Ladki Ka',
        song_link: 'mkA9bSR75Ww',
        album_name: 'Suhaag'
      },
      {
        id: 2793,
        song_name: 'Mere Ghulam Tera Katleaam',
        song_link: 'FSTFUhp95r4',
        album_name: 'Laadla'
      },
      {
        id: 2914,
        song_name: 'Aaj Radha Ko Shyam (Jhankar)',
        song_link: 'oCi2NVkFupU',
        album_name: 'Chaand Kaa Tukdaa'
      },
      {
        id: 2826,
        song_name: 'Band Bajega Dhol Bajenge',
        song_link: 'm1rxWWIK06o',
        album_name: 'Teesra Kaun?'
      },
      {
        id: 2774,
        song_name: 'Lakhon Haseen',
        song_link: '40eIsoqRDxk',
        album_name: 'Main Khiladi Tu Anari'
      },
      {
        id: 2895,
        song_name: 'Saawan Aaya Baadal Chaaye (From "Saajan Ka Ghar")',
        song_link: 'J2jJgS85HBg',
        album_name: 'Saajan Ka Ghar'
      },
      {
        id: 2806,
        song_name: 'Aaj Hamen Maloom Hua',
        song_link: 'J-Sq9B6FZZo',
        album_name: 'Aa Gale Lag Jaa'
      },
      {
        id: 2840,
        song_name: 'Haye Hukku Haye Hukku Haaye Haaye',
        song_link: 'o7P4XtQrC0o',
        album_name: 'Gopi Kishan'
      },
      {
        id: 2876,
        song_name: 'Madhosh Dil Hai Pagal Jawani',
        song_link: '-u9jkC4zyCk',
        album_name: 'Kanoon'
      },
      {
        id: 2749,
        song_name: 'Too Cheez Badi Hain-Duet',
        song_link: 'dgvrRJFrLYI',
        album_name: 'Mohra'
      },
      {
        id: 2730,
        song_name: 'Mujhse Juda Hokar',
        song_link: '8Dx4HoQIjUc',
        album_name: 'Hum Aapke Hain Koun...!'
      },
      {
        id: 2787,
        song_name: 'Naam Kya Hai',
        song_link: 'iM0fdFLinG4',
        album_name: 'Yeh Dillagi'
      },
      {
        id: 2908,
        song_name: 'Ae Kaash Ke Hum',
        song_link: 'Jtg2zyS_y_c',
        album_name: 'Kabhi Haan Kabhi Naa'
      },
      {
        id: 2819,
        song_name: 'Dil Mein Duaen Hai',
        song_link: 'rWCUhiHv3uE',
        album_name: 'Dulaara'
      },
      {
        id: 2856,
        song_name: 'Mubarak Ho Mubarak Ho',
        song_link: 'Nq0ydVRUI7c',
        album_name: 'Zaalim'
      },
      {
        id: 2800,
        song_name: 'Mere Ghulam Tera',
        song_link: 'FSTFUhp95r4',
        album_name: 'Laadla'
      },
      {
        id: 2921,
        song_name: 'Tu Lage Chand Ka Tukda (Jhankar)',
        song_link: 'CAlA9r3wAHw',
        album_name: 'Chaand Kaa Tukdaa'
      },
      {
        id: 2833,
        song_name: 'Mere Saavre Savariya',
        song_link: 'slU4X9HjmY8',
        album_name: 'Ekka Raja Rani'
      },
      {
        id: 2870,
        song_name: 'Main Bani Hoon Sirf',
        song_link: 'WmJY1m7tqwc',
        album_name: 'Kanoon'
      },
      {
        id: 2743,
        song_name: 'Main Cheez Badi Hoon',
        song_link: 'AYbtHiHvItw',
        album_name: 'Mohra'
      },
      {
        id: 2768,
        song_name: 'Barso Ke Baad',
        song_link: '6JnLxXDJvyY',
        album_name: 'Anjaam'
      },
      {
        id: 2889,
        song_name: 'Gilli Bina Aisa Danda',
        song_link: 'ST9zDqnTGI4',
        album_name: 'Mr. Azaad'
      },
      {
        id: 2781,
        song_name: 'Phool Kali Chand',
        song_link: 'ZuSMwgVpEX0',
        album_name: 'Krantiveer'
      },
      {
        id: 2902,
        song_name: 'Bojh Se Ghamon Ke',
        song_link: 'lGoN9y_b6_g',
        album_name: 'Saajan Ka Ghar'
      },
      {
        id: 2813,
        song_name: 'Tumhi Se Tumhi Ko Chura Lenge Hum (From "Dulaara")',
        song_link: 'UhQerIFu9yA',
        album_name: 'Dulaara'
      },
      {
        id: 2848,
        song_name: 'Pyar Hua Hai',
        song_link: 'HU9xsq2PXZM',
        album_name: 'Jai Kishen'
      },
      {
        id: 2724,
        song_name: 'Mausam Ka Jaadu',
        song_link: 'EMOEjA6UMsQ',
        album_name: 'Hum Aapke Hain Koun...!'
      },
      {
        id: 2756,
        song_name: 'Yeh Safar',
        song_link: 'FeHQS_rLqTI',
        album_name: '1942: A Love Story'
      },
      {
        id: 2864,
        song_name: 'Char Din Ka Safar - Sad',
        song_link: 'X8T2yciXTN8',
        album_name: 'Zaalim'
      },
      {
        id: 2737,
        song_name: 'Dil Karta Hai',
        song_link: 'japz4EtBqZc',
        album_name: 'Andaz Apna Apna'
      },
      {
        id: 2762,
        song_name: 'Aaja Aaja Yaad Sataye',
        song_link: 'OlW5gAKmOOU',
        album_name: 'Raja Babu'
      },
      {
        id: 2883,
        song_name: 'Taa Na Na',
        song_link: '33MD6rQcXCg',
        album_name: 'Suhaag'
      },
      {
        id: 2794,
        song_name: 'Dhik Ta Na Na',
        song_link: 'vgMOwGBarIQ',
        album_name: 'Laadla'
      },
      {
        id: 2915,
        song_name: 'Aaja Lootere Aaja (Jhankar)',
        song_link: '4UiGY9XTwk0',
        album_name: 'Chaand Kaa Tukdaa'
      },
      {
        id: 2827,
        song_name: 'Pyar Ka Fasana Banale Dil Diwana',
        song_link: '4XSrHA_fb1M',
        album_name: 'Teesra Kaun?'
      },
      {
        id: 2775,
        song_name: 'Dil Ka Darwaja',
        song_link: 'LmagwQ8fp3Q',
        album_name: 'Main Khiladi Tu Anari'
      },
      {
        id: 2896,
        song_name: 'Apni Bhi Zindagi Mein',
        song_link: '4SJydLXspII',
        album_name: 'Saajan Ka Ghar'
      },
      {
        id: 2807,
        song_name: 'Aaj Hamen Maloom Hua',
        song_link: 'J-Sq9B6FZZo',
        album_name: 'Aa Gale Lag Jaa'
      },
      {
        id: 2841,
        song_name: 'Chhatri Na Khol Barsaat Mein',
        song_link: 'tgPc0utg2DM',
        album_name: 'Gopi Kishan'
      },
      {
        id: 2877,
        song_name: 'Gore Gore Mukhde Pe',
        song_link: '4C1jh8ND3DA',
        album_name: 'Suhaag'
      },
      {
        id: 2750,
        song_name: 'Kuchh Na Kaho (Happy Version)',
        song_link: 'hjojVeSBW6s',
        album_name: '1942: A Love Story'
      },
      {
        id: 2731,
        song_name: 'Samdhi Samdhan',
        song_link: 'XbtAkCSM9RU',
        album_name: 'Hum Aapke Hain Koun...!'
      },
      {
        id: 2788,
        song_name: 'Lagi Lagi Dil Ki Lagi',
        song_link: '6gn4sxOopSE',
        album_name: 'Yeh Dillagi'
      },
      {
        id: 2909,
        song_name: 'Aana Mere Pyar Ko',
        song_link: 'ey12lXsUu_8',
        album_name: 'Kabhi Haan Kabhi Naa'
      },
      {
        id: 2820,
        song_name: 'Arey Ek Hai Anaar Yahan',
        song_link: 'mFzG_iHe2U0',
        album_name: 'Dulaara'
      },
      {
        id: 2857,
        song_name: 'Pehle Hi Qayamat',
        song_link: '_FW9aIAbtB0',
        album_name: 'Zaalim'
      },
      {
        id: 2890,
        song_name: 'Kali Kali Mein',
        song_link: 'owkyF2oKyJg',
        album_name: 'Mr. Azaad'
      },
      {
        id: 2801,
        song_name: 'Tu Mera Laadla - 2',
        song_link: 'hlX1aTkDo9U',
        album_name: 'Laadla'
      },
      {
        id: 2834,
        song_name: 'Pyar Karo Toh Aise',
        song_link: 'I5xEfBszciM',
        album_name: 'Ekka Raja Rani'
      },
      {
        id: 2871,
        song_name: 'Balma Arzi Meri Manzoor',
        song_link: '0_SXbN4EuiU',
        album_name: 'Kanoon'
      },
      {
        id: 2744,
        song_name: 'Na Kajare Ki Dhar- Duet',
        song_link: 'dwdghOyPZ7A',
        album_name: 'Mohra'
      },
      {
        id: 2769,
        song_name: 'Sun Meri Banno',
        song_link: '2bc2ib5ndDo',
        album_name: 'Anjaam'
      },
      {
        id: 2782,
        song_name: 'Jhankaro Jhankaro',
        song_link: '6pJc5bsbiqs',
        album_name: 'Krantiveer'
      },
      {
        id: 2903,
        song_name: 'Aa Baith Mere Ghode Par',
        song_link: '8BQVBbeLNu0',
        album_name: 'Prem Shakti'
      },
      {
        id: 2814,
        song_name: 'Silsila Shuru Hua Pyar Ka',
        song_link: 'GeO932EhzMU',
        album_name: 'Dulaara'
      },
      {
        id: 2849,
        song_name: 'Yaaro Kya Ladki Hai',
        song_link: '513Ph74HEAs',
        album_name: 'Jai Kishen'
      },
      {
        id: 2725,
        song_name: 'Chocolate, Lime Juice',
        song_link: 'uiOimjucxow',
        album_name: 'Hum Aapke Hain Koun...!'
      },
      {
        id: 2757,
        song_name: 'Kuchh Na Kaho (Chorus Version)',
        song_link: 'EOIERuwpjKo',
        album_name: '1942: A Love Story'
      },
      {
        id: 2865,
        song_name: 'Dadaji Ki Chhadi Hoon Main',
        song_link: 'GJ8lexJ0H-8',
        album_name: 'Udhaar Ki Zindagi'
      },
      {
        id: 2738,
        song_name: 'Ye Raat Aur Ye Doori',
        song_link: '1H0vtkIiPbM',
        album_name: 'Andaz Apna Apna'
      },
      {
        id: 2763,
        song_name: 'Badi Mushkil Hai',
        song_link: 'a3aNOVG6fmc',
        album_name: 'Anjaam'
      },
      {
        id: 2884,
        song_name: 'Aar Kono Kotha Noy',
        song_link: 'dQjxChSL8ts',
        album_name: 'Salaami'
      },
      {
        id: 2795,
        song_name: 'Ladki Hai Kya (Laadla)',
        song_link: 'WCo3UfjFejo',
        album_name: 'Laadla'
      },
      {
        id: 2916,
        song_name: 'Darwaza Khula Rakhna (Jhankar)',
        song_link: 'Qnn2mH8Cw6U',
        album_name: 'Chaand Kaa Tukdaa'
      },
      {
        id: 2828,
        song_name: 'Teesra Kaun',
        song_link: 'YszKiYcyzh4',
        album_name: 'Teesra Kaun?'
      },
      {
        id: 2776,
        song_name: 'My Adorable Darling',
        song_link: 'DMjjZPmJIiE',
        album_name: 'Main Khiladi Tu Anari'
      },
      {
        id: 2897,
        song_name: 'Dard Sahenge Kuch Na Kahenge',
        song_link: '7yEZpraW-ds',
        album_name: 'Saajan Ka Ghar'
      },
      {
        id: 2808,
        song_name: 'Hum Na Hoonge Judda',
        song_link: 'BcLzcv8m1tk',
        album_name: 'Aa Gale Lag Jaa'
      },
      {
        id: 2842,
        song_name: 'Mera Mehboob Aayega',
        song_link: '8YIB_280pJ0',
        album_name: 'Gopi Kishan'
      },
      {
        id: 2751,
        song_name: 'Ek Ladki Ko Dekha',
        song_link: 'CZ5a69wwg5k',
        album_name: '1942: A Love Story'
      },
      {
        id: 2732,
        song_name: 'Hum Aapke Hain Koun',
        song_link: 'QyJoeduGpJI',
        album_name: 'Hum Aapke Hain Koun...!'
      },
      {
        id: 2878,
        song_name: 'Kagaz Kalam',
        song_link: 'YwWEaJjwA9s',
        album_name: 'Suhaag'
      },
      {
        id: 2789,
        song_name: 'Gori Kalai',
        song_link: '8ipWXLEoGzc',
        album_name: 'Yeh Dillagi'
      },
      {
        id: 2910,
        song_name: 'Sachi Yeh Kahani Hai',
        song_link: 'aZ9Of7b0TjA',
        album_name: 'Kabhi Haan Kabhi Naa'
      },
      {
        id: 2821,
        song_name: 'Love In Rain',
        song_link: '7CF1JIv0W6g',
        album_name: 'Teesra Kaun?'
      },
      {
        id: 2858,
        song_name: 'Char Din Ka Safar',
        song_link: 'TmTvUy8AA2E',
        album_name: 'Zaalim'
      },
      {
        id: 2891,
        song_name: 'Main Teri Chanchal',
        song_link: 'MmidYqpu6tc',
        album_name: 'Mr. Azaad'
      },
      {
        id: 2802,
        song_name: 'Dhak Dhak Dil Dhadak Raha Hai - 2',
        song_link: 'JjGDK4Bk_ZM',
        album_name: 'Laadla'
      },
      {
        id: 2836,
        song_name: 'Tadpu Ya Pyar Karu',
        song_link: 'xvmO3QYmgko',
        album_name: 'Ekka Raja Rani'
      },
      {
        id: 2872,
        song_name: 'Tujhe Lift Car Mein Doon',
        song_link: 'pc0GajG-770',
        album_name: 'Kanoon'
      },
      {
        id: 2745,
        song_name: 'Na Kajare Ki Koi Aur Nahi',
        song_link: 'jQF6kPU9P5c',
        album_name: 'Mohra'
      },
      {
        id: 2770,
        song_name: 'Pratighat Ki Jwala',
        song_link: 'z5TmGcXo-3U',
        album_name: 'Anjaam'
      },
      {
        id: 2758,
        song_name: 'Pak Chik Pak Raja Babu',
        song_link: 'c_UCEeL3J3I',
        album_name: 'Raja Babu'
      },
      {
        id: 2783,
        song_name: 'Love Rap',
        song_link: 'IPopLpkO8J4',
        album_name: 'Krantiveer'
      },
      {
        id: 2904,
        song_name: 'O Rama Ho',
        song_link: '2t3DpEUOXZE',
        album_name: 'Prem Shakti'
      },
      {
        id: 2815,
        song_name: 'Saajan Re Saajan Kehta Hai Sawan',
        song_link: 'vRAhx_MMz_k',
        album_name: 'Dulaara'
      },
      {
        id: 2850,
        song_name: 'Jhoole Jhoole Lal',
        song_link: 'vb5Q_QdJmoo',
        album_name: 'Jai Kishen'
      },
      {
        id: 2726,
        song_name: 'Joote Dedo, Paise Lelo',
        song_link: 'o8TrjD08r5k',
        album_name: 'Hum Aapke Hain Koun...!'
      },
      {
        id: 2829,
        song_name: 'Achha Sanam Kar Le Sitam',
        song_link: 'jgVp5GGmbg4',
        album_name: 'Teesra Kaun?'
      },
      {
        id: 2866,
        song_name: 'Dil Dhadakne Ka Bahaana',
        song_link: 'aHTPXt7-L2I',
        album_name: 'Udhaar Ki Zindagi'
      },
      {
        id: 2739,
        song_name: 'Ello Ello',
        song_link: 'eVUSTYGmpP0',
        album_name: 'Andaz Apna Apna'
      },
      {
        id: 2764,
        song_name: 'Channe Ke Khet Mein',
        song_link: 'DqxIFvsLcRQ',
        album_name: 'Anjaam'
      },
      {
        id: 2885,
        song_name: 'Chehara Ki Dekhcho Go',
        song_link: 'UzYOtgUv2E4',
        album_name: 'Salaami'
      },
      {
        id: 2796,
        song_name: 'Main Raju Deewana',
        song_link: 'cNKh4XO-iMI',
        album_name: 'Laadla'
      },
      {
        id: 2917,
        song_name: 'Dil Deewana Dhoond Raha Hai (Jhankar)',
        song_link: '-vkJBargQKc',
        album_name: 'Chaand Kaa Tukdaa'
      },
      {
        id: 2777,
        song_name: 'Hothon Pe Tera Naam',
        song_link: 'UISEmTwg3XM',
        album_name: 'Main Khiladi Tu Anari'
      },
      {
        id: 2898,
        song_name: 'Main Karti Hoon Tujhe Pyar',
        song_link: '5RPNLzc1EzA',
        album_name: 'Saajan Ka Ghar'
      },
      {
        id: 2809,
        song_name: 'Jis Jeewan Mein',
        song_link: 'lMhkfjrE1TE',
        album_name: 'Aa Gale Lag Jaa'
      },
      {
        id: 2843,
        song_name: 'I Love You',
        song_link: 'WmwzZcB4Ca0',
        album_name: 'Gopi Kishan'
      },
      {
        id: 2752,
        song_name: 'Pyar Hua Chupke Se',
        song_link: 'V0FsE0b7Z-s',
        album_name: '1942: A Love Story'
      },
      {
        id: 2733,
        song_name: 'Wah Wah Ramji',
        song_link: 'v67otk5uSvk',
        album_name: 'Hum Aapke Hain Koun...!'
      },
      {
        id: 2879,
        song_name: 'Tere Liye Jaanam',
        song_link: 'f9lU6fd_hDU',
        album_name: 'Suhaag'
      },
      {
        id: 2790,
        song_name: 'Main Deewana Hoon',
        song_link: 'anCtRO3uZ2I',
        album_name: 'Yeh Dillagi'
      },
      {
        id: 2911,
        song_name: 'Kyon Na Hum Milke Pyar',
        song_link: 'lZ1eh098nW4',
        album_name: 'Kabhi Haan Kabhi Naa'
      },
      {
        id: 2822,
        song_name: 'Jab Maine Tera Naam Liya',
        song_link: 'Fj8g2qn_z9c',
        album_name: 'Teesra Kaun?'
      },
      {
        id: 2859,
        song_name: 'Bombay Se Rail Chali',
        song_link: 'MB33bO4aUt4',
        album_name: 'Zaalim'
      },
      {
        id: 2892,
        song_name: 'Saathi Bina Kaise Kate',
        song_link: 'xpcdUVMjiaE',
        album_name: 'Mr. Azaad'
      },
      {
        id: 2803,
        song_name: 'Laadla - Dhik Ta Na Na',
        song_link: 'vgMOwGBarIQ',
        album_name: 'Laadla'
      },
      {
        id: 2837,
        song_name: 'Yeh Neeli Peeli Choodiyan',
        song_link: 'Nb3jsW5yZNY',
        album_name: 'Ekka Raja Rani'
      },
      {
        id: 2873,
        song_name: 'Jack & Jill Went Up the Hil',
        song_link: 'xxomzy0_ec0',
        album_name: 'Kanoon'
      },
      {
        id: 2746,
        song_name: 'Na Kajare Ki Tasveer Teri',
        song_link: 'MPj6v2IyheE',
        album_name: 'Mohra'
      },
      {
        id: 2771,
        song_name: 'Chura Ke Dil Mera',
        song_link: 'G_qyLs1SJbQ',
        album_name: 'Main Khiladi Tu Anari'
      },
      {
        id: 2759,
        song_name: 'Mera Dil Na Todo',
        song_link: '0nVvU-pQHWU',
        album_name: 'Raja Babu'
      },
      {
        id: 2784,
        song_name: 'Chunri Udi Sajan',
        song_link: 'Kl-QeOu3IaM',
        album_name: 'Krantiveer'
      },
      {
        id: 2905,
        song_name: 'Krishna Ki Hai Karishma Tu',
        song_link: 'GDYKtVUAGR4',
        album_name: 'Prem Shakti'
      },
      {
        id: 2816,
        song_name: 'Kal Kahin College Main Mera Rumaal',
        song_link: 'v2gdlmIyMhM',
        album_name: 'Dulaara'
      },
      {
        id: 2851,
        song_name: 'Looshe Wai Wai',
        song_link: 'bC2_NbyLwGg',
        album_name: 'Jai Kishen'
      },
      {
        id: 2727,
        song_name: 'Pehla Pehla Pyar',
        song_link: 'gIODEFkvjTA',
        album_name: 'Hum Aapke Hain Koun...!'
      },
      {
        id: 2918,
        song_name: 'I Am Very Very Sorry (Jhankar)',
        song_link: 'QbIzqOHHVKI',
        album_name: 'Chaand Kaa Tukdaa'
      },
      {
        id: 2830,
        song_name: 'Dil Ko Zarasa Aaram Denge',
        song_link: 'LKvyQayD1x4',
        album_name: 'Ekka Raja Rani'
      },
      {
        id: 2867,
        song_name: 'Humne To Lee Hai Kasam',
        song_link: '1Nk0EjEc2oE',
        album_name: 'Udhaar Ki Zindagi'
      },
      {
        id: 2740,
        song_name: 'Shola Shola Tu Bhadke',
        song_link: 'miq_4l7aGTA',
        album_name: 'Andaz Apna Apna'
      },
      {
        id: 2765,
        song_name: 'Channe Ke Khet Mein',
        song_link: 'DqxIFvsLcRQ',
        album_name: 'Anjaam'
      },
      {
        id: 2886,
        song_name: ' Azaad Aaya Re',
        song_link: '8p1UvKgDdMk',
        album_name: 'Mr. Azaad'
      },
      {
        id: 2797,
        song_name: 'Teri Ungali Pakad Ke Chala',
        song_link: 's67Zz05B0TE',
        album_name: 'Laadla'
      },
      {
        id: 2778,
        song_name: 'Main Khiladi Tu Anari',
        song_link: 'wrJIY6VfpNY',
        album_name: 'Main Khiladi Tu Anari'
      },
      {
        id: 2899,
        song_name: 'Babul de Do Dua (From "Saajan Ka Ghar")',
        song_link: 'eWBmpQr8480',
        album_name: 'Saajan Ka Ghar'
      },
      {
        id: 2810,
        song_name: 'Main Aashiq Hoon',
        song_link: 'awfsAP0prfQ',
        album_name: 'Aa Gale Lag Jaa'
      },
      {
        id: 2844,
        song_name: 'Batti Na Bujha',
        song_link: 'nPlBDehxBqY',
        album_name: 'Gopi Kishan'
      },
      {
        id: 2753,
        song_name: 'Rooth Na Jana',
        song_link: 'riaZ-t8-gAI',
        album_name: '1942: A Love Story'
      },
      {
        id: 2734,
        song_name: 'Lo Chali Main',
        song_link: 'sGfVK1V26lA',
        album_name: 'Hum Aapke Hain Koun...!'
      },
      {
        id: 2880,
        song_name: 'Main Dekhu Tumhe',
        song_link: 'D1tOc_zlfr4',
        album_name: 'Suhaag'
      },
      {
        id: 2791,
        song_name: 'Dekho Zara Dekho',
        song_link: 'f9amXuglkXs',
        album_name: 'Yeh Dillagi'
      },
      {
        id: 2912,
        song_name: 'Deewana Dil Deewana',
        song_link: '4bIQNbHofs0',
        album_name: 'Kabhi Haan Kabhi Naa'
      },
      {
        id: 2823,
        song_name: 'Kya Aankhen Hai',
        song_link: 'hiao2FbgZp8',
        album_name: 'Teesra Kaun?'
      },
      {
        id: 2860,
        song_name: 'Ai Ai Aah Sorry Sorry',
        song_link: 'hGUESRKRliY',
        album_name: 'Zaalim'
      },
      {
        id: 2772,
        song_name: 'Paas Woh Aane Lage',
        song_link: 'emZfVgqe8e4',
        album_name: 'Main Khiladi Tu Anari'
      },
      {
        id: 2893,
        song_name: 'Tu Jhumata Huva Saawan',
        song_link: '7o_hoIYnWDQ',
        album_name: 'Mr. Azaad'
      },
      {
        id: 2804,
        song_name: 'Ladki Hai Kya Re Baba',
        song_link: 'WCo3UfjFejo',
        album_name: 'Laadla'
      },
      {
        id: 2838,
        song_name: 'Dil Ko Zarasa Aaram Denge',
        song_link: 'LKvyQayD1x4',
        album_name: 'Ekka Raja Rani'
      },
      {
        id: 2874,
        song_name: 'Mere Dil Pe Kiye Hai',
        song_link: 'wc4K8e7HphM',
        album_name: 'Kanoon'
      },
      {
        id: 2747,
        song_name: 'Subah Se Lekar-Duet',
        song_link: '5rG4IgQIGHg',
        album_name: 'Mohra'
      },
      {
        id: 2760,
        song_name: 'Ho Sarkay Leo Khattiya Jaada Lage (From "Raja Babu")',
        song_link: 'sdlOZxmOpBM',
        album_name: 'Raja Babu'
      },
      {
        id: 2785,
        song_name: 'Ole Ole',
        song_link: 'AMEg79OgK8M',
        album_name: 'Yeh Dillagi'
      },
      {
        id: 2906,
        song_name: 'Aaja O Mere Sanam',
        song_link: 'L3ea5xhTtcw',
        album_name: 'Prem Shakti'
      },
      {
        id: 2817,
        song_name: 'Dil Yahin Kahin Kho Gaya Hai Mera',
        song_link: 'zhoSPh1Cxus',
        album_name: 'Dulaara'
      },
      {
        id: 2853,
        song_name: 'Maine Likh Di Jawani (Jhankar)',
        song_link: 'Omhz-FtX4SM',
        album_name: 'Ikke Pe Ikka'
      },
      {
        id: 2728,
        song_name: 'Dhiktana, Part 1',
        song_link: '75m0c91fYNM',
        album_name: 'Hum Aapke Hain Koun...!'
      },
      {
        id: 2919,
        song_name: 'Jo Peete Nahin Sharaab (Jhankar)',
        song_link: 'lFqDcNsMKFw',
        album_name: 'Chaand Kaa Tukdaa'
      },
      {
        id: 2831,
        song_name: 'Dil Milne Ko Tarasta Hai',
        song_link: 'equ36fTXIow',
        album_name: 'Ekka Raja Rani'
      },
      {
        id: 2868,
        song_name: 'Main Bhi Chup Hoon',
        song_link: 'L4isnrf79Cs',
        album_name: 'Udhaar Ki Zindagi'
      },
      {
        id: 2741,
        song_name: 'Dil Har Koi',
        song_link: 'AtXPQ_amtEg',
        album_name: 'Mohra'
      },
      {
        id: 2766,
        song_name: 'Tu Samne Jab Aata Hai',
        song_link: 'pEoSW1xCg-M',
        album_name: 'Anjaam'
      },
      {
        id: 2887,
        song_name: 'Diya Diya Dil Tujhko',
        song_link: 'qT2fncMl9Xc',
        album_name: 'Mr. Azaad'
      },
      {
        id: 2798,
        song_name: 'Meri Dhadkan Suno',
        song_link: 'eTG1fRy-7kY',
        album_name: 'Laadla'
      },
      {
        id: 2779,
        song_name: 'Jab Se Hum Tere',
        song_link: 'Qsm8sB14j1s',
        album_name: 'Krantiveer'
      },
      {
        id: 2900,
        song_name: 'Rabne Bhi Mujh Pe Sitam',
        song_link: 'kw-pr7PTw6Y',
        album_name: 'Saajan Ka Ghar'
      },
      {
        id: 2811,
        song_name: 'Tere Bagair',
        song_link: '5ixBiiM_lCU',
        album_name: 'Aa Gale Lag Jaa'
      },
      {
        id: 2846,
        song_name: 'Surat Hai Meri Bholi',
        song_link: 'Rwn3ePSRFKc',
        album_name: 'Jai Kishen'
      },
      {
        id: 2722,
        song_name: 'Maye Ni Maye',
        song_link: 'Ua5AW2czRAE',
        album_name: 'Hum Aapke Hain Koun...!'
      },
      {
        id: 2754,
        song_name: 'Kuchh Na Kaho (Male Version)',
        song_link: 'hH79321JJQ0',
        album_name: '1942: A Love Story'
      },
      {
        id: 2861,
        song_name: 'Mubarak Ho Mubarak Ho - Male',
        song_link: 'Nq0ydVRUI7c',
        album_name: 'Zaalim'
      },
      {
        id: 2735,
        song_name: 'Dhiktana, Part 2',
        song_link: '_LaKb3mnDUE',
        album_name: 'Hum Aapke Hain Koun...!'
      },
      {
        id: 2881,
        song_name: 'Pyar Pyar',
        song_link: 'xwtd3pXuuGw',
        album_name: 'Suhaag'
      },
      {
        id: 2792,
        song_name: 'Tu Mera Laadla',
        song_link: 'hlX1aTkDo9U',
        album_name: 'Laadla'
      },
      {
        id: 2913,
        song_name: 'Woh To Hai Albela',
        song_link: 'i1KdjbCvJ2Y',
        album_name: 'Kabhi Haan Kabhi Naa'
      },
      {
        id: 2825,
        song_name: 'Dekha Tujhe To Dil Gaane Laga',
        song_link: '0DwkrT9cmkU',
        album_name: 'Teesra Kaun?'
      },
      {
        id: 2773,
        song_name: 'Zubaan Khamosh Hoti Hai',
        song_link: 'RAuminLW4Ug',
        album_name: 'Main Khiladi Tu Anari'
      },
      {
        id: 2894,
        song_name: 'Nazar Jeedhar Jeedhar Jaye (From "Saajan Ka Ghar")',
        song_link: 'Jzp-k5g3iG0',
        album_name: 'Saajan Ka Ghar'
      },
      {
        id: 2805,
        song_name: 'Boyi Boyi',
        song_link: 'uztqe8v2GlM',
        album_name: 'Laadla'
      },
      {
        id: 2839,
        song_name: 'Yeh Ishq Hai Kya',
        song_link: 'tByUQ0e50ro',
        album_name: 'Gopi Kishan'
      },
      {
        id: 2875,
        song_name: 'Kya Khata Hai Meri',
        song_link: 'mQNAH3QhWCA',
        album_name: 'Kanoon'
      },
      {
        id: 2748,
        song_name: 'Tip Tip Barsa Paani',
        song_link: '2iuXCL8PdL0',
        album_name: 'Mohra'
      },
      {
        id: 2786,
        song_name: 'Hoton Pe Bas',
        song_link: 'lHXX9bgSTAI',
        album_name: 'Yeh Dillagi'
      },
      {
        id: 2907,
        song_name: 'Tum Ko Dekha Hai',
        song_link: 'QhUbtGLF9aE',
        album_name: 'Prem Shakti'
      },
      {
        id: 2818,
        song_name: 'Bale Bale Nazren Tu Ladaye',
        song_link: 'l0xAobDcP08',
        album_name: 'Dulaara'
      },
      {
        id: 2854,
        song_name: 'Saawan Ki Boondein (Jhankar)',
        song_link: 'Omhz-FtX4SM',
        album_name: 'Ikke Pe Ikka'
      },
      {
        id: 2729,
        song_name: 'Babul',
        song_link: 'uDrC2zjjvIY',
        album_name: 'Hum Aapke Hain Koun...!'
      },
      {
        id: 2717,
        song_name: 'Jaadu Teri Nazar',
        song_link: 'KqKY43E61Gs',
        album_name: 'Darr'
      },
      {
        id: 2711,
        song_name: 'Dil Cheer Ke Dekh',
        song_link: 'jMDx6ly0PWI',
        album_name: 'Rang'
      },
      {
        id: 2636,
        song_name: 'Hum Saare Bekaar',
        song_link: 'BvV14GFKenA',
        album_name: 'Jaagruti'
      },
      {
        id: 2718,
        song_name: 'Likha Hai Ye In',
        song_link: 'lJq2cNq1TLE',
        album_name: 'Darr'
      },
      {
        id: 2712,
        song_name: 'Hum Tum Picture Dekh Rahe',
        song_link: 'Mh_KJvpRJRA',
        album_name: 'Rang'
      },
      {
        id: 2713,
        song_name: 'Mere Pyaar Ka Hisaab',
        song_link: 'zr5AHu7kD1Y',
        album_name: 'Rang'
      },
      {
        id: 2714,
        song_name: 'Meri Maa Ne Laga Diye',
        song_link: '68X_jINbLR0',
        album_name: 'Darr'
      },
      {
        id: 2708,
        song_name: 'Teri Mohabaat Ne Dil',
        song_link: 'IXoNGE8gvaE',
        album_name: 'Rang'
      },
      {
        id: 2633,
        song_name: 'Aayega Aayega',
        song_link: 'jUfbjQuAwu4',
        album_name: 'Jaagruti'
      },
      {
        id: 2715,
        song_name: 'Darwaza Band Kar Lo',
        song_link: 'uYgs4OtGwT8',
        album_name: 'Darr'
      },
      {
        id: 2709,
        song_name: 'Kahin Mujhe Pyar Hua to Nahin',
        song_link: '2mmDzJwJzmw',
        album_name: 'Rang'
      },
      {
        id: 2634,
        song_name: 'Chal Naujawan Aage Chal',
        song_link: 'pZ93Z40zlMM',
        album_name: 'Jaagruti'
      },
      {
        id: 2716,
        song_name: 'Ishq Da Rog Bura',
        song_link: '6cd018n8vsQ',
        album_name: 'Darr'
      },
      {
        id: 2710,
        song_name: 'Tumhen Dekhen Meri Aankhen',
        song_link: 'X6ssTbPqIio',
        album_name: 'Rang'
      },
      {
        id: 2635,
        song_name: 'Hawa Mein Kya Hai',
        song_link: 'iqNz6P1dluY',
        album_name: 'Jaagruti'
      },
      {
        id: 2564,
        song_name: 'Dekh Ke Yeh Roomal',
        song_link: 'MF3Y4sY36E0',
        album_name: 'Bekhudi'
      },
      {
        id: 2479,
        song_name: 'Yahaan Ke Hum Sikander',
        song_link: 'Hw6l6CgrzNw',
        album_name: 'Jo Jeeta Wohi Sikandar'
      },
      {
        id: 2596,
        song_name: 'Phool Ye Nahin Armaan',
        song_link: 'XsTAioQyyqQ',
        album_name: 'Ek Ladka Ek Ladki'
      },
      {
        id: 2515,
        song_name: 'O Meri Neendein Churane Wale',
        song_link: 'wD7yAdXtmHQ',
        album_name: 'Chamatkar'
      },
      {
        id: 2543,
        song_name: 'Bol Radha Bol',
        song_link: 'fgaZ13_TERk',
        album_name: 'Bol Radha Bol'
      },
      {
        id: 2661,
        song_name: 'Rub Jaisa Roop Tumhara',
        song_link: 've9UUixbU0w',
        album_name: 'Meera Ka Mohan'
      },
      {
        id: 2577,
        song_name: 'Bin tere kuchh bhi',
        song_link: '4iEq55WW_yo',
        album_name: 'Jaan Se Pyaara'
      },
      {
        id: 2492,
        song_name: 'Aisi Deewangi Dekhi Nahi Kahi',
        song_link: 'cH7ApCAFaoU',
        album_name: 'Deewana'
      },
      {
        id: 2609,
        song_name: '\u201cRone Na Dijiyega\u201d',
        song_link: 'ArvImF2OSmI',
        album_name: 'Jaan Tere Naam'
      },
      {
        id: 2529,
        song_name: 'Deewana Mujhe Kar Gaya',
        song_link: 'QKywno4v9hc',
        album_name: 'Khuda Gawah'
      },
      {
        id: 2642,
        song_name: 'Handsome Man Jabse Dkeha Tujhko',
        song_link: 'CvByF1lOxAA',
        album_name: 'Mr. Bond'
      },
      {
        id: 2623,
        song_name: 'Kangana Kunware Kangana',
        song_link: '5LhLjJ8cf9M',
        album_name: 'Mere Sajana Saath Nibhana'
      },
      {
        id: 2537,
        song_name: 'Waada Raha Sanam',
        song_link: '7_TPe8aRhbY',
        album_name: 'Khiladi'
      },
      {
        id: 2561,
        song_name: 'Dil Ka Kya Kasoor (Female)',
        song_link: 'k4U13jYUdvQ',
        album_name: 'Dil Ka Kya Kasoor'
      },
      {
        id: 2590,
        song_name: 'Mere Mehboob Tujhe',
        song_link: 'Xofk0k0c3Ek',
        album_name: 'Police Aur Mujrim'
      },
      {
        id: 2505,
        song_name: 'Gori Gori O Baanki Chhori',
        song_link: 'h8MZTYLOjvo',
        album_name: 'Shola Aur Shabnam'
      },
      {
        id: 2655,
        song_name: 'Bam Bhole',
        song_link: 'OyQYfTPZUNU',
        album_name: 'Isi Ka Naam Zindagi'
      },
      {
        id: 2571,
        song_name: 'Jo Dil Se Nikle Woh',
        song_link: 'HYFhDHKCOdo',
        album_name: 'Geet'
      },
      {
        id: 2486,
        song_name: 'Kehti Hai Dil Ki Lagi',
        song_link: 'AI1bQnHsp2g',
        album_name: 'Raju Ban Gaya Gentleman'
      },
      {
        id: 2603,
        song_name: 'Hairan Dekh Kar Ho Khuda',
        song_link: 'PueRGrPJbD8',
        album_name: 'Bewaffa Se Waffa'
      },
      {
        id: 2523,
        song_name: 'Sar Zameene Hindustan',
        song_link: '7b5AtOe78lQ',
        album_name: 'Khuda Gawah'
      },
      {
        id: 2649,
        song_name: 'Khat Likhna Hai Par Sochti Hoon',
        song_link: 'iTGtnCbyQLE',
        album_name: 'Khel'
      },
      {
        id: 2551,
        song_name: 'Aaye Barati',
        song_link: 'raD8qgiptH8',
        album_name: 'Anaam'
      },
      {
        id: 2584,
        song_name: 'Yeh Ho Raha Hai',
        song_link: 'zjCwxSWb1z0',
        album_name: 'Prem Deewane'
      },
      {
        id: 2499,
        song_name: 'Saiyan Se Chhup Ke',
        song_link: 'mI3IwjmFkhc',
        album_name: 'Beta'
      },
      {
        id: 2616,
        song_name: 'Deewana Dil Dhoondhe',
        song_link: 'uv34iAeEIP0',
        album_name: 'Mashooq'
      },
      {
        id: 2531,
        song_name: 'Khud Ko Kya Samajhti Hai',
        song_link: '5g6_KBNmunE',
        album_name: 'Khiladi'
      },
      {
        id: 2565,
        song_name: 'Main Pyar Karne Wala Hoon',
        song_link: 'UXifZzx7f1E',
        album_name: 'Bekhudi'
      },
      {
        id: 2480,
        song_name: 'Pehla Nasha',
        song_link: 'bRUzf7LgjLM',
        album_name: 'Jo Jeeta Wohi Sikandar'
      },
      {
        id: 2597,
        song_name: 'Wohi Bhayanaak Raa',
        song_link: 'MSTHrSNJNIg',
        album_name: 'Raat'
      },
      {
        id: 2516,
        song_name: 'Dekho Dekho Chamatkar',
        song_link: '-26TRaaOLLU',
        album_name: 'Chamatkar'
      },
      {
        id: 2544,
        song_name: 'Aa Jaana Tere Bin ',
        song_link: 'rKWtJcDnkOc',
        album_name: 'Bol Radha Bol'
      },
      {
        id: 2662,
        song_name: 'Krishna O Krishna',
        song_link: 'tJhJIcyoJ5k',
        album_name: 'Meera Ka Mohan'
      },
      {
        id: 2578,
        song_name: 'Chanchal chanchal mekhti raat hai',
        song_link: '0HJVq6I47R0',
        album_name: 'Jaan Se Pyaara'
      },
      {
        id: 2493,
        song_name: 'Tere Dard Se Dil Aabad Rah',
        song_link: 'cXD6AfWf18E',
        album_name: 'Deewana'
      },
      {
        id: 2610,
        song_name: 'In The Morning',
        song_link: 'CBxsggcs83A',
        album_name: 'Jaan Tere Naam'
      },
      {
        id: 2518,
        song_name: 'Ho Abhi To Hui Jawan',
        song_link: 'Up_okwo6JnU',
        album_name: 'Dil Aashna Hai (...The Heart Knows)'
      },
      {
        id: 2643,
        song_name: 'Wada Karen Chalo Le Lein Kasam',
        song_link: 'IU5ac03cBic',
        album_name: 'Mr. Bond'
      },
      {
        id: 2624,
        song_name: 'Dam Dam Dafli Bajaoon',
        song_link: '3lduGZzRVsc',
        album_name: 'Mere Sajana Saath Nibhana'
      },
      {
        id: 2552,
        song_name: 'Dil Le Gayi Teri Bindiya ',
        song_link: 'NsJ4xC0Cb3k',
        album_name: 'Vishwatma'
      },
      {
        id: 2591,
        song_name: 'Aao Jhoomen Nachen',
        song_link: '3LZtk1I7-6Q',
        album_name: 'Ek Ladka Ek Ladki'
      },
      {
        id: 2506,
        song_name: 'Jane De Jane De Mujhe Jane De',
        song_link: 'GxtY39xTXWs',
        album_name: 'Shola Aur Shabnam'
      },
      {
        id: 2538,
        song_name: 'Chinna Chinna Aasa',
        song_link: 'd50Cp2GFY98',
        album_name: 'Roja'
      },
      {
        id: 2656,
        song_name: 'Main Hoon Raat Ki',
        song_link: 'UyN7vrV4s8k',
        album_name: 'Isi Ka Naam Zindagi'
      },
      {
        id: 2572,
        song_name: 'O Piya O Piya',
        song_link: 'OHGCA1osrpQ',
        album_name: 'Geet'
      },
      {
        id: 2487,
        song_name: 'Tu Mere Saath Saath',
        song_link: 'TFofuhj5YA0',
        album_name: 'Raju Ban Gaya Gentleman'
      },
      {
        id: 2604,
        song_name: 'Hum Jaisa Kahin Aap Ko',
        song_link: 'Gg-eDsqk6wA',
        album_name: 'Bewaffa Se Waffa'
      },
      {
        id: 2524,
        song_name: 'Tu Mujhe Kabool',
        song_link: 'kiduOidrIZs',
        album_name: 'Khuda Gawah'
      },
      {
        id: 2637,
        song_name: 'Chal Mere Ghode',
        song_link: 'OkKIg-w38tY',
        album_name: 'Nishchaiy'
      },
      {
        id: 2650,
        song_name: 'Na Hai Zameen Na Aasman',
        song_link: 'Yn8RycdAx5U',
        album_name: 'Khel'
      },
      {
        id: 2556,
        song_name: 'Dil Ka Kya Kasoor',
        song_link: 'lNyq6KTtQ8Q',
        album_name: 'Dil Ka Kya Kasoor'
      },
      {
        id: 2585,
        song_name: 'Mohabbat Zindabad',
        song_link: 'vpGVjC1rieo',
        album_name: 'Prem Deewane'
      },
      {
        id: 2500,
        song_name: 'Sajna Mein Teri Tu Mera',
        song_link: '2hW6fmMxVic',
        album_name: 'Beta'
      },
      {
        id: 2617,
        song_name: 'Kaun Ho Tum-Duet',
        song_link: 'KjMV_K8I6Mw',
        album_name: 'Mashooq'
      },
      {
        id: 2532,
        song_name: 'Kya Khaber Thi Jaana',
        song_link: 'M14fziF1MoU',
        album_name: 'Khiladi'
      },
      {
        id: 2566,
        song_name: 'Daddy Mummy Meri Shaadi',
        song_link: '9_YHj-LZdmc',
        album_name: 'Bekhudi'
      },
      {
        id: 2481,
        song_name: 'Arre Yaaron Mere Pyaaron',
        song_link: 'BBmPHIW6B68',
        album_name: 'Jo Jeeta Wohi Sikandar'
      },
      {
        id: 2598,
        song_name: 'Yeh Dil Bewafa Se Wafa ',
        song_link: 'lqWluOMsJNQ',
        album_name: 'Bewaffa Se Waffa'
      },
      {
        id: 2517,
        song_name: 'Jawani Diwani',
        song_link: 'K9GwEmqtvqk',
        album_name: 'Chamatkar'
      },
      {
        id: 2545,
        song_name: 'Deewana Dil Beqarar Tha',
        song_link: 'WGII8KprZxY',
        album_name: 'Bol Radha Bol'
      },
      {
        id: 2663,
        song_name: 'Tune Preet Jo Mujhse Jodi',
        song_link: 'wvBm_o_3Z0k',
        album_name: 'Meera Ka Mohan'
      },
      {
        id: 2579,
        song_name: 'Tale lagale pehere bithale',
        song_link: 'hepL7FQYVko',
        album_name: 'Jaan Se Pyaara'
      },
      {
        id: 2494,
        song_name: 'Koi Na Koi Chahiye Pyar karne wala',
        song_link: '0A6WPBsUHHI&vl=en',
        album_name: 'Deewana'
      },
      {
        id: 2611,
        song_name: 'Bolo Sanam Kya Hai',
        song_link: 'AFS5b_q17jY',
        album_name: 'Daulat Ki Jung'
      },
      {
        id: 2519,
        song_name: 'Bhool Ke Din',
        song_link: '1ze77hns5qo',
        album_name: 'Dil Aashna Hai (...The Heart Knows)'
      },
      {
        id: 2644,
        song_name: 'Baadal Garje Bijli Chamke',
        song_link: 'OqU-Y1tBLts',
        album_name: 'Mr. Bond'
      },
      {
        id: 2592,
        song_name: 'Ande Se Aayee Murgi',
        song_link: '5-noCLrqi7M',
        album_name: 'Ek Ladka Ek Ladki'
      },
      {
        id: 2507,
        song_name: 'Tu Pagal Premi Awara',
        song_link: 'CBYh50JWsVY',
        album_name: 'Shola Aur Shabnam'
      },
      {
        id: 2625,
        song_name: 'Mandir Toote To Ban Jaye',
        song_link: 'NlGMtDDwc3I',
        album_name: 'Mere Sajana Saath Nibhana'
      },
      {
        id: 2553,
        song_name: 'Aadmi Zindagi',
        song_link: 'X4zI1_u2QmQ',
        album_name: 'Vishwatma'
      },
      {
        id: 2539,
        song_name: 'Rukkumani Rukkumani',
        song_link: 'Q77giooKkrQ',
        album_name: 'Roja'
      },
      {
        id: 2657,
        song_name: 'Tum Jaisi Koi Sunder',
        song_link: 'WWrXg_kWts4',
        album_name: 'Isi Ka Naam Zindagi'
      },
      {
        id: 2573,
        song_name: 'Prem Patra Aaya Hai',
        song_link: 'q-NH2WyPh6E',
        album_name: 'Geet'
      },
      {
        id: 2488,
        song_name: 'Tham Tham Tham',
        song_link: 'H9nG90A8NIA',
        album_name: 'Raju Ban Gaya Gentleman'
      },
      {
        id: 2605,
        song_name: 'Akha India Janta Hai',
        song_link: 'qf0T8yUCqyo',
        album_name: 'Jaan Tere Naam'
      },
      {
        id: 2525,
        song_name: 'Tu Na Ja Mere Badshah',
        song_link: 'u0M0kfcSsYY',
        album_name: 'Khuda Gawah'
      },
      {
        id: 2638,
        song_name: 'Chhutti Kar Di Meri',
        song_link: 'wntMn_dl9f4',
        album_name: 'Nishchaiy'
      },
      {
        id: 2651,
        song_name: 'Soone Shaam Savere',
        song_link: '11sbH-1lcY8',
        album_name: 'Khel'
      },
      {
        id: 2557,
        song_name: 'Milne Ki Tum Koshish Kerna',
        song_link: '_f9kIjhuYMo',
        album_name: 'Dil Ka Kya Kasoor'
      },
      {
        id: 2586,
        song_name: 'Dil Ghabrata Hai ',
        song_link: 'IfRKBrXDAIg',
        album_name: 'Police Aur Mujrim'
      },
      {
        id: 2501,
        song_name: 'Kitna Pyara Ye Chehra',
        song_link: 'OmqYj2mrtXw',
        album_name: 'Beta'
      },
      {
        id: 2618,
        song_name: 'O Yaara Kai See Hai Teri Bewafai-Duet',
        song_link: 'mP2yl7-TCMU',
        album_name: 'Mashooq'
      },
      {
        id: 2533,
        song_name: 'Hum Yaar Hain Yaaron Ke',
        song_link: 'xJKLAgAZ1lc',
        album_name: 'Khiladi'
      },
      {
        id: 2567,
        song_name: 'Aa Khel Khelen Hum',
        song_link: 'GgorbOT4rxE',
        album_name: 'Bekhudi'
      },
      {
        id: 2482,
        song_name: 'Rooth Ke Humse',
        song_link: 'A4ir9x_IG7Q',
        album_name: 'Jo Jeeta Wohi Sikandar'
      },
      {
        id: 2599,
        song_name: 'Babul Chodi Na Jaaye (',
        song_link: 'L6h5PmRbagE',
        album_name: 'Bewaffa Se Waffa'
      },
      {
        id: 2508,
        song_name: 'Assa Dil Tere Kadamach',
        song_link: '_GdMq7Aa5yw',
        album_name: 'Balwaan'
      },
      {
        id: 2546,
        song_name: 'Hawa Sard Hai',
        song_link: 'E5ynQUmGdpw',
        album_name: 'Bol Radha Bol'
      },
      {
        id: 2664,
        song_name: 'Jab Jab Tujhko Dekha',
        song_link: 'f2gZi-8AmPI',
        album_name: 'Meera Ka Mohan'
      },
      {
        id: 2580,
        song_name: 'Aise Lagi Aag Barabar',
        song_link: 's7np9Uuw0Tg',
        album_name: 'Prem Deewane'
      },
      {
        id: 2495,
        song_name: 'Sochenge Tumhe Pyaar Kare Ke Nahi ',
        song_link: 'DWhernHNuc8',
        album_name: 'Deewana'
      },
      {
        id: 2612,
        song_name: 'Hai Daiya Jhumke Ki',
        song_link: '1XFKqGCWjZY',
        album_name: 'Daulat Ki Jung'
      },
      {
        id: 2520,
        song_name: 'Rangeen Haseen Raat Ho',
        song_link: '09qOm2C9KfI',
        album_name: 'Dil Aashna Hai (...The Heart Knows)'
      },
      {
        id: 2645,
        song_name: 'Mehbooba Mehbooba Saat Ajoobe Duniya Mein',
        song_link: 'orAPv_eik58',
        album_name: 'Mr. Bond'
      },
      {
        id: 2593,
        song_name: 'Choti Si Duniya Mohabbat Ki',
        song_link: '8PYChEc7jMA',
        album_name: 'Ek Ladka Ek Ladki'
      },
      {
        id: 2512,
        song_name: 'Pyar Se Meri Taraf Na Dekho',
        song_link: 'DLYp9GWowYQ',
        album_name: 'Chamatkar'
      },
      {
        id: 2555,
        song_name: 'Aankhon Mein Hai Kya',
        song_link: 'eGJwiQLycCw',
        album_name: 'Vishwatma'
      },
      {
        id: 2476,
        song_name: 'Mushkil Mein Hai Kaun Kisi Ka',
        song_link: 'EyB_L12HpiA',
        album_name: 'Angaar'
      },
      {
        id: 2540,
        song_name: 'Kaadhal Rojaavae',
        song_link: 'YnD0nYZQrM4',
        album_name: 'Roja'
      },
      {
        id: 2658,
        song_name: 'Tumhein Dil Se Chaha Tha',
        song_link: 'MZVZcOzA4kk',
        album_name: 'Meera Ka Mohan'
      },
      {
        id: 2574,
        song_name: 'Sarpe Gham Gham',
        song_link: 'Av5-q-ivwVQ',
        album_name: 'Geet'
      },
      {
        id: 2489,
        song_name: 'Seene Mein Dil Hai',
        song_link: 'xlvQNcS7uOY',
        album_name: 'Raju Ban Gaya Gentleman'
      },
      {
        id: 2606,
        song_name: 'Kal College Band Ho Jayega',
        song_link: 'ou3OTxK-UIQ',
        album_name: 'Jaan Tere Naam'
      },
      {
        id: 2526,
        song_name: 'Rab Ko Yaad Karoon',
        song_link: '5jHpvV_qP4s',
        album_name: 'Khuda Gawah'
      },
      {
        id: 2639,
        song_name: 'Dekho Dekho Tum',
        song_link: 'Q6xi0ZzL95k',
        album_name: 'Nishchaiy'
      },
      {
        id: 2558,
        song_name: 'Dil Jiger Nazar Kiya Hai',
        song_link: 'WSLXPvwIiSo',
        album_name: 'Dil Ka Kya Kasoor'
      },
      {
        id: 2587,
        song_name: 'Apni Aankhon Ke Sitaron Mein',
        song_link: 'kRNiQrli8MM',
        album_name: 'Police Aur Mujrim'
      },
      {
        id: 2502,
        song_name: 'Nach Mundeya',
        song_link: 'RBwgJSfKYq8',
        album_name: 'Beta'
      },
      {
        id: 2619,
        song_name: 'Too Bhi Tadpegi',
        song_link: 'ddIFlqMySqA',
        album_name: 'Mashooq'
      },
      {
        id: 2534,
        song_name: 'Hoke Man Aaj Magan',
        song_link: 'SeNHnorFPEE',
        album_name: 'Khiladi'
      },
      {
        id: 2652,
        song_name: 'Gulai Gulai Go',
        song_link: 'y9hMqpUUIbk',
        album_name: 'Isi Ka Naam Zindagi'
      },
      {
        id: 2568,
        song_name: 'Mujhe Kya Pata Tera Ghar',
        song_link: 'JwSuScSgRHo',
        album_name: 'Bekhudi'
      },
      {
        id: 2483,
        song_name: 'Shehar Ki Pariyon',
        song_link: 'LB5oAmEvMf4',
        album_name: 'Jo Jeeta Wohi Sikandar'
      },
      {
        id: 2600,
        song_name: 'Aaya Hoon Badi Door Se',
        song_link: 'RCyxEa9yUhM',
        album_name: 'Bewaffa Se Waffa'
      },
      {
        id: 2509,
        song_name: 'Dhin Tak Dhin Tak ',
        song_link: '6eQQ_5EK24M',
        album_name: 'Balwaan'
      },
      {
        id: 2547,
        song_name: 'Main Hoon Gaon Ki Gori',
        song_link: 'zQzw9C6ANvA',
        album_name: 'Bol Radha Bol'
      },
      {
        id: 2581,
        song_name: 'Prem Deewane',
        song_link: 'MsXzDinSLJk',
        album_name: 'Prem Deewane'
      },
      {
        id: 2496,
        song_name: 'Koyal Si Teri Boli',
        song_link: 'v88_gVY8EU0',
        album_name: 'Beta'
      },
      {
        id: 2613,
        song_name: 'Roothi Aankhen Lekar',
        song_link: 'qb8WpDpJI3M',
        album_name: 'Daulat Ki Jung'
      },
      {
        id: 2521,
        song_name: 'Ek Dil Ek Jaan Ek Hai Hamara (',
        song_link: 'tCINWQMPSlI',
        album_name: 'Dil Aashna Hai (...The Heart Knows)'
      },
      {
        id: 2646,
        song_name: 'Meri Jane Jana Mere Paas To Aao',
        song_link: 'l2jsCvh1Ed0',
        album_name: 'Mr. Bond'
      },
      {
        id: 2594,
        song_name: 'Ek Ladka Ek Ladki',
        song_link: 'Hx4rr8wztiw',
        album_name: 'Ek Ladka Ek Ladki'
      },
      {
        id: 2513,
        song_name: 'Ye hai pyar pyar',
        song_link: '-qSyasvNnio',
        album_name: 'Chamatkar'
      },
      {
        id: 2562,
        song_name: 'Khat Maine Tere Naam Likha',
        song_link: 'ksANbg9evCM',
        album_name: 'Bekhudi'
      },
      {
        id: 2477,
        song_name: 'Chal Aage Aur Dekh Peechhe',
        song_link: 'oBAo3nPDq98',
        album_name: 'Angaar'
      },
      {
        id: 2541,
        song_name: 'Pudu Vellai Mazhai',
        song_link: '1uF4F2KfrtU',
        album_name: 'Roja'
      },
      {
        id: 2659,
        song_name: 'Saari Duniya Pyari',
        song_link: 'urCsS5ijSGo',
        album_name: 'Meera Ka Mohan'
      },
      {
        id: 2575,
        song_name: 'Tere Sur Mein Main Gaaoon',
        song_link: 'NcpRLljMWk0',
        album_name: 'Geet'
      },
      {
        id: 2490,
        song_name: 'Enn Kadal',
        song_link: '8PS2lvgZeFQ',
        album_name: 'Deewana'
      },
      {
        id: 2607,
        song_name: 'Lekin Chhup Chuup Ke Milne S',
        song_link: '2f1tF09JfiA',
        album_name: 'Jaan Tere Naam'
      },
      {
        id: 2527,
        song_name: 'Mere Watan Mein Maine',
        song_link: '-0SUZ0di3Po',
        album_name: 'Khuda Gawah'
      },
      {
        id: 2640,
        song_name: 'Kisi Haseen Yaar Ki Talash Hai',
        song_link: 'k5PO8wE75ZQ',
        album_name: 'Nishchaiy'
      },
      {
        id: 2620,
        song_name: 'Nakhre Dikha Ke Dil Ko Chura Ke',
        song_link: 'RK7GScqxVG8',
        album_name: 'Mere Sajana Saath Nibhana'
      },
      {
        id: 2535,
        song_name: 'Dekha Teri Mast Nigahon Mein',
        song_link: '9mC5CMRIBkY',
        album_name: 'Khiladi'
      },
      {
        id: 2559,
        song_name: 'Khata To Jab Ho Ke',
        song_link: '4piorqrWOSI',
        album_name: 'Dil Ka Kya Kasoor'
      },
      {
        id: 2588,
        song_name: 'Tum Din Ko Din Kah Do',
        song_link: '8Gvzhg1hEhc',
        album_name: 'Police Aur Mujrim'
      },
      {
        id: 2503,
        song_name: 'Khushiyon Ka Din Aaya Hai',
        song_link: 'AFRIWBahCd8',
        album_name: 'Beta'
      },
      {
        id: 2653,
        song_name: 'Zara Ruk Ja',
        song_link: 'Vrcibdyk9-Q',
        album_name: 'Isi Ka Naam Zindagi'
      },
      {
        id: 2569,
        song_name: 'Aankhon Mein Basa Loon Toh',
        song_link: 'ZGw9atvJmWk',
        album_name: 'Geet'
      },
      {
        id: 2484,
        song_name: 'Kya Hua (Laveria Hua)',
        song_link: 'BOB-k0mGJ-w',
        album_name: 'Raju Ban Gaya Gentleman'
      },
      {
        id: 2601,
        song_name: 'Waise to Zamane Mein',
        song_link: 'MZX27eL23v4',
        album_name: 'Bewaffa Se Waffa'
      },
      {
        id: 2510,
        song_name: 'Dip Dip Dip Umar Hai Solah',
        song_link: 'TVm9W_gyE1U',
        album_name: 'Balwaan'
      },
      {
        id: 2548,
        song_name: 'Churi Bole',
        song_link: '0r_HO5Q9B-Q',
        album_name: 'Anaam'
      },
      {
        id: 2582,
        song_name: 'Pi Pi Piya',
        song_link: 'x77BtACQ-48',
        album_name: 'Prem Deewane'
      },
      {
        id: 2497,
        song_name: 'Dhak Dhak Karne Laga',
        song_link: 'PriYgiqUOlE',
        album_name: 'Beta'
      },
      {
        id: 2614,
        song_name: 'Samjha Karo Baat Jaani',
        song_link: 'sxwArgjvqGM',
        album_name: 'Daulat Ki Jung'
      },
      {
        id: 2522,
        song_name: 'Kisi Ne Bhi To Na Dekha',
        song_link: '4OoyHFvov78',
        album_name: 'Dil Aashna Hai (...The Heart Knows)'
      },
      {
        id: 2647,
        song_name: 'Asha Nirasha To Jeevan Mein Aaye',
        song_link: 'zI4DiLeS94M',
        album_name: 'Mr. Bond'
      },
      {
        id: 2595,
        song_name: 'Kitna Pyar Tumhen Karte Hain',
        song_link: 'GL-vOMjJshE',
        album_name: 'Ek Ladka Ek Ladki'
      },
      {
        id: 2514,
        song_name: 'Bichhoo O Bichhoo',
        song_link: 'fcZruvjrNnE',
        album_name: 'Chamatkar'
      },
      {
        id: 2563,
        song_name: 'Tu Kahan Kahan Ye Bata',
        song_link: 'CRDerEDME1M',
        album_name: 'Bekhudi'
      },
      {
        id: 2478,
        song_name: 'Geet Purane Gao',
        song_link: 'JaLG89j1vl0',
        album_name: 'Angaar'
      },
      {
        id: 2542,
        song_name: 'Tu Tu Tu Tara',
        song_link: 'voJW5tszcFM',
        album_name: 'Bol Radha Bol'
      },
      {
        id: 2660,
        song_name: 'Mere Liye Zaruri Pyar Tera',
        song_link: 'DtMYy0M3jSw',
        album_name: 'Meera Ka Mohan'
      },
      {
        id: 2576,
        song_name: 'Tujhse Mujhe Pyar Tha',
        song_link: 'vIp2sJTF8vY',
        album_name: 'Geet'
      },
      {
        id: 2491,
        song_name: 'Teri Ummid Tera Intezar',
        song_link: 'cdcDv_FEWf4',
        album_name: 'Deewana'
      },
      {
        id: 2608,
        song_name: '\u201cMaine Ye Dil Tumko Diya',
        song_link: 'p83SEqYrAuk',
        album_name: 'Jaan Tere Naam'
      },
      {
        id: 2528,
        song_name: 'Main Aisee Cheez Nahin',
        song_link: 'DMz1h5Hj8fY',
        album_name: 'Khuda Gawah'
      },
      {
        id: 2641,
        song_name: 'Nayee Surahi Taaza Pani',
        song_link: 'jN1Tj74it7s',
        album_name: 'Nishchaiy'
      },
      {
        id: 2622,
        song_name: 'Jhoom Jhom Kahta Hai Mera Jiya',
        song_link: 'N1-Vjqauzz0',
        album_name: 'Mere Sajana Saath Nibhana'
      },
      {
        id: 2536,
        song_name: 'Tu Shama Main Parwana Tera',
        song_link: 'bFMJcOdrLwg',
        album_name: 'Khiladi'
      },
      {
        id: 2560,
        song_name: 'Ga Raha Hoon Is Mehfil Mein',
        song_link: 'SUl3y_o3Teo',
        album_name: 'Dil Ka Kya Kasoor'
      },
      {
        id: 2589,
        song_name: 'Apni Aankhon Ke Sitaron Mein ',
        song_link: 'kRNiQrli8MM',
        album_name: 'Police Aur Mujrim'
      },
      {
        id: 2504,
        song_name: 'Bole Bole Dil Mera Bole',
        song_link: 'w-fmYo7NU9Q',
        album_name: 'Shola Aur Shabnam'
      },
      {
        id: 2654,
        song_name: 'Aiyo Aiyo',
        song_link: 'Tg1B7MT9UV0',
        album_name: 'Isi Ka Naam Zindagi'
      },
      {
        id: 2570,
        song_name: 'Aap Jo Mere Meet Na Hote',
        song_link: '1KmPnqQaSfA',
        album_name: 'Geet'
      },
      {
        id: 2485,
        song_name: 'Dil Hai Mera Deewana',
        song_link: 'a8p2pstoaAE',
        album_name: 'Raju Ban Gaya Gentleman'
      },
      {
        id: 2602,
        song_name: 'Aa Mere Paas O Meri Jaan',
        song_link: 'fU_jIXxvqy4',
        album_name: 'Bewaffa Se Waffa'
      },
      {
        id: 2511,
        song_name: 'Jalta Hai Badan',
        song_link: 'tzGKt35UhUE',
        album_name: 'Balwaan'
      },
      {
        id: 2549,
        song_name: 'Hum Nashee',
        song_link: 'sMymiqgeAes',
        album_name: 'Anaam'
      },
      {
        id: 2583,
        song_name: 'Happy Birthday to You Mr. Pedro',
        song_link: 'TfbRtaYjVJA',
        album_name: 'Prem Deewane'
      },
      {
        id: 2498,
        song_name: 'Dhadkane Saansein Jawani',
        song_link: 'ZpMmMBgum6U',
        album_name: 'Beta'
      },
      {
        id: 2615,
        song_name: 'Ab Teer Chale Talwar Chale - Sad',
        song_link: 'bSa4HgSvCAM',
        album_name: 'Daulat Ki Jung'
      },
      {
        id: 2530,
        song_name: 'Waada Raha Sanam',
        song_link: '7_TPe8aRhbY',
        album_name: 'Khiladi'
      },
      {
        id: 2648,
        song_name: 'Ek Baat Maan Lo Tum (From "Khel")',
        song_link: 'zOuHCxe4A-4',
        album_name: 'Khel'
      },
      {
        id: 2336,
        song_name: 'Tumhein Apna Banane Ki Kasam Khai Hai',
        song_link: 'XfGfjQzYcU8',
        album_name: 'Sadak'
      },
      {
        id: 2368,
        song_name: 'Gabbar Singh Yeh Kah',
        song_link: 'wCvP_8VrIl4',
        album_name: '100 Days'
      },
      {
        id: 2447,
        song_name: 'Zindagi Ki Talash Mein',
        song_link: 'NT3wT4b1Xec',
        album_name: 'Saathi'
      },
      {
        id: 2400,
        song_name: 'Baitha Neeli Jheel Kinare',
        song_link: '5trOZCEqr8w',
        album_name: 'Kurbaan'
      },
      {
        id: 2349,
        song_name: 'Bedardi Tere Pyar Ne',
        song_link: 'c8Gp6TcPAP4',
        album_name: 'Henna'
      },
      {
        id: 2428,
        song_name: 'Duja Koi Roye',
        song_link: 'vbAA8FoyFOU',
        album_name: 'Benaam Badsha'
      },
      {
        id: 2381,
        song_name: 'Tere Bin Jag',
        song_link: 'melkrDC9rPo',
        album_name: 'Farishtay'
      },
      {
        id: 2460,
        song_name: 'Rim Jhim Rim Jhim Saawan',
        song_link: 'rzJbZ6JgONc',
        album_name: 'Dancer'
      },
      {
        id: 2413,
        song_name: 'Kya Gaadi Hai Kya Number Hai',
        song_link: 'bfv9F76Lczg',
        album_name: 'Lakshmanrekha'
      },
      {
        id: 2330,
        song_name: 'Yeh Lamhe Yeh Pal',
        song_link: 'gFmSq2PACPs',
        album_name: 'Lamhe'
      },
      {
        id: 2362,
        song_name: 'Galyat Sankali Sonyachi',
        song_link: 'NaaZ9kT0JoE',
        album_name: 'Dil Hai Ki Manta Nahin'
      },
      {
        id: 2441,
        song_name: 'Achchhaji Ab Hum',
        song_link: 'vwhwMLtAni0',
        album_name: 'Bhabhi'
      },
      {
        id: 2394,
        song_name: 'Tumse Jo Dekhte Hi Pyar Hua',
        song_link: 'lq6uFw6yt1I',
        album_name: 'Patthar Ke Phool'
      },
      {
        id: 2473,
        song_name: 'Jiye To Jiye Kaise',
        song_link: 'ig35c88dpQc',
        album_name: 'Saajan'
      },
      {
        id: 2426,
        song_name: 'Mujhe Allah Ki Kasam',
        song_link: 'DB764Q9n9cU',
        album_name: 'Sanam Bewafa'
      },
      {
        id: 2375,
        song_name: 'Mujhe Aaj Kuchh Na Kehna',
        song_link: 'RFXx7I1CWj4',
        album_name: 'Akayla'
      },
      {
        id: 2454,
        song_name: 'Aap Ko Main Gul Kahke',
        song_link: 'AtyyNWtdO3Q',
        album_name: 'Gunehgar Kaun'
      },
      {
        id: 2407,
        song_name: 'Naina Ho Gaye Bawre',
        song_link: 'OhtuPfCiFJ4',
        album_name: 'Phool Bane Angaarey'
      },
      {
        id: 2343,
        song_name: 'Maine Pyar Tumhi Se Kiya Hai',
        song_link: 'PNVbJcvIs5U',
        album_name: 'Phool Aur Kaante'
      },
      {
        id: 2356,
        song_name: 'O Mere Sapno Ke Saudagar',
        song_link: '03Aa_s5A3bY',
        album_name: 'Dil Hai Ki Manta Nahin'
      },
      {
        id: 2435,
        song_name: 'Karz Chukana Hai - Sad',
        song_link: 'iz2pyCl4hC8',
        album_name: 'Karz Chukana Hai'
      },
      {
        id: 2388,
        song_name: 'Saathiya Tune Kya Kiya',
        song_link: 'MZKZsYk2jJg',
        album_name: 'Love'
      },
      {
        id: 2467,
        song_name: 'Insaan Kitna Gir Gaya',
        song_link: 'iZtsKqMdwNU',
        album_name: 'Naamcheen'
      },
      {
        id: 2420,
        song_name: 'Kabhi Tum Humse Karo',
        song_link: '8Fw5nhRZY0I',
        album_name: 'Khoon Ka Karz'
      },
      {
        id: 2401,
        song_name: 'Diwanon Se Poochho',
        song_link: '2q_sNuGdCtk',
        album_name: 'Kurbaan'
      },
      {
        id: 2337,
        song_name: 'Jab Jab Pyar Pe Pehra Hua Hai',
        song_link: 'k6hlV0iUhRo&vl=en',
        album_name: 'Sadak'
      },
      {
        id: 2369,
        song_name: 'Sun Sun Sun Dilruba',
        song_link: 'AWs7LqmdM8U',
        album_name: '100 Days'
      },
      {
        id: 2448,
        song_name: 'Tera Naam Sab Ke Lab Pe',
        song_link: 'rlt6IT6jm3o',
        album_name: 'Saathi'
      },
      {
        id: 2350,
        song_name: 'Vash Malle',
        song_link: '4119MSJLzfk',
        album_name: 'Henna'
      },
      {
        id: 2429,
        song_name: 'O Mata Ke Soja',
        song_link: '8i3fUYAeIgI',
        album_name: 'Benaam Badsha'
      },
      {
        id: 2382,
        song_name: 'Raja Ka Baj Gaya Baja',
        song_link: 'Cagr1nQ_ZEY',
        album_name: 'Farishtay'
      },
      {
        id: 2461,
        song_name: 'Teri Yaad Aayi',
        song_link: 'ga70Zee0Z6U',
        album_name: 'Dancer'
      },
      {
        id: 2414,
        song_name: 'Ye Sitam Mere Saath Mein',
        song_link: 'P9AliGeUGQ4',
        album_name: 'Lakshmanrekha'
      },
      {
        id: 2331,
        song_name: 'Gudiya Rani',
        song_link: 'ROYoch5G460',
        album_name: 'Lamhe'
      },
      {
        id: 2363,
        song_name: 'Dil Hai Ke Manta Nahin',
        song_link: 'T4Gynle0iEI',
        album_name: 'Dil Hai Ki Manta Nahin'
      },
      {
        id: 2442,
        song_name: 'Chandi Ki Cycle Sone Ki Seat',
        song_link: 'pXAxMkwMlmM',
        album_name: 'Bhabhi'
      },
      {
        id: 2395,
        song_name: 'Deewana Dil Bin Sajna Ke Manena',
        song_link: 'zyLVKH9i1no',
        album_name: 'Patthar Ke Phool'
      },
      {
        id: 2474,
        song_name: 'Dekha Hai Pehli Baar',
        song_link: 'm-pKvF4QIxY',
        album_name: 'Saajan'
      },
      {
        id: 2376,
        song_name: 'Nazrein Mili',
        song_link: 'GjXQZh46fUY',
        album_name: 'Afsana Pyar Ka'
      },
      {
        id: 2455,
        song_name: 'Na Sanam Mar Jayengay Ham',
        song_link: 'bgpZPRHYJps',
        album_name: 'Gunehgar Kaun'
      },
      {
        id: 2408,
        song_name: 'Phool Kabhi Jab',
        song_link: 'rth9o39Zltg',
        album_name: 'Phool Bane Angaarey'
      },
      {
        id: 2344,
        song_name: 'Dheere Dheere Pyar Ko',
        song_link: 'zuPoUsdXrqM',
        album_name: 'Phool Aur Kaante'
      },
      {
        id: 2357,
        song_name: 'Kaise Mizaz Aapke Hain',
        song_link: 'KbEJB3a2tPk',
        album_name: 'Dil Hai Ki Manta Nahin'
      },
      {
        id: 2436,
        song_name: 'Tere Haathon Ne Chua',
        song_link: 'kzEpfcGqTos',
        album_name: 'Karz Chukana Hai'
      },
      {
        id: 2389,
        song_name: 'We Are Made For Each Other',
        song_link: 'tAiO3RXgBVY',
        album_name: 'Love'
      },
      {
        id: 2468,
        song_name: 'Lift Band Thi',
        song_link: 'xoCK4dGnja0',
        album_name: 'Naamcheen'
      },
      {
        id: 2421,
        song_name: 'Allah Karam Karam',
        song_link: 'k3KTvRDU9EU',
        album_name: 'Sanam Bewafa'
      },
      {
        id: 2402,
        song_name: 'Main Tujhpe Kurbaan',
        song_link: '2swzj6mMwmk',
        album_name: 'Kurbaan'
      },
      {
        id: 2338,
        song_name: 'Mohabbat Ki Hai Tumhare Liye',
        song_link: 'XEgihe0g8bM',
        album_name: 'Sadak'
      },
      {
        id: 2370,
        song_name: 'Tana Dere Na Tana Na De',
        song_link: 'tAk3nc5ME08',
        album_name: '100 Days'
      },
      {
        id: 2449,
        song_name: 'Teri Baahon Mein Jeena Hai',
        song_link: '_ywKWwf49HE',
        album_name: 'Saugandh'
      },
      {
        id: 2351,
        song_name: 'Anar Dana',
        song_link: '7zhiv9WAOkU',
        album_name: 'Henna'
      },
      {
        id: 2430,
        song_name: 'Mera Kunwara Padosi',
        song_link: 'PkG9EKSLusA',
        album_name: 'Benaam Badsha'
      },
      {
        id: 2383,
        song_name: 'Jhanda Ooncha Rahe Hamara',
        song_link: 'MmRf8IRF1VI',
        album_name: 'Farishtay'
      },
      {
        id: 2462,
        song_name: 'Badli Hai Na Badlegi',
        song_link: 'AAloaI22GRU',
        album_name: 'Banjaran'
      },
      {
        id: 2415,
        song_name: 'Yeh Zindagi Hai',
        song_link: 'Tq16zyJOeq0',
        album_name: 'Lakshmanrekha'
      },
      {
        id: 2332,
        song_name: 'Yeh Lamhe Yeh Pal',
        song_link: 'ReJ5ZQhu3Bw',
        album_name: 'Lamhe'
      },
      {
        id: 2364,
        song_name: 'Mainu Ishq Da Lagya Rog',
        song_link: '0lGFySAx0K0',
        album_name: 'Dil Hai Ki Manta Nahin'
      },
      {
        id: 2443,
        song_name: 'Hui Aankh Nam',
        song_link: '_ZPf39ik9fY',
        album_name: 'Saathi'
      },
      {
        id: 2396,
        song_name: 'Sajna Tere Bina Kya Jeena',
        song_link: 'hhRgxa0bKe4',
        album_name: 'Patthar Ke Phool'
      },
      {
        id: 2475,
        song_name: 'Dulaara',
        song_link: 'vRAhx_MMz_k',
        album_name: 'Saajan'
      },
      {
        id: 2345,
        song_name: 'Premi Aashiq Aawara',
        song_link: '05NhyzQ7MKI',
        album_name: 'Phool Aur Kaante'
      },
      {
        id: 2377,
        song_name: 'Yaad Teri Aati Ha',
        song_link: 'p-vtsEtkndA',
        album_name: 'Afsana Pyar Ka'
      },
      {
        id: 2456,
        song_name: 'Aao Chalo Milke Gaaye',
        song_link: 'Nvpkk4wM20U',
        album_name: 'Dancer'
      },
      {
        id: 2409,
        song_name: 'Angul Kante Kalam',
        song_link: 'JwUA4Yfua1c',
        album_name: 'First Love Letter'
      },
      {
        id: 2358,
        song_name: 'Tu Pyar Hai Kisi Aur Ka',
        song_link: 'U0qBRoeQa-g&vl=en',
        album_name: 'Dil Hai Ki Manta Nahin'
      },
      {
        id: 2437,
        song_name: 'Anarkali Tere Sar Ki Kasam',
        song_link: '1yIRj4IrHxY',
        album_name: 'Do Matwale'
      },
      {
        id: 2390,
        song_name: 'Kabhi Tu Chhalia Lagta Hai',
        song_link: 'dYNDuORcngo',
        album_name: 'Patthar Ke Phool'
      },
      {
        id: 2469,
        song_name: 'Mere Preetam Mere Balam',
        song_link: 'ohBgwMPEWNI',
        album_name: 'Naamcheen'
      },
      {
        id: 2422,
        song_name: 'Angur Ka Dana Hoon',
        song_link: 'Wg7Z_wGbqV0',
        album_name: 'Sanam Bewafa'
      },
      {
        id: 2403,
        song_name: 'Zuba Zuba',
        song_link: 'C_3TzyyXRhE',
        album_name: 'Kurbaan'
      },
      {
        id: 2339,
        song_name: 'Dhadkan Zara Ruk Gayee Hai',
        song_link: 'mA5icvMaRNA',
        album_name: 'Prahaar: The Final Attack'
      },
      {
        id: 2371,
        song_name: 'Aag Lag Jaaye',
        song_link: 'IJnDYj_PdKo',
        album_name: 'Akayla'
      },
      {
        id: 2450,
        song_name: 'Laila Ko Bhool Jayenge',
        song_link: 'cKpn3LLB5Ac',
        album_name: 'Saugandh'
      },
      {
        id: 2352,
        song_name: 'Marhaba Sayyedi',
        song_link: 'f1-Q8XQhHe8',
        album_name: 'Henna'
      },
      {
        id: 2431,
        song_name: 'Aish Karo',
        song_link: '5i8cZ2SENwU',
        album_name: 'Benaam Badsha'
      },
      {
        id: 2384,
        song_name: 'Aai Bahar Khilte Hai Gul',
        song_link: 'cYZ8HOkuWqQ',
        album_name: 'Love'
      },
      {
        id: 2463,
        song_name: 'Desh Badalte Hai ',
        song_link: 'uooPoWebchc',
        album_name: 'Banjaran'
      },
      {
        id: 2416,
        song_name: 'Pyar Ke Ghar Mein',
        song_link: 'd3CCy7kpG0A',
        album_name: 'Dushman Devta'
      },
      {
        id: 2333,
        song_name: 'Mohe Chhedo Naa',
        song_link: 'HaEiuS0vUFE',
        album_name: 'Lamhe'
      },
      {
        id: 2365,
        song_name: 'Pyar Tera Pyar',
        song_link: 'NhXA1qZYMpg',
        album_name: '100 Days'
      },
      {
        id: 2444,
        song_name: 'Aaj Hum Tum O Sanam',
        song_link: 'BkL4Il1Vmtc',
        album_name: 'Saathi'
      },
      {
        id: 2397,
        song_name: 'Mohabbat Ko Kiski Lagi Baddua',
        song_link: 'DAHMgpAx7Fc',
        album_name: 'Kurbaan'
      },
      {
        id: 2346,
        song_name: 'I Love You',
        song_link: '2aJPzpZQn_Y',
        album_name: 'Phool Aur Kaante'
      },
      {
        id: 2378,
        song_name: 'Tip Tip Tip Baarish',
        song_link: 'U6CVllDCv_c',
        album_name: 'Afsana Pyar Ka'
      },
      {
        id: 2457,
        song_name: 'Deewanon Ki Mastanon Ki',
        song_link: 'bSIMyTqBXTQ',
        album_name: 'Dancer'
      },
      {
        id: 2410,
        song_name: 'Jei Na Tomay Dekhlam',
        song_link: 'Rvhs87bs4aQ',
        album_name: 'First Love Letter'
      },
      {
        id: 2359,
        song_name: 'Adayein Bhi Hain Mohabbat Bhi Hai',
        song_link: 'YDBVVnWSXb0',
        album_name: 'Dil Hai Ki Manta Nahin'
      },
      {
        id: 2438,
        song_name: 'Kar Gayi Muhalle Mein Halla',
        song_link: '-V9MzSN1RG8',
        album_name: 'Do Matwale'
      },
      {
        id: 2391,
        song_name: 'Maut Se Kya Darna',
        song_link: 'qOCFwHqNEz4',
        album_name: 'Patthar Ke Phool'
      },
      {
        id: 2470,
        song_name: 'Unko Dekha to Bas',
        song_link: '_RQDtjlgDDk',
        album_name: 'Naamcheen'
      },
      {
        id: 2423,
        song_name: 'Be Iraada Nazar Mil Gayee To',
        song_link: 'J_rremHTH4M',
        album_name: 'Sanam Bewafa'
      },
      {
        id: 2451,
        song_name: 'Haar Gaya Dil Fariyaad Karke',
        song_link: '5-H6ICCw8wU',
        album_name: 'Saugandh'
      },
      {
        id: 2404,
        song_name: 'Dil Tera Jaan Teri',
        song_link: 'C9ZbYwNTcGE',
        album_name: 'Phool Bane Angaarey'
      },
      {
        id: 2340,
        song_name: 'Hamari Hi Mutthi Mein-Part-1',
        song_link: 'cNuLlWnJDVM',
        album_name: 'Prahaar: The Final Attack'
      },
      {
        id: 2372,
        song_name: 'Chal Chal Ri Chal',
        song_link: '0u78sN9Egd0',
        album_name: 'Akayla'
      },
      {
        id: 2353,
        song_name: 'Main Der Karta Nahin',
        song_link: 'KeHmSwypwoI',
        album_name: 'Henna'
      },
      {
        id: 2432,
        song_name: 'Moochwale Bachche',
        song_link: 'z628Szt2nhI',
        album_name: 'Benaam Badsha'
      },
      {
        id: 2385,
        song_name: 'Aaja Aaja Give Me A Kiss',
        song_link: 'PE6DI_caEHQ',
        album_name: 'Love'
      },
      {
        id: 2464,
        song_name: 'Mere Dil Ki Galiyon Mein',
        song_link: 'ci7H7DFtZNw',
        album_name: 'Banjaran'
      },
      {
        id: 2417,
        song_name: 'Thari Aur Mhari',
        song_link: 'x332bdx',
        album_name: 'Dushman Devta'
      },
      {
        id: 2334,
        song_name: 'Hum Tere Bin Kahin Reh Nahin Paate',
        song_link: 'OxamnTFg3gw',
        album_name: 'Sadak'
      },
      {
        id: 2366,
        song_name: 'Sun Sun Sun Dilruba',
        song_link: 'AWs7LqmdM8U',
        album_name: '100 Days'
      },
      {
        id: 2445,
        song_name: 'Yaarana Yaar Ka',
        song_link: 'leq-C88E16s',
        album_name: 'Saathi'
      },
      {
        id: 2398,
        song_name: 'Aao Main Padha Doon Tumhein A.B.C',
        song_link: 'do4qh0P5-Z0',
        album_name: 'Kurbaan'
      },
      {
        id: 2347,
        song_name: 'Jise Dekh Mera Dil Dhadke',
        song_link: 'McL99gBvnjw',
        album_name: 'Phool Aur Kaante'
      },
      {
        id: 2379,
        song_name: 'Aashiq Diwana',
        song_link: 'EBQm_9_z31k',
        album_name: 'Afsana Pyar Ka'
      },
      {
        id: 2458,
        song_name: 'Ek Ladki Ne Mera',
        song_link: '0wLhIpAxmFk',
        album_name: 'Dancer'
      },
      {
        id: 2411,
        song_name: 'O Prio O Prio',
        song_link: 'u9YCesJMt1w',
        album_name: 'First Love Letter'
      },
      {
        id: 2328,
        song_name: 'Mhaare Rajasthan Ma',
        song_link: 'lgoRGMGsH1s',
        album_name: 'Lamhe'
      },
      {
        id: 2360,
        song_name: 'Dil Tujhpe Aa Gaya',
        song_link: 'T4Gynle0iEI',
        album_name: 'Dil Hai Ki Manta Nahin'
      },
      {
        id: 2439,
        song_name: 'Koi Hai Hum Hain',
        song_link: 'KIofXNKzGoI',
        album_name: 'Do Matwale'
      },
      {
        id: 2392,
        song_name: 'Sun Dilruba',
        song_link: 'IK5tHEZt1rg',
        album_name: 'Patthar Ke Phool'
      },
      {
        id: 2471,
        song_name: 'Mera Dil Bhi Kitna Pagal Hai',
        song_link: '7aCCgacmzss',
        album_name: 'Saajan'
      },
      {
        id: 2424,
        song_name: 'Choori Maza Na Degi',
        song_link: 'pbuY7TMYFBU',
        album_name: 'Sanam Bewafa'
      },
      {
        id: 2373,
        song_name: 'Jeene Walon',
        song_link: 'tuiCYE_HPAY',
        album_name: 'Akayla'
      },
      {
        id: 2452,
        song_name: 'Mera Kehna Maan Sitamgar',
        song_link: 'F3Xco_VmcO0',
        album_name: 'Saugandh'
      },
      {
        id: 2405,
        song_name: 'Gori Kab Se Huyee Jawan',
        song_link: 'XFREbl-rFE8',
        album_name: 'Phool Bane Angaarey'
      },
      {
        id: 2341,
        song_name: 'Hamari Hi Mutthi Mein-Part-2',
        song_link: '1I3ZvAJw7B0',
        album_name: 'Prahaar: The Final Attack'
      },
      {
        id: 2354,
        song_name: 'Chitthiye',
        song_link: 'DCZIWnna3gA',
        album_name: 'Henna'
      },
      {
        id: 2433,
        song_name: 'Andaaz Behekne Lagte',
        song_link: 'qml8Ff8OwNo',
        album_name: 'Karz Chukana Hai'
      },
      {
        id: 2386,
        song_name: 'I Am Sorry',
        song_link: 'CnxqdNZYjh4',
        album_name: 'Love'
      },
      {
        id: 2465,
        song_name: 'Tere Mere Pyar Ki ',
        song_link: 'RKS_Hr9KWCI',
        album_name: 'Banjaran'
      },
      {
        id: 2418,
        song_name: 'Uri Uri Baba',
        song_link: 'oDZM9bp86n4',
        album_name: 'Dushman Devta'
      },
      {
        id: 2335,
        song_name: 'Zamane Ke Dekhein Hain Rang Hazaar',
        song_link: 'T9pz1mt2ZQQ',
        album_name: 'Sadak'
      },
      {
        id: 2367,
        song_name: 'Tana Dere Na Tana Na De',
        song_link: 'tAk3nc5ME08',
        album_name: '100 Days'
      },
      {
        id: 2446,
        song_name: 'Aisa Bhi Dekho Waqt',
        song_link: 'Um30kZqfNWY',
        album_name: 'Saathi'
      },
      {
        id: 2399,
        song_name: 'Aao Main Padha Doon Tumhein',
        song_link: 'do4qh0P5-Z0',
        album_name: 'Kurbaan'
      },
      {
        id: 2348,
        song_name: 'Dheere Dheere Hausla',
        song_link: 'uzodP8RIWfk',
        album_name: 'Phool Aur Kaante'
      },
      {
        id: 2427,
        song_name: 'O Hare Dupatte Wali',
        song_link: 'QdrlEo5oq08',
        album_name: 'Sanam Bewafa'
      },
      {
        id: 2380,
        song_name: 'Saat Kunwaron Mein Ek Kunwari',
        song_link: 'TB2ykMkFtfs',
        album_name: 'Farishtay'
      },
      {
        id: 2459,
        song_name: 'Naachoonga Toh Naachoge Tum',
        song_link: 'hJDtlMfx8AU',
        album_name: 'Dancer'
      },
      {
        id: 2412,
        song_name: 'Kismat Khul Gayee',
        song_link: 'Z1uZnJXNjys',
        album_name: 'Lakshmanrekha'
      },
      {
        id: 2329,
        song_name: 'Chudiyan Khanak Gayeen',
        song_link: 'ZEiRDZnStRQ',
        album_name: 'Lamhe'
      },
      {
        id: 2361,
        song_name: 'Dulhan Tu Dulha Main Ban Jaunga',
        song_link: 'Dy2R5aTQvjc',
        album_name: 'Dil Hai Ki Manta Nahin'
      },
      {
        id: 2440,
        song_name: 'Main Aaj Bolta Hoon',
        song_link: 'MWkmFJpL1QM',
        album_name: 'Do Matwale'
      },
      {
        id: 2393,
        song_name: 'Aaja Aaja Aaja',
        song_link: 'zzvn9LXrF58',
        album_name: 'Patthar Ke Phool'
      },
      {
        id: 2472,
        song_name: 'Tu Shayar Hai',
        song_link: '0J2AwOLLoVg',
        album_name: 'Saajan'
      },
      {
        id: 2425,
        song_name: 'Meri Jaan Chali',
        song_link: 'd4aFNehBfB4',
        album_name: 'Sanam Bewafa'
      },
      {
        id: 2374,
        song_name: 'Kehti Hai Duniya',
        song_link: 'H3f39ynidys',
        album_name: 'Akayla'
      },
      {
        id: 2453,
        song_name: 'Shivam Shivam',
        song_link: 'r5rycsFiv5s',
        album_name: 'Saugandh'
      },
      {
        id: 2406,
        song_name: 'Jeena Agar Zaroori Hai To',
        song_link: 'Pux8oQn4ADA',
        album_name: 'Phool Bane Angaarey'
      },
      {
        id: 2342,
        song_name: 'amari Hi Mutthi Mein-Sad',
        song_link: '0NDDE9SpGoo',
        album_name: 'Prahaar: The Final Attack'
      },
      {
        id: 2355,
        song_name: 'Dil Hai Ke Manta Nahin (duet)',
        song_link: 'WVR3dc3_M4Q',
        album_name: 'Dil Hai Ki Manta Nahin'
      },
      {
        id: 2434,
        song_name: 'Bheegi Hoon Main',
        song_link: '3p-piYLlNUE',
        album_name: 'Karz Chukana Hai'
      },
      {
        id: 2387,
        song_name: 'Priyatamma',
        song_link: '2gShC9nYytM',
        album_name: 'Love'
      },
      {
        id: 2466,
        song_name: 'Teri Banjaran ',
        song_link: 'GAO3AVgHxBM',
        album_name: 'Banjaran'
      },
      {
        id: 2419,
        song_name: 'Apni Prem Kahani Kisi',
        song_link: 'vpNKnahJpR8',
        album_name: 'Khoon Ka Karz'
      },
      {
        id: 2221,
        song_name: 'Har Kasam Se Badi Hai',
        song_link: 'CrHF5ie-MYo',
        album_name: 'Baaghi: A Rebel for Love'
      },
      {
        id: 2253,
        song_name: 'Ahamakte Chaand Ko',
        song_link: 'xFxeCgSLcE8',
        album_name: 'Awaargi'
      },
      {
        id: 2285,
        song_name: 'Chhataungi Chamche Se Chaat',
        song_link: 'QrqEN3BTwaQ',
        album_name: 'Police Public'
      },
      {
        id: 2317,
        song_name: 'Bhool Bhulaiyaa Teri Ankhiyan Saiyan',
        song_link: 'nE9re9GQzhM',
        album_name: 'Amiri Garibi'
      },
      {
        id: 2234,
        song_name: 'Na Ja Re Na Ja Re-Male',
        song_link: 'zWS3iszjpAI',
        album_name: 'Aaj Ka Arjun'
      },
      {
        id: 2266,
        song_name: 'Kiss Me',
        song_link: '_ESNz9P0WJA',
        album_name: 'Shiva'
      },
      {
        id: 2298,
        song_name: 'Apne Biwi Bachchon Ke-Sad',
        song_link: 'gnOKMNaowHs',
        album_name: 'Taqdeer Ka Tamasha'
      },
      {
        id: 2215,
        song_name: 'Tum Sajna Ke Ghar',
        song_link: 'Z44tdkpt2Ys',
        album_name: 'Swarg'
      },
      {
        id: 2247,
        song_name: 'Yaad Rakhiyo Yeh Chaar Akshar Pyar Ke',
        song_link: 'IFHWkwnCU6g',
        album_name: 'Izzatdaar'
      },
      {
        id: 2274,
        song_name: 'Aap Hi Se Dosti',
        song_link: 'Lh89-NVUP84',
        album_name: 'Gunahon Ka Devta'
      },
      {
        id: 2311,
        song_name: 'Laga Ragda To Mit Gaya Jhagda',
        song_link: 'UyZH6g0IUCc',
        album_name: 'Amba'
      },
      {
        id: 2292,
        song_name: 'Kukkad Kukkad Koo',
        song_link: 'oOgrUbEU2lk',
        album_name: 'Azaad Desh Ke Gulam'
      },
      {
        id: 2228,
        song_name: 'Behna O Behna',
        song_link: 'uaVcdCD7zT0',
        album_name: 'Aaj Ka Arjun'
      },
      {
        id: 2201,
        song_name: 'Sochna Kya',
        song_link: 'F-dJkdqDE-8',
        album_name: 'Ghayal'
      },
      {
        id: 2260,
        song_name: 'Krishna Krishna',
        song_link: 'qRftro8bjFU',
        album_name: 'Kishen Kanhaiya'
      },
      {
        id: 2209,
        song_name: 'Aave Aave Tu Mara',
        song_link: 'JP_HQNL5MdU',
        album_name: 'Aashiqui'
      },
      {
        id: 2324,
        song_name: 'Aaya Main Aaya',
        song_link: 'x10QdOV8JLc',
        album_name: 'Maha-Sangram'
      },
      {
        id: 2241,
        song_name: 'Tamma Tamma Loge',
        song_link: 't1iFzqdn71w',
        album_name: 'Thanedaar'
      },
      {
        id: 2273,
        song_name: 'Mehndi Mehndi',
        song_link: 'BfzTaCsn_lg',
        album_name: 'Deewana Mujh Sa Nahin'
      },
      {
        id: 2305,
        song_name: 'Aasman Pe Baithi Chandni',
        song_link: 'UkBiT6Hn3pk',
        album_name: 'Khatarnaak'
      },
      {
        id: 2222,
        song_name: 'Maang Teri Saja Doon Mein',
        song_link: 'e2QQ0gZlZhQ',
        album_name: 'Baaghi: A Rebel for Love'
      },
      {
        id: 2195,
        song_name: 'O Priya Priya',
        song_link: 'FRW6N2yoGYg',
        album_name: 'Dil'
      },
      {
        id: 2254,
        song_name: 'Bali Umar Ne Mera Haal',
        song_link: 'aymVa684vGM',
        album_name: 'Awaargi'
      },
      {
        id: 2286,
        song_name: 'Bichhwa Ne Das Liya',
        song_link: 'uz3oh6Eu2rs',
        album_name: 'Police Public'
      },
      {
        id: 2318,
        song_name: 'Babul Bhi Roye',
        song_link: 'qESuriODiLE',
        album_name: 'Amiri Garibi'
      },
      {
        id: 2235,
        song_name: 'Dil Ka Vote Doongi',
        song_link: 'al_BJcYUfy8',
        album_name: 'Agneekaal'
      },
      {
        id: 2267,
        song_name: 'Meri Qadar Jani',
        song_link: 'uHD5h1rUljs',
        album_name: 'Shiva'
      },
      {
        id: 2299,
        song_name: 'Naye Daur Ka Dekho Logon',
        song_link: 'roj2-kBDxpw',
        album_name: 'Taqdeer Ka Tamasha'
      },
      {
        id: 2216,
        song_name: 'Ae Mere Dost',
        song_link: 'kqM0TUBt_W4',
        album_name: 'Swarg'
      },
      {
        id: 2248,
        song_name: 'Kis Kisko Main Kiss Karoon',
        song_link: 'NBhXbLS9QPI',
        album_name: 'Izzatdaar'
      },
      {
        id: 2275,
        song_name: 'Hum Goa Ka Jenny Nahin',
        song_link: 'gPJ7oNlROEE',
        album_name: 'Gunahon Ka Devta'
      },
      {
        id: 2312,
        song_name: 'Sheron Wali Mata Ka Jab Naam',
        song_link: '90QS8ZCThFo',
        album_name: 'Amba'
      },
      {
        id: 2293,
        song_name: 'Aage Aage Jaye Mera Dil Leke',
        song_link: 'j2Ijvm0Ysc8',
        album_name: 'Tejaa'
      },
      {
        id: 2229,
        song_name: 'Chali Aana Too',
        song_link: 'sJcrUG99IYg',
        album_name: 'Aaj Ka Arjun'
      },
      {
        id: 2202,
        song_name: 'Dont Say No',
        song_link: '1tM_yPFnQgc',
        album_name: 'Ghayal'
      },
      {
        id: 2261,
        song_name: 'Aage Aage Chhalle Wali',
        song_link: 'Y-dRG5aaktI',
        album_name: 'Ghar Ho To Aisa'
      },
      {
        id: 2210,
        song_name: 'Safar Ma Yar Te Didhoche Saath',
        song_link: '6-rcSx2U2fU',
        album_name: 'Aashiqui'
      },
      {
        id: 2325,
        song_name: 'Dhak Dhak Dhak Dhak',
        song_link: 'cRhw09QvOu8',
        album_name: 'Maha-Sangram'
      },
      {
        id: 2242,
        song_name: 'Jab Se Hui Hain Shaadi',
        song_link: 'DVZ0IGqtwy8',
        album_name: 'Thanedaar'
      },
      {
        id: 2279,
        song_name: 'Adi Ve Adi',
        song_link: 'U_4hX8Dj4aE',
        album_name: 'Sher Dil'
      },
      {
        id: 2306,
        song_name: 'Chori Chori Aaya Tu',
        song_link: 'B3yFCRys0aY',
        album_name: 'Khatarnaak'
      },
      {
        id: 2223,
        song_name: 'Pyar Hua Hai Mujhe Aur Tujhe',
        song_link: 'JbpPclzWgXg',
        album_name: 'Jamai Raja'
      },
      {
        id: 2196,
        song_name: 'Mujhe Neend Na Aaye',
        song_link: 'NDBB0Y3tlUI',
        album_name: 'Dil'
      },
      {
        id: 2255,
        song_name: 'Daak Babu Aya',
        song_link: 'UQGy-EjH3rI',
        album_name: 'Awaargi'
      },
      {
        id: 2287,
        song_name: 'Fursat Mili Hai Na Aao',
        song_link: 'YqinnbBG41A',
        album_name: 'Police Public'
      },
      {
        id: 2319,
        song_name: 'Budhi Ghodi Lal Lagaam',
        song_link: 'EcG-4KgVtEU',
        album_name: 'Amiri Garibi'
      },
      {
        id: 2236,
        song_name: 'Pankhida O Pankhida',
        song_link: 'hBlR4_C6cZs',
        album_name: 'Agneekaal'
      },
      {
        id: 2268,
        song_name: 'O Jaane Jaana',
        song_link: 'QB7mF-e-YNQ',
        album_name: 'Deewana Mujh Sa Nahin'
      },
      {
        id: 2300,
        song_name: 'O Thanedar Babu',
        song_link: '_OaUstfeZBk',
        album_name: 'Taqdeer Ka Tamasha'
      },
      {
        id: 2217,
        song_name: 'Ek Chanchal Shokh Haseena',
        song_link: 'Xuj6GtjpHVQ',
        album_name: 'Baaghi: A Rebel for Love'
      },
      {
        id: 2249,
        song_name: 'Bheega Bheega Mausam Tadpaye',
        song_link: 'k7bIIZuHWug',
        album_name: 'Bandh Darwaza'
      },
      {
        id: 2276,
        song_name: 'Kahin Tu Woh Toh Nahin',
        song_link: '5tn4j6ILCQ',
        album_name: 'Gunahon Ka Devta'
      },
      {
        id: 2313,
        song_name: 'Ek Swarg Hai Aasman Par',
        song_link: '8kA5wnQCRyU',
        album_name: 'Amba'
      },
      {
        id: 2262,
        song_name: 'Dil Lagake Dekho',
        song_link: 'xMTwGr4Bu4k',
        album_name: 'Ghar Ho To Aisa'
      },
      {
        id: 2294,
        song_name: 'Ambua Ka Pedh Hai',
        song_link: 'LWM988n3ocQ',
        album_name: 'Tejaa'
      },
      {
        id: 2230,
        song_name: 'Chhod Babul Ka Ghar',
        song_link: 'ur6TpvBfewM',
        album_name: 'Aaj Ka Arjun'
      },
      {
        id: 2203,
        song_name: 'Maahiya Teri Kasam (Sad)',
        song_link: 'YvS0BBkZt7U',
        album_name: 'Ghayal'
      },
      {
        id: 2211,
        song_name: 'Ankho Che Nam',
        song_link: 'u5zFGryybAA',
        album_name: 'Aashiqui'
      },
      {
        id: 2326,
        song_name: 'Do Dooni Chaar',
        song_link: 'P8NyGQ8WgAA',
        album_name: 'Maha-Sangram'
      },
      {
        id: 2243,
        song_name: 'Zulmi Sayyan Thanedaar',
        song_link: 'dm9HNjWca00',
        album_name: 'Thanedaar'
      },
      {
        id: 2280,
        song_name: 'Aur Bhale Kuchh Bhi Ho Jaye',
        song_link: 'FzGQbEvTQ3g',
        album_name: 'Sher Dil'
      },
      {
        id: 2307,
        song_name: 'Jeena Hai Humko',
        song_link: '4-13qYjuApw',
        album_name: 'Khatarnaak'
      },
      {
        id: 2224,
        song_name: 'JbpPclzWgXg',
        song_link: 'Dy-5crDfVGI',
        album_name: 'Jamai Raja'
      },
      {
        id: 2197,
        song_name: 'Humne Ghar Chhoda Hai ',
        song_link: 'zUIaTETyuM8',
        album_name: 'Dil'
      },
      {
        id: 2256,
        song_name: 'Radha Bina Hai',
        song_link: 'pzNtPjEAdUY',
        album_name: 'Kishen Kanhaiya'
      },
      {
        id: 2288,
        song_name: 'Aankhon Se Pee Le',
        song_link: 'bV7BUJ86czs',
        album_name: 'Roti Kee Keemat'
      },
      {
        id: 2320,
        song_name: 'O Meri Sasu O Mere Sale',
        song_link: 'UBFq47hKdMU',
        album_name: 'Amiri Garibi'
      },
      {
        id: 2237,
        song_name: 'Zameen Aur Aasman',
        song_link: 'H56xuFRjGnY',
        album_name: 'Agneekaal'
      },
      {
        id: 2269,
        song_name: 'Sare Ladko Ki ',
        song_link: 'X8nDMieBDb8',
        album_name: 'Deewana Mujh Sa Nahin'
      },
      {
        id: 2301,
        song_name: 'Som Ho Mangal Ho',
        song_link: 'w_ZPFI5tS38',
        album_name: 'Taqdeer Ka Tamasha'
      },
      {
        id: 2205,
        song_name: 'Tu Mahri Bandgi Che',
        song_link: 'cQkTG-Ot-yc',
        album_name: 'Aashiqui'
      },
      {
        id: 2218,
        song_name: 'Kaisa Lagta Hai',
        song_link: 'dNe2p0jj9Ow',
        album_name: 'Baaghi: A Rebel for Love'
      },
      {
        id: 2250,
        song_name: 'Main Ek Chingari Thi',
        song_link: 'atmGSMaZ_jU',
        album_name: 'Bandh Darwaza'
      },
      {
        id: 2277,
        song_name: 'Karwa Chauth Ka Vrath',
        song_link: 'PO9FFym_xTY',
        album_name: 'Gunahon Ka Devta'
      },
      {
        id: 2314,
        song_name: 'Maa Ka Man Mamta Ka Mandir',
        song_link: 'RtgH1Xigaq4',
        album_name: 'Amba'
      },
      {
        id: 2263,
        song_name: 'January February',
        song_link: 'yH25EQpHRgY',
        album_name: 'Ghar Ho To Aisa'
      },
      {
        id: 2295,
        song_name: 'Een Meen Sade Teen',
        song_link: 'pAmHeDuej6E',
        album_name: 'Tejaa'
      },
      {
        id: 2231,
        song_name: 'Gori Hai Kalaiyan',
        song_link: 'eCXAz9evqaA&vl=en',
        album_name: 'Aaj Ka Arjun'
      },
      {
        id: 2204,
        song_name: 'Aa Tan Ahin Tya Che Man',
        song_link: 'CxWpjNgx8R0',
        album_name: 'Aashiqui'
      },
      {
        id: 2212,
        song_name: 'Filmon Ke Sare Hero',
        song_link: '_UU1dr5RwO0',
        album_name: 'Swarg'
      },
      {
        id: 2327,
        song_name: 'I Love You',
        song_link: 'dB5fiekcUYI',
        album_name: 'Maha-Sangram'
      },
      {
        id: 2244,
        song_name: 'Aur Bhala Mein Kiya Mangu Rab Se',
        song_link: 'LHSZzfCKiu0',
        album_name: 'Thanedaar'
      },
      {
        id: 2281,
        song_name: 'Door Shahar Se Ek Shahar',
        song_link: 'L3rGJp1TjEo',
        album_name: 'Sher Dil'
      },
      {
        id: 2308,
        song_name: 'Mandir Mein Na Masjid',
        song_link: 'n55tSKrcZ4M',
        album_name: 'Khatarnaak'
      },
      {
        id: 2225,
        song_name: 'Aag Lag Rahi Hai',
        song_link: '0qFtZPIH8qY',
        album_name: 'Jamai Raja'
      },
      {
        id: 2198,
        song_name: 'Hum Pyar Karne Wale',
        song_link: 'ns7hREReeX8',
        album_name: 'Dil'
      },
      {
        id: 2257,
        song_name: 'Suit Boot Mein Aaya',
        song_link: 'mon35_f5emQ',
        album_name: 'Kishen Kanhaiya'
      },
      {
        id: 2289,
        song_name: 'Haathon Mein Choodi Khanke',
        song_link: 'mWjjzSqGKro',
        album_name: 'Roti Kee Keemat'
      },
      {
        id: 2206,
        song_name: 'Jone Kahe Che Jamano Aa',
        song_link: 'OPwjgv30v6w',
        album_name: 'Aashiqui'
      },
      {
        id: 2321,
        song_name: 'Tawaif Kahan Kisi Se Mohabbat Karti Hai',
        song_link: 'pMrjXeiXFM8',
        album_name: 'Amiri Garibi'
      },
      {
        id: 2238,
        song_name: 'Pyar Mujhe Tum Karte Ho',
        song_link: 'Ygj_4JyUBl8',
        album_name: 'Pratibandh'
      },
      {
        id: 2270,
        song_name: 'Main Sehra Bandh Ke ',
        song_link: 'hMYDUyDQUuw',
        album_name: 'Deewana Mujh Sa Nahin'
      },
      {
        id: 2302,
        song_name: 'Jhulaniyaa Gum Gayi',
        song_link: 'YScjPVhOHmQ',
        album_name: 'Zakhmi Zameen'
      },
      {
        id: 2219,
        song_name: 'Chandni Raat Hai',
        song_link: 'rC4BaGN0vCI',
        album_name: 'Baaghi: A Rebel for Love'
      },
      {
        id: 2251,
        song_name: 'Tu Ek Chingari Hai',
        song_link: 'atmGSMaZ_jU',
        album_name: 'Bandh Darwaza'
      },
      {
        id: 2278,
        song_name: 'Yeh Sanam Yeh Sanam',
        song_link: 'vwinvYjFX5E',
        album_name: 'Gunahon Ka Devta'
      },
      {
        id: 2315,
        song_name: 'Aaj Mere Qatil Ki',
        song_link: '1ptWq9X7iRg',
        album_name: 'Zahreelay'
      },
      {
        id: 2264,
        song_name: 'Anando Brahma Govindo',
        song_link: '5GcN719_w5Y',
        album_name: 'Shiva'
      },
      {
        id: 2296,
        song_name: 'Aaja Mere Paas Aa',
        song_link: '4RMvbSRNUF4',
        album_name: 'Taqdeer Ka Tamasha'
      },
      {
        id: 2232,
        song_name: 'Mashuka Mashuka',
        song_link: '6wwP5goTaX0',
        album_name: 'Aaj Ka Arjun'
      },
      {
        id: 2213,
        song_name: 'Kaise Kate Din',
        song_link: 'iDr9KB_fnr4',
        album_name: 'Swarg'
      },
      {
        id: 2245,
        song_name: 'Tumko Dekhke Jhoom Gaya',
        song_link: 'dHpC21sppjA',
        album_name: 'Izzatdaar'
      },
      {
        id: 2282,
        song_name: 'Kuchh Gana Bajana Ho Jaye',
        song_link: 'ZpeXsMf7H1E',
        album_name: 'Sher Dil'
      },
      {
        id: 2309,
        song_name: 'Sun Meri Shehzadi',
        song_link: 'n5bt2MRlz60',
        album_name: 'Amba'
      },
      {
        id: 2290,
        song_name: 'Jungle Mein Ek Sher Soya Tha',
        song_link: 'Xx4w5ObMFZg',
        album_name: 'Roti Kee Keemat'
      },
      {
        id: 2226,
        song_name: 'Teri Pyaari Pyari Baatein',
        song_link: 'ldIpZZmIiHA',
        album_name: 'Jamai Raja'
      },
      {
        id: 2199,
        song_name: 'Maahiya Teri Kasam',
        song_link: 'bZ-MNY8w2ns',
        album_name: 'Ghayal'
      },
      {
        id: 2258,
        song_name: 'Mere Humsafar',
        song_link: 'zaf9JMpOe3w',
        album_name: 'Kishen Kanhaiya'
      },
      {
        id: 2207,
        song_name: 'Dilo Ni Imarat Ma Jyare (Female)',
        song_link: '201-skVKFOY',
        album_name: 'Aashiqui'
      },
      {
        id: 2322,
        song_name: 'Aa Baahon Mein Aa',
        song_link: '5tMgjVdRPBk',
        album_name: 'Maha-Sangram'
      },
      {
        id: 2239,
        song_name: 'Kabhi Hua Nahin',
        song_link: 'rAhNSjKbZRw',
        album_name: 'Pratibandh'
      },
      {
        id: 2271,
        song_name: 'Hum Tumse Mohabbat Karte',
        song_link: '1oc9R0WVRGU',
        album_name: 'Deewana Mujh Sa Nahin'
      },
      {
        id: 2303,
        song_name: 'Chouke Se Mara',
        song_link: '0umj5Oj-0VE',
        album_name: 'Zakhmi Zameen'
      },
      {
        id: 2220,
        song_name: 'Tapori',
        song_link: 'p5SEW_UgYSk',
        album_name: 'Baaghi: A Rebel for Love'
      },
      {
        id: 2252,
        song_name: 'Ae Mere Saathiya',
        song_link: 'bO1cnncZQsw',
        album_name: 'Awaargi'
      },
      {
        id: 2284,
        song_name: 'Main Jis Din Bhula Doon',
        song_link: 'lMhIOEuD6NI',
        album_name: 'Police Public'
      },
      {
        id: 2265,
        song_name: 'Botany Chhodenge',
        song_link: 'g6LKzxOhTqQ',
        album_name: 'Shiva'
      },
      {
        id: 2297,
        song_name: 'Apne Biwi Bachchon Ke',
        song_link: 'gnOKMNaowHs',
        album_name: 'Taqdeer Ka Tamasha'
      },
      {
        id: 2316,
        song_name: 'Pal Mein Khaffa Kabhi',
        song_link: 'oQTn7S5Q-ZQ',
        album_name: 'Zahreelay'
      },
      {
        id: 2233,
        song_name: 'Na Ja Re Na Ja Re-Female',
        song_link: 'J0KKsDieacA',
        album_name: 'Aaj Ka Arjun'
      },
      {
        id: 2214,
        song_name: 'Bam Bam Bambai',
        song_link: 'aLgl8f1pSZg',
        album_name: 'Swarg'
      },
      {
        id: 2246,
        song_name: 'Sun O Mr. Ek Taaza Khabar',
        song_link: 'B3f6PZE4tI',
        album_name: 'Izzatdaar'
      },
      {
        id: 2283,
        song_name: 'Tera Guroor Todunga',
        song_link: 'XXUFB5Wz3qw',
        album_name: 'Sher Dil'
      },
      {
        id: 2310,
        song_name: 'Aurat Zaat Mard Se Jhagda',
        song_link: 'DwG3v_b1Yj4',
        album_name: 'Amba'
      },
      {
        id: 2291,
        song_name: 'Sare Shikve Gile',
        song_link: 'xnfAiQcU-FI',
        album_name: 'Azaad Desh Ke Gulam'
      },
      {
        id: 2227,
        song_name: 'Hum Aur Tum Ab Nahin Paraye',
        song_link: 'xdEKBR7mOu4',
        album_name: 'Jamai Raja'
      },
      {
        id: 2200,
        song_name: 'Pyasi Jawani Hai',
        song_link: '3JW3L-lMfIA',
        album_name: 'Ghayal'
      },
      {
        id: 2259,
        song_name: 'Kuchh Ho Gaya Kya Ho Gaya',
        song_link: '_E7qYhAOj5M',
        album_name: 'Kishen Kanhaiya'
      },
      {
        id: 2208,
        song_name: 'Tari Chabi Mahra Manama',
        song_link: 'McWKSqeqCiQ',
        album_name: 'Aashiqui'
      },
      {
        id: 2323,
        song_name: 'Chodke Tujhko',
        song_link: 'jWN6vSf49XM',
        album_name: 'Maha-Sangram'
      },
      {
        id: 2240,
        song_name: 'Bacchon Bajao Taali',
        song_link: '45wtR75Xdqg',
        album_name: 'Pratibandh'
      },
      {
        id: 2272,
        song_name: 'Khadi Raho Baith Jao',
        song_link: 'uUQRPFYd2is',
        album_name: 'Deewana Mujh Sa Nahin'
      },
      {
        id: 2304,
        song_name: 'Main Chhamachham Nachoon',
        song_link: '0Z8Z0gYLXSQ',
        album_name: 'Zakhmi Zameen'
      },
      {
        id: 2629,
        song_name: 'Hum Apni Mohabbat Ka',
        song_link: 'LFJEquyLVPg',
        album_name: 'Deedar'
      },
      {
        id: 2630,
        song_name: 'Jaanam Mere Jaanam',
        song_link: 'eAH7V4i_GvY',
        album_name: 'Deedar'
      },
      {
        id: 2631,
        song_name: 'Kya Dharti Kya Aasman',
        song_link: '4mIIdl_93RY',
        album_name: 'Deedar'
      },
      {
        id: 2632,
        song_name: 'Tera Mera Mera Tera Sapna Hai',
        song_link: 'KzSKa9p9Uu4',
        album_name: 'Deedar'
      },
      {
        id: 2626,
        song_name: 'Ab To Kahin Tere Bin',
        song_link: 'ndhVCXSMIdM',
        album_name: 'Deedar'
      },
      {
        id: 2627,
        song_name: 'Deedar Ho Gaya Mujhko Pyar Ho Gaya',
        song_link: 'DKbKP9awQeQ',
        album_name: 'Deedar'
      },
      {
        id: 2628,
        song_name: 'Din Ba Din Mohabbat',
        song_link: 'u7H2rDbyIwQ',
        album_name: 'Deedar'
      }
    ],
    json: './Songs.json',
    url:
      'https://api.bollywoodgaana.com/api/v1/hindi_video?api_token=LgGW9icPetuZNcB03nbJ9JioSG02EA5EVQ3gWps9MtGIN1sCTawtKzHFNRvK'
  };
  render() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {this.state.songs.map(song => (
          <Song key={song.id} song={song} />
        ))}
      </div>
    );
  }
}

export default Songs;