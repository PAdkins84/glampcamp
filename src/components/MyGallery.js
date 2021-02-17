import React from 'react';
import ImageGallery from 'react-image-gallery';
 
const images = [
  {
    original: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/151321345_631975530965460_3368065130582066891_o.jpg?_nc_cat=111&ccb=3&_nc_sid=8bfeb9&_nc_ohc=rLnJIdE8_JsAX_ftQ8d&_nc_ht=scontent-lht6-1.xx&oh=4f1872bbb5da6579c5310b3c83706c63&oe=60527856',
    thumbnail: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/151321345_631975530965460_3368065130582066891_o.jpg?_nc_cat=111&ccb=3&_nc_sid=8bfeb9&_nc_ohc=rLnJIdE8_JsAX_ftQ8d&_nc_ht=scontent-lht6-1.xx&oh=4f1872bbb5da6579c5310b3c83706c63&oe=60527856',
  },
  {
    original: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/150934035_631973510965662_7300605701526493480_o.jpg?_nc_cat=103&ccb=3&_nc_sid=8bfeb9&_nc_ohc=iFIYZxnGMQIAX-J3afd&_nc_ht=scontent-lht6-1.xx&oh=bddd8a95f9fa557c1c9cda10755cd1eb&oe=6054818A',
    thumbnail: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/150934035_631973510965662_7300605701526493480_o.jpg?_nc_cat=103&ccb=3&_nc_sid=8bfeb9&_nc_ohc=iFIYZxnGMQIAX-J3afd&_nc_ht=scontent-lht6-1.xx&oh=bddd8a95f9fa557c1c9cda10755cd1eb&oe=6054818A',
  },
  {
    original: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/150406136_629591661203847_7582742450018781680_n.jpg?_nc_cat=103&ccb=3&_nc_sid=09cbfe&_nc_ohc=F36Wa6-N1rAAX9h9opg&_nc_ht=scontent-lht6-1.xx&oh=69414e0d1a8fd3f5ede7081f262ae630&oe=6050B407',
    thumbnail: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/150406136_629591661203847_7582742450018781680_n.jpg?_nc_cat=103&ccb=3&_nc_sid=09cbfe&_nc_ohc=F36Wa6-N1rAAX9h9opg&_nc_ht=scontent-lht6-1.xx&oh=69414e0d1a8fd3f5ede7081f262ae630&oe=6050B407',
  },
  {
    original: 'https://scontent-lhr8-2.xx.fbcdn.net/v/t1.0-9/150855115_629566104539736_4843774893586089279_o.jpg?_nc_cat=101&ccb=3&_nc_sid=8bfeb9&_nc_ohc=Yb_DdQ6RJcMAX9SePJ6&_nc_ht=scontent-lhr8-2.xx&oh=39485e748f3c5c714505c6ab152464e8&oe=605278CB',
    thumbnail: 'https://scontent-lhr8-2.xx.fbcdn.net/v/t1.0-9/150855115_629566104539736_4843774893586089279_o.jpg?_nc_cat=101&ccb=3&_nc_sid=8bfeb9&_nc_ohc=Yb_DdQ6RJcMAX9SePJ6&_nc_ht=scontent-lhr8-2.xx&oh=39485e748f3c5c714505c6ab152464e8&oe=605278CB',
  },
  {
    original: 'https://scontent-lhr8-2.xx.fbcdn.net/v/t1.0-9/151170557_629565917873088_4142950830282990059_o.jpg?_nc_cat=104&ccb=3&_nc_sid=8bfeb9&_nc_ohc=3uyznz-94QIAX9JvTI5&_nc_ht=scontent-lhr8-2.xx&oh=2134f6e016b32580d88d2ead3928bf5c&oe=60544D5C',
    thumbnail: 'https://scontent-lhr8-2.xx.fbcdn.net/v/t1.0-9/151170557_629565917873088_4142950830282990059_o.jpg?_nc_cat=104&ccb=3&_nc_sid=8bfeb9&_nc_ohc=3uyznz-94QIAX9JvTI5&_nc_ht=scontent-lhr8-2.xx&oh=2134f6e016b32580d88d2ead3928bf5c&oe=60544D5C',
  },
  {
    original: 'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/150647635_629564911206522_4135788854175668346_o.jpg?_nc_cat=108&ccb=3&_nc_sid=8bfeb9&_nc_ohc=uhlyZOXhyNkAX8TArLW&_nc_ht=scontent-lhr8-1.xx&oh=3555f265ae210cad3532aae2bf03b3c3&oe=6051D3F6',
    thumbnail: 'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/150647635_629564911206522_4135788854175668346_o.jpg?_nc_cat=108&ccb=3&_nc_sid=8bfeb9&_nc_ohc=uhlyZOXhyNkAX8TArLW&_nc_ht=scontent-lhr8-1.xx&oh=3555f265ae210cad3532aae2bf03b3c3&oe=6051D3F6',
  },
];
 
const MyGallery = () => {
  return <ImageGallery items={images} />;
}

export default MyGallery;