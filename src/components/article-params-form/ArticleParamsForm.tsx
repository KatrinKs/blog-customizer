import { useState } from 'react';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { RadioGroup } from 'src/ui/radio-group';
import { Select } from 'src/ui/select';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';
import {
  ArticleStateType,
  fontFamilyOptions,
  fontColors,
  backgroundColors,
  contentWidthArr,
  fontSizeOptions
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

type ArticleParamsFormProps = {
  formState: ArticleStateType;
  onFormStateChange: (updates: Partial<ArticleStateType>) => void;
  onApply: () => void;
  onReset: () => void;
};

export const ArticleParamsForm = ({
  formState,
  onFormStateChange,
  onApply,
  onReset
}: ArticleParamsFormProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onApply();
	setIsOpen(false);
  };

  const handleReset = () => {
    onReset();
	setIsOpen(false);
  };

  const handleOutsideClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <ArrowButton
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      <aside
        className={`${styles.container} ${isOpen ? styles.container_open : ''}`}
        onClick={handleOutsideClick}
      >
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          onClick={(e) => e.stopPropagation()}
        >
          <Text as="h2" size={31} weight={800} uppercase>
            Задайте параметры
          </Text>

          <Select
            selected={formState.fontFamilyOption}
            options={fontFamilyOptions}
            onChange={(option) => onFormStateChange({ fontFamilyOption: option })}
            title="шрифт"
          />

          <RadioGroup
            name="fontSize"
            options={fontSizeOptions}
            selected={formState.fontSizeOption}
            onChange={(option) => onFormStateChange({ fontSizeOption: option })}
            title="размер шрифта"
          />

          <Select
            selected={formState.fontColor}
            options={fontColors}
            onChange={(option) => onFormStateChange({ fontColor: option })}
            title="цвет шрифта"
          />

          <Separator />

          <Select
            selected={formState.backgroundColor}
            options={backgroundColors}
            onChange={(option) => onFormStateChange({ backgroundColor: option })}
            title="цвет фона"
          />

          <Select
            selected={formState.contentWidth}
            options={contentWidthArr}
            onChange={(option) => onFormStateChange({ contentWidth: option })}
            title="ширина контента"
          />

          <div className={styles.bottomContainer}>
            <Button
              title='Сбросить'
              htmlType='reset'
              type='clear'
              onClick={handleReset}
            />
            <Button
              title='Применить'
              htmlType='submit'
              type='apply'
            />
          </div>
        </form>
      </aside>
    </>
  );
};