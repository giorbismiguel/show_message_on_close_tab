import {memo, useCallback} from 'react'
import {
    Button,
    Box,
    DialogActions,
    DialogContent,
    Checkbox,
    TextField,
} from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {Trans, useTranslation} from "react-i18next";
import {DialogForm, Form, FormSelectAutocompleteField, HandlerError, LoadingButton} from "@dfl/mui-react-common";
import {IUser} from 'modules/users/interfaces/IUser';
import {useFindRoles} from 'modules/security/hooks/useFindRoles';
import useAddRoleToUserForm from 'modules/users/hooks/useAddRoleToUserForm';

type AddRoleToUserModalProps = {
    open: boolean,
    user: IUser | undefined,
    onClose: () => void,
}

const components = {
    bold: <strong/>
};

const icon = <CheckBoxOutlineBlankIcon fontSize="small"/>;
const checkedIcon = <CheckBoxIcon fontSize="small"/>;

const AddRoleToUserModal = ({
                                open,
                                onClose,
                                user,
                            }: AddRoleToUserModalProps) => {
    const {t} = useTranslation('users');
    const {data: roles, isLoading: loadingRoles} = useFindRoles('', {size: 1000});

    const {isLoading, reset, onSubmit, control, error, isError} = useAddRoleToUserForm(user, onClose);

    const handleClose = useCallback(() => {
        onClose?.();
        reset();
    }, [onClose, reset]);

    if (loadingRoles) {
        return (
            <></>
        )
    }

    return (
        <DialogForm
            open={open}
            maxWidth="xs"
            onClose={handleClose}
            title={t('addRoles')}
            subtitle={<Trans i18nKey="users:addRolesSubtitle" values={{user: user?.fullName}}
                             components={components}/>}
            aria-labelledby="add-role-to-user-title">

            <DialogContent>
                <HandlerError error={error}/>
                <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size="large"
                      id="form-add-roles-to-user">
                    <Box mt={1}>
                        <FormSelectAutocompleteField
                            name="roles"
                            multiple
                            options={roles?.data || []}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.name}
                            isOptionEqualToValue={(option, value) => option._id === value._id}
                            renderOption={(props, option, {selected}) => (
                                <li {...props}>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{marginRight: 8}}
                                        checked={selected}
                                    />
                                    {option.name}
                                </li>
                            )}
                            renderInput={(params) => (
                                <TextField {...params} placeholder={t('roles')}/>
                            )}
                            error={isError}
                        />
                    </Box>
                </Form>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>
                    {t('common:cancel')}
                </Button>
                <LoadingButton variant="contained" type={'submit'}
                               loading={isLoading}
                               form="form-add-roles-to-user">
                    {t('common:save')}
                </LoadingButton>
            </DialogActions>
        </DialogForm>
    );
}

export default memo(AddRoleToUserModal)