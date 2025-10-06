import React, { createContext, useContext, useState, ReactNode } from 'react';
import {
  ArticleStateType,
  defaultArticleState,
  fontFamilyOptions,
  fontColors,
  backgroundColors,
  contentWidthArr,
  fontSizeOptions
} from 'src/constants/articleProps';

interface ArticleContextType {
  articleState: ArticleStateType;
  formState: ArticleStateType;
  isSidebarOpen: boolean;
  setArticleState: (state: ArticleStateType) => void;
  setFormState: (state: ArticleStateType) => void;
  setIsSidebarOpen: (isOpen: boolean) => void;
  applyStyles: () => void;
  resetStyles: () => void;
}

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

export const ArticleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [articleState, setArticleState] = useState<ArticleStateType>(defaultArticleState);
  const [formState, setFormState] = useState<ArticleStateType>(defaultArticleState);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const applyStyles = () => {
    setArticleState(formState);
  };

  const resetStyles = () => {
    setFormState(defaultArticleState);
    setArticleState(defaultArticleState);
  };

  return (
    <ArticleContext.Provider
      value={{
        articleState,
        formState,
        isSidebarOpen,
        setArticleState,
        setFormState,
        setIsSidebarOpen,
        applyStyles,
        resetStyles,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticle = () => {
  const context = useContext(ArticleContext);
  if (context === undefined) {
    throw new Error('useArticle must be used within an ArticleProvider');
  }
  return context;
};