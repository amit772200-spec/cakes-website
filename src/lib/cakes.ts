export interface Cake {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  category: string;
}

export const CAKES: Cake[] = [
  {
    id: "berry-vanilla",
    name: "פירות יער וקרם וניל",
    description: "שכבות עדינות של קרם וניל עם פירות יער טריים",
    longDescription:
      "עוגה מרהיבה המשלבת קרם וניל חלק ועשיר עם פירות יער טריים בעונה — פטל, אוכמניות ותות שדה. כל שכבה מעוצבת ביד, מקושטת בפרחי סוכר עדינים ועלי נענע טרייה. מושלמת לאירועים בוקריים, ברית מילה, וחגיגות בר/בת מצווה.",
    tags: ["וניל", "פירות יער", "קרם", "עונתי"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYCNKnlvfT-CPgQAzlUhzXKjmpoC8zNdG-57lbCf9XDf0Wlg8PwcBAFd6kQ7iDmU1FGkNggoeQSswfGjnjP03hpVJMrRCZHXcr00Y0HaDFLoSnNpv7JToIUzpAawceSfTpzBcakqSqz8gO4-npUf03l-Rc9XGgx3x0ytArNtRpP6yVV9MFoPuXbZvantqPuNuA9N9M8uvNn4bKywHrKxFQylWMrIdj4grSyUK44DuUJcbXT5e8Qr0o8coe72PrcVJJ02iwTYMnkljN",
    category: "קלאסי",
  },
  {
    id: "belgian-chocolate",
    name: "שוקולד בלגי וזהב",
    description: "גנאש שוקולד בלגי כהה עם קישוטי זהב",
    longDescription:
      "יצירת מופת שוקולדית עם גנאש שוקולד בלגי 70% קקאו, מצופה בטיפות זהב אכיל. העוגה עשירה, אינטנסיבית, ומרשימה בכל זווית. מתאימה במיוחד לאירועים רשמיים, חתונות אלגנטיות ומסיבות יוקרה.",
    tags: ["שוקולד", "זהב", "גנאש", "בלגי"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGkdktmif2krK3NQv3JD0JDWs68QpkgLOGqAOuZaQANiGALnWqoStSVXV4jkbufgTTawzNiAVDSwZWvNAfjcV5Ml4TlrT8vKjG2fffHq1PGZjxLJIecpEv117eWtmJ1D6VFnjaL_0Jyw7M9ZAD9Fuo_AmN0pnUb1zvjnL5THAeR78jkST4R-UA3geeIsJCP9vbj3b9xlXl9S6u4LMiic43rDXzBOK0_a28C32jELbtq3bPF1S1bnq_3kzzEwyNZrIYAVV_IowoJDpi",
    category: "יוקרה",
  },
  {
    id: "french-macaron",
    name: "מארז מקרון צרפתי",
    description: "מקרונים צרפתיים פסטליים בטעמים מגוונים",
    longDescription:
      "מארז מקרונים צרפתיים אמיתיים, אפויים לפי המתכון המקורי מפריז. צבעים פסטליים עדינים בטעמים של פסיפלורה, ורד, פיסטוק, שוקולד ולימון. כל מקרון מעוצב בדיוק מוחלט ועטוף להגשה מרשימה.",
    tags: ["מקרון", "צרפתי", "פסטלי", "מגוון"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDAKbzMIlC2PSaUEhLCnRwvdesNKTqSh16BVebApEOnQWJ6ERhACbtHxCjWN4at8QgyDyULh76ZS_aj5Zx6BQtkOkeKe9R_jZS4uzNjpZK3KPdjXOGBJ_vtreDTj1yGESFSfjZkZuSfsu67jWlx3z4glxoswlMgKavC9NwW143Tzt_ITkmS31cnqbuI4YAU1LjE2OIluGwppC3lHHWMYTwerIv2KveN8bQv5Xhe4PVbb6UqgDZQ5nkrIkTRtOoqik6qY4efDLYn8dGM",
    category: "קינוחים",
  },
  {
    id: "birthday-collection",
    name: "קולקציית יום הולדת",
    description: "עוגות חגיגיות צבעוניות לכל גיל",
    longDescription:
      "קולקציית יום ההולדת שלנו מיועדת להפוך כל חגיגה לזיכרון בלתי נשכח. עיצוב ווטרקולור ייחודי עם קישוטים אכילים עשויים ביד, בצבעים עזים ושמחים. ניתן להתאים לכל גיל ועם הקדשה אישית.",
    tags: ["יום הולדת", "צבעוני", "חגיגי", "אישי"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCbBvvRjFWxlEXFmZSLvNu_sSyOco2nOH4RR9LrMmK3VGKhmimcJBGWQCdC4goF8R_7Dbky65KtcFTZezPWxXqtL2QBRFiCh1ZnVuEkpFyBX_Xje7fe9PBGvwO3Y3BwgBvdpUr2eFHCmJCnHQWbQSP1u8EtComnPzevW2-BGPegtHsCTvyQESkhkuRWa8TA6ww8l38sUE0JcEew6cErC0z-UTZ1XAS3vV28w2IU9Zk0hjOAdpt8iSZAw-87sLAmOl6G58wPRSiVCDyR",
    category: "אירועים",
  },
  {
    id: "lemon-meringue",
    name: "לימון ומרנג",
    description: "קרם לימון חמצמץ עם מרנג אוורירי",
    longDescription:
      "עוגה המשלבת קרם לימון חמצמץ ורענן עם מרנג איטלקי מבריק, שרוף בעדינות לגוון זהוב. הניגוד בין החמיצות של הלימון לבין מתיקות המרנג יוצר חוויית טעם מושלמת. אידיאלית לאירועי קיץ ואחר הצהריים.",
    tags: ["לימון", "מרנג", "חמצמץ", "קיץ"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
    category: "קלאסי",
  },
  {
    id: "strawberry-cream",
    name: "תות שדה ושמנת",
    description: "שמנת טרייה עם תותי שדה עסיסיים",
    longDescription:
      "עוגה קלאסית ורומנטית עם שכבות ג'נואז אווירי, קרם שמנת טרייה ותותי שדה ישראלים עסיסיים. מעוצבת בסגנון rustic chic עם עיטורי שמנת חלקה ותותים שלמים על הפנים. מושלמת לאירועי אהבה ולזוגות.",
    tags: ["תות שדה", "שמנת", "רומנטי", "טרי"],
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
    category: "רומנטי",
  },
  {
    id: "pistachio-rose",
    name: "פיסטוק ורד",
    description: "קרם פיסטוק ייחודי עם עלי ורד מסוכרים",
    longDescription:
      "עוגה בוטיק בגוון ירוק-ורוד עדין, עם קרם פיסטוק איראני אמיתי ועלי ורד מסוכרים ידנית. טעם מורכב ועשיר שמשלב את האגוז הירוק עם ניחוח הפרח. עוגה שגורמת לכולם לעצור ולהתפעל.",
    tags: ["פיסטוק", "ורד", "בוטיק", "ייחודי"],
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&q=80",
    category: "בוטיק",
  },
  {
    id: "new-york-cheesecake",
    name: "ניו יורק צ׳יזקייק",
    description: "צ׳יזקייק קרמי ועשיר בסגנון ניו יורק",
    longDescription:
      "הצ'יזקייק הקלאסי בגרסה המושלמת — קרמי, עשיר ועבה, עם בסיס עוגיות חמאה פריך. מעוצב בפינישינג חלק ומבריק עם תוספות לבחירה: קרמל, פירות יער, או לוטוס קראנץ'. ללא גלוטן על בקשה.",
    tags: ["גבינה", "קרמי", "קלאסי", "ניו יורק"],
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&q=80",
    category: "קלאסי",
  },
  {
    id: "salted-caramel-waffle",
    name: "קרמל מלוח ווארפל",
    description: "שילוב מנצח של קרמל מלוח ווארפל בלגי",
    longDescription:
      "עוגה מתוחכמת המשלבת קרמל מלוח תוצרת בית עם שכבות ווארפל בלגי פריך. הניגוד בין המלוח למתוק, הפריך לקרמי — חוויה שלא משאירה אף אחד אדיש. מקושטת בטיפות קרמל וגבישי מלח ים גסים.",
    tags: ["קרמל", "מלוח-מתוק", "ווארפל", "בלגי"],
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    category: "יוקרה",
  },
  {
    id: "white-chocolate-ganache",
    name: "גנאש שוקולד לבן",
    description: "שוקולד לבן משובח עם גנאש וניל עדין",
    longDescription:
      "עוגה לבנה כשלג, מצופה בגנאש שוקולד לבן בלגי עם גרגירי וניל מדגסקר. מעוצבת בסגנון minimalist אלגנטי עם קישוטי מרנג קטנים ופרחים אכילים לבנים. מושלמת לחתונות ואירועים לבנים.",
    tags: ["שוקולד לבן", "וניל", "אלגנטי", "חתונה"],
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80",
    category: "חתונה",
  },
  {
    id: "opera-coffee",
    name: "אופרה קפה",
    description: "עוגת אופרה צרפתית קלאסית עם קפה ושוקולד",
    longDescription:
      "עוגת אופרה צרפתית אותנטית — שכבות של ביסקוויט ג'וקונד, קרם חמאה קפה ו-ganache שוקולד כהה. כל שכבה בעובי מדויק, מוגשת עם ציפוי שוקולד מבריק ומקושטת בטקסט 'Opéra' עשוי בזהב. אלגנטיות פריזאית בכל ביס.",
    tags: ["קפה", "שוקולד", "צרפתי", "אלגנטי"],
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80",
    category: "יוקרה",
  },
  {
    id: "mango-passion",
    name: "מנגו ופסיפלורה",
    description: "קרם מנגו טרופי עם ג'לי פסיפלורה חמוץ-מתוק",
    longDescription:
      "עוגה טרופית ומרעננת עם מוס מנגו אלפונסו קרמי, ג'לי פסיפלורה טרייה ובסיס קוקוס פריך. הצבעים הזהובים-כתומים יוצרים נוף ויזואלי עוצר נשימה. מושלמת לחגיגות קיץ ואירועים חיצוניים.",
    tags: ["מנגו", "פסיפלורה", "טרופי", "קיץ"],
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?w=800&q=80",
    category: "קיץ",
  },
  {
    id: "red-velvet",
    name: "רד ולווט",
    description: "עוגת רד ולווט קלאסית עם קרם גבינה עשיר",
    longDescription:
      "הרד ולווט המושלם — שכבות ספוג אדום עסיסי עם טעם קפה עדין, בין שכבות קרם גבינה חלק ומתקתק. מקושטת בפירורים אדומים ופרחים טריים. עוגה שנראית כמו פינת ויקטוריאן קסומה ומרגשת כל אחד.",
    tags: ["רד ולווט", "גבינה", "קלאסי", "רומנטי"],
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=800&q=80",
    category: "קלאסי",
  },
  {
    id: "lotus-caramel",
    name: "לוטוס קרמל",
    description: "עוגת לוטוס בחמאה עם קרם קרמל אמיתי",
    longDescription:
      "לאוהבי הלוטוס — עוגה עם שכבות קרם לוטוס עשיר, ביסקוויטי לוטוס שלמים ופיסות קרמל מלוח תוצרת בית. כל שכבה חגיגה בפני עצמה. מוגשת עם רוטב לוטוס חם בצד להפעיל סביבתה. ממכרת ברמות.",
    tags: ["לוטוס", "קרמל", "ממכר", "ישראלי"],
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&q=80",
    category: "ישראלי",
  },
  {
    id: "floral-wedding",
    name: "עוגת חתונה פרחונית",
    description: "עוגת חתונה רב-קומתית עם פרחים טריים",
    longDescription:
      "עוגת חתונה מרהיבה בת 3 קומות, מצופה בקרם חמאה איטלקי חלק בגוון ivory. מקושטת בפרחים טריים מהטבע — ורדים, אאוקליפטוס ופרחי בר עדינים. כל עוגה מעוצבת לפי ערכת הצבעים של החתונה ומותאמת אישית.",
    tags: ["חתונה", "פרחים", "יוקרה", "אישי"],
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800&q=80",
    category: "חתונה",
  },
];

export function getCakeById(id: string): Cake | undefined {
  return CAKES.find((cake) => cake.id === id);
}
