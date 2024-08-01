import new_collections from '../Assets/new_collections';
import Items from "../Items/Items";
import '../NewCollection/NewCollection.css';
function Kids() {
  const kidsCollection = new_collections.filter(item => {
    return item.name.toLowerCase().includes('boys') 
  } )
  return (
    <div className='newCollection'>
      <h1 className='text-3xl my-4 font-semibold ' >Kid&apos;s Collection</h1>
      <div className='newCollection_items'>
      {
        kidsCollection.map((item) => {
          return (
            <Items key={item.id} name={item.name} newPrice={item.new_price} oldprice={item.old_price} image={item.image} />
          );
        })
      }
      </div>
    </div>
  )
}

export default Kids