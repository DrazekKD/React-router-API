
const initState = {
	projects:[
		{id:'1', title:'title1', content:'content1'},
		{id:'2', title:'title2', content:'content2'},
		{id:'3', title:'title3', content:'content3'},
		{id:'4', title:'title4', content:'content4'}
	]
};

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT':
			console.log('CREATE_PROJECT', action.project);
			break;
		default:
			console.log('default');
	}
	return state
};

export default projectReducer