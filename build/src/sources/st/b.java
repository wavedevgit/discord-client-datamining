package st;

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
    private static final Set f50186l;

    /* renamed from: m  reason: collision with root package name */
    private static final f f50187m;

    /* renamed from: n  reason: collision with root package name */
    private static final u f50188n;

    /* renamed from: o  reason: collision with root package name */
    private static final u f50189o;

    /* renamed from: p  reason: collision with root package name */
    private static final ConcurrentMap f50190p;

    /* renamed from: a  reason: collision with root package name */
    private final String f50191a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f50192b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f50193c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f50194d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f50195e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f50196f;

    /* renamed from: g  reason: collision with root package name */
    private final Map f50197g;

    /* renamed from: h  reason: collision with root package name */
    private final Map f50198h;

    /* renamed from: i  reason: collision with root package name */
    private final String f50199i;

    /* renamed from: j  reason: collision with root package name */
    private final Locale f50200j;

    /* renamed from: k  reason: collision with root package name */
    private final MissingResourceException f50201k;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f50202a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f50203b;

        static {
            int[] iArr = new int[e.values().length];
            f50203b = iArr;
            try {
                iArr[e.FULL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f50203b[e.LONG.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f50203b[e.MEDIUM.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f50203b[e.SHORT.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            int[] iArr2 = new int[v.values().length];
            f50202a = iArr2;
            try {
                iArr2[v.WIDE.ordinal()] = 1;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f50202a[v.ABBREVIATED.ordinal()] = 2;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f50202a[v.SHORT.ordinal()] = 3;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f50202a[v.NARROW.ordinal()] = 4;
            } catch (NoSuchFieldError unused8) {
            }
        }
    }

    /* renamed from: st.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class C0658b implements u {
        private C0658b() {
        }

        @Override // st.u
        public String[] a(String str, Locale locale, v vVar, m mVar) {
            if (vVar == v.NARROW) {
                return new String[]{"1", "2", "3", "4"};
            }
            return new String[]{"Q1", "Q2", "Q3", "Q4"};
        }

        @Override // st.u
        public String[] c(String str, Locale locale, v vVar) {
            if (vVar == v.NARROW) {
                return new String[]{"B", "A"};
            }
            return new String[]{"BC", "AD"};
        }

        @Override // st.u
        public String[] d(String str, Locale locale, v vVar, m mVar) {
            return new String[]{"1", "2", "3", "4", "5", "6", "7"};
        }

        @Override // st.u
        public boolean e(Locale locale) {
            return true;
        }

        @Override // st.u
        public String[] f(String str, Locale locale, v vVar, m mVar, boolean z10) {
            if (vVar == v.WIDE) {
                return new String[]{"01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13"};
            }
            return new String[]{"1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"};
        }

        @Override // st.u
        public String[] h(String str, Locale locale, v vVar, m mVar) {
            if (vVar == v.NARROW) {
                return new String[]{"A", "P"};
            }
            return new String[]{"AM", "PM"};
        }

        @Override // st.u
        public boolean i(String str) {
            return true;
        }

        public String toString() {
            return "FallbackProvider";
        }

        /* synthetic */ C0658b(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements f {

        /* renamed from: a  reason: collision with root package name */
        private final f f50204a;

        c(f fVar) {
            this.f50204a = fVar;
        }

        private static String a(DateFormat dateFormat) {
            if (dateFormat instanceof SimpleDateFormat) {
                return ((SimpleDateFormat) SimpleDateFormat.class.cast(dateFormat)).toPattern();
            }
            throw new IllegalStateException("Cannot retrieve format pattern: " + dateFormat);
        }

        private static int c(e eVar) {
            int i10 = a.f50203b[eVar.ordinal()];
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

        @Override // st.f
        public String b(e eVar, Locale locale) {
            f fVar = this.f50204a;
            if (fVar == null) {
                return a(DateFormat.getDateInstance(c(eVar), locale));
            }
            return fVar.b(eVar, locale);
        }

        @Override // st.f
        public String g(e eVar, Locale locale) {
            String g10;
            f fVar = this.f50204a;
            if (fVar == null) {
                g10 = a(DateFormat.getTimeInstance(c(eVar), locale));
            } else if (fVar instanceof ut.c) {
                g10 = ((ut.c) ut.c.class.cast(fVar)).j(eVar, locale, true);
            } else {
                g10 = fVar.g(eVar, locale);
            }
            return ut.d.a(g10);
        }

        @Override // st.f
        public String k(e eVar, e eVar2, Locale locale) {
            f fVar = this.f50204a;
            if (fVar == null) {
                return a(DateFormat.getDateTimeInstance(c(eVar), c(eVar2), locale));
            }
            return this.f50204a.k(eVar, eVar2, locale).replace("{1}", this.f50204a.b(eVar, locale)).replace("{0}", fVar.g(eVar2, locale));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d implements u {
        private d() {
        }

        private static String[] b(String[] strArr, int i10) {
            String[] strArr2 = new String[i10];
            for (int i11 = 0; i11 < i10; i11++) {
                if (!strArr[i11].isEmpty()) {
                    strArr2[i11] = g(strArr[i11]);
                } else {
                    strArr2[i11] = String.valueOf(i11 + 1);
                }
            }
            return strArr2;
        }

        private static String g(String str) {
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

        @Override // st.u
        public String[] a(String str, Locale locale, v vVar, m mVar) {
            return new String[]{"Q1", "Q2", "Q3", "Q4"};
        }

        @Override // st.u
        public String[] c(String str, Locale locale, v vVar) {
            DateFormatSymbols dateFormatSymbols = DateFormatSymbols.getInstance(locale);
            if (vVar == v.NARROW) {
                String[] eras = dateFormatSymbols.getEras();
                String[] strArr = new String[eras.length];
                int length = eras.length;
                for (int i10 = 0; i10 < length; i10++) {
                    if (!eras[i10].isEmpty()) {
                        strArr[i10] = g(eras[i10]);
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

        @Override // st.u
        public String[] d(String str, Locale locale, v vVar, m mVar) {
            String[] weekdays;
            DateFormatSymbols dateFormatSymbols = DateFormatSymbols.getInstance(locale);
            int i10 = a.f50202a[vVar.ordinal()];
            if (i10 != 1) {
                if (i10 != 2 && i10 != 3) {
                    if (i10 == 4) {
                        weekdays = b(d("", locale, v.SHORT, mVar), 7);
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

        @Override // st.u
        public boolean e(Locale locale) {
            String language = locale.getLanguage();
            for (Locale locale2 : DateFormatSymbols.getAvailableLocales()) {
                if (locale2.getLanguage().equals(language)) {
                    return true;
                }
            }
            return false;
        }

        @Override // st.u
        public String[] f(String str, Locale locale, v vVar, m mVar, boolean z10) {
            DateFormatSymbols dateFormatSymbols = DateFormatSymbols.getInstance(locale);
            int i10 = a.f50202a[vVar.ordinal()];
            if (i10 != 1) {
                if (i10 != 2 && i10 != 3) {
                    if (i10 == 4) {
                        return b(dateFormatSymbols.getShortMonths(), 12);
                    }
                    throw new UnsupportedOperationException(vVar.name());
                }
                return dateFormatSymbols.getShortMonths();
            }
            return dateFormatSymbols.getMonths();
        }

        @Override // st.u
        public String[] h(String str, Locale locale, v vVar, m mVar) {
            if (vVar == v.NARROW) {
                return new String[]{"A", "P"};
            }
            return DateFormatSymbols.getInstance(locale).getAmPmStrings();
        }

        @Override // st.u
        public boolean i(String str) {
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
        f50186l = Collections.unmodifiableSet(hashSet);
        Iterator it = pt.d.c().g(f.class).iterator();
        if (it.hasNext()) {
            cVar = (f) it.next();
        } else {
            cVar = new xt.c();
        }
        f50187m = new c(cVar);
        f50188n = new d(null);
        f50189o = new C0658b(null);
        f50190p = new ConcurrentHashMap();
    }

    private b(String str, Locale locale, u uVar) {
        v[] values;
        this.f50191a = uVar.toString();
        int i10 = 0;
        Map unmodifiableMap = Collections.unmodifiableMap(i(str, locale, uVar, false));
        this.f50192b = unmodifiableMap;
        Map i11 = i(str, locale, uVar, true);
        if (i11 == null) {
            this.f50193c = unmodifiableMap;
        } else {
            this.f50193c = Collections.unmodifiableMap(i11);
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
                enumMap2.put((EnumMap) mVar, (m) new s(uVar.a(str, locale, vVar, mVar)));
                i13++;
                values2 = values2;
            }
            enumMap.put((EnumMap) vVar, (v) enumMap2);
            i12++;
            i10 = 0;
        }
        this.f50194d = Collections.unmodifiableMap(enumMap);
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
                enumMap4.put((EnumMap) mVar2, (m) new s(uVar.d(str, locale, vVar2, mVar2)));
                i15++;
                values4 = values4;
                length3 = length3;
            }
            enumMap3.put((EnumMap) vVar2, (v) enumMap4);
        }
        this.f50195e = Collections.unmodifiableMap(enumMap3);
        EnumMap enumMap5 = new EnumMap(v.class);
        for (v vVar3 : v.values()) {
            enumMap5.put((EnumMap) vVar3, (v) new s(uVar.c(str, locale, vVar3)));
        }
        this.f50197g = Collections.unmodifiableMap(enumMap5);
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
                enumMap7.put((EnumMap) mVar3, (m) new s(uVar.h(str, locale, vVar4, mVar3)));
                i17++;
                values6 = values6;
            }
            enumMap6.put((EnumMap) vVar4, (v) enumMap7);
        }
        this.f50196f = Collections.unmodifiableMap(enumMap6);
        HashMap hashMap = new HashMap();
        try {
            xt.e h10 = xt.e.h("calendar/names/" + str + "/" + str, locale);
            for (String str2 : h10.g()) {
                hashMap.put(str2, h10.f(str2));
            }
            e = null;
        } catch (MissingResourceException e10) {
            e = e10;
        }
        this.f50198h = Collections.unmodifiableMap(hashMap);
        this.f50199i = str;
        this.f50200j = locale;
        this.f50201k = e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static String a(rt.x xVar) {
        st.c cVar = (st.c) xVar.p().getAnnotation(st.c.class);
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
            b bVar = (b) f50190p.get(sb3);
            if (bVar == null) {
                if (locale.getLanguage().isEmpty() && str.equals("iso8601")) {
                    uVar = f50189o;
                } else {
                    Iterator it = pt.d.c().g(u.class).iterator();
                    while (true) {
                        if (it.hasNext()) {
                            u uVar2 = (u) it.next();
                            if (uVar2.i(str) && uVar2.e(locale)) {
                                uVar = uVar2;
                                break;
                            }
                        } else {
                            uVar = null;
                            break;
                        }
                    }
                    if (uVar == null) {
                        u uVar3 = f50188n;
                        if (uVar3.i(str) && uVar3.e(locale)) {
                            uVar = uVar3;
                        }
                        if (uVar == null) {
                            uVar = f50189o;
                        }
                    }
                }
                b bVar2 = new b(str, locale, uVar);
                b bVar3 = (b) f50190p.putIfAbsent(sb3, bVar2);
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
        if (this.f50198h.containsKey("useShortKeys") && "true".equals(this.f50198h.get("useShortKeys"))) {
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
                String[] f10 = uVar.f(str, locale, vVar, mVar, z10);
                if (z10 && !z11) {
                    z11 = !Arrays.equals(uVar.f(str, locale, vVar, mVar, false), f10);
                }
                enumMap2.put((EnumMap) mVar, (m) new s(f10));
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
            return (s) ((Map) this.f50193c.get(vVar)).get(mVar);
        }
        return (s) ((Map) this.f50192b.get(vVar)).get(mVar);
    }

    public static boolean q(Locale locale) {
        return f50186l.contains(locale.getLanguage());
    }

    public static String r(e eVar, Locale locale) {
        return f50187m.b(eVar, locale);
    }

    public static String s(e eVar, e eVar2, Locale locale) {
        return f50187m.k(eVar, eVar2, locale);
    }

    public static String t(e eVar, Locale locale) {
        return f50187m.g(eVar, locale);
    }

    public static String u(e eVar, e eVar2, Locale locale) {
        return ut.d.a(f50187m.k(eVar, eVar2, locale));
    }

    private static String v(String str, int i10, int i11) {
        return str + '_' + (i10 + i11);
    }

    public s b(v vVar) {
        return (s) this.f50197g.get(vVar);
    }

    public s g(v vVar, m mVar) {
        return j(vVar, mVar, true);
    }

    public s h(v vVar, m mVar) {
        return (s) ((Map) this.f50196f.get(vVar)).get(mVar);
    }

    public s k(v vVar, m mVar) {
        return (s) ((Map) this.f50194d.get(vVar)).get(mVar);
    }

    public s l(v vVar, m mVar) {
        return j(vVar, mVar, false);
    }

    public Map m() {
        return this.f50198h;
    }

    public s n(String str, Class cls, String... strArr) {
        String str2;
        if (this.f50201k == null) {
            Enum[] enumArr = (Enum[]) cls.getEnumConstants();
            int length = enumArr.length;
            String[] strArr2 = new String[length];
            String e10 = e(str);
            int i10 = !rt.i.class.isAssignableFrom(cls) ? 1 : 0;
            for (int i11 = 0; i11 < length; i11++) {
                int i12 = 0;
                while (true) {
                    String f10 = f(e10, i12, strArr);
                    if (f10 != null) {
                        str2 = v(f10, i11, i10);
                        if (this.f50198h.containsKey(str2)) {
                            break;
                        }
                        i12++;
                    } else {
                        str2 = null;
                        break;
                    }
                }
                if (str2 == null) {
                    if (this.f50198h.containsKey(str)) {
                        strArr2[i11] = (String) this.f50198h.get(str);
                    } else {
                        strArr2[i11] = enumArr[i11].name();
                    }
                } else {
                    strArr2[i11] = (String) this.f50198h.get(str2);
                }
            }
            return new s(strArr2);
        }
        throw new MissingResourceException(this.f50201k.getMessage(), this.f50201k.getClassName(), this.f50201k.getKey());
    }

    public s o(rt.p pVar, String... strArr) {
        return n(pVar.name(), pVar.getType(), strArr);
    }

    public s p(v vVar, m mVar) {
        return (s) ((Map) this.f50195e.get(vVar)).get(mVar);
    }

    public String toString() {
        return this.f50191a + "(" + this.f50199i + "/" + this.f50200j + ")";
    }
}
