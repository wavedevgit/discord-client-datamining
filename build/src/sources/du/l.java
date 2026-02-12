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
    private static final char f22058a;

    /* renamed from: b  reason: collision with root package name */
    private static final c f22059b;

    /* renamed from: c  reason: collision with root package name */
    private static final c f22060c;

    /* renamed from: d  reason: collision with root package name */
    private static final bu.n f22061d;

    /* renamed from: e  reason: collision with root package name */
    private static final bu.n f22062e;

    /* renamed from: f  reason: collision with root package name */
    public static final du.c f22063f;

    /* renamed from: g  reason: collision with root package name */
    public static final du.c f22064g;

    /* renamed from: h  reason: collision with root package name */
    public static final du.c f22065h;

    /* renamed from: i  reason: collision with root package name */
    public static final du.c f22066i;

    /* renamed from: j  reason: collision with root package name */
    public static final du.c f22067j;

    /* renamed from: k  reason: collision with root package name */
    public static final du.c f22068k;

    /* renamed from: l  reason: collision with root package name */
    public static final du.c f22069l;

    /* renamed from: m  reason: collision with root package name */
    public static final du.c f22070m;

    /* renamed from: n  reason: collision with root package name */
    public static final du.c f22071n;

    /* renamed from: o  reason: collision with root package name */
    public static final du.c f22072o;

    /* renamed from: p  reason: collision with root package name */
    public static final du.c f22073p;

    /* renamed from: q  reason: collision with root package name */
    public static final du.c f22074q;

    /* renamed from: r  reason: collision with root package name */
    public static final du.c f22075r;

    /* renamed from: s  reason: collision with root package name */
    public static final du.c f22076s;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f22077a;

        a(boolean z10) {
            this.f22077a = z10;
        }

        @Override // du.e
        /* renamed from: a */
        public Object b(net.time4j.f0 f0Var, Appendable appendable, bu.d dVar, bu.t tVar) {
            du.c cVar;
            if (this.f22077a) {
                cVar = l.f22064g;
            } else {
                cVar = l.f22063f;
            }
            cVar.K(f0Var, appendable, dVar);
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements du.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f22078a;

        b(boolean z10) {
            this.f22078a = z10;
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
                            if (this.f22078a) {
                                return (net.time4j.f0) l.f22068k.G(charSequence, sVar);
                            }
                            return (net.time4j.f0) l.f22067j.G(charSequence, sVar);
                        }
                    } else {
                        i10 = i12 - f10;
                        break;
                    }
                } else {
                    i11++;
                }
            }
            if (this.f22078a) {
                if (i11 == 1) {
                    return (net.time4j.f0) l.f22066i.G(charSequence, sVar);
                }
                return (net.time4j.f0) l.f22064g.G(charSequence, sVar);
            }
            int i13 = i10 - 4;
            char charAt2 = charSequence.charAt(f10);
            if (charAt2 == '+' || charAt2 == '-') {
                i13 = i10 - 6;
            }
            if (i13 == 3) {
                return (net.time4j.f0) l.f22065h.G(charSequence, sVar);
            }
            return (net.time4j.f0) l.f22063f.G(charSequence, sVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class c implements bu.n {

        /* renamed from: d  reason: collision with root package name */
        private final bu.p f22079d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements bu.n {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ c f22080d;

            a(c cVar) {
                this.f22080d = cVar;
            }

            @Override // bu.n
            /* renamed from: a */
            public boolean test(bu.o oVar) {
                if (!c.this.test(oVar) && !this.f22080d.test(oVar)) {
                    return false;
                }
                return true;
            }
        }

        c(bu.p pVar) {
            this.f22079d = pVar;
        }

        bu.n a(c cVar) {
            return new a(cVar);
        }

        @Override // bu.n
        /* renamed from: b */
        public boolean test(bu.o oVar) {
            if (oVar.m(this.f22079d) > 0) {
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
        f22058a = c10;
        c cVar = new c(net.time4j.g0.J);
        f22059b = cVar;
        c cVar2 = new c(net.time4j.g0.N);
        f22060c = cVar2;
        f22061d = cVar.a(cVar2);
        f22062e = new d(null);
        f22063f = b(false);
        f22064g = b(true);
        f22065h = h(false);
        f22066i = h(true);
        f22067j = m(false);
        f22068k = m(true);
        f22069l = c(false);
        f22070m = c(true);
        f22071n = k(false);
        f22072o = k(true);
        f22073p = l(false);
        f22074q = l(true);
        f22075r = g(false);
        f22076s = g(true);
    }

    private static void a(c.d dVar, boolean z10) {
        dVar.b0(cu.a.f21120l, cu.j.f21169d);
        dVar.Z(cu.a.f21121m, '0');
        dVar.g(net.time4j.g0.G, 2);
        dVar.X();
        if (z10) {
            dVar.l(':');
        }
        dVar.g(net.time4j.g0.H, 2);
        dVar.Y(f22061d);
        if (z10) {
            dVar.l(':');
        }
        dVar.g(net.time4j.g0.J, 2);
        dVar.Y(f22060c);
        if (f22058a == ',') {
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
        c.d k10 = du.c.N(net.time4j.f0.class, Locale.ROOT).b0(cu.a.f21120l, cu.j.f21169d).Z(cu.a.f21121m, '0').k(net.time4j.f0.A, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
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
        N.d(net.time4j.f0.f37451z, e(z10), d(z10));
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
        N.d(net.time4j.f0.f37451z, e(z10), d(z10));
        N.l('T');
        a(N, z10);
        N.C(eVar, z10, Collections.singletonList("Z"));
        return N.F();
    }

    private static du.c g(boolean z10) {
        c.d N = du.c.N(net.time4j.a0.class, Locale.ROOT);
        N.d(net.time4j.a0.T().M(), f(cu.e.MEDIUM, z10), f(cu.e.SHORT, z10));
        return N.F().S(cu.g.STRICT).V(net.time4j.tz.p.f37786v);
    }

    private static du.c h(boolean z10) {
        c.d k10 = du.c.N(net.time4j.f0.class, Locale.ROOT).b0(cu.a.f21120l, cu.j.f21169d).Z(cu.a.f21121m, '0').k(net.time4j.f0.A, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
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
                            return (net.time4j.f0) f22068k.G(charSequence, sVar);
                        }
                        return (net.time4j.f0) f22067j.G(charSequence, sVar);
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
                return (net.time4j.f0) f22065h.G(charSequence, sVar);
            }
            return (net.time4j.f0) f22063f.G(charSequence, sVar);
        } else if (i11 == 1) {
            return (net.time4j.f0) f22066i.G(charSequence, sVar);
        } else {
            return (net.time4j.f0) f22064g.G(charSequence, sVar);
        }
    }

    private static du.c k(boolean z10) {
        c.d N = du.c.N(net.time4j.g0.class, Locale.ROOT);
        N.W(f22062e, 1);
        a(N, z10);
        return N.F().S(cu.g.STRICT);
    }

    private static du.c l(boolean z10) {
        c.d N = du.c.N(i0.class, Locale.ROOT);
        N.d(net.time4j.f0.f37451z, e(z10), d(z10));
        N.l('T');
        a(N, z10);
        return N.F().S(cu.g.STRICT);
    }

    private static du.c m(boolean z10) {
        c.d k10 = du.c.N(net.time4j.f0.class, Locale.ROOT).b0(cu.a.f21120l, cu.j.f21169d).Z(cu.a.f21121m, '0').k(net.time4j.f0.B, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
        if (z10) {
            k10.l('-');
        }
        k10.l('W');
        k10.g(a1.f37220x.n(), 2);
        if (z10) {
            k10.l('-');
        }
        return k10.h(net.time4j.f0.G, 1).L().L().F().S(cu.g.STRICT);
    }
}
