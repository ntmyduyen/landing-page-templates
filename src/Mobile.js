import {
  Typography,
  Layout,
  Row,
  Col,
  Affix,
  Image,
  Button,
  Tooltip,
  Popover,
} from "antd";

import { DownloadOutlined } from "@ant-design/icons";

import { motion } from "framer-motion";

import data from "./content.json";

// props: sectionItem, backgroundColor
function SectionItem(props) {
  return (
    <Row
      justify="center"
      align="top"
      style={{
        backgroundColor: props.backgroundColor,
        height: "700px",
        padding: "70px 20px",
      }}
    >
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { type: "spring", bounce: 0, duration: 1 },
        }}
        viewport={{ once: true }}
      >
        <Row justify="center">
          <Typography.Title level={2}>
            {props.sectionItem.title}
          </Typography.Title>
        </Row>
        <Row justify="center">
          <Typography style={{ fontSize: "16px" }}>
            {props.sectionItem.text}
          </Typography>
        </Row>
      </motion.div>

      <motion.div
        initial={{ x: -300, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { type: "spring", bounce: 0, duration: 1 },
        }}
        viewport={{ once: true }}
      >
        <Image
          preview={false}
          src={props.sectionItem.image}
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            maxWidth: "600px",
          }}
        ></Image>
      </motion.div>
    </Row>
  );
}

// props: sectionList
function SectionList(props) {
  return (
    <>
      {props.sectionList.map((sectionItem, index) => {
        return (
          <SectionItem
            sectionItem={sectionItem}
            backgroundColor={index % 2 === 0 ? "white" : null}
          />
        );
      })}
    </>
  );
}

function Mobile() {
  return (
    <Layout style={{ "overflow-x": "hidden" }}>
      <Affix offsetTop={0}>
        <Layout.Header style={{ background: "white", width: "100%" }}>
          <Row
            justify="center"
            align="middle"
            style={{ backgroundColor: "white", width: "100%", height: "100%" }}
          >
            <Col>
              <Image
                width={30}
                height={30}
                preview={false}
                src={data.appLogo}
              ></Image>
            </Col>
            <Col>
              <Typography.Title
                level={3}
                style={{ color: "black", marginLeft: "10px" }}
              >
                {data.appName}
              </Typography.Title>
            </Col>
          </Row>
        </Layout.Header>
      </Affix>

      <Layout.Content>
        {/* cover headline */}
        <Row
          justify="center"
          align="middle"
          style={{
            backgroundColor: "white",
            height: "800px",
            paddingTop: "50px",
          }}
        >
          <Row justify="center">
            <Typography.Title level={2}>{data.coverTitle}</Typography.Title>
          </Row>

          <Row justify="center" style={{ padding: "0px 20px" }}>
            <Typography style={{ fontSize: "16px" }}>
              {data.coverText}
            </Typography>
          </Row>

          <Row justify="space-around">
            {data.appleStoreLink && (
              <Col style={{ width: "45%" }}>
                <Row justify="center">
                  <a
                    href={data.appleStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      height={50}
                      preview={false}
                      src={data.appleStoreBadge}
                    ></Image>
                  </a>
                </Row>
              </Col>
            )}
            {data.googlePlayLink && (
              <Col style={{ width: "45%" }}>
                <Row justify="center">
                  <a
                    href={data.googlePlayLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      height={50}
                      style={{ padding: "2px 0" }}
                      preview={false}
                      src={data.googlePlayBadge}
                    ></Image>
                  </a>
                </Row>
              </Col>
            )}
          </Row>

          <Row justify="center">
            <Image
              preview={false}
              src={data.coverImage}
              style={{ width: "100%" }}
            ></Image>
          </Row>
        </Row>

        {/* endorsement list */}
        <Row
          justify="center"
          align="top"
          style={{ height: "500px", padding: "70px 20px" }}
        >
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { type: "spring", bounce: 0, duration: 1 },
            }}
            viewport={{ once: true }}
          >
            <Row justify="center">
              <Typography.Title level={2}>
                {data.endorsementTitle}
              </Typography.Title>
            </Row>
            <Row justify="center">
              <Typography style={{ fontSize: "16px" }}>
                {data.endorsementText}
              </Typography>
            </Row>
            <Row justify="space-around" style={{ marginTop: "50px" }}>
              {data.endorsementList.map((endorsementItem, index) => {
                return (
                  <Col style={{ margin: "auto" }}>
                    <Tooltip
                      placement="top"
                      title={endorsementItem.title}
                      color={endorsementItem.titleColor}
                    >
                      <a
                        href={endorsementItem.URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          height={50}
                          preview={false}
                          src={endorsementItem.image}
                          style={{
                            boxShadow:
                              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                          }}
                        ></Image>
                      </a>
                    </Tooltip>
                  </Col>
                );
              })}
            </Row>
          </motion.div>
        </Row>

        {/* section list */}
        <SectionList sectionList={data.sectionList} />

        {/* policies */}
        <Row
          justify="center"
          align="top"
          style={{
            backgroundColor: "white",
            height: "450px",
            padding: "70px 20px",
          }}
        >
          <Row justify="space-around" align="top" style={{ width: "100%" }}>
            <Col>
              <Row justify="start" align="middle">
                <Typography>Need help?</Typography>
              </Row>
              <Row
                justify="start"
                align="middle"
                style={{ cursor: "pointer", marginTop: "20px" }}
              >
                <Popover
                  placement="top"
                  title="Contact Us"
                  content={
                    <a
                      href={data.discordLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Row justify="start" align="middle">
                        <Col>
                          <Image
                            width={40}
                            height={40}
                            preview={false}
                            src={data.discordImage}
                          ></Image>
                        </Col>
                        <Col style={{ marginLeft: "5px" }}>
                          <Typography>Join our Discord</Typography>
                        </Col>
                      </Row>
                    </a>
                  }
                  trigger="click"
                >
                  <Typography.Title level={5} style={{ margin: "0px" }}>
                    Contact Us
                  </Typography.Title>
                </Popover>
              </Row>
            </Col>
          </Row>
        </Row>

        <Row
          justify="center"
          align="middle"
          style={{ backgroundColor: "white", padding: "0 0 40px 0" }}
        >
          <Col>
            <Typography.Text type="secondary" style={{ fontSize: 12 }}>
              {data.appName} © {new Date().getFullYear()}
            </Typography.Text>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
}

export default Mobile;
