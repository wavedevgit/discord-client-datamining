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
    private static final ConcurrentMap f39538n = new ConcurrentHashMap();

    /* renamed from: o  reason: collision with root package name */
    private static final w[] f39539o = {f.f39284o, f.f39286q, f.f39287r, f.f39288s, g.f39321d, g.f39322e, g.f39323i, g.f39324o, g.f39325p, g.f39326q};

    /* renamed from: p  reason: collision with root package name */
    private static final st.x f39540p;

    /* renamed from: q  reason: collision with root package name */
    private static final st.x f39541q;

    /* renamed from: a  reason: collision with root package name */
    private final Locale f39542a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f39543b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f39544c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f39545d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f39546e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f39547f;

    /* renamed from: g  reason: collision with root package name */
    private final Map f39548g;

    /* renamed from: h  reason: collision with root package name */
    private final String f39549h;

    /* renamed from: i  reason: collision with root package name */
    private final String f39550i;

    /* renamed from: j  reason: collision with root package name */
    private final String f39551j;

    /* renamed from: k  reason: collision with root package name */
    private final String f39552k;

    /* renamed from: l  reason: collision with root package name */
    private final Map f39553l;

    /* renamed from: m  reason: collision with root package name */
    private final Map f39554m;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f39555a;

        static {
            int[] iArr = new int[st.v.values().length];
            f39555a = iArr;
            try {
                iArr[st.v.WIDE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f39555a[st.v.ABBREVIATED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f39555a[st.v.SHORT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f39555a[st.v.NARROW.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements st.x {
        private b() {
        }

        private static String F(String str, String str2, String str3, st.v vVar, st.n nVar) {
            int i10 = a.f39555a[vVar.ordinal()];
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

        private static String G(String str, st.n nVar) {
            String str2;
            if (nVar == st.n.ONE) {
                str2 = "";
            } else {
                str2 = "s";
            }
            return "{0} " + str + str2;
        }

        private static String H(String str, boolean z10, st.n nVar) {
            String str2;
            if (nVar == st.n.ONE) {
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

        @Override // st.x
        public String D(Locale locale, boolean z10, st.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("year", z10, nVar);
            }
            return I("y", z10);
        }

        @Override // st.x
        public String E(Locale locale, st.v vVar, st.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("millisecond", "msec", "ms", vVar, nVar);
            }
            return J("ms");
        }

        @Override // st.x
        public String a(Locale locale, st.v vVar, int i10) {
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

        @Override // st.x
        public String c(Locale locale) {
            return "now";
        }

        @Override // st.x
        public String d(Locale locale, boolean z10, st.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("day", z10, nVar);
            }
            return I("d", z10);
        }

        @Override // st.x
        public String e(Locale locale, st.v vVar, st.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("minute", "min", "m", vVar, nVar);
            }
            return J("min");
        }

        @Override // st.x
        public String h(Locale locale, st.v vVar, st.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("microsecond", "µsec", "µs", vVar, nVar);
            }
            return J("µs");
        }

        @Override // st.x
        public String i(Locale locale, boolean z10, st.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("second", z10, nVar);
            }
            return I("s", z10);
        }

        @Override // st.x
        public String j(Locale locale, boolean z10, st.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("week", z10, nVar);
            }
            return I("w", z10);
        }

        @Override // st.x
        public String m(Locale locale, boolean z10, st.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("hour", z10, nVar);
            }
            return I("h", z10);
        }

        @Override // st.x
        public String n(Locale locale, st.v vVar, st.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("day", "day", "d", vVar, nVar);
            }
            return J("d");
        }

        @Override // st.x
        public String o(Locale locale, st.v vVar, st.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("hour", "hr", "h", vVar, nVar);
            }
            return J("h");
        }

        @Override // st.x
        public String q(Locale locale, boolean z10, st.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("month", z10, nVar);
            }
            return I("m", z10);
        }

        @Override // st.x
        public String r(Locale locale, st.v vVar, st.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("second", "sec", "s", vVar, nVar);
            }
            return J("s");
        }

        @Override // st.x
        public String s(Locale locale, st.v vVar, st.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("month", "mth", "m", vVar, nVar);
            }
            return J("m");
        }

        @Override // st.x
        public String t(Locale locale, st.v vVar, st.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("nanosecond", "nsec", "ns", vVar, nVar);
            }
            return J("ns");
        }

        @Override // st.x
        public String w(Locale locale, boolean z10, st.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("minute", z10, nVar);
            }
            return I("min", z10);
        }

        @Override // st.x
        public String x(Locale locale, st.v vVar, st.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("year", "yr", "y", vVar, nVar);
            }
            return J("y");
        }

        @Override // st.x
        public String y(Locale locale, st.v vVar, st.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("week", "wk", "w", vVar, nVar);
            }
            return J("w");
        }

        /* synthetic */ b(a aVar) {
            this();
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r1v13, types: [st.x] */
    static {
        b bVar = null;
        b bVar2 = new b(null);
        f39541q = bVar2;
        Iterator it = pt.d.c().g(st.x.class).iterator();
        if (it.hasNext()) {
            bVar = (st.x) it.next();
        }
        if (bVar != null) {
            bVar2 = bVar;
        }
        f39540p = bVar2;
    }

    private t0(Locale locale) {
        String str;
        String str2;
        String str3;
        String str4;
        y0[] values;
        st.v[] values2;
        HashMap hashMap;
        HashMap hashMap2;
        st.n[] values3;
        st.n[] values4;
        this.f39542a = locale;
        HashMap hashMap3 = new HashMap(10);
        HashMap hashMap4 = new HashMap(10);
        HashMap hashMap5 = new HashMap(10);
        HashMap hashMap6 = new HashMap(10);
        HashMap hashMap7 = new HashMap(10);
        HashMap hashMap8 = new HashMap(10);
        w[] wVarArr = f39539o;
        int length = wVarArr.length;
        int i10 = 0;
        while (i10 < length) {
            w wVar = wVarArr[i10];
            EnumMap enumMap = new EnumMap(st.v.class);
            st.v[] values5 = st.v.values();
            int length2 = values5.length;
            w[] wVarArr2 = wVarArr;
            int i11 = 0;
            while (i11 < length2) {
                int i12 = length;
                st.v vVar = values5[i11];
                int i13 = i11;
                EnumMap enumMap2 = new EnumMap(st.n.class);
                st.n[] values6 = st.n.values();
                int i14 = i10;
                int i15 = 0;
                for (int length3 = values6.length; i15 < length3; length3 = length3) {
                    int i16 = i15;
                    st.n nVar = values6[i16];
                    enumMap2.put((EnumMap) nVar, (st.n) c(locale, wVar, vVar, nVar));
                    i15 = i16 + 1;
                }
                enumMap.put((EnumMap) vVar, (st.v) Collections.unmodifiableMap(enumMap2));
                i11 = i13 + 1;
                length = i12;
                i10 = i14;
            }
            int i17 = length;
            int i18 = i10;
            hashMap3.put(wVar, Collections.unmodifiableMap(enumMap));
            if (!Character.isDigit(wVar.d())) {
                EnumMap enumMap3 = new EnumMap(st.n.class);
                st.n[] values7 = st.n.values();
                int length4 = values7.length;
                int i19 = 0;
                while (i19 < length4) {
                    st.n nVar2 = values7[i19];
                    enumMap3.put((EnumMap) nVar2, (st.n) d(locale, wVar, false, false, nVar2));
                    i19++;
                    hashMap3 = hashMap3;
                }
                hashMap = hashMap3;
                hashMap4.put(wVar, Collections.unmodifiableMap(enumMap3));
                EnumMap enumMap4 = new EnumMap(st.n.class);
                for (st.n nVar3 : st.n.values()) {
                    enumMap4.put((EnumMap) nVar3, (st.n) d(locale, wVar, false, true, nVar3));
                }
                hashMap6.put(wVar, Collections.unmodifiableMap(enumMap4));
                EnumMap enumMap5 = new EnumMap(st.n.class);
                st.n[] values8 = st.n.values();
                int length5 = values8.length;
                int i20 = 0;
                while (i20 < length5) {
                    st.n nVar4 = values8[i20];
                    enumMap5.put((EnumMap) nVar4, (st.n) d(locale, wVar, true, false, nVar4));
                    i20++;
                    hashMap4 = hashMap4;
                }
                hashMap2 = hashMap4;
                hashMap5.put(wVar, Collections.unmodifiableMap(enumMap5));
                EnumMap enumMap6 = new EnumMap(st.n.class);
                for (st.n nVar5 : st.n.values()) {
                    enumMap6.put((EnumMap) nVar5, (st.n) d(locale, wVar, true, true, nVar5));
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
            EnumMap enumMap7 = new EnumMap(st.v.class);
            for (st.v vVar2 : st.v.values()) {
                enumMap7.put((EnumMap) vVar2, (st.v) e(locale, vVar2, i21));
            }
            hashMap8.put(valueOf, Collections.unmodifiableMap(enumMap7));
        }
        this.f39543b = Collections.unmodifiableMap(hashMap9);
        this.f39544c = Collections.unmodifiableMap(hashMap10);
        this.f39545d = Collections.unmodifiableMap(hashMap5);
        this.f39546e = Collections.unmodifiableMap(hashMap6);
        this.f39547f = Collections.unmodifiableMap(hashMap7);
        this.f39548g = Collections.unmodifiableMap(hashMap8);
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
        st.x xVar = f39540p;
        String c10 = xVar.c(locale);
        if (!(xVar instanceof st.r)) {
            str4 = "";
            str3 = str4;
        } else {
            st.r rVar = (st.r) st.r.class.cast(xVar);
            String b10 = rVar.b(locale);
            try {
                str3 = rVar.v(locale);
                try {
                    str = rVar.k(locale);
                    for (y0 y0Var2 : y0.values()) {
                        enumMap8.put((EnumMap) y0Var2, (y0) rVar.p(y0Var2, locale));
                        enumMap9.put((EnumMap) y0Var2, (y0) rVar.C(y0Var2, locale));
                    }
                    str4 = str;
                    str = b10;
                } catch (MissingResourceException unused2) {
                    str2 = str;
                    str = b10;
                    c10 = f39541q.c(locale);
                    str4 = str2;
                    this.f39549h = c10;
                    this.f39550i = str;
                    this.f39551j = str3;
                    this.f39552k = str4;
                    this.f39553l = Collections.unmodifiableMap(enumMap8);
                    this.f39554m = Collections.unmodifiableMap(enumMap9);
                }
            } catch (MissingResourceException unused3) {
                str2 = "";
                str3 = str2;
            }
        }
        this.f39549h = c10;
        this.f39550i = str;
        this.f39551j = str3;
        this.f39552k = str4;
        this.f39553l = Collections.unmodifiableMap(enumMap8);
        this.f39554m = Collections.unmodifiableMap(enumMap9);
    }

    private static char a(w wVar) {
        char d10 = wVar.d();
        if (wVar == g.f39322e) {
            return 'N';
        }
        return d10;
    }

    private static String c(Locale locale, w wVar, st.v vVar, st.n nVar) {
        try {
            return f(f39540p, locale, a(wVar), vVar, nVar);
        } catch (MissingResourceException unused) {
            return f(f39541q, locale, a(wVar), vVar, nVar);
        }
    }

    private static String d(Locale locale, w wVar, boolean z10, boolean z11, st.n nVar) {
        Locale locale2;
        boolean z12;
        boolean z13;
        st.n nVar2;
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
            return g(f39540p, locale2, a(wVar), z12, z13, nVar2);
        } catch (MissingResourceException unused2) {
            return g(f39541q, locale2, a(wVar), z12, z13, nVar2);
        }
    }

    private static String e(Locale locale, st.v vVar, int i10) {
        try {
            return f39540p.a(locale, vVar, i10);
        } catch (MissingResourceException unused) {
            return f39541q.a(locale, vVar, i10);
        }
    }

    private static String f(st.x xVar, Locale locale, char c10, st.v vVar, st.n nVar) {
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
                                                return xVar.e(locale, vVar, nVar);
                                            }
                                            throw new UnsupportedOperationException("Unit-ID: " + c10);
                                        }
                                        return xVar.s(locale, vVar, nVar);
                                    }
                                    return xVar.x(locale, vVar, nVar);
                                }
                                return xVar.y(locale, vVar, nVar);
                            }
                            return xVar.r(locale, vVar, nVar);
                        }
                        return xVar.o(locale, vVar, nVar);
                    }
                    return xVar.n(locale, vVar, nVar);
                }
                return xVar.t(locale, vVar, nVar);
            }
            return xVar.h(locale, vVar, nVar);
        }
        return xVar.E(locale, vVar, nVar);
    }

    private static String g(st.x xVar, Locale locale, char c10, boolean z10, boolean z11, st.n nVar) {
        if (z11 && (xVar instanceof st.r)) {
            st.r rVar = (st.r) st.r.class.cast(xVar);
            if (c10 != 'D') {
                if (c10 != 'H') {
                    if (c10 != 'S') {
                        if (c10 != 'W') {
                            if (c10 != 'Y') {
                                if (c10 != 'M') {
                                    if (c10 == 'N') {
                                        return rVar.A(locale, z10, nVar);
                                    }
                                    throw new UnsupportedOperationException("Unit-ID: " + c10);
                                }
                                return rVar.z(locale, z10, nVar);
                            }
                            return rVar.f(locale, z10, nVar);
                        }
                        return rVar.B(locale, z10, nVar);
                    }
                    return rVar.g(locale, z10, nVar);
                }
                return rVar.l(locale, z10, nVar);
            }
            return rVar.u(locale, z10, nVar);
        } else if (c10 != 'D') {
            if (c10 != 'H') {
                if (c10 != 'S') {
                    if (c10 != 'W') {
                        if (c10 != 'Y') {
                            if (c10 != 'M') {
                                if (c10 == 'N') {
                                    return xVar.w(locale, z10, nVar);
                                }
                                throw new UnsupportedOperationException("Unit-ID: " + c10);
                            }
                            return xVar.q(locale, z10, nVar);
                        }
                        return xVar.D(locale, z10, nVar);
                    }
                    return xVar.j(locale, z10, nVar);
                }
                return xVar.i(locale, z10, nVar);
            }
            return xVar.m(locale, z10, nVar);
        } else {
            return xVar.d(locale, z10, nVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static t0 h(Locale locale) {
        if (locale != null) {
            ConcurrentMap concurrentMap = f39538n;
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
        return this.f39551j;
    }
}
