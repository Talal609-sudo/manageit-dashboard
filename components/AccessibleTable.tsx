export default function AccessibleTable({ caption, headers, rows }:{ caption:string; headers:string[]; rows:(string|number|JSX.Element)[][] }){
  return (
    <div className="card p-4 overflow-x-auto">
      <table className="table" aria-describedby="caption">
        <caption id="caption" className="sr-only">{caption}</caption>
        <thead>
          <tr>
            {headers.map(h => <th key={h} scope="col">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((r,i) => (
            <tr key={i} className={i%2===0 ? 'bg-black/5 dark:bg-white/5' : ''}>
              {r.map((c,j)=><td key={j}>{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
