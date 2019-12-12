# BlogPosts
/// this is BLOGS app, u will have the ability to show, create, remove and edit blogs.
/// the technology used here is all about hooks, no componentWillMMount,DidMount,WillUpdate,State, instead i use these hooks (
    state => useState, DidMount => useEffect, for creating Context => useContext)
/// main idea is creating a provider to hook the app, the provider is the main responsible for passing function to each child page,
    data ( which is this case is the list of blogs).
/// this is an updated version, the old one was creating the blogs in the realtime only, which means when you close the app and re-open it
    again, you will 0 blogs, Now its connected to local server using library called (jsonServer + ngrok), so your data will be saved and
    it will be found even after your restart, so you wont be able to test it unless you setup the localServer.
