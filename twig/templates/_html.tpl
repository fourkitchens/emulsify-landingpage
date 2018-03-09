<!doctype html>
<html class="no-js">
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>{% block page_title %}Emulsify // Pattern Lab + Drupal 8{% endblock %}</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Meta information -->
  <meta property="og:title" content="Emulsify: Pattern Lab + Drupal">
  <meta property="og:description" content="Emulsify is a component-driven prototyping tool and Drupal theme using Pattern Lab automated via Gulp/NPM. Created and maintained by the Web Chefs at Four Kitchens.">
  <meta property="og:image" content="/img/sharing-image.jpg">
  <meta property="og:url" content="http://emulsify.info/">
  <meta name="twitter:card" content="summary_large_image">

  {% block head %}{% endblock %}
  {% block stylesheets %}
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <link rel="stylesheet" href="css/main.css">
  {% endblock %}
</head>

<body>
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

{% block modals %}{% endblock modals %}

{% block footer_scripts %}
  <script src="js/vendor.js"></script>
  <script src="js/main.js"></script>
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-559851-17', 'auto');
    ga('send', 'pageview');
  </script>
{% endblock footer_scripts %}
</body>
</html>
