"""Module for retrieving newsfeed information."""

from dataclasses import dataclass
from datetime import datetime
from app.utils.redis import REDIS_CLIENT


@dataclass
class Article:
    """Dataclass for an article."""

    author: str
    title: str
    body: str
    publish_date: datetime
    image_url: str
    url: str


def get_all_news() -> list[Article]:
    """Get all news articles from the datastore."""
    # 1. Use Redis client to fetch all articles
    # 2. Format the data into articles
    # 3. Return a list of the articles formatted 
    out = []
    for article in REDIS_CLIENT.get_entry("all_articles"):
        out.append(__create_article_object(article['author'], article['title'], article['text'],
                                           article['published'], article['thread']['main_image'], 
                                           article['url']))
    return out


def get_featured_news() -> Article | None:
    """Get the featured news article from the datastore."""
    # 1. Get all the articles
    # 2. Return most recently published article
    articles = get_all_news()
    sorted_articles = sorted(articles, key=lambda article: article.publish_date)
    return sorted_articles[0]

def __create_article_object(author: str, title: str, body: str, publish_date: datetime,
                            image_url: str, url: str) -> None:
    return Article(author, title, body, publish_date, image_url, url)