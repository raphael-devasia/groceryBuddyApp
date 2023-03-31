import SingleItem from './SingleItem'
const Items = ({ items, deleteItem, editItems }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <div key={item.id}>
            <SingleItem
              item={item}
              status={item.status}
              deleteItem={deleteItem}
              editItems={editItems}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Items