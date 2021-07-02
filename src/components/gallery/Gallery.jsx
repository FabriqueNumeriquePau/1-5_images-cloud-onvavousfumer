import { useEffect, useState } from "react";
import GalleryItem from "./GalleryItem";
const list = [
  {
    name: "First Image",
    size: "2,2 MB",
    uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e1218ecf-eac5-4141-aaac-7ee0c79fccce/d9u4ntf-bc6fd157-793d-4750-95d4-a7d439d75e48.png/v1/fill/w_1600,h_1222,strp/as_dawn_rises_by_emerald_depths_d9u4ntf-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIyMiIsInBhdGgiOiJcL2ZcL2UxMjE4ZWNmLWVhYzUtNDE0MS1hYWFjLTdlZTBjNzlmY2NjZVwvZDl1NG50Zi1iYzZmZDE1Ny03OTNkLTQ3NTAtOTVkNC1hN2Q0MzlkNzVlNDgucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.EyVb0AKZOKzFE_a1KHbiF1vAjuf2Ew2YBtdwkeSB-dg",
  },
  {
    name: "First Image",
    size: "1,1 MB",
    uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e1218ecf-eac5-4141-aaac-7ee0c79fccce/d8cp2iq-9033d1e8-e46d-43c4-b1d8-8e3098d9eba9.png/v1/fill/w_800,h_656,q_80,strp/clash_by_emerald_depths_d8cp2iq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjU2IiwicGF0aCI6IlwvZlwvZTEyMThlY2YtZWFjNS00MTQxLWFhYWMtN2VlMGM3OWZjY2NlXC9kOGNwMmlxLTkwMzNkMWU4LWU0NmQtNDNjNC1iMWQ4LThlMzA5OGQ5ZWJhOS5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.0ZiOASgK5zq3qfSxXBC-Ku0b7w--SLT_vGIKcDkvW6g",
  },
  {
    name: "First Image",
    size: "3,5 MB",
    uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/803209c7-01f1-4615-9100-2a1d722e859f/d77nhly-da1d5ec7-69e8-42b1-9646-7a2700c2a78a.png/v1/fill/w_1166,h_685,q_70,strp/commision__blue_super_giant__by_archange1michael_d77nhly-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvODAzMjA5YzctMDFmMS00NjE1LTkxMDAtMmExZDcyMmU4NTlmXC9kNzduaGx5LWRhMWQ1ZWM3LTY5ZTgtNDJiMS05NjQ2LTdhMjcwMGMyYTc4YS5wbmciLCJ3aWR0aCI6Ijw9MTIyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.lBJX2tuqbJpHVapxoMlQTiWYv5Qoyidw4JfX0pyydR8",
  },
];

export default function Gallery() {
  const [loader, setLoader] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(list);
    setLoader(false);
  }, []);

  if (items.length >= 1) {
    return (
      <>
        {loader ? (
          <h1>Loading data !</h1>
        ) : (
          <section className="box">
            <div className="box-header">
              <div>
                <p>Galerie d'images</p>
              </div>
              <div>
                <button className="delete-button">
                  <img
                    src="https://image.flaticon.com/icons/png/512/3143/3143570.png"
                    alt="bin"
                    className="button-img"
                  />
                </button>
              </div>
            </div>
            <div className="box-content">
              <>
                {items.map((item) => (
                  <GalleryItem data={item} />
                ))}
              </>
            </div>
          </section>
        )}
      </>
    );
  } else {
    return "";
  }
}
