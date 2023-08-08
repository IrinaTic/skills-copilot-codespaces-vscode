function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['JS', 'React', 'Node'],
        address: {
            city: 'New York',
            country: 'USA'
        },
        getSkills: function () {
            return this.skills;
        }
    };
    console.log(member.getSkills());
}