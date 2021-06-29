import React from 'react';

const Community = ({match}) => {
    return (
        <div>
            커뮤니티 내용 {match.params.id}
        </div>
    );
};

export default Community;