import {useTranslation} from "react-i18next";
import {H1, HandlerError, PageLoader} from "@dfl/mui-react-common";
import {ConditionContainer} from "@dfl/mui-react-common";
import {ERRORS, LOGIN_ERRORS} from "modules/authentication/constants";
import {DFLError, useVerify} from "@dfl/react-security";
import {ResendVerifyLinkForm} from "modules/authentication/components/ResendVerifyLinkForm";
import {useMemo} from "react";


type VerifyProps = {
    verifyKey: string
}

const useMapError = (error: DFLError) =>
    useMemo(() => {
        if (error?.name === "BADREQUESTERROR")
            error.reference = ERRORS.ACCOUNT_CONFIRMATION_FAILED;
        return error;
    }, [error]); ///backend issue

function Verify({verifyKey}: VerifyProps) {
    const {t} = useTranslation("authentication");
    const {error, isError} = useVerify(verifyKey);
    const mappedError = useMapError(error as DFLError);

    return (
        <div>
            <div className={"flex items-center justify-center flex-col mb-8"}>
                {!isError && <PageLoader size={60}/>}
                <H1 textAlign={'center'}>
                    {t(!isError ? "confirmation.loading" : "confirmation.title")}
                </H1>
            </div>
            <HandlerError error={mappedError} errors={LOGIN_ERRORS}/>
            <ConditionContainer active={!!error}>
                <ResendVerifyLinkForm/>
            </ConditionContainer>
        </div>
    );
}

export default Verify;
