import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateUsia } from "../features/app/counterSlice";
import { getDocs, collection } from "firebase/firestore";
import database from "../firebaseConf";

const Card = () => {
  const [nama, setNama] = useState("");
  const [tanggaLahir, setTanggaLahir] = useState("");
  const [zodiac, setZodiac] = useState("");
  const [showZodiac, setShowZodiac] = useState("");
  const dispatch = useDispatch();
  const { usia } = useSelector((state) => state.app.usia);

  useEffect(() => {
    const data = async () => {
      const querySnapshot = await getDocs(collection(database, "ZODIAC"));
      if (zodiac) {
        querySnapshot.forEach((doc) => {
          if (doc.data().startDate === zodiac) {
            setShowZodiac(doc.data().Zodiac);
          }
        });
      }
    };
    data();
    // return () => {
    //   cleanup;
    // };
  }, [zodiac]);

  const fnButtonInput = async (e) => {
    e.preventDefault();
    const tahunIni = new Date().getFullYear();
    const usiaUser = new Date(tanggaLahir).getFullYear();
    dispatch(stateUsia({ usia: tahunIni - usiaUser }));
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const m = new Date(tanggaLahir);
    const month = monthNames[m.getMonth()];
    const d = new Date(tanggaLahir).getDate();
    const convertDate = d.toString();
    setZodiac(convertDate.concat(month));
  };
  return (
    <div className="row">
      <div className="col-lg-6 col-sm-12">
        <div className="card mt-5 shadow">
          <div className="card-body">
            <h5 className="card-title text-center">Test Soal</h5>
            <h6 className="card-subtitle mb-2 text-muted text-center">
              Masukkan Data Diri anda
            </h6>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Nama
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Masukan Nama anda"
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Tanggal Lahir
              </label>
              <input
                onChange={(e) => setTanggaLahir(e.target.value)}
                type="date"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Masukan Nama anda"
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={fnButtonInput}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      {usia && (
        <div className="col-lg-6 col-sm-12">
          <div className="card mt-5 shadow">
            <div className="card-body">
              <h5 className="card-title text-center">Test Hasil</h5>
              <ul></ul>
              <ul className="list-group">
                <li className="list-group">Nama Saya adalah: {nama}</li>
                <li className="list-group">
                  Usia Saya Saat adalah: {usia} Tahun
                </li>
                <li className="list-group">Tanggal Lahir: {tanggaLahir}</li>
                <li className="list-group">
                  Bintang anda adalah: {showZodiac}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
