package du;

import du.c;
import java.text.ParseException;
import java.util.Collections;
import java.util.Locale;
import net.time4j.a1;
import net.time4j.i0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class l {

    /* renamed from: a  reason: collision with root package name */
    private static final char f22057a;

    /* renamed from: b  reason: collision with root package name */
    private static final c f22058b;

    /* renamed from: c  reason: collision with root package name */
    private static final c f22059c;

    /* renamed from: d  reason: collision with root package name */
    private static final bu.n f22060d;

    /* renamed from: e  reason: collision with root package name */
    private static final bu.n f22061e;

    /* renamed from: f  reason: collision with root package name */
    public static final du.c f22062f;

    /* renamed from: g  reason: collision with root package name */
    public static final du.c f22063g;

    /* renamed from: h  reason: collision with root package name */
    public static final du.c f22064h;

    /* renamed from: i  reason: collision with root package name */
    public static final du.c f22065i;

    /* renamed from: j  reason: collision with root package name */
    public static final du.c f22066j;

    /* renamed from: k  reason: collision with root package name */
    public static final du.c f22067k;

    /* renamed from: l  reason: collision with root package name */
    public static final du.c f22068l;

    /* renamed from: m  reason: collision with root package name */
    public static final du.c f22069m;

    /* renamed from: n  reason: collision with root package name */
    public static final du.c f22070n;

    /* renamed from: o  reason: collision with root package name */
    public static final du.c f22071o;

    /* renamed from: p  reason: collision with root package name */
    public static final du.c f22072p;

    /* renamed from: q  reason: collision with root package name */
    public static final du.c f22073q;

    /* renamed from: r  reason: collision with root package name */
    public static final du.c f22074r;

    /* renamed from: s  reason: collision with root package name */
    public static final du.c f22075s;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f22076a;

        a(boolean z10) {
            this.f22076a = z10;
        }

        @Override // du.e
        /* renamed from: a */
        public Object b(net.time4j.f0 f0Var, Appendable appendable, bu.d dVar, bu.t tVar) {
            du.c cVar;
            if (this.f22076a) {
                cVar = l.f22063g;
            } else {
                cVar = l.f22062f;
            }
            cVar.K(f0Var, appendable, dVar);
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements du.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f22077a;

        b(boolean z10) {
            this.f22077a = z10;
        }

        @Override // du.d
        /* renamed from: b */
        public net.time4j.f0 a(CharSequence charSequence, s sVar, bu.d dVar) {
            int length = charSequence.length();
            int f10 = sVar.f();
            int i10 = length - f10;
            int i11 = 0;
            for (int i12 = f10 + 1; i12 < length; i12++) {
                char charAt = charSequence.charAt(i12);
                if (charAt != '-') {
                    if (charAt != '/' && charAt != 'T') {
                        if (charAt == 'W') {
                            if (this.f22077a) {
                                return (net.time4j.f0) l.f22067k.G(charSequence, sVar);
                            }
                            return (net.time4j.f0) l.f22066j.G(charSequence, sVar);
                        }
                    } else {
                        i10 = i12 - f10;
                        break;
                    }
                } else {
                    i11++;
                }
            }
            if (this.f22077a) {
                if (i11 == 1) {
                    return (net.time4j.f0) l.f22065i.G(charSequence, sVar);
                }
                return (net.time4j.f0) l.f22063g.G(charSequence, sVar);
            }
            int i13 = i10 - 4;
            char charAt2 = charSequence.charAt(f10);
            if (charAt2 == '+' || charAt2 == '-') {
                i13 = i10 - 6;
            }
            if (i13 == 3) {
                return (net.time4j.f0) l.f22064h.G(charSequence, sVar);
            }
            return (net.time4j.f0) l.f22062f.G(charSequence, sVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class c implements bu.n {

        /* renamed from: d  reason: collision with root package name */
        private final bu.p f22078d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements bu.n {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ c f22079d;

            a(c cVar) {
                this.f22079d = cVar;
            }

            @Override // bu.n
            /* renamed from: a */
            public boolean test(bu.o oVar) {
                if (!c.this.test(oVar) && !this.f22079d.test(oVar)) {
                    return false;
                }
                return true;
            }
        }

        c(bu.p pVar) {
            this.f22078d = pVar;
        }

        bu.n a(c cVar) {
            return new a(cVar);
        }

        @Override // bu.n
        /* renamed from: b */
        public boolean test(bu.o oVar) {
            if (oVar.m(this.f22078d) > 0) {
                return true;
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d implements bu.n {
        private d() {
        }

        @Override // bu.n
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
        f22057a = c10;
        c cVar = new c(net.time4j.g0.J);
        f22058b = cVar;
        c cVar2 = new c(net.time4j.g0.N);
        f22059c = cVar2;
        f22060d = cVar.a(cVar2);
        f22061e = new d(null);
        f22062f = b(false);
        f22063g = b(true);
        f22064h = h(false);
        f22065i = h(true);
        f22066j = m(false);
        f22067k = m(true);
        f22068l = c(false);
        f22069m = c(true);
        f22070n = k(false);
        f22071o = k(true);
        f22072p = l(false);
        f22073q = l(true);
        f22074r = g(false);
        f22075s = g(true);
    }

    private static void a(c.d dVar, boolean z10) {
        dVar.b0(cu.a.f21119l, cu.j.f21168d);
        dVar.Z(cu.a.f21120m, '0');
        dVar.g(net.time4j.g0.G, 2);
        dVar.X();
        if (z10) {
            dVar.l(':');
        }
        dVar.g(net.time4j.g0.H, 2);
        dVar.Y(f22060d);
        if (z10) {
            dVar.l(':');
        }
        dVar.g(net.time4j.g0.J, 2);
        dVar.Y(f22059c);
        if (f22057a == ',') {
            dVar.m(',', '.');
        } else {
            dVar.m('.', ',');
        }
        dVar.i(net.time4j.g0.N, 0, 9, false);
        for (int i10 = 0; i10 < 5; i10++) {
            dVar.L();
        }
    }

    private static du.c b(boolean z10) {
        c.d k10 = du.c.N(net.time4j.f0.class, Locale.ROOT).b0(cu.a.f21119l, cu.j.f21168d).Z(cu.a.f21120m, '0').k(net.time4j.f0.A, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
        if (z10) {
            k10.l('-');
        }
        k10.g(net.time4j.f0.E, 2);
        if (z10) {
            k10.l('-');
        }
        return k10.g(net.time4j.f0.F, 2).L().L().F().S(cu.g.STRICT);
    }

    private static du.c c(boolean z10) {
        c.d N = du.c.N(net.time4j.f0.class, Locale.ROOT);
        N.d(net.time4j.f0.f37450z, e(z10), d(z10));
        return N.F().S(cu.g.STRICT);
    }

    private static du.d d(boolean z10) {
        return new b(z10);
    }

    private static e e(boolean z10) {
        return new a(z10);
    }

    private static du.c f(cu.e eVar, boolean z10) {
        c.d N = du.c.N(net.time4j.a0.class, Locale.ROOT);
        N.d(net.time4j.f0.f37450z, e(z10), d(z10));
        N.l('T');
        a(N, z10);
        N.C(eVar, z10, Collections.singletonList("Z"));
        return N.F();
    }

    private static du.c g(boolean z10) {
        c.d N = du.c.N(net.time4j.a0.class, Locale.ROOT);
        N.d(net.time4j.a0.T().M(), f(cu.e.MEDIUM, z10), f(cu.e.SHORT, z10));
        return N.F().S(cu.g.STRICT).V(net.time4j.tz.p.f37785v);
    }

    private static du.c h(boolean z10) {
        c.d k10 = du.c.N(net.time4j.f0.class, Locale.ROOT).b0(cu.a.f21119l, cu.j.f21168d).Z(cu.a.f21120m, '0').k(net.time4j.f0.A, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
        if (z10) {
            k10.l('-');
        }
        return k10.g(net.time4j.f0.H, 3).L().L().F().S(cu.g.STRICT);
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
                            return (net.time4j.f0) f22067k.G(charSequence, sVar);
                        }
                        return (net.time4j.f0) f22066j.G(charSequence, sVar);
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
                return (net.time4j.f0) f22064h.G(charSequence, sVar);
            }
            return (net.time4j.f0) f22062f.G(charSequence, sVar);
        } else if (i11 == 1) {
            return (net.time4j.f0) f22065i.G(charSequence, sVar);
        } else {
            return (net.time4j.f0) f22063g.G(charSequence, sVar);
        }
    }

    private static du.c k(boolean z10) {
        c.d N = du.c.N(net.time4j.g0.class, Locale.ROOT);
        N.W(f22061e, 1);
        a(N, z10);
        return N.F().S(cu.g.STRICT);
    }

    private static du.c l(boolean z10) {
        c.d N = du.c.N(i0.class, Locale.ROOT);
        N.d(net.time4j.f0.f37450z, e(z10), d(z10));
        N.l('T');
        a(N, z10);
        return N.F().S(cu.g.STRICT);
    }

    private static du.c m(boolean z10) {
        c.d k10 = du.c.N(net.time4j.f0.class, Locale.ROOT).b0(cu.a.f21119l, cu.j.f21168d).Z(cu.a.f21120m, '0').k(net.time4j.f0.B, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
        if (z10) {
            k10.l('-');
        }
        k10.l('W');
        k10.g(a1.f37219x.n(), 2);
        if (z10) {
            k10.l('-');
        }
        return k10.h(net.time4j.f0.G, 1).L().L().F().S(cu.g.STRICT);
    }
}
