const backupCampuses = [
  {
    id: 4,
    name: 'Neverland',
    address: 'Follow the Yellow Brick Road',
    description:
      'Sed tristique leo eleifend accumsan accumsan. Suspendisse eget est mauris. Nulla eu gravida dolor. Fusce eget tempus nunc, vel mollis sem. Pellentesque ornare congue diam, id euismod magna maximus a. Etiam suscipit aliquet mi quis maximus. Pellentesque ut purus a velit aliquet efficitur. ',
    imageUrl: 'https://image.ibb.co/bUxCvf/pirate-ship.png'
  },
  {
    id: 3,
    name: 'Middle Earth',
    address: '1234 Hobbit St.  Shire,  NY 11213',
    description:
      'In ut justo mi. Sed sit amet massa quam. Nunc dignissim, sem a rhoncus imperdiet, quam tortor gravida lectus, non convallis arcu est sit amet nibh. Donec euismod metus posuere pulvinar porttitor. Vestibulum pharetra bibendum dignissim. Fusce nisl enim, lacinia ut neque a, congue lobortis dui.',
    imageUrl: 'https://image.ibb.co/kbqAgL/rivendell.png'
  },
  {
    id: 2,
    name: 'Oz',
    address: 'Follow the Yellow Brick Road',
    description:
      'Sed tristique leo eleifend accumsan accumsan. Suspendisse eget est mauris. Nulla eu gravida dolor. Fusce eget tempus nunc, vel mollis sem. Pellentesque ornare congue diam, id euismod magna maximus a. Etiam suscipit aliquet mi quis maximus. Pellentesque ut purus a velit aliquet efficitur. ',
    imageUrl: 'https://image.ibb.co/dkLXvf/emerald-city.png'
  },
  {
    id: 1,
    name: 'Narnia',
    address: 'Back of Magical Wardrobe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dictum vulputate congue. Curabitur volutpat nulla metus, a luctus mauris commodo a. Proin tortor lacus, eleifend in faucibus ac, mollis id est. Praesent tempor nisl elit, in luctus nibh egestas eu. Nunc sagittis dictum augue, vel tempor erat luctus convallis. Nulla eros massa, aliquet nec mauris eu, tempor mollis ante. Pellentesque finibus dignissim imperdiet. Maecenas nulla lorem, euismod in mattis sit amet, condimentum eu velit. Sed vitae dui odio. Aenean diam purus, porta vel ultricies vitae, blandit vel urna. Nulla eu fermentum lectus, pellentesque convallis elit. Vivamus a vestibulum ante, a interdum neque. Pellentesque nec vulputate odio. Etiam id elit pulvinar, tristique turpis in, maximus metus.',
    imageUrl: 'https://image.ibb.co/ca7Z80/narnia.png'
  }
]

