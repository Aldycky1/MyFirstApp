import React, {Component, useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import Aldy from '../../assets/images/aldy.jpg';

// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('==> constructor');
//     this.state = {
//       jobdesc: 'Software Developer',
//     };
//   }

//   componentDidMount() {
//     console.log('==> component did mount');
//     setTimeout(() => {
//       this.setState({
//         jobdesc: 'Software Engineer',
//       });
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log('==> component did update');
//   }

//   componentWillUnmount() {
//     console.log('==> component will unmount');
//   }

//   render() {
//     console.log('==> render');
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: '#c8d6e5',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}>
//           <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#feca57', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}} />
//         </View>
//         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//           <Text>Beranda</Text>
//           <Text>Video</Text>
//           <Text>Playlist</Text>
//           <Text>Komunitas</Text>
//           <Text>Channel</Text>
//           <Text>Tentang</Text>
//         </View>
//         <View
//           style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
//           <Image
//             source={Aldy}
//             style={{
//               width: 100,
//               height: 100,
//               resizeMode: 'cover',
//               borderRadius: 50,
//               marginRight: 14,
//             }}
//           />
//           <View>
//             <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//               Aldycky Bagus Witjaksana
//             </Text>
//             <Text>{this.state.jobdesc}</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const FlexBox = () => {
  const [jobdesc, setJobdesc] = useState('Software Developer');

  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setJobdesc('Software Engineer');
    }, 2000);
    return () => {
      console.log('did update');
    };
  }, [jobdesc]);

  // useEffect(() => {
  //   console.log('did update');
  //   setTimeout(() => {
  //     setJobdesc('Software Engineer');
  //   }, 2000);
  // }, [jobdesc]);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#c8d6e5',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
        <View style={{backgroundColor: '#feca57', width: 50, height: 50}} />
        <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}} />
        <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Image
          source={Aldy}
          style={{
            width: 100,
            height: 100,
            resizeMode: 'cover',
            borderRadius: 50,
            marginRight: 14,
          }}
        />
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Aldycky Bagus Witjaksana
          </Text>
          <Text>{jobdesc}</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
