import React, { Fragment } from "react"
import {
  Header,
  Footer,
  SEO,
  Profile,
  AvailableBalance,
  Chat,
  Wrapper,
  Contents,
  Row,
  Col
} from "components/common"
import ProfileCompleteness from "./ProfileCompleteness"
import RecentActivity from "./RecentActivity"
import { connect } from "react-redux"
import { userAction } from "redux/actions/user.action"

function Dashboard(props) {
  const email = props?.login?.user?.email || props?.register?.user?.email
  React.useEffect(() => {
    props.onFetchUser(localStorage.getItem("user"))
  }, [])

  const { user } = props
  return (
    <Fragment>
      <SEO title="Kira World Dashboard" />
      <Header />
      <Wrapper bgColor="#f5f5f5" padding="1.5rem 0">
        <Contents>
          <Row>
            <Col flex="2">
              <Profile user={ user } />
              <AvailableBalance user={ user } />
              {/* <Chat /> */}
            </Col>
            <Col flex="10">
              <ProfileCompleteness user={ user } />
              <RecentActivity />
            </Col>
          </Row>
        </Contents>
      </Wrapper>
      <Footer />
    </Fragment>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchUser: (email) => {
      dispatch(userAction(email));
    },
  };
}

const mapStateToProps = ({ login, register, user }) => ({
  login,
  register,
  user,
});

export { Dashboard };
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
