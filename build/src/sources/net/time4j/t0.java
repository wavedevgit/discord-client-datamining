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
    private static final ConcurrentMap f40805n = new ConcurrentHashMap();

    /* renamed from: o  reason: collision with root package name */
    private static final w[] f40806o = {f.f40551o, f.f40553q, f.f40554r, f.f40555s, g.f40588d, g.f40589e, g.f40590i, g.f40591o, g.f40592p, g.f40593q};

    /* renamed from: p  reason: collision with root package name */
    private static final kt.x f40807p;

    /* renamed from: q  reason: collision with root package name */
    private static final kt.x f40808q;

    /* renamed from: a  reason: collision with root package name */
    private final Locale f40809a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f40810b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f40811c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f40812d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f40813e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f40814f;

    /* renamed from: g  reason: collision with root package name */
    private final Map f40815g;

    /* renamed from: h  reason: collision with root package name */
    private final String f40816h;

    /* renamed from: i  reason: collision with root package name */
    private final String f40817i;

    /* renamed from: j  reason: collision with root package name */
    private final String f40818j;

    /* renamed from: k  reason: collision with root package name */
    private final String f40819k;

    /* renamed from: l  reason: collision with root package name */
    private final Map f40820l;

    /* renamed from: m  reason: collision with root package name */
    private final Map f40821m;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f40822a;

        static {
            int[] iArr = new int[kt.v.values().length];
            f40822a = iArr;
            try {
                iArr[kt.v.WIDE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f40822a[kt.v.ABBREVIATED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f40822a[kt.v.SHORT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f40822a[kt.v.NARROW.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements kt.x {
        private b() {
        }

        private static String F(String str, String str2, String str3, kt.v vVar, kt.n nVar) {
            int i10 = a.f40822a[vVar.ordinal()];
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

        private static String G(String str, kt.n nVar) {
            String str2;
            if (nVar == kt.n.ONE) {
                str2 = "";
            } else {
                str2 = "s";
            }
            return "{0} " + str + str2;
        }

        private static String H(String str, boolean z10, kt.n nVar) {
            String str2;
            if (nVar == kt.n.ONE) {
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

        @Override // kt.x
        public String A(Locale locale, kt.v vVar, kt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("year", "yr", "y", vVar, nVar);
            }
            return J("y");
        }

        @Override // kt.x
        public String C(Locale locale, kt.v vVar, kt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("hour", "hr", "h", vVar, nVar);
            }
            return J("h");
        }

        @Override // kt.x
        public String E(Locale locale, kt.v vVar, kt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("second", "sec", "s", vVar, nVar);
            }
            return J("s");
        }

        @Override // kt.x
        public String a(Locale locale, kt.v vVar, kt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("nanosecond", "nsec", "ns", vVar, nVar);
            }
            return J("ns");
        }

        @Override // kt.x
        public String b(Locale locale, kt.v vVar, int i10) {
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

        @Override // kt.x
        public String d(Locale locale) {
            return "now";
        }

        @Override // kt.x
        public String e(Locale locale, kt.v vVar, kt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("day", "day", "d", vVar, nVar);
            }
            return J("d");
        }

        @Override // kt.x
        public String f(Locale locale, boolean z10, kt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("year", z10, nVar);
            }
            return I("y", z10);
        }

        @Override // kt.x
        public String g(Locale locale, boolean z10, kt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("minute", z10, nVar);
            }
            return I("min", z10);
        }

        @Override // kt.x
        public String l(Locale locale, kt.v vVar, kt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("month", "mth", "m", vVar, nVar);
            }
            return J("m");
        }

        @Override // kt.x
        public String m(Locale locale, boolean z10, kt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("second", z10, nVar);
            }
            return I("s", z10);
        }

        @Override // kt.x
        public String n(Locale locale, kt.v vVar, kt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("microsecond", "µsec", "µs", vVar, nVar);
            }
            return J("µs");
        }

        @Override // kt.x
        public String p(Locale locale, boolean z10, kt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("month", z10, nVar);
            }
            return I("m", z10);
        }

        @Override // kt.x
        public String q(Locale locale, boolean z10, kt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("day", z10, nVar);
            }
            return I("d", z10);
        }

        @Override // kt.x
        public String s(Locale locale, kt.v vVar, kt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("week", "wk", "w", vVar, nVar);
            }
            return J("w");
        }

        @Override // kt.x
        public String t(Locale locale, boolean z10, kt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("hour", z10, nVar);
            }
            return I("h", z10);
        }

        @Override // kt.x
        public String u(Locale locale, kt.v vVar, kt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("millisecond", "msec", "ms", vVar, nVar);
            }
            return J("ms");
        }

        @Override // kt.x
        public String v(Locale locale, kt.v vVar, kt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("minute", "min", "m", vVar, nVar);
            }
            return J("min");
        }

        @Override // kt.x
        public String w(Locale locale, boolean z10, kt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("week", z10, nVar);
            }
            return I("w", z10);
        }

        /* synthetic */ b(a aVar) {
            this();
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r1v13, types: [kt.x] */
    static {
        b bVar = null;
        b bVar2 = new b(null);
        f40808q = bVar2;
        Iterator it = gt.d.c().g(kt.x.class).iterator();
        if (it.hasNext()) {
            bVar = (kt.x) it.next();
        }
        if (bVar != null) {
            bVar2 = bVar;
        }
        f40807p = bVar2;
    }

    private t0(Locale locale) {
        String str;
        String str2;
        String str3;
        String str4;
        y0[] values;
        kt.v[] values2;
        HashMap hashMap;
        HashMap hashMap2;
        kt.n[] values3;
        kt.n[] values4;
        this.f40809a = locale;
        HashMap hashMap3 = new HashMap(10);
        HashMap hashMap4 = new HashMap(10);
        HashMap hashMap5 = new HashMap(10);
        HashMap hashMap6 = new HashMap(10);
        HashMap hashMap7 = new HashMap(10);
        HashMap hashMap8 = new HashMap(10);
        w[] wVarArr = f40806o;
        int length = wVarArr.length;
        int i10 = 0;
        while (i10 < length) {
            w wVar = wVarArr[i10];
            EnumMap enumMap = new EnumMap(kt.v.class);
            kt.v[] values5 = kt.v.values();
            int length2 = values5.length;
            w[] wVarArr2 = wVarArr;
            int i11 = 0;
            while (i11 < length2) {
                int i12 = length;
                kt.v vVar = values5[i11];
                int i13 = i11;
                EnumMap enumMap2 = new EnumMap(kt.n.class);
                kt.n[] values6 = kt.n.values();
                int i14 = i10;
                int i15 = 0;
                for (int length3 = values6.length; i15 < length3; length3 = length3) {
                    int i16 = i15;
                    kt.n nVar = values6[i16];
                    enumMap2.put((EnumMap) nVar, (kt.n) d(locale, wVar, vVar, nVar));
                    i15 = i16 + 1;
                }
                enumMap.put((EnumMap) vVar, (kt.v) Collections.unmodifiableMap(enumMap2));
                i11 = i13 + 1;
                length = i12;
                i10 = i14;
            }
            int i17 = length;
            int i18 = i10;
            hashMap3.put(wVar, Collections.unmodifiableMap(enumMap));
            if (!Character.isDigit(wVar.d())) {
                EnumMap enumMap3 = new EnumMap(kt.n.class);
                kt.n[] values7 = kt.n.values();
                int length4 = values7.length;
                int i19 = 0;
                while (i19 < length4) {
                    kt.n nVar2 = values7[i19];
                    enumMap3.put((EnumMap) nVar2, (kt.n) e(locale, wVar, false, false, nVar2));
                    i19++;
                    hashMap3 = hashMap3;
                }
                hashMap = hashMap3;
                hashMap4.put(wVar, Collections.unmodifiableMap(enumMap3));
                EnumMap enumMap4 = new EnumMap(kt.n.class);
                for (kt.n nVar3 : kt.n.values()) {
                    enumMap4.put((EnumMap) nVar3, (kt.n) e(locale, wVar, false, true, nVar3));
                }
                hashMap6.put(wVar, Collections.unmodifiableMap(enumMap4));
                EnumMap enumMap5 = new EnumMap(kt.n.class);
                kt.n[] values8 = kt.n.values();
                int length5 = values8.length;
                int i20 = 0;
                while (i20 < length5) {
                    kt.n nVar4 = values8[i20];
                    enumMap5.put((EnumMap) nVar4, (kt.n) e(locale, wVar, true, false, nVar4));
                    i20++;
                    hashMap4 = hashMap4;
                }
                hashMap2 = hashMap4;
                hashMap5.put(wVar, Collections.unmodifiableMap(enumMap5));
                EnumMap enumMap6 = new EnumMap(kt.n.class);
                for (kt.n nVar5 : kt.n.values()) {
                    enumMap6.put((EnumMap) nVar5, (kt.n) e(locale, wVar, true, true, nVar5));
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
            EnumMap enumMap7 = new EnumMap(kt.v.class);
            for (kt.v vVar2 : kt.v.values()) {
                enumMap7.put((EnumMap) vVar2, (kt.v) c(locale, vVar2, i21));
            }
            hashMap8.put(valueOf, Collections.unmodifiableMap(enumMap7));
        }
        this.f40810b = Collections.unmodifiableMap(hashMap9);
        this.f40811c = Collections.unmodifiableMap(hashMap10);
        this.f40812d = Collections.unmodifiableMap(hashMap5);
        this.f40813e = Collections.unmodifiableMap(hashMap6);
        this.f40814f = Collections.unmodifiableMap(hashMap7);
        this.f40815g = Collections.unmodifiableMap(hashMap8);
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
        kt.x xVar = f40807p;
        String d10 = xVar.d(locale);
        if (!(xVar instanceof kt.r)) {
            str4 = "";
            str3 = str4;
        } else {
            kt.r rVar = (kt.r) kt.r.class.cast(xVar);
            String c10 = rVar.c(locale);
            try {
                str3 = rVar.x(locale);
                try {
                    str = rVar.i(locale);
                    for (y0 y0Var2 : y0.values()) {
                        enumMap8.put((EnumMap) y0Var2, (y0) rVar.r(y0Var2, locale));
                        enumMap9.put((EnumMap) y0Var2, (y0) rVar.D(y0Var2, locale));
                    }
                    str4 = str;
                    str = c10;
                } catch (MissingResourceException unused2) {
                    str2 = str;
                    str = c10;
                    d10 = f40808q.d(locale);
                    str4 = str2;
                    this.f40816h = d10;
                    this.f40817i = str;
                    this.f40818j = str3;
                    this.f40819k = str4;
                    this.f40820l = Collections.unmodifiableMap(enumMap8);
                    this.f40821m = Collections.unmodifiableMap(enumMap9);
                }
            } catch (MissingResourceException unused3) {
                str2 = "";
                str3 = str2;
            }
        }
        this.f40816h = d10;
        this.f40817i = str;
        this.f40818j = str3;
        this.f40819k = str4;
        this.f40820l = Collections.unmodifiableMap(enumMap8);
        this.f40821m = Collections.unmodifiableMap(enumMap9);
    }

    private static char a(w wVar) {
        char d10 = wVar.d();
        if (wVar == g.f40589e) {
            return 'N';
        }
        return d10;
    }

    private static String c(Locale locale, kt.v vVar, int i10) {
        try {
            return f40807p.b(locale, vVar, i10);
        } catch (MissingResourceException unused) {
            return f40808q.b(locale, vVar, i10);
        }
    }

    private static String d(Locale locale, w wVar, kt.v vVar, kt.n nVar) {
        try {
            return f(f40807p, locale, a(wVar), vVar, nVar);
        } catch (MissingResourceException unused) {
            return f(f40808q, locale, a(wVar), vVar, nVar);
        }
    }

    private static String e(Locale locale, w wVar, boolean z10, boolean z11, kt.n nVar) {
        Locale locale2;
        boolean z12;
        boolean z13;
        kt.n nVar2;
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
            return g(f40807p, locale2, a(wVar), z12, z13, nVar2);
        } catch (MissingResourceException unused2) {
            return g(f40808q, locale2, a(wVar), z12, z13, nVar2);
        }
    }

    private static String f(kt.x xVar, Locale locale, char c10, kt.v vVar, kt.n nVar) {
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
                                                return xVar.v(locale, vVar, nVar);
                                            }
                                            throw new UnsupportedOperationException("Unit-ID: " + c10);
                                        }
                                        return xVar.l(locale, vVar, nVar);
                                    }
                                    return xVar.A(locale, vVar, nVar);
                                }
                                return xVar.s(locale, vVar, nVar);
                            }
                            return xVar.E(locale, vVar, nVar);
                        }
                        return xVar.C(locale, vVar, nVar);
                    }
                    return xVar.e(locale, vVar, nVar);
                }
                return xVar.a(locale, vVar, nVar);
            }
            return xVar.n(locale, vVar, nVar);
        }
        return xVar.u(locale, vVar, nVar);
    }

    private static String g(kt.x xVar, Locale locale, char c10, boolean z10, boolean z11, kt.n nVar) {
        if (z11 && (xVar instanceof kt.r)) {
            kt.r rVar = (kt.r) kt.r.class.cast(xVar);
            if (c10 != 'D') {
                if (c10 != 'H') {
                    if (c10 != 'S') {
                        if (c10 != 'W') {
                            if (c10 != 'Y') {
                                if (c10 != 'M') {
                                    if (c10 == 'N') {
                                        return rVar.j(locale, z10, nVar);
                                    }
                                    throw new UnsupportedOperationException("Unit-ID: " + c10);
                                }
                                return rVar.y(locale, z10, nVar);
                            }
                            return rVar.o(locale, z10, nVar);
                        }
                        return rVar.h(locale, z10, nVar);
                    }
                    return rVar.z(locale, z10, nVar);
                }
                return rVar.B(locale, z10, nVar);
            }
            return rVar.k(locale, z10, nVar);
        } else if (c10 != 'D') {
            if (c10 != 'H') {
                if (c10 != 'S') {
                    if (c10 != 'W') {
                        if (c10 != 'Y') {
                            if (c10 != 'M') {
                                if (c10 == 'N') {
                                    return xVar.g(locale, z10, nVar);
                                }
                                throw new UnsupportedOperationException("Unit-ID: " + c10);
                            }
                            return xVar.p(locale, z10, nVar);
                        }
                        return xVar.f(locale, z10, nVar);
                    }
                    return xVar.w(locale, z10, nVar);
                }
                return xVar.m(locale, z10, nVar);
            }
            return xVar.t(locale, z10, nVar);
        } else {
            return xVar.q(locale, z10, nVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static t0 h(Locale locale) {
        if (locale != null) {
            ConcurrentMap concurrentMap = f40805n;
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
        return this.f40818j;
    }
}
