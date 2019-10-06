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
		default:'Home',
		alignment:'right',
		background:'#3f75a2'
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

LionelClient.Helper.createSidebar({
	items:['Getting Started','Install',{
		innerHTML:' ',onclick:function () {}
	},'Structure','Routes','LionelClient','Methods','PHP'],
	parent:'Docs',
	position:'left'
});