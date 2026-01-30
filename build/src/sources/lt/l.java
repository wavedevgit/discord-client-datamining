package lt;

import java.text.ParseException;
import java.util.Collections;
import java.util.Locale;
import lt.c;
import net.time4j.a1;
import net.time4j.i0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class l {

    /* renamed from: a  reason: collision with root package name */
    private static final char f37635a;

    /* renamed from: b  reason: collision with root package name */
    private static final c f37636b;

    /* renamed from: c  reason: collision with root package name */
    private static final c f37637c;

    /* renamed from: d  reason: collision with root package name */
    private static final jt.n f37638d;

    /* renamed from: e  reason: collision with root package name */
    private static final jt.n f37639e;

    /* renamed from: f  reason: collision with root package name */
    public static final lt.c f37640f;

    /* renamed from: g  reason: collision with root package name */
    public static final lt.c f37641g;

    /* renamed from: h  reason: collision with root package name */
    public static final lt.c f37642h;

    /* renamed from: i  reason: collision with root package name */
    public static final lt.c f37643i;

    /* renamed from: j  reason: collision with root package name */
    public static final lt.c f37644j;

    /* renamed from: k  reason: collision with root package name */
    public static final lt.c f37645k;

    /* renamed from: l  reason: collision with root package name */
    public static final lt.c f37646l;

    /* renamed from: m  reason: collision with root package name */
    public static final lt.c f37647m;

    /* renamed from: n  reason: collision with root package name */
    public static final lt.c f37648n;

    /* renamed from: o  reason: collision with root package name */
    public static final lt.c f37649o;

    /* renamed from: p  reason: collision with root package name */
    public static final lt.c f37650p;

    /* renamed from: q  reason: collision with root package name */
    public static final lt.c f37651q;

    /* renamed from: r  reason: collision with root package name */
    public static final lt.c f37652r;

    /* renamed from: s  reason: collision with root package name */
    public static final lt.c f37653s;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f37654a;

        a(boolean z10) {
            this.f37654a = z10;
        }

        @Override // lt.e
        /* renamed from: a */
        public Object b(net.time4j.f0 f0Var, Appendable appendable, jt.d dVar, jt.t tVar) {
            lt.c cVar;
            if (this.f37654a) {
                cVar = l.f37641g;
            } else {
                cVar = l.f37640f;
            }
            cVar.J(f0Var, appendable, dVar);
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements lt.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f37655a;

        b(boolean z10) {
            this.f37655a = z10;
        }

        @Override // lt.d
        /* renamed from: b */
        public net.time4j.f0 a(CharSequence charSequence, s sVar, jt.d dVar) {
            int length = charSequence.length();
            int f10 = sVar.f();
            int i10 = length - f10;
            int i11 = 0;
            for (int i12 = f10 + 1; i12 < length; i12++) {
                char charAt = charSequence.charAt(i12);
                if (charAt != '-') {
                    if (charAt != '/' && charAt != 'T') {
                        if (charAt == 'W') {
                            if (this.f37655a) {
                                return (net.time4j.f0) l.f37645k.E(charSequence, sVar);
                            }
                            return (net.time4j.f0) l.f37644j.E(charSequence, sVar);
                        }
                    } else {
                        i10 = i12 - f10;
                        break;
                    }
                } else {
                    i11++;
                }
            }
            if (this.f37655a) {
                if (i11 == 1) {
                    return (net.time4j.f0) l.f37643i.E(charSequence, sVar);
                }
                return (net.time4j.f0) l.f37641g.E(charSequence, sVar);
            }
            int i13 = i10 - 4;
            char charAt2 = charSequence.charAt(f10);
            if (charAt2 == '+' || charAt2 == '-') {
                i13 = i10 - 6;
            }
            if (i13 == 3) {
                return (net.time4j.f0) l.f37642h.E(charSequence, sVar);
            }
            return (net.time4j.f0) l.f37640f.E(charSequence, sVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class c implements jt.n {

        /* renamed from: d  reason: collision with root package name */
        private final jt.p f37656d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements jt.n {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ c f37657d;

            a(c cVar) {
                this.f37657d = cVar;
            }

            @Override // jt.n
            /* renamed from: a */
            public boolean test(jt.o oVar) {
                if (!c.this.test(oVar) && !this.f37657d.test(oVar)) {
                    return false;
                }
                return true;
            }
        }

        c(jt.p pVar) {
            this.f37656d = pVar;
        }

        jt.n a(c cVar) {
            return new a(cVar);
        }

        @Override // jt.n
        /* renamed from: b */
        public boolean test(jt.o oVar) {
            if (oVar.q(this.f37656d) > 0) {
                return true;
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d implements jt.n {
        private d() {
        }

        @Override // jt.n
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
        f37635a = c10;
        c cVar = new c(net.time4j.g0.J);
        f37636b = cVar;
        c cVar2 = new c(net.time4j.g0.N);
        f37637c = cVar2;
        f37638d = cVar.a(cVar2);
        f37639e = new d(null);
        f37640f = b(false);
        f37641g = b(true);
        f37642h = h(false);
        f37643i = h(true);
        f37644j = m(false);
        f37645k = m(true);
        f37646l = c(false);
        f37647m = c(true);
        f37648n = k(false);
        f37649o = k(true);
        f37650p = l(false);
        f37651q = l(true);
        f37652r = g(false);
        f37653s = g(true);
    }

    private static void a(c.d dVar, boolean z10) {
        dVar.b0(kt.a.f36555l, kt.j.f36604d);
        dVar.Z(kt.a.f36556m, '0');
        dVar.g(net.time4j.g0.G, 2);
        dVar.X();
        if (z10) {
            dVar.l(':');
        }
        dVar.g(net.time4j.g0.H, 2);
        dVar.Y(f37638d);
        if (z10) {
            dVar.l(':');
        }
        dVar.g(net.time4j.g0.J, 2);
        dVar.Y(f37637c);
        if (f37635a == ',') {
            dVar.m(',', '.');
        } else {
            dVar.m('.', ',');
        }
        dVar.i(net.time4j.g0.N, 0, 9, false);
        for (int i10 = 0; i10 < 5; i10++) {
            dVar.L();
        }
    }

    private static lt.c b(boolean z10) {
        c.d k10 = lt.c.N(net.time4j.f0.class, Locale.ROOT).b0(kt.a.f36555l, kt.j.f36604d).Z(kt.a.f36556m, '0').k(net.time4j.f0.A, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
        if (z10) {
            k10.l('-');
        }
        k10.g(net.time4j.f0.E, 2);
        if (z10) {
            k10.l('-');
        }
        return k10.g(net.time4j.f0.F, 2).L().L().F().T(kt.g.STRICT);
    }

    private static lt.c c(boolean z10) {
        c.d N = lt.c.N(net.time4j.f0.class, Locale.ROOT);
        N.d(net.time4j.f0.f40589z, e(z10), d(z10));
        return N.F().T(kt.g.STRICT);
    }

    private static lt.d d(boolean z10) {
        return new b(z10);
    }

    private static e e(boolean z10) {
        return new a(z10);
    }

    private static lt.c f(kt.e eVar, boolean z10) {
        c.d N = lt.c.N(net.time4j.a0.class, Locale.ROOT);
        N.d(net.time4j.f0.f40589z, e(z10), d(z10));
        N.l('T');
        a(N, z10);
        N.C(eVar, z10, Collections.singletonList("Z"));
        return N.F();
    }

    private static lt.c g(boolean z10) {
        c.d N = lt.c.N(net.time4j.a0.class, Locale.ROOT);
        N.d(net.time4j.a0.T().M(), f(kt.e.MEDIUM, z10), f(kt.e.SHORT, z10));
        return N.F().T(kt.g.STRICT).V(net.time4j.tz.p.f40924v);
    }

    private static lt.c h(boolean z10) {
        c.d k10 = lt.c.N(net.time4j.f0.class, Locale.ROOT).b0(kt.a.f36555l, kt.j.f36604d).Z(kt.a.f36556m, '0').k(net.time4j.f0.A, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
        if (z10) {
            k10.l('-');
        }
        return k10.g(net.time4j.f0.H, 3).L().L().F().T(kt.g.STRICT);
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
                            return (net.time4j.f0) f37645k.E(charSequence, sVar);
                        }
                        return (net.time4j.f0) f37644j.E(charSequence, sVar);
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
                return (net.time4j.f0) f37642h.E(charSequence, sVar);
            }
            return (net.time4j.f0) f37640f.E(charSequence, sVar);
        } else if (i11 == 1) {
            return (net.time4j.f0) f37643i.E(charSequence, sVar);
        } else {
            return (net.time4j.f0) f37641g.E(charSequence, sVar);
        }
    }

    private static lt.c k(boolean z10) {
        c.d N = lt.c.N(net.time4j.g0.class, Locale.ROOT);
        N.W(f37639e, 1);
        a(N, z10);
        return N.F().T(kt.g.STRICT);
    }

    private static lt.c l(boolean z10) {
        c.d N = lt.c.N(i0.class, Locale.ROOT);
        N.d(net.time4j.f0.f40589z, e(z10), d(z10));
        N.l('T');
        a(N, z10);
        return N.F().T(kt.g.STRICT);
    }

    private static lt.c m(boolean z10) {
        c.d k10 = lt.c.N(net.time4j.f0.class, Locale.ROOT).b0(kt.a.f36555l, kt.j.f36604d).Z(kt.a.f36556m, '0').k(net.time4j.f0.B, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
        if (z10) {
            k10.l('-');
        }
        k10.l('W');
        k10.g(a1.f40358x.n(), 2);
        if (z10) {
            k10.l('-');
        }
        return k10.h(net.time4j.f0.G, 1).L().L().F().T(kt.g.STRICT);
    }
}
