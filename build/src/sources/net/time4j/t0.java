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
    private static final ConcurrentMap f40723n = new ConcurrentHashMap();

    /* renamed from: o  reason: collision with root package name */
    private static final w[] f40724o = {f.f40469o, f.f40471q, f.f40472r, f.f40473s, g.f40506d, g.f40507e, g.f40508i, g.f40509o, g.f40510p, g.f40511q};

    /* renamed from: p  reason: collision with root package name */
    private static final nt.x f40725p;

    /* renamed from: q  reason: collision with root package name */
    private static final nt.x f40726q;

    /* renamed from: a  reason: collision with root package name */
    private final Locale f40727a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f40728b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f40729c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f40730d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f40731e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f40732f;

    /* renamed from: g  reason: collision with root package name */
    private final Map f40733g;

    /* renamed from: h  reason: collision with root package name */
    private final String f40734h;

    /* renamed from: i  reason: collision with root package name */
    private final String f40735i;

    /* renamed from: j  reason: collision with root package name */
    private final String f40736j;

    /* renamed from: k  reason: collision with root package name */
    private final String f40737k;

    /* renamed from: l  reason: collision with root package name */
    private final Map f40738l;

    /* renamed from: m  reason: collision with root package name */
    private final Map f40739m;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f40740a;

        static {
            int[] iArr = new int[nt.v.values().length];
            f40740a = iArr;
            try {
                iArr[nt.v.WIDE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f40740a[nt.v.ABBREVIATED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f40740a[nt.v.SHORT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f40740a[nt.v.NARROW.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements nt.x {
        private b() {
        }

        private static String F(String str, String str2, String str3, nt.v vVar, nt.n nVar) {
            int i10 = a.f40740a[vVar.ordinal()];
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

        private static String G(String str, nt.n nVar) {
            String str2;
            if (nVar == nt.n.ONE) {
                str2 = "";
            } else {
                str2 = "s";
            }
            return "{0} " + str + str2;
        }

        private static String H(String str, boolean z10, nt.n nVar) {
            String str2;
            if (nVar == nt.n.ONE) {
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

        @Override // nt.x
        public String A(Locale locale, boolean z10, nt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("month", z10, nVar);
            }
            return I("m", z10);
        }

        @Override // nt.x
        public String B(Locale locale, nt.v vVar, nt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("nanosecond", "nsec", "ns", vVar, nVar);
            }
            return J("ns");
        }

        @Override // nt.x
        public String D(Locale locale, nt.v vVar, nt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("week", "wk", "w", vVar, nVar);
            }
            return J("w");
        }

        @Override // nt.x
        public String a(Locale locale, boolean z10, nt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("year", z10, nVar);
            }
            return I("y", z10);
        }

        @Override // nt.x
        public String c(Locale locale, nt.v vVar, nt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("hour", "hr", "h", vVar, nVar);
            }
            return J("h");
        }

        @Override // nt.x
        public String e(Locale locale) {
            return "now";
        }

        @Override // nt.x
        public String g(Locale locale, nt.v vVar, nt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("microsecond", "µsec", "µs", vVar, nVar);
            }
            return J("µs");
        }

        @Override // nt.x
        public String i(Locale locale, nt.v vVar, int i10) {
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

        @Override // nt.x
        public String j(Locale locale, nt.v vVar, nt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("minute", "min", "m", vVar, nVar);
            }
            return J("min");
        }

        @Override // nt.x
        public String k(Locale locale, boolean z10, nt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("second", z10, nVar);
            }
            return I("s", z10);
        }

        @Override // nt.x
        public String m(Locale locale, nt.v vVar, nt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("month", "mth", "m", vVar, nVar);
            }
            return J("m");
        }

        @Override // nt.x
        public String n(Locale locale, nt.v vVar, nt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("second", "sec", "s", vVar, nVar);
            }
            return J("s");
        }

        @Override // nt.x
        public String r(Locale locale, nt.v vVar, nt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("day", "day", "d", vVar, nVar);
            }
            return J("d");
        }

        @Override // nt.x
        public String s(Locale locale, boolean z10, nt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("minute", z10, nVar);
            }
            return I("min", z10);
        }

        @Override // nt.x
        public String t(Locale locale, boolean z10, nt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("week", z10, nVar);
            }
            return I("w", z10);
        }

        @Override // nt.x
        public String v(Locale locale, boolean z10, nt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("day", z10, nVar);
            }
            return I("d", z10);
        }

        @Override // nt.x
        public String x(Locale locale, boolean z10, nt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return H("hour", z10, nVar);
            }
            return I("h", z10);
        }

        @Override // nt.x
        public String y(Locale locale, nt.v vVar, nt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("year", "yr", "y", vVar, nVar);
            }
            return J("y");
        }

        @Override // nt.x
        public String z(Locale locale, nt.v vVar, nt.n nVar) {
            if (locale.getLanguage().equals("en")) {
                return F("millisecond", "msec", "ms", vVar, nVar);
            }
            return J("ms");
        }

        /* synthetic */ b(a aVar) {
            this();
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r1v13, types: [nt.x] */
    static {
        b bVar = null;
        b bVar2 = new b(null);
        f40726q = bVar2;
        Iterator it = kt.d.c().g(nt.x.class).iterator();
        if (it.hasNext()) {
            bVar = (nt.x) it.next();
        }
        if (bVar != null) {
            bVar2 = bVar;
        }
        f40725p = bVar2;
    }

    private t0(Locale locale) {
        String str;
        String str2;
        String str3;
        String str4;
        y0[] values;
        nt.v[] values2;
        HashMap hashMap;
        HashMap hashMap2;
        nt.n[] values3;
        nt.n[] values4;
        this.f40727a = locale;
        HashMap hashMap3 = new HashMap(10);
        HashMap hashMap4 = new HashMap(10);
        HashMap hashMap5 = new HashMap(10);
        HashMap hashMap6 = new HashMap(10);
        HashMap hashMap7 = new HashMap(10);
        HashMap hashMap8 = new HashMap(10);
        w[] wVarArr = f40724o;
        int length = wVarArr.length;
        int i10 = 0;
        while (i10 < length) {
            w wVar = wVarArr[i10];
            EnumMap enumMap = new EnumMap(nt.v.class);
            nt.v[] values5 = nt.v.values();
            int length2 = values5.length;
            w[] wVarArr2 = wVarArr;
            int i11 = 0;
            while (i11 < length2) {
                int i12 = length;
                nt.v vVar = values5[i11];
                int i13 = i11;
                EnumMap enumMap2 = new EnumMap(nt.n.class);
                nt.n[] values6 = nt.n.values();
                int i14 = i10;
                int i15 = 0;
                for (int length3 = values6.length; i15 < length3; length3 = length3) {
                    int i16 = i15;
                    nt.n nVar = values6[i16];
                    enumMap2.put((EnumMap) nVar, (nt.n) c(locale, wVar, vVar, nVar));
                    i15 = i16 + 1;
                }
                enumMap.put((EnumMap) vVar, (nt.v) Collections.unmodifiableMap(enumMap2));
                i11 = i13 + 1;
                length = i12;
                i10 = i14;
            }
            int i17 = length;
            int i18 = i10;
            hashMap3.put(wVar, Collections.unmodifiableMap(enumMap));
            if (!Character.isDigit(wVar.d())) {
                EnumMap enumMap3 = new EnumMap(nt.n.class);
                nt.n[] values7 = nt.n.values();
                int length4 = values7.length;
                int i19 = 0;
                while (i19 < length4) {
                    nt.n nVar2 = values7[i19];
                    enumMap3.put((EnumMap) nVar2, (nt.n) d(locale, wVar, false, false, nVar2));
                    i19++;
                    hashMap3 = hashMap3;
                }
                hashMap = hashMap3;
                hashMap4.put(wVar, Collections.unmodifiableMap(enumMap3));
                EnumMap enumMap4 = new EnumMap(nt.n.class);
                for (nt.n nVar3 : nt.n.values()) {
                    enumMap4.put((EnumMap) nVar3, (nt.n) d(locale, wVar, false, true, nVar3));
                }
                hashMap6.put(wVar, Collections.unmodifiableMap(enumMap4));
                EnumMap enumMap5 = new EnumMap(nt.n.class);
                nt.n[] values8 = nt.n.values();
                int length5 = values8.length;
                int i20 = 0;
                while (i20 < length5) {
                    nt.n nVar4 = values8[i20];
                    enumMap5.put((EnumMap) nVar4, (nt.n) d(locale, wVar, true, false, nVar4));
                    i20++;
                    hashMap4 = hashMap4;
                }
                hashMap2 = hashMap4;
                hashMap5.put(wVar, Collections.unmodifiableMap(enumMap5));
                EnumMap enumMap6 = new EnumMap(nt.n.class);
                for (nt.n nVar5 : nt.n.values()) {
                    enumMap6.put((EnumMap) nVar5, (nt.n) d(locale, wVar, true, true, nVar5));
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
            EnumMap enumMap7 = new EnumMap(nt.v.class);
            for (nt.v vVar2 : nt.v.values()) {
                enumMap7.put((EnumMap) vVar2, (nt.v) e(locale, vVar2, i21));
            }
            hashMap8.put(valueOf, Collections.unmodifiableMap(enumMap7));
        }
        this.f40728b = Collections.unmodifiableMap(hashMap9);
        this.f40729c = Collections.unmodifiableMap(hashMap10);
        this.f40730d = Collections.unmodifiableMap(hashMap5);
        this.f40731e = Collections.unmodifiableMap(hashMap6);
        this.f40732f = Collections.unmodifiableMap(hashMap7);
        this.f40733g = Collections.unmodifiableMap(hashMap8);
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
        nt.x xVar = f40725p;
        String e10 = xVar.e(locale);
        if (!(xVar instanceof nt.r)) {
            str4 = "";
            str3 = str4;
        } else {
            nt.r rVar = (nt.r) nt.r.class.cast(xVar);
            String d10 = rVar.d(locale);
            try {
                str3 = rVar.w(locale);
                try {
                    str = rVar.h(locale);
                    for (y0 y0Var2 : y0.values()) {
                        enumMap8.put((EnumMap) y0Var2, (y0) rVar.p(y0Var2, locale));
                        enumMap9.put((EnumMap) y0Var2, (y0) rVar.C(y0Var2, locale));
                    }
                    str4 = str;
                    str = d10;
                } catch (MissingResourceException unused2) {
                    str2 = str;
                    str = d10;
                    e10 = f40726q.e(locale);
                    str4 = str2;
                    this.f40734h = e10;
                    this.f40735i = str;
                    this.f40736j = str3;
                    this.f40737k = str4;
                    this.f40738l = Collections.unmodifiableMap(enumMap8);
                    this.f40739m = Collections.unmodifiableMap(enumMap9);
                }
            } catch (MissingResourceException unused3) {
                str2 = "";
                str3 = str2;
            }
        }
        this.f40734h = e10;
        this.f40735i = str;
        this.f40736j = str3;
        this.f40737k = str4;
        this.f40738l = Collections.unmodifiableMap(enumMap8);
        this.f40739m = Collections.unmodifiableMap(enumMap9);
    }

    private static char a(w wVar) {
        char d10 = wVar.d();
        if (wVar == g.f40507e) {
            return 'N';
        }
        return d10;
    }

    private static String c(Locale locale, w wVar, nt.v vVar, nt.n nVar) {
        try {
            return f(f40725p, locale, a(wVar), vVar, nVar);
        } catch (MissingResourceException unused) {
            return f(f40726q, locale, a(wVar), vVar, nVar);
        }
    }

    private static String d(Locale locale, w wVar, boolean z10, boolean z11, nt.n nVar) {
        Locale locale2;
        boolean z12;
        boolean z13;
        nt.n nVar2;
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
            return g(f40725p, locale2, a(wVar), z12, z13, nVar2);
        } catch (MissingResourceException unused2) {
            return g(f40726q, locale2, a(wVar), z12, z13, nVar2);
        }
    }

    private static String e(Locale locale, nt.v vVar, int i10) {
        try {
            return f40725p.i(locale, vVar, i10);
        } catch (MissingResourceException unused) {
            return f40726q.i(locale, vVar, i10);
        }
    }

    private static String f(nt.x xVar, Locale locale, char c10, nt.v vVar, nt.n nVar) {
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
                                                return xVar.j(locale, vVar, nVar);
                                            }
                                            throw new UnsupportedOperationException("Unit-ID: " + c10);
                                        }
                                        return xVar.m(locale, vVar, nVar);
                                    }
                                    return xVar.y(locale, vVar, nVar);
                                }
                                return xVar.D(locale, vVar, nVar);
                            }
                            return xVar.n(locale, vVar, nVar);
                        }
                        return xVar.c(locale, vVar, nVar);
                    }
                    return xVar.r(locale, vVar, nVar);
                }
                return xVar.B(locale, vVar, nVar);
            }
            return xVar.g(locale, vVar, nVar);
        }
        return xVar.z(locale, vVar, nVar);
    }

    private static String g(nt.x xVar, Locale locale, char c10, boolean z10, boolean z11, nt.n nVar) {
        if (z11 && (xVar instanceof nt.r)) {
            nt.r rVar = (nt.r) nt.r.class.cast(xVar);
            if (c10 != 'D') {
                if (c10 != 'H') {
                    if (c10 != 'S') {
                        if (c10 != 'W') {
                            if (c10 != 'Y') {
                                if (c10 != 'M') {
                                    if (c10 == 'N') {
                                        return rVar.o(locale, z10, nVar);
                                    }
                                    throw new UnsupportedOperationException("Unit-ID: " + c10);
                                }
                                return rVar.l(locale, z10, nVar);
                            }
                            return rVar.u(locale, z10, nVar);
                        }
                        return rVar.f(locale, z10, nVar);
                    }
                    return rVar.q(locale, z10, nVar);
                }
                return rVar.E(locale, z10, nVar);
            }
            return rVar.b(locale, z10, nVar);
        } else if (c10 != 'D') {
            if (c10 != 'H') {
                if (c10 != 'S') {
                    if (c10 != 'W') {
                        if (c10 != 'Y') {
                            if (c10 != 'M') {
                                if (c10 == 'N') {
                                    return xVar.s(locale, z10, nVar);
                                }
                                throw new UnsupportedOperationException("Unit-ID: " + c10);
                            }
                            return xVar.A(locale, z10, nVar);
                        }
                        return xVar.a(locale, z10, nVar);
                    }
                    return xVar.t(locale, z10, nVar);
                }
                return xVar.k(locale, z10, nVar);
            }
            return xVar.x(locale, z10, nVar);
        } else {
            return xVar.v(locale, z10, nVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static t0 h(Locale locale) {
        if (locale != null) {
            ConcurrentMap concurrentMap = f40723n;
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
        return this.f40736j;
    }
}
