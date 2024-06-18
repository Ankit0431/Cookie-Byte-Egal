import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import { useVault } from "../context/context";
import axios from "axios";
import { DNA } from "react-loader-spinner";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

const News = () => {
  const [news, setNews] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function initializeNews() {
      try {
        const a = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=014b35cf2f264a129261cb580be71916"
        );
        console.log(a);
        setNews(a);
        setSpinner(false);
      } catch (e) {
        alert("Failed to load news");
      }
    }

    initializeNews();
  }, []);

  return (
    <div className={styles.fitnesslandingpage}>
      <div className={styles.navbar}>
        <div className={styles.nav}>
          <button className={styles.logo}>
            <img
              style={{ height: "5vw" }}
              alt=""
              src="/mediChain_icon_inverted.svg"
            />
          </button>
          <div className={styles.menuright}>
            <div className={styles.menulinks}>
              <button
                className={styles.exercises}
                style={{ fontSize: "180%" }}
                onClick={() => navigate("/")}
              >
                HOME
              </button>
            </div>
            <button className={styles.hamburgerIcon}>
              <img className={styles.group2Icon} alt="" src="/group2.svg" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.title}>
        <p style={{ fontSize: "150px", marginLeft: "10vw" }}>News</p>
      </div>
      <div
        style={{
          marginTop: "20vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {spinner && (
          <DNA
            visible={true}
            height="100"
            width="100"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        )}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "1rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {Array.from({ length: 20 }, (_, index) => (
          <div key={index}>
            {!spinner && (
              <Card maxW="sm" style={{ height: "100%" }}>
                <CardBody>
                  <Image
                    style={{ height: "200px", width: "100%" }}
                    src={`${
                      news.data.articles[index].urlToImage
                        ? news.data.articles[index].urlToImage
                        : "/interaction.jpg"
                    }`}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">
                      {news.data.articles[index].title}
                    </Heading>
                    <Text>{news.data.articles[index].description}</Text>
                    <Text color="blue.600" fontSize="2xl">
                      Source: {news.data.articles[index].source.name}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      <a
                        href={news.data.articles[index].url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Here
                      </a>
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
