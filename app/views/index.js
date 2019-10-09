const { sampleObject } = require('../lib/exampleLibary');
console.log('Index js is loaded: ' + sampleObject.resultObject);

LionelClient.call('getSampleText',function (error, result) {
	console.log(error,result)
});

LionelClient.call('getSampleJSON').then(function (result) {
	console.log(result);
}).catch(function (error) {
	console.warn(error);
});


const sidebarFunction = function () {
	const sidebarSelector = 'aside.sidebar';
	const getParameters = function () {
		const parameters = location.search.split('?')[1] || '';
		let output = {};
		const gets = parameters.split('&');
		gets.forEach(function (keyValue) {
			if (keyValue) {
				const pair = keyValue.split('=');
				if (pair.length === 2) {
					output[pair[0]] = pair[1];
				}
			}
		});
		return output;
	};

	const refreshSideBar = function () {
		const sidebar = document.querySelector(sidebarSelector);
		if (sidebar) {
			const params = getParameters();
			if (params && params.menu){
				sidebar.querySelectorAll('.nav-link').forEach(function (node) {
					const name = node.innerHTML.replace(' ','').toLowerCase();
					console.log(name,params.menu);
					if (name === params.menu) {
						console.log('Active',node.parentElement);
						node.parentElement.classList.add('active');
						console.log('Active',node.parentElement);

					} else {
						node.parentElement.classList.remove('active');
					}
				})
			}
		}
	};
	const menu = [
		{
			innerHTML:'Getting Started',onclick:function () {
				LionelClient.navigate('/index?menu=gettingstarted');
				refreshSideBar();
			}
		},
		{
			innerHTML:'Install',onclick:function () {
				LionelClient.navigate('/index?menu=install');
				refreshSideBar();

			}
		},
		{
			innerHTML:' ',onclick:function () {}
		},
		{
			innerHTML:'Structure',onclick:function () {
				LionelClient.navigate('/index?menu=structure');
				refreshSideBar();
			}
		},
		{
			innerHTML:'Routes',onclick:function () {
				LionelClient.navigate('/index?menu=routes');
				refreshSideBar();
			}
		},
		{
			innerHTML:'LionelClient',onclick:function () {
				LionelClient.navigate('/index?menu=lionelclient');
				refreshSideBar();
			}
		},
		{
			innerHTML:'Methods',onclick:function () {
				LionelClient.navigate('/index?menu=methods');
				refreshSideBar();
			}
		},
		{
			innerHTML:'PHP',onclick:function () {
				LionelClient.navigate('/index?menu=php');
				refreshSideBar();
			}
		}
	];

	const sidebar = document.querySelector(sidebarSelector);
	if(sidebar){
		sidebar.classList.add('navbar-dark');
		sidebar.classList.add('bg-dark');
		sidebar.style.width = '160px';
		const navigation = LionelClient.Helper.createNavigation({
			vertical:true,
			items:menu,
			isActive:function (li, selected) {
				const name = selected.replace(' ','').toLowerCase();
				const params = getParameters();
				return params && params.menu === name;
			}
		}).node;
		sidebar.appendChild(navigation);
	}

};

sidebarFunction();
