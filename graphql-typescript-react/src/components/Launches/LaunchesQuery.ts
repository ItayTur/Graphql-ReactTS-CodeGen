import { gql } from "@apollo/client";

export const QUERY_LAUNCHS = gql`
  query Launches {
    launches {
      mission_name
      launch_year
      flight_number
      mission_id
    }
  }
`;
