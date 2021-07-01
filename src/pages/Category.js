import React from 'react';

const Category = ({match}) => {
    return (
        <div>
            커뮤니티 내용 {match.params.id}

        </div>
    );
};

export default Category;