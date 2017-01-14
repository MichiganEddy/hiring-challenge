// The Article class refers to a top level posting of an internet article, or an original written article on some subject. Articles are the only written objects on the site that do not refer to an extension of Note. 
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Article = (function (_super) {
    __extends(Article, _super);
    function Article() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Getters and Setters to complete implementation of Note-- needs to be abstracted out, but I've got bigger fish to fry right now...
    // id
    Article.prototype.getid = function () {
        return this.id;
    };
    // title
    Article.prototype.getTitle = function () {
        return this.title;
    };
    Article.prototype.setTitle = function (newTitle) {
        this.title = newTitle;
        return null;
    };
    // referencing
    Article.prototype.getRef = function () {
        return this.referencing;
    };
    Article.prototype.setRef = function (ref) {
        this.referencing = ref;
        return null;
    };
    // topic
    Article.prototype.getTopic = function () {
        return this.topic;
    };
    Article.prototype.setTopic = function (topic) {
        this.topic = topic;
        return null;
    };
    // keywords
    Article.prototype.getKeyWords = function () {
        if (this.keywords) {
            return this.keywords;
        }
        else {
            return new Array();
        }
    };
    Article.prototype.setKeyWords = function (words) {
        this.keywords = words;
        return null;
    };
    Article.prototype.addKeyWord = function (word) {
        this.keywords.push(word);
        return null;
    };
    Article.prototype.removeKeyWord = function (word) {
        while (this.keywords.indexOf(word) !== -1) {
            this.keywords.splice(this.keywords.indexOf(word), 1);
        }
        return null;
    };
    Article.prototype.removeKeyWords = function (words) {
        for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
            var word = words_1[_i];
            this.removeKeyWord(word);
        }
        return null;
    };
    // content
    Article.prototype.getContent = function () {
        return this.content;
    };
    Article.prototype.setContent = function (content) {
        this.content = content;
        return null;
    };
    // writerID
    Article.prototype.getWriterID = function () {
        return this.writerID;
    };
    Article.prototype.setWriterID = function (id) {
        this.writerID = id;
        return null;
    };
    return Article;
}(Note));
//# sourceMappingURL=Article.js.map