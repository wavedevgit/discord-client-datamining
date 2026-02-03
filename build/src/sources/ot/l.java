package ot;

import java.text.ParseException;
import java.util.Collections;
import java.util.Locale;
import net.time4j.a1;
import net.time4j.i0;
import ot.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class l {

    /* renamed from: a  reason: collision with root package name */
    private static final char f44690a;

    /* renamed from: b  reason: collision with root package name */
    private static final c f44691b;

    /* renamed from: c  reason: collision with root package name */
    private static final c f44692c;

    /* renamed from: d  reason: collision with root package name */
    private static final mt.n f44693d;

    /* renamed from: e  reason: collision with root package name */
    private static final mt.n f44694e;

    /* renamed from: f  reason: collision with root package name */
    public static final ot.c f44695f;

    /* renamed from: g  reason: collision with root package name */
    public static final ot.c f44696g;

    /* renamed from: h  reason: collision with root package name */
    public static final ot.c f44697h;

    /* renamed from: i  reason: collision with root package name */
    public static final ot.c f44698i;

    /* renamed from: j  reason: collision with root package name */
    public static final ot.c f44699j;

    /* renamed from: k  reason: collision with root package name */
    public static final ot.c f44700k;

    /* renamed from: l  reason: collision with root package name */
    public static final ot.c f44701l;

    /* renamed from: m  reason: collision with root package name */
    public static final ot.c f44702m;

    /* renamed from: n  reason: collision with root package name */
    public static final ot.c f44703n;

    /* renamed from: o  reason: collision with root package name */
    public static final ot.c f44704o;

    /* renamed from: p  reason: collision with root package name */
    public static final ot.c f44705p;

    /* renamed from: q  reason: collision with root package name */
    public static final ot.c f44706q;

    /* renamed from: r  reason: collision with root package name */
    public static final ot.c f44707r;

    /* renamed from: s  reason: collision with root package name */
    public static final ot.c f44708s;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f44709a;

        a(boolean z10) {
            this.f44709a = z10;
        }

        @Override // ot.e
        /* renamed from: b */
        public Object a(net.time4j.f0 f0Var, Appendable appendable, mt.d dVar, mt.t tVar) {
            ot.c cVar;
            if (this.f44709a) {
                cVar = l.f44696g;
            } else {
                cVar = l.f44695f;
            }
            cVar.J(f0Var, appendable, dVar);
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements ot.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f44710a;

        b(boolean z10) {
            this.f44710a = z10;
        }

        @Override // ot.d
        /* renamed from: a */
        public net.time4j.f0 b(CharSequence charSequence, s sVar, mt.d dVar) {
            int length = charSequence.length();
            int f10 = sVar.f();
            int i10 = length - f10;
            int i11 = 0;
            for (int i12 = f10 + 1; i12 < length; i12++) {
                char charAt = charSequence.charAt(i12);
                if (charAt != '-') {
                    if (charAt != '/' && charAt != 'T') {
                        if (charAt == 'W') {
                            if (this.f44710a) {
                                return (net.time4j.f0) l.f44700k.E(charSequence, sVar);
                            }
                            return (net.time4j.f0) l.f44699j.E(charSequence, sVar);
                        }
                    } else {
                        i10 = i12 - f10;
                        break;
                    }
                } else {
                    i11++;
                }
            }
            if (this.f44710a) {
                if (i11 == 1) {
                    return (net.time4j.f0) l.f44698i.E(charSequence, sVar);
                }
                return (net.time4j.f0) l.f44696g.E(charSequence, sVar);
            }
            int i13 = i10 - 4;
            char charAt2 = charSequence.charAt(f10);
            if (charAt2 == '+' || charAt2 == '-') {
                i13 = i10 - 6;
            }
            if (i13 == 3) {
                return (net.time4j.f0) l.f44697h.E(charSequence, sVar);
            }
            return (net.time4j.f0) l.f44695f.E(charSequence, sVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class c implements mt.n {

        /* renamed from: d  reason: collision with root package name */
        private final mt.p f44711d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements mt.n {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ c f44712d;

            a(c cVar) {
                this.f44712d = cVar;
            }

            @Override // mt.n
            /* renamed from: a */
            public boolean test(mt.o oVar) {
                if (!c.this.test(oVar) && !this.f44712d.test(oVar)) {
                    return false;
                }
                return true;
            }
        }

        c(mt.p pVar) {
            this.f44711d = pVar;
        }

        mt.n a(c cVar) {
            return new a(cVar);
        }

        @Override // mt.n
        /* renamed from: b */
        public boolean test(mt.o oVar) {
            if (oVar.j(this.f44711d) > 0) {
                return true;
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d implements mt.n {
        private d() {
        }

        @Override // mt.n
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
        f44690a = c10;
        c cVar = new c(net.time4j.g0.J);
        f44691b = cVar;
        c cVar2 = new c(net.time4j.g0.N);
        f44692c = cVar2;
        f44693d = cVar.a(cVar2);
        f44694e = new d(null);
        f44695f = b(false);
        f44696g = b(true);
        f44697h = h(false);
        f44698i = h(true);
        f44699j = m(false);
        f44700k = m(true);
        f44701l = c(false);
        f44702m = c(true);
        f44703n = k(false);
        f44704o = k(true);
        f44705p = l(false);
        f44706q = l(true);
        f44707r = g(false);
        f44708s = g(true);
    }

    private static void a(c.d dVar, boolean z10) {
        dVar.b0(nt.a.f42037l, nt.j.f42086d);
        dVar.Z(nt.a.f42038m, '0');
        dVar.g(net.time4j.g0.G, 2);
        dVar.X();
        if (z10) {
            dVar.l(':');
        }
        dVar.g(net.time4j.g0.H, 2);
        dVar.Y(f44693d);
        if (z10) {
            dVar.l(':');
        }
        dVar.g(net.time4j.g0.J, 2);
        dVar.Y(f44692c);
        if (f44690a == ',') {
            dVar.m(',', '.');
        } else {
            dVar.m('.', ',');
        }
        dVar.i(net.time4j.g0.N, 0, 9, false);
        for (int i10 = 0; i10 < 5; i10++) {
            dVar.L();
        }
    }

    private static ot.c b(boolean z10) {
        c.d k10 = ot.c.N(net.time4j.f0.class, Locale.ROOT).b0(nt.a.f42037l, nt.j.f42086d).Z(nt.a.f42038m, '0').k(net.time4j.f0.A, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
        if (z10) {
            k10.l('-');
        }
        k10.g(net.time4j.f0.E, 2);
        if (z10) {
            k10.l('-');
        }
        return k10.g(net.time4j.f0.F, 2).L().L().F().U(nt.g.STRICT);
    }

    private static ot.c c(boolean z10) {
        c.d N = ot.c.N(net.time4j.f0.class, Locale.ROOT);
        N.d(net.time4j.f0.f40491z, e(z10), d(z10));
        return N.F().U(nt.g.STRICT);
    }

    private static ot.d d(boolean z10) {
        return new b(z10);
    }

    private static e e(boolean z10) {
        return new a(z10);
    }

    private static ot.c f(nt.e eVar, boolean z10) {
        c.d N = ot.c.N(net.time4j.a0.class, Locale.ROOT);
        N.d(net.time4j.f0.f40491z, e(z10), d(z10));
        N.l('T');
        a(N, z10);
        N.C(eVar, z10, Collections.singletonList("Z"));
        return N.F();
    }

    private static ot.c g(boolean z10) {
        c.d N = ot.c.N(net.time4j.a0.class, Locale.ROOT);
        N.d(net.time4j.a0.T().M(), f(nt.e.MEDIUM, z10), f(nt.e.SHORT, z10));
        return N.F().U(nt.g.STRICT).V(net.time4j.tz.p.f40826v);
    }

    private static ot.c h(boolean z10) {
        c.d k10 = ot.c.N(net.time4j.f0.class, Locale.ROOT).b0(nt.a.f42037l, nt.j.f42086d).Z(nt.a.f42038m, '0').k(net.time4j.f0.A, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
        if (z10) {
            k10.l('-');
        }
        return k10.g(net.time4j.f0.H, 3).L().L().F().U(nt.g.STRICT);
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
                            return (net.time4j.f0) f44700k.E(charSequence, sVar);
                        }
                        return (net.time4j.f0) f44699j.E(charSequence, sVar);
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
                return (net.time4j.f0) f44697h.E(charSequence, sVar);
            }
            return (net.time4j.f0) f44695f.E(charSequence, sVar);
        } else if (i11 == 1) {
            return (net.time4j.f0) f44698i.E(charSequence, sVar);
        } else {
            return (net.time4j.f0) f44696g.E(charSequence, sVar);
        }
    }

    private static ot.c k(boolean z10) {
        c.d N = ot.c.N(net.time4j.g0.class, Locale.ROOT);
        N.W(f44694e, 1);
        a(N, z10);
        return N.F().U(nt.g.STRICT);
    }

    private static ot.c l(boolean z10) {
        c.d N = ot.c.N(i0.class, Locale.ROOT);
        N.d(net.time4j.f0.f40491z, e(z10), d(z10));
        N.l('T');
        a(N, z10);
        return N.F().U(nt.g.STRICT);
    }

    private static ot.c m(boolean z10) {
        c.d k10 = ot.c.N(net.time4j.f0.class, Locale.ROOT).b0(nt.a.f42037l, nt.j.f42086d).Z(nt.a.f42038m, '0').k(net.time4j.f0.B, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
        if (z10) {
            k10.l('-');
        }
        k10.l('W');
        k10.g(a1.f40260x.n(), 2);
        if (z10) {
            k10.l('-');
        }
        return k10.h(net.time4j.f0.G, 1).L().L().F().U(nt.g.STRICT);
    }
}
