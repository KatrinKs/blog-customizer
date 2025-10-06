import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { useArticleState } from './hooks/useArticleState';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const App = () => {
  const { formState, appliedState, updateFormState, applyStyles, resetStyles } = useArticleState();

  return (
    <main
      className={clsx(styles.main)}
      style={
        {
          '--font-family': appliedState.fontFamilyOption.value,
          '--font-size': appliedState.fontSizeOption.value,
          '--font-color': appliedState.fontColor.value,
          '--container-width': appliedState.contentWidth.value,
          '--bg-color': appliedState.backgroundColor.value,
        } as CSSProperties
      }>
      <ArticleParamsForm
        formState={formState}
        onFormStateChange={updateFormState}
        onApply={applyStyles}
        onReset={resetStyles}
      />
      <Article />
    </main>
  );
};

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);