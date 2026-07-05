CREATE TABLE Problems (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    problem_key TEXT UNIQUE NOT NULL,

    title VARCHAR(255) NOT NULL,
    topic VARCHAR(100) NOT NULL,
    difficulty TEXT NOT NULL,
    source VARCHAR(50) NOT NULL,
    link TEXT,

    description TEXT NOT NULL,

    constraints JSONB NOT NULL,
    examples JSONB NOT NULL,

    editorial_code TEXT NOT NULL,

    time_limit_ms INTEGER NOT NULL,
    memory_limit_mb INTEGER NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE StarterCode (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    problem_id INTEGER NOT NULL,

    language VARCHAR(20) NOT NULL,
    template_code TEXT NOT NULL,
    wrapper_main TEXT NOT NULL,

    CONSTRAINT fk_starter_problem
        FOREIGN KEY (problem_id)
        REFERENCES Problems(id)
        ON DELETE CASCADE,

    CONSTRAINT uq_starter_problem_language
        UNIQUE (problem_id, language)
);

CREATE TABLE TestCases (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    problem_id INTEGER NOT NULL,

    input JSONB NOT NULL,
    expected_output JSONB NOT NULL,

    is_hidden BOOLEAN NOT NULL DEFAULT FALSE,

    CONSTRAINT fk_testcase_problem
        FOREIGN KEY (problem_id)
        REFERENCES Problems(id)
        ON DELETE CASCADE,

    CONSTRAINT uq_testcase
        UNIQUE (
            problem_id,
            input,
            expected_output,
            is_hidden
        )
);