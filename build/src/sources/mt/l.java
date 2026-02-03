package mt;

import java.text.ParseException;
import java.util.Collections;
import java.util.Locale;
import mt.c;
import net.time4j.a1;
import net.time4j.i0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class l {

    /* renamed from: a  reason: collision with root package name */
    private static final char f39335a;

    /* renamed from: b  reason: collision with root package name */
    private static final c f39336b;

    /* renamed from: c  reason: collision with root package name */
    private static final c f39337c;

    /* renamed from: d  reason: collision with root package name */
    private static final kt.n f39338d;

    /* renamed from: e  reason: collision with root package name */
    private static final kt.n f39339e;

    /* renamed from: f  reason: collision with root package name */
    public static final mt.c f39340f;

    /* renamed from: g  reason: collision with root package name */
    public static final mt.c f39341g;

    /* renamed from: h  reason: collision with root package name */
    public static final mt.c f39342h;

    /* renamed from: i  reason: collision with root package name */
    public static final mt.c f39343i;

    /* renamed from: j  reason: collision with root package name */
    public static final mt.c f39344j;

    /* renamed from: k  reason: collision with root package name */
    public static final mt.c f39345k;

    /* renamed from: l  reason: collision with root package name */
    public static final mt.c f39346l;

    /* renamed from: m  reason: collision with root package name */
    public static final mt.c f39347m;

    /* renamed from: n  reason: collision with root package name */
    public static final mt.c f39348n;

    /* renamed from: o  reason: collision with root package name */
    public static final mt.c f39349o;

    /* renamed from: p  reason: collision with root package name */
    public static final mt.c f39350p;

    /* renamed from: q  reason: collision with root package name */
    public static final mt.c f39351q;

    /* renamed from: r  reason: collision with root package name */
    public static final mt.c f39352r;

    /* renamed from: s  reason: collision with root package name */
    public static final mt.c f39353s;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f39354a;

        a(boolean z10) {
            this.f39354a = z10;
        }

        @Override // mt.e
        /* renamed from: a */
        public Object b(net.time4j.f0 f0Var, Appendable appendable, kt.d dVar, kt.t tVar) {
            mt.c cVar;
            if (this.f39354a) {
                cVar = l.f39341g;
            } else {
                cVar = l.f39340f;
            }
            cVar.J(f0Var, appendable, dVar);
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements mt.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f39355a;

        b(boolean z10) {
            this.f39355a = z10;
        }

        @Override // mt.d
        /* renamed from: b */
        public net.time4j.f0 a(CharSequence charSequence, s sVar, kt.d dVar) {
            int length = charSequence.length();
            int f10 = sVar.f();
            int i10 = length - f10;
            int i11 = 0;
            for (int i12 = f10 + 1; i12 < length; i12++) {
                char charAt = charSequence.charAt(i12);
                if (charAt != '-') {
                    if (charAt != '/' && charAt != 'T') {
                        if (charAt == 'W') {
                            if (this.f39355a) {
                                return (net.time4j.f0) l.f39345k.E(charSequence, sVar);
                            }
                            return (net.time4j.f0) l.f39344j.E(charSequence, sVar);
                        }
                    } else {
                        i10 = i12 - f10;
                        break;
                    }
                } else {
                    i11++;
                }
            }
            if (this.f39355a) {
                if (i11 == 1) {
                    return (net.time4j.f0) l.f39343i.E(charSequence, sVar);
                }
                return (net.time4j.f0) l.f39341g.E(charSequence, sVar);
            }
            int i13 = i10 - 4;
            char charAt2 = charSequence.charAt(f10);
            if (charAt2 == '+' || charAt2 == '-') {
                i13 = i10 - 6;
            }
            if (i13 == 3) {
                return (net.time4j.f0) l.f39342h.E(charSequence, sVar);
            }
            return (net.time4j.f0) l.f39340f.E(charSequence, sVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class c implements kt.n {

        /* renamed from: d  reason: collision with root package name */
        private final kt.p f39356d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements kt.n {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ c f39357d;

            a(c cVar) {
                this.f39357d = cVar;
            }

            @Override // kt.n
            /* renamed from: a */
            public boolean test(kt.o oVar) {
                if (!c.this.test(oVar) && !this.f39357d.test(oVar)) {
                    return false;
                }
                return true;
            }
        }

        c(kt.p pVar) {
            this.f39356d = pVar;
        }

        kt.n a(c cVar) {
            return new a(cVar);
        }

        @Override // kt.n
        /* renamed from: b */
        public boolean test(kt.o oVar) {
            if (oVar.t(this.f39356d) > 0) {
                return true;
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d implements kt.n {
        private d() {
        }

        @Override // kt.n
        /* renamed from: a */
        public boolean test(Character ch2) {
            if (ch2.charValue() == 'T') {
                return true;
            }
            return false;
        }

        /* synthetic */ d(a aVar) {
            this();
        }
    }

    static {
        char c10;
        if (Boolean.getBoolean("net.time4j.format.iso.decimal.dot")) {
            c10 = '.';
        } else {
            c10 = ',';
        }
        f39335a = c10;
        c cVar = new c(net.time4j.g0.J);
        f39336b = cVar;
        c cVar2 = new c(net.time4j.g0.N);
        f39337c = cVar2;
        f39338d = cVar.a(cVar2);
        f39339e = new d(null);
        f39340f = b(false);
        f39341g = b(true);
        f39342h = h(false);
        f39343i = h(true);
        f39344j = m(false);
        f39345k = m(true);
        f39346l = c(false);
        f39347m = c(true);
        f39348n = k(false);
        f39349o = k(true);
        f39350p = l(false);
        f39351q = l(true);
        f39352r = g(false);
        f39353s = g(true);
    }

    private static void a(c.d dVar, boolean z10) {
        dVar.b0(lt.a.f37637l, lt.j.f37686d);
        dVar.Z(lt.a.f37638m, '0');
        dVar.g(net.time4j.g0.G, 2);
        dVar.X();
        if (z10) {
            dVar.l(':');
        }
        dVar.g(net.time4j.g0.H, 2);
        dVar.Y(f39338d);
        if (z10) {
            dVar.l(':');
        }
        dVar.g(net.time4j.g0.J, 2);
        dVar.Y(f39337c);
        if (f39335a == ',') {
            dVar.m(',', '.');
        } else {
            dVar.m('.', ',');
        }
        dVar.i(net.time4j.g0.N, 0, 9, false);
        for (int i10 = 0; i10 < 5; i10++) {
            dVar.L();
        }
    }

    private static mt.c b(boolean z10) {
        c.d k10 = mt.c.N(net.time4j.f0.class, Locale.ROOT).b0(lt.a.f37637l, lt.j.f37686d).Z(lt.a.f37638m, '0').k(net.time4j.f0.A, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
        if (z10) {
            k10.l('-');
        }
        k10.g(net.time4j.f0.E, 2);
        if (z10) {
            k10.l('-');
        }
        return k10.g(net.time4j.f0.F, 2).L().L().F().T(lt.g.STRICT);
    }

    private static mt.c c(boolean z10) {
        c.d N = mt.c.N(net.time4j.f0.class, Locale.ROOT);
        N.d(net.time4j.f0.f40452z, e(z10), d(z10));
        return N.F().T(lt.g.STRICT);
    }

    private static mt.d d(boolean z10) {
        return new b(z10);
    }

    private static e e(boolean z10) {
        return new a(z10);
    }

    private static mt.c f(lt.e eVar, boolean z10) {
        c.d N = mt.c.N(net.time4j.a0.class, Locale.ROOT);
        N.d(net.time4j.f0.f40452z, e(z10), d(z10));
        N.l('T');
        a(N, z10);
        N.C(eVar, z10, Collections.singletonList("Z"));
        return N.F();
    }

    private static mt.c g(boolean z10) {
        c.d N = mt.c.N(net.time4j.a0.class, Locale.ROOT);
        N.d(net.time4j.a0.T().M(), f(lt.e.MEDIUM, z10), f(lt.e.SHORT, z10));
        return N.F().T(lt.g.STRICT).V(net.time4j.tz.p.f40787v);
    }

    private static mt.c h(boolean z10) {
        c.d k10 = mt.c.N(net.time4j.f0.class, Locale.ROOT).b0(lt.a.f37637l, lt.j.f37686d).Z(lt.a.f37638m, '0').k(net.time4j.f0.A, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
        if (z10) {
            k10.l('-');
        }
        return k10.g(net.time4j.f0.H, 3).L().L().F().T(lt.g.STRICT);
    }

    public static net.time4j.f0 i(CharSequence charSequence) {
        s sVar = new s();
        net.time4j.f0 j10 = j(charSequence, sVar);
        if (j10 != null && !sVar.i()) {
            if (sVar.f() >= charSequence.length()) {
                return j10;
            }
            throw new ParseException("Trailing characters found: " + ((Object) charSequence), sVar.f());
        }
        throw new ParseException(sVar.d(), sVar.c());
    }

    public static net.time4j.f0 j(CharSequence charSequence, s sVar) {
        int length = charSequence.length();
        int f10 = sVar.f();
        int i10 = length - f10;
        if (i10 < 7) {
            sVar.k(length, "Too short to be compatible with ISO-8601: " + ((Object) charSequence.subSequence(f10, length)));
            return null;
        }
        int i11 = 0;
        for (int i12 = f10 + 1; i12 < length; i12++) {
            char charAt = charSequence.charAt(i12);
            if (charAt != '-') {
                if (charAt != '/' && charAt != 'T') {
                    if (charAt == 'W') {
                        if (i11 > 0) {
                            return (net.time4j.f0) f39345k.E(charSequence, sVar);
                        }
                        return (net.time4j.f0) f39344j.E(charSequence, sVar);
                    }
                } else {
                    i10 = i12 - f10;
                    break;
                }
            } else {
                i11++;
            }
        }
        if (i11 == 0) {
            int i13 = i10 - 4;
            char charAt2 = charSequence.charAt(f10);
            if (charAt2 == '+' || charAt2 == '-') {
                i13 = i10 - 6;
            }
            if (i13 == 3) {
                return (net.time4j.f0) f39342h.E(charSequence, sVar);
            }
            return (net.time4j.f0) f39340f.E(charSequence, sVar);
        } else if (i11 == 1) {
            return (net.time4j.f0) f39343i.E(charSequence, sVar);
        } else {
            return (net.time4j.f0) f39341g.E(charSequence, sVar);
        }
    }

    private static mt.c k(boolean z10) {
        c.d N = mt.c.N(net.time4j.g0.class, Locale.ROOT);
        N.W(f39339e, 1);
        a(N, z10);
        return N.F().T(lt.g.STRICT);
    }

    private static mt.c l(boolean z10) {
        c.d N = mt.c.N(i0.class, Locale.ROOT);
        N.d(net.time4j.f0.f40452z, e(z10), d(z10));
        N.l('T');
        a(N, z10);
        return N.F().T(lt.g.STRICT);
    }

    private static mt.c m(boolean z10) {
        c.d k10 = mt.c.N(net.time4j.f0.class, Locale.ROOT).b0(lt.a.f37637l, lt.j.f37686d).Z(lt.a.f37638m, '0').k(net.time4j.f0.B, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
        if (z10) {
            k10.l('-');
        }
        k10.l('W');
        k10.g(a1.f40221x.n(), 2);
        if (z10) {
            k10.l('-');
        }
        return k10.h(net.time4j.f0.G, 1).L().L().F().T(lt.g.STRICT);
    }
}
