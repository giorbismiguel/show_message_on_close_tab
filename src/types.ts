type OriginalThemeProps = {
    colors: string[],
    elevations: string [],
    margins: string[],
    defaultTypography: string,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type CustomThemProps = {
    colors: Set<string>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ThemePropsOmit = Omit<OriginalThemeProps, 'colors'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ThemePropsPick = Pick<OriginalThemeProps, 'colors'>;

interface SignupFormState {
    email: string;
    name: string;
}

interface ActionPayload {
 key: keyof SignupFormState;
 value: string;   
}

const update1: ActionPayload = {
    key: 'email',
    value: ""
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type actionPayloadKeys = keyof typeof update1;