import {
  ButtonMenuPrimary,
  ButtonMenuSecondary,
  ButtonPrimary,
  ButtonSecondary,
} from './button.styles';

const BUTTON_TYPES = {
  primary: 'primary',
  secondary: 'secondary',
  menu_primary: 'menu_primary',
  menu_secondary: 'menu_secondary',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: 'primary' | 'secondary' | 'menu_secondary' | 'menu_primary',
  isActive?: boolean,
  children: React.ReactNode,
}

function Button({
  buttonType = 'primary',
  isActive = false,
  children,
  ...otherProps
}: ButtonProps) {
  const getButton = (type: string) => (
    {
      [BUTTON_TYPES.primary]: ButtonPrimary,
      [BUTTON_TYPES.secondary]: ButtonSecondary,
      [BUTTON_TYPES.menu_secondary]: ButtonMenuSecondary,
      [BUTTON_TYPES.menu_primary]: ButtonMenuPrimary,
    }[type]
  );

  const SelectedButton = getButton(buttonType);

  return (
    <SelectedButton
      className={isActive ? 'active' : ''}
      type="button"
      {...otherProps}
    >
      {children}
    </SelectedButton>
  );
}

export default Button;
