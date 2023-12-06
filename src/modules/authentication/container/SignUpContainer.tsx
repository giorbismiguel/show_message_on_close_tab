// @ts-nocheck
import {memo} from 'react';
import {
    FormTextField,
    FormPasswordField,
    Span,
    Form,
    LoadingButton,
    FormSwitchField,
    HandlerError
} from '@dfl/mui-react-common';
import Grid from '@mui/material/Grid';
import {useTranslation, Trans} from 'react-i18next';
import {SIGNUP_ERRORS} from '../constants/login.errors';
import {ConditionContainer} from '@dfl/mui-react-common';
import SocialLogin from 'modules/authentication/components/SocialLogin/SocialLogin';
import OrDivider from 'modules/authentication/components/OrDivider/OrDivider';
import useSignUpForm from 'modules/authentication/hooks/useSignUpForm';
import {SignUpSent} from 'modules/authentication/components/SignUpSent';
import {ReactLink} from '@dfl/react-security';
import Box from "@mui/material/Box";

const components = {
    terms: <ReactLink to={'/terms-conditions'} target='_blank' underline='hover'/>,
    small: <Span color='primary.main'/>
};

const SignUp = () => {
    const {t} = useTranslation(['authentication', 'common']);
    const {
        onSubmit,
        control,
        isLoading,
        error,
        termAcceptance,
        isSuccess,
        data
    } = useSignUpForm();



    return (
        <div>
            <ConditionContainer
                active={!isSuccess}
                alternative={<SignUpSent email={data?.email}/>}
            >
                <HandlerError error={error} errors={SIGNUP_ERRORS}/>
                <SocialLogin isLoading={isLoading}/>
                <OrDivider/>

                <Form onSubmit={onSubmit} isLoading={isLoading}>
                    <Grid container columnSpacing={2} rowSpacing={4}>
                        <Grid item xs={12} md={6}>
                            <FormTextField
                                name='firstName'
                                label={t('common:firstName')}
                                control={control}
                                disabled={isLoading}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormTextField
                                name='lastName'
                                label={t('common:lastName')}
                                control={control}
                                disabled={isLoading}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormTextField
                                name='email'
                                label={t('common:email')}
                                control={control}
                                disabled={isLoading}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormTextField
                                name='idNumber'
                                label={t('common:idNumber')}
                                control={control}
                                disabled={isLoading}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormPasswordField
                                name='password'
                                label={t('common:password')}
                                control={control}
                                disabled={isLoading}
                            />
                        </Grid>
                    </Grid>
                    <Box mt={2}>
                        <FormSwitchField
                            name='acceptTerms'
                            label={
                                <Trans i18nKey='authentication:acceptTerms' components={components}/>
                            }
                            control={control}
                            disabled={isLoading}
                        />
                    </Box>
                    <Box mt={4}>
                        <LoadingButton
                            fullWidth
                            type='submit'
                            variant='contained'
                            size={'large'}
                            loading={isLoading}
                            disabled={!termAcceptance}
                        >
                            {t('signup')}
                        </LoadingButton>
                    </Box>
                </Form>
            </ConditionContainer>
            <Box mt={2} textAlign={"center"}>
                <Span mt={3} color='text.secondary'>
                    {t('haveAccount')}
                    <ReactLink to='/auth/login' underline='hover'>
                        {t('login')}
                    </ReactLink>
                </Span>
            </Box>
        </div>
    );
};

export default memo(SignUp);
