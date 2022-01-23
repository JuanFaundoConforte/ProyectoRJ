export const productos = [
  {
    id: 1,
    name: "Skis",
    price: 28000,
    description: "Skis Carving marca K2",
    stock: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTv6mj_hd-Cmb_azOptn-n_WWg44FBuOG_RjhfVnRYCfF4sIC9E0WL9IP9VccwD6PHa9I&usqp=CAU",
  },
  {
    id: 2,
    name: "Botas Ski",
    price: 13000,
    description: "Botas de ski Salomon Flexibles",
    stock: 10,
    img: "https://media.istockphoto.com/photos/ski-picture-id1175016177?k=20&m=1175016177&s=612x612&w=0&h=jStFs1Uiuo94BuCTQFC0bPpnV_f57zmyASwaHbmf-Dw=",
  },
  {
    id: 3,
    name: "Tabla Snowboard",
    price: 17500,
    description: "Tabla Snowboard marca Burton",
    stock: 13,
    img: "https://media.istockphoto.com/photos/snowboard-picture-id593318214?k=20&m=593318214&s=612x612&w=0&h=Xg0f3Cv1WzUbw2Q7ERG9PP-q-ruLQHII8p3LFhUQjFU=",
  },
];

export function getProductos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(productos), 2000);
  });
}
