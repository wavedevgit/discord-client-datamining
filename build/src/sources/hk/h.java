package hk;

import hk.j1;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final g f26206a;

    /* renamed from: b  reason: collision with root package name */
    private int f26207b;

    /* renamed from: c  reason: collision with root package name */
    private int f26208c;

    /* renamed from: d  reason: collision with root package name */
    private int f26209d = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f26210a;

        static {
            int[] iArr = new int[j1.b.values().length];
            f26210a = iArr;
            try {
                iArr[j1.b.f26247u.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f26210a[j1.b.f26251y.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f26210a[j1.b.f26240i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f26210a[j1.b.A.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f26210a[j1.b.f26246t.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f26210a[j1.b.f26245s.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f26210a[j1.b.f26241o.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f26210a[j1.b.f26244r.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f26210a[j1.b.f26242p.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f26210a[j1.b.f26250x.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f26210a[j1.b.B.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f26210a[j1.b.C.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                f26210a[j1.b.D.ordinal()] = 13;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                f26210a[j1.b.E.ordinal()] = 14;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                f26210a[j1.b.f26248v.ordinal()] = 15;
            } catch (NoSuchFieldError unused15) {
            }
            try {
                f26210a[j1.b.f26252z.ordinal()] = 16;
            } catch (NoSuchFieldError unused16) {
            }
            try {
                f26210a[j1.b.f26243q.ordinal()] = 17;
            } catch (NoSuchFieldError unused17) {
            }
        }
    }

    private h(g gVar) {
        g gVar2 = (g) u.b(gVar, "input");
        this.f26206a = gVar2;
        gVar2.f26181d = this;
    }

    public static h N(g gVar) {
        h hVar = gVar.f26181d;
        if (hVar != null) {
            return hVar;
        }
        return new h(gVar);
    }

    private void O(Object obj, x0 x0Var, l lVar) {
        int i10 = this.f26208c;
        this.f26208c = j1.c(j1.a(this.f26207b), 4);
        try {
            x0Var.g(obj, this, lVar);
            if (this.f26207b == this.f26208c) {
                return;
            }
            throw v.h();
        } finally {
            this.f26208c = i10;
        }
    }

    private void P(Object obj, x0 x0Var, l lVar) {
        g gVar;
        int D = this.f26206a.D();
        g gVar2 = this.f26206a;
        if (gVar2.f26178a < gVar2.f26179b) {
            int l10 = gVar2.l(D);
            this.f26206a.f26178a++;
            x0Var.g(obj, this, lVar);
            this.f26206a.a(0);
            gVar.f26178a--;
            this.f26206a.k(l10);
            return;
        }
        throw v.i();
    }

    private Object Q(j1.b bVar, Class cls, l lVar) {
        switch (a.f26210a[bVar.ordinal()]) {
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
                return T(cls, lVar);
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

    private Object S(x0 x0Var, l lVar) {
        Object d10 = x0Var.d();
        P(d10, x0Var, lVar);
        x0Var.b(d10);
        return d10;
    }

    private void V(int i10) {
        if (this.f26206a.d() == i10) {
            return;
        }
        throw v.m();
    }

    private void W(int i10) {
        if (j1.b(this.f26207b) == i10) {
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

    @Override // hk.w0
    public void A(List list) {
        U(list, false);
    }

    @Override // hk.w0
    public void B(List list) {
        int C;
        if (list instanceof q) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f26207b);
            if (b10 != 2) {
                if (b10 != 5) {
                    throw v.e();
                }
                this.f26206a.s();
                throw null;
            }
            X(this.f26206a.D());
            this.f26206a.d();
            this.f26206a.s();
            throw null;
        }
        int b11 = j1.b(this.f26207b);
        if (b11 != 2) {
            if (b11 == 5) {
                do {
                    list.add(Float.valueOf(this.f26206a.s()));
                    if (!this.f26206a.e()) {
                        C = this.f26206a.C();
                    } else {
                        return;
                    }
                } while (C == this.f26207b);
                this.f26209d = C;
                return;
            }
            throw v.e();
        }
        int D = this.f26206a.D();
        X(D);
        int d10 = this.f26206a.d() + D;
        do {
            list.add(Float.valueOf(this.f26206a.s()));
        } while (this.f26206a.d() < d10);
    }

    @Override // hk.w0
    public boolean C() {
        int i10;
        if (!this.f26206a.e() && (i10 = this.f26207b) != this.f26208c) {
            return this.f26206a.F(i10);
        }
        return false;
    }

    @Override // hk.w0
    public int D() {
        W(5);
        return this.f26206a.w();
    }

    @Override // hk.w0
    public void E(List list) {
        int C;
        if (j1.b(this.f26207b) == 2) {
            do {
                list.add(n());
                if (this.f26206a.e()) {
                    return;
                }
                C = this.f26206a.C();
            } while (C == this.f26207b);
            this.f26209d = C;
            return;
        }
        throw v.e();
    }

    @Override // hk.w0
    public void F(List list) {
        int C;
        if (list instanceof i) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f26207b);
            if (b10 != 1) {
                if (b10 != 2) {
                    throw v.e();
                }
                Y(this.f26206a.D());
                this.f26206a.d();
                this.f26206a.o();
                throw null;
            }
            this.f26206a.o();
            throw null;
        }
        int b11 = j1.b(this.f26207b);
        if (b11 != 1) {
            if (b11 == 2) {
                int D = this.f26206a.D();
                Y(D);
                int d10 = this.f26206a.d() + D;
                do {
                    list.add(Double.valueOf(this.f26206a.o()));
                } while (this.f26206a.d() < d10);
                return;
            }
            throw v.e();
        }
        do {
            list.add(Double.valueOf(this.f26206a.o()));
            if (this.f26206a.e()) {
                return;
            }
            C = this.f26206a.C();
        } while (C == this.f26207b);
        this.f26209d = C;
    }

    @Override // hk.w0
    public long G() {
        W(0);
        return this.f26206a.u();
    }

    @Override // hk.w0
    public String H() {
        W(2);
        return this.f26206a.B();
    }

    @Override // hk.w0
    public void I(Object obj, x0 x0Var, l lVar) {
        W(3);
        O(obj, x0Var, lVar);
    }

    @Override // hk.w0
    public void J(Object obj, x0 x0Var, l lVar) {
        W(2);
        P(obj, x0Var, lVar);
    }

    /* JADX WARN: Code restructure failed: missing block: B:26:0x005e, code lost:
        r8.put(r2, r3);
     */
    /* JADX WARN: Code restructure failed: missing block: B:27:0x0061, code lost:
        r7.f26206a.k(r1);
     */
    /* JADX WARN: Code restructure failed: missing block: B:28:0x0066, code lost:
        return;
     */
    @Override // hk.w0
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void K(java.util.Map r8, hk.b0.a r9, hk.l r10) {
        /*
            r7 = this;
            r0 = 2
            r7.W(r0)
            hk.g r1 = r7.f26206a
            int r1 = r1.D()
            hk.g r2 = r7.f26206a
            int r1 = r2.l(r1)
            java.lang.Object r2 = r9.f26148b
            java.lang.Object r3 = r9.f26150d
        L14:
            int r4 = r7.z()     // Catch: java.lang.Throwable -> L3a
            r5 = 2147483647(0x7fffffff, float:NaN)
            if (r4 == r5) goto L5e
            hk.g r5 = r7.f26206a     // Catch: java.lang.Throwable -> L3a
            boolean r5 = r5.e()     // Catch: java.lang.Throwable -> L3a
            if (r5 == 0) goto L26
            goto L5e
        L26:
            r5 = 1
            java.lang.String r6 = "Unable to parse map entry."
            if (r4 == r5) goto L49
            if (r4 == r0) goto L3c
            boolean r4 = r7.C()     // Catch: java.lang.Throwable -> L3a hk.v.a -> L51
            if (r4 == 0) goto L34
            goto L14
        L34:
            hk.v r4 = new hk.v     // Catch: java.lang.Throwable -> L3a hk.v.a -> L51
            r4.<init>(r6)     // Catch: java.lang.Throwable -> L3a hk.v.a -> L51
            throw r4     // Catch: java.lang.Throwable -> L3a hk.v.a -> L51
        L3a:
            r8 = move-exception
            goto L67
        L3c:
            hk.j1$b r4 = r9.f26149c     // Catch: java.lang.Throwable -> L3a hk.v.a -> L51
            java.lang.Object r5 = r9.f26150d     // Catch: java.lang.Throwable -> L3a hk.v.a -> L51
            java.lang.Class r5 = r5.getClass()     // Catch: java.lang.Throwable -> L3a hk.v.a -> L51
            java.lang.Object r3 = r7.Q(r4, r5, r10)     // Catch: java.lang.Throwable -> L3a hk.v.a -> L51
            goto L14
        L49:
            hk.j1$b r4 = r9.f26147a     // Catch: java.lang.Throwable -> L3a hk.v.a -> L51
            r5 = 0
            java.lang.Object r2 = r7.Q(r4, r5, r5)     // Catch: java.lang.Throwable -> L3a hk.v.a -> L51
            goto L14
        L51:
            boolean r4 = r7.C()     // Catch: java.lang.Throwable -> L3a
            if (r4 == 0) goto L58
            goto L14
        L58:
            hk.v r8 = new hk.v     // Catch: java.lang.Throwable -> L3a
            r8.<init>(r6)     // Catch: java.lang.Throwable -> L3a
            throw r8     // Catch: java.lang.Throwable -> L3a
        L5e:
            r8.put(r2, r3)     // Catch: java.lang.Throwable -> L3a
            hk.g r8 = r7.f26206a
            r8.k(r1)
            return
        L67:
            hk.g r9 = r7.f26206a
            r9.k(r1)
            throw r8
        */
        throw new UnsupportedOperationException("Method not decompiled: hk.h.K(java.util.Map, hk.b0$a, hk.l):void");
    }

    @Override // hk.w0
    public void L(List list, x0 x0Var, l lVar) {
        int C;
        if (j1.b(this.f26207b) == 2) {
            int i10 = this.f26207b;
            do {
                list.add(S(x0Var, lVar));
                if (!this.f26206a.e() && this.f26209d == 0) {
                    C = this.f26206a.C();
                } else {
                    return;
                }
            } while (C == i10);
            this.f26209d = C;
            return;
        }
        throw v.e();
    }

    @Override // hk.w0
    public void M(List list, x0 x0Var, l lVar) {
        int C;
        if (j1.b(this.f26207b) == 3) {
            int i10 = this.f26207b;
            do {
                list.add(R(x0Var, lVar));
                if (!this.f26206a.e() && this.f26209d == 0) {
                    C = this.f26206a.C();
                } else {
                    return;
                }
            } while (C == i10);
            this.f26209d = C;
            return;
        }
        throw v.e();
    }

    public Object T(Class cls, l lVar) {
        W(2);
        return S(t0.a().c(cls), lVar);
    }

    public void U(List list, boolean z10) {
        String y10;
        int C;
        int C2;
        if (j1.b(this.f26207b) == 2) {
            if ((list instanceof x) && !z10) {
                x xVar = (x) list;
                do {
                    xVar.O0(n());
                    if (!this.f26206a.e()) {
                        C2 = this.f26206a.C();
                    } else {
                        return;
                    }
                } while (C2 == this.f26207b);
                this.f26209d = C2;
                return;
            }
            do {
                if (z10) {
                    y10 = H();
                } else {
                    y10 = y();
                }
                list.add(y10);
                if (this.f26206a.e()) {
                    return;
                }
                C = this.f26206a.C();
            } while (C == this.f26207b);
            this.f26209d = C;
            return;
        }
        throw v.e();
    }

    @Override // hk.w0
    public long a() {
        W(1);
        return this.f26206a.r();
    }

    @Override // hk.w0
    public void b(List list) {
        int C;
        if (list instanceof t) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f26207b);
            if (b10 != 2) {
                if (b10 != 5) {
                    throw v.e();
                }
                this.f26206a.w();
                throw null;
            }
            X(this.f26206a.D());
            this.f26206a.d();
            this.f26206a.w();
            throw null;
        }
        int b11 = j1.b(this.f26207b);
        if (b11 != 2) {
            if (b11 == 5) {
                do {
                    list.add(Integer.valueOf(this.f26206a.w()));
                    if (!this.f26206a.e()) {
                        C = this.f26206a.C();
                    } else {
                        return;
                    }
                } while (C == this.f26207b);
                this.f26209d = C;
                return;
            }
            throw v.e();
        }
        int D = this.f26206a.D();
        X(D);
        int d10 = this.f26206a.d() + D;
        do {
            list.add(Integer.valueOf(this.f26206a.w()));
        } while (this.f26206a.d() < d10);
    }

    @Override // hk.w0
    public void c(List list) {
        int C;
        if (list instanceof z) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f26207b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw v.e();
                }
                this.f26206a.D();
                this.f26206a.d();
                this.f26206a.z();
                throw null;
            }
            this.f26206a.z();
            throw null;
        }
        int b11 = j1.b(this.f26207b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f26206a.d() + this.f26206a.D();
                do {
                    list.add(Long.valueOf(this.f26206a.z()));
                } while (this.f26206a.d() < d10);
                V(d10);
                return;
            }
            throw v.e();
        }
        do {
            list.add(Long.valueOf(this.f26206a.z()));
            if (this.f26206a.e()) {
                return;
            }
            C = this.f26206a.C();
        } while (C == this.f26207b);
        this.f26209d = C;
    }

    @Override // hk.w0
    public boolean d() {
        W(0);
        return this.f26206a.m();
    }

    @Override // hk.w0
    public long e() {
        W(1);
        return this.f26206a.x();
    }

    @Override // hk.w0
    public void f(List list) {
        int C;
        if (list instanceof z) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f26207b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw v.e();
                }
                this.f26206a.D();
                this.f26206a.d();
                this.f26206a.E();
                throw null;
            }
            this.f26206a.E();
            throw null;
        }
        int b11 = j1.b(this.f26207b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f26206a.d() + this.f26206a.D();
                do {
                    list.add(Long.valueOf(this.f26206a.E()));
                } while (this.f26206a.d() < d10);
                V(d10);
                return;
            }
            throw v.e();
        }
        do {
            list.add(Long.valueOf(this.f26206a.E()));
            if (this.f26206a.e()) {
                return;
            }
            C = this.f26206a.C();
        } while (C == this.f26207b);
        this.f26209d = C;
    }

    @Override // hk.w0
    public int g() {
        W(0);
        return this.f26206a.D();
    }

    @Override // hk.w0
    public int getTag() {
        return this.f26207b;
    }

    @Override // hk.w0
    public void h(List list) {
        int C;
        if (list instanceof z) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f26207b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw v.e();
                }
                this.f26206a.D();
                this.f26206a.d();
                this.f26206a.u();
                throw null;
            }
            this.f26206a.u();
            throw null;
        }
        int b11 = j1.b(this.f26207b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f26206a.d() + this.f26206a.D();
                do {
                    list.add(Long.valueOf(this.f26206a.u()));
                } while (this.f26206a.d() < d10);
                V(d10);
                return;
            }
            throw v.e();
        }
        do {
            list.add(Long.valueOf(this.f26206a.u()));
            if (this.f26206a.e()) {
                return;
            }
            C = this.f26206a.C();
        } while (C == this.f26207b);
        this.f26209d = C;
    }

    @Override // hk.w0
    public void i(List list) {
        int C;
        if (list instanceof t) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f26207b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw v.e();
                }
                this.f26206a.D();
                this.f26206a.d();
                this.f26206a.p();
                throw null;
            }
            this.f26206a.p();
            throw null;
        }
        int b11 = j1.b(this.f26207b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f26206a.d() + this.f26206a.D();
                do {
                    list.add(Integer.valueOf(this.f26206a.p()));
                } while (this.f26206a.d() < d10);
                V(d10);
                return;
            }
            throw v.e();
        }
        do {
            list.add(Integer.valueOf(this.f26206a.p()));
            if (this.f26206a.e()) {
                return;
            }
            C = this.f26206a.C();
        } while (C == this.f26207b);
        this.f26209d = C;
    }

    @Override // hk.w0
    public int j() {
        W(0);
        return this.f26206a.p();
    }

    @Override // hk.w0
    public int k() {
        W(0);
        return this.f26206a.y();
    }

    @Override // hk.w0
    public void l(List list) {
        int C;
        if (list instanceof e) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f26207b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw v.e();
                }
                this.f26206a.D();
                this.f26206a.d();
                this.f26206a.m();
                throw null;
            }
            this.f26206a.m();
            throw null;
        }
        int b11 = j1.b(this.f26207b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f26206a.d() + this.f26206a.D();
                do {
                    list.add(Boolean.valueOf(this.f26206a.m()));
                } while (this.f26206a.d() < d10);
                V(d10);
                return;
            }
            throw v.e();
        }
        do {
            list.add(Boolean.valueOf(this.f26206a.m()));
            if (this.f26206a.e()) {
                return;
            }
            C = this.f26206a.C();
        } while (C == this.f26207b);
        this.f26209d = C;
    }

    @Override // hk.w0
    public void m(List list) {
        U(list, true);
    }

    @Override // hk.w0
    public f n() {
        W(2);
        return this.f26206a.n();
    }

    @Override // hk.w0
    public int o() {
        W(0);
        return this.f26206a.t();
    }

    @Override // hk.w0
    public void p(List list) {
        int C;
        if (list instanceof z) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f26207b);
            if (b10 != 1) {
                if (b10 != 2) {
                    throw v.e();
                }
                Y(this.f26206a.D());
                this.f26206a.d();
                this.f26206a.r();
                throw null;
            }
            this.f26206a.r();
            throw null;
        }
        int b11 = j1.b(this.f26207b);
        if (b11 != 1) {
            if (b11 == 2) {
                int D = this.f26206a.D();
                Y(D);
                int d10 = this.f26206a.d() + D;
                do {
                    list.add(Long.valueOf(this.f26206a.r()));
                } while (this.f26206a.d() < d10);
                return;
            }
            throw v.e();
        }
        do {
            list.add(Long.valueOf(this.f26206a.r()));
            if (this.f26206a.e()) {
                return;
            }
            C = this.f26206a.C();
        } while (C == this.f26207b);
        this.f26209d = C;
    }

    @Override // hk.w0
    public void q(List list) {
        int C;
        if (list instanceof t) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f26207b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw v.e();
                }
                this.f26206a.D();
                this.f26206a.d();
                this.f26206a.y();
                throw null;
            }
            this.f26206a.y();
            throw null;
        }
        int b11 = j1.b(this.f26207b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f26206a.d() + this.f26206a.D();
                do {
                    list.add(Integer.valueOf(this.f26206a.y()));
                } while (this.f26206a.d() < d10);
                V(d10);
                return;
            }
            throw v.e();
        }
        do {
            list.add(Integer.valueOf(this.f26206a.y()));
            if (this.f26206a.e()) {
                return;
            }
            C = this.f26206a.C();
        } while (C == this.f26207b);
        this.f26209d = C;
    }

    @Override // hk.w0
    public long r() {
        W(0);
        return this.f26206a.E();
    }

    @Override // hk.w0
    public double readDouble() {
        W(1);
        return this.f26206a.o();
    }

    @Override // hk.w0
    public float readFloat() {
        W(5);
        return this.f26206a.s();
    }

    @Override // hk.w0
    public void s(List list) {
        int C;
        if (list instanceof t) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f26207b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw v.e();
                }
                this.f26206a.D();
                this.f26206a.d();
                this.f26206a.D();
                throw null;
            }
            this.f26206a.D();
            throw null;
        }
        int b11 = j1.b(this.f26207b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f26206a.d() + this.f26206a.D();
                do {
                    list.add(Integer.valueOf(this.f26206a.D()));
                } while (this.f26206a.d() < d10);
                V(d10);
                return;
            }
            throw v.e();
        }
        do {
            list.add(Integer.valueOf(this.f26206a.D()));
            if (this.f26206a.e()) {
                return;
            }
            C = this.f26206a.C();
        } while (C == this.f26207b);
        this.f26209d = C;
    }

    @Override // hk.w0
    public int t() {
        W(5);
        return this.f26206a.q();
    }

    @Override // hk.w0
    public void u(List list) {
        int C;
        if (list instanceof z) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f26207b);
            if (b10 != 1) {
                if (b10 != 2) {
                    throw v.e();
                }
                Y(this.f26206a.D());
                this.f26206a.d();
                this.f26206a.x();
                throw null;
            }
            this.f26206a.x();
            throw null;
        }
        int b11 = j1.b(this.f26207b);
        if (b11 != 1) {
            if (b11 == 2) {
                int D = this.f26206a.D();
                Y(D);
                int d10 = this.f26206a.d() + D;
                do {
                    list.add(Long.valueOf(this.f26206a.x()));
                } while (this.f26206a.d() < d10);
                return;
            }
            throw v.e();
        }
        do {
            list.add(Long.valueOf(this.f26206a.x()));
            if (this.f26206a.e()) {
                return;
            }
            C = this.f26206a.C();
        } while (C == this.f26207b);
        this.f26209d = C;
    }

    @Override // hk.w0
    public void v(List list) {
        int C;
        if (list instanceof t) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f26207b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw v.e();
                }
                this.f26206a.D();
                this.f26206a.d();
                this.f26206a.t();
                throw null;
            }
            this.f26206a.t();
            throw null;
        }
        int b11 = j1.b(this.f26207b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f26206a.d() + this.f26206a.D();
                do {
                    list.add(Integer.valueOf(this.f26206a.t()));
                } while (this.f26206a.d() < d10);
                V(d10);
                return;
            }
            throw v.e();
        }
        do {
            list.add(Integer.valueOf(this.f26206a.t()));
            if (this.f26206a.e()) {
                return;
            }
            C = this.f26206a.C();
        } while (C == this.f26207b);
        this.f26209d = C;
    }

    @Override // hk.w0
    public void w(List list) {
        int C;
        if (list instanceof t) {
            android.support.v4.media.session.b.a(list);
            int b10 = j1.b(this.f26207b);
            if (b10 != 2) {
                if (b10 != 5) {
                    throw v.e();
                }
                this.f26206a.q();
                throw null;
            }
            X(this.f26206a.D());
            this.f26206a.d();
            this.f26206a.q();
            throw null;
        }
        int b11 = j1.b(this.f26207b);
        if (b11 != 2) {
            if (b11 == 5) {
                do {
                    list.add(Integer.valueOf(this.f26206a.q()));
                    if (!this.f26206a.e()) {
                        C = this.f26206a.C();
                    } else {
                        return;
                    }
                } while (C == this.f26207b);
                this.f26209d = C;
                return;
            }
            throw v.e();
        }
        int D = this.f26206a.D();
        X(D);
        int d10 = this.f26206a.d() + D;
        do {
            list.add(Integer.valueOf(this.f26206a.q()));
        } while (this.f26206a.d() < d10);
    }

    @Override // hk.w0
    public long x() {
        W(0);
        return this.f26206a.z();
    }

    @Override // hk.w0
    public String y() {
        W(2);
        return this.f26206a.A();
    }

    @Override // hk.w0
    public int z() {
        int i10 = this.f26209d;
        if (i10 != 0) {
            this.f26207b = i10;
            this.f26209d = 0;
        } else {
            this.f26207b = this.f26206a.C();
        }
        int i11 = this.f26207b;
        if (i11 != 0 && i11 != this.f26208c) {
            return j1.a(i11);
        }
        return Integer.MAX_VALUE;
    }
}
