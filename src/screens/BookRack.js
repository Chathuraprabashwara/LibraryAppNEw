import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import * as Progress from "react-native-progress";

const StyledText = styled.Text`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: black;
`;
const HeaderTextCon = styled.View`
  margin: 30px 0 0 20px;
`;
const HeaderText = styled.Text`
  font-family: "poppins";
  font-style: normal;
  font-weight: 800;
  font-size: 21px;
  line-height: 32px;
  /* identical to box height */

  color: #3d3d3d;
`;
const HeaderSubTitle = styled.Text`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  color: #6d6d6d;
`;

const IconCon = styled.View`
  position: absolute;
  right: 20px;
  bottom: 28px;
`;

const TextView = styled.View`
  width: 90%;
  border-bottom-color: #d6d6d6;
  border-bottom-width: 1px;
  padding-bottom: 5px;
  margin: 20px auto;
`;

const Ebooks = styled.View``;

const BookCard = styled.View``;

const TextCon = styled.View`
  padding: 0 0 0 15px;
`;

const BTextDtail = styled.Text`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height */

  color: #3c5898;
`;

const BTextAuthor = styled.Text`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  color: #888888;
`;

const BookDetailsCon = styled.View`
  display: flex;
  flex-direction: row;
`;

const ImgCon = styled.View`
  padding: 15px;
`;
const DetailCon = styled.View`
  padding: 10px 0 0 0;
`;
const ProgressCon = styled.View``;

const ProgressText = styled.Text`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  margin: 0 0 10px 0;
  /* identical to box height */

  color: #3d3d3d;
`;
const ButtonCon = styled.View`
  position: absolute;
  bottom: 15px;
`;
const Button1 = styled.View`
  width: 202px;
  height: 35px;
  flex: 1;
  margin: 15px 0 15px 0;
  text-align: center;
  justify-content: center;
  alignitems: center;
  background-color: #3d3d3d;
  border-radius: 7px;
`;
const Button2 = styled.View`
  width: 202px;
  height: 35px;
  flex: 1;
  text-align: center;
  justify-content: center;
  alignitems: center;
  border: 2px solid #3d3d3d;
  border-radius: 7px;
`;

const BText1 = styled.Text`
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height */

  color: #ffffff;
`;

const Line = styled.View`
  width: 90%;
  height: 1px;
  background-color: #d6d6d6;
  margin: 15px auto;
`;

const AudioBooks = styled.View``;
//objects and others

const Racks = [
  {
    key: "Racks",
    name: "The Black Hole Activites",
    authorName: "Walter holfman",
    image: require("../asset/Book01.png"),
    percentage: 0.31,
    pageCount: 368,
    readCount: 5,
  },

  {
    key: "Rack2",
    name: "Front Page Fatalitly",
    authorName: "Lyndee Walker",
    image: require("../asset/Book02.png"),
    percentage: 0.31,
    pageCount: 86,
    readCount: 135,
  },
];

const AudioRacks = [
  {
    key: "Racks",
    name: "The Black Hole Activites",
    authorName: "Walter holfman",
    image: require("../asset/Book01.png"),
    percentage: 0.31,
    pageCount: 368,
    readCount: 5,
  },

  {
    key: "Rack2",
    name: "Front Page Fatalitly",
    authorName: "Lyndee Walker",
    image: require("../asset/Book02.png"),
    percentage: 0.31,
    pageCount: 86,
    readCount: 135,
  },
];

const bookCount = ["2"];

const BookRack = () => {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#fff",
          width: "100%",
          height: 113,
          shadowColor: "#000",
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.4,
          shadowRadius: 3,
          elevation: 5,
        }}
      >
        <HeaderTextCon>
          <HeaderText>My Book Rack</HeaderText>
          <HeaderSubTitle>See what are you reading now !</HeaderSubTitle>
        </HeaderTextCon>

        <IconCon>
          <TouchableOpacity>
            <Icon name='search-outline' color={"black"} size={32}></Icon>
          </TouchableOpacity>
        </IconCon>
      </View>
      <ScrollView nestedScrollEnabled={true}>
        <Ebooks>
          <TextView>
            <StyledText>E Books ({bookCount})</StyledText>
          </TextView>

          {Racks.map((Rack) => (
            <BookCard style={{ color: "black" }}>
              <TextCon>
                <BTextDtail>{Rack.name}</BTextDtail>
                <BTextAuthor>{Rack.authorName}</BTextAuthor>
              </TextCon>
              <BookDetailsCon>
                <ImgCon>
                  <Image source={Rack.image} width={131} height={165} />
                </ImgCon>
                <DetailCon>
                  <ProgressCon>
                    <ProgressText>
                      You have read {Rack.readCount}/{Rack.pageCount}
                    </ProgressText>
                    <Progress.Bar
                      progress={Rack.percentage}
                      width={202}
                      height={19}
                      color={"#3C5898"}
                      unfilledColor={"#D9D9D9"}
                      borderRadius={20}
                      endAngle={0.5}
                    />
                  </ProgressCon>
                  <ButtonCon>
                    <TouchableOpacity></TouchableOpacity>
                    <Button1>
                      <BText1>Read Now</BText1>
                    </Button1>
                    <Button2>
                      <BText1 style={{ color: "black" }}>Quit</BText1>
                    </Button2>
                  </ButtonCon>
                </DetailCon>
              </BookDetailsCon>

              <Line></Line>
            </BookCard>
          ))}
        </Ebooks>
        <AudioBooks>
          <TextView>
            <StyledText>Audio Books ({bookCount})</StyledText>
          </TextView>

          {AudioRacks.map((Rack) => (
            <BookCard style={{ color: "black" }}>
              <TextCon>
                <BTextDtail>{Rack.name}</BTextDtail>
                <BTextAuthor>{Rack.authorName}</BTextAuthor>
              </TextCon>
              <BookDetailsCon>
                <ImgCon>
                  <Image source={Rack.image} width={131} height={165} />
                </ImgCon>
                <DetailCon>
                  <ProgressCon>
                    <ProgressText>
                      You have read {Rack.readCount}/{Rack.pageCount}
                    </ProgressText>
                    <Progress.Bar
                      progress={Rack.percentage}
                      width={202}
                      height={19}
                      color={"#3C5898"}
                      unfilledColor={"#D9D9D9"}
                      borderRadius={20}
                      endAngle={0.5}
                    />
                  </ProgressCon>
                  <ButtonCon>
                    <Button1>
                      <BText1>Listn Now</BText1>
                    </Button1>
                    <Button2>
                      <BText1 style={{ color: "black" }}>Quit</BText1>
                    </Button2>
                  </ButtonCon>
                </DetailCon>
              </BookDetailsCon>

              <Line></Line>
            </BookCard>
          ))}
        </AudioBooks>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookRack;
