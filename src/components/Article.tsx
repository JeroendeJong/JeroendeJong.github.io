import { useParams } from "react-router-dom"
import articlesConfig from '../config.json'
import { Document, Page, pdfjs } from 'react-pdf'
import { useState } from "react"
import styled from "styled-components";
import { PageControls, PageButton, PageText } from "./Pagination";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function Article() {
  const params = useParams()

  const article = articlesConfig.articles.find((item) => item.id.toString() === params.id)

  return (
    <div>
      <Viewer pdfUrl={article?.data.pdfUrl}/>
    </div>
  )
}

const ArticlePage = styled(Page)`
  canvas {
    margin: auto;
    box-shadow: 0 30px 40px 0 rgb(16 36 94 / 20%);
    border-radius: 15px;

    @media (max-width: 712px) {
      width: 100% !important;
      height: 100% !important;
    }
  }
`


function Viewer({ pdfUrl }: {pdfUrl: string | undefined}) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  function handleLoadSuccess(stuff: any) {
    setNumPages(stuff.numPages);
  }

  function onPreviousPageClick() {
    numPages && (pageNumber > 1) && setPageNumber((state) => state - 1)
    console.log(pageNumber, numPages)
  }

  function onNextPageClick() {
    numPages && (pageNumber < numPages) && setPageNumber((state) => state + 1)
  }

  return (
    <>
      <Document file={window.location.origin + pdfUrl} onLoadSuccess={handleLoadSuccess}>
        <ArticlePage pageNumber={pageNumber} />
      </Document>

      <PageControls>
        <PageButton type="button" onClick={onPreviousPageClick}>‹</PageButton>
        <PageText>{pageNumber} of {numPages}</PageText>
        <PageButton type="button" onClick={onNextPageClick}>›</PageButton>
      </PageControls>
    </>
  );

}


export { Article }
