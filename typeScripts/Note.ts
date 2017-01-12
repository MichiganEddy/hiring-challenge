class Note{
  private id: string; //unique for all Notes. There's probably a way to specify that in TypeScript eh?
  private title: string;
  private referencing: string; //The unique id for another note (or implementation thereof)
  private topic: string; //To be initialized or inherited depending on the type of note it is. 
  private keywords: string[];
  private content: string; // May need to break this out into a better structure. For now I'm thinking we just store the body of the html. 
  private writerID: string; // The unique id of the writer. 
  
  constructor(id: string, titl: string, refs: string, top: string, content: string, writerID: string, words?: string[]){
    this.id = id;
    this.title = titl;
    this.referencing = refs;
    this.topic = top; 
    this.content = content;
    this.writerID = writerID;
    this.keywords = words || new Array<string>();
  }
}