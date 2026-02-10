package androidx.datastore.preferences.protobuf;

import androidx.datastore.preferences.protobuf.q1;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i implements c1 {

    /* renamed from: a  reason: collision with root package name */
    private final h f3805a;

    /* renamed from: b  reason: collision with root package name */
    private int f3806b;

    /* renamed from: c  reason: collision with root package name */
    private int f3807c;

    /* renamed from: d  reason: collision with root package name */
    private int f3808d = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f3809a;

        static {
            int[] iArr = new int[q1.b.values().length];
            f3809a = iArr;
            try {
                iArr[q1.b.f3884u.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f3809a[q1.b.f3888y.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f3809a[q1.b.f3877i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f3809a[q1.b.A.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f3809a[q1.b.f3883t.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f3809a[q1.b.f3882s.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f3809a[q1.b.f3878o.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f3809a[q1.b.f3881r.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f3809a[q1.b.f3879p.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f3809a[q1.b.f3887x.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f3809a[q1.b.B.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f3809a[q1.b.C.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                f3809a[q1.b.D.ordinal()] = 13;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                f3809a[q1.b.E.ordinal()] = 14;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                f3809a[q1.b.f3885v.ordinal()] = 15;
            } catch (NoSuchFieldError unused15) {
            }
            try {
                f3809a[q1.b.f3889z.ordinal()] = 16;
            } catch (NoSuchFieldError unused16) {
            }
            try {
                f3809a[q1.b.f3880q.ordinal()] = 17;
            } catch (NoSuchFieldError unused17) {
            }
        }
    }

    private i(h hVar) {
        h hVar2 = (h) y.b(hVar, "input");
        this.f3805a = hVar2;
        hVar2.f3779d = this;
    }

    public static i N(h hVar) {
        i iVar = hVar.f3779d;
        if (iVar != null) {
            return iVar;
        }
        return new i(hVar);
    }

    private Object O(q1.b bVar, Class cls, o oVar) {
        switch (a.f3809a[bVar.ordinal()]) {
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
                return R(cls, oVar);
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
                throw new RuntimeException("unsupported field type.");
        }
    }

    private Object P(d1 d1Var, o oVar) {
        int i10 = this.f3807c;
        this.f3807c = q1.c(q1.a(this.f3806b), 4);
        try {
            Object d10 = d1Var.d();
            d1Var.g(d10, this, oVar);
            d1Var.b(d10);
            if (this.f3806b == this.f3807c) {
                return d10;
            }
            throw z.g();
        } finally {
            this.f3807c = i10;
        }
    }

    private Object Q(d1 d1Var, o oVar) {
        h hVar;
        int C = this.f3805a.C();
        h hVar2 = this.f3805a;
        if (hVar2.f3776a < hVar2.f3777b) {
            int l10 = hVar2.l(C);
            Object d10 = d1Var.d();
            this.f3805a.f3776a++;
            d1Var.g(d10, this, oVar);
            d1Var.b(d10);
            this.f3805a.a(0);
            hVar.f3776a--;
            this.f3805a.k(l10);
            return d10;
        }
        throw z.h();
    }

    private void T(int i10) {
        if (this.f3805a.d() == i10) {
            return;
        }
        throw z.k();
    }

    private void U(int i10) {
        if (q1.b(this.f3806b) == i10) {
            return;
        }
        throw z.d();
    }

    private void V(int i10) {
        if ((i10 & 3) == 0) {
            return;
        }
        throw z.g();
    }

    private void W(int i10) {
        if ((i10 & 7) == 0) {
            return;
        }
        throw z.g();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void A(List list) {
        S(list, false);
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void B(List list) {
        int B;
        if (list instanceof u) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3806b);
            if (b10 != 2) {
                if (b10 != 5) {
                    throw z.d();
                }
                this.f3805a.s();
                throw null;
            }
            V(this.f3805a.C());
            this.f3805a.d();
            this.f3805a.s();
            throw null;
        }
        int b11 = q1.b(this.f3806b);
        if (b11 != 2) {
            if (b11 == 5) {
                do {
                    list.add(Float.valueOf(this.f3805a.s()));
                    if (!this.f3805a.e()) {
                        B = this.f3805a.B();
                    } else {
                        return;
                    }
                } while (B == this.f3806b);
                this.f3808d = B;
                return;
            }
            throw z.d();
        }
        int C = this.f3805a.C();
        V(C);
        int d10 = this.f3805a.d() + C;
        do {
            list.add(Float.valueOf(this.f3805a.s()));
        } while (this.f3805a.d() < d10);
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public boolean C() {
        int i10;
        if (!this.f3805a.e() && (i10 = this.f3806b) != this.f3807c) {
            return this.f3805a.E(i10);
        }
        return false;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public int D() {
        U(5);
        return this.f3805a.v();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void E(List list) {
        int B;
        if (q1.b(this.f3806b) == 2) {
            do {
                list.add(n());
                if (this.f3805a.e()) {
                    return;
                }
                B = this.f3805a.B();
            } while (B == this.f3806b);
            this.f3808d = B;
            return;
        }
        throw z.d();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void F(List list) {
        int B;
        if (list instanceof l) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3806b);
            if (b10 != 1) {
                if (b10 != 2) {
                    throw z.d();
                }
                W(this.f3805a.C());
                this.f3805a.d();
                this.f3805a.o();
                throw null;
            }
            this.f3805a.o();
            throw null;
        }
        int b11 = q1.b(this.f3806b);
        if (b11 != 1) {
            if (b11 == 2) {
                int C = this.f3805a.C();
                W(C);
                int d10 = this.f3805a.d() + C;
                do {
                    list.add(Double.valueOf(this.f3805a.o()));
                } while (this.f3805a.d() < d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Double.valueOf(this.f3805a.o()));
            if (this.f3805a.e()) {
                return;
            }
            B = this.f3805a.B();
        } while (B == this.f3806b);
        this.f3808d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public long G() {
        U(0);
        return this.f3805a.u();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public String H() {
        U(2);
        return this.f3805a.A();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public Object I(d1 d1Var, o oVar) {
        U(2);
        return Q(d1Var, oVar);
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void J(List list, d1 d1Var, o oVar) {
        int B;
        if (q1.b(this.f3806b) == 2) {
            int i10 = this.f3806b;
            do {
                list.add(Q(d1Var, oVar));
                if (!this.f3805a.e() && this.f3808d == 0) {
                    B = this.f3805a.B();
                } else {
                    return;
                }
            } while (B == i10);
            this.f3808d = B;
            return;
        }
        throw z.d();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public Object K(d1 d1Var, o oVar) {
        U(3);
        return P(d1Var, oVar);
    }

    /* JADX WARN: Code restructure failed: missing block: B:26:0x005e, code lost:
        r8.put(r2, r3);
     */
    /* JADX WARN: Code restructure failed: missing block: B:27:0x0061, code lost:
        r7.f3805a.k(r1);
     */
    /* JADX WARN: Code restructure failed: missing block: B:28:0x0066, code lost:
        return;
     */
    @Override // androidx.datastore.preferences.protobuf.c1
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void L(java.util.Map r8, androidx.datastore.preferences.protobuf.h0.a r9, androidx.datastore.preferences.protobuf.o r10) {
        /*
            r7 = this;
            r0 = 2
            r7.U(r0)
            androidx.datastore.preferences.protobuf.h r1 = r7.f3805a
            int r1 = r1.C()
            androidx.datastore.preferences.protobuf.h r2 = r7.f3805a
            int r1 = r2.l(r1)
            java.lang.Object r2 = r9.f3802b
            java.lang.Object r3 = r9.f3804d
        L14:
            int r4 = r7.z()     // Catch: java.lang.Throwable -> L3a
            r5 = 2147483647(0x7fffffff, float:NaN)
            if (r4 == r5) goto L5e
            androidx.datastore.preferences.protobuf.h r5 = r7.f3805a     // Catch: java.lang.Throwable -> L3a
            boolean r5 = r5.e()     // Catch: java.lang.Throwable -> L3a
            if (r5 == 0) goto L26
            goto L5e
        L26:
            r5 = 1
            java.lang.String r6 = "Unable to parse map entry."
            if (r4 == r5) goto L49
            if (r4 == r0) goto L3c
            boolean r4 = r7.C()     // Catch: java.lang.Throwable -> L3a androidx.datastore.preferences.protobuf.z.a -> L51
            if (r4 == 0) goto L34
            goto L14
        L34:
            androidx.datastore.preferences.protobuf.z r4 = new androidx.datastore.preferences.protobuf.z     // Catch: java.lang.Throwable -> L3a androidx.datastore.preferences.protobuf.z.a -> L51
            r4.<init>(r6)     // Catch: java.lang.Throwable -> L3a androidx.datastore.preferences.protobuf.z.a -> L51
            throw r4     // Catch: java.lang.Throwable -> L3a androidx.datastore.preferences.protobuf.z.a -> L51
        L3a:
            r8 = move-exception
            goto L67
        L3c:
            androidx.datastore.preferences.protobuf.q1$b r4 = r9.f3803c     // Catch: java.lang.Throwable -> L3a androidx.datastore.preferences.protobuf.z.a -> L51
            java.lang.Object r5 = r9.f3804d     // Catch: java.lang.Throwable -> L3a androidx.datastore.preferences.protobuf.z.a -> L51
            java.lang.Class r5 = r5.getClass()     // Catch: java.lang.Throwable -> L3a androidx.datastore.preferences.protobuf.z.a -> L51
            java.lang.Object r3 = r7.O(r4, r5, r10)     // Catch: java.lang.Throwable -> L3a androidx.datastore.preferences.protobuf.z.a -> L51
            goto L14
        L49:
            androidx.datastore.preferences.protobuf.q1$b r4 = r9.f3801a     // Catch: java.lang.Throwable -> L3a androidx.datastore.preferences.protobuf.z.a -> L51
            r5 = 0
            java.lang.Object r2 = r7.O(r4, r5, r5)     // Catch: java.lang.Throwable -> L3a androidx.datastore.preferences.protobuf.z.a -> L51
            goto L14
        L51:
            boolean r4 = r7.C()     // Catch: java.lang.Throwable -> L3a
            if (r4 == 0) goto L58
            goto L14
        L58:
            androidx.datastore.preferences.protobuf.z r8 = new androidx.datastore.preferences.protobuf.z     // Catch: java.lang.Throwable -> L3a
            r8.<init>(r6)     // Catch: java.lang.Throwable -> L3a
            throw r8     // Catch: java.lang.Throwable -> L3a
        L5e:
            r8.put(r2, r3)     // Catch: java.lang.Throwable -> L3a
            androidx.datastore.preferences.protobuf.h r8 = r7.f3805a
            r8.k(r1)
            return
        L67:
            androidx.datastore.preferences.protobuf.h r9 = r7.f3805a
            r9.k(r1)
            throw r8
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.datastore.preferences.protobuf.i.L(java.util.Map, androidx.datastore.preferences.protobuf.h0$a, androidx.datastore.preferences.protobuf.o):void");
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void M(List list, d1 d1Var, o oVar) {
        int B;
        if (q1.b(this.f3806b) == 3) {
            int i10 = this.f3806b;
            do {
                list.add(P(d1Var, oVar));
                if (!this.f3805a.e() && this.f3808d == 0) {
                    B = this.f3805a.B();
                } else {
                    return;
                }
            } while (B == i10);
            this.f3808d = B;
            return;
        }
        throw z.d();
    }

    public Object R(Class cls, o oVar) {
        U(2);
        return Q(z0.a().c(cls), oVar);
    }

    public void S(List list, boolean z10) {
        String y10;
        int B;
        int B2;
        if (q1.b(this.f3806b) == 2) {
            if ((list instanceof d0) && !z10) {
                d0 d0Var = (d0) list;
                do {
                    d0Var.G0(n());
                    if (!this.f3805a.e()) {
                        B2 = this.f3805a.B();
                    } else {
                        return;
                    }
                } while (B2 == this.f3806b);
                this.f3808d = B2;
                return;
            }
            do {
                if (z10) {
                    y10 = H();
                } else {
                    y10 = y();
                }
                list.add(y10);
                if (this.f3805a.e()) {
                    return;
                }
                B = this.f3805a.B();
            } while (B == this.f3806b);
            this.f3808d = B;
            return;
        }
        throw z.d();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public long a() {
        U(1);
        return this.f3805a.r();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void b(List list) {
        int B;
        if (list instanceof x) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3806b);
            if (b10 != 2) {
                if (b10 != 5) {
                    throw z.d();
                }
                this.f3805a.v();
                throw null;
            }
            V(this.f3805a.C());
            this.f3805a.d();
            this.f3805a.v();
            throw null;
        }
        int b11 = q1.b(this.f3806b);
        if (b11 != 2) {
            if (b11 == 5) {
                do {
                    list.add(Integer.valueOf(this.f3805a.v()));
                    if (!this.f3805a.e()) {
                        B = this.f3805a.B();
                    } else {
                        return;
                    }
                } while (B == this.f3806b);
                this.f3808d = B;
                return;
            }
            throw z.d();
        }
        int C = this.f3805a.C();
        V(C);
        int d10 = this.f3805a.d() + C;
        do {
            list.add(Integer.valueOf(this.f3805a.v()));
        } while (this.f3805a.d() < d10);
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void c(List list) {
        int B;
        if (list instanceof f0) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3806b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw z.d();
                }
                this.f3805a.C();
                this.f3805a.d();
                this.f3805a.y();
                throw null;
            }
            this.f3805a.y();
            throw null;
        }
        int b11 = q1.b(this.f3806b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f3805a.d() + this.f3805a.C();
                do {
                    list.add(Long.valueOf(this.f3805a.y()));
                } while (this.f3805a.d() < d10);
                T(d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Long.valueOf(this.f3805a.y()));
            if (this.f3805a.e()) {
                return;
            }
            B = this.f3805a.B();
        } while (B == this.f3806b);
        this.f3808d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public boolean d() {
        U(0);
        return this.f3805a.m();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public long e() {
        U(1);
        return this.f3805a.w();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void f(List list) {
        int B;
        if (list instanceof f0) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3806b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw z.d();
                }
                this.f3805a.C();
                this.f3805a.d();
                this.f3805a.D();
                throw null;
            }
            this.f3805a.D();
            throw null;
        }
        int b11 = q1.b(this.f3806b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f3805a.d() + this.f3805a.C();
                do {
                    list.add(Long.valueOf(this.f3805a.D()));
                } while (this.f3805a.d() < d10);
                T(d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Long.valueOf(this.f3805a.D()));
            if (this.f3805a.e()) {
                return;
            }
            B = this.f3805a.B();
        } while (B == this.f3806b);
        this.f3808d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public int g() {
        U(0);
        return this.f3805a.C();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public int getTag() {
        return this.f3806b;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void h(List list) {
        int B;
        if (list instanceof f0) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3806b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw z.d();
                }
                this.f3805a.C();
                this.f3805a.d();
                this.f3805a.u();
                throw null;
            }
            this.f3805a.u();
            throw null;
        }
        int b11 = q1.b(this.f3806b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f3805a.d() + this.f3805a.C();
                do {
                    list.add(Long.valueOf(this.f3805a.u()));
                } while (this.f3805a.d() < d10);
                T(d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Long.valueOf(this.f3805a.u()));
            if (this.f3805a.e()) {
                return;
            }
            B = this.f3805a.B();
        } while (B == this.f3806b);
        this.f3808d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void i(List list) {
        int B;
        if (list instanceof x) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3806b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw z.d();
                }
                this.f3805a.C();
                this.f3805a.d();
                this.f3805a.p();
                throw null;
            }
            this.f3805a.p();
            throw null;
        }
        int b11 = q1.b(this.f3806b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f3805a.d() + this.f3805a.C();
                do {
                    list.add(Integer.valueOf(this.f3805a.p()));
                } while (this.f3805a.d() < d10);
                T(d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Integer.valueOf(this.f3805a.p()));
            if (this.f3805a.e()) {
                return;
            }
            B = this.f3805a.B();
        } while (B == this.f3806b);
        this.f3808d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public int j() {
        U(0);
        return this.f3805a.p();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public int k() {
        U(0);
        return this.f3805a.x();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void l(List list) {
        int B;
        if (list instanceof e) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3806b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw z.d();
                }
                this.f3805a.C();
                this.f3805a.d();
                this.f3805a.m();
                throw null;
            }
            this.f3805a.m();
            throw null;
        }
        int b11 = q1.b(this.f3806b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f3805a.d() + this.f3805a.C();
                do {
                    list.add(Boolean.valueOf(this.f3805a.m()));
                } while (this.f3805a.d() < d10);
                T(d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Boolean.valueOf(this.f3805a.m()));
            if (this.f3805a.e()) {
                return;
            }
            B = this.f3805a.B();
        } while (B == this.f3806b);
        this.f3808d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void m(List list) {
        S(list, true);
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public g n() {
        U(2);
        return this.f3805a.n();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public int o() {
        U(0);
        return this.f3805a.t();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void p(List list) {
        int B;
        if (list instanceof f0) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3806b);
            if (b10 != 1) {
                if (b10 != 2) {
                    throw z.d();
                }
                W(this.f3805a.C());
                this.f3805a.d();
                this.f3805a.r();
                throw null;
            }
            this.f3805a.r();
            throw null;
        }
        int b11 = q1.b(this.f3806b);
        if (b11 != 1) {
            if (b11 == 2) {
                int C = this.f3805a.C();
                W(C);
                int d10 = this.f3805a.d() + C;
                do {
                    list.add(Long.valueOf(this.f3805a.r()));
                } while (this.f3805a.d() < d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Long.valueOf(this.f3805a.r()));
            if (this.f3805a.e()) {
                return;
            }
            B = this.f3805a.B();
        } while (B == this.f3806b);
        this.f3808d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void q(List list) {
        int B;
        if (list instanceof x) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3806b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw z.d();
                }
                this.f3805a.C();
                this.f3805a.d();
                this.f3805a.x();
                throw null;
            }
            this.f3805a.x();
            throw null;
        }
        int b11 = q1.b(this.f3806b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f3805a.d() + this.f3805a.C();
                do {
                    list.add(Integer.valueOf(this.f3805a.x()));
                } while (this.f3805a.d() < d10);
                T(d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Integer.valueOf(this.f3805a.x()));
            if (this.f3805a.e()) {
                return;
            }
            B = this.f3805a.B();
        } while (B == this.f3806b);
        this.f3808d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public long r() {
        U(0);
        return this.f3805a.D();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public double readDouble() {
        U(1);
        return this.f3805a.o();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public float readFloat() {
        U(5);
        return this.f3805a.s();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void s(List list) {
        int B;
        if (list instanceof x) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3806b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw z.d();
                }
                this.f3805a.C();
                this.f3805a.d();
                this.f3805a.C();
                throw null;
            }
            this.f3805a.C();
            throw null;
        }
        int b11 = q1.b(this.f3806b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f3805a.d() + this.f3805a.C();
                do {
                    list.add(Integer.valueOf(this.f3805a.C()));
                } while (this.f3805a.d() < d10);
                T(d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Integer.valueOf(this.f3805a.C()));
            if (this.f3805a.e()) {
                return;
            }
            B = this.f3805a.B();
        } while (B == this.f3806b);
        this.f3808d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public int t() {
        U(5);
        return this.f3805a.q();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void u(List list) {
        int B;
        if (list instanceof f0) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3806b);
            if (b10 != 1) {
                if (b10 != 2) {
                    throw z.d();
                }
                W(this.f3805a.C());
                this.f3805a.d();
                this.f3805a.w();
                throw null;
            }
            this.f3805a.w();
            throw null;
        }
        int b11 = q1.b(this.f3806b);
        if (b11 != 1) {
            if (b11 == 2) {
                int C = this.f3805a.C();
                W(C);
                int d10 = this.f3805a.d() + C;
                do {
                    list.add(Long.valueOf(this.f3805a.w()));
                } while (this.f3805a.d() < d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Long.valueOf(this.f3805a.w()));
            if (this.f3805a.e()) {
                return;
            }
            B = this.f3805a.B();
        } while (B == this.f3806b);
        this.f3808d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void v(List list) {
        int B;
        if (list instanceof x) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3806b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw z.d();
                }
                this.f3805a.C();
                this.f3805a.d();
                this.f3805a.t();
                throw null;
            }
            this.f3805a.t();
            throw null;
        }
        int b11 = q1.b(this.f3806b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f3805a.d() + this.f3805a.C();
                do {
                    list.add(Integer.valueOf(this.f3805a.t()));
                } while (this.f3805a.d() < d10);
                T(d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Integer.valueOf(this.f3805a.t()));
            if (this.f3805a.e()) {
                return;
            }
            B = this.f3805a.B();
        } while (B == this.f3806b);
        this.f3808d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void w(List list) {
        int B;
        if (list instanceof x) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3806b);
            if (b10 != 2) {
                if (b10 != 5) {
                    throw z.d();
                }
                this.f3805a.q();
                throw null;
            }
            V(this.f3805a.C());
            this.f3805a.d();
            this.f3805a.q();
            throw null;
        }
        int b11 = q1.b(this.f3806b);
        if (b11 != 2) {
            if (b11 == 5) {
                do {
                    list.add(Integer.valueOf(this.f3805a.q()));
                    if (!this.f3805a.e()) {
                        B = this.f3805a.B();
                    } else {
                        return;
                    }
                } while (B == this.f3806b);
                this.f3808d = B;
                return;
            }
            throw z.d();
        }
        int C = this.f3805a.C();
        V(C);
        int d10 = this.f3805a.d() + C;
        do {
            list.add(Integer.valueOf(this.f3805a.q()));
        } while (this.f3805a.d() < d10);
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public long x() {
        U(0);
        return this.f3805a.y();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public String y() {
        U(2);
        return this.f3805a.z();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public int z() {
        int i10 = this.f3808d;
        if (i10 != 0) {
            this.f3806b = i10;
            this.f3808d = 0;
        } else {
            this.f3806b = this.f3805a.B();
        }
        int i11 = this.f3806b;
        if (i11 != 0 && i11 != this.f3807c) {
            return q1.a(i11);
        }
        return Integer.MAX_VALUE;
    }
}
