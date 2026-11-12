def analyze_photo():
    return "select vision agent"

def search_books():
    return "RAG Agent selected"

def check_weather():
    return "weather Agent selected"

def select_agent(user_messege):
    messege=user_messege.lower()

    if "photo" in messege:
        return analyze_photo()

    elif "book" in messege:
        return search_books()

    elif "weather" in messege:
        return check_weather()
    else:
        return "General Agent selected"