import React, {useContext, useState, useEffect, useCallback} from 'react'

const URL = "https://openlibrary.org/search.json?title="
const AppContext = React.createContext();

const AppProvider = ({children})=>{
      const [searchTerm, setSearchTerm] = useState("the lost world");
      const [books, setBooks] = useState([]);
      const [loading, setLoading] = useState(true);
      const [resultTitle, setResultTitle] = useState("");

      const fetchBooks = useCallback(async () => {
            setLoading(true);
            try {
                const response = await fetch(`${URL}${searchTerm}`);
                const data = await response.json(); 
                const { docs } = data;
                console.log(docs);

                if(docs){
                  const newBooks = docs.slice(0,20).map((bookSingle)=>{
                        const {key, author_name, cover_i, edition_count, first_publish_year, title} = bookSingle

                        return {
                              id: key,
                              author: author_name,
                              cover_id : cover_i,
                              title: title,
                              first_publish_year: first_publish_year,
                        }
                  })
                  setBooks(newBooks);

                  if(newBooks.length > 1){
                        setResultTitle("your search results")
                  }else{
                        setResultTitle("no search result found!")
                  }
                }else{
                  setBooks([]);
                  setResultTitle("no search result found!")
                  setLoading(false)
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }, [searchTerm]);
        

      useEffect(()=>{
            fetchBooks();
      }, [searchTerm, fetchBooks])

      return (
            <AppContext.Provider value={{ setSearchTerm, books, loading,  resultTitle, setResultTitle, fetchBooks}}>
                  {children}
            </AppContext.Provider>
      )
}


export const useGlobalContext = ()=>{
      return useContext(AppContext);
}

export {AppContext, AppProvider}