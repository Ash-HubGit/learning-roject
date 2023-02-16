import React, { useState } from "react";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";

const CustomValidationForm = ({ appointmentData, onFieldChange }) => {
  const [data, setData] = useState([
    {
      startDate: "2023-01-30T09:45",
      endDate: "2023-01-30T11:00",
      title: "Meeting",
    },
    {
      startDate: "2023-01-29T12:00",
      endDate: "2023-01-29T13:30",
      title: "Go to a gym",
    },
  ]);
  const [error, setError] = useState(null);

  const commitChanges = ({ added, changed, deleted }) => {
    setData((prevData) => {
      let updatedData = [...prevData];
      if (added) {
        const startingAddedId =
          updatedData.length > 0
            ? updatedData[updatedData.length - 1].id + 1
            : 0;
        updatedData = [...updatedData, { id: startingAddedId, ...added }];
      }
      if (changed) {
        updatedData = updatedData.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
      }
      if (deleted !== undefined) {
        updatedData = updatedData.filter(
          (appointment) => appointment.id !== deleted
        );
      }
      return updatedData;
    });
  };

  const validate = (value) => {
    if (value <= 0) {
      return "Value must be greater than 0";
    }
    return null;
  };

  return (
    <Scheduler data={data} height={700}>
      {console.log(onFieldChange, appointmentData)}
      <WeekView />
      <EditingState onCommitChanges={commitChanges} />
      <IntegratedEditing />
      <Appointments />
      <AppointmentTooltip showCloseButton showOpenButton showDeleteButton />
      <AppointmentForm
        appointmentData={appointmentData}
        onFieldChange={(field, value) => {
          const error = validate(value);
          console.log(value);
          setError(error);
          if (!error) {
            onFieldChange(field, value);
          }
        }}
      >
        {error && <div className="error">{error}</div>}
      </AppointmentForm>
    </Scheduler>
  );
};

export default CustomValidationForm;
