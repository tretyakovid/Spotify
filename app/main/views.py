from django.shortcuts import render

def index(request):

    context = {
        "title": "Home - Главная",
        "cards": [
            {
                "image": "img/premium-img1.jpg",
                "heading": "Listen everywhere",
                "subheading": "Spotify works on your computer, mobile, tablet and TV."
            },
                        {
                "image": "img/premium-img2.jpg",
                "heading": "Unlimited, ad-free music",
                "subheading": "No ads. No interruptions. Just music."
            },
                        {
                "image": "img/premium-img3.jpg",
                "heading": "Download music & listen offline",
                "subheading": "Keep playing, even when you don't have a connection."
            },
                        {
                "image": "img/premium-img4.jpg",
                "heading": "Premium sounds better",
                "subheading": "Get ready for incredible sound quality."
            }
        ]
    }
    return render(request, "main/index.html", context)

    