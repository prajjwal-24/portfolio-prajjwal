import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl , clickUrl}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" >
        <img src={imgUrl} />
        <div className="proj-txtx">
            <a href={clickUrl}>
                <h4>{title}</h4>
                <span>{description}</span>
            </a>
        </div>
    </div>
</Col>
  )
}
