// The note class is the base class for any kind of annotation, be it posting an
// article, commenting on an article, or commenting on a comment. 
abstract class Note {
  protected id: string; //unique for all Notes. There's probably a way to specify that in TypeScript eh?
  protected title: string;
  protected referencing: string; //The unique id for another note implementation
  protected topic: string; //To be initialized or inherited depending on the type of note it is. 
  protected keywords: string[];
  protected content: string; // May need to break this out into a better structure. For now I'm thinking we just store the body of the html. 
  protected writerID: string; // The unique id of the writer. 
  
  constructor(id: string){
    this.id = id;
  }
  
  // Getters and Setters must be implemented for classes that extend Note 
  abstract getid(): string;
  
  abstract getTitle(): string;
  abstract setTitle(newTitle: string): null;
  
  abstract getRef(): string;
  abstract setRef(ref: string): null;
  
  abstract getTopic(): string;
  abstract setTopic(topic: string): null;
  
  abstract getKeyWords(): string[];
  abstract setKeyWords(words: string[]): null;
  abstract addKeyWord(word: string): null;
  abstract removeKeyWord(word: string): null;
  abstract removeKeyWords(words: string[]): null;
  
  abstract getContent(): string;
  abstract setContent(content: string): null;
  
  abstract getWriterID(): string;
  abstract setWriterID(id: string): null;
  
}