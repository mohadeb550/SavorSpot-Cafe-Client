

export default function Blog() {

  return (

    <section className="max-w-[1300px] mx-auto px-4 my-6 flex flex-col gap-6 md:gap-7 bg-gray-50 py-8">
        <div className="flex items-center justify-between">
            <h2 className= " text-2xl md:text-3xl font-semibold font-play "> Our Blog Posts </h2>
            <span className="text-gray-500"> Home/Blog </span>
        </div>
        <div>
            <img src="https://i.ibb.co/MRkVzhD/One-Way-Data-Binding-vs-Two-Way-Data-Binding.png" />
        </div>
        
        <div className="flex flex-col gap-4">
            <h2 className="text-base md:text-[22px] font-semibold font-play"> What is One way data binding?</h2>
            <p> In React One-way data binding means that data flows in a single direction: from a parent component to its children. This flow ensures that changes in the parent can affect its children, but not the other way around. Children components receive data from parents (via props), but they can't directly change that data. If a child needs to change something, it communicates with the parent by using callback functions passed as props. This setup maintains a clear and predictable flow of data, making the application easier to manage and less prone to bugs caused by conflicting data changes.</p>
            <div className="flex items-center justify-between">
            <button type="submit" className= "p-1 md:p-2 outline-none border font-play border-gray-500 text-gray-500 px-10 hover:bg-gray-300/20"> Read More </button>
            <time> November, 7 2023</time>
            </div>
        </div>



        <div>
            <img src="https://i.ibb.co/q5NMnBB/1-w799-Gr-FDIx0-JRQEPQXSXA.jpg" />
        </div>
        
        <div className="flex flex-col gap-4">
            <h2 className="text-base md:text-[22px] font-semibold font-play"> What is NPM in node.js?</h2>
            <p> 
                NPM (Node Package Manager) is a tool used with Node.js to install, share, and manage packages or libraries of code. It's like an app store for Node.js, where developers can find and use various tools and pieces of code created by others in their own projects. NPM simplifies the process of integrating external code into your applications by allowing you to easily install and manage dependencies, making development faster and more efficient.</p>
            <div className="flex items-center justify-between">
            <button type="submit" className= "p-1 md:p-2 outline-none border font-play border-gray-500 text-gray-500 px-10 hover:bg-gray-300/20"> Read More </button>
            <time> November, 7 2023</time>
            </div>
        </div>


        <div>
            <img src="https://i.ibb.co/ZxwRp3T/Mongo-DB-vs-My-SQL-2x.png" />
        </div>
        
        <div className="flex flex-col gap-4">
            <h2 className="text-base md:text-[22px] font-semibold font-play">Different between Mongodb database vs mySQL database.</h2>
            <p> MongoDB is a NoSQL, document-based database storing data as flexible, JSON-like documents. It has no strict schema, allowing varied structures.

            MySQL is a relational database using tables with a fixed schema. It stores data in rows and columns, making it suitable for structured data.</p>
            <div className="flex items-center justify-between">
            <button type="submit" className= "p-1 md:p-2 outline-none border font-play border-gray-500 text-gray-500 px-10 hover:bg-gray-300/20"> Read More </button>
            <time> November, 7 2023</time>
            </div>
        </div>
    </section>
  )
}
