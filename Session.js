const SessionManager = (function () {
    function getUserKey() {
        return Session.getTemporaryActiveUserKey()
    }

    function getSessionData() {
        const userKey = getUserKey()
        const userProperties = PropertiesService.getUserProperties()
        const sessionData = userProperties.getProperty(userKey)
        return sessionData ? JSON.parse(sessionData) : {}
    }

    function setSessionData(data) {
        const userKey = getUserKey()
        const userProperties = PropertiesService.getUserProperties()
        userProperties.setProperty(userKey, JSON.stringify(data))
    }

    return {
        getSessionData,
        setSessionData,
    }
})()

function GET_SESSION_DATA() {
    return SessionManager.getSessionData()
}
