import { useState } from 'react';
import {
  ArticleStateType,
  defaultArticleState,
  fontFamilyOptions,
  fontColors,
  backgroundColors,
  contentWidthArr,
  fontSizeOptions
} from 'src/constants/articleProps';

export const useArticleState = () => {
  const [formState, setFormState] = useState<ArticleStateType>(defaultArticleState);
  const [appliedState, setAppliedState] = useState<ArticleStateType>(defaultArticleState);

  const applyStyles = () => {
    setAppliedState(formState);
  };

  const resetStyles = () => {
    setFormState(defaultArticleState);
    setAppliedState(defaultArticleState);
  };

  const updateFormState = (updates: Partial<ArticleStateType>) => {
    setFormState(prev => ({ ...prev, ...updates }));
  };

  return {
    formState,
    appliedState,
    updateFormState,
    applyStyles,
    resetStyles
  };
};