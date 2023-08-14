const routes = {
    signUp: 'api/v1/auth/sign-up',
    signIn: 'api/v1/auth/sign-in',
    refresh_token: 'api/v1/auth/refresh-token',
    update_package: 'api/v1/package/update-package',
    feedback_package: 'api/v1/package/feedback-package',
    delete_package: 'api/v1/package/delete-package',
    delete_feedback_package: 'api/v1/package/delete-feedback-package',
    post_package: 'api/v1/package/post-package',
    get_single_package: 'api/v1/package/get-single-package',
    get_package: 'api/v1/package/get-package',
    edit_agency: 'api/v1/agents/edit-agency',
    delete_agency: 'api/v1/agents/delete-agency',
    get_agencies: 'api/v1/agents/get-agencies',
    edit_user: 'api/v1/users/edit-user',
    proceed_package: 'api/v1/users/proceed-package',
    delete_user: 'api/v1/users/delete-user',
    get_users: 'api/v1/users/get-users' 
}

export default routes;