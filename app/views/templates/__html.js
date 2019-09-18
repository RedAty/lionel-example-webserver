LionelClient.getPublicJS('jquery;bootstrap')
	.then(()=>{
		console.log('Every javascript are loaded');
	})
	.catch(error=>{
	console.error(error);
});
