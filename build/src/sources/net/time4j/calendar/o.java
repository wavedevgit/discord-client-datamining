package net.time4j.calendar;

import java.io.Serializable;
import java.text.ParsePosition;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o implements Comparable, Serializable {
    private static final Set A;
    private static final long serialVersionUID = -4556668597489844917L;

    /* renamed from: x  reason: collision with root package name */
    private static final o[] f39260x;

    /* renamed from: y  reason: collision with root package name */
    private static final Map f39261y;

    /* renamed from: z  reason: collision with root package name */
    private static final Map f39262z;
    private final int number;

    /* renamed from: d  reason: collision with root package name */
    private static final String[] f39248d = {"jia", "yi", "bing", "ding", "wu", "ji", "geng", "xin", "ren", "gui"};

    /* renamed from: e  reason: collision with root package name */
    private static final String[] f39249e = {"jiǎ", "yǐ", "bǐng", "dīng", "wù", "jǐ", "gēng", "xīn", "rén", "guǐ"};

    /* renamed from: i  reason: collision with root package name */
    private static final String[] f39250i = {"甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"};

    /* renamed from: o  reason: collision with root package name */
    private static final String[] f39251o = {"갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"};

    /* renamed from: p  reason: collision with root package name */
    private static final String[] f39252p = {"giáp", "ất", "bính", "đinh", "mậu", "kỷ", "canh", "tân", "nhâm", "quý"};

    /* renamed from: q  reason: collision with root package name */
    private static final String[] f39253q = {"Цзя", "И", "Бин", "Дин", "У", "Цзи", "Гэн", "Синь", "Жэнь", "Гуй"};

    /* renamed from: r  reason: collision with root package name */
    private static final String[] f39254r = {"zi", "chou", "yin", "mao", "chen", "si", "wu", "wei", "shen", "you", "xu", "hai"};

    /* renamed from: s  reason: collision with root package name */
    private static final String[] f39255s = {"zǐ", "chǒu", "yín", "mǎo", "chén", "sì", "wǔ", "wèi", "shēn", "yǒu", "xū", "hài"};

    /* renamed from: t  reason: collision with root package name */
    private static final String[] f39256t = {"子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"};

    /* renamed from: u  reason: collision with root package name */
    private static final String[] f39257u = {"자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"};

    /* renamed from: v  reason: collision with root package name */
    private static final String[] f39258v = {"tí", "sửu", "dần", "mão", "thìn", "tị", "ngọ", "mùi", "thân", "dậu", "tuất", "hợi"};

    /* renamed from: w  reason: collision with root package name */
    private static final String[] f39259w = {"Цзы", "Чоу", "Инь", "Мао", "Чэнь", "Сы", "У", "Вэй", "Шэнь", "Ю", "Сюй", "Хай"};

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public enum a {
        ZI_1_RAT,
        CHOU_2_OX,
        YIN_3_TIGER,
        MAO_4_HARE,
        CHEN_5_DRAGON,
        SI_6_SNAKE,
        WU_7_HORSE,
        WEI_8_SHEEP,
        SHEN_9_MONKEY,
        YOU_10_FOWL,
        XU_11_DOG,
        HAI_12_PIG;

        public String a(Locale locale) {
            String language = locale.getLanguage();
            Map map = o.f39262z;
            if (language.isEmpty()) {
                language = "root";
            }
            String[] strArr = (String[]) map.get(language);
            if (strArr == null) {
                strArr = o.f39255s;
            }
            return strArr[ordinal()];
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public enum b {
        JIA_1_WOOD_YANG,
        YI_2_WOOD_YIN,
        BING_3_FIRE_YANG,
        DING_4_FIRE_YIN,
        WU_5_EARTH_YANG,
        JI_6_EARTH_YIN,
        GENG_7_METAL_YANG,
        XIN_8_METAL_YIN,
        REN_9_WATER_YANG,
        GUI_10_WATER_YIN;

        public String a(Locale locale) {
            String language = locale.getLanguage();
            Map map = o.f39261y;
            if (language.isEmpty()) {
                language = "root";
            }
            String[] strArr = (String[]) map.get(language);
            if (strArr == null) {
                strArr = o.f39249e;
            }
            return strArr[ordinal()];
        }
    }

    static {
        o[] oVarArr = new o[60];
        int i10 = 0;
        while (i10 < 60) {
            int i11 = i10 + 1;
            oVarArr[i10] = new o(i11);
            i10 = i11;
        }
        f39260x = oVarArr;
        HashMap hashMap = new HashMap();
        hashMap.put("root", f39248d);
        String[] strArr = f39250i;
        hashMap.put("zh", strArr);
        hashMap.put("ja", strArr);
        hashMap.put("ko", f39251o);
        hashMap.put("vi", f39252p);
        hashMap.put("ru", f39253q);
        f39261y = Collections.unmodifiableMap(hashMap);
        HashMap hashMap2 = new HashMap();
        hashMap2.put("root", f39254r);
        String[] strArr2 = f39256t;
        hashMap2.put("zh", strArr2);
        hashMap2.put("ja", strArr2);
        hashMap2.put("ko", f39257u);
        hashMap2.put("vi", f39258v);
        hashMap2.put("ru", f39259w);
        f39262z = Collections.unmodifiableMap(hashMap2);
        HashSet hashSet = new HashSet();
        hashSet.add("zh");
        hashSet.add("ja");
        hashSet.add("ko");
        A = Collections.unmodifiableSet(hashSet);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(int i10) {
        this.number = i10;
    }

    public static o k(int i10) {
        if (i10 >= 1 && i10 <= 60) {
            return f39260x[i10 - 1];
        }
        throw new IllegalArgumentException("Out of range: " + i10);
    }

    public static o m(b bVar, a aVar) {
        int ordinal = bVar.ordinal();
        o k10 = k(ordinal + 1 + pt.c.c((aVar.ordinal() - ordinal) * 25, 60));
        if (k10.j() == bVar && k10.h() == aVar) {
            return k10;
        }
        throw new IllegalArgumentException("Invalid combination of stem and branch.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Multi-variable type inference failed */
    public static o n(CharSequence charSequence, ParsePosition parsePosition, Locale locale, boolean z10) {
        b bVar;
        boolean z11;
        o oVar;
        int i10;
        boolean z12;
        a aVar;
        a aVar2;
        Locale locale2 = locale;
        int index = parsePosition.getIndex();
        int length = charSequence.length();
        boolean isEmpty = locale2.getLanguage().isEmpty();
        int i11 = index + 1;
        o oVar2 = null;
        if (i11 < length && index >= 0) {
            if (A.contains(locale2.getLanguage())) {
                b[] values = b.values();
                int length2 = values.length;
                int i12 = 0;
                while (true) {
                    if (i12 < length2) {
                        bVar = values[i12];
                        if (bVar.a(locale2).charAt(0) == charSequence.charAt(index)) {
                            break;
                        }
                        i12++;
                    } else {
                        bVar = null;
                        break;
                    }
                }
                if (bVar != null) {
                    a[] values2 = a.values();
                    int length3 = values2.length;
                    int i13 = 0;
                    while (true) {
                        if (i13 < length3) {
                            a aVar3 = values2[i13];
                            if (aVar3.a(locale2).charAt(0) == charSequence.charAt(i11)) {
                                index += 2;
                                aVar2 = aVar3;
                                break;
                            }
                            i13++;
                        } else {
                            aVar2 = null;
                            break;
                        }
                    }
                    z11 = isEmpty;
                    oVar = null;
                    aVar = aVar2;
                } else {
                    z11 = isEmpty;
                    aVar = 0;
                    oVar = null;
                }
            } else {
                while (true) {
                    if (i11 < length) {
                        if (charSequence.charAt(i11) == '-') {
                            break;
                        }
                        i11++;
                    } else {
                        i11 = -1;
                        break;
                    }
                }
                if (i11 == -1) {
                    parsePosition.setErrorIndex(index);
                    return null;
                }
                b[] values3 = b.values();
                int length4 = values3.length;
                bVar = null;
                int i14 = 0;
                while (i14 < length4) {
                    b bVar2 = values3[i14];
                    String a10 = bVar2.a(locale2);
                    o oVar3 = oVar2;
                    int i15 = index;
                    while (true) {
                        if (i15 < i11) {
                            int i16 = i15 - index;
                            char charAt = charSequence.charAt(i15);
                            if (isEmpty) {
                                charAt = o(charAt);
                            }
                            char c10 = charAt;
                            z12 = isEmpty;
                            if (i16 < a10.length() && a10.charAt(i16) == c10) {
                                if (i16 + 1 == a10.length()) {
                                    bVar = bVar2;
                                    break;
                                }
                                i15++;
                                isEmpty = z12;
                            }
                        } else {
                            z12 = isEmpty;
                            break;
                        }
                    }
                    i14++;
                    oVar2 = oVar3;
                    isEmpty = z12;
                }
                z11 = isEmpty;
                oVar = oVar2;
                if (bVar == null) {
                    if (z10 && !z11 && i11 + 1 < length) {
                        return n(charSequence, parsePosition, Locale.ROOT, true);
                    }
                    parsePosition.setErrorIndex(index);
                    return oVar;
                }
                a[] values4 = a.values();
                int length5 = values4.length;
                o oVar4 = oVar;
                int i17 = 0;
                while (i17 < length5) {
                    a aVar4 = values4[i17];
                    String a11 = aVar4.a(locale2);
                    int i18 = i11 + 1;
                    while (true) {
                        if (i18 < length) {
                            int i19 = i18 - i11;
                            int i20 = i19 - 1;
                            char charAt2 = charSequence.charAt(i18);
                            if (z11) {
                                charAt2 = o(charAt2);
                            }
                            char c11 = charAt2;
                            i10 = index;
                            if (i20 >= a11.length() || a11.charAt(i20) != c11) {
                                break;
                            } else if (i19 == a11.length()) {
                                oVar4 = aVar4;
                                index = i18 + 1;
                                break;
                            } else {
                                i18++;
                                index = i10;
                            }
                        } else {
                            i10 = index;
                            break;
                        }
                    }
                    index = i10;
                    i17++;
                    locale2 = locale;
                    oVar4 = oVar4;
                }
                aVar = oVar4;
            }
            if (bVar != null && aVar != 0) {
                parsePosition.setIndex(index);
                return m(bVar, aVar);
            } else if (z10 && !z11) {
                return n(charSequence, parsePosition, Locale.ROOT, true);
            } else {
                parsePosition.setErrorIndex(index);
                return oVar;
            }
        }
        parsePosition.setErrorIndex(index);
        return null;
    }

    private static char o(char c10) {
        if (c10 != 224) {
            if (c10 != 249) {
                if (c10 != 275) {
                    if (c10 != 299) {
                        if (c10 != 363) {
                            if (c10 != 462) {
                                if (c10 != 464) {
                                    if (c10 != 466) {
                                        if (c10 == 232 || c10 == 233) {
                                            return 'e';
                                        }
                                        if (c10 == 236 || c10 == 237) {
                                            return 'i';
                                        }
                                        return c10;
                                    }
                                    return 'o';
                                }
                                return 'i';
                            }
                            return 'a';
                        }
                        return 'u';
                    }
                    return 'i';
                }
                return 'e';
            }
            return 'u';
        }
        return 'a';
    }

    public boolean equals(Object obj) {
        if (!getClass().equals(obj.getClass()) || this.number != ((o) obj).number) {
            return false;
        }
        return true;
    }

    @Override // java.lang.Comparable
    /* renamed from: g */
    public int compareTo(o oVar) {
        if (getClass().equals(oVar.getClass())) {
            return this.number - ((o) o.class.cast(oVar)).number;
        }
        throw new ClassCastException("Cannot compare different types.");
    }

    public int getNumber() {
        return this.number;
    }

    public a h() {
        int i10 = 12;
        int i11 = this.number % 12;
        if (i11 != 0) {
            i10 = i11;
        }
        return a.values()[i10 - 1];
    }

    public int hashCode() {
        return this.number;
    }

    public String i(Locale locale) {
        String str;
        b j10 = j();
        a h10 = h();
        if (A.contains(locale.getLanguage())) {
            str = "";
        } else {
            str = "-";
        }
        return j10.a(locale) + str + h10.a(locale);
    }

    public b j() {
        int i10 = 10;
        int i11 = this.number % 10;
        if (i11 != 0) {
            i10 = i11;
        }
        return b.values()[i10 - 1];
    }

    Object readResolve() {
        return k(this.number);
    }

    public String toString() {
        return i(Locale.ROOT) + "(" + String.valueOf(this.number) + ")";
    }
}
