package rt;

import java.text.ParseException;
import java.util.Collections;
import java.util.Locale;
import net.time4j.a1;
import net.time4j.i0;
import rt.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class l {

    /* renamed from: a  reason: collision with root package name */
    private static final char f49139a;

    /* renamed from: b  reason: collision with root package name */
    private static final c f49140b;

    /* renamed from: c  reason: collision with root package name */
    private static final c f49141c;

    /* renamed from: d  reason: collision with root package name */
    private static final pt.n f49142d;

    /* renamed from: e  reason: collision with root package name */
    private static final pt.n f49143e;

    /* renamed from: f  reason: collision with root package name */
    public static final rt.c f49144f;

    /* renamed from: g  reason: collision with root package name */
    public static final rt.c f49145g;

    /* renamed from: h  reason: collision with root package name */
    public static final rt.c f49146h;

    /* renamed from: i  reason: collision with root package name */
    public static final rt.c f49147i;

    /* renamed from: j  reason: collision with root package name */
    public static final rt.c f49148j;

    /* renamed from: k  reason: collision with root package name */
    public static final rt.c f49149k;

    /* renamed from: l  reason: collision with root package name */
    public static final rt.c f49150l;

    /* renamed from: m  reason: collision with root package name */
    public static final rt.c f49151m;

    /* renamed from: n  reason: collision with root package name */
    public static final rt.c f49152n;

    /* renamed from: o  reason: collision with root package name */
    public static final rt.c f49153o;

    /* renamed from: p  reason: collision with root package name */
    public static final rt.c f49154p;

    /* renamed from: q  reason: collision with root package name */
    public static final rt.c f49155q;

    /* renamed from: r  reason: collision with root package name */
    public static final rt.c f49156r;

    /* renamed from: s  reason: collision with root package name */
    public static final rt.c f49157s;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f49158a;

        a(boolean z10) {
            this.f49158a = z10;
        }

        @Override // rt.e
        /* renamed from: b */
        public Object a(net.time4j.f0 f0Var, Appendable appendable, pt.d dVar, pt.t tVar) {
            rt.c cVar;
            if (this.f49158a) {
                cVar = l.f49145g;
            } else {
                cVar = l.f49144f;
            }
            cVar.J(f0Var, appendable, dVar);
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements rt.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f49159a;

        b(boolean z10) {
            this.f49159a = z10;
        }

        @Override // rt.d
        /* renamed from: a */
        public net.time4j.f0 b(CharSequence charSequence, s sVar, pt.d dVar) {
            int length = charSequence.length();
            int f10 = sVar.f();
            int i10 = length - f10;
            int i11 = 0;
            for (int i12 = f10 + 1; i12 < length; i12++) {
                char charAt = charSequence.charAt(i12);
                if (charAt != '-') {
                    if (charAt != '/' && charAt != 'T') {
                        if (charAt == 'W') {
                            if (this.f49159a) {
                                return (net.time4j.f0) l.f49149k.E(charSequence, sVar);
                            }
                            return (net.time4j.f0) l.f49148j.E(charSequence, sVar);
                        }
                    } else {
                        i10 = i12 - f10;
                        break;
                    }
                } else {
                    i11++;
                }
            }
            if (this.f49159a) {
                if (i11 == 1) {
                    return (net.time4j.f0) l.f49147i.E(charSequence, sVar);
                }
                return (net.time4j.f0) l.f49145g.E(charSequence, sVar);
            }
            int i13 = i10 - 4;
            char charAt2 = charSequence.charAt(f10);
            if (charAt2 == '+' || charAt2 == '-') {
                i13 = i10 - 6;
            }
            if (i13 == 3) {
                return (net.time4j.f0) l.f49146h.E(charSequence, sVar);
            }
            return (net.time4j.f0) l.f49144f.E(charSequence, sVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class c implements pt.n {

        /* renamed from: d  reason: collision with root package name */
        private final pt.p f49160d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements pt.n {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ c f49161d;

            a(c cVar) {
                this.f49161d = cVar;
            }

            @Override // pt.n
            /* renamed from: a */
            public boolean test(pt.o oVar) {
                if (!c.this.test(oVar) && !this.f49161d.test(oVar)) {
                    return false;
                }
                return true;
            }
        }

        c(pt.p pVar) {
            this.f49160d = pVar;
        }

        pt.n a(c cVar) {
            return new a(cVar);
        }

        @Override // pt.n
        /* renamed from: b */
        public boolean test(pt.o oVar) {
            if (oVar.r(this.f49160d) > 0) {
                return true;
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d implements pt.n {
        private d() {
        }

        @Override // pt.n
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
        f49139a = c10;
        c cVar = new c(net.time4j.g0.J);
        f49140b = cVar;
        c cVar2 = new c(net.time4j.g0.N);
        f49141c = cVar2;
        f49142d = cVar.a(cVar2);
        f49143e = new d(null);
        f49144f = b(false);
        f49145g = b(true);
        f49146h = h(false);
        f49147i = h(true);
        f49148j = m(false);
        f49149k = m(true);
        f49150l = c(false);
        f49151m = c(true);
        f49152n = k(false);
        f49153o = k(true);
        f49154p = l(false);
        f49155q = l(true);
        f49156r = g(false);
        f49157s = g(true);
    }

    private static void a(c.d dVar, boolean z10) {
        dVar.b0(qt.a.f48097l, qt.j.f48146d);
        dVar.Z(qt.a.f48098m, '0');
        dVar.g(net.time4j.g0.G, 2);
        dVar.X();
        if (z10) {
            dVar.l(':');
        }
        dVar.g(net.time4j.g0.H, 2);
        dVar.Y(f49142d);
        if (z10) {
            dVar.l(':');
        }
        dVar.g(net.time4j.g0.J, 2);
        dVar.Y(f49141c);
        if (f49139a == ',') {
            dVar.m(',', '.');
        } else {
            dVar.m('.', ',');
        }
        dVar.i(net.time4j.g0.N, 0, 9, false);
        for (int i10 = 0; i10 < 5; i10++) {
            dVar.L();
        }
    }

    private static rt.c b(boolean z10) {
        c.d k10 = rt.c.N(net.time4j.f0.class, Locale.ROOT).b0(qt.a.f48097l, qt.j.f48146d).Z(qt.a.f48098m, '0').k(net.time4j.f0.A, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
        if (z10) {
            k10.l('-');
        }
        k10.g(net.time4j.f0.E, 2);
        if (z10) {
            k10.l('-');
        }
        return k10.g(net.time4j.f0.F, 2).L().L().F().U(qt.g.STRICT);
    }

    private static rt.c c(boolean z10) {
        c.d N = rt.c.N(net.time4j.f0.class, Locale.ROOT);
        N.d(net.time4j.f0.f39951z, e(z10), d(z10));
        return N.F().U(qt.g.STRICT);
    }

    private static rt.d d(boolean z10) {
        return new b(z10);
    }

    private static e e(boolean z10) {
        return new a(z10);
    }

    private static rt.c f(qt.e eVar, boolean z10) {
        c.d N = rt.c.N(net.time4j.a0.class, Locale.ROOT);
        N.d(net.time4j.f0.f39951z, e(z10), d(z10));
        N.l('T');
        a(N, z10);
        N.C(eVar, z10, Collections.singletonList("Z"));
        return N.F();
    }

    private static rt.c g(boolean z10) {
        c.d N = rt.c.N(net.time4j.a0.class, Locale.ROOT);
        N.d(net.time4j.a0.T().M(), f(qt.e.MEDIUM, z10), f(qt.e.SHORT, z10));
        return N.F().U(qt.g.STRICT).V(net.time4j.tz.p.f40286v);
    }

    private static rt.c h(boolean z10) {
        c.d k10 = rt.c.N(net.time4j.f0.class, Locale.ROOT).b0(qt.a.f48097l, qt.j.f48146d).Z(qt.a.f48098m, '0').k(net.time4j.f0.A, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
        if (z10) {
            k10.l('-');
        }
        return k10.g(net.time4j.f0.H, 3).L().L().F().U(qt.g.STRICT);
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
                            return (net.time4j.f0) f49149k.E(charSequence, sVar);
                        }
                        return (net.time4j.f0) f49148j.E(charSequence, sVar);
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
                return (net.time4j.f0) f49146h.E(charSequence, sVar);
            }
            return (net.time4j.f0) f49144f.E(charSequence, sVar);
        } else if (i11 == 1) {
            return (net.time4j.f0) f49147i.E(charSequence, sVar);
        } else {
            return (net.time4j.f0) f49145g.E(charSequence, sVar);
        }
    }

    private static rt.c k(boolean z10) {
        c.d N = rt.c.N(net.time4j.g0.class, Locale.ROOT);
        N.W(f49143e, 1);
        a(N, z10);
        return N.F().U(qt.g.STRICT);
    }

    private static rt.c l(boolean z10) {
        c.d N = rt.c.N(i0.class, Locale.ROOT);
        N.d(net.time4j.f0.f39951z, e(z10), d(z10));
        N.l('T');
        a(N, z10);
        return N.F().U(qt.g.STRICT);
    }

    private static rt.c m(boolean z10) {
        c.d k10 = rt.c.N(net.time4j.f0.class, Locale.ROOT).b0(qt.a.f48097l, qt.j.f48146d).Z(qt.a.f48098m, '0').k(net.time4j.f0.B, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
        if (z10) {
            k10.l('-');
        }
        k10.l('W');
        k10.g(a1.f39720x.n(), 2);
        if (z10) {
            k10.l('-');
        }
        return k10.h(net.time4j.f0.G, 1).L().L().F().U(qt.g.STRICT);
    }
}
