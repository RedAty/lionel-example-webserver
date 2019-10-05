/**
 * This kind of method make sure that Header will load only one time instead of Refreshing all the time.
 * @type {Element}
 */
const header = document.querySelector('body > header.main');
if (!header) {
	const navigation = LionelClient.Helper.createNavHeader({
		title:'Lionel App',
		icon:'logoWhite.png',
		colorScheme:'dark',
		items:['Home','Docs','About'],
		default:'Home'
	}).node;
	const node = document.createElement('header');
	node.classList.add('main');
	node.appendChild(navigation);

	const lionelContent = document.querySelector('.LionelPageContent');
	if (lionelContent) {
		lionelContent.style.height = 'calc(100vh - 56px)';
		lionelContent.style.overflowY = 'auto';
		document.body.insertBefore(node,lionelContent);
	}
}
const sidebarMenuList = ['Docs','Getting Started','Getting%20Started','Install','Structure','Routes','LionelClient','Methods','PHP'];
if (sidebarMenuList.includes(location.pathname.substring(1).split('?')[0])) {
	LionelClient.Helper.createSidebar({
		items:['Getting Started','Install',{
			innerHTML:' ',onclick:function () {}
		},'Structure','Routes','LionelClient','Methods','PHP'],
		parent:'Docs',
		position:'left'
	});
}