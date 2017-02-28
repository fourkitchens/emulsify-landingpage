<!doctype html>
<html class="no-js">
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>{% block page_title %}Emulsify // Pattern Lab + Drupal 8{% endblock %}</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
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
{% endblock footer_scripts %}
</body>
</html>
