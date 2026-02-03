package mt;

import com.discord.media.engine.MediaEngine;
import com.swmansion.reanimated.BuildConfig;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import mt.c;
import net.time4j.a1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum w {
    CLDR,
    SIMPLE_DATE_FORMAT,
    CLDR_24,
    CLDR_DATE,
    DYNAMIC;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f39431a;

        static {
            int[] iArr = new int[w.values().length];
            f39431a = iArr;
            try {
                iArr[w.CLDR.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f39431a[w.SIMPLE_DATE_FORMAT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f39431a[w.CLDR_24.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f39431a[w.CLDR_DATE.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f39431a[w.DYNAMIC.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
        }
    }

    private static boolean A(char c10) {
        if (c10 == 'L' || c10 == 'M' || c10 == 'U' || c10 == 'W' || c10 == 'g' || c10 == 'r' || c10 == 'w' || c10 == 'y') {
            return true;
        }
        switch (c10) {
            case 'D':
            case 'E':
            case 'F':
            case 'G':
                return true;
            default:
                switch (c10) {
                    case 'c':
                    case 'd':
                    case 'e':
                        return true;
                    default:
                        return false;
                }
        }
    }

    private static boolean B(kt.x xVar) {
        return w(xVar).equals("iso8601");
    }

    private Map D(c.d dVar, kt.x xVar, Locale locale, char c10, int i10) {
        if (c10 != 'B' && c10 != 'O' && c10 != 'Q') {
            if (c10 != 'S') {
                if (c10 != 'Z') {
                    if (c10 != 'e' && c10 != 'g') {
                        if (c10 != 'u') {
                            if (c10 != 'x' && c10 != 'b' && c10 != 'c' && c10 != 'q' && c10 != 'r') {
                                switch (c10) {
                                    case 'U':
                                    case 'V':
                                        break;
                                    case 'W':
                                        dVar.g(a1.j(locale).a(), i10);
                                        break;
                                    case 'X':
                                        if (i10 < 4) {
                                            return p(dVar, xVar, locale, 'X', i10, true);
                                        }
                                        throw new IllegalArgumentException("Too many pattern letters (X): " + i10);
                                    default:
                                        return p(dVar, xVar, locale, c10, i10, true);
                                }
                            }
                        } else {
                            dVar.h(net.time4j.f0.G, i10);
                        }
                    }
                } else {
                    h(dVar, c10, 2, false);
                }
            } else {
                dVar.g(net.time4j.g0.L, i10);
            }
            return Collections.EMPTY_MAP;
        }
        throw new IllegalArgumentException("CLDR pattern symbol not supported in SimpleDateFormat-style: " + c10);
    }

    private static void a(c.d dVar, kt.p pVar, int i10) {
        dVar.u(pVar, i10, 9);
    }

    private static void d(c.d dVar, kt.p pVar) {
        dVar.z(pVar);
    }

    private static void e(c.d dVar, int i10) {
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 == 5) {
                            dVar.b0(lt.a.f37632g, lt.v.NARROW);
                            dVar.z(net.time4j.f0.D);
                            dVar.L();
                            return;
                        }
                        throw new IllegalArgumentException("Too many pattern letters for month: " + i10);
                    }
                    dVar.b0(lt.a.f37632g, lt.v.WIDE);
                    dVar.z(net.time4j.f0.D);
                    dVar.L();
                    return;
                }
                dVar.b0(lt.a.f37632g, lt.v.ABBREVIATED);
                dVar.z(net.time4j.f0.D);
                dVar.L();
                return;
            }
            dVar.g(net.time4j.f0.E, 2);
            return;
        }
        dVar.j(net.time4j.f0.E, 1, 2);
    }

    private static void f(c.d dVar, int i10, lt.t tVar) {
        if (i10 != 1 && i10 != 2) {
            if (i10 != 3) {
                if (i10 != 4) {
                    if (i10 == 5) {
                        dVar.b0(lt.a.f37632g, lt.v.NARROW);
                        dVar.A(tVar);
                        dVar.L();
                        return;
                    }
                    throw new IllegalArgumentException("Too many pattern letters for month: " + i10);
                }
                dVar.b0(lt.a.f37632g, lt.v.WIDE);
                dVar.A(tVar);
                dVar.L();
                return;
            }
            dVar.b0(lt.a.f37632g, lt.v.ABBREVIATED);
            dVar.A(tVar);
            dVar.L();
        } else if (Enum.class.isAssignableFrom(tVar.getType())) {
            kt.p pVar = (kt.p) l(tVar);
            if (i10 == 1) {
                dVar.u(pVar, 1, 2);
            } else if (i10 == 2) {
                dVar.h(pVar, 2);
            }
        } else {
            dVar.a0(nt.a.f42333k, i10);
            dVar.A(tVar);
            dVar.L();
        }
    }

    private static void g(kt.p pVar, char c10, c.d dVar, int i10, boolean z10) {
        if (i10 == 1) {
            dVar.j(pVar, 1, 2);
        } else if (i10 != 2 && !z10) {
            throw new IllegalArgumentException("Too many pattern letters (" + c10 + "): " + i10);
        } else {
            dVar.g(pVar, i10);
        }
    }

    private static void h(c.d dVar, char c10, int i10, boolean z10) {
        String str = "Z";
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 == 5) {
                            lt.e eVar = lt.e.LONG;
                            if (!z10) {
                                str = "+00:00";
                            }
                            dVar.C(eVar, true, Collections.singletonList(str));
                            return;
                        }
                        throw new IllegalArgumentException("Too many pattern letters (" + c10 + "): " + i10);
                    }
                    lt.e eVar2 = lt.e.LONG;
                    if (!z10) {
                        str = "+0000";
                    }
                    dVar.C(eVar2, false, Collections.singletonList(str));
                    return;
                }
                lt.e eVar3 = lt.e.MEDIUM;
                if (!z10) {
                    str = "+00:00";
                }
                dVar.C(eVar3, true, Collections.singletonList(str));
                return;
            }
            lt.e eVar4 = lt.e.MEDIUM;
            if (!z10) {
                str = "+0000";
            }
            dVar.C(eVar4, false, Collections.singletonList(str));
            return;
        }
        lt.e eVar5 = lt.e.SHORT;
        if (!z10) {
            str = "+00";
        }
        dVar.C(eVar5, false, Collections.singletonList(str));
    }

    private static void i(c.d dVar, int i10) {
        if (i10 != 1 && i10 != 2) {
            if (i10 != 3) {
                if (i10 != 4) {
                    if (i10 == 5) {
                        dVar.b0(lt.a.f37632g, lt.v.NARROW);
                        dVar.z(net.time4j.f0.C);
                        dVar.L();
                        return;
                    }
                    throw new IllegalArgumentException("Too many pattern letters for quarter-of-year: " + i10);
                }
                dVar.b0(lt.a.f37632g, lt.v.WIDE);
                dVar.z(net.time4j.f0.C);
                dVar.L();
                return;
            }
            dVar.b0(lt.a.f37632g, lt.v.ABBREVIATED);
            dVar.z(net.time4j.f0.C);
            dVar.L();
            return;
        }
        dVar.h(net.time4j.f0.C, i10);
    }

    private static int k(int i10) {
        if (i10 >= 65 && i10 <= 90) {
            return i10;
        }
        return i10 - 32;
    }

    private Map m(c.d dVar, Locale locale, char c10, int i10) {
        kt.x x10 = x(dVar);
        if (A(c10) && !B(x10)) {
            return v(dVar, x10, c10, i10, locale);
        }
        if (c10 == 'h' && w(x10).equals("ethiopic")) {
            kt.p u10 = u(x10);
            if (u10 != null) {
                g(u10, c10, dVar, i10, false);
                return Collections.EMPTY_MAP;
            }
            throw new IllegalArgumentException("Ethiopian time not available.");
        }
        return p(dVar, x10, locale, c10, i10, false);
    }

    private Map o(c.d dVar, Locale locale, char c10, int i10) {
        if (c10 == 'H') {
            g(net.time4j.g0.G, c10, dVar, i10, false);
            return Collections.EMPTY_MAP;
        }
        return m(dVar, locale, c10, i10);
    }

    private Map p(c.d dVar, kt.x xVar, Locale locale, char c10, int i10, boolean z10) {
        lt.v vVar;
        lt.v vVar2;
        lt.v z11;
        int i11 = 4;
        switch (c10) {
            case 'A':
                dVar.j(net.time4j.g0.O, i10, 8);
                break;
            case 'B':
                dVar.b0(lt.a.f37632g, z(i10));
                dVar.e();
                dVar.L();
                break;
            case 'C':
            case 'I':
            case 'J':
            case 'N':
            case 'P':
            case 'R':
            case 'T':
            case 'U':
            case '[':
            case '\\':
            case ']':
            case '^':
            case '_':
            case '`':
            case 'f':
            case 'i':
            case 'j':
            case 'l':
            case 'n':
            case 'o':
            case 'p':
            case 't':
            case 'v':
            default:
                throw new IllegalArgumentException("Unsupported pattern symbol: " + c10);
            case 'D':
                if (i10 < 3) {
                    dVar.j(net.time4j.f0.H, i10, 3);
                    break;
                } else if (i10 != 3 && !z10) {
                    throw new IllegalArgumentException("Too many pattern letters (D): " + i10);
                } else {
                    dVar.g(net.time4j.f0.H, i10);
                    break;
                }
            case 'E':
                if (i10 <= 3) {
                    vVar = lt.v.ABBREVIATED;
                } else if (i10 != 4 && !z10) {
                    if (i10 == 5) {
                        vVar = lt.v.NARROW;
                    } else if (i10 == 6) {
                        vVar = lt.v.SHORT;
                    } else {
                        throw new IllegalArgumentException("Too many pattern letters (E): " + i10);
                    }
                } else {
                    vVar = lt.v.WIDE;
                }
                dVar.b0(lt.a.f37632g, vVar);
                dVar.z(net.time4j.f0.G);
                dVar.L();
                break;
            case 'F':
                if (i10 != 1 && !z10) {
                    throw new IllegalArgumentException("Too many pattern letters (F): " + i10);
                }
                dVar.g(net.time4j.f0.J, i10);
                break;
            case 'G':
                if (i10 <= 3) {
                    vVar2 = lt.v.ABBREVIATED;
                } else if (i10 != 4 && !z10) {
                    if (i10 == 5) {
                        vVar2 = lt.v.NARROW;
                    } else {
                        throw new IllegalArgumentException("Too many pattern letters (G): " + i10);
                    }
                } else {
                    vVar2 = lt.v.WIDE;
                }
                dVar.b0(lt.a.f37632g, vVar2);
                net.time4j.history.d D = net.time4j.history.d.D(locale);
                dVar.A((lt.t) lt.t.class.cast(D.i()));
                dVar.L();
                HashMap hashMap = new HashMap();
                hashMap.put(net.time4j.f0.A, D.M());
                hashMap.put(net.time4j.f0.D, D.C());
                hashMap.put(net.time4j.f0.E, D.C());
                hashMap.put(net.time4j.f0.F, D.g());
                hashMap.put(net.time4j.f0.H, D.h());
                return hashMap;
            case 'H':
                g(net.time4j.g0.F, c10, dVar, i10, z10);
                break;
            case 'K':
                g(net.time4j.g0.E, c10, dVar, i10, z10);
                break;
            case 'L':
                dVar.b0(lt.a.f37633h, lt.m.STANDALONE);
                if (!z10) {
                    i11 = i10;
                }
                e(dVar, Math.min(i10, i11));
                dVar.L();
                break;
            case 'M':
                if (!z10) {
                    i11 = i10;
                }
                e(dVar, Math.min(i10, i11));
                break;
            case 'O':
                if (i10 == 1) {
                    dVar.x();
                    break;
                } else if (i10 == 4) {
                    dVar.p();
                    break;
                } else {
                    throw new IllegalArgumentException("Count of pattern letters is not 1 or 4: " + i10);
                }
            case BuildConfig.REACT_NATIVE_MINOR_VERSION /* 81 */:
                i(dVar, i10);
                break;
            case 'S':
                dVar.i(net.time4j.g0.N, i10, i10, false);
                break;
            case 'V':
                if (i10 == 2) {
                    try {
                        dVar.B();
                        break;
                    } catch (IllegalStateException e10) {
                        throw new IllegalArgumentException(e10.getMessage());
                    }
                } else {
                    throw new IllegalArgumentException("Count of pattern letters is not 2: " + i10);
                }
            case 'W':
                if (i10 == 1) {
                    dVar.g(a1.j(locale).m(), 1);
                    break;
                } else {
                    throw new IllegalArgumentException("Too many pattern letters (W): " + i10);
                }
            case 'X':
                h(dVar, c10, i10, true);
                break;
            case 'Y':
                if (i10 == 2) {
                    dVar.D(net.time4j.f0.B);
                    break;
                } else {
                    dVar.E(net.time4j.f0.B, i10, false);
                    break;
                }
            case 'Z':
                if (i10 < 4) {
                    dVar.C(lt.e.LONG, false, Collections.singletonList("+0000"));
                    break;
                } else if (i10 == 4) {
                    dVar.p();
                    break;
                } else if (i10 == 5) {
                    dVar.C(lt.e.LONG, true, Collections.singletonList("Z"));
                    break;
                } else {
                    throw new IllegalArgumentException("Too many pattern letters (Z): " + i10);
                }
            case 'a':
                if (z10) {
                    z11 = lt.v.ABBREVIATED;
                } else {
                    z11 = z(i10);
                }
                dVar.b0(lt.a.f37632g, z11);
                dVar.z(net.time4j.g0.B);
                dVar.L();
                if (w(xVar).equals("ethiopic")) {
                    kt.p u10 = u(xVar);
                    if (u10 != null) {
                        HashMap hashMap2 = new HashMap();
                        hashMap2.put(u10, net.time4j.g0.C);
                        return hashMap2;
                    }
                    throw new IllegalArgumentException("Ethiopian time not available.");
                }
                break;
            case 'b':
                dVar.b0(lt.a.f37632g, z(i10));
                dVar.f();
                dVar.L();
                break;
            case 'c':
                if (i10 != 2) {
                    dVar.b0(lt.a.f37633h, lt.m.STANDALONE);
                    if (i10 == 1) {
                        dVar.h(a1.j(locale).i(), 1);
                    } else {
                        p(dVar, xVar, locale, 'E', i10, z10);
                    }
                    dVar.L();
                    break;
                } else {
                    throw new IllegalArgumentException("Invalid pattern count of 2 for symbol 'c'.");
                }
            case 'd':
                g(net.time4j.f0.F, c10, dVar, i10, z10);
                break;
            case 'e':
                if (i10 <= 2) {
                    dVar.h(a1.j(locale).i(), i10);
                    break;
                } else {
                    p(dVar, xVar, locale, 'E', i10, z10);
                    break;
                }
            case 'g':
                dVar.q(kt.a0.MODIFIED_JULIAN_DATE, i10, 18, x.SHOW_WHEN_NEGATIVE);
                break;
            case 'h':
                g(net.time4j.g0.C, c10, dVar, i10, z10);
                break;
            case 'k':
                g(net.time4j.g0.D, c10, dVar, i10, z10);
                break;
            case 'm':
                g(net.time4j.g0.H, c10, dVar, i10, z10);
                break;
            case 'q':
                dVar.b0(lt.a.f37633h, lt.m.STANDALONE);
                i(dVar, i10);
                dVar.L();
                break;
            case MediaEngine.MAX_SUPPORTED_PROTOCOL_VERSION /* 114 */:
                dVar.b0(lt.a.f37637l, lt.j.f37686d);
                dVar.Z(lt.a.f37638m, '0');
                dVar.E(net.time4j.f0.A, i10, true);
                dVar.L();
                dVar.L();
                break;
            case 's':
                g(net.time4j.g0.J, c10, dVar, i10, z10);
                break;
            case 'u':
                dVar.E(net.time4j.f0.A, i10, true);
                break;
            case 'w':
                if (i10 <= 2) {
                    net.time4j.c n10 = a1.j(locale).n();
                    Iterator it = xVar.B().iterator();
                    while (true) {
                        if (it.hasNext()) {
                            kt.p pVar = (kt.p) it.next();
                            if (pVar.d() == c10) {
                                a1 a1Var = a1.f40221x;
                                if (pVar.equals(a1Var.n())) {
                                    n10 = a1Var.n();
                                }
                            }
                        }
                    }
                    g(n10, c10, dVar, i10, z10);
                    break;
                } else {
                    throw new IllegalArgumentException("Too many pattern letters (w): " + i10);
                }
            case 'x':
                h(dVar, c10, i10, false);
                break;
            case 'y':
                if (i10 == 2) {
                    dVar.D(net.time4j.f0.A);
                    break;
                } else {
                    dVar.E(net.time4j.f0.A, i10, false);
                    break;
                }
            case 'z':
                try {
                    if (i10 < 4) {
                        dVar.y();
                        break;
                    } else {
                        if (i10 != 4 && !z10) {
                            throw new IllegalArgumentException("Too many pattern letters (z): " + i10);
                        }
                        dVar.r();
                    }
                } catch (IllegalStateException e11) {
                    throw new IllegalArgumentException(e11.getMessage());
                }
        }
        return Collections.EMPTY_MAP;
    }

    private Map q(c.d dVar, char c10, int i10, Locale locale) {
        boolean z10;
        boolean z11;
        if (c10 >= 'A' && c10 <= 'Z') {
            z10 = true;
        } else {
            z10 = false;
        }
        kt.p s10 = s(x(dVar), locale, c10);
        if (s10 != null) {
            if (z10 && (((z11 = s10 instanceof lt.t)) || Enum.class.isAssignableFrom(s10.getType()))) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 != 3) {
                            if (i10 == 4) {
                                dVar.b0(lt.a.f37632g, lt.v.WIDE);
                            } else {
                                throw new IllegalArgumentException("Illegal count of symbols: " + c10);
                            }
                        } else {
                            dVar.b0(lt.a.f37632g, lt.v.ABBREVIATED);
                        }
                    } else {
                        dVar.b0(lt.a.f37632g, lt.v.SHORT);
                    }
                } else {
                    dVar.b0(lt.a.f37632g, lt.v.NARROW);
                }
                if (z11) {
                    dVar.A((lt.t) l(s10));
                } else {
                    d(dVar, (kt.p) l(s10));
                }
                dVar.L();
            } else if (s10.getType() == Integer.class) {
                dVar.j((kt.p) l(s10), i10, 9);
            } else if (Enum.class.isAssignableFrom(s10.getType())) {
                a(dVar, (kt.p) l(s10), i10);
            } else {
                throw new IllegalArgumentException("Can only handle enum or integer elements in a numerical way: " + s10);
            }
            return Collections.EMPTY_MAP;
        }
        throw new IllegalArgumentException("Cannot resolve symbol: " + c10);
    }

    private static kt.p r(Set set, char c10, String str) {
        char c11;
        if (c10 == 'L') {
            c11 = 'M';
        } else if (c10 == 'c') {
            c11 = 'e';
        } else {
            c11 = c10;
        }
        Iterator it = set.iterator();
        while (it.hasNext()) {
            kt.p pVar = (kt.p) it.next();
            if (pVar.y() && pVar.d() == c11 && (c11 != 'M' || !pVar.name().equals("MONTH_AS_NUMBER"))) {
                return pVar;
            }
        }
        if (c10 == 'y' && str.equals("net.time4j.PlainDate")) {
            return net.time4j.f0.A;
        }
        throw new IllegalArgumentException("Cannot find any chronological date element for symbol " + c10 + " in \"" + str + "\".");
    }

    private static kt.p s(kt.x xVar, Locale locale, int i10) {
        kt.p t10 = t(xVar, locale, i10, false);
        if (t10 == null) {
            return t(xVar, locale, i10, true);
        }
        return t10;
    }

    private static kt.p t(kt.x xVar, Locale locale, int i10, boolean z10) {
        if (z10) {
            i10 = k(i10);
        }
        for (kt.p pVar : xVar.B()) {
            int d10 = pVar.d();
            if (z10) {
                d10 = k(d10);
                continue;
            }
            if (d10 == i10) {
                return pVar;
            }
        }
        for (kt.s sVar : xVar.v()) {
            for (kt.p pVar2 : sVar.c(locale, lt.a.f())) {
                int d11 = pVar2.d();
                if (z10) {
                    d11 = k(d11);
                    continue;
                }
                if (d11 == i10) {
                    return pVar2;
                }
            }
        }
        return null;
    }

    private static kt.p u(kt.x xVar) {
        for (kt.s sVar : xVar.v()) {
            for (kt.p pVar : sVar.c(Locale.ROOT, lt.a.f())) {
                if (pVar.name().equals("ETHIOPIAN_HOUR")) {
                    return (kt.p) l(pVar);
                }
            }
        }
        return null;
    }

    private Map v(c.d dVar, kt.x xVar, char c10, int i10, Locale locale) {
        kt.p pVar;
        lt.v vVar;
        lt.v vVar2;
        lt.v vVar3;
        if (c10 == 'g') {
            dVar.q(kt.a0.MODIFIED_JULIAN_DATE, i10, 18, x.SHOW_WHEN_NEGATIVE);
            return Collections.EMPTY_MAP;
        } else if (c10 == 'G' && xVar == net.time4j.f0.r0()) {
            return p(dVar, xVar, locale, c10, i10, false);
        } else {
            Set y10 = y(xVar, c10, locale);
            String name = dVar.P().o().getName();
            kt.p r10 = r(y10, c10, name);
            lt.t tVar = null;
            if (Integer.class.isAssignableFrom(r10.getType())) {
                if (r10 instanceof nt.a) {
                    tVar = (lt.t) l(r10);
                }
                pVar = (kt.p) l(r10);
            } else if (r10 instanceof lt.t) {
                tVar = (lt.t) l(r10);
                pVar = null;
            } else {
                throw new IllegalStateException("Implementation error: " + r10 + " in \"" + name + "\"");
            }
            if (c10 != 'L') {
                if (c10 != 'M') {
                    if (c10 != 'U') {
                        boolean z10 = true;
                        if (c10 != 'W') {
                            if (c10 != 'r') {
                                if (c10 != 'w') {
                                    if (c10 != 'y') {
                                        switch (c10) {
                                            case 'D':
                                                if (i10 < 3) {
                                                    dVar.j(pVar, i10, 3);
                                                    break;
                                                } else if (i10 == 3) {
                                                    dVar.g(pVar, i10);
                                                    break;
                                                } else {
                                                    throw new IllegalArgumentException("Too many pattern letters (D): " + i10);
                                                }
                                            case 'E':
                                                if (i10 <= 3) {
                                                    vVar2 = lt.v.ABBREVIATED;
                                                } else if (i10 == 4) {
                                                    vVar2 = lt.v.WIDE;
                                                } else if (i10 == 5) {
                                                    vVar2 = lt.v.NARROW;
                                                } else if (i10 == 6) {
                                                    vVar2 = lt.v.SHORT;
                                                } else {
                                                    throw new IllegalArgumentException("Too many pattern letters (E): " + i10);
                                                }
                                                dVar.b0(lt.a.f37632g, vVar2);
                                                dVar.A(tVar);
                                                dVar.L();
                                                break;
                                            case 'F':
                                                if (i10 == 1) {
                                                    dVar.g(pVar, i10);
                                                    break;
                                                } else {
                                                    throw new IllegalArgumentException("Too many pattern letters (F): " + i10);
                                                }
                                            case 'G':
                                                if (i10 <= 3) {
                                                    vVar3 = lt.v.ABBREVIATED;
                                                } else if (i10 == 4) {
                                                    vVar3 = lt.v.WIDE;
                                                } else if (i10 == 5) {
                                                    vVar3 = lt.v.NARROW;
                                                } else {
                                                    throw new IllegalArgumentException("Too many pattern letters (G): " + i10);
                                                }
                                                dVar.b0(lt.a.f37632g, vVar3);
                                                dVar.A(tVar);
                                                dVar.L();
                                                break;
                                            default:
                                                switch (c10) {
                                                    case 'c':
                                                        if (i10 != 2) {
                                                            dVar.b0(lt.a.f37633h, lt.m.STANDALONE);
                                                            if (i10 == 1) {
                                                                dVar.h((kt.p) l(r10), 1);
                                                            } else {
                                                                v(dVar, xVar, 'E', i10, locale);
                                                            }
                                                            dVar.L();
                                                            break;
                                                        } else {
                                                            throw new IllegalArgumentException("Invalid pattern count of 2 for symbol 'c'.");
                                                        }
                                                    case 'd':
                                                        if (pVar == null) {
                                                            if (i10 <= 2) {
                                                                dVar.a0(nt.a.f42333k, i10);
                                                                dVar.A(tVar);
                                                                dVar.L();
                                                                break;
                                                            } else {
                                                                throw new IllegalArgumentException("Too many pattern letters for day-of-month: " + i10);
                                                            }
                                                        } else {
                                                            g(pVar, c10, dVar, i10, false);
                                                            break;
                                                        }
                                                    case 'e':
                                                        if (i10 <= 2) {
                                                            dVar.h((kt.p) l(r10), i10);
                                                            break;
                                                        } else {
                                                            v(dVar, xVar, 'E', i10, locale);
                                                            break;
                                                        }
                                                    default:
                                                        throw new IllegalArgumentException("Unsupported pattern symbol: " + c10);
                                                }
                                        }
                                    } else {
                                        if (locale.getLanguage().equals("am") && w(xVar).equals("ethiopic")) {
                                            dVar.b0(lt.a.f37637l, lt.j.f37692r);
                                        } else {
                                            z10 = false;
                                        }
                                        if (i10 == 2) {
                                            dVar.D(pVar);
                                        } else {
                                            dVar.E(pVar, i10, false);
                                        }
                                        if (z10) {
                                            dVar.L();
                                        }
                                    }
                                } else {
                                    g(pVar, c10, dVar, i10, false);
                                }
                            } else {
                                dVar.b0(lt.a.f37637l, lt.j.f37686d);
                                dVar.Z(lt.a.f37638m, '0');
                                dVar.E(pVar, i10, true);
                                dVar.L();
                                dVar.L();
                            }
                        } else if (i10 == 1) {
                            dVar.g(pVar, 1);
                        } else {
                            throw new IllegalArgumentException("Too many pattern letters (W): " + i10);
                        }
                    } else if (tVar != null) {
                        if (i10 <= 3) {
                            vVar = lt.v.ABBREVIATED;
                        } else if (i10 == 4) {
                            vVar = lt.v.WIDE;
                        } else if (i10 == 5) {
                            vVar = lt.v.NARROW;
                        } else {
                            throw new IllegalArgumentException("Too many pattern letters (U): " + i10);
                        }
                        dVar.b0(lt.a.f37632g, vVar);
                        dVar.A(tVar);
                        dVar.L();
                    } else {
                        throw new IllegalStateException("Implementation error: " + r10 + " in \"" + name + "\"");
                    }
                } else {
                    f(dVar, i10, tVar);
                }
            } else {
                dVar.b0(lt.a.f37633h, lt.m.STANDALONE);
                f(dVar, i10, tVar);
                dVar.L();
            }
            return Collections.EMPTY_MAP;
        }
    }

    private static String w(kt.x xVar) {
        lt.c cVar = (lt.c) xVar.o().getAnnotation(lt.c.class);
        if (cVar == null) {
            return "iso8601";
        }
        return cVar.value();
    }

    private static kt.x x(c.d dVar) {
        return dVar.P();
    }

    private static Set y(kt.x xVar, char c10, Locale locale) {
        if (c10 != 'w' && c10 != 'W' && c10 != 'e' && c10 != 'c') {
            return xVar.B();
        }
        for (kt.s sVar : xVar.v()) {
            for (kt.p pVar : sVar.c(locale, lt.a.f())) {
                if (((c10 == 'e' || c10 == 'c') && pVar.name().equals("LOCAL_DAY_OF_WEEK")) || ((c10 == 'w' && pVar.name().equals("WEEK_OF_YEAR")) || (c10 == 'W' && pVar.name().equals("WEEK_OF_MONTH")))) {
                    HashSet hashSet = new HashSet();
                    hashSet.add(pVar);
                    return hashSet;
                }
            }
        }
        return Collections.EMPTY_SET;
    }

    private static lt.v z(int i10) {
        if (i10 <= 3) {
            return lt.v.ABBREVIATED;
        }
        if (i10 == 4) {
            return lt.v.WIDE;
        }
        if (i10 == 5) {
            return lt.v.NARROW;
        }
        throw new IllegalArgumentException("Too many pattern letters: " + i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Map C(c.d dVar, Locale locale, char c10, int i10) {
        kt.x x10 = x(dVar);
        int i11 = a.f39431a[ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 != 3) {
                    if (i11 != 4) {
                        if (i11 == 5) {
                            return q(dVar, c10, i10, locale);
                        }
                        throw new UnsupportedOperationException(name());
                    }
                    Class o10 = x10.o();
                    if (!kt.m.class.isAssignableFrom(o10) && !kt.l.class.isAssignableFrom(o10)) {
                        throw new IllegalArgumentException("No calendar chronology.");
                    }
                    return v(dVar, x10, c10, i10, locale);
                }
                return o(dVar, locale, c10, i10);
            }
            return D(dVar, x10, locale, c10, i10);
        }
        return m(dVar, locale, c10, i10);
    }

    private static Object l(Object obj) {
        return obj;
    }
}
