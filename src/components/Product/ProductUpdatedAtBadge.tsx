import { differenceInMinutes } from "date-fns";
import { millisecondsInMinute } from "date-fns/constants";
import { useEffect, useState } from "react";
import { TFavorite } from "../../types";
import { UpdatedAtBadge } from "./styles";

function getTimeDifferenceText(date: Date, comparingTime: Date) {
  const diffInMin = differenceInMinutes(comparingTime, date);

  const hours = Math.floor(diffInMin / 60);
  const minutes = diffInMin % 60;

  if (minutes === 0) {
    return `agora`;
  }

  if (hours === 0) {
    return `há ${minutes} min.`;
  }

  return `há ${hours}h`;
}

export function ProductUpdatedAtbadge({ updatedAt }: { updatedAt: TFavorite["updatedAt"] }) {
  const [comparingTime, setComparingTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setComparingTime(new Date());
    }, 1 * millisecondsInMinute);

    return () => clearInterval(interval);
  }, [updatedAt]);

  return <UpdatedAtBadge>Atualizado {getTimeDifferenceText(updatedAt, comparingTime)}</UpdatedAtBadge>;
}
