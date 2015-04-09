<%@ page import="grails.converters.JSON" %>
<%@ page scriptletCodec="none" %>
<!doctype html>
<html>

<head>
  <title>Grails Debug Console</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <link rel="icon" type="image/png" href="${resource(dir: 'src/img', file: 'grails.logo.png', plugin: 'console')}" />
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <g:render template="css" />
  
  <meta name="layout" content="${grailsApplication.config.grails.plugin.console.layout ?: 'console-plugin-layout'}"/>
</head>

<body style="visibility: hidden">

<div id="header"></div>
<div class="full-height"><div id="main-content"></div></div>
<g:render template="js" />

<script type="text/javascript" charset="utf-8">
  jQuery(function($){
    App.start(<%= json as JSON %>);
  });
</script>

</body>
</html>
