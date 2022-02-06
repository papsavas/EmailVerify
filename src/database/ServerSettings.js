class ServerSettings {
    constructor() {
        this.domains = []
        this.channelID = ""
        this.messageID = ""
        this.verifiedRoleName = ""
        this.unverifiedRoleName = ""
        this.autoAddUnverified = 0
        this.autoVerify = 0
        this.language = "english"
    }

    get status() {
        return this.domains.length !== 0 && this.channelID !== "" && this.messageID !== "" && this.verifiedRoleName !== ""
    }
}

module.exports = ServerSettings