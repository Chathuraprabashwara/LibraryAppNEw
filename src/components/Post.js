import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components';
import FbGrid from 'react-native-fb-image-grid';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import ReadMore from 'react-native-read-more-text';

const PostContainer = styled.View`
  background-color: #fff;
  margin: 10px 0 0 0;
  width: 100%;
`;
const PostTop = styled.View`
  height: 70px;
  display: flex;
  flex-direction: row;
  padding: 3% 4%;
  align-items: center;
`;

const AvatarCon = styled.View``;

const NameCon = styled.View`
  padding: 0 0 0 4%;
`;

const TopText = styled.Text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height */

  color: #3d3d3d;
`;

const TimeStamp = styled.Text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  color: #707070;
`;

const ParagraphCon = styled.View`
  padding: 0px 10px;
  margin: 0 0 0px 0;
`;
const PText = styled.Text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  color: #3d3d3d;
`;

const ImageContainer = styled.View`
  height: 300px;
  width: 100%;
`;

const Line2 = styled.View`
  height: 1px;
  width: 90%;
  background-color: #d6d6d6;
  margin: 20px auto;
`;
const LikeCon = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 0;
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
const posts = [
  {
    proPic: require('../asset/propic.png'),
    userName: 'Anjula Weerasinghe',
    time: '3h',

    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed repellat expedita sit? Odio aut iure quae nihil sint sunt labore ratione temporibus excepturi, atque facilis porro, maiores magnam natus fugit minus. Temporibus similique vero minus sit perferendis tempore at et.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed repellat expedita sit? Odio aut iure quae nihil sint sunt labore ratione temporibus excepturi, atque facilis porro, maiores magnam natus fugit minus. Temporibus similique vero minus sit perferendis tempore at et.',
    postImage: ['../asset/postImage.png'],
    PostText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of the printing",

    user: 'chamuditha',
    commentCount: 3,
  },

  {
    proPic: require('../asset/propic.png'),
    userName: 'Anjula Weerasinghe',
    time: '3h',
    paragraph: '',
    postImage: ['../asset/postImage.png'],
    PostText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of the printing",

    user: 'chamuditha',
    commentCount: 3,
  },
  {
    proPic: require('../asset/propic.png'),
    userName: 'Anjula Weerasinghe',
    time: '3h',
    postImage: ['../asset/postImage.png'],
    PostText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of the printing",

    user: 'chamuditha',
    commentCount: 3,
  },
  {
    proPic: require('../asset/propic.png'),
    userName: 'Anjula Weerasinghe',
    time: '3h',
    postImage: ['../asset/postImage.png'],
    PostText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of the printing",

    user: 'chamuditha',
    commentCount: 3,
  },
  {
    proPic: require('../asset/propic.png'),
    userName: 'Anjula Weerasinghe',
    time: '3h',
    postImage: ['../asset/postImage.png'],
    PostText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of the printing",

    user: 'chamuditha',
    commentCount: 3,
  },
  {
    proPic: require('../asset/propic.png'),
    userName: 'Anjula Weerasinghe',
    time: '3h',
    postImage: ['../asset/postImage.png'],
    PostText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of the printing",

    user: 'chamuditha',
    commentCount: 3,
  },

  {
    proPic: require('../asset/propic.png'),
    userName: 'Anjula Weerasinghe',
    time: '3h',
    postImage: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
    ],
    PostText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of the printing",
  },

  {
    proPic: require('../asset/propic.png'),
    userName: 'Anjula Weerasinghe',
    time: '3h',
    postImage: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
    ],
    PostText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of the printing",
  },
  {
    proPic: require('../asset/propic.png'),
    userName: 'Anjula Weerasinghe',
    time: '3h',
    postImage: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
    ],
    PostText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of the printing",
  },
  {
    proPic: require('../asset/propic.png'),
    userName: 'Anjula Weerasinghe',
    time: '3h',
    postImage: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
    ],
    PostText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of the printing",
  },
  {
    proPic: require('../asset/propic.png'),
    userName: 'Anjula Weerasinghe',
    time: '3h',
    postImage: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
    ],
    PostText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of the printing",
  },
  {
    proPic: require('../asset/propic.png'),
    userName: 'Anjula Weerasinghe',
    time: '3h',
    postImage: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
    ],
    PostText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of the printing",
  },
  {
    proPic: require('../asset/propic.png'),
    userName: 'Anjula Weerasinghe',
    time: '3h',
    postImage: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
    ],
    PostText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of the printing",
  },
  {
    proPic: require('../asset/propic.png'),
    userName: 'Anjula Weerasinghe',
    time: '3h',
    postImage: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
    ],
    PostText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of the printing",
  },
];

const Post = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: '#D6D6D6'}}>
        {posts.map(post => (
          <PostContainer key={post.index}>
            <PostTop>
              <AvatarCon>
                <Image source={post.proPic} />
              </AvatarCon>
              <NameCon>
                <TopText>{post.userName}</TopText>
                <TimeStamp>{post.time}</TimeStamp>
              </NameCon>
            </PostTop>

            <ParagraphCon>
              <ReadMore
                numberOfLines={3}
                renderTruncatedFooter={this._renderTruncatedFooter}
                renderRevealedFooter={this._renderRevealedFooter}
                onReady={this._handleTextReady}>
                <PText>{post.paragraph}</PText>
              </ReadMore>
            </ParagraphCon>
            <ImageContainer>
              <FbGrid images={post.postImage} />
            </ImageContainer>

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
                    {post.user} and {count} others
                  </LikeText>
                </UserCon>
              </ReactCon>
              <CommentCon>
                <LikeText>{post.commentCount} Comments</LikeText>
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
                  <Icon3 name="thumbs-up" size={24} color={'#000'} />

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
                    size={24}
                    color={'#000'}
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
                  <Icon name="share" size={24} color={'#000'} />
                  <Text2>Read</Text2>
                </TouchableOpacity>
              </LikeBtn>
            </LikeBtnCon>
          </PostContainer>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  timestamp: {
    color: '#808080',
  },
  messageContainer: {
    marginTop: 10,
  },
  message: {
    fontSize: 16,
    lineHeight: 20,
  },
  image: {
    marginTop: 10,
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default Post;
