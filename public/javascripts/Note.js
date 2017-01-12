var Note = (function () {
    function Note(id, titl, refs, top, content, writerID, words) {
        this.id = id;
        this.title = titl;
        this.referencing = refs;
        this.topic = top;
        this.content = content;
        this.writerID = writerID;
        this.keywords = words || new Array();
    }
    return Note;
}());
