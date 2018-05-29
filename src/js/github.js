class Github {
    constructor(){
    this.client_id = '53dc5d4160547478a699';
    this.client_secret = 'aed908d49fbeb8360f7c4f2b4c3734bfdaf972c5';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}
        ?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}