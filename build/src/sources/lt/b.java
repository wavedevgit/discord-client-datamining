package lt;

import java.text.DateFormat;
import java.text.DateFormatSymbols;
import java.text.Normalizer;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Collections;
import java.util.EnumMap;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Locale;
import java.util.Map;
import java.util.MissingResourceException;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b {

    /* renamed from: l  reason: collision with root package name */
    private static final Set f37654l;

    /* renamed from: m  reason: collision with root package name */
    private static final f f37655m;

    /* renamed from: n  reason: collision with root package name */
    private static final u f37656n;

    /* renamed from: o  reason: collision with root package name */
    private static final u f37657o;

    /* renamed from: p  reason: collision with root package name */
    private static final ConcurrentMap f37658p;

    /* renamed from: a  reason: collision with root package name */
    private final String f37659a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f37660b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f37661c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f37662d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f37663e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f37664f;

    /* renamed from: g  reason: collision with root package name */
    private final Map f37665g;

    /* renamed from: h  reason: collision with root package name */
    private final Map f37666h;

    /* renamed from: i  reason: collision with root package name */
    private final String f37667i;

    /* renamed from: j  reason: collision with root package name */
    private final Locale f37668j;

    /* renamed from: k  reason: collision with root package name */
    private final MissingResourceException f37669k;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f37670a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f37671b;

        static {
            int[] iArr = new int[e.values().length];
            f37671b = iArr;
            try {
                iArr[e.FULL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f37671b[e.LONG.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f37671b[e.MEDIUM.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f37671b[e.SHORT.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            int[] iArr2 = new int[v.values().length];
            f37670a = iArr2;
            try {
                iArr2[v.WIDE.ordinal()] = 1;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f37670a[v.ABBREVIATED.ordinal()] = 2;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f37670a[v.SHORT.ordinal()] = 3;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f37670a[v.NARROW.ordinal()] = 4;
            } catch (NoSuchFieldError unused8) {
            }
        }
    }

    /* renamed from: lt.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class C0495b implements u {
        private C0495b() {
        }

        @Override // lt.u
        public String[] b(String str, Locale locale, v vVar, m mVar) {
            return new String[]{"1", "2", "3", "4", "5", "6", "7"};
        }

        @Override // lt.u
        public boolean d(Locale locale) {
            return true;
        }

        @Override // lt.u
        public String[] e(String str, Locale locale, v vVar, m mVar) {
            if (vVar == v.NARROW) {
                return new String[]{"1", "2", "3", "4"};
            }
            return new String[]{"Q1", "Q2", "Q3", "Q4"};
        }

        @Override // lt.u
        public String[] f(String str, Locale locale, v vVar) {
            if (vVar == v.NARROW) {
                return new String[]{"B", "A"};
            }
            return new String[]{"BC", "AD"};
        }

        @Override // lt.u
        public String[] g(String str, Locale locale, v vVar, m mVar, boolean z10) {
            if (vVar == v.WIDE) {
                return new String[]{"01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13"};
            }
            return new String[]{"1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"};
        }

        @Override // lt.u
        public String[] i(String str, Locale locale, v vVar, m mVar) {
            if (vVar == v.NARROW) {
                return new String[]{"A", "P"};
            }
            return new String[]{"AM", "PM"};
        }

        @Override // lt.u
        public boolean k(String str) {
            return true;
        }

        public String toString() {
            return "FallbackProvider";
        }

        /* synthetic */ C0495b(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements f {

        /* renamed from: a  reason: collision with root package name */
        private final f f37672a;

        c(f fVar) {
            this.f37672a = fVar;
        }

        private static String b(DateFormat dateFormat) {
            if (dateFormat instanceof SimpleDateFormat) {
                return ((SimpleDateFormat) SimpleDateFormat.class.cast(dateFormat)).toPattern();
            }
            throw new IllegalStateException("Cannot retrieve format pattern: " + dateFormat);
        }

        private static int d(e eVar) {
            int i10 = a.f37671b[eVar.ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return 1;
                }
                if (i10 == 3) {
                    return 2;
                }
                if (i10 == 4) {
                    return 3;
                }
                throw new UnsupportedOperationException("Unknown: " + eVar);
            }
            return 0;
        }

        @Override // lt.f
        public String a(e eVar, Locale locale) {
            String a10;
            f fVar = this.f37672a;
            if (fVar == null) {
                a10 = b(DateFormat.getTimeInstance(d(eVar), locale));
            } else if (fVar instanceof nt.c) {
                a10 = ((nt.c) nt.c.class.cast(fVar)).j(eVar, locale, true);
            } else {
                a10 = fVar.a(eVar, locale);
            }
            return nt.d.a(a10);
        }

        @Override // lt.f
        public String c(e eVar, e eVar2, Locale locale) {
            f fVar = this.f37672a;
            if (fVar == null) {
                return b(DateFormat.getDateTimeInstance(d(eVar), d(eVar2), locale));
            }
            return this.f37672a.c(eVar, eVar2, locale).replace("{1}", this.f37672a.h(eVar, locale)).replace("{0}", fVar.a(eVar2, locale));
        }

        @Override // lt.f
        public String h(e eVar, Locale locale) {
            f fVar = this.f37672a;
            if (fVar == null) {
                return b(DateFormat.getDateInstance(d(eVar), locale));
            }
            return fVar.h(eVar, locale);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d implements u {
        private d() {
        }

        private static String[] a(String[] strArr, int i10) {
            String[] strArr2 = new String[i10];
            for (int i11 = 0; i11 < i10; i11++) {
                if (!strArr[i11].isEmpty()) {
                    strArr2[i11] = c(strArr[i11]);
                } else {
                    strArr2[i11] = String.valueOf(i11 + 1);
                }
            }
            return strArr2;
        }

        private static String c(String str) {
            char charAt = Normalizer.normalize(str, Normalizer.Form.NFD).charAt(0);
            if (charAt >= 'A' && charAt <= 'Z') {
                return String.valueOf(charAt);
            }
            if (charAt >= 'a' && charAt <= 'z') {
                return String.valueOf((char) (charAt - ' '));
            }
            if (charAt >= 1040 && charAt <= 1071) {
                return String.valueOf(charAt);
            }
            if (charAt >= 1072 && charAt <= 1103) {
                return String.valueOf((char) (charAt - ' '));
            }
            return str;
        }

        @Override // lt.u
        public String[] b(String str, Locale locale, v vVar, m mVar) {
            String[] weekdays;
            DateFormatSymbols dateFormatSymbols = DateFormatSymbols.getInstance(locale);
            int i10 = a.f37670a[vVar.ordinal()];
            if (i10 != 1) {
                if (i10 != 2 && i10 != 3) {
                    if (i10 == 4) {
                        weekdays = a(b("", locale, v.SHORT, mVar), 7);
                    } else {
                        throw new UnsupportedOperationException("Unknown text width: " + vVar);
                    }
                } else {
                    weekdays = dateFormatSymbols.getShortWeekdays();
                }
            } else {
                weekdays = dateFormatSymbols.getWeekdays();
            }
            if (weekdays.length > 7) {
                String str2 = weekdays[1];
                String[] strArr = new String[7];
                System.arraycopy(weekdays, 2, strArr, 0, 6);
                strArr[6] = str2;
                return strArr;
            }
            return weekdays;
        }

        @Override // lt.u
        public boolean d(Locale locale) {
            String language = locale.getLanguage();
            for (Locale locale2 : DateFormatSymbols.getAvailableLocales()) {
                if (locale2.getLanguage().equals(language)) {
                    return true;
                }
            }
            return false;
        }

        @Override // lt.u
        public String[] e(String str, Locale locale, v vVar, m mVar) {
            return new String[]{"Q1", "Q2", "Q3", "Q4"};
        }

        @Override // lt.u
        public String[] f(String str, Locale locale, v vVar) {
            DateFormatSymbols dateFormatSymbols = DateFormatSymbols.getInstance(locale);
            if (vVar == v.NARROW) {
                String[] eras = dateFormatSymbols.getEras();
                String[] strArr = new String[eras.length];
                int length = eras.length;
                for (int i10 = 0; i10 < length; i10++) {
                    if (!eras[i10].isEmpty()) {
                        strArr[i10] = c(eras[i10]);
                    } else if (i10 == 0 && eras.length == 2) {
                        strArr[i10] = "B";
                    } else if (i10 == 1 && eras.length == 2) {
                        strArr[i10] = "A";
                    } else {
                        strArr[i10] = String.valueOf(i10);
                    }
                }
                return strArr;
            }
            return dateFormatSymbols.getEras();
        }

        @Override // lt.u
        public String[] g(String str, Locale locale, v vVar, m mVar, boolean z10) {
            DateFormatSymbols dateFormatSymbols = DateFormatSymbols.getInstance(locale);
            int i10 = a.f37670a[vVar.ordinal()];
            if (i10 != 1) {
                if (i10 != 2 && i10 != 3) {
                    if (i10 == 4) {
                        return a(dateFormatSymbols.getShortMonths(), 12);
                    }
                    throw new UnsupportedOperationException(vVar.name());
                }
                return dateFormatSymbols.getShortMonths();
            }
            return dateFormatSymbols.getMonths();
        }

        @Override // lt.u
        public String[] i(String str, Locale locale, v vVar, m mVar) {
            if (vVar == v.NARROW) {
                return new String[]{"A", "P"};
            }
            return DateFormatSymbols.getInstance(locale).getAmPmStrings();
        }

        @Override // lt.u
        public boolean k(String str) {
            return "iso8601".equals(str);
        }

        public String toString() {
            return "JDKTextProvider";
        }

        /* synthetic */ d(a aVar) {
            this();
        }
    }

    static {
        f cVar;
        HashSet hashSet = new HashSet();
        hashSet.add("ar");
        hashSet.add("dv");
        hashSet.add("fa");
        hashSet.add("ha");
        hashSet.add("he");
        hashSet.add("iw");
        hashSet.add("ji");
        hashSet.add("ps");
        hashSet.add("sd");
        hashSet.add("ug");
        hashSet.add("ur");
        hashSet.add("yi");
        f37654l = Collections.unmodifiableSet(hashSet);
        Iterator it = ht.d.c().g(f.class).iterator();
        if (it.hasNext()) {
            cVar = (f) it.next();
        } else {
            cVar = new qt.c();
        }
        f37655m = new c(cVar);
        f37656n = new d(null);
        f37657o = new C0495b(null);
        f37658p = new ConcurrentHashMap();
    }

    private b(String str, Locale locale, u uVar) {
        v[] values;
        this.f37659a = uVar.toString();
        int i10 = 0;
        Map unmodifiableMap = Collections.unmodifiableMap(i(str, locale, uVar, false));
        this.f37660b = unmodifiableMap;
        Map i11 = i(str, locale, uVar, true);
        if (i11 == null) {
            this.f37661c = unmodifiableMap;
        } else {
            this.f37661c = Collections.unmodifiableMap(i11);
        }
        EnumMap enumMap = new EnumMap(v.class);
        v[] values2 = v.values();
        int length = values2.length;
        int i12 = 0;
        while (i12 < length) {
            v vVar = values2[i12];
            EnumMap enumMap2 = new EnumMap(m.class);
            m[] values3 = m.values();
            int length2 = values3.length;
            int i13 = i10;
            while (i13 < length2) {
                m mVar = values3[i13];
                enumMap2.put((EnumMap) mVar, (m) new s(uVar.e(str, locale, vVar, mVar)));
                i13++;
                values2 = values2;
            }
            enumMap.put((EnumMap) vVar, (v) enumMap2);
            i12++;
            i10 = 0;
        }
        this.f37662d = Collections.unmodifiableMap(enumMap);
        EnumMap enumMap3 = new EnumMap(v.class);
        v[] values4 = v.values();
        int length3 = values4.length;
        for (int i14 = 0; i14 < length3; i14++) {
            v vVar2 = values4[i14];
            EnumMap enumMap4 = new EnumMap(m.class);
            m[] values5 = m.values();
            int length4 = values5.length;
            int i15 = 0;
            while (i15 < length4) {
                m mVar2 = values5[i15];
                enumMap4.put((EnumMap) mVar2, (m) new s(uVar.b(str, locale, vVar2, mVar2)));
                i15++;
                values4 = values4;
                length3 = length3;
            }
            enumMap3.put((EnumMap) vVar2, (v) enumMap4);
        }
        this.f37663e = Collections.unmodifiableMap(enumMap3);
        EnumMap enumMap5 = new EnumMap(v.class);
        for (v vVar3 : v.values()) {
            enumMap5.put((EnumMap) vVar3, (v) new s(uVar.f(str, locale, vVar3)));
        }
        this.f37665g = Collections.unmodifiableMap(enumMap5);
        EnumMap enumMap6 = new EnumMap(v.class);
        v[] values6 = v.values();
        int length5 = values6.length;
        for (int i16 = 0; i16 < length5; i16++) {
            v vVar4 = values6[i16];
            EnumMap enumMap7 = new EnumMap(m.class);
            m[] values7 = m.values();
            int length6 = values7.length;
            int i17 = 0;
            while (i17 < length6) {
                m mVar3 = values7[i17];
                enumMap7.put((EnumMap) mVar3, (m) new s(uVar.i(str, locale, vVar4, mVar3)));
                i17++;
                values6 = values6;
            }
            enumMap6.put((EnumMap) vVar4, (v) enumMap7);
        }
        this.f37664f = Collections.unmodifiableMap(enumMap6);
        HashMap hashMap = new HashMap();
        try {
            qt.e h10 = qt.e.h("calendar/names/" + str + "/" + str, locale);
            for (String str2 : h10.g()) {
                hashMap.put(str2, h10.f(str2));
            }
            e = null;
        } catch (MissingResourceException e10) {
            e = e10;
        }
        this.f37666h = Collections.unmodifiableMap(hashMap);
        this.f37667i = str;
        this.f37668j = locale;
        this.f37669k = e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static String a(kt.x xVar) {
        lt.c cVar = (lt.c) xVar.o().getAnnotation(lt.c.class);
        if (cVar == null) {
            return "iso8601";
        }
        return cVar.value();
    }

    public static b c(String str, Locale locale) {
        u uVar;
        if (str != null) {
            StringBuilder sb2 = new StringBuilder();
            sb2.append(str);
            sb2.append(':');
            sb2.append(locale.getLanguage());
            String country = locale.getCountry();
            if (!country.isEmpty()) {
                sb2.append('-');
                sb2.append(country);
            }
            String sb3 = sb2.toString();
            b bVar = (b) f37658p.get(sb3);
            if (bVar == null) {
                if (locale.getLanguage().isEmpty() && str.equals("iso8601")) {
                    uVar = f37657o;
                } else {
                    Iterator it = ht.d.c().g(u.class).iterator();
                    while (true) {
                        if (it.hasNext()) {
                            u uVar2 = (u) it.next();
                            if (uVar2.k(str) && uVar2.d(locale)) {
                                uVar = uVar2;
                                break;
                            }
                        } else {
                            uVar = null;
                            break;
                        }
                    }
                    if (uVar == null) {
                        u uVar3 = f37656n;
                        if (uVar3.k(str) && uVar3.d(locale)) {
                            uVar = uVar3;
                        }
                        if (uVar == null) {
                            uVar = f37657o;
                        }
                    }
                }
                b bVar2 = new b(str, locale, uVar);
                b bVar3 = (b) f37658p.putIfAbsent(sb3, bVar2);
                if (bVar3 != null) {
                    return bVar3;
                }
                return bVar2;
            }
            return bVar;
        }
        throw new NullPointerException("Missing calendar type.");
    }

    public static b d(Locale locale) {
        return c("iso8601", locale);
    }

    private String e(String str) {
        if (this.f37666h.containsKey("useShortKeys") && "true".equals(this.f37666h.get("useShortKeys"))) {
            if (!str.equals("MONTH_OF_YEAR") && !str.equals("DAY_OF_WEEK") && !str.equals("QUARTER_OF_YEAR") && !str.equals("ERA")) {
                if (str.equals("EVANGELIST")) {
                    return "EV";
                }
                if (str.equals("SANSCULOTTIDES")) {
                    return "S";
                }
                if (str.equals("DAY_OF_DECADE")) {
                    return "D";
                }
                return str;
            }
            return str.substring(0, 1);
        }
        return str;
    }

    private static String f(String str, int i10, String... strArr) {
        if (strArr != null && strArr.length > 0) {
            if (strArr.length < i10) {
                return null;
            }
            StringBuilder sb2 = new StringBuilder(str);
            boolean z10 = true;
            for (int i11 = 0; i11 < strArr.length - i10; i11++) {
                if (z10) {
                    sb2.append('(');
                    z10 = false;
                } else {
                    sb2.append('|');
                }
                sb2.append(strArr[i11]);
            }
            if (!z10) {
                sb2.append(')');
            }
            return sb2.toString();
        } else if (i10 > 0) {
            return null;
        } else {
            return str;
        }
    }

    private static Map i(String str, Locale locale, u uVar, boolean z10) {
        v[] values;
        m[] values2;
        EnumMap enumMap = new EnumMap(v.class);
        boolean z11 = false;
        for (v vVar : v.values()) {
            EnumMap enumMap2 = new EnumMap(m.class);
            for (m mVar : m.values()) {
                String[] g10 = uVar.g(str, locale, vVar, mVar, z10);
                if (z10 && !z11) {
                    z11 = !Arrays.equals(uVar.g(str, locale, vVar, mVar, false), g10);
                }
                enumMap2.put((EnumMap) mVar, (m) new s(g10));
            }
            enumMap.put((EnumMap) vVar, (v) enumMap2);
        }
        if (z10 && !z11) {
            return null;
        }
        return enumMap;
    }

    private s j(v vVar, m mVar, boolean z10) {
        if (z10) {
            return (s) ((Map) this.f37661c.get(vVar)).get(mVar);
        }
        return (s) ((Map) this.f37660b.get(vVar)).get(mVar);
    }

    public static boolean q(Locale locale) {
        return f37654l.contains(locale.getLanguage());
    }

    public static String r(e eVar, Locale locale) {
        return f37655m.h(eVar, locale);
    }

    public static String s(e eVar, e eVar2, Locale locale) {
        return f37655m.c(eVar, eVar2, locale);
    }

    public static String t(e eVar, Locale locale) {
        return f37655m.a(eVar, locale);
    }

    public static String u(e eVar, e eVar2, Locale locale) {
        return nt.d.a(f37655m.c(eVar, eVar2, locale));
    }

    private static String v(String str, int i10, int i11) {
        return str + '_' + (i10 + i11);
    }

    public s b(v vVar) {
        return (s) this.f37665g.get(vVar);
    }

    public s g(v vVar, m mVar) {
        return j(vVar, mVar, true);
    }

    public s h(v vVar, m mVar) {
        return (s) ((Map) this.f37664f.get(vVar)).get(mVar);
    }

    public s k(v vVar, m mVar) {
        return (s) ((Map) this.f37662d.get(vVar)).get(mVar);
    }

    public s l(v vVar, m mVar) {
        return j(vVar, mVar, false);
    }

    public Map m() {
        return this.f37666h;
    }

    public s n(String str, Class cls, String... strArr) {
        String str2;
        if (this.f37669k == null) {
            Enum[] enumArr = (Enum[]) cls.getEnumConstants();
            int length = enumArr.length;
            String[] strArr2 = new String[length];
            String e10 = e(str);
            int i10 = !kt.i.class.isAssignableFrom(cls) ? 1 : 0;
            for (int i11 = 0; i11 < length; i11++) {
                int i12 = 0;
                while (true) {
                    String f10 = f(e10, i12, strArr);
                    if (f10 != null) {
                        str2 = v(f10, i11, i10);
                        if (this.f37666h.containsKey(str2)) {
                            break;
                        }
                        i12++;
                    } else {
                        str2 = null;
                        break;
                    }
                }
                if (str2 == null) {
                    if (this.f37666h.containsKey(str)) {
                        strArr2[i11] = (String) this.f37666h.get(str);
                    } else {
                        strArr2[i11] = enumArr[i11].name();
                    }
                } else {
                    strArr2[i11] = (String) this.f37666h.get(str2);
                }
            }
            return new s(strArr2);
        }
        throw new MissingResourceException(this.f37669k.getMessage(), this.f37669k.getClassName(), this.f37669k.getKey());
    }

    public s o(kt.p pVar, String... strArr) {
        return n(pVar.name(), pVar.getType(), strArr);
    }

    public s p(v vVar, m mVar) {
        return (s) ((Map) this.f37663e.get(vVar)).get(mVar);
    }

    public String toString() {
        return this.f37659a + "(" + this.f37667i + "/" + this.f37668j + ")";
    }
}
