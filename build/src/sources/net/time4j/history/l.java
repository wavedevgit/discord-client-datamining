package net.time4j.history;

import java.io.InvalidObjectException;
import java.text.ParsePosition;
import java.util.List;
import java.util.Locale;
import net.time4j.b0;
import net.time4j.f0;
import rt.p;
import rt.q;
import rt.r;
import rt.x;
import rt.z;
import st.s;
import st.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class l extends wt.c implements ut.a {
    private static final long serialVersionUID = -6283098762945747308L;
    private final d history;

    /* renamed from: q  reason: collision with root package name */
    private final transient int f39465q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a implements z {

        /* renamed from: d  reason: collision with root package name */
        private final int f39466d;

        /* renamed from: e  reason: collision with root package name */
        private final d f39467e;

        a(int i10, d dVar) {
            this.f39466d = i10;
            this.f39467e = dVar;
        }

        /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
        private h b(q qVar, int i10) {
            vt.a aVar;
            h e10 = this.f39467e.e((f0) qVar.s(f0.f39354z));
            vt.a aVar2 = vt.a.DUAL_DATING;
            o v10 = this.f39467e.v();
            int i11 = this.f39466d;
            switch (i11) {
                case 2:
                    break;
                case 3:
                    return this.f39467e.a(h.i(e10.e(), e10.g(), i10, e10.d()));
                case 4:
                    return h.i(e10.e(), e10.g(), e10.f(), i10);
                case 5:
                    int h10 = e10.h(this.f39467e.v());
                    h m10 = this.f39467e.m(e10.e(), h10);
                    int u10 = this.f39467e.u(e10.e(), h10);
                    if (i10 == 1) {
                        return m10;
                    }
                    if (i10 > 1 && i10 <= u10) {
                        return this.f39467e.e((f0) this.f39467e.d(m10).R(rt.h.e(i10 - 1)));
                    }
                    throw new IllegalArgumentException("Out of range: " + i10);
                case 6:
                case 7:
                    if (i11 == 6) {
                        aVar = vt.a.AFTER_NEW_YEAR;
                    } else {
                        aVar = vt.a.BEFORE_NEW_YEAR;
                    }
                    aVar2 = aVar;
                    break;
                case 8:
                    int i12 = 100;
                    int g10 = e10.g() % 100;
                    int i13 = (i10 - 1) * 100;
                    if (g10 != 0) {
                        i12 = g10;
                    }
                    return this.f39467e.a(h.j(e10.e(), i13 + i12, e10.f(), e10.d(), aVar2, v10));
                default:
                    throw new UnsupportedOperationException("Unknown element index: " + this.f39466d);
            }
            return this.f39467e.a(h.j(e10.e(), i10, e10.f(), e10.d(), aVar2, v10));
        }

        @Override // rt.z
        /* renamed from: c */
        public p a(q qVar) {
            throw new UnsupportedOperationException("Never called.");
        }

        @Override // rt.z
        /* renamed from: d */
        public p g(q qVar) {
            throw new UnsupportedOperationException("Never called.");
        }

        @Override // rt.z
        /* renamed from: e */
        public Integer k(q qVar) {
            int i10;
            h b10;
            int i11;
            int d10;
            try {
                h e10 = this.f39467e.e((f0) qVar.s(f0.f39354z));
                int i12 = 8;
                int i13 = 999984973;
                switch (this.f39466d) {
                    case 2:
                    case 6:
                    case 7:
                    case 8:
                        d dVar = this.f39467e;
                        if (dVar != d.D) {
                            if (dVar == d.C) {
                                if (e10.e() == j.BC) {
                                    i13 = 999979466;
                                } else {
                                    i13 = 999979465;
                                }
                            } else if (dVar == d.B) {
                                if (e10.e() == j.BC) {
                                    i13 = 1000000000;
                                } else {
                                    i13 = 999999999;
                                }
                            } else {
                                if (e10.e() == j.BC) {
                                    i10 = 45;
                                } else {
                                    i10 = 9999;
                                }
                                i13 = i10;
                            }
                        }
                        if (this.f39466d == 8) {
                            i13 = ((i13 - 1) / 100) + 1;
                        }
                        return Integer.valueOf(i13);
                    case 3:
                        if (e10.e() != j.BYZANTINE || e10.g() != 999984973) {
                            i12 = 12;
                        }
                        b10 = b(qVar, i12);
                        i11 = i12;
                        break;
                    case 4:
                        i11 = this.f39467e.k(e10).d(e10);
                        b10 = b(qVar, i11);
                        break;
                    case 5:
                        int u10 = this.f39467e.u(e10.e(), e10.h(this.f39467e.v()));
                        if (u10 != -1) {
                            return Integer.valueOf(u10);
                        }
                        throw new r("Length of historic year undefined.");
                    default:
                        throw new UnsupportedOperationException("Unknown element index: " + this.f39466d);
                }
                if (this.f39467e.B(b10)) {
                    return Integer.valueOf(i11);
                }
                List p10 = this.f39467e.p();
                int size = p10.size() - 1;
                while (true) {
                    if (size >= 0) {
                        f fVar = (f) p10.get(size);
                        if (e10.compareTo(fVar.f39442c) < 0) {
                            b10 = fVar.f39443d;
                        } else {
                            size--;
                        }
                    }
                }
                if (this.f39466d == 3) {
                    d10 = b10.f();
                } else {
                    d10 = b10.d();
                }
                return Integer.valueOf(d10);
            } catch (RuntimeException e11) {
                throw new r(e11.getMessage(), e11);
            }
        }

        @Override // rt.z
        /* renamed from: f */
        public Integer o(q qVar) {
            int d10;
            try {
                h e10 = this.f39467e.e((f0) qVar.s(f0.f39354z));
                int i10 = this.f39466d;
                if (i10 != 2 && i10 != 6 && i10 != 7 && i10 != 8) {
                    h b10 = b(qVar, 1);
                    if (this.f39467e.B(b10)) {
                        return 1;
                    }
                    if (this.f39466d != 5) {
                        List p10 = this.f39467e.p();
                        int size = p10.size() - 1;
                        while (true) {
                            if (size < 0) {
                                break;
                            }
                            f fVar = (f) p10.get(size);
                            if (e10.compareTo(fVar.f39442c) >= 0) {
                                b10 = fVar.f39442c;
                                break;
                            }
                            size--;
                        }
                        if (this.f39466d == 3) {
                            d10 = b10.f();
                        } else {
                            d10 = b10.d();
                        }
                        return Integer.valueOf(d10);
                    }
                    throw new r("Historic New Year cannot be determined.");
                }
                if (e10.e() != j.BYZANTINE || e10.f() < 9) {
                    return 1;
                }
                return 0;
            } catch (IllegalArgumentException e11) {
                throw new r(e11.getMessage(), e11);
            }
        }

        @Override // rt.z
        /* renamed from: h */
        public Integer y(q qVar) {
            int g10;
            try {
                f0 f0Var = (f0) qVar.s(f0.f39354z);
                h e10 = this.f39467e.e(f0Var);
                switch (this.f39466d) {
                    case 2:
                        g10 = e10.g();
                        break;
                    case 3:
                        g10 = e10.f();
                        break;
                    case 4:
                        g10 = e10.d();
                        break;
                    case 5:
                        g10 = (int) ((f0Var.i() - this.f39467e.d(this.f39467e.m(e10.e(), e10.h(this.f39467e.v()))).i()) + 1);
                        break;
                    case 6:
                    case 7:
                        g10 = e10.h(this.f39467e.v());
                        break;
                    case 8:
                        g10 = ((e10.g() - 1) / 100) + 1;
                        break;
                    default:
                        throw new UnsupportedOperationException("Unknown element index: " + this.f39466d);
                }
                return Integer.valueOf(g10);
            } catch (IllegalArgumentException e11) {
                throw new r(e11.getMessage(), e11);
            }
        }

        @Override // rt.z
        /* renamed from: i */
        public boolean n(q qVar, Integer num) {
            if (num == null) {
                return false;
            }
            try {
                return this.f39467e.B(b(qVar, num.intValue()));
            } catch (IllegalArgumentException unused) {
                return false;
            }
        }

        @Override // rt.z
        /* renamed from: j */
        public q u(q qVar, Integer num, boolean z10) {
            if (num != null) {
                return qVar.E(f0.f39354z, this.f39467e.d(b(qVar, num.intValue())));
            }
            throw new IllegalArgumentException("Missing historic element value.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(char c10, int i10, int i11, d dVar, int i12) {
        super(O(i12), c10, i10, i11);
        this.history = dVar;
        this.f39465q = i12;
    }

    private void H(String str, int i10) {
        if (str.length() <= i10) {
            return;
        }
        throw new IllegalArgumentException("Element " + name() + " cannot be printed as the formatted value " + str + " exceeds the maximum width of " + i10 + ".");
    }

    private String I(st.j jVar, char c10, int i10, int i11, int i12) {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(jVar.t(i10));
        sb2.append('/');
        if (jVar.o() && i11 >= 100 && pt.c.a(i10, 100) == pt.c.a(i11, 100)) {
            int c11 = pt.c.c(i11, 100);
            if (c11 < 10) {
                sb2.append(c10);
            }
            sb2.append(jVar.t(c11));
        } else {
            sb2.append(jVar.t(i11));
        }
        if (jVar.o()) {
            return L(sb2.toString(), i12, c10);
        }
        return sb2.toString();
    }

    private int J(int i10, int i11, int i12) {
        if (i11 >= 0) {
            int i13 = 100;
            if (i11 < 100 && i10 >= 100) {
                if (i11 < 10) {
                    i13 = 10;
                }
                if (Math.abs(i11 - pt.c.c(i10, i13)) <= i12) {
                    return (pt.c.a(i10, i13) * i13) + i11;
                }
                return Integer.MAX_VALUE;
            }
            return Integer.MAX_VALUE;
        }
        return Integer.MAX_VALUE;
    }

    private s K(rt.d dVar, st.m mVar) {
        return st.b.d((Locale) dVar.b(st.a.f50160c, Locale.ROOT)).l((v) dVar.b(st.a.f50164g, v.WIDE), mVar);
    }

    private static String L(String str, int i10, char c10) {
        int length = str.length();
        if (i10 <= length) {
            return str;
        }
        StringBuilder sb2 = new StringBuilder();
        int i11 = i10 - length;
        for (int i12 = 0; i12 < i11; i12++) {
            sb2.append(c10);
        }
        sb2.append(str);
        return sb2.toString();
    }

    private static int N(st.j jVar, char c10, CharSequence charSequence, int i10, ParsePosition parsePosition, st.g gVar) {
        int i11;
        boolean z10;
        int charAt;
        int i12 = 0;
        long j10 = 0;
        if (jVar.o()) {
            if (jVar == st.j.f50218d && charSequence.charAt(i10) == '-') {
                i11 = i10 + 1;
                z10 = true;
            } else {
                i11 = i10;
                z10 = false;
            }
            if (!gVar.e()) {
                i12 = jVar.m().charAt(0);
            }
            int min = Math.min(i11 + 9, charSequence.length());
            int i13 = i11;
            while (i11 < min) {
                int charAt2 = charSequence.charAt(i11) - c10;
                if (charAt2 >= 0 && charAt2 <= 9) {
                    j10 = (j10 * 10) + charAt2;
                    i13++;
                } else if (i12 == 0 || c10 == i12 || (charAt = charSequence.charAt(i11) - i12) < 0 || charAt > 9) {
                    break;
                } else {
                    j10 = (j10 * 10) + charAt;
                    i13++;
                    c10 = i12;
                }
                i11++;
            }
            if (j10 > 2147483647L) {
                parsePosition.setErrorIndex(i10);
                return Integer.MIN_VALUE;
            }
            if (z10) {
                if (i13 != i10 + 1) {
                    j10 = pt.c.k(j10);
                }
            }
            i10 = i13;
        } else {
            int length = charSequence.length();
            for (int i14 = i10; i14 < length && jVar.j(charSequence.charAt(i14)); i14++) {
                i12++;
            }
            if (i12 > 0) {
                int i15 = i12 + i10;
                j10 = jVar.r(charSequence.subSequence(i10, i15).toString(), gVar);
                i10 = i15;
            }
        }
        parsePosition.setIndex(i10);
        return (int) j10;
    }

    private static String O(int i10) {
        switch (i10) {
            case 2:
                return "YEAR_OF_ERA";
            case 3:
                return "HISTORIC_MONTH";
            case 4:
                return "HISTORIC_DAY_OF_MONTH";
            case 5:
                return "HISTORIC_DAY_OF_YEAR";
            case 6:
                return "YEAR_AFTER";
            case 7:
                return "YEAR_BEFORE";
            case 8:
                return "CENTURY_OF_ERA";
            default:
                throw new UnsupportedOperationException("Unknown element index: " + i10);
        }
    }

    private Object readResolve() {
        String name = name();
        if (name.equals("YEAR_OF_ERA")) {
            return this.history.M();
        }
        if (name.equals("HISTORIC_MONTH")) {
            return this.history.C();
        }
        if (name.equals("HISTORIC_DAY_OF_MONTH")) {
            return this.history.g();
        }
        if (name.equals("HISTORIC_DAY_OF_YEAR")) {
            return this.history.h();
        }
        if (name.equals("YEAR_AFTER")) {
            return this.history.L(vt.a.AFTER_NEW_YEAR);
        }
        if (name.equals("YEAR_BEFORE")) {
            return this.history.L(vt.a.BEFORE_NEW_YEAR);
        }
        if (name.equals("CENTURY_OF_ERA")) {
            return this.history.b();
        }
        throw new InvalidObjectException("Unknown element: " + name);
    }

    @Override // wt.c, rt.e
    protected boolean E() {
        return false;
    }

    @Override // st.t
    /* renamed from: M */
    public Integer r(CharSequence charSequence, ParsePosition parsePosition, rt.d dVar) {
        return w(charSequence, parsePosition, dVar, null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // rt.e
    public z c(x xVar) {
        if (xVar.E(f0.f39354z)) {
            return new a(this.f39465q, this.history);
        }
        return null;
    }

    @Override // rt.e
    protected boolean l(rt.e eVar) {
        return this.history.equals(((l) eVar).history);
    }

    @Override // st.t
    public void v(rt.o oVar, Appendable appendable, rt.d dVar) {
        char c10;
        st.j jVar = (st.j) dVar.b(st.a.f50169l, st.j.f50218d);
        rt.c cVar = st.a.f50170m;
        if (dVar.c(cVar)) {
            c10 = ((Character) dVar.a(cVar)).charValue();
        } else if (jVar.o()) {
            c10 = jVar.m().charAt(0);
        } else {
            c10 = '0';
        }
        x(oVar, appendable, dVar, jVar, c10, 1, 10);
    }

    @Override // ut.a
    public Integer w(CharSequence charSequence, ParsePosition parsePosition, rt.d dVar, q qVar) {
        char c10;
        st.g gVar;
        int i10 = this.f39465q;
        if (i10 == 3) {
            int index = parsePosition.getIndex();
            if (((Integer) dVar.b(ut.a.f52135m, 0)).intValue() == 0) {
                rt.c cVar = st.a.f50165h;
                st.m mVar = st.m.FORMAT;
                st.m mVar2 = (st.m) dVar.b(cVar, mVar);
                b0 b0Var = (b0) K(dVar, mVar2).c(charSequence, parsePosition, b0.class, dVar);
                if (b0Var == null && ((Boolean) dVar.b(st.a.f50168k, Boolean.TRUE)).booleanValue()) {
                    parsePosition.setErrorIndex(-1);
                    parsePosition.setIndex(index);
                    if (mVar2 == mVar) {
                        mVar = st.m.STANDALONE;
                    }
                    b0Var = (b0) K(dVar, mVar).c(charSequence, parsePosition, b0.class, dVar);
                }
                if (b0Var == null) {
                    return null;
                }
                return Integer.valueOf(b0Var.d());
            }
        } else if (i10 == 6 || i10 == 7 || i10 == 8) {
            throw new r("Not parseable as text element: " + name());
        }
        st.j jVar = (st.j) dVar.b(st.a.f50169l, st.j.f50218d);
        rt.c cVar2 = st.a.f50170m;
        if (dVar.c(cVar2)) {
            c10 = ((Character) dVar.a(cVar2)).charValue();
        } else if (jVar.o()) {
            c10 = jVar.m().charAt(0);
        } else {
            c10 = '0';
        }
        char c11 = c10;
        if (jVar.o()) {
            gVar = st.g.SMART;
        } else {
            gVar = (st.g) dVar.b(st.a.f50163f, st.g.SMART);
        }
        st.g gVar2 = gVar;
        int index2 = parsePosition.getIndex();
        int N = N(jVar, c11, charSequence, index2, parsePosition, gVar2);
        int index3 = parsePosition.getIndex();
        int i11 = 2;
        if (this.f39465q == 2 && index3 > index2 && !o.f39478d.equals(this.history.v()) && index3 < charSequence.length() && charSequence.charAt(index3) == '/') {
            rt.c cVar3 = d.A;
            vt.a aVar = vt.a.DUAL_DATING;
            if (dVar.b(cVar3, aVar) == aVar) {
                int i12 = index3 + 1;
                int N2 = N(jVar, c11, charSequence, i12, parsePosition, gVar2);
                int index4 = parsePosition.getIndex();
                if (index4 == i12) {
                    parsePosition.setIndex(index3);
                } else {
                    if (this.history.v().f(j.AD, N) != n.f39475s) {
                        i11 = 1;
                    }
                    int J = J(N, N2, i11);
                    if (jVar.o() && J != Integer.MAX_VALUE) {
                        if (qVar != null) {
                            qVar.C(wt.c.f54171p, N);
                        }
                        index3 = index4;
                        N = J;
                    } else if (Math.abs(N2 - N) <= i11) {
                        if (qVar != null) {
                            qVar.C(wt.c.f54171p, N);
                        }
                        N = N2;
                        index3 = index4;
                    } else {
                        parsePosition.setIndex(index3);
                    }
                }
            }
        }
        if (index3 == index2) {
            parsePosition.setErrorIndex(index2);
            return null;
        }
        return Integer.valueOf(N);
    }

    @Override // ut.a
    public void x(rt.o oVar, Appendable appendable, rt.d dVar, st.j jVar, char c10, int i10, int i11) {
        h hVar;
        int h10;
        if (this.f39465q == 5) {
            appendable.append(String.valueOf(oVar.s(this.history.h())));
            return;
        }
        if (oVar instanceof pt.a) {
            hVar = this.history.e(f0.w0((pt.a) oVar));
        } else {
            hVar = (h) oVar.s(this.history.f());
        }
        int i12 = this.f39465q;
        if (i12 != 2) {
            if (i12 != 3) {
                if (i12 == 4) {
                    appendable.append(String.valueOf(hVar.d()));
                    return;
                }
                throw new r("Not printable as text: " + name());
            }
            int intValue = ((Integer) dVar.b(ut.a.f52135m, 0)).intValue();
            int f10 = hVar.f();
            if (intValue == 0) {
                appendable.append(K(dVar, (st.m) dVar.b(st.a.f50165h, st.m.FORMAT)).f(b0.f(f10)));
                return;
            }
            String t10 = jVar.t(f10);
            if (jVar.o()) {
                t10 = L(t10, intValue, c10);
            }
            appendable.append(t10);
            return;
        }
        o v10 = this.history.v();
        int g10 = hVar.g();
        String str = null;
        if (!o.f39478d.equals(v10) && (h10 = hVar.h(v10)) != g10) {
            rt.c cVar = d.A;
            vt.a aVar = vt.a.DUAL_DATING;
            if (dVar.b(cVar, aVar) == aVar) {
                str = I(jVar, c10, h10, g10, i10);
            } else {
                g10 = h10;
            }
        }
        if (str == null) {
            if (jVar.o()) {
                str = L(jVar.t(g10), i10, c10);
            } else {
                str = jVar.t(g10);
            }
        }
        if (jVar.o()) {
            char charAt = jVar.m().charAt(0);
            if (c10 != charAt) {
                StringBuilder sb2 = new StringBuilder();
                int length = str.length();
                for (int i13 = 0; i13 < length; i13++) {
                    char charAt2 = str.charAt(i13);
                    if (jVar.j(charAt2)) {
                        sb2.append((char) (charAt2 + (c10 - charAt)));
                    } else {
                        sb2.append(charAt2);
                    }
                }
                str = sb2.toString();
            }
            H(str, i11);
        }
        appendable.append(str);
    }
}
