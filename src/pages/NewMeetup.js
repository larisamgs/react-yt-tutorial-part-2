import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useNavigate();
  function addMeetupHandler(MeetupData) {
    fetch(
      "https://react-app-meetups-yt-tutorial-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(MeetupData),
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => {
      history("/", { replace: true });
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
