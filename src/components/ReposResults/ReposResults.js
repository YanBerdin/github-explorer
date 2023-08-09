import PropTypes from "prop-types";
import { Card, Image, Segment } from "semantic-ui-react";

function ReposResults({ repositories }, { totalCount }) {
  // const searchResult = searchResults.length;
  // console.log(repositories);

  return (
    // console.log(totalCount);
    // console.log(repositories),
    <>
      <Segment>
        <Card.Group itemsPerRow={3}>
          {repositories.map((repository) => (
            <Card key={repository.id}>
              <Image src={repository.owner.avatar_url} wrapped ui={false} />

              <Card.Content>
                <Card.Header>{repository.name}</Card.Header>
                <Card.Meta>{repository.owner.login}</Card.Meta>
                <Card.Description>{repository.description}</Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Segment>
    </>
  );
}

ReposResults.propTypes = {
  repositories: PropTypes.array.isRequired,
};

export default ReposResults;
