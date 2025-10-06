import { Text } from 'src/ui/text';
import clsx from 'clsx';
import styles from './Button.module.scss';

type ButtonProps = {
	title: string;
	onClick?: () => void;
	htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
	type: 'apply' | 'clear';
};

export const Button = ({ title, onClick, htmlType, type }: ButtonProps) => {
	return (
		<button
			className={clsx(styles.button, {
        [styles.button_apply]: type === 'apply',
        [styles.button_clear]: type === 'clear'
      })}
			type={htmlType}
			onClick={onClick}>
			<Text weight={800} uppercase>
				{title}
			</Text>
		</button>
	);
};