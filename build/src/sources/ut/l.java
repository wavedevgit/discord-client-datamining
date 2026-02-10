package ut;

import java.text.ParseException;
import java.util.Collections;
import java.util.Locale;
import net.time4j.a1;
import net.time4j.i0;
import ut.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class l {

    /* renamed from: a  reason: collision with root package name */
    private static final char f51955a;

    /* renamed from: b  reason: collision with root package name */
    private static final c f51956b;

    /* renamed from: c  reason: collision with root package name */
    private static final c f51957c;

    /* renamed from: d  reason: collision with root package name */
    private static final st.n f51958d;

    /* renamed from: e  reason: collision with root package name */
    private static final st.n f51959e;

    /* renamed from: f  reason: collision with root package name */
    public static final ut.c f51960f;

    /* renamed from: g  reason: collision with root package name */
    public static final ut.c f51961g;

    /* renamed from: h  reason: collision with root package name */
    public static final ut.c f51962h;

    /* renamed from: i  reason: collision with root package name */
    public static final ut.c f51963i;

    /* renamed from: j  reason: collision with root package name */
    public static final ut.c f51964j;

    /* renamed from: k  reason: collision with root package name */
    public static final ut.c f51965k;

    /* renamed from: l  reason: collision with root package name */
    public static final ut.c f51966l;

    /* renamed from: m  reason: collision with root package name */
    public static final ut.c f51967m;

    /* renamed from: n  reason: collision with root package name */
    public static final ut.c f51968n;

    /* renamed from: o  reason: collision with root package name */
    public static final ut.c f51969o;

    /* renamed from: p  reason: collision with root package name */
    public static final ut.c f51970p;

    /* renamed from: q  reason: collision with root package name */
    public static final ut.c f51971q;

    /* renamed from: r  reason: collision with root package name */
    public static final ut.c f51972r;

    /* renamed from: s  reason: collision with root package name */
    public static final ut.c f51973s;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f51974a;

        a(boolean z10) {
            this.f51974a = z10;
        }

        @Override // ut.e
        /* renamed from: b */
        public Object a(net.time4j.f0 f0Var, Appendable appendable, st.d dVar, st.t tVar) {
            ut.c cVar;
            if (this.f51974a) {
                cVar = l.f51961g;
            } else {
                cVar = l.f51960f;
            }
            cVar.J(f0Var, appendable, dVar);
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements ut.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f51975a;

        b(boolean z10) {
            this.f51975a = z10;
        }

        @Override // ut.d
        /* renamed from: a */
        public net.time4j.f0 b(CharSequence charSequence, s sVar, st.d dVar) {
            int length = charSequence.length();
            int f10 = sVar.f();
            int i10 = length - f10;
            int i11 = 0;
            for (int i12 = f10 + 1; i12 < length; i12++) {
                char charAt = charSequence.charAt(i12);
                if (charAt != '-') {
                    if (charAt != '/' && charAt != 'T') {
                        if (charAt == 'W') {
                            if (this.f51975a) {
                                return (net.time4j.f0) l.f51965k.E(charSequence, sVar);
                            }
                            return (net.time4j.f0) l.f51964j.E(charSequence, sVar);
                        }
                    } else {
                        i10 = i12 - f10;
                        break;
                    }
                } else {
                    i11++;
                }
            }
            if (this.f51975a) {
                if (i11 == 1) {
                    return (net.time4j.f0) l.f51963i.E(charSequence, sVar);
                }
                return (net.time4j.f0) l.f51961g.E(charSequence, sVar);
            }
            int i13 = i10 - 4;
            char charAt2 = charSequence.charAt(f10);
            if (charAt2 == '+' || charAt2 == '-') {
                i13 = i10 - 6;
            }
            if (i13 == 3) {
                return (net.time4j.f0) l.f51962h.E(charSequence, sVar);
            }
            return (net.time4j.f0) l.f51960f.E(charSequence, sVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class c implements st.n {

        /* renamed from: d  reason: collision with root package name */
        private final st.p f51976d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements st.n {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ c f51977d;

            a(c cVar) {
                this.f51977d = cVar;
            }

            @Override // st.n
            /* renamed from: a */
            public boolean test(st.o oVar) {
                if (!c.this.test(oVar) && !this.f51977d.test(oVar)) {
                    return false;
                }
                return true;
            }
        }

        c(st.p pVar) {
            this.f51976d = pVar;
        }

        st.n a(c cVar) {
            return new a(cVar);
        }

        @Override // st.n
        /* renamed from: b */
        public boolean test(st.o oVar) {
            if (oVar.v(this.f51976d) > 0) {
                return true;
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d implements st.n {
        private d() {
        }

        @Override // st.n
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
        f51955a = c10;
        c cVar = new c(net.time4j.g0.J);
        f51956b = cVar;
        c cVar2 = new c(net.time4j.g0.N);
        f51957c = cVar2;
        f51958d = cVar.a(cVar2);
        f51959e = new d(null);
        f51960f = b(false);
        f51961g = b(true);
        f51962h = h(false);
        f51963i = h(true);
        f51964j = m(false);
        f51965k = m(true);
        f51966l = c(false);
        f51967m = c(true);
        f51968n = k(false);
        f51969o = k(true);
        f51970p = l(false);
        f51971q = l(true);
        f51972r = g(false);
        f51973s = g(true);
    }

    private static void a(c.d dVar, boolean z10) {
        dVar.b0(tt.a.f51013l, tt.j.f51062d);
        dVar.Z(tt.a.f51014m, '0');
        dVar.g(net.time4j.g0.G, 2);
        dVar.X();
        if (z10) {
            dVar.l(':');
        }
        dVar.g(net.time4j.g0.H, 2);
        dVar.Y(f51958d);
        if (z10) {
            dVar.l(':');
        }
        dVar.g(net.time4j.g0.J, 2);
        dVar.Y(f51957c);
        if (f51955a == ',') {
            dVar.m(',', '.');
        } else {
            dVar.m('.', ',');
        }
        dVar.i(net.time4j.g0.N, 0, 9, false);
        for (int i10 = 0; i10 < 5; i10++) {
            dVar.L();
        }
    }

    private static ut.c b(boolean z10) {
        c.d k10 = ut.c.N(net.time4j.f0.class, Locale.ROOT).b0(tt.a.f51013l, tt.j.f51062d).Z(tt.a.f51014m, '0').k(net.time4j.f0.A, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
        if (z10) {
            k10.l('-');
        }
        k10.g(net.time4j.f0.E, 2);
        if (z10) {
            k10.l('-');
        }
        return k10.g(net.time4j.f0.F, 2).L().L().F().U(tt.g.STRICT);
    }

    private static ut.c c(boolean z10) {
        c.d N = ut.c.N(net.time4j.f0.class, Locale.ROOT);
        N.d(net.time4j.f0.f38446z, e(z10), d(z10));
        return N.F().U(tt.g.STRICT);
    }

    private static ut.d d(boolean z10) {
        return new b(z10);
    }

    private static e e(boolean z10) {
        return new a(z10);
    }

    private static ut.c f(tt.e eVar, boolean z10) {
        c.d N = ut.c.N(net.time4j.a0.class, Locale.ROOT);
        N.d(net.time4j.f0.f38446z, e(z10), d(z10));
        N.l('T');
        a(N, z10);
        N.C(eVar, z10, Collections.singletonList("Z"));
        return N.F();
    }

    private static ut.c g(boolean z10) {
        c.d N = ut.c.N(net.time4j.a0.class, Locale.ROOT);
        N.d(net.time4j.a0.T().M(), f(tt.e.MEDIUM, z10), f(tt.e.SHORT, z10));
        return N.F().U(tt.g.STRICT).V(net.time4j.tz.p.f38781v);
    }

    private static ut.c h(boolean z10) {
        c.d k10 = ut.c.N(net.time4j.f0.class, Locale.ROOT).b0(tt.a.f51013l, tt.j.f51062d).Z(tt.a.f51014m, '0').k(net.time4j.f0.A, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
        if (z10) {
            k10.l('-');
        }
        return k10.g(net.time4j.f0.H, 3).L().L().F().U(tt.g.STRICT);
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
                            return (net.time4j.f0) f51965k.E(charSequence, sVar);
                        }
                        return (net.time4j.f0) f51964j.E(charSequence, sVar);
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
                return (net.time4j.f0) f51962h.E(charSequence, sVar);
            }
            return (net.time4j.f0) f51960f.E(charSequence, sVar);
        } else if (i11 == 1) {
            return (net.time4j.f0) f51963i.E(charSequence, sVar);
        } else {
            return (net.time4j.f0) f51961g.E(charSequence, sVar);
        }
    }

    private static ut.c k(boolean z10) {
        c.d N = ut.c.N(net.time4j.g0.class, Locale.ROOT);
        N.W(f51959e, 1);
        a(N, z10);
        return N.F().U(tt.g.STRICT);
    }

    private static ut.c l(boolean z10) {
        c.d N = ut.c.N(i0.class, Locale.ROOT);
        N.d(net.time4j.f0.f38446z, e(z10), d(z10));
        N.l('T');
        a(N, z10);
        return N.F().U(tt.g.STRICT);
    }

    private static ut.c m(boolean z10) {
        c.d k10 = ut.c.N(net.time4j.f0.class, Locale.ROOT).b0(tt.a.f51013l, tt.j.f51062d).Z(tt.a.f51014m, '0').k(net.time4j.f0.B, 4, 9, x.SHOW_WHEN_BIG_NUMBER);
        if (z10) {
            k10.l('-');
        }
        k10.l('W');
        k10.g(a1.f38215x.n(), 2);
        if (z10) {
            k10.l('-');
        }
        return k10.h(net.time4j.f0.G, 1).L().L().F().U(tt.g.STRICT);
    }
}
