import { PrimaryButton } from "./PrimaryButton";

type StatusProps = {
  Status: "loading" | "success" | "error";
};

export const Status = (props: StatusProps) => {
  let message;
  if (props.Status === "loading") {
    message = "Loading...";
  } else if (props.Status === "success") {
    message = "Data Fetched Successfully";
  } else {
    message = "Error Fetching Data";
  }

  return (
    <div>
      <h2>Status of data is - {message}</h2>
      <PrimaryButton> Click Me</PrimaryButton>
    </div>
  );
};
