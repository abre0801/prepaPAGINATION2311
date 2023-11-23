CREATE TABLE article
(
    id      BIGINT AUTO_INCREMENT NOT NULL,
    title   VARCHAR(255) NULL,
    content VARCHAR(255) NULL,
    CONSTRAINT pk_article PRIMARY KEY (id)
);