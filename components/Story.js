export default function Story(story) {
    console.log(story);
    return `<div class="story">
        <div>
            <span class="gray">${story.index || ""}</span>
            <span class="upvote">▲</span>
            <a href="${story.url}">${story.title}</a>
            <span>(${story.domain})</span>
        </div>
        <div>
            <div class="gray">
                ${story.points} points by ${story.user} ${story.time_ago}
                |
                <a href="#/item?id=${story.id}">
                    ${story.comments_count} comments
                </a>
                |
                <span class="favorite">
                    <a class="heart"><i class="fas fa-heart"></i></a>
                    Add to favorites
                </span>
            </div>
        </div>
    </div>`;
}