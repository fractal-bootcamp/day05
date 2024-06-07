-- CreateTable
CREATE TABLE "Questions" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "surveyId" TEXT NOT NULL,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answers" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "questionsId" TEXT NOT NULL,

    CONSTRAINT "Answers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_surveyId_fkey" FOREIGN KEY ("surveyId") REFERENCES "Survey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_questionsId_fkey" FOREIGN KEY ("questionsId") REFERENCES "Questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
