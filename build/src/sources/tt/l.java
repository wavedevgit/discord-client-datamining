package tt;

import java.text.ParseException;
import java.util.Collections;
import java.util.Locale;
import net.time4j.a1;
import net.time4j.i0;
import tt.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class l {

    /* renamed from: a  reason: collision with root package name */
    private static final char f51002a;

    /* renamed from: b  reason: collision with root package name */
    private static final c f51003b;

    /* renamed from: c  reason: collision with root package name */
    private static final c f51004c;

    /* renamed from: d  reason: collision with root package name */
    private static final rt.n f51005d;

    /* renamed from: e  reason: collision with root package name */
    private static final rt.n f51006e;

    /* renamed from: f  reason: collision with root package name */
    public static final tt.c f51007f;

    /* renamed from: g  reason: collision with root package name */
    public static final tt.c f51008g;

    /* renamed from: h  reason: collision with root package name */
    public static final tt.c f51009h;

    /* renamed from: i  reason: collision with root package name */
    public static final tt.c f51010i;

    /* renamed from: j  reason: collision with root package name */
    public static final tt.c f51011j;

    /* renamed from: k  reason: collision with root package name */
    public static final tt.c f51012k;

    /* renamed from: l  reason: collision with root package name */
    public static final tt.c f51013l;

    /* renamed from: m  reason: collision with root package name */
    public static final tt.c f51014m;

    /* renamed from: n  reason: collision with root package name */
    public static final tt.c f51015n;

    /* renamed from: o  reason: collision with root package name */
    public static final tt.c f51016o;

    /* renamed from: p  reason: collision with root package name */
    public static final tt.c f51017p;

    /* renamed from: q  reason: collision with root package name */
    public static final tt.c f51018q;

    /* renamed from: r  reason: collision with root package name */
    public static final tt.c f51019r;

    /* renamed from: s  reason: collision with root package name */
    public static final tt.c f51020s;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f51021a;

        a(boolean z10) {
            this.f51021a = z10;
        }

        @Override // tt.e
        /* renamed from: a */
        public Object b(net.time4j.f0 f0Var, Appendable appendable, rt.d dVar, rt.t tVar) {
            tt.c cVar;
            if (this.f51021a) {
                cVar = l.f51008g;
            } else {
                cVar = l.f51007f;
            }
            cVar.J(f0Var, appendable, dVar);
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements tt.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f51022a;

        b(boolean z10) {
            this.f51022a = z10;
        }

        @Override // tt.d
        /* renamed from: b */
        public net.time4j.f0 a(CharSequence charSequence, s sVar, rt.d dVar) {
            int length = charSequence.length();
            int f10 = sVar.f();
            int i10 = length - f10;
            int i11 = 0;
            for (int i12 = f10 + 1; i12 < length; i12++) {
                char charAt = charSequence.charAt(i12);
                if (charAt != '-') {
                    if (charAt != '/' && charAt != 'T') {
                        if (charAt == 'W') {
                            if (this.f51022a) {
                                return (net.time4j.f0) l.f51012k.E(charSequence, sVar);
                            }
                            return (net.time4j.f0) l.f51011j.E(charSequence, sVar);
                        }
                    } else {
                        i10 = i12 - f10;
                        break;
                    }
                } else {
                    i11++;
                }
            }
            if (this.f51022a) {
                if (i11 == 1) {
                    return (net.time4j.f0) l.f51010i.E(charSequence, sVar);
                }
                return (net.time4j.f0) l.f51008g.E(charSequence, sVar);
            }
            int i13 = i10 - 4;
            char charAt2 = charSequence.charAt(f10);
            if (charAt2 == '+' || charAt2 == '-') {
                i13 = i10 - 6;
            }
            if (i13 == 3) {
                return (net.time4j.f0) l.f51009h.E(charSequence, sVar);
            }
            return (net.time4j.f0) l.f51007f.E(charSequence, sVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class c implements rt.n {

        /* renamed from: d  reason: collision with root package name */
        private final rt.p f51023d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements rt.n {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ c f51024d;

            a(c cVar) {
                this.f51024d = cVar;
            }

            @Override // rt.n
            /* renamed from: a */
            public boolean test(rt.o oVar) {
                if (!c.this.test(oVar) && !this.f51024d.test(oVar)) {
                    return false;
                }
                return true;
            }
        }

        c(rt.p pVar) {
            this.f51023d = pVar;
        }

        rt.n a(c cVar) {
            return new a(cVar);
        }

        @Override // rt.n
        /* renamed from: b */
        public boolean test(rt.o oVar) {
            if (oVar.q(this.f51023d) > 0) {
                return true;
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d implements rt.n {
        private d() {
        }

        @Override // rt.n
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
        f51002a = c10;
        c cVar = new c(net.time4j.g0.J);
        f51003b = cVar;
        c cVar2 = new c(net.time4j.g0.N);
        f51004c = cVar2;
        f51005d = cVar.a(cVar2);
        f51006e = new d(null);
        f51007f = b(false);
        f51008g = b(true);
        f51009h = h(false);
        f51010i = h(true);
        f51011j = m(false);
        f51012k = m(true);
        f51013l = c(false);
        f51014m = c(true);
        f51015n = k(false);
        f51016o = k(true);
        f51017p = l(false);
        f51018q = l(true);
        f51019r = g(false);
        f51020s = g(true);
    }

    private static void a(c.d dVar, boolean z10) {
        dVar.b0(st.a.f50121l, st.j.f50170d);
        dVar.Z(st.a.f50122m, '0');
        dVar.g(net.time4j.g0.G, 2);
        dVar.X();
        if (z10) {
            dVar.l(':');
        }
        dVar.g(net.time4j.g0.H, 2);
        dVar.Y(f51005d);
        if (z10) {
            dVar.l(':');
        }
        dVar.g(net.time4j.g0.J, 2);
        dVar.Y(f51004c);
        if (f51002a == ',') {
            dVar.m(',', '.');
        } else {
            dVar.m('.', ',');
        }
        dVar.i(net.time4j.g0.N, 0, 9, false);
        for (int i10 = 0; i10 < 5; i10++) {
            dVar.L();
        }
    }

    private static tt.c b(boolean z10) {
        c.d k10 = tt.c.N(net.time4j.f0.class, Locale.ROOT).b0(st.a.f50121l, st.j.f50170d).Z(st.a.f50122m, '0').k(net.time4j.f0.A, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
        if (z10) {
            k10.l('-');
        }
        k10.g(net.time4j.f0.E, 2);
        if (z10) {
            k10.l('-');
        }
        return k10.g(net.time4j.f0.F, 2).L().L().F().U(st.g.STRICT);
    }

    private static tt.c c(boolean z10) {
        c.d N = tt.c.N(net.time4j.f0.class, Locale.ROOT);
        N.d(net.time4j.f0.f39306z, e(z10), d(z10));
        return N.F().U(st.g.STRICT);
    }

    private static tt.d d(boolean z10) {
        return new b(z10);
    }

    private static e e(boolean z10) {
        return new a(z10);
    }

    private static tt.c f(st.e eVar, boolean z10) {
        c.d N = tt.c.N(net.time4j.a0.class, Locale.ROOT);
        N.d(net.time4j.f0.f39306z, e(z10), d(z10));
        N.l('T');
        a(N, z10);
        N.C(eVar, z10, Collections.singletonList("Z"));
        return N.F();
    }

    private static tt.c g(boolean z10) {
        c.d N = tt.c.N(net.time4j.a0.class, Locale.ROOT);
        N.d(net.time4j.a0.T().M(), f(st.e.MEDIUM, z10), f(st.e.SHORT, z10));
        return N.F().U(st.g.STRICT).V(net.time4j.tz.p.f39641v);
    }

    private static tt.c h(boolean z10) {
        c.d k10 = tt.c.N(net.time4j.f0.class, Locale.ROOT).b0(st.a.f50121l, st.j.f50170d).Z(st.a.f50122m, '0').k(net.time4j.f0.A, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
        if (z10) {
            k10.l('-');
        }
        return k10.g(net.time4j.f0.H, 3).L().L().F().U(st.g.STRICT);
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
                            return (net.time4j.f0) f51012k.E(charSequence, sVar);
                        }
                        return (net.time4j.f0) f51011j.E(charSequence, sVar);
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
                return (net.time4j.f0) f51009h.E(charSequence, sVar);
            }
            return (net.time4j.f0) f51007f.E(charSequence, sVar);
        } else if (i11 == 1) {
            return (net.time4j.f0) f51010i.E(charSequence, sVar);
        } else {
            return (net.time4j.f0) f51008g.E(charSequence, sVar);
        }
    }

    private static tt.c k(boolean z10) {
        c.d N = tt.c.N(net.time4j.g0.class, Locale.ROOT);
        N.W(f51006e, 1);
        a(N, z10);
        return N.F().U(st.g.STRICT);
    }

    private static tt.c l(boolean z10) {
        c.d N = tt.c.N(i0.class, Locale.ROOT);
        N.d(net.time4j.f0.f39306z, e(z10), d(z10));
        N.l('T');
        a(N, z10);
        return N.F().U(st.g.STRICT);
    }

    private static tt.c m(boolean z10) {
        c.d k10 = tt.c.N(net.time4j.f0.class, Locale.ROOT).b0(st.a.f50121l, st.j.f50170d).Z(st.a.f50122m, '0').k(net.time4j.f0.B, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
        if (z10) {
            k10.l('-');
        }
        k10.l('W');
        k10.g(a1.f39075x.n(), 2);
        if (z10) {
            k10.l('-');
        }
        return k10.h(net.time4j.f0.G, 1).L().L().F().U(st.g.STRICT);
    }
}
