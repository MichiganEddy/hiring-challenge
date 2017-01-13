// The note class is the base class for any kind of annotation, be it posting an
// article, commenting on an article, or commenting on a comment. 
var Note = (function () {
    function Note(id) {
        this.id = id;
    }
    return Note;
}());
