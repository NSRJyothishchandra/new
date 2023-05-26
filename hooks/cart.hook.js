import { db, auth } from "@/config/firebase";
import { useState, useEffect } from "react";

const useCart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFromFirestore = async () => {
      if (auth.currentUser) {
        try {
          const docRef = db.collection("Users").doc(auth.currentUser.uid);
          docRef.onSnapshot((doc) => {
            if (doc.exists) {
              setData(doc.data().cart);
            } else {
              setData([]);
            }
            setLoading(false);
            setError(null);
          });
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchFromFirestore();
  }, []);

  return {
    data,
    loading,
    error,
  };
};

const useCartOnce = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFromFirestore = async () => {
      if (auth.currentUser) {
        try {
          const docRef = db.collection("Users").doc(auth.currentUser.uid);
          const doc = await docRef.get();
          if (doc.exists) {
            setData(doc.data().cart);
          } else {
            setData([]);
          }
          setLoading(false);
          setError(null);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchFromFirestore();
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export { useCart, useCartOnce };
