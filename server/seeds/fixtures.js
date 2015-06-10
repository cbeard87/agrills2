Meteor.startup(function() {

    if (About.find().count() === 0) {
        About.insert({heading: 'ABOUT', subHeading: 'Husband. Father.<br>Pastor.', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum aut consectetur provident. Vitae optio perspiciatis praesentium recusandae, dolor quasi repellendus adipisci quaerat, saepe illo autem alias. Qui cum, mollitia repellendus corporis aliquid fuga. Commodi enim, labore possimus dolorum obcaecati vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, porro iure nesciunt libero quam, id quos velit assumenda nam blanditiis at repellendus exercitationem dolores placeat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias similique, culpa quisquam. Dolorem aspernatur numquam suscipit, facilis, amet quidem cum necessitatibus quas facere in quibusdam. Dolorum ex iure tenetur omnis repellendus vero, ut laudantium facere nam quos! Numquam fugiat tempore, rerum sequi. Eaque tempora, rem aspernatur expedita iusto, pariatur assumenda hic cupiditate explicabo neque fuga, dignissimos nisi architecto rerum aperiam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, esse. Rem excepturi facere aspernatur, cumque deserunt voluptas. Alias commodi laudantium sequi harum, libero et nihil fugit quibusdam deleniti culpa. Minima alias facilis quidem veniam doloremque rem nisi aliquid quod quos error. Sapiente harum, ullam, expedita quo quis dignissimos mollitia tempora! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit doloribus impedit sit doloremque molestias atque vero quasi, incidunt consequuntur nihil fuga ad ratione vel cupiditate aspernatur eligendi magnam vitae. Reiciendis tempore numquam labore.'});
    }

	if ( Meteor.users.find().count() === 0 ) {
    Accounts.createUser({
        username: 'Anthony',
        email: 'acgrills@gmail.com',
        password: 'floating32',
        profile: {
            name: 'Anthony Grills',
            company: 'Main Street United Methodist Church'
        }
    });
}
});

