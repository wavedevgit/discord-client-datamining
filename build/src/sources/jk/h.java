package jk;

import java.util.List;
import jk.j1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final g f31045a;

    /* renamed from: b  reason: collision with root package name */
    private int f31046b;

    /* renamed from: c  reason: collision with root package name */
    private int f31047c;

    /* renamed from: d  reason: collision with root package name */
    private int f31048d = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f31049a;

        static {
            int[] iArr = new int[j1.b.values().length];
            f31049a = iArr;
            try {
                iArr[j1.b.f31086u.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f31049a[j1.b.f31090y.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f31049a[j1.b.f31079i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f31049a[j1.b.A.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f31049a[j1.b.f31085t.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f31049a[j1.b.f31084s.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f31049a[j1.b.f31080o.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f31049a[j1.b.f31083r.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f31049a[j1.b.f31081p.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f31049a[j1.b.f31089x.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f31049a[j1.b.B.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f31049a[j1.b.C.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                f31049a[j1.b.D.ordinal()] = 13;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                f31049a[j1.b.E.ordinal()] = 14;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                f31049a[j1.b.f31087v.ordinal()] = 15;
            } catch (NoSuchFieldError unused15) {
            }
            try {
                f31049a[j1.b.f31091z.ordinal()] = 16;
            } catch (NoSuchFieldError unused16) {
            }
            try {
                f31049a[j1.b.f31082q.ordinal()] = 17;
            } catch (NoSuchFieldError unused17) {
            }
        }
    }

    private h(g gVar) {
        g gVar2 = (g) u.b(gVar, "input");
        this.f31045a = gVar2;
        gVar2.f31020d = this;
    }

    public static h N(g gVar) {
        h hVar = gVar.f31020d;
        if (hVar != null) {
            return hVar;
        }
        return new h(gVar);
    }

    private void O(Object obj, x0 x0Var, l lVar) {
        int i10 = this.f31047c;
        this.f31047c = j1.c(j1.a(this.f31046b), 4);
        try {
            x0Var.g(obj, this, lVar);
            if (this.f31046b == this.f31047c) {
                return;
            }
            throw v.h();
        } finally {
            this.f31047c = i10;
        }
    }

    private void P(Object obj, x0 x0Var, l lVar) {
        g gVar;
        int D = this.f31045a.D();
        g gVar2 = this.f31045a;
        if (gVar2.f31017a < gVar2.f31018b) {
            int l10 = gVar2.l(D);
            this.f31045a.f31017a++;
            x0Var.g(obj, this, lVar);
            this.f31045a.a(0);
            gVar.f31017a--;
            this.f31045a.k(l10);
            return;
        }
        throw v.i();
    }

    private Object Q(j1.b bVar, Class cls, l lVar) {
        switch (a.f31049a[bVar.ordinal()]) {
            case 1:
                return Boolean.valueOf(d());
            case 2:
                return n();
            case 3:
                return Double.valueOf(readDouble());
            case 4:
                return Integer.valueOf(j());
            case 5:
                return Integer.valueOf(t());
            case 6:
                return Long.valueOf(a());
            case 7:
                return Float.valueOf(readFloat());
            case 8:
                return Integer.valueOf(o());
            case 9:
                return Long.valueOf(G());
            case 10:
                return S(cls, lVar);
            case 11:
                return Integer.valueOf(D());
            case 12:
                return Long.valueOf(e());
            case 13:
                return Integer.valueOf(k());
            case 14:
                return Long.valueOf(x());
            case 15:
                return H();
            case 16:
                return Integer.valueOf(g());
            case 17:
                return Long.valueOf(r());
            default:
                throw new IllegalArgumentException("unsupported field type.");
        }
    }

    private Object R(x0 x0Var, l lVar) {
        Object d10 = x0Var.d();
        O(d10, x0Var, lVar);
        x0Var.b(d10);
        return d10;
    }

    private Object T(x0 x0Var, l lVar) {
        Object d10 = x0Var.d();
        P(d10, x0Var, lVar);
        x0Var.b(d10);
        return d10;
    }

    private void V(int i10) {
        if (this.f31045a.d() == i10) {
            return;
        }
        throw v.m();
    }

    private void W(int i10) {
        if (j1.b(this.f31046b) == i10) {
            return;
        }
        throw v.e();
    }

    private void X(int i10) {
        if ((i10 & 3) == 0) {
            return;
        }
        throw v.h();
    }

    private void Y(int i10) {
        if ((i10 & 7) == 0) {
            return;
        }
        throw v.h();
    }

    @Override // jk.w0
    public void A(List list) {
        U(list, false);
    }

    @Override // jk.w0
    public void B(List list) {
        int C;
        if (list instanceof q) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f31046b);
            if (b10 != 2) {
                if (b10 != 5) {
                    throw v.e();
                }
                this.f31045a.s();
                throw null;
            }
            X(this.f31045a.D());
            this.f31045a.d();
            this.f31045a.s();
            throw null;
        }
        int b11 = j1.b(this.f31046b);
        if (b11 != 2) {
            if (b11 == 5) {
                do {
                    list.add(Float.valueOf(this.f31045a.s()));
                    if (!this.f31045a.e()) {
                        C = this.f31045a.C();
                    } else {
                        return;
                    }
                } while (C == this.f31046b);
                this.f31048d = C;
                return;
            }
            throw v.e();
        }
        int D = this.f31045a.D();
        X(D);
        int d10 = this.f31045a.d() + D;
        do {
            list.add(Float.valueOf(this.f31045a.s()));
        } while (this.f31045a.d() < d10);
    }

    @Override // jk.w0
    public boolean C() {
        int i10;
        if (!this.f31045a.e() && (i10 = this.f31046b) != this.f31047c) {
            return this.f31045a.F(i10);
        }
        return false;
    }

    @Override // jk.w0
    public int D() {
        W(5);
        return this.f31045a.w();
    }

    @Override // jk.w0
    public void E(List list) {
        int C;
        if (j1.b(this.f31046b) == 2) {
            do {
                list.add(n());
                if (this.f31045a.e()) {
                    return;
                }
                C = this.f31045a.C();
            } while (C == this.f31046b);
            this.f31048d = C;
            return;
        }
        throw v.e();
    }

    @Override // jk.w0
    public void F(List list) {
        int C;
        if (list instanceof i) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f31046b);
            if (b10 != 1) {
                if (b10 != 2) {
                    throw v.e();
                }
                Y(this.f31045a.D());
                this.f31045a.d();
                this.f31045a.o();
                throw null;
            }
            this.f31045a.o();
            throw null;
        }
        int b11 = j1.b(this.f31046b);
        if (b11 != 1) {
            if (b11 == 2) {
                int D = this.f31045a.D();
                Y(D);
                int d10 = this.f31045a.d() + D;
                do {
                    list.add(Double.valueOf(this.f31045a.o()));
                } while (this.f31045a.d() < d10);
                return;
            }
            throw v.e();
        }
        do {
            list.add(Double.valueOf(this.f31045a.o()));
            if (this.f31045a.e()) {
                return;
            }
            C = this.f31045a.C();
        } while (C == this.f31046b);
        this.f31048d = C;
    }

    @Override // jk.w0
    public long G() {
        W(0);
        return this.f31045a.u();
    }

    @Override // jk.w0
    public String H() {
        W(2);
        return this.f31045a.B();
    }

    @Override // jk.w0
    public void I(List list, x0 x0Var, l lVar) {
        int C;
        if (j1.b(this.f31046b) == 3) {
            int i10 = this.f31046b;
            do {
                list.add(R(x0Var, lVar));
                if (!this.f31045a.e() && this.f31048d == 0) {
                    C = this.f31045a.C();
                } else {
                    return;
                }
            } while (C == i10);
            this.f31048d = C;
            return;
        }
        throw v.e();
    }

    @Override // jk.w0
    public void J(List list, x0 x0Var, l lVar) {
        int C;
        if (j1.b(this.f31046b) == 2) {
            int i10 = this.f31046b;
            do {
                list.add(T(x0Var, lVar));
                if (!this.f31045a.e() && this.f31048d == 0) {
                    C = this.f31045a.C();
                } else {
                    return;
                }
            } while (C == i10);
            this.f31048d = C;
            return;
        }
        throw v.e();
    }

    @Override // jk.w0
    public void K(Object obj, x0 x0Var, l lVar) {
        W(3);
        O(obj, x0Var, lVar);
    }

    /* JADX WARN: Code restructure failed: missing block: B:26:0x005e, code lost:
        r8.put(r2, r3);
     */
    /* JADX WARN: Code restructure failed: missing block: B:27:0x0061, code lost:
        r7.f31045a.k(r1);
     */
    /* JADX WARN: Code restructure failed: missing block: B:28:0x0066, code lost:
        return;
     */
    @Override // jk.w0
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void L(java.util.Map r8, jk.b0.a r9, jk.l r10) {
        /*
            r7 = this;
            r0 = 2
            r7.W(r0)
            jk.g r1 = r7.f31045a
            int r1 = r1.D()
            jk.g r2 = r7.f31045a
            int r1 = r2.l(r1)
            java.lang.Object r2 = r9.f30987b
            java.lang.Object r3 = r9.f30989d
        L14:
            int r4 = r7.z()     // Catch: java.lang.Throwable -> L3a
            r5 = 2147483647(0x7fffffff, float:NaN)
            if (r4 == r5) goto L5e
            jk.g r5 = r7.f31045a     // Catch: java.lang.Throwable -> L3a
            boolean r5 = r5.e()     // Catch: java.lang.Throwable -> L3a
            if (r5 == 0) goto L26
            goto L5e
        L26:
            r5 = 1
            java.lang.String r6 = "Unable to parse map entry."
            if (r4 == r5) goto L49
            if (r4 == r0) goto L3c
            boolean r4 = r7.C()     // Catch: java.lang.Throwable -> L3a jk.v.a -> L51
            if (r4 == 0) goto L34
            goto L14
        L34:
            jk.v r4 = new jk.v     // Catch: java.lang.Throwable -> L3a jk.v.a -> L51
            r4.<init>(r6)     // Catch: java.lang.Throwable -> L3a jk.v.a -> L51
            throw r4     // Catch: java.lang.Throwable -> L3a jk.v.a -> L51
        L3a:
            r8 = move-exception
            goto L67
        L3c:
            jk.j1$b r4 = r9.f30988c     // Catch: java.lang.Throwable -> L3a jk.v.a -> L51
            java.lang.Object r5 = r9.f30989d     // Catch: java.lang.Throwable -> L3a jk.v.a -> L51
            java.lang.Class r5 = r5.getClass()     // Catch: java.lang.Throwable -> L3a jk.v.a -> L51
            java.lang.Object r3 = r7.Q(r4, r5, r10)     // Catch: java.lang.Throwable -> L3a jk.v.a -> L51
            goto L14
        L49:
            jk.j1$b r4 = r9.f30986a     // Catch: java.lang.Throwable -> L3a jk.v.a -> L51
            r5 = 0
            java.lang.Object r2 = r7.Q(r4, r5, r5)     // Catch: java.lang.Throwable -> L3a jk.v.a -> L51
            goto L14
        L51:
            boolean r4 = r7.C()     // Catch: java.lang.Throwable -> L3a
            if (r4 == 0) goto L58
            goto L14
        L58:
            jk.v r8 = new jk.v     // Catch: java.lang.Throwable -> L3a
            r8.<init>(r6)     // Catch: java.lang.Throwable -> L3a
            throw r8     // Catch: java.lang.Throwable -> L3a
        L5e:
            r8.put(r2, r3)     // Catch: java.lang.Throwable -> L3a
            jk.g r8 = r7.f31045a
            r8.k(r1)
            return
        L67:
            jk.g r9 = r7.f31045a
            r9.k(r1)
            throw r8
        */
        throw new UnsupportedOperationException("Method not decompiled: jk.h.L(java.util.Map, jk.b0$a, jk.l):void");
    }

    @Override // jk.w0
    public void M(Object obj, x0 x0Var, l lVar) {
        W(2);
        P(obj, x0Var, lVar);
    }

    public Object S(Class cls, l lVar) {
        W(2);
        return T(t0.a().c(cls), lVar);
    }

    public void U(List list, boolean z10) {
        String y10;
        int C;
        int C2;
        if (j1.b(this.f31046b) == 2) {
            if ((list instanceof x) && !z10) {
                x xVar = (x) list;
                do {
                    xVar.E0(n());
                    if (!this.f31045a.e()) {
                        C2 = this.f31045a.C();
                    } else {
                        return;
                    }
                } while (C2 == this.f31046b);
                this.f31048d = C2;
                return;
            }
            do {
                if (z10) {
                    y10 = H();
                } else {
                    y10 = y();
                }
                list.add(y10);
                if (this.f31045a.e()) {
                    return;
                }
                C = this.f31045a.C();
            } while (C == this.f31046b);
            this.f31048d = C;
            return;
        }
        throw v.e();
    }

    @Override // jk.w0
    public long a() {
        W(1);
        return this.f31045a.r();
    }

    @Override // jk.w0
    public void b(List list) {
        int C;
        if (list instanceof t) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f31046b);
            if (b10 != 2) {
                if (b10 != 5) {
                    throw v.e();
                }
                this.f31045a.w();
                throw null;
            }
            X(this.f31045a.D());
            this.f31045a.d();
            this.f31045a.w();
            throw null;
        }
        int b11 = j1.b(this.f31046b);
        if (b11 != 2) {
            if (b11 == 5) {
                do {
                    list.add(Integer.valueOf(this.f31045a.w()));
                    if (!this.f31045a.e()) {
                        C = this.f31045a.C();
                    } else {
                        return;
                    }
                } while (C == this.f31046b);
                this.f31048d = C;
                return;
            }
            throw v.e();
        }
        int D = this.f31045a.D();
        X(D);
        int d10 = this.f31045a.d() + D;
        do {
            list.add(Integer.valueOf(this.f31045a.w()));
        } while (this.f31045a.d() < d10);
    }

    @Override // jk.w0
    public void c(List list) {
        int C;
        if (list instanceof z) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f31046b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw v.e();
                }
                this.f31045a.D();
                this.f31045a.d();
                this.f31045a.z();
                throw null;
            }
            this.f31045a.z();
            throw null;
        }
        int b11 = j1.b(this.f31046b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f31045a.d() + this.f31045a.D();
                do {
                    list.add(Long.valueOf(this.f31045a.z()));
                } while (this.f31045a.d() < d10);
                V(d10);
                return;
            }
            throw v.e();
        }
        do {
            list.add(Long.valueOf(this.f31045a.z()));
            if (this.f31045a.e()) {
                return;
            }
            C = this.f31045a.C();
        } while (C == this.f31046b);
        this.f31048d = C;
    }

    @Override // jk.w0
    public boolean d() {
        W(0);
        return this.f31045a.m();
    }

    @Override // jk.w0
    public long e() {
        W(1);
        return this.f31045a.x();
    }

    @Override // jk.w0
    public void f(List list) {
        int C;
        if (list instanceof z) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f31046b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw v.e();
                }
                this.f31045a.D();
                this.f31045a.d();
                this.f31045a.E();
                throw null;
            }
            this.f31045a.E();
            throw null;
        }
        int b11 = j1.b(this.f31046b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f31045a.d() + this.f31045a.D();
                do {
                    list.add(Long.valueOf(this.f31045a.E()));
                } while (this.f31045a.d() < d10);
                V(d10);
                return;
            }
            throw v.e();
        }
        do {
            list.add(Long.valueOf(this.f31045a.E()));
            if (this.f31045a.e()) {
                return;
            }
            C = this.f31045a.C();
        } while (C == this.f31046b);
        this.f31048d = C;
    }

    @Override // jk.w0
    public int g() {
        W(0);
        return this.f31045a.D();
    }

    @Override // jk.w0
    public int getTag() {
        return this.f31046b;
    }

    @Override // jk.w0
    public void h(List list) {
        int C;
        if (list instanceof z) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f31046b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw v.e();
                }
                this.f31045a.D();
                this.f31045a.d();
                this.f31045a.u();
                throw null;
            }
            this.f31045a.u();
            throw null;
        }
        int b11 = j1.b(this.f31046b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f31045a.d() + this.f31045a.D();
                do {
                    list.add(Long.valueOf(this.f31045a.u()));
                } while (this.f31045a.d() < d10);
                V(d10);
                return;
            }
            throw v.e();
        }
        do {
            list.add(Long.valueOf(this.f31045a.u()));
            if (this.f31045a.e()) {
                return;
            }
            C = this.f31045a.C();
        } while (C == this.f31046b);
        this.f31048d = C;
    }

    @Override // jk.w0
    public void i(List list) {
        int C;
        if (list instanceof t) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f31046b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw v.e();
                }
                this.f31045a.D();
                this.f31045a.d();
                this.f31045a.p();
                throw null;
            }
            this.f31045a.p();
            throw null;
        }
        int b11 = j1.b(this.f31046b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f31045a.d() + this.f31045a.D();
                do {
                    list.add(Integer.valueOf(this.f31045a.p()));
                } while (this.f31045a.d() < d10);
                V(d10);
                return;
            }
            throw v.e();
        }
        do {
            list.add(Integer.valueOf(this.f31045a.p()));
            if (this.f31045a.e()) {
                return;
            }
            C = this.f31045a.C();
        } while (C == this.f31046b);
        this.f31048d = C;
    }

    @Override // jk.w0
    public int j() {
        W(0);
        return this.f31045a.p();
    }

    @Override // jk.w0
    public int k() {
        W(0);
        return this.f31045a.y();
    }

    @Override // jk.w0
    public void l(List list) {
        int C;
        if (list instanceof e) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f31046b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw v.e();
                }
                this.f31045a.D();
                this.f31045a.d();
                this.f31045a.m();
                throw null;
            }
            this.f31045a.m();
            throw null;
        }
        int b11 = j1.b(this.f31046b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f31045a.d() + this.f31045a.D();
                do {
                    list.add(Boolean.valueOf(this.f31045a.m()));
                } while (this.f31045a.d() < d10);
                V(d10);
                return;
            }
            throw v.e();
        }
        do {
            list.add(Boolean.valueOf(this.f31045a.m()));
            if (this.f31045a.e()) {
                return;
            }
            C = this.f31045a.C();
        } while (C == this.f31046b);
        this.f31048d = C;
    }

    @Override // jk.w0
    public void m(List list) {
        U(list, true);
    }

    @Override // jk.w0
    public f n() {
        W(2);
        return this.f31045a.n();
    }

    @Override // jk.w0
    public int o() {
        W(0);
        return this.f31045a.t();
    }

    @Override // jk.w0
    public void p(List list) {
        int C;
        if (list instanceof z) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f31046b);
            if (b10 != 1) {
                if (b10 != 2) {
                    throw v.e();
                }
                Y(this.f31045a.D());
                this.f31045a.d();
                this.f31045a.r();
                throw null;
            }
            this.f31045a.r();
            throw null;
        }
        int b11 = j1.b(this.f31046b);
        if (b11 != 1) {
            if (b11 == 2) {
                int D = this.f31045a.D();
                Y(D);
                int d10 = this.f31045a.d() + D;
                do {
                    list.add(Long.valueOf(this.f31045a.r()));
                } while (this.f31045a.d() < d10);
                return;
            }
            throw v.e();
        }
        do {
            list.add(Long.valueOf(this.f31045a.r()));
            if (this.f31045a.e()) {
                return;
            }
            C = this.f31045a.C();
        } while (C == this.f31046b);
        this.f31048d = C;
    }

    @Override // jk.w0
    public void q(List list) {
        int C;
        if (list instanceof t) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f31046b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw v.e();
                }
                this.f31045a.D();
                this.f31045a.d();
                this.f31045a.y();
                throw null;
            }
            this.f31045a.y();
            throw null;
        }
        int b11 = j1.b(this.f31046b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f31045a.d() + this.f31045a.D();
                do {
                    list.add(Integer.valueOf(this.f31045a.y()));
                } while (this.f31045a.d() < d10);
                V(d10);
                return;
            }
            throw v.e();
        }
        do {
            list.add(Integer.valueOf(this.f31045a.y()));
            if (this.f31045a.e()) {
                return;
            }
            C = this.f31045a.C();
        } while (C == this.f31046b);
        this.f31048d = C;
    }

    @Override // jk.w0
    public long r() {
        W(0);
        return this.f31045a.E();
    }

    @Override // jk.w0
    public double readDouble() {
        W(1);
        return this.f31045a.o();
    }

    @Override // jk.w0
    public float readFloat() {
        W(5);
        return this.f31045a.s();
    }

    @Override // jk.w0
    public void s(List list) {
        int C;
        if (list instanceof t) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f31046b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw v.e();
                }
                this.f31045a.D();
                this.f31045a.d();
                this.f31045a.D();
                throw null;
            }
            this.f31045a.D();
            throw null;
        }
        int b11 = j1.b(this.f31046b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f31045a.d() + this.f31045a.D();
                do {
                    list.add(Integer.valueOf(this.f31045a.D()));
                } while (this.f31045a.d() < d10);
                V(d10);
                return;
            }
            throw v.e();
        }
        do {
            list.add(Integer.valueOf(this.f31045a.D()));
            if (this.f31045a.e()) {
                return;
            }
            C = this.f31045a.C();
        } while (C == this.f31046b);
        this.f31048d = C;
    }

    @Override // jk.w0
    public int t() {
        W(5);
        return this.f31045a.q();
    }

    @Override // jk.w0
    public void u(List list) {
        int C;
        if (list instanceof z) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f31046b);
            if (b10 != 1) {
                if (b10 != 2) {
                    throw v.e();
                }
                Y(this.f31045a.D());
                this.f31045a.d();
                this.f31045a.x();
                throw null;
            }
            this.f31045a.x();
            throw null;
        }
        int b11 = j1.b(this.f31046b);
        if (b11 != 1) {
            if (b11 == 2) {
                int D = this.f31045a.D();
                Y(D);
                int d10 = this.f31045a.d() + D;
                do {
                    list.add(Long.valueOf(this.f31045a.x()));
                } while (this.f31045a.d() < d10);
                return;
            }
            throw v.e();
        }
        do {
            list.add(Long.valueOf(this.f31045a.x()));
            if (this.f31045a.e()) {
                return;
            }
            C = this.f31045a.C();
        } while (C == this.f31046b);
        this.f31048d = C;
    }

    @Override // jk.w0
    public void v(List list) {
        int C;
        if (list instanceof t) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f31046b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw v.e();
                }
                this.f31045a.D();
                this.f31045a.d();
                this.f31045a.t();
                throw null;
            }
            this.f31045a.t();
            throw null;
        }
        int b11 = j1.b(this.f31046b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f31045a.d() + this.f31045a.D();
                do {
                    list.add(Integer.valueOf(this.f31045a.t()));
                } while (this.f31045a.d() < d10);
                V(d10);
                return;
            }
            throw v.e();
        }
        do {
            list.add(Integer.valueOf(this.f31045a.t()));
            if (this.f31045a.e()) {
                return;
            }
            C = this.f31045a.C();
        } while (C == this.f31046b);
        this.f31048d = C;
    }

    @Override // jk.w0
    public void w(List list) {
        int C;
        if (list instanceof t) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f31046b);
            if (b10 != 2) {
                if (b10 != 5) {
                    throw v.e();
                }
                this.f31045a.q();
                throw null;
            }
            X(this.f31045a.D());
            this.f31045a.d();
            this.f31045a.q();
            throw null;
        }
        int b11 = j1.b(this.f31046b);
        if (b11 != 2) {
            if (b11 == 5) {
                do {
                    list.add(Integer.valueOf(this.f31045a.q()));
                    if (!this.f31045a.e()) {
                        C = this.f31045a.C();
                    } else {
                        return;
                    }
                } while (C == this.f31046b);
                this.f31048d = C;
                return;
            }
            throw v.e();
        }
        int D = this.f31045a.D();
        X(D);
        int d10 = this.f31045a.d() + D;
        do {
            list.add(Integer.valueOf(this.f31045a.q()));
        } while (this.f31045a.d() < d10);
    }

    @Override // jk.w0
    public long x() {
        W(0);
        return this.f31045a.z();
    }

    @Override // jk.w0
    public String y() {
        W(2);
        return this.f31045a.A();
    }

    @Override // jk.w0
    public int z() {
        int i10 = this.f31048d;
        if (i10 != 0) {
            this.f31046b = i10;
            this.f31048d = 0;
        } else {
            this.f31046b = this.f31045a.C();
        }
        int i11 = this.f31046b;
        if (i11 != 0 && i11 != this.f31047c) {
            return j1.a(i11);
        }
        return Integer.MAX_VALUE;
    }
}
