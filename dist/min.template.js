module.exports=function(settings) {
var __t, __p = '';
__p += '!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://' +
((__t = ( settings.host )) == null ? '' : __t) +
'' +
((__t = ( settings.ajsPath )) == null ? '' : __t) +
'";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="' +
((__t = ( settings.apiKey )) == null ? '' : __t) +
'";analytics.SNIPPET_VERSION="4.14.0";\n' +
((__t = ( settings.load )) == null ? '' : __t) +
'\n' +
((__t = ( settings.page )) == null ? '' : __t) +
'\n}}();';
return __p
}