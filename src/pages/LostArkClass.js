import React, { Component } from "react";
import "./../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
// import Anime from "react-anime";
import {
  Col,
  Container,
  ListGroup,
  Placeholder,
  Row,
  Table,
  Image,
  Card,
} from "react-bootstrap";

class LostArkClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: [],
      loading: false,
      skillsName: [],
      skills: [],
      runes: [],
      skillsLevel: [],
      gameplayEn: [],
      stats: [],
      Engravings: [],
      T1: [],
      T2: [],
      T3: [],
      runesRunes: [],
      runesSkill: [],
      Gems: [],
      card: [],
    };
  }
  CallApi() {
    fetch("http://localhost:9000/API/Demoniste")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            skillsName: result.skills.name,
            skills: result.skills,
            skillsLevel: result.skills.level,
            gameplayEn: result.gameplayEn,
            stats: result.stats,
            Engravings: result.Engravings,
            T1: result["Gear Sets"].Tier1,
            T2: result["Gear Sets"].Tier2,
            T3: result["Gear Sets"].Tier3,
            runes: result.Runes,
            runesRunes: result.Runes.Runes.Name,
            runesSkill: result.Runes.Skills.Name,
            Gems: result.Gems,
            card: result["Card_Sets"],
          });
        },
        // Remarque : il est important de traiter les erreurs ici
        // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
        // des exceptions provenant de réels bugs du composant.
        (error) => {
          this.setState({
            isLoaded: true,
            error: "Une erreur est survenue",
          });
        }
      );
  }
  componentDidMount() {
    this.CallApi();
  }
  render() {
    const {
      error,
      isLoaded,
      skillsName,
      skillsLevel,
      skills,
      card,
      // Engravings,
      T1,
      T2,
      T3,
      Gems,
      stats,
      runesRunes,
      runes,
      runesSkill,
      gameplayEn,
    } = this.state;
    if (error.length < 0) {
      return (
        <div className='alert alert-danger' role={"alert"}>
          <i className='bi bi-exclamation-triangle-fill'></i> Erreur : {error}
        </div>
      );
    } else if (!isLoaded) {
      return (
        <Container fluid>
          <Row>
            <Col sm>
              <h2>Gameplay</h2>
              <ListGroup as={"ul"} variant='flush' className='w-100'>
                {Array.from({ length: 15 }, (index) => (
                  <Placeholder key={index} animation='glow' as={ListGroup.Item}>
                    <Placeholder sm={6} />
                  </Placeholder>
                ))}
              </ListGroup>
            </Col>
            <Col sm>
              <h2>Skills</h2>
              <Table striped borderless hover variant='dark' responsive>
                <thead>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Level</th>
                  </tr>
                </thead>
              </Table>
              <div className='text-center d-f justify-content-center w-25'>
                {/* <Anime
                  easing='linear'
                  loop={true}
                  direction='normal'
                  rotate='360'>
                  <FontAwesomeIcon
                    icon={faSpinner}
                    spin
                    size='2x'
                    className='w-25'
                  />
                </Anime> */}
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm>
              <h2>Stats</h2>
              <p></p>
            </Col>
            <Col sm>
              <h2>Runes</h2>
              <Table striped borderless hover variant='dark' responsive>
                <thead>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Skill</th>
                    <th scope='col'>Runes</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </Table>
              <div className='text-center d-f justify-content-center w-25'>
                {/* <Anime
                  easing='linear'
                  loop={true}
                  direction='normal'
                  rotate='360'>
                  <FontAwesomeIcon
                    icon={faSpinner}
                    spin
                    size='2x'
                    className='w-25'
                  />
                </Anime> */}
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm>
              <h2>Gear Set</h2>
              <Row>
                <h3>Tier 1</h3>
                <Col sm>
                  <p></p>
                </Col>
                <h3>Tier 2</h3>
                <Col sm>
                  <p></p>
                </Col>
                <h3>Tier 3</h3>
                <Col sm>
                  <p></p>
                </Col>
              </Row>
            </Col>
            <Col sm>
              <h2>Gems</h2>
              <Row>
                <Col>
                  <h3>Attack</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>Cooldown</h3>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />
          <Row></Row>
        </Container>
      );
    } else {
      return (
        <Container fluid>
          <Row>
            <Col sm>
              <h2>Gameplay</h2>
              <ListGroup as={"ul"} numbered variant='flush'>
                {gameplayEn.map((element, index) => (
                  <ListGroup.Item action variant='dark' key={index} as={"li"}>
                    {element}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col sm>
              <h2>Skills</h2>
              <Table striped borderless hover variant='dark' responsive>
                <thead>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Level</th>
                  </tr>
                </thead>
                <tbody>
                  {skillsName.map((element, index) => (
                    <tr key={index}>
                      <td className='ms-2 me-auto'>{index + 1}</td>
                      <td className='ms-2 me-auto'>
                        <p>
                          <Image fluid src={skills["picture"][index]}></Image>
                          {" " + element}
                        </p>
                      </td>
                      <td className='ms-2 me-auto'>{skillsLevel[index]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm>
              <h2>Stats</h2>
              {stats.map((element) => (
                <p key={element}>{element}</p>
              ))}
            </Col>
            <Col sm>
              <h2>Runes</h2>
              <Table striped borderless hover variant='dark' responsive>
                <thead>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Skill</th>
                    <th scope='col'>Runes</th>
                  </tr>
                </thead>
                <tbody>
                  {runesSkill.map((element, index) => (
                    <tr key={index}>
                      <td className='ms-2 me-auto'>{index + 1}</td>
                      <td className='ms-2 me-auto'>
                        <p>
                          <Image
                            fluid
                            src={runes["Skills"]["Picture"][index]}></Image>
                          {" " + element}
                        </p>
                      </td>
                      <td className='ms-2 me-auto'>
                        <Image
                          fluid
                          src={runes["Runes"]["Picture"][index]}></Image>
                        {runesRunes[index]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm>
              <h2>Gear Set</h2>
              <Row>
                <h3>Tier 1</h3>
                {T1.map((element, index) => (
                  <Col key={index + element} sm>
                    <p key={index}>{element}</p>
                  </Col>
                ))}
                <h3>Tier 2</h3>
                {T2.map((element, index) => (
                  <Col key={index + element} sm>
                    <p key={index}>{element}</p>
                  </Col>
                ))}
                <h3>Tier 3</h3>
                {T3.map((element, index) => (
                  <Col key={index + element} sm>
                    <p key={index}>{element}</p>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col sm>
              <h2>Gems</h2>
              <Row>
                <Col>
                  <h3>Attack</h3>
                  {Gems["Attacks"].map((element, index) => (
                    <p key={index}>
                      <Image fluid src={Gems["Picture"]}></Image> {element}
                    </p>
                  ))}
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>Cooldown</h3>
                  {Gems["Cooldown"].map((element, index) => (
                    <p key={index}>
                      <Image fluid src={Gems["Picture"]}></Image> {element}
                    </p>
                  ))}
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />
          <Row>
            <h3>Cards</h3>
            {card["Budget_Card"]["Card"].map((element, index) => (
              <Col>
                <Card key={index}>
                  <Card.Img
                    variant='top'
                    src={card["Budget_Card"]["Picture"][index]}
                  />
                  <Card.Title>{element}</Card.Title>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      );
    }
  }
}
export default LostArkClass;
