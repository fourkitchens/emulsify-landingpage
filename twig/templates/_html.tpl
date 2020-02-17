<!doctype html>
<html class="no-js" lang="en">
	<head>
		<meta charset="utf-8">
		<meta content="ie=edge" http-equiv="x-ua-compatible">
		<title>
			{% block page_title %}Emulsify
			{% endblock %}
		</title>
		<meta name="Description" content="Create a dynamic design system for your entire organization. Created and maintained by the Web Chefs at Four Kitchens.">
		<meta
		content="width=device-width, initial-scale=1" name="viewport">
		<!-- Meta information -->
		<meta content="Emulsify" property="og:title">
		<meta content="Create a dynamic design system for your entire organization. Created and maintained by the Web Chefs at Four Kitchens." property="og:description">
		<meta content="/img/sharing-image.jpg" property="og:image">
		<meta content="http://emulsify.info/" property="og:url">
		<meta content="summary_large_image" name="twitter:card"> {% block head %}{% endblock %}
		{% block stylesheets %}
			<link href="css/main.css" rel="stylesheet">
		{% endblock %}
	</head>

	<body>
		<div id="no-css-notice" class="no-css-notice">
			<p>Please use a modern browser to get the best experience.</p>
		</div>
		<div class="page-wrapper">
			{% block header %}
				{% include '../components/_header.tpl' %}
			{% endblock %}

			<main class="main-content">
				{% block mainContent %}
					{% block body %}{% endblock body %}
				{% endblock mainContent %}
			</main>

			{% block footer %}
				{% include '../components/_footer.tpl' %}
			{% endblock %}

		</div>


		{% block footer_scripts %}
			<script>
				if (!window.CSS) {
var x = document.getElementById("no-css-notice"); // Get the element with id="demo"
x.style.display = "block";
}
			</script>
			<script>
				(function (i, s, o, g, r, a, m) {
i['GoogleAnalyticsObject'] = r;
i[r] = i[r] || function () {
(i[r].q = i[r].q || []).push(arguments)
},
i[r].l = 1 * new Date();
a = s.createElement(o),
m = s.getElementsByTagName(o)[0];
a.async = 1;
a.src = g;
m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-559851-17', 'auto');
ga('send', 'pageview');
			</script>
		{% endblock footer_scripts %}
	</body>
</html>
