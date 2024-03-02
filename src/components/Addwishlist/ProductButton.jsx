import React, { useState, useEffect } from "react";
import { UseAuth } from "@/app/context/AuthContext";

const ProductButton = ({ productId }) => {
  const { user, addToWishlist, removeFromWishlist } = UseAuth();
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    // Check if product is in user's wishlist
    if (user && user.wishlist && user.wishlist.includes(productId)) {
      setIsInWishlist(true);
    } else {
      setIsInWishlist(false);
    }
  }, [user, productId]);

  const handleAddToWishlist = () => {
    addToWishlist(productId);
  };

  const handleRemoveFromWishlist = () => {
    removeFromWishlist(productId);
  };

  return (
    <div>
      {isInWishlist ? (
        <button onClick={handleRemoveFromWishlist}>Remove from Wishlist</button>
      ) : (
        <button onClick={handleAddToWishlist}>Add to Wishlist</button>
      )}
    </div>
  );
};

export default ProductButton;
