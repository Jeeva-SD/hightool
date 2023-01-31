export const isValidYoutubeUrl = url => {
    var regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if (url.match(regExp)) {
        return true;
    }
    return false;
};

export const getYoutubeVideoId = url => {
    let video_id = url.split('v=')[1];
    const ampersandPosition = video_id.indexOf('&');
    if (ampersandPosition != -1) {
        video_id = video_id.substring(0, ampersandPosition);
    }

    return video_id;
};