/* import all html files as strings */
declare module "*.html" {
	var __html__: string;
	export default __html__;
}
