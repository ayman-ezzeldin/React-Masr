import new_collections from '../Assets/new_collections';
import Items from "../Items/Items";
import '../NewCollection/NewCollection.css';
function Men() {
  const menCollection = new_collections.filter(item => {
    return item.name.includes('Men') 
  } )
  return (
    <div className='newCollection'>
      <h1 className='text-3xl my-4 font-semibold ' >Men&apos;s Collection</h1>
      <div className='newCollection_items'>
      {
        menCollection.map((item) => {
          return (
            <Items key={item.id} name={item.name} newPrice={item.new_price} oldprice={item.old_price} image={item.image} />
          );
        })
      }
      </div>
    </div>
  )
}

export default Men