// The Article class refers to a top level posting of an internet article, or an original written article on some subject. Articles are the only written objects on the site that do not refer to an extension of Note. 

class Article extends Note{
  
  
  
  
  
  // Getters and Setters to complete implementation of Note-- needs to be abstracted out, but I've got bigger fish to fry right now...
    // id
  getid(): string {
    return this.id;
  }
  
    // title
  getTitle(): string {
    return this.title;
  }
  setTitle(newTitle: string): null {
    this.title = newTitle;
    return null;
  }
  
    // referencing
  getRef(): string {
    return this.referencing;
  }
  setRef(ref: string): null {
    this.referencing = ref;
    return null;
  }
  
    // topic
  getTopic(): string {
    return this.topic;
  }
  setTopic(topic: string): null {
    this.topic = topic;
    return null;
  }
  
    // keywords
  getKeyWords(): string[]{
    if(this.keywords){
      return this.keywords;
    }else{
      return new Array<string>();
    }
  }
  setKeyWords(words: string[]): null{
    this.keywords = words;
    return null;
  }
  addKeyWord(word: string): null{
    this.keywords.push(word);
    return null;
  }
  removeKeyWord(word: string): null{
    while(this.keywords.indexOf(word) !== -1)
    {
      this.keywords.splice(this.keywords.indexOf(word), 1);
    }
    return null;
  }
  removeKeyWords(words: string[]): null{
    for(let word of words){
      this.removeKeyWord(word);
    }
    return null;
  }
  
    // content
  getContent(): string{
    return this.content;
  }
  setContent(content: string): null{
    this.content = content;
    return null;
  }
  
    // writerID
  getWriterID(): string{
    return this.writerID;
  }
  setWriterID(id: string): null{
    this.writerID = id;
    return null;
  }
}
