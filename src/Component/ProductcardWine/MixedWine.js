import React from 'react'

export default function MixedWine() {
  const productMixedWine = [
    {
      id: 1,
      name: "CHAMPANGE PHÁP",
      image: "https://via.placeholder.com/150x220",
      price: "250.000₫",
    },
    {
      id: 2,
      name: "Rượu Black Tie Affair",
      image: "https://via.placeholder.com/150x220",
      price: "1.400.000₫",
    },
    {
      id: 3,
      name: "Rượu Cross Sauvignon",
      image: "https://via.placeholder.com/150x220",
      price: "1.500.000₫",
    },
    {
      id: 4,
      name: "Rượu Mugi Shochu",
      image: "https://via.placeholder.com/150x220",
      price: "580.000₫",
    },
    {
      id: 5,
      name: "Rượu Passion Sparkling",
      image: "https://via.placeholder.com/150x220",
      price: "150.000₫",
      oldPrice: "160.000₫",
      discount: "6%",
    },
    {
      id: 6,
      name: "Rượu Royal Salute 100 Cask",
      image: "https://via.placeholder.com/150x220",
      price: "1.130.000₫",
      oldPrice: "1.500.000₫",
      discount: "25%",
    },
    {
      id: 7,
      name: "Rượu Royal Salute 200",
      image: "https://via.placeholder.com/150x220",
      price: "1.200.000₫",
      oldPrice: "1.430.000₫",
      discount: "16%",
    },
    {
      id: 8,
      name: "Rượu Whisky Nhật Bản",
      image: "https://via.placeholder.com/150x220",
      price: "13.000.000₫",
    },
  ];


  return (
    <div>
    <div>
      <p>Trang chủ</p>
      <p> | </p>
      <p>Rượu pha</p>
    </div>
      <div className="max-w-7xl mx-auto py-10 px-4">
        <h2 className="text-xl font-semibold border-b pb-2 mb-6">RƯỢU PHA</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {productMixedWine.map((item) => (
            <div
              key={item.id}
              className="relative group bg-white shadow-sm hover:shadow-md transition rounded-xl overflow-hidden border border-gray-100"
            >
              {/* Giảm giá */}
              {item.discount && (
                <span className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded">
                  {item.discount}
                </span>
              )}

              {/* Hình ảnh */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              />

              {/* Thông tin */}
              <div className="text-center p-3">
                <h3 className="text-sm font-medium text-gray-700 min-h-[40px]">
                  {item.name}
                </h3>

                <div className="mt-2">
                  <p className="text-orange-600 font-semibold">{item.price}</p>
                  {item.oldPrice && (
                    <p className="text-gray-400 text-sm line-through">
                      {item.oldPrice}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
