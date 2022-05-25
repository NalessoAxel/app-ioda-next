const Button = {
	variants: {
		primary: {
			backgroundColor: 'transparent',
			color: '#000',
			fontWeight: '500',
			height: '33px',
			minWidth: '0',
			paddingRight: '0px',
			paddingLeft: '0px',
			fontSize: '18px',

			_hover: {
				backgroundPosition: '0% 100%',
				backgroundSize: '100% 2px',
			},
			_focus: { outline: 'none', boxShadow: 'none' },
		},
	},
};

export default Button;
