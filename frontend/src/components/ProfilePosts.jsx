// import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
// import { UserContext } from '../context/UserContext';
// import { useContext } from 'react';

const ProfilePosts=({post}) => {

    return (
        <div>
            <div className="card mb-4">
                <div className="row no-gutters">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <p>by @{post.username} on August 15, 2024, 17:32</p>
                            <p className="card-text">{post.desc.slice(0,30)+" ...Read more"}</p>
                            <div className="d-flex justify-content-between align-items-center">                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
ProfilePosts.propTypes = {
    post: PropTypes.shape({
      title: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    }).isRequired,
  };
export default ProfilePosts;

