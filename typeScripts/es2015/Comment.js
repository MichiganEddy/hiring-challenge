var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// A Comment class, (called 'Commen' because there is a conflict with the string "Comment" somewhere else in the code, and I'm not sure where.).
var Commen = (function (_super) {
    __extends(Commen, _super);
    function Commen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Getters and Setters for Note 
    // id
    Commen.prototype.getid = function () {
        return this.id;
    };
    // title
    Commen.prototype.getTitle = function () {
        return this.title;
    };
    Commen.prototype.setTitle = function (newTitle) {
        this.title = newTitle;
        return null;
    };
    // referencing
    Commen.prototype.getRef = function () {
        return this.referencing;
    };
    Commen.prototype.setRef = function (ref) {
        this.referencing = ref;
        return null;
    };
    // topic
    Commen.prototype.getTopic = function () {
        return this.topic;
    };
    Commen.prototype.setTopic = function (topic) {
        this.topic = topic;
        return null;
    };
    // keywords
    Commen.prototype.getKeyWords = function () {
        if (this.keywords) {
            return this.keywords;
        }
        else {
            return new Array();
        }
    };
    Commen.prototype.setKeyWords = function (words) {
        this.keywords = words;
        return null;
    };
    Commen.prototype.addKeyWord = function (word) {
        this.keywords.push(word);
        return null;
    };
    Commen.prototype.removeKeyWord = function (word) {
        while (this.keywords.indexOf(word) !== -1) {
            this.keywords.splice(this.keywords.indexOf(word), 1);
        }
        return null;
    };
    Commen.prototype.removeKeyWords = function (words) {
        for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
            var word = words_1[_i];
            this.removeKeyWord(word);
        }
        return null;
    };
    // content
    Commen.prototype.getContent = function () {
        return this.content;
    };
    Commen.prototype.setContent = function (content) {
        this.content = content;
        return null;
    };
    // writerID
    Commen.prototype.getWriterID = function () {
        return this.writerID;
    };
    Commen.prototype.setWriterID = function (id) {
        this.writerID = id;
        return null;
    };
    return Commen;
}(Note));
