import React from 'react'
import tech from '../images/tech.png'


const Privacy = () => {
  return (
    <div id="_next">
     <main className="flex flex-col items-center justify-center bg-slate-900">
     
      <div className="text-slate-400 max-w-3xl my-10">
        <div>
         <img className="rounded-t-lg bg-slate-700" src={tech} alt="" />
        </div>
        <div className="bg-slate-800 p-8">
            <h1 className="text-4xl font-bold text-slate-50 mb-5"> Private Policy  </h1>
            <p className="mb-5"> <em> Last Update November 8, 2022 </em> </p>
            <p className="mb-10 text-lg"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
            the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem Ipsum. </p>
            <h2 className="text-slate-200 font-bold text-2xl mb-3"> Information Collection and Use </h2>
            <p className="mb-10 text-lg"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                has been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
     </main>
    </div>
  )
}

export default Privacy