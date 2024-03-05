import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

export default function ProfilePosts({p}) {

    const {user}=useContext(UserContext)

    return (
        <div>
            <div className="card mb-4">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="https://via.placeholder.com/300x200" className="card-img" alt="Blog Post Image" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">{p.title}</h2>
                            <p>by @{p.username} on August 15, 2024, 17:32</p>
                            <p className="card-text">{p.desc.slice(0,200)+" ...Read more"}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <Link to={"/posts/post/"+user._id} className="btn btn-primary nav-link">Read More</Link>
                                {/* <div className="btn-group">
                                    <button type="button" className="btn btn-outline-secondary ml-2">Edit</button>
                                    <button type="button" className="btn btn-outline-danger ml-2">Delete</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
ProfilePosts.propTypes = {
    p: PropTypes.shape({
      title: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    }).isRequired,
  };

