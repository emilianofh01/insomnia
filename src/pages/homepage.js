import React from 'react';
import './styles/Homepage.css'
import SpotifyButton from '../components/SpotifyButton'

class homepage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="homepage__container">
                    <div className="hero__mario"></div>
                    <div className="hero__mario_text">

                        <h1 className="title">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </h1>

                        <p className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac imperdiet sapien, eget porta nisi. Curabitur vel imperdiet lacus. Sed et sagittis massa, nec consequat lorem. Curabitur risus turpis, volutpat eget diam eget, posuere efficitur felis. Integer gravida nibh in libero gravida, interdum interdum urna faucibus. Phasellus sagittis faucibus elit quis rutrum. In eleifend mollis dui, et placerat justo maximus a. Phasellus id blandit velit, et eleifend urna. Cras convallis pharetra leo, non vestibulum nulla luctus sed.
                        </p>
                        <SpotifyButton />
                    </div>
                </div>

                <h1> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac imperdiet sapien, eget porta nisi. Curabitur vel imperdiet lacus. Sed et sagittis massa, nec consequat lorem. Curabitur risus turpis, volutpat eget diam eget, posuere efficitur felis. Integer gravida nibh in libero gravida, interdum interdum urna faucibus. Phasellus sagittis faucibus elit quis rutrum. In eleifend mollis dui, et placerat justo maximus a. Phasellus id blandit velit, et eleifend urna. Cras convallis pharetra leo, non vestibulum nulla luctus sed.

Vivamus vestibulum ornare nisi. Vestibulum efficitur malesuada pulvinar. Proin purus metus, faucibus vel augue at, fringilla bibendum quam. In viverra imperdiet elit, ac egestas diam dapibus a. Morbi sit amet semper orci. Etiam euismod nisl at ex sagittis suscipit. Pellentesque ultricies scelerisque est in ultrices. Sed dapibus egestas libero, non volutpat mauris interdum quis. Sed ornare aliquet lacus vitae venenatis.

Nunc condimentum, sem vitae accumsan porta, ligula urna accumsan sapien, nec porta magna ipsum eget enim. Maecenas lectus est, tincidunt a ornare id, tincidunt ut mauris. Nunc faucibus tincidunt fringilla. Pellentesque dictum ex ut urna eleifend, eget hendrerit nulla lacinia. Nunc interdum tristique mi, sed lacinia massa varius quis. Fusce ullamcorper ligula ut ipsum condimentum posuere ut at turpis. Maecenas tempus imperdiet dolor, sed convallis metus hendrerit eu. Cras pulvinar accumsan pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam id dictum elit. Proin ligula leo, porta nec commodo a, consequat quis erat. Sed vestibulum aliquet aliquet. Aenean congue, risus commodo suscipit viverra, purus velit efficitur quam, laoreet euismod lacus mauris eu ante. Morbi sem turpis, ultrices in interdum eu, tempus ultrices eros.

Proin ac odio at massa efficitur finibus. Aliquam tincidunt sollicitudin metus rhoncus cursus. Vivamus elit augue, dictum condimentum efficitur nec, lobortis laoreet ex. Ut rhoncus molestie sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec volutpat nisl vitae lectus condimentum finibus. Nullam nec orci nec turpis fermentum sodales eu quis velit. Nulla facilisi. Pellentesque sit amet sodales est. Vivamus tempor, erat sed ultrices ornare, neque dui aliquet est, vel feugiat mauris lectus finibus urna.</h1>
            </React.Fragment>
        );
    }
}

export default homepage;