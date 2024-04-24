namespace my.bookshop;

entity Books {
  key ID : UUID;
  title : String;
  stock : Integer;
  author : String;
  genre : String; 
  publicationYear : Integer; 
  price : Decimal; 
}

