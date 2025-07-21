import { Suspense } from "react";
import RoomType from "../components/RoomType";

const RoomPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading room types...</div>}>
        <RoomType />
      </Suspense>
    </div>
  );
};

export default RoomPage;
