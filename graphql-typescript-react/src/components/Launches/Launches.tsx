import { useLaunchesQuery } from "../../generated/graphql";
import "./Launches.styles.css";

const className = "Launches";

type Props = {
  onLaunchClick: (launchId: number) => void;
};

const Launches = ({ onLaunchClick }: Props) => {
  const { loading, error, data } = useLaunchesQuery();

  if (loading) return <div>Loading...</div>;

  if (error || !data) return <div>Error</div>;

  return (
    <div className={className}>
      <h3>Launches</h3>
      <ol className={`${className}__list`}>
        {data.launches &&
          data.launches.map(
            (launch, i) =>
              launch && (
                <li
                  key={i}
                  className={`${className}__item`}
                  onClick={() =>
                    launch.flight_number && onLaunchClick(launch.flight_number)
                  }
                >
                  {launch.mission_name} ({launch.launch_year})
                </li>
              )
          )}
      </ol>
    </div>
  );
};

export default Launches;
