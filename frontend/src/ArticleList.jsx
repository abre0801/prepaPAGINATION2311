import React, { useState, useEffect } from 'react';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(`/api/articles?page=${currentPage}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setArticles(data.content);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error('Error fetching articles:', error.message);
            }
        };

        fetchArticles();
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <h1>Article List</h1>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        <h2>{article.title}</h2>
                        <p>{article.content}</p>
                    </li>
                ))}
            </ul>

            <div>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index} onClick={() => handlePageChange(index)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ArticleList;
