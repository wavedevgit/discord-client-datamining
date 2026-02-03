package net.time4j;

import java.util.Collections;
import java.util.EnumMap;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Locale;
import java.util.Map;
import java.util.MissingResourceException;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class t0 {

    /* renamed from: n  reason: collision with root package name */
    private static final ConcurrentMap f40684n = new ConcurrentHashMap();

    /* renamed from: o  reason: collision with root package name */
    private static final w[] f40685o = {f.f40430o, f.f40432q, f.f40433r, f.f40434s, g.f40467d, g.f40468e, g.f40469i, g.f40470o, g.f40471p, g.f40472q};

    /* renamed from: p  reason: collision with root package name */
    private static final lt.x f40686p;

    /* renamed from: q  reason: collision with root package name */
    private static final lt.x f40687q;

    /* renamed from: a  reason: collision with root package name */
    private final Locale f40688a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f40689b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f40690c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f40691d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f40692e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f40693f;

    /* renamed from: g  reason: collision with root package name */
    private final Map f40694g;

    /* renamed from: h  reason: collision with root package name */
    private final String f40695h;

    /* renamed from: i  reason: collision with root package name */
    private final String f40696i;

    /* renamed from: j  reason: collision with root package name */
    private final String f40697j;

    /* renamed from: k  reason: collision with root package name */
    private final String f40698k;

    /* renamed from: l  reason: collision with root package name */
    private final Map f40699l;

    /* renamed from: m  reason: collision with root package name */
    private final Map f40700m;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f40701a;

        static {
            int[] iArr = new int[lt.v.values().length];
            f40701a = iArr;
            try {
                iArr[lt.v.WIDE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f40701a[lt.v.ABBREVIATED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f40701a[lt.v.SHORT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f40701a[lt.v.NARROW.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements lt.x {
        private b() {
        }

        private static String F(String str, String str2, String str3, lt.v vVar, lt.n nVar) {
            int i10 = a.f40701a[vVar.ordinal()];
            if (i10 != 1) {
                if (i10 != 2 && i10 != 3) {
                    if (i10 == 4) {
                        return "{0}" + str3;
                    }
                    throw new UnsupportedOperationException(vVar.name());
                }
                return G(str2, nVar);
            }
            return G(str, nVar);
        }

        private static String G(String str, lt.n nVar) {
            String str2;
            if (nVar == lt.n.ONE) {
                str2 = "";
            } else {
                str2 = "s";
            }
            return "{0} " + str + str2;
        }

        private static String H(String str, boolean z10, lt.n nVar) {
            String str2;
            if (nVar == lt.n.ONE) {
                str2 = "";
            } else {
                str2 = "s";
            }
            if (z10) {
                return "in {0} " + str + str2;
            }
            return "{0} " + str + str2 + " ago";
        }

        private static String I(String str, boolean z10) {
            String str2;
            StringBuilder sb2 = new StringBuilder();
            if (z10) {
                str2 = "+";
            } else {
                str2 = "-";
            }
            sb2.append(str2);
            sb2.append("{0} ");
            sb2.append(str);
            return sb2.toString();
        }

        private static String J(String str) {
            return "{0} " + str;
        }

        @Override // lt.x
        public String A(Locale locale, boolean z10, lt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("second", z10, nVar);
            }
            return I("s", z10);
        }

        @Override // lt.x
        public String B(Locale locale, lt.v vVar, lt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("month", "mth", "m", vVar, nVar);
            }
            return J("m");
        }

        @Override // lt.x
        public String E(Locale locale, boolean z10, lt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("minute", z10, nVar);
            }
            return I("min", z10);
        }

        @Override // lt.x
        public String a(Locale locale, boolean z10, lt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("hour", z10, nVar);
            }
            return I("h", z10);
        }

        @Override // lt.x
        public String c(Locale locale) {
            return "now";
        }

        @Override // lt.x
        public String e(Locale locale, lt.v vVar, lt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("microsecond", "µsec", "µs", vVar, nVar);
            }
            return J("µs");
        }

        @Override // lt.x
        public String g(Locale locale, lt.v vVar, int i10) {
            if (i10 >= 2) {
                StringBuilder sb2 = new StringBuilder(i10 * 5);
                for (int i11 = 0; i11 < i10; i11++) {
                    sb2.append('{');
                    sb2.append(i11);
                    sb2.append('}');
                    if (i11 < i10 - 1) {
                        sb2.append(", ");
                    }
                }
                return sb2.toString();
            }
            throw new IllegalArgumentException("Size must be greater than 1.");
        }

        @Override // lt.x
        public String h(Locale locale, lt.v vVar, lt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("minute", "min", "m", vVar, nVar);
            }
            return J("min");
        }

        @Override // lt.x
        public String i(Locale locale, lt.v vVar, lt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("week", "wk", "w", vVar, nVar);
            }
            return J("w");
        }

        @Override // lt.x
        public String j(Locale locale, lt.v vVar, lt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("year", "yr", "y", vVar, nVar);
            }
            return J("y");
        }

        @Override // lt.x
        public String k(Locale locale, boolean z10, lt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("week", z10, nVar);
            }
            return I("w", z10);
        }

        @Override // lt.x
        public String m(Locale locale, lt.v vVar, lt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("nanosecond", "nsec", "ns", vVar, nVar);
            }
            return J("ns");
        }

        @Override // lt.x
        public String o(Locale locale, lt.v vVar, lt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("second", "sec", "s", vVar, nVar);
            }
            return J("s");
        }

        @Override // lt.x
        public String r(Locale locale, boolean z10, lt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("year", z10, nVar);
            }
            return I("y", z10);
        }

        @Override // lt.x
        public String s(Locale locale, lt.v vVar, lt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("millisecond", "msec", "ms", vVar, nVar);
            }
            return J("ms");
        }

        @Override // lt.x
        public String u(Locale locale, boolean z10, lt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("month", z10, nVar);
            }
            return I("m", z10);
        }

        @Override // lt.x
        public String v(Locale locale, boolean z10, lt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("day", z10, nVar);
            }
            return I("d", z10);
        }

        @Override // lt.x
        public String w(Locale locale, lt.v vVar, lt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("day", "day", "d", vVar, nVar);
            }
            return J("d");
        }

        @Override // lt.x
        public String x(Locale locale, lt.v vVar, lt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("hour", "hr", "h", vVar, nVar);
            }
            return J("h");
        }

        /* synthetic */ b(a aVar) {
            this();
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r1v13, types: [lt.x] */
    static {
        b bVar = null;
        b bVar2 = new b(null);
        f40687q = bVar2;
        Iterator it = ht.d.c().g(lt.x.class).iterator();
        if (it.hasNext()) {
            bVar = (lt.x) it.next();
        }
        if (bVar != null) {
            bVar2 = bVar;
        }
        f40686p = bVar2;
    }

    private t0(Locale locale) {
        String str;
        String str2;
        String str3;
        String str4;
        y0[] values;
        lt.v[] values2;
        HashMap hashMap;
        HashMap hashMap2;
        lt.n[] values3;
        lt.n[] values4;
        this.f40688a = locale;
        HashMap hashMap3 = new HashMap(10);
        HashMap hashMap4 = new HashMap(10);
        HashMap hashMap5 = new HashMap(10);
        HashMap hashMap6 = new HashMap(10);
        HashMap hashMap7 = new HashMap(10);
        HashMap hashMap8 = new HashMap(10);
        w[] wVarArr = f40685o;
        int length = wVarArr.length;
        int i10 = 0;
        while (i10 < length) {
            w wVar = wVarArr[i10];
            EnumMap enumMap = new EnumMap(lt.v.class);
            lt.v[] values5 = lt.v.values();
            int length2 = values5.length;
            w[] wVarArr2 = wVarArr;
            int i11 = 0;
            while (i11 < length2) {
                int i12 = length;
                lt.v vVar = values5[i11];
                int i13 = i11;
                EnumMap enumMap2 = new EnumMap(lt.n.class);
                lt.n[] values6 = lt.n.values();
                int i14 = i10;
                int i15 = 0;
                for (int length3 = values6.length; i15 < length3; length3 = length3) {
                    int i16 = i15;
                    lt.n nVar = values6[i16];
                    enumMap2.put((EnumMap) nVar, (lt.n) d(locale, wVar, vVar, nVar));
                    i15 = i16 + 1;
                }
                enumMap.put((EnumMap) vVar, (lt.v) Collections.unmodifiableMap(enumMap2));
                i11 = i13 + 1;
                length = i12;
                i10 = i14;
            }
            int i17 = length;
            int i18 = i10;
            hashMap3.put(wVar, Collections.unmodifiableMap(enumMap));
            if (!Character.isDigit(wVar.d())) {
                EnumMap enumMap3 = new EnumMap(lt.n.class);
                lt.n[] values7 = lt.n.values();
                int length4 = values7.length;
                int i19 = 0;
                while (i19 < length4) {
                    lt.n nVar2 = values7[i19];
                    enumMap3.put((EnumMap) nVar2, (lt.n) e(locale, wVar, false, false, nVar2));
                    i19++;
                    hashMap3 = hashMap3;
                }
                hashMap = hashMap3;
                hashMap4.put(wVar, Collections.unmodifiableMap(enumMap3));
                EnumMap enumMap4 = new EnumMap(lt.n.class);
                for (lt.n nVar3 : lt.n.values()) {
                    enumMap4.put((EnumMap) nVar3, (lt.n) e(locale, wVar, false, true, nVar3));
                }
                hashMap6.put(wVar, Collections.unmodifiableMap(enumMap4));
                EnumMap enumMap5 = new EnumMap(lt.n.class);
                lt.n[] values8 = lt.n.values();
                int length5 = values8.length;
                int i20 = 0;
                while (i20 < length5) {
                    lt.n nVar4 = values8[i20];
                    enumMap5.put((EnumMap) nVar4, (lt.n) e(locale, wVar, true, false, nVar4));
                    i20++;
                    hashMap4 = hashMap4;
                }
                hashMap2 = hashMap4;
                hashMap5.put(wVar, Collections.unmodifiableMap(enumMap5));
                EnumMap enumMap6 = new EnumMap(lt.n.class);
                for (lt.n nVar5 : lt.n.values()) {
                    enumMap6.put((EnumMap) nVar5, (lt.n) e(locale, wVar, true, true, nVar5));
                }
                hashMap7.put(wVar, Collections.unmodifiableMap(enumMap6));
            } else {
                hashMap = hashMap3;
                hashMap2 = hashMap4;
            }
            i10 = i18 + 1;
            hashMap4 = hashMap2;
            wVarArr = wVarArr2;
            length = i17;
            hashMap3 = hashMap;
        }
        HashMap hashMap9 = hashMap3;
        HashMap hashMap10 = hashMap4;
        for (int i21 = 2; i21 <= 7; i21++) {
            Integer valueOf = Integer.valueOf(i21);
            EnumMap enumMap7 = new EnumMap(lt.v.class);
            for (lt.v vVar2 : lt.v.values()) {
                enumMap7.put((EnumMap) vVar2, (lt.v) c(locale, vVar2, i21));
            }
            hashMap8.put(valueOf, Collections.unmodifiableMap(enumMap7));
        }
        this.f40689b = Collections.unmodifiableMap(hashMap9);
        this.f40690c = Collections.unmodifiableMap(hashMap10);
        this.f40691d = Collections.unmodifiableMap(hashMap5);
        this.f40692e = Collections.unmodifiableMap(hashMap6);
        this.f40693f = Collections.unmodifiableMap(hashMap7);
        this.f40694g = Collections.unmodifiableMap(hashMap8);
        EnumMap enumMap8 = new EnumMap(y0.class);
        EnumMap enumMap9 = new EnumMap(y0.class);
        y0[] values9 = y0.values();
        int length6 = values9.length;
        int i22 = 0;
        while (true) {
            str = "";
            if (i22 >= length6) {
                try {
                    break;
                } catch (MissingResourceException unused) {
                    str2 = "";
                    str3 = str2;
                }
            } else {
                y0 y0Var = values9[i22];
                enumMap8.put((EnumMap) y0Var, (y0) "");
                enumMap9.put((EnumMap) y0Var, (y0) "");
                i22++;
            }
        }
        lt.x xVar = f40686p;
        String c10 = xVar.c(locale);
        if (!(xVar instanceof lt.r)) {
            str4 = "";
            str3 = str4;
        } else {
            lt.r rVar = (lt.r) lt.r.class.cast(xVar);
            String b10 = rVar.b(locale);
            try {
                str3 = rVar.t(locale);
                try {
                    str = rVar.f(locale);
                    for (y0 y0Var2 : y0.values()) {
                        enumMap8.put((EnumMap) y0Var2, (y0) rVar.l(y0Var2, locale));
                        enumMap9.put((EnumMap) y0Var2, (y0) rVar.y(y0Var2, locale));
                    }
                    str4 = str;
                    str = b10;
                } catch (MissingResourceException unused2) {
                    str2 = str;
                    str = b10;
                    c10 = f40687q.c(locale);
                    str4 = str2;
                    this.f40695h = c10;
                    this.f40696i = str;
                    this.f40697j = str3;
                    this.f40698k = str4;
                    this.f40699l = Collections.unmodifiableMap(enumMap8);
                    this.f40700m = Collections.unmodifiableMap(enumMap9);
                }
            } catch (MissingResourceException unused3) {
                str2 = "";
                str3 = str2;
            }
        }
        this.f40695h = c10;
        this.f40696i = str;
        this.f40697j = str3;
        this.f40698k = str4;
        this.f40699l = Collections.unmodifiableMap(enumMap8);
        this.f40700m = Collections.unmodifiableMap(enumMap9);
    }

    private static char a(w wVar) {
        char d10 = wVar.d();
        if (wVar == g.f40468e) {
            return 'N';
        }
        return d10;
    }

    private static String c(Locale locale, lt.v vVar, int i10) {
        try {
            return f40686p.g(locale, vVar, i10);
        } catch (MissingResourceException unused) {
            return f40687q.g(locale, vVar, i10);
        }
    }

    private static String d(Locale locale, w wVar, lt.v vVar, lt.n nVar) {
        try {
            return f(f40686p, locale, a(wVar), vVar, nVar);
        } catch (MissingResourceException unused) {
            return f(f40687q, locale, a(wVar), vVar, nVar);
        }
    }

    private static String e(Locale locale, w wVar, boolean z10, boolean z11, lt.n nVar) {
        Locale locale2;
        boolean z12;
        boolean z13;
        lt.n nVar2;
        try {
            locale2 = locale;
            z12 = z10;
            z13 = z11;
            nVar2 = nVar;
        } catch (MissingResourceException unused) {
            locale2 = locale;
            z12 = z10;
            z13 = z11;
            nVar2 = nVar;
        }
        try {
            return g(f40686p, locale2, a(wVar), z12, z13, nVar2);
        } catch (MissingResourceException unused2) {
            return g(f40687q, locale2, a(wVar), z12, z13, nVar2);
        }
    }

    private static String f(lt.x xVar, Locale locale, char c10, lt.v vVar, lt.n nVar) {
        if (c10 != '3') {
            if (c10 != '6') {
                if (c10 != '9') {
                    if (c10 != 'D') {
                        if (c10 != 'H') {
                            if (c10 != 'S') {
                                if (c10 != 'W') {
                                    if (c10 != 'Y') {
                                        if (c10 != 'M') {
                                            if (c10 == 'N') {
                                                return xVar.h(locale, vVar, nVar);
                                            }
                                            throw new UnsupportedOperationException("Unit-ID: " + c10);
                                        }
                                        return xVar.B(locale, vVar, nVar);
                                    }
                                    return xVar.j(locale, vVar, nVar);
                                }
                                return xVar.i(locale, vVar, nVar);
                            }
                            return xVar.o(locale, vVar, nVar);
                        }
                        return xVar.x(locale, vVar, nVar);
                    }
                    return xVar.w(locale, vVar, nVar);
                }
                return xVar.m(locale, vVar, nVar);
            }
            return xVar.e(locale, vVar, nVar);
        }
        return xVar.s(locale, vVar, nVar);
    }

    private static String g(lt.x xVar, Locale locale, char c10, boolean z10, boolean z11, lt.n nVar) {
        if (z11 && (xVar instanceof lt.r)) {
            lt.r rVar = (lt.r) lt.r.class.cast(xVar);
            if (c10 != 'D') {
                if (c10 != 'H') {
                    if (c10 != 'S') {
                        if (c10 != 'W') {
                            if (c10 != 'Y') {
                                if (c10 != 'M') {
                                    if (c10 == 'N') {
                                        return rVar.p(locale, z10, nVar);
                                    }
                                    throw new UnsupportedOperationException("Unit-ID: " + c10);
                                }
                                return rVar.z(locale, z10, nVar);
                            }
                            return rVar.d(locale, z10, nVar);
                        }
                        return rVar.q(locale, z10, nVar);
                    }
                    return rVar.D(locale, z10, nVar);
                }
                return rVar.n(locale, z10, nVar);
            }
            return rVar.C(locale, z10, nVar);
        } else if (c10 != 'D') {
            if (c10 != 'H') {
                if (c10 != 'S') {
                    if (c10 != 'W') {
                        if (c10 != 'Y') {
                            if (c10 != 'M') {
                                if (c10 == 'N') {
                                    return xVar.E(locale, z10, nVar);
                                }
                                throw new UnsupportedOperationException("Unit-ID: " + c10);
                            }
                            return xVar.u(locale, z10, nVar);
                        }
                        return xVar.r(locale, z10, nVar);
                    }
                    return xVar.k(locale, z10, nVar);
                }
                return xVar.A(locale, z10, nVar);
            }
            return xVar.a(locale, z10, nVar);
        } else {
            return xVar.v(locale, z10, nVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static t0 h(Locale locale) {
        if (locale != null) {
            ConcurrentMap concurrentMap = f40684n;
            t0 t0Var = (t0) concurrentMap.get(locale);
            if (t0Var == null) {
                t0Var = new t0(locale);
                t0 t0Var2 = (t0) concurrentMap.putIfAbsent(locale, t0Var);
                if (t0Var2 != null) {
                    return t0Var2;
                }
            }
            return t0Var;
        }
        throw new NullPointerException("Missing language.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String b() {
        return this.f40697j;
    }
}
