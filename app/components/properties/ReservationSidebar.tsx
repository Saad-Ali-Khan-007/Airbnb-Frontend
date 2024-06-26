export type Property = {
  id: string;
  guests: number;
  price_per_night: number;
};

interface ReservationSidebarProps {
  userId: string | null;
  property: Property;
}

const ReservationSidebar: React.FC<ReservationSidebarProps> = ({
  property,
  userId,
}) => {
  return (
    <aside className="mt-6 p-6 col-span-2 rounded-xl shadow-xl border border-gray-300">
      <div className="mb-5 text-2xl">${property.price_per_night} per night</div>
      <div className="mb-6 p-3 border border-gray-400 rounded-xl">
        <label className="mb-2 block font-bold text-xs">Guests</label>
        <select className="w-full -ml-1 text-xm">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnbDark rounded-xl ">
        Book
      </div>
      <div className="mb-4 flex justify-between items-center">
        <p>$200 * 4 nights</p>
        <p>$800</p>
      </div>
      <div className="mb-4 flex justify-between items-center">
        <p>Airbnb fee</p>
        <p>$40</p>
      </div>
      <hr />
      <div className="mt-4 flex justify-between items-center font-bold">
        <p>Total</p>
        <p>$840</p>
      </div>
    </aside>
  );
};

export default ReservationSidebar;
