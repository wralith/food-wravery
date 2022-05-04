import { MdShoppingCart } from "react-icons/md";

export default function NavbarCart() {
  return (
    <>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <MdShoppingCart className="text-2xl" />
            <span className="badge badge-sm indicator-item">1</span>
          </div>
        </label>
        <div
          tabIndex={0}
          className="card card-compact dropdown-content w-52 bg-base-100  mt-6 shadow" 
        >
          <div className="card-body  z-50">
            <span className="font-bold text-lg">X Foods in Cart</span>
            <span className="text-info">Total Price: 123$</span>
            <div className="card-actions">
              <button className="btn btn-primary btn-block">View Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
