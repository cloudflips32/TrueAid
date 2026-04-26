export interface Country {
  id: string;
  name: string;
  cities: string[];
}

export const countries: Country[] = [
  { id: "1", name: "Somalia", cities: ["Mogadishu", "Hargeisa", "Kismayo", "Baidoa"] },
  { id: "2", name: "Yemen", cities: ["Sana'a", "Aden", "Taiz", "Al Hudaydah"] },
  { id: "3", name: "South Sudan", cities: ["Juba", "Malakal", "Wau", "Bor"] },
  { id: "4", name: "Syria", cities: ["Damascus", "Aleppo", "Homs", "Idlib"] },
  { id: "5", name: "Afghanistan", cities: ["Kabul", "Kandahar", "Herat", "Mazar-i-Sharif"] },
  { id: "6", name: "Haiti", cities: ["Port-au-Prince", "Cap-Haïtien", "Gonaïves", "Les Cayes"] },
  { id: "7", name: "Ethiopia", cities: ["Addis Ababa", "Dire Dawa", "Mekelle", "Bahir Dar"] },
  { id: "8", name: "Sudan", cities: ["Khartoum", "Omdurman", "Port Sudan", "Kassala"] },
  { id: "9", name: "Myanmar", cities: ["Yangon", "Mandalay", "Naypyidaw", "Bago"] },
  { id: "10", name: "Nigeria", cities: ["Lagos", "Kano", "Ibadan", "Abuja"] },
  { id: "11", name: "Kenya", cities: ["Nairobi", "Mombasa", "Kisumu", "Nakuru"] },
  { id: "12", name: "Bangladesh", cities: ["Dhaka", "Chittagong", "Khulna", "Sylhet"] },
  { id: "13", name: "Pakistan", cities: ["Karachi", "Lahore", "Islamabad", "Peshawar"] },
  { id: "14", name: "Venezuela", cities: ["Caracas", "Maracaibo", "Valencia", "Barquisimeto"] },
  { id: "15", name: "Zimbabwe", cities: ["Harare", "Bulawayo", "Mutare", "Gweru"] },
];
