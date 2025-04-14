import Link from "next/link";
import { Article } from "@/utils/types";

interface NewsCardProps {
    article: Article;
}


function FeaturedNewsCard({ article }: NewsCardProps) {
    // PART 1: Display a Featured News article

    // Using the info about the article passed in as a prop, show:
    // 1. The featured article's title
    // 2. The featured article's image
    // 3. A portion of the selected article's body, truncated so that it fits nicely in the section

    // Once completing this part, you should be able to see the Featured News Article at the top of the page.

    // Hint: Some classes included in `globals.css` may help with styling.

    const title = article.title;
    const image = article.image_url;
    const text = article.body;

    return (
        <>
            {/* <span className='instruction'>Part 1: Show Featured News</span> */}

            <div className="featured-news-card">
                {/* TODO: Remove the span above and implement "FeaturedNewsCard" */}

                <div className="featured-story-title">{title}</div>
                <div className="featured-news-img-div">
                    <div className="featured-news-img">
                        <img src = {image}></img>
                    </div>

                </div>
                <div className="featured-story-summary">{text}</div>
            </div>
        </>
    );
}

export default FeaturedNewsCard;
