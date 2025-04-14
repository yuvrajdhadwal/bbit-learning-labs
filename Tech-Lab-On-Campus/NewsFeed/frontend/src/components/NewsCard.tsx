import Link from "next/link";
import { Article } from "@/utils/types";

interface NewsCardProps {
    article: Article;
}


function NewsCard({ article }: NewsCardProps) {
    // PART 2: Create a reusable news card to use with general stories

    // Similar to Part 1, create a component that displays:
    // 1. The article's image
    // 2. The article's title,
    // 3. A truncated version of the article's body

    const title = article.title;
    const image = article.image_url;
    const text = article.body;

    // This component should be reusable to populate all stories on the news page.

    // Once completing this part, you should be able to see a few test articles on
    // the right side of the screen.

    // Hint: Some classes in `globals.css` could help with styling

    return (
        <div className="news-card">
            <div className="news-info">
                {/* TODO: Remove the span below and implement a reusable NewsCard */}
                {/* <span className='instruction'>Part 2: Build Reusable News Card</span> */}

                <div className="story-title">{title}</div>
                <div className="news-img-div">
                    <div className="news-img">
                        <img src = {image}></img>
                    </div>

                </div>
                <div className="story-summary">{text}</div>
            </div>
        </div>
    );
}

export default NewsCard;
