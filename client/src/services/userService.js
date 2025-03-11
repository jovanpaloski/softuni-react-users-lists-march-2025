const baseUrl = 'http://localhost:3030/jsonstore/users';

export default {
    async getAll() {
        const response = await fetch(baseUrl);
        const result = await response.json();
        const users = Object.values(result);

        return users;
    },
    async create(userData) {
        const { country, city, street, streetNumber } = userData;
    
        // Ensure postData exists
        const postData = userData.postData || {}; 
    
        postData.address = { country, city, street, streetNumber };
        postData.createdAt = new Date().toISOString();
        postData.updatedAt = new Date().toISOString();
    
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...userData, postData }), // Include postData in userData
        });
    
        const result = await response.json();
    
        return result;
    }    
};