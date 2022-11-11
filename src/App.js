import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageSpinner from 'components/pageSpinner';

const ErrorBoundary = lazy(() => import('components/errBoundary'));
const MainIndex = lazy(() => import('Pages'));

function App() {
  return (
    <>
      <Suspense fallback={<PageSpinner />}>
        <ErrorBoundary>
          <nav>
            React Basic start Kit
          </nav>

          <Routes>
            <Route path="/" element={<MainIndex />} />
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </>
  );
}

export default App;
