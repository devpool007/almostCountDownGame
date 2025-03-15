import { useImperativeHandle, useRef } from "react";

//In older React versions you need to wrap the component with forwardRef to access the ref prop.
export default function ResultModal({ ref, targetTime, remainingTime, onReset }) {

  const userLost = remainingTime <= 0;
  const formattedTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round(( 1 - remainingTime / (targetTime * 1000))*100);

  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    };
  }); 

  return (
    <dialog onClose={onReset} ref={dialog} className="result-modal">
     {userLost && <h2>You lost </h2>}
     {!userLost && <h2>Your score: {score} </h2>}
     <p>The target time was  <strong>{targetTime} seconds. </strong> </p>
     <p>You stopped the timer with <strong> {formattedTime} seconds left. </strong>  </p>
     <form method="dialog" onSubmit={onReset}>
      <button>Close</button>
     </form>
    </dialog>
  );
}

