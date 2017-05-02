## API GiantBomb

This repo contains the code for a proxy built to simplify the access to the API: http://api.giantbomb.com

### Instructions

To use this API you must use this URL 

```
https://floating-mountain-70543.herokuapp.com/
```

instead of the original one

```
http://api.giantbomb.com
```

For example:

Instead of: 

```
http://api.giantbomb.com/search/?api_key=<%API-KEY%>&format=json&query=mario&resources=game
```

You must use

```
https://floating-mountain-70543.herokuapp.com//search/?api_key=<%API-KEY%>&format=json&query=mario&resources=game
```

Being `<%API-KEY%>` your own API Key needed to access this API (you must register first in the website https://www.giantbomb.com/)