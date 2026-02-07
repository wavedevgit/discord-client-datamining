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
    private static final char f51050a;

    /* renamed from: b  reason: collision with root package name */
    private static final c f51051b;

    /* renamed from: c  reason: collision with root package name */
    private static final c f51052c;

    /* renamed from: d  reason: collision with root package name */
    private static final rt.n f51053d;

    /* renamed from: e  reason: collision with root package name */
    private static final rt.n f51054e;

    /* renamed from: f  reason: collision with root package name */
    public static final tt.c f51055f;

    /* renamed from: g  reason: collision with root package name */
    public static final tt.c f51056g;

    /* renamed from: h  reason: collision with root package name */
    public static final tt.c f51057h;

    /* renamed from: i  reason: collision with root package name */
    public static final tt.c f51058i;

    /* renamed from: j  reason: collision with root package name */
    public static final tt.c f51059j;

    /* renamed from: k  reason: collision with root package name */
    public static final tt.c f51060k;

    /* renamed from: l  reason: collision with root package name */
    public static final tt.c f51061l;

    /* renamed from: m  reason: collision with root package name */
    public static final tt.c f51062m;

    /* renamed from: n  reason: collision with root package name */
    public static final tt.c f51063n;

    /* renamed from: o  reason: collision with root package name */
    public static final tt.c f51064o;

    /* renamed from: p  reason: collision with root package name */
    public static final tt.c f51065p;

    /* renamed from: q  reason: collision with root package name */
    public static final tt.c f51066q;

    /* renamed from: r  reason: collision with root package name */
    public static final tt.c f51067r;

    /* renamed from: s  reason: collision with root package name */
    public static final tt.c f51068s;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f51069a;

        a(boolean z10) {
            this.f51069a = z10;
        }

        @Override // tt.e
        /* renamed from: a */
        public Object b(net.time4j.f0 f0Var, Appendable appendable, rt.d dVar, rt.t tVar) {
            tt.c cVar;
            if (this.f51069a) {
                cVar = l.f51056g;
            } else {
                cVar = l.f51055f;
            }
            cVar.J(f0Var, appendable, dVar);
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements tt.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f51070a;

        b(boolean z10) {
            this.f51070a = z10;
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
                            if (this.f51070a) {
                                return (net.time4j.f0) l.f51060k.E(charSequence, sVar);
                            }
                            return (net.time4j.f0) l.f51059j.E(charSequence, sVar);
                        }
                    } else {
                        i10 = i12 - f10;
                        break;
                    }
                } else {
                    i11++;
                }
            }
            if (this.f51070a) {
                if (i11 == 1) {
                    return (net.time4j.f0) l.f51058i.E(charSequence, sVar);
                }
                return (net.time4j.f0) l.f51056g.E(charSequence, sVar);
            }
            int i13 = i10 - 4;
            char charAt2 = charSequence.charAt(f10);
            if (charAt2 == '+' || charAt2 == '-') {
                i13 = i10 - 6;
            }
            if (i13 == 3) {
                return (net.time4j.f0) l.f51057h.E(charSequence, sVar);
            }
            return (net.time4j.f0) l.f51055f.E(charSequence, sVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class c implements rt.n {

        /* renamed from: d  reason: collision with root package name */
        private final rt.p f51071d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements rt.n {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ c f51072d;

            a(c cVar) {
                this.f51072d = cVar;
            }

            @Override // rt.n
            /* renamed from: a */
            public boolean test(rt.o oVar) {
                if (!c.this.test(oVar) && !this.f51072d.test(oVar)) {
                    return false;
                }
                return true;
            }
        }

        c(rt.p pVar) {
            this.f51071d = pVar;
        }

        rt.n a(c cVar) {
            return new a(cVar);
        }

        @Override // rt.n
        /* renamed from: b */
        public boolean test(rt.o oVar) {
            if (oVar.q(this.f51071d) > 0) {
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
        f51050a = c10;
        c cVar = new c(net.time4j.g0.J);
        f51051b = cVar;
        c cVar2 = new c(net.time4j.g0.N);
        f51052c = cVar2;
        f51053d = cVar.a(cVar2);
        f51054e = new d(null);
        f51055f = b(false);
        f51056g = b(true);
        f51057h = h(false);
        f51058i = h(true);
        f51059j = m(false);
        f51060k = m(true);
        f51061l = c(false);
        f51062m = c(true);
        f51063n = k(false);
        f51064o = k(true);
        f51065p = l(false);
        f51066q = l(true);
        f51067r = g(false);
        f51068s = g(true);
    }

    private static void a(c.d dVar, boolean z10) {
        dVar.b0(st.a.f50169l, st.j.f50218d);
        dVar.Z(st.a.f50170m, '0');
        dVar.g(net.time4j.g0.G, 2);
        dVar.X();
        if (z10) {
            dVar.l(':');
        }
        dVar.g(net.time4j.g0.H, 2);
        dVar.Y(f51053d);
        if (z10) {
            dVar.l(':');
        }
        dVar.g(net.time4j.g0.J, 2);
        dVar.Y(f51052c);
        if (f51050a == ',') {
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
        c.d k10 = tt.c.N(net.time4j.f0.class, Locale.ROOT).b0(st.a.f50169l, st.j.f50218d).Z(st.a.f50170m, '0').k(net.time4j.f0.A, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
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
        N.d(net.time4j.f0.f39354z, e(z10), d(z10));
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
        N.d(net.time4j.f0.f39354z, e(z10), d(z10));
        N.l('T');
        a(N, z10);
        N.C(eVar, z10, Collections.singletonList("Z"));
        return N.F();
    }

    private static tt.c g(boolean z10) {
        c.d N = tt.c.N(net.time4j.a0.class, Locale.ROOT);
        N.d(net.time4j.a0.T().M(), f(st.e.MEDIUM, z10), f(st.e.SHORT, z10));
        return N.F().U(st.g.STRICT).V(net.time4j.tz.p.f39689v);
    }

    private static tt.c h(boolean z10) {
        c.d k10 = tt.c.N(net.time4j.f0.class, Locale.ROOT).b0(st.a.f50169l, st.j.f50218d).Z(st.a.f50170m, '0').k(net.time4j.f0.A, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
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
                            return (net.time4j.f0) f51060k.E(charSequence, sVar);
                        }
                        return (net.time4j.f0) f51059j.E(charSequence, sVar);
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
                return (net.time4j.f0) f51057h.E(charSequence, sVar);
            }
            return (net.time4j.f0) f51055f.E(charSequence, sVar);
        } else if (i11 == 1) {
            return (net.time4j.f0) f51058i.E(charSequence, sVar);
        } else {
            return (net.time4j.f0) f51056g.E(charSequence, sVar);
        }
    }

    private static tt.c k(boolean z10) {
        c.d N = tt.c.N(net.time4j.g0.class, Locale.ROOT);
        N.W(f51054e, 1);
        a(N, z10);
        return N.F().U(st.g.STRICT);
    }

    private static tt.c l(boolean z10) {
        c.d N = tt.c.N(i0.class, Locale.ROOT);
        N.d(net.time4j.f0.f39354z, e(z10), d(z10));
        N.l('T');
        a(N, z10);
        return N.F().U(st.g.STRICT);
    }

    private static tt.c m(boolean z10) {
        c.d k10 = tt.c.N(net.time4j.f0.class, Locale.ROOT).b0(st.a.f50169l, st.j.f50218d).Z(st.a.f50170m, '0').k(net.time4j.f0.B, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
        if (z10) {
            k10.l('-');
        }
        k10.l('W');
        k10.g(a1.f39123x.n(), 2);
        if (z10) {
            k10.l('-');
        }
        return k10.h(net.time4j.f0.G, 1).L().L().F().U(st.g.STRICT);
    }
}
