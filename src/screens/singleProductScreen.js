import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  VirtualizedList,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';

import Head from '../components/Header';

import styled from 'styled-components';

import LinearGradient from 'react-native-linear-gradient';

const HeroCon = styled.View`
  background-color: #fff;
`;
const Container = styled.View`
  background-color: #d6d6d6;
`;
const ImageCon = styled.View`
  left: 0;
  width: 100%;
  height: 195px;
`;

//styles with styled-components

const Book = styled.Image`
  position: absolute;
  bottom: -70px;
  z-index: 99;
  left: 20px;
  width: 131px;
  height: 165px;
`;

const Overlay = styled.View`
  width: 100%;
  height: 195px;

  position: absolute;
`;

const InfoCon = styled.View`
  position: absolute;
  bottom: 10px;
  left: 43%;
`;

const BookTitle = styled.Text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;

  color: #ffffff;
`;

const AuthorName = styled.Text`
  color: #fff;
  font-size: 16px;
`;

const DetailCon = styled.View`
  height: 195px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const ReadCon = styled.View`
  width: 100%;
  height: 40px;
  margin: 8px 0 0;
  padding: 0 200px 0 0;
`;

const Read = styled.View`
  position: absolute;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-around;

  right: 30px;
  width: 90%;
  height: 51px;
  background: #ffffff;
  border-width: 2px;
  border-radius: 5px;
  border-color: rgba(0,0,0,0);
  border-bottom-width: 0;
   shadow-color: #000;
   shadow-offset: {width: 2, height: 10};
   shadow-opacity: 0.9;
   shadow-radius: 3px;
   elevation: 3;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 10px;

  padding: 0 20px;

  


`;

const TextRead = styled.Text`
  color: #3d3d3d;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
`;

const ButtonCon = styled.View`
  align-items: center;
  position: absolute;
  bottom: 30px;
  width: 80%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Btn = styled.View`
  width: 146px;
  height: 43px;
  display: flex;
  flex-direction: row;
  background: #ffffff;
  border: 2px solid #3c5898;
  border-radius: 5px;
  align-items: center;
  padding: 0px 20px;
  justify-content: space-between;
  padding: 0 25px;
`;

const TextBtn = styled.Text`
  color: #3c5898;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;

const Line = styled.View`
  height: 1px;
  width: 80%;
  background-color: #d6d6d6;
  margin: 20px auto;
`;
const Line2 = styled.View`
  height: 1px;
  width: 90%;
  background-color: #d6d6d6;
  margin: 20px auto;
`;

const Line3 = styled.View`
  height: 1px;
  width: 90%;
  background-color: #d6d6d6;
  margin: 0 auto;
`;

const LikeCon = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const ReactCon = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const CommentCon = styled.View``;

const CareCon = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 30px;
  height: 30px;
`;
const UserCon = styled.View``;

const LikeText = styled.Text`
  font-family: poppins;
  color: #3d3d3d;
`;

const LikeBtnCon = styled.View`
  height: 50px;
  padding: 0 30px 20px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LikeBtn = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 4px;
  justify-content: space-between;
`;

const Text2 = styled.Text`
  font-size: 16px;
  padding: 0 0 0 4px;
  color: #6d6d6d;
`;

const DescriptionCon = styled.View`
  margin: 10px 0 0 0;
  background-color: #ffff;
  padding: 10px 15px;
`;

const DecText = styled.Text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;

  font-size: 16px;
  line-height: 21px;
  padding: 15px 0 0 0;
  color: #3d3d3d;
`;

const TextTitle = styled.Text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 40px;

  color: #000000;
`;

const MoreText = styled.Text`
  color: #3c5898;
  font-weight: bold;
  font-size: 18px;
`;

const Books = styled.View`
  margin: 10px 0 0 0;
  background-color: #fff;
`;
const EbookCon = styled.View``;
const AudioCon = styled.View``;

const EBookTitle = styled.Text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  padding: 20px;
  font-size: 19px;
  line-height: 27px;
  /* identical to box height */

  color: #000000;
`;

const List = styled.View`
  padding: 0px;
`;

const Item = styled.View`
  padding: 10px 20px;
`;

