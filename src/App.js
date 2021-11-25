// import YoutubeForm from "./components/YoutubeForm";
import FormikContainer from "./components/FormikContainer";
import EnrollmentForm from "./components/EnrollmentForm";
import { theme, ThemeProvider } from "@chakra-ui/core";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>Title</h1>
        {/* <YoutubeForm /> */}
        <FormikContainer />
        <h2>EnrollmentForm</h2>
        <EnrollmentForm />
      </div>
    </ThemeProvider>
  );
};

export default App;