const backupStudents = [
  {
    id: 1,
    firstName: 'Lucy',
    lastName: 'Pevensie',
    email: 'lucy_pevensie@gmail.com',
    gpa: 3.9,
    campusId: 1,
    imageUrl: 'https://image.ibb.co/hLC6ML/lucy.png'
  },
  {
    id: 2,
    firstName: 'Edmund',
    lastName: 'Pevensie',
    email: 'ed_pevensie@gmail.com',
    gpa: 3.5,
    campusId: 1,
    imageUrl: 'https://image.ibb.co/dH49af/edmund.png'
  },
  {
    id: 3,
    firstName: 'Peter',
    lastName: 'Pevensie',
    email: 'peter_pevensie@gmail.com',
    gpa: 3,
    campusId: 1,
    imageUrl: 'https://image.ibb.co/cUJP80/peter.png'
  },
  {
    id: 4,
    firstName: 'Susan',
    lastName: 'Pevensie',
    email: 'susan_pevensie@gmail.com',
    gpa: 4,
    campusId: 1,
    imageUrl: 'https://image.ibb.co/fkBBo0/susan.png'
  },
  {
    id: 5,
    firstName: 'Mister',
    lastName: 'Tumnus',
    email: 'fawn1234@comcast.net',
    gpa: 2.9,
    campusId: 1,
    imageUrl: 'https://image.ibb.co/hNkhvf/mr-tum.png'
  },
  {
    id: 6,
    firstName: 'As',
    lastName: 'Lan',
    email: 'talking_lion@outlook.com',
    gpa: 4,
    campusId: 1,
    imageUrl: 'https://image.ibb.co/kfYP80/aslan.png'
  },
  {
    id: 7,
    firstName: 'Dorothy',
    lastName: 'Gale',
    email: 'tornado_watcher@gmail.com',
    gpa: 3.5,
    campusId: 2,
    imageUrl:
      'https://image.ibb.co/h6ZTkf/Screen-Shot-2018-10-18-at-2-26-01-AM.png'
  },
  {
    id: 8,
    firstName: 'Oscar',
    lastName: 'Diggs',
    email: 'hot_air@comcast.net',
    gpa: 3.8,
    campusId: 2,
    imageUrl: 'https://image.ibb.co/bMd2vf/oz.png'
  },
  {
    id: 9,
    firstName: 'Zeke',
    lastName: 'Lyons',
    email: 'courageous@gmail.com',
    gpa: 3.1,
    campusId: 2,
    imageUrl:
      'https://image.ibb.co/mkwKrL/Screen-Shot-2018-10-18-at-2-28-58-AM.png'
  },
  {
    id: 10,
    firstName: 'Hickory',
    lastName: 'Tinman',
    email: 'oilcan381212@comcast.net',
    gpa: 3,
    campusId: 2,
    imageUrl:
      'https://image.ibb.co/g8wxd0/Screen-Shot-2018-10-18-at-2-29-26-AM.png'
  },
  {
    id: 11,
    firstName: 'Huck',
    lastName: 'Scarecrow',
    email: 'if_i_only_had_a_brain@gmail.com',
    gpa: 2.5,
    campusId: 2,
    imageUrl:
      'https://image.ibb.co/cFuTkf/Screen-Shot-2018-10-18-at-2-28-25-AM.png'
  },
  {
    id: 12,
    firstName: 'Gulch',
    lastName: 'West',
    email: 'shoe_lover31@gmail.com',
    gpa: 3.7,
    campusId: 2,
    imageUrl: 'https://image.ibb.co/bvFt1L/witch-of-west.png'
  },
  {
    id: 13,
    firstName: 'Glinda',
    lastName: 'Goodwitch',
    email: 'glinda_good@outlook.com',
    gpa: 2,
    campusId: 2
  },
  {
    id: 14,
    firstName: 'Em',
    lastName: 'Gale',
    email: 'antie_em@comcast.net',
    gpa: 4,
    campusId: 2,
    imageUrl:
      'https://image.ibb.co/icf15f/Screen-Shot-2018-10-18-at-2-28-05-AM.png'
  },
  {
    id: 15,
    firstName: 'Frodo',
    lastName: 'Baggins',
    email: 'furry_feet@outlook.com',
    gpa: 3,
    campusId: 3,
    imageUrl: 'https://image.ibb.co/b7f480/frodo.png'
  },
  {
    id: 16,
    firstName: 'Bilbo',
    lastName: 'Baggins',
    email: 'adventurer@gmail.com',
    gpa: 2.9,
    campusId: 3
  },
  {
    id: 17,
    firstName: 'Samwise',
    lastName: 'Gamgee',
    email: 'po_tay_toes@outlook.com',
    gpa: 2.5,
    campusId: 3,
    imageUrl: 'https://image.ibb.co/gFOD1L/samwise.png'
  },
  {
    id: 18,
    firstName: 'Bilbo',
    lastName: 'Meriadoc',
    email: 'm_brandybuck@gmail.com',
    gpa: 2.7,
    campusId: 3
  },
  {
    id: 19,
    firstName: 'Peregrin',
    lastName: 'Took',
    email: 'it_comes_in_pints@gmail.com',
    gpa: 2.8,
    campusId: 3,
    imageUrl: 'https://image.ibb.co/gdeLgL/pip.png'
  },
  {
    id: 20,
    firstName: 'Legolas',
    lastName: 'Greenleaf',
    email: 'woodland_realm@gmail.com',
    gpa: 3.5,
    campusId: 3
  },
  {
    id: 21,
    firstName: 'Sméagol',
    lastName: 'Trahald',
    email: 'ring_lover123@outlook.com',
    gpa: 2,
    campusId: 3,
    imageUrl: 'https://image.ibb.co/hoofgL/gollum.png'
  },
  {
    id: 22,
    firstName: 'Peter',
    lastName: 'Pan',
    email: 'forever_young@outlook.com',
    gpa: 2.1,
    campusId: 4,
    imageUrl: 'https://image.ibb.co/gjk480/peter-pan.png'
  },
  {
    id: 23,
    firstName: 'Wendy',
    lastName: 'Darling',
    email: 'i_can_fly@outlook.com',
    gpa: 2,
    campusId: 4,
    imageUrl: 'https://image.ibb.co/nicUaf/wendy.png'
  },
  {
    id: 24,
    firstName: 'Michael',
    lastName: 'Darling',
    email: 'm_darling@outlook.com',
    gpa: 2.3,
    campusId: 4,
    imageUrl: 'https://image.ibb.co/mLAFFf/micheal.png'
  },
  {
    id: 25,
    firstName: 'John',
    lastName: 'Darling',
    email: 'j_darling@outlook.com',
    gpa: 3.9,
    campusId: 4,
    imageUrl: 'https://image.ibb.co/dCW0gL/john.png'
  },
  {
    id: 26,
    firstName: 'Smee',
    lastName: 'Gilbert',
    email: 'apirateslifeforme@outlook.com',
    gpa: 2,
    campusId: 4,
    imageUrl: 'https://image.ibb.co/fFHj80/smee.png'
  },
  {
    id: 27,
    firstName: 'Hook',
    lastName: 'Darling',
    email: 'ships1234@gmail.com',
    gpa: 3,
    campusId: 4
  }
]

module.exports = {
  backupCampuses,
  backupStudents
}
