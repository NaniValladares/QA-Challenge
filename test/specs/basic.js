describe('Bookstore page', () => {
    it('should have the right title', () => {
        browser.url('https://demoqa.com/books/')
        expect(browser).toHaveTitle('ToolsQA');
    })

    it('should have clickable button', () => {
        const ClickButton = $("#login");
        expect(ClickButton).toBeClickable();
    }) 
 

    //Login test cases
    it('Should show error message', () => {
        LogButton = $("#login");
        LogButton.click();
        form = $('userForm');
        inputUser = $('#userName');
        inputPassword = $('#password');
        inputUser.setValue('dvalladar');
        inputPassword.setValue('HolaMundo!1');
        LogInButton = $("#login");
        LogInButton.click();
        const errorMessage = $('#name')
        expect(errorMessage).toBeVisible()
    }); 

    it('Login should success', () => {
        form = $('userForm');
        inputUser = $('#userName');
        inputPassword = $('#password');
        inputUser.setValue('dvalladares');
        inputPassword.setValue('HolaMundo!1');
        LogInButton = $("#login");
        LogInButton.click();
    }); 


    // Bookstore test cases

    it('Should filter by name', () => {
        inputBook = $('#searchBox');
        inputBook.setValue('Learning JavaScript Design Patterns');
        bookname = $('#see-book-Learning\\ JavaScript\\ Design\\ Patterns');
        expect(bookname).toHaveTextContaining("Learning JavaScript Design Patterns"); 
    });

    it('Should verify username', () => {
        username = $('#userName-value');
        expect(username).toHaveTextContaining("dmarti"); 
    }); 
    

    // Profile test cases

    it('Should go to profile and logout', () => {
        browser.newWindow('https://demoqa.com/profile')
        LogOutButton = $("#submit");
        LogOutButton.click();
    });

    

       
})


