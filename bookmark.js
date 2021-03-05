
import AsyncStorage from '@react-native-community/async-storage';

const [bookmark, setbookmark] = useState(false);
// Saving the Bookmarked Post

const saveBookMark = async post_id => {
       setbookmark(true); 
       await AsyncStorage.getItem('bookmark').then(token => {
           const res = JSON.parse(token);
           if (res !== null) {
               let data = res.find(value => value === post_id);
               if (data == null) {
                   res.push(post_id);
                   AsyncStorage.setItem('bookmark', JSON.stringify(res));
                   alert('Your bookmark post');
               }
           } else {
               let bookmark = [];
               bookmark.push(post_id);
               AsyncStorage.setItem('bookmark', JSON.stringify(bookmark));
               alert('Your bookmark post');
           }
       });
   };

//    Removing the Bookmarked Post

const removeBookMark = async post_id => {
       setbookmark(false);
       const bookmark = await AsyncStorage.getItem('bookmark').then(token => {
           const res = JSON.parse(token);
           return res.filter(e => e !== post_id);
       });
       await AsyncStorage.setItem('bookmark', JSON.stringify(bookmark));
       alert('Your unbookmark post');
   };