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
    private static final ConcurrentMap f38678n = new ConcurrentHashMap();

    /* renamed from: o  reason: collision with root package name */
    private static final w[] f38679o = {f.f38424o, f.f38426q, f.f38427r, f.f38428s, g.f38461d, g.f38462e, g.f38463i, g.f38464o, g.f38465p, g.f38466q};

    /* renamed from: p  reason: collision with root package name */
    private static final tt.x f38680p;

    /* renamed from: q  reason: collision with root package name */
    private static final tt.x f38681q;

    /* renamed from: a  reason: collision with root package name */
    private final Locale f38682a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f38683b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f38684c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f38685d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f38686e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f38687f;

    /* renamed from: g  reason: collision with root package name */
    private final Map f38688g;

    /* renamed from: h  reason: collision with root package name */
    private final String f38689h;

    /* renamed from: i  reason: collision with root package name */
    private final String f38690i;

    /* renamed from: j  reason: collision with root package name */
    private final String f38691j;

    /* renamed from: k  reason: collision with root package name */
    private final String f38692k;

    /* renamed from: l  reason: collision with root package name */
    private final Map f38693l;

    /* renamed from: m  reason: collision with root package name */
    private final Map f38694m;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f38695a;

        static {
            int[] iArr = new int[tt.v.values().length];
            f38695a = iArr;
            try {
                iArr[tt.v.WIDE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f38695a[tt.v.ABBREVIATED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f38695a[tt.v.SHORT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f38695a[tt.v.NARROW.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements tt.x {
        private b() {
        }

        private static String F(String str, String str2, String str3, tt.v vVar, tt.n nVar) {
            int i10 = a.f38695a[vVar.ordinal()];
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

        private static String G(String str, tt.n nVar) {
            String str2;
            if (nVar == tt.n.ONE) {
                str2 = "";
            } else {
                str2 = "s";
            }
            return "{0} " + str + str2;
        }

        private static String H(String str, boolean z10, tt.n nVar) {
            String str2;
            if (nVar == tt.n.ONE) {
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

        @Override // tt.x
        public String A(Locale locale, boolean z10, tt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("minute", z10, nVar);
            }
            return I("min", z10);
        }

        @Override // tt.x
        public String B(Locale locale, boolean z10, tt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("second", z10, nVar);
            }
            return I("s", z10);
        }

        @Override // tt.x
        public String C(Locale locale, tt.v vVar, tt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("nanosecond", "nsec", "ns", vVar, nVar);
            }
            return J("ns");
        }

        @Override // tt.x
        public String D(Locale locale, tt.v vVar, tt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("year", "yr", "y", vVar, nVar);
            }
            return J("y");
        }

        @Override // tt.x
        public String c(Locale locale) {
            return "now";
        }

        @Override // tt.x
        public String g(Locale locale, boolean z10, tt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("year", z10, nVar);
            }
            return I("y", z10);
        }

        @Override // tt.x
        public String j(Locale locale, tt.v vVar, tt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("second", "sec", "s", vVar, nVar);
            }
            return J("s");
        }

        @Override // tt.x
        public String k(Locale locale, tt.v vVar, tt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("millisecond", "msec", "ms", vVar, nVar);
            }
            return J("ms");
        }

        @Override // tt.x
        public String l(Locale locale, boolean z10, tt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("month", z10, nVar);
            }
            return I("m", z10);
        }

        @Override // tt.x
        public String m(Locale locale, tt.v vVar, tt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("day", "day", "d", vVar, nVar);
            }
            return J("d");
        }

        @Override // tt.x
        public String n(Locale locale, boolean z10, tt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("week", z10, nVar);
            }
            return I("w", z10);
        }

        @Override // tt.x
        public String p(Locale locale, tt.v vVar, tt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("month", "mth", "m", vVar, nVar);
            }
            return J("m");
        }

        @Override // tt.x
        public String q(Locale locale, boolean z10, tt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("hour", z10, nVar);
            }
            return I("h", z10);
        }

        @Override // tt.x
        public String t(Locale locale, tt.v vVar, tt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("hour", "hr", "h", vVar, nVar);
            }
            return J("h");
        }

        @Override // tt.x
        public String u(Locale locale, tt.v vVar, tt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("microsecond", "µsec", "µs", vVar, nVar);
            }
            return J("µs");
        }

        @Override // tt.x
        public String w(Locale locale, tt.v vVar, tt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("minute", "min", "m", vVar, nVar);
            }
            return J("min");
        }

        @Override // tt.x
        public String x(Locale locale, tt.v vVar, tt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("week", "wk", "w", vVar, nVar);
            }
            return J("w");
        }

        @Override // tt.x
        public String y(Locale locale, tt.v vVar, int i10) {
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

        @Override // tt.x
        public String z(Locale locale, boolean z10, tt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("day", z10, nVar);
            }
            return I("d", z10);
        }

        /* synthetic */ b(a aVar) {
            this();
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r1v13, types: [tt.x] */
    static {
        b bVar = null;
        b bVar2 = new b(null);
        f38681q = bVar2;
        Iterator it = qt.d.c().g(tt.x.class).iterator();
        if (it.hasNext()) {
            bVar = (tt.x) it.next();
        }
        if (bVar != null) {
            bVar2 = bVar;
        }
        f38680p = bVar2;
    }

    private t0(Locale locale) {
        String str;
        String str2;
        String str3;
        String str4;
        y0[] values;
        tt.v[] values2;
        HashMap hashMap;
        HashMap hashMap2;
        tt.n[] values3;
        tt.n[] values4;
        this.f38682a = locale;
        HashMap hashMap3 = new HashMap(10);
        HashMap hashMap4 = new HashMap(10);
        HashMap hashMap5 = new HashMap(10);
        HashMap hashMap6 = new HashMap(10);
        HashMap hashMap7 = new HashMap(10);
        HashMap hashMap8 = new HashMap(10);
        w[] wVarArr = f38679o;
        int length = wVarArr.length;
        int i10 = 0;
        while (i10 < length) {
            w wVar = wVarArr[i10];
            EnumMap enumMap = new EnumMap(tt.v.class);
            tt.v[] values5 = tt.v.values();
            int length2 = values5.length;
            w[] wVarArr2 = wVarArr;
            int i11 = 0;
            while (i11 < length2) {
                int i12 = length;
                tt.v vVar = values5[i11];
                int i13 = i11;
                EnumMap enumMap2 = new EnumMap(tt.n.class);
                tt.n[] values6 = tt.n.values();
                int i14 = i10;
                int i15 = 0;
                for (int length3 = values6.length; i15 < length3; length3 = length3) {
                    int i16 = i15;
                    tt.n nVar = values6[i16];
                    enumMap2.put((EnumMap) nVar, (tt.n) c(locale, wVar, vVar, nVar));
                    i15 = i16 + 1;
                }
                enumMap.put((EnumMap) vVar, (tt.v) Collections.unmodifiableMap(enumMap2));
                i11 = i13 + 1;
                length = i12;
                i10 = i14;
            }
            int i17 = length;
            int i18 = i10;
            hashMap3.put(wVar, Collections.unmodifiableMap(enumMap));
            if (!Character.isDigit(wVar.d())) {
                EnumMap enumMap3 = new EnumMap(tt.n.class);
                tt.n[] values7 = tt.n.values();
                int length4 = values7.length;
                int i19 = 0;
                while (i19 < length4) {
                    tt.n nVar2 = values7[i19];
                    enumMap3.put((EnumMap) nVar2, (tt.n) d(locale, wVar, false, false, nVar2));
                    i19++;
                    hashMap3 = hashMap3;
                }
                hashMap = hashMap3;
                hashMap4.put(wVar, Collections.unmodifiableMap(enumMap3));
                EnumMap enumMap4 = new EnumMap(tt.n.class);
                for (tt.n nVar3 : tt.n.values()) {
                    enumMap4.put((EnumMap) nVar3, (tt.n) d(locale, wVar, false, true, nVar3));
                }
                hashMap6.put(wVar, Collections.unmodifiableMap(enumMap4));
                EnumMap enumMap5 = new EnumMap(tt.n.class);
                tt.n[] values8 = tt.n.values();
                int length5 = values8.length;
                int i20 = 0;
                while (i20 < length5) {
                    tt.n nVar4 = values8[i20];
                    enumMap5.put((EnumMap) nVar4, (tt.n) d(locale, wVar, true, false, nVar4));
                    i20++;
                    hashMap4 = hashMap4;
                }
                hashMap2 = hashMap4;
                hashMap5.put(wVar, Collections.unmodifiableMap(enumMap5));
                EnumMap enumMap6 = new EnumMap(tt.n.class);
                for (tt.n nVar5 : tt.n.values()) {
                    enumMap6.put((EnumMap) nVar5, (tt.n) d(locale, wVar, true, true, nVar5));
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
            EnumMap enumMap7 = new EnumMap(tt.v.class);
            for (tt.v vVar2 : tt.v.values()) {
                enumMap7.put((EnumMap) vVar2, (tt.v) e(locale, vVar2, i21));
            }
            hashMap8.put(valueOf, Collections.unmodifiableMap(enumMap7));
        }
        this.f38683b = Collections.unmodifiableMap(hashMap9);
        this.f38684c = Collections.unmodifiableMap(hashMap10);
        this.f38685d = Collections.unmodifiableMap(hashMap5);
        this.f38686e = Collections.unmodifiableMap(hashMap6);
        this.f38687f = Collections.unmodifiableMap(hashMap7);
        this.f38688g = Collections.unmodifiableMap(hashMap8);
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
        tt.x xVar = f38680p;
        String c10 = xVar.c(locale);
        if (!(xVar instanceof tt.r)) {
            str4 = "";
            str3 = str4;
        } else {
            tt.r rVar = (tt.r) tt.r.class.cast(xVar);
            String b10 = rVar.b(locale);
            try {
                str3 = rVar.v(locale);
                try {
                    str = rVar.i(locale);
                    for (y0 y0Var2 : y0.values()) {
                        enumMap8.put((EnumMap) y0Var2, (y0) rVar.o(y0Var2, locale));
                        enumMap9.put((EnumMap) y0Var2, (y0) rVar.E(y0Var2, locale));
                    }
                    str4 = str;
                    str = b10;
                } catch (MissingResourceException unused2) {
                    str2 = str;
                    str = b10;
                    c10 = f38681q.c(locale);
                    str4 = str2;
                    this.f38689h = c10;
                    this.f38690i = str;
                    this.f38691j = str3;
                    this.f38692k = str4;
                    this.f38693l = Collections.unmodifiableMap(enumMap8);
                    this.f38694m = Collections.unmodifiableMap(enumMap9);
                }
            } catch (MissingResourceException unused3) {
                str2 = "";
                str3 = str2;
            }
        }
        this.f38689h = c10;
        this.f38690i = str;
        this.f38691j = str3;
        this.f38692k = str4;
        this.f38693l = Collections.unmodifiableMap(enumMap8);
        this.f38694m = Collections.unmodifiableMap(enumMap9);
    }

    private static char a(w wVar) {
        char d10 = wVar.d();
        if (wVar == g.f38462e) {
            return 'N';
        }
        return d10;
    }

    private static String c(Locale locale, w wVar, tt.v vVar, tt.n nVar) {
        try {
            return f(f38680p, locale, a(wVar), vVar, nVar);
        } catch (MissingResourceException unused) {
            return f(f38681q, locale, a(wVar), vVar, nVar);
        }
    }

    private static String d(Locale locale, w wVar, boolean z10, boolean z11, tt.n nVar) {
        Locale locale2;
        boolean z12;
        boolean z13;
        tt.n nVar2;
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
            return g(f38680p, locale2, a(wVar), z12, z13, nVar2);
        } catch (MissingResourceException unused2) {
            return g(f38681q, locale2, a(wVar), z12, z13, nVar2);
        }
    }

    private static String e(Locale locale, tt.v vVar, int i10) {
        try {
            return f38680p.y(locale, vVar, i10);
        } catch (MissingResourceException unused) {
            return f38681q.y(locale, vVar, i10);
        }
    }

    private static String f(tt.x xVar, Locale locale, char c10, tt.v vVar, tt.n nVar) {
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
                                                return xVar.w(locale, vVar, nVar);
                                            }
                                            throw new UnsupportedOperationException("Unit-ID: " + c10);
                                        }
                                        return xVar.p(locale, vVar, nVar);
                                    }
                                    return xVar.D(locale, vVar, nVar);
                                }
                                return xVar.x(locale, vVar, nVar);
                            }
                            return xVar.j(locale, vVar, nVar);
                        }
                        return xVar.t(locale, vVar, nVar);
                    }
                    return xVar.m(locale, vVar, nVar);
                }
                return xVar.C(locale, vVar, nVar);
            }
            return xVar.u(locale, vVar, nVar);
        }
        return xVar.k(locale, vVar, nVar);
    }

    private static String g(tt.x xVar, Locale locale, char c10, boolean z10, boolean z11, tt.n nVar) {
        if (z11 && (xVar instanceof tt.r)) {
            tt.r rVar = (tt.r) tt.r.class.cast(xVar);
            if (c10 != 'D') {
                if (c10 != 'H') {
                    if (c10 != 'S') {
                        if (c10 != 'W') {
                            if (c10 != 'Y') {
                                if (c10 != 'M') {
                                    if (c10 == 'N') {
                                        return rVar.f(locale, z10, nVar);
                                    }
                                    throw new UnsupportedOperationException("Unit-ID: " + c10);
                                }
                                return rVar.e(locale, z10, nVar);
                            }
                            return rVar.r(locale, z10, nVar);
                        }
                        return rVar.h(locale, z10, nVar);
                    }
                    return rVar.s(locale, z10, nVar);
                }
                return rVar.a(locale, z10, nVar);
            }
            return rVar.d(locale, z10, nVar);
        } else if (c10 != 'D') {
            if (c10 != 'H') {
                if (c10 != 'S') {
                    if (c10 != 'W') {
                        if (c10 != 'Y') {
                            if (c10 != 'M') {
                                if (c10 == 'N') {
                                    return xVar.A(locale, z10, nVar);
                                }
                                throw new UnsupportedOperationException("Unit-ID: " + c10);
                            }
                            return xVar.l(locale, z10, nVar);
                        }
                        return xVar.g(locale, z10, nVar);
                    }
                    return xVar.n(locale, z10, nVar);
                }
                return xVar.B(locale, z10, nVar);
            }
            return xVar.q(locale, z10, nVar);
        } else {
            return xVar.z(locale, z10, nVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static t0 h(Locale locale) {
        if (locale != null) {
            ConcurrentMap concurrentMap = f38678n;
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
        return this.f38691j;
    }
}
