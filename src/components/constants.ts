import type { LangCode } from "@/lib/i18n/translations";

export const LANGS: { code: LangCode; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "cn", label: "中" },
];

export const NAV_HREFS = ["/#certificates", "/#lounge", "/#vip", "/#programs"];

export const VACANCIES_HREF = "/vacancies";

export const SALON_PHOTOS = [
  [
    "/salons/soho/1-2.avif",
    "/salons/soho/2-2.avif",
    "/salons/soho/3-1.avif",
    "/salons/soho/4-1.avif",
    "/salons/soho/5-1.avif",
    "/salons/soho/6-1.avif",
  ],
  [
    "/salons/barbie/1.avif",
    "/salons/barbie/2-1-scaled.avif",
    "/salons/barbie/3.avif",
    "/salons/barbie/4-scaled.avif",
    "/salons/barbie/5-scaled.avif",
    "/salons/barbie/6.avif",
  ],
  [
    "/salons/imperium/whatsapp-image-2019-09-12-at-19.17.21.avif",
    "/salons/imperium/whatsapp-image-2019-09-12-at-19.17.22.avif",
    "/salons/imperium/whatsapp-image-2019-09-12-at-19.17.201.avif",
    "/salons/imperium/whatsapp-image-2019-09-12-at-19.17.202.avif",
    "/salons/imperium/whatsapp-image-2019-09-12-at-19.17.211.avif",
    "/salons/imperium/whatsapp-image-2019-09-12-at-19.17.212.avif",
    "/salons/imperium/whatsapp-image-2019-09-12-at-19.17.213.avif",
    "/salons/imperium/whatsapp-image-2019-09-12-at-19.17.221.avif",
  ],
  [
    "/salons/vanilia/1-3.avif",
    "/salons/vanilia/2-3.avif",
    "/salons/vanilia/3-2.avif",
    "/salons/vanilia/4-2.avif",
    "/salons/vanilia/5-2.avif",
    "/salons/vanilia/6-2.avif",
  ],
];

export const OFFER_PHOTOS = [
  { photo: "/vip/image_2025-11-20_17-22-24.avif", vip: false },
  { photo: "/vip/image_2025-11-20_17-22-25.avif", vip: true },
];

export const HERO_PHOTOS = [
  "/hero/magnific_6AXn595iJO.avif",
  "/hero/magnific_xSZ7mqtjfW.avif",
  "/hero/magnific_Eb7kDkAuuO.avif",
];

export const GIFT_PHOTOS = [
  "/lottery/lottery-img-1.webp",
  "/lottery/lottery-img-2.webp",
];

export const ADDON_PHOTOS = [
  "/additionally/3bd8d7e8-3b5a-4964-984a-e14f18ef73f4.avif",
  "/additionally/2.avif",
  "/additionally/1618313714_27-p-krasivo-finskaya-banya-v-finlyandii-foto-36.avif",
  "/additionally/scale_1200.avif",
];

export const ADDON_PRICES = ["3 000 ₽", "5 000 ₽", "5 500 ₽", "7 000 ₽"];

export type { LangCode };