const TextItem = styled.Text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #3d3d3d;
`;

const TextLink = styled.Text`
  color: #3c5898;
  text-decoration: underline;
  font-weight: bold;
`;

const Series = styled.View`
  margin: 10px 0 0 0;
  background-color: #ffff;
`;

const SeriesCon = styled.View`
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px;
`;

const SeriesBookCon = styled.View`
  height: 196px;
  border: 1px solid black;
 

  background: #ffffff;
  border-width: 2px;
  border-radius: 10px;
  border-color: rgba(0,0,0,0);
  border-bottom-width: 0;
   shadow-color: #000;
   shadow-offset: {width: 2, height: 10};
   shadow-opacity: 0.9;
   shadow-radius: 3px;
   elevation: 3;
`;

const SerisText = styled.Text`
  margin: 10px 0 0 0;
  text-align: center;
  color: black;
  font-weight: 500;
  font-size: 14px;
`;

const SerisText2 = styled.Text`
  margin: 0px 0 0 0;
  text-align: center;
  color: black;
  font-weight: 500;
  font-size: 16px;
`;
//functions

//  objects

const bookName = ['The Book Thife'];
const author = ['Martin fella'];
const countof = [785];

const description = [
  ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dolores amet adipisci est aperiam omnis assumenda error possimus ducimus totam. Laborum nemo, atque dolorum enim, incidunt repellendus harum qui soluta dolorem minima aut delectus earum quidem eaque alias, placeat impedit minus! Atque reprehenderit minima odio explicabo consectetur eius commodi, dicta, omnis eaque perspiciatis, in fugit! Architecto eveniet laboriosam, iure sequi quisquam odio dolorem doloremque quos magnam, placeat aliquam soluta? Odit temporibus modi laudantium fugiat odio, neque iste dolore enim autem ipsam quam vero ex ad corrupti repudiandae incidunt, alias eius provident, quidem voluptates molestias. Est nobis cupiditate minima iusto. Nesciunt!',
];

const user = ['Chamuditha'];
const userCount = [6];

const commentCount = [78];

const data = [
  {id: 1, name: 'Tom'},
  {id: 2, name: 'Jerry'},
];

//Icons

function SingleProductScreen(): JSX.Element {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  //read-more function
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback(
    (e: {nativeEvent: {lines: string | any[]}}) => {
      setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
      // console.log(e.nativeEvent);
    },
    [],
  );

  //scroll function

  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get('window').height,
  );
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get('window').width,
  );

  let scrollYPos = 0;

  const scrollToB = () => {
    scrollYPos = screenHeight * 1;
    this.scroller.scrollTo({x: 0, y: scrollYPos});
    console.log('test', scrollYPos);
  };

  return (
    <SafeAreaView style={{height: '100%'}}>
      <Head />
      <ScrollView nestedScrollEnabled={true}>

      {}
        <Container>
          <HeroCon>
            <ImageCon>
              <Image
                source={require('../asset/back.jpg')}
                style={{width: '100%', height: '100%'}}
              />
              <Book source={require('../asset/book.png')} />

              <Overlay>
                <LinearGradient
                  style={{height: '100%', width: '100%'}}
                  colors={[
                    'rgba(0,0,0,0)',
                    'rgba(0,0,0,0.2)',
                    'rgba(0,0,0,0.8)',
                  ]}>
                  <InfoCon>
                    <BookTitle>{bookName}</BookTitle>
                    <AuthorName>By {author}</AuthorName>
                  </InfoCon>
                </LinearGradient>
              </Overlay>
            </ImageCon>
            <DetailCon>
              <ReadCon>
                <Read>
                  <Icon2 name="eye" size={30} color={'#3C5898'} />
                  <TextRead> {countof} Reads</TextRead>
                </Read>
              </ReadCon>
              <ButtonCon>
                <Btn>
                  <Icon name="book" size={24} color={'#3C5898'} />
                  <TextBtn>E book</TextBtn>
                </Btn>

                <Btn>
                  <Icon name="music" size={24} color={'#3C5898'} />
                  <TextBtn>Audio</TextBtn>
                </Btn>
              </ButtonCon>
            </DetailCon>
            <Line></Line>

            <LikeCon>
              <ReactCon>
                <CareCon>
                  <Image
                    source={require('../asset/Like.png')}
                    style={{width: '70%', height: '70%', position: 'absolute'}}
                  />
                  <Image
                    source={require('../asset/care.png')}
                    style={{
                      position: 'absolute',
                      left: '20%',

                      width: '70%',
                      height: '70%',
                    }}
                  />
                </CareCon>
                <UserCon>
                  <LikeText>
                    {user} and {count} others
                  </LikeText>
                </UserCon>
              </ReactCon>
              <CommentCon>
                <LikeText>{commentCount} Comments</LikeText>
              </CommentCon>
            </LikeCon>

            <Line2></Line2>

            <LikeBtnCon>
              <LikeBtn>
                <TouchableOpacity
                  onPress={onPress}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon3 name="thumbs-up" size={28} color={'#3C5898'} />

                  <Text2>Care</Text2>
                </TouchableOpacity>
              </LikeBtn>
              <LikeBtn>
                <TouchableOpacity
                  onPress={onPress}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon4
                    name="comment-outline"
                    size={28}
                    color={'#3C5898'}
                    style={{padding: '1%'}}
                  />
                  <Text2>Comment</Text2>
                </TouchableOpacity>
              </LikeBtn>
              <LikeBtn>
                <TouchableOpacity
                  onPress={onPress}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon name="share" size={28} color={'#3C5898'} />
                  <Text2>Read</Text2>
                </TouchableOpacity>
              </LikeBtn>
            </LikeBtnCon>
          </HeroCon>

          <DescriptionCon>
            <TextTitle>Description</TextTitle>

            <View style={{}}>
              <DecText
                onTextLayout={onTextLayout}
                numberOfLines={textShown ? undefined : 5}
                style={{lineHeight: 21, color: 'black'}}>
                {description}
              </DecText>

              {lengthMore ? (
                <MoreText
                  onPress={toggleNumberOfLines}
                  style={{
                    lineHeight: 21,
                    marginTop: 10,
                  }}>
                  {textShown ? 'See less...' : 'See more...'}
                </MoreText>
              ) : null}
            </View>
          </DescriptionCon>

          <Books>
            <EbookCon>
              <EBookTitle>E Book Chapters</EBookTitle>

              <Line3></Line3>

              <List>
                <Item>
                  <TextItem>
                    Chapter 1 - <TextLink>Honzon</TextLink>
                  </TextItem>
                </Item>
                <Item>
                  <TextItem>
                    Chapter 2 - <TextLink>Risen</TextLink>
                  </TextItem>
                </Item>
                <Item>
                  <TextItem>
                    Chapter 3 - <TextLink>Thief</TextLink>
                  </TextItem>
                </Item>
              </List>
            </EbookCon>

            <AudioCon>
              <EBookTitle>Audio Book</EBookTitle>
              <Line3></Line3>
              <List>
                <Item>
                  <TextItem>Chapter 1</TextItem>
                </Item>
                <Item>
                  <TextItem>Chapter 2</TextItem>
                </Item>
                <Item>
                  <TextItem>Chapter 3</TextItem>
                </Item>
              </List>
            </AudioCon>
          </Books>

          <Series>
            <EBookTitle>Series</EBookTitle>
            <Line3></Line3>

            <SeriesCon>
              <TouchableOpacity>
                <SeriesBookCon>
                  <Image source={require('../asset/Book1.png')}></Image>

                  <SerisText>Series 1</SerisText>
                  <SerisText2>Thief</SerisText2>
                </SeriesBookCon>
              </TouchableOpacity>
              <SeriesBookCon>
                <Image source={require('../asset/book2.png')}></Image>
                <SerisText>Series 2</SerisText>
                <SerisText2>Anola</SerisText2>
              </SeriesBookCon>
              <SeriesBookCon>
                <Image source={require('../asset/book3.png')}></Image>
                <SerisText>Series 3</SerisText>
                <SerisText2>book Thief</SerisText2>
              </SeriesBookCon>
            </SeriesCon>
          </Series>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SingleProductScreen;
