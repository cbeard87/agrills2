AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('forgotPwd', {layoutTemplate: 'appLayout'});

AccountsTemplates.configure({
	forbidClientAccountCreation: true,
	showForgotPasswordLink: true
});
