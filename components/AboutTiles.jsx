import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutTiles = () => {
  return (
    <div class="font-raleway">
      <Row className="flex text-black items-center p-3 bg-[#FEC155] h-[60vh]">
        <Col sm={6} className="flex w-2/3 h-full">
          <img class="w-fit h-full" src="Chassis.png" alt="Square image" />
        </Col>
        <Col
          sm={6}
          className="flex justify-center text-center min-h-full my-auto"
        >
          <p className="text-xl flex justify-center mx-auto my-auto w-11/12 pt-3">
            Having begun as a small project with a few members and nothing but
            an idea and a dream, the team and project have both developed into a
            large project for all members and contributors to the project
          </p>
        </Col>
      </Row>
      <Row className="flex text-black items-center p-3 bg-[#78ADC5] h-[60vh]">
        <Col
          sm={6}
          className="flex justify-center text-center min-h-full my-auto "
        >
          <p className="text-xl flex justify-center mx-auto my-auto w-11/12 pt-3">
            involving many members who work on our solar vehicle, countless
            hours of electrical and mechanical meetings, lead meetings, and
            hours outside of school.
          </p>
        </Col>
        <Col sm={6} className="flex w-2/3 h-full">
          <img class="w-fit h-full" src="Chassis.png" alt="Square image" />
        </Col>
      </Row>
    </div>
  );
};

export default AboutTiles;
