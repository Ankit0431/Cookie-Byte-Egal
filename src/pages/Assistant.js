import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import { useContract } from "../context/context";
import axios from "axios";
import { DNA } from "react-loader-spinner";
import { Input } from "@chakra-ui/react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useToast } from "@chakra-ui/react";

const Assistant = () => {
  const genAi = new GoogleGenerativeAI(
    "AIzaSyA-weE0fawTP2RL53TqCpOtUxwV6Gthrss"
  );
  const model = genAi.getGenerativeModel({ model: "gemini-pro" });
  const toast = useToast();

  const [history, setHistory] = useState([]);

  const [news, setNews] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!history.length) {
      console.log("No data yet");
    } else {
      console.log(localStorage.getItem("chatHistory"));
      let a = JSON.parse(localStorage.getItem("chatHistory"));

      if (a) {
        setHistory([...a]);
      }
      console.log(history);
    }
  }, []);

  const handleQuery = async (e) => {
    e.preventDefault();
    setSpinner(true);
    console.log(query);
    setResponse("");
    let prev =
      "Use previous context(if applicable) previous questions and their responses are provided as follows: \n";
    if (history) {
      for (let i = 0; i < history.length; i++) {
        prev = prev + history[i].query + ": " + history[i].response + ", ";
      }
    }
    // console.log(prev);
    const r = await getResponse(
      query +
      "\n.Generate response in paragraph format without points in around 50 words.\n" +
      prev
    );
    history.push({ query: query, response: r });
    // setHistory([...history, {"query":query, "response":r}]);
    // console.log(history)
    localStorage.setItem("chatHistory", JSON.stringify(history));
  };

  async function getResponse(inp) {
    let txt = "";
    try {
      const result = await model.generateContentStream(inp);
      setSpinner(false);

      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        txt += chunkText;
        setResponse((prev) => prev + chunkText);
      }
    } catch (err) {
      toast({
        position: "top",
        title: "Please Enter Non-Harmful Query",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
      localStorage.setItem("chatHistory", "");
    }
    // setResponse(response + txt);
    return txt;
    // const response = await result.response;
    // const text = response.text();
    // setResponse(text);

    // return text;
  }

  const tryAyurveda = () => {
    window.open("http://localhost:8501", "_blank");
  }

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
                style={{ fontSize: "180%", marginRight: 50 }}
                onClick={tryAyurveda}
              >
                TRY AYURVEDA
              </button>
            </div>
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

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "50%",
            height: "50%",
            justifyContent: "center",
          }}
        >
          <Input
            style={{ width: "75%", height: "70px" }}
            placeholder="Enter your query"
            bg={"gray.100"}
            border={0}
            color={"gray.500"}
            _placeholder={{
              color: "gray.500",
            }}
            onChange={(e) => setQuery(e.target.value)}
          />

          <div>
            <button
              className={styles.button}
              style={{ width: "150px", marginLeft: "20px" }}
              onClick={handleQuery}
            >
              <div className={styles.getStarted}>Enter</div>
            </button>
          </div>
        </div>
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

      <div style={{ height: "100vh" }}>
        {!spinner && response && (
          <div
            className={styles.loremIpsumDolor}
            style={{
              fontSize: "25px",
              marginLeft: "100px",
              marginRight: "100px",
            }}
          >
            <div className={styles.text}>
              <div className={styles.titles}>
                <div
                  className={styles.popularExercises}
                  style={{ fontSize: "45px" }}
                >
                  AI assistant:
                </div>
              </div>
            </div>
            {response}
          </div>
        )}
      </div>
    </div>
  );
};

export default Assistant;
