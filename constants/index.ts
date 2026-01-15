import qrGai from "../public/images/qr_gai_v2.png";
import qrTrai from "../public/images/qr_trai_v2.png";

export const IS_GROOM_SIDE = process.env.NEXT_PUBLIC_SIDE === "groom";

const BRIDE_SIDE = {
  wedding: {
    time: "11:30",
    startTime: "11:00",
    dayOfWeek: "Thứ Tư",
    date: "28",
    month: "1",
    year: "2026",
    lunarDate: "10 tháng 12 năm Ất Tỵ",
  },
  venue: {
    name: "Trung tâm Hội nghị Nhà hàng Tiệc cưới Cẩm Uyên",
    address: "Thôn Tân Đức - Tân Hà, Lâm Hà - Lâm Đồng",
    mapLink:
      "https://www.google.com/maps?q=P5XQ+WQ+Kh%C3%A1ch+S%E1%BA%A1n+C%E1%BA%A9m+Uy%C3%AAn,+T%C3%A2n+H%C3%A0,+L%C3%A2m+H%C3%A0,+L%C3%A2m+%C4%90%E1%BB%93ng&ftid=0x31715d65f7df43cd:0xf16088e585413f60&entry=gps&shh=CAE&lucs=,94297695,94275415,94284502,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAIIgnKlEsOTQyOTc2OTUsOTQyNzU0MTUsOTQyODQ1MDIsOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAlZO&skid=d179f3f5-3dda-4f44-a3d0-9155d044495a&g_st=ipc",
  },
  gift: {
    bankName: "VietinBank",
    accountNumber: "108872610008",
    accountName: "BUI HA THU",
    qrCode: qrGai,
  },
};

const GROOM_SIDE = {
  wedding: {
    time: "11:00",
    ceremonyTime: "09:00",
    dayOfWeek: "Thứ Năm",
    date: "29",
    month: "1",
    year: "2026",
    lunarDate: "11 tháng 12 năm Ất Tỵ",
  },
  venue: {
    name: "Tư Gia Nhà Trai",
    address: "Đắk Măng - Đam Rông 3 - Lâm Đồng",
    mapLink: "https://maps.app.goo.gl/e66s4DdKgudysdMk8?g_st=ipc",
  },
  gift: {
    bankName: "Agribank",
    accountNumber: "5493205409433",
    accountName: "NGUYEN HONG THACH",
    qrCode: qrTrai,
  },
};

const sideInfo = IS_GROOM_SIDE ? GROOM_SIDE : BRIDE_SIDE;

export const WEDDING_INFO = {
  groom: {
    shortName: "Hồng Thạch",
    fullName: "Nguyễn Hồng Thạch",
    name: "Thạch",
    parents: {
      father: "Nguyễn Hồng Cẩm",
      mother: "Nguyễn Thị Thủy",
    },
  },
  bride: {
    shortName: "Hà Thu",
    name: "Thu",
    fullName: "Bùi Hà Thu",
    parents: {
      father: "Bùi Ngọc Hân",
      mother: "Bùi Thị Bích Hương",
    },
  },
  ...sideInfo,
};

export const LINK_BACKGROUND =
  "https://w.ladicdn.com/s750x950/6322a62f2dad980013bb5005/icon-thiep-huyenpsd_0000_clear-white-plaster-texture-pattern-copy-14-20250703084107-2wpug.png";
