const homePage = {
    newsButtons: '[href="/news"]',
    homeButtons: '[href="/"]',
    sportButtons: '[href="/sport"]',
    businessButtons: '[href="/business"]',
    innovationButtons: '[href="/innovation"]',
    cultureButtons: '[href="/culture"]',
    travelButtons: '[href="/travel"]',
    earthButtons: '[href="/future-planet"]',
    videoButtons: '[href="/video"]',
    liveButtons: '[href="/live"]',
    logo: '[icon="bbc"]',
    hamburger: '[class="sc-75742244-3 eupXpe"]',
    searchIcon: '[class="sc-75742244-3 sc-75742244-4 eupXpe hKHSDc"]',
    searchBar: '[data-testid="search-input-field"]',
    searchEnterButton: '[data-testid="search-input-search-button"]',
    registerButton: '[aria-label="Register"]',
    signInButton: '[aria-label="Sign In"]',
    weatherButtons: '[href="https://www.bbc.com/weather"]',
    audioButtons: '[href="https://www.bbc.co.uk/sounds?src_origin=BBCS_BBC"]',
    BBShopButton: '[href="https://shop.bbc.com/"]',
    leftArticleBlock: '[data-testid="first-grid"]',
    centralArticle: '[class="sc-5b94fa74-0 gyIGmm"]',
    rightArticleBlock: '[data-testid="second-grid"]',
    navBar: '[class="sc-f116bf72-1 xECcw"]',
    allArticleBlock: '[data-testid="Vermont-grid"]',
    allArticlesTitles: '[data-testid="card-headline"]',
    languageDropbox: '[class="sc-e5f9a6b3-3 eMDdil"]',
    portugueseOption: '[href="https://www.bbc.com/portuguese?src_origin=BBCS_BBC"]',
    turkishOption: '[href="https://www.bbc.com/turkce?src_origin=BBCS_BBC"]',
    yorubaOption: '[href="https://www.bbc.com/yoruba?src_origin=BBCS_BBC"]'

};

const resolution = {
    PC1: {
        height: 1080,
        widht: 1920
    },
    PC2: {
        height: 1366,
        widht: 768
    },
    tablet1: {
        height: 768,
        widht: 1024
    },
    tablet2: {
        height: 810,
        widht: 1080
    },
    phone1: {
        height: 360,
        widht: 800
    },
    phone2: {
        height: 390,
        widht: 844
    }
};

const navButtonsLocatorAndUrl = [
    { selector: '[href="/news"]', url: 'https://www.bbc.com/news' },
    { selector: '[href="/"]', url: 'https://www.bbc.com/' },
    { selector: '[href="/business"]', url: 'https://www.bbc.com/business' },
    { selector: '[href="/innovation"]', url: 'https://www.bbc.com/innovation' },
    { selector: '[href="/culture"]', url: 'https://www.bbc.com/culture' },
    { selector: '[href="/travel"]', url: 'https://www.bbc.com/travel' },
    { selector: '[href="/future-planet"]', url: 'https://www.bbc.com/future-planet' },
    { selector: '[href="/video"]', url: 'https://www.bbc.com/video' },
    { selector: '[href="/live"]', url: 'https://www.bbc.com/live' },
    { selector: '[href="/sport"]', url: 'https://www.bbc.com/sport' }

];
const navLinksInFooterLocatorAndUrl = [
    { selector: '[href="https://www.bbc.co.uk/usingthebbc/terms"]', url: 'https://www.bbc.co.uk/usingthebbc/terms' },
    { selector: '[href="https://www.bbc.co.uk/aboutthebbc"]', url: 'https://www.bbc.co.uk/aboutthebbc' },
    { selector: '[href="https://www.bbc.co.uk/accessibility/"]', url: 'https://www.bbc.co.uk/accessibility/' },
    { selector: '[href="https://www.bbc.co.uk/editorialguidelines/guidance/feeds-and-links"]', url: 'https://www.bbc.co.uk/editorialguidelines/guidance/feeds-and-links' },
    { selector: '[href="https://www.bbc.co.uk/contact"]', url: 'https://www.bbc.co.uk/contact' },
    { selector: '[href="https://www.bbc.com/usingthebbc/privacy/"]', url: 'https://www.bbc.com/usingthebbc/privacy/' },
    { selector: '[href="https://www.bbc.com/usingthebbc/cookies/"]', url: 'https://www.bbc.com/usingthebbc/cookies/' },
    { selector: '[href="https://www.bbc.com/advertisingcontact"]', url: 'https://www.bbc.com/advertisingcontact' },
    { selector: '[href="https://www.bbc.com/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/"]', url: 'https://www.bbc.com/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/' },
    { selector: '[href="https://www.bbc.com/contact-bbc-com-help"]', url: 'https://www.bbc.com/contact-bbc-com-help' }

];


const cookies = {
    IFRAME: 'iframe[title="SP Consent Message"]',
    IFRAME_BODY: '0.contentDocument.body',
    IFRAME_AGREE_BUTTON: 'button[aria-label="I agree"]'
};

const url = {
    landingPage: 'https://www.bbc.com/',
    newsPage: 'https://www.bbc.com/news',
    sportPage: 'https://www.bbc.com/sport',
    businessPage: 'https://www.bbc.com/business',
    innovationPage: 'https://www.bbc.com/innovation',
    culturePage: 'https://www.bbc.com/culture',
    travelPage: 'https://www.bbc.com/travel',
    earthPage: 'https://www.bbc.com/future-planet',
    videoPage: 'https://www.bbc.com/video',
    livePage: 'https://www.bbc.com/live',
    articlePage: 'https://www.bbc.com/news/world-us-canada-68901032',
    contactPage: 'https://www.bbc.com/contact',
    accountSettingsPage: 'https://account.bbc.com/account/settings',
    weatherPage: 'https://www.bbc.com/weather',
    BBCCoUkWeb: 'https://www.bbc.co.uk',
    BBCShopPage: 'https://shop.bbc.com/',
    articleChosenToTest: 'https://www.bbc.com/news/world-us-canada-68901032',
    portugueseUrl: 'https://www.bbc.com/portuguese?src_origin=BBCS_BBC',
    turkishUrl: 'https://www.bbc.com/turkce?src_origin=BBCS_BBC',
    yorubaUrl: 'https://www.bbc.com/yoruba?src_origin=BBCS_BBC'
};

const textInPages = {
    audioPageVerificationText: 'Your world of Sounds',
    agePageVerificationText: 'Register with the BBC',
    signInPageVerificationText: 'Enter your email or username',
    articleTitlePiece: 'Harvey Weinstein',
};

const articlePage = {
    title: '[class="sc-82e6a0ec-0 fxXQuy"]',
    imgOfArthur: 'img[alt*="Arthur Aidala"]',
    videoPlayer: '[data-testid="custom-cta"]',
    shareButton: '[data-testid="socialShareTriggerButton"]',
    copyButton: '[data-testid="copyShareButton"]',
    facebookButton: '[data-testid="facebookShareButton"]',
    twitterButton: '[data-testid="twitterShareButton"]',
    emailButton: '[data-testid="emailShareButton"]',
    shareDropbox: '[data-testid="popoverStyled"]',
    copiedLink: '[aria-label="Link copied"]',
    suggestedArticlesConteiner: ':nth-child(1) > [data-testid="anchor-inner-wrapper"] > [data-testid="internal-link"] > .sc-76a64d5e-4',
    dateContainerOfSuggestedArticles: '[class="sc-df20d569-1 kGLWUB"]',
    pauseButton: '[data-testid="cta-play-icon"]',
    videoTime: 'smp-thumbnail-scrubbing',
    currentArticleReleaseDate: '[class="sc-274a798b-9 brPRx"]'
};

const searchQueries = {
    invalidInput: 'jsabgq',
    oneWordValid: 'fish',
    twoWordsValid1: 'dog owner',
    twoWordsValid2: 'sunny day',
    SQLInjectionSearchBar: "a'; DROP TABLE articles; --",
    vilnius: 'Vilnius',
    SQLInjectionCitySearch: `a'; DROP TABLE cities; --`,
    XSSInput: '<script>alert("XSS")</script>'

};

const signIn = {
    userEmail: 'expectumpatronum5@gmail.com',
    userPasw: 'hihihaha123',
    enterEmail: '[type="email"]',
    continueButton: '[type="submit"]',
    enterPasw: '[type="password"]',
    signInButton: '[type="submit"]'
};

const subscriptionRelatedConstants = {
    BBCEmailsForYou: '[href="https://www.bbc.co.uk/bbcnewsletter"]',
    signUpButton: '[class="ec-button__activity-confirm"]',
    successMessageBlock: '[class="blocks-follow-block__follow-success"]',
    successMessage: 'Thank you!',
    accountSettingsUrl: 'https://account.bbc.com/account/settings/overview',
    emailPreferencesButton: '[href="/account/settings/email-preferences"]',
    unsubscribeCheckbox: ':nth-child(6) > .gel-layout > .gel-1_12 > .form-element > .toggle > .toggle__label',
    yourAccountButton: '[icon="your-account"]',
    settingsButton: '[icon="settings"]',
    accountMenu: '[class="primary-nav__item-text"]',
    settingsOptionInMenu: '[href="/account/settings"]',
    homepageLogo: '[id="homepage-link"]',
    fakeSignIn: '[href="https://session.bbc.co.uk/session?ptrt=https%3A%2F%2Fwww.bbc.co.uk%2Fnewsletters%2Femail%2Fzbdmwty&userOrigin=newsletters"]',
    overviewButton: '[href="/account"]',
    displayNameEditButton: '[href="/account/settings/edit/display-name"]',
    displayNameInput: '[id="displayName-input"]',
    submitButton: '[type="submit"]',

};

const weatherPage = {
    citySearchBar: '[id="ls-c-search__input-label"]',
    searchResults: '[class="ls-c-locations-list-item"]',
    searchButton: '[title="Search for a location"]',

};

const videoPage = {
    progressBar: '[class="seek_bar_progress"]',
    videoPlayer: '[id="toucan-bbcMediaPlayer0"]',
    secondaryControls: 'smp-core-controls',
    pauseButton: '[title="Pause"]',
    videoStatus: 'svg.pause',
    muteButton: '[title="Mute"]',
    volumeBar: '[class="seek_bar_progress"]'

};

module.exports = {
    homePage,
    url,
    textInPages,
    articlePage,
    resolution,
    searchQueries,
    signIn,
    subscriptionRelatedConstants,
    weatherPage,
    videoPage,
    navButtonsLocatorAndUrl,
    cookies,
    navLinksInFooterLocatorAndUrl
};
