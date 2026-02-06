package androidx.datastore.preferences.protobuf;

import androidx.datastore.preferences.protobuf.q1;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i implements c1 {

    /* renamed from: a  reason: collision with root package name */
    private final h f4108a;

    /* renamed from: b  reason: collision with root package name */
    private int f4109b;

    /* renamed from: c  reason: collision with root package name */
    private int f4110c;

    /* renamed from: d  reason: collision with root package name */
    private int f4111d = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f4112a;

        static {
            int[] iArr = new int[q1.b.values().length];
            f4112a = iArr;
            try {
                iArr[q1.b.f4187u.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f4112a[q1.b.f4191y.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f4112a[q1.b.f4180i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f4112a[q1.b.A.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f4112a[q1.b.f4186t.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f4112a[q1.b.f4185s.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f4112a[q1.b.f4181o.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f4112a[q1.b.f4184r.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f4112a[q1.b.f4182p.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f4112a[q1.b.f4190x.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f4112a[q1.b.B.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f4112a[q1.b.C.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                f4112a[q1.b.D.ordinal()] = 13;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                f4112a[q1.b.E.ordinal()] = 14;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                f4112a[q1.b.f4188v.ordinal()] = 15;
            } catch (NoSuchFieldError unused15) {
            }
            try {
                f4112a[q1.b.f4192z.ordinal()] = 16;
            } catch (NoSuchFieldError unused16) {
            }
            try {
                f4112a[q1.b.f4183q.ordinal()] = 17;
            } catch (NoSuchFieldError unused17) {
            }
        }
    }

    private i(h hVar) {
        h hVar2 = (h) y.b(hVar, "input");
        this.f4108a = hVar2;
        hVar2.f4082d = this;
    }

    public static i N(h hVar) {
        i iVar = hVar.f4082d;
        if (iVar != null) {
            return iVar;
        }
        return new i(hVar);
    }

    private Object O(q1.b bVar, Class cls, o oVar) {
        switch (a.f4112a[bVar.ordinal()]) {
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
        int i10 = this.f4110c;
        this.f4110c = q1.c(q1.a(this.f4109b), 4);
        try {
            Object d10 = d1Var.d();
            d1Var.g(d10, this, oVar);
            d1Var.b(d10);
            if (this.f4109b == this.f4110c) {
                return d10;
            }
            throw z.g();
        } finally {
            this.f4110c = i10;
        }
    }

    private Object Q(d1 d1Var, o oVar) {
        h hVar;
        int C = this.f4108a.C();
        h hVar2 = this.f4108a;
        if (hVar2.f4079a < hVar2.f4080b) {
            int l10 = hVar2.l(C);
            Object d10 = d1Var.d();
            this.f4108a.f4079a++;
            d1Var.g(d10, this, oVar);
            d1Var.b(d10);
            this.f4108a.a(0);
            hVar.f4079a--;
            this.f4108a.k(l10);
            return d10;
        }
        throw z.h();
    }

    private void T(int i10) {
        if (this.f4108a.d() == i10) {
            return;
        }
        throw z.k();
    }

    private void U(int i10) {
        if (q1.b(this.f4109b) == i10) {
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
            int b10 = q1.b(this.f4109b);
            if (b10 != 2) {
                if (b10 != 5) {
                    throw z.d();
                }
                this.f4108a.s();
                throw null;
            }
            V(this.f4108a.C());
            this.f4108a.d();
            this.f4108a.s();
            throw null;
        }
        int b11 = q1.b(this.f4109b);
        if (b11 != 2) {
            if (b11 == 5) {
                do {
                    list.add(Float.valueOf(this.f4108a.s()));
                    if (!this.f4108a.e()) {
                        B = this.f4108a.B();
                    } else {
                        return;
                    }
                } while (B == this.f4109b);
                this.f4111d = B;
                return;
            }
            throw z.d();
        }
        int C = this.f4108a.C();
        V(C);
        int d10 = this.f4108a.d() + C;
        do {
            list.add(Float.valueOf(this.f4108a.s()));
        } while (this.f4108a.d() < d10);
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public boolean C() {
        int i10;
        if (!this.f4108a.e() && (i10 = this.f4109b) != this.f4110c) {
            return this.f4108a.E(i10);
        }
        return false;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public int D() {
        U(5);
        return this.f4108a.v();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void E(List list) {
        int B;
        if (q1.b(this.f4109b) == 2) {
            do {
                list.add(n());
                if (this.f4108a.e()) {
                    return;
                }
                B = this.f4108a.B();
            } while (B == this.f4109b);
            this.f4111d = B;
            return;
        }
        throw z.d();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void F(List list) {
        int B;
        if (list instanceof l) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f4109b);
            if (b10 != 1) {
                if (b10 != 2) {
                    throw z.d();
                }
                W(this.f4108a.C());
                this.f4108a.d();
                this.f4108a.o();
                throw null;
            }
            this.f4108a.o();
            throw null;
        }
        int b11 = q1.b(this.f4109b);
        if (b11 != 1) {
            if (b11 == 2) {
                int C = this.f4108a.C();
                W(C);
                int d10 = this.f4108a.d() + C;
                do {
                    list.add(Double.valueOf(this.f4108a.o()));
                } while (this.f4108a.d() < d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Double.valueOf(this.f4108a.o()));
            if (this.f4108a.e()) {
                return;
            }
            B = this.f4108a.B();
        } while (B == this.f4109b);
        this.f4111d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public long G() {
        U(0);
        return this.f4108a.u();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public String H() {
        U(2);
        return this.f4108a.A();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public Object I(d1 d1Var, o oVar) {
        U(2);
        return Q(d1Var, oVar);
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void J(List list, d1 d1Var, o oVar) {
        int B;
        if (q1.b(this.f4109b) == 2) {
            int i10 = this.f4109b;
            do {
                list.add(Q(d1Var, oVar));
                if (!this.f4108a.e() && this.f4111d == 0) {
                    B = this.f4108a.B();
                } else {
                    return;
                }
            } while (B == i10);
            this.f4111d = B;
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
        r7.f4108a.k(r1);
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
            androidx.datastore.preferences.protobuf.h r1 = r7.f4108a
            int r1 = r1.C()
            androidx.datastore.preferences.protobuf.h r2 = r7.f4108a
            int r1 = r2.l(r1)
            java.lang.Object r2 = r9.f4105b
            java.lang.Object r3 = r9.f4107d
        L14:
            int r4 = r7.z()     // Catch: java.lang.Throwable -> L3a
            r5 = 2147483647(0x7fffffff, float:NaN)
            if (r4 == r5) goto L5e
            androidx.datastore.preferences.protobuf.h r5 = r7.f4108a     // Catch: java.lang.Throwable -> L3a
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
            androidx.datastore.preferences.protobuf.q1$b r4 = r9.f4106c     // Catch: java.lang.Throwable -> L3a androidx.datastore.preferences.protobuf.z.a -> L51
            java.lang.Object r5 = r9.f4107d     // Catch: java.lang.Throwable -> L3a androidx.datastore.preferences.protobuf.z.a -> L51
            java.lang.Class r5 = r5.getClass()     // Catch: java.lang.Throwable -> L3a androidx.datastore.preferences.protobuf.z.a -> L51
            java.lang.Object r3 = r7.O(r4, r5, r10)     // Catch: java.lang.Throwable -> L3a androidx.datastore.preferences.protobuf.z.a -> L51
            goto L14
        L49:
            androidx.datastore.preferences.protobuf.q1$b r4 = r9.f4104a     // Catch: java.lang.Throwable -> L3a androidx.datastore.preferences.protobuf.z.a -> L51
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
            androidx.datastore.preferences.protobuf.h r8 = r7.f4108a
            r8.k(r1)
            return
        L67:
            androidx.datastore.preferences.protobuf.h r9 = r7.f4108a
            r9.k(r1)
            throw r8
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.datastore.preferences.protobuf.i.L(java.util.Map, androidx.datastore.preferences.protobuf.h0$a, androidx.datastore.preferences.protobuf.o):void");
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void M(List list, d1 d1Var, o oVar) {
        int B;
        if (q1.b(this.f4109b) == 3) {
            int i10 = this.f4109b;
            do {
                list.add(P(d1Var, oVar));
                if (!this.f4108a.e() && this.f4111d == 0) {
                    B = this.f4108a.B();
                } else {
                    return;
                }
            } while (B == i10);
            this.f4111d = B;
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
        if (q1.b(this.f4109b) == 2) {
            if ((list instanceof d0) && !z10) {
                d0 d0Var = (d0) list;
                do {
                    d0Var.I0(n());
                    if (!this.f4108a.e()) {
                        B2 = this.f4108a.B();
                    } else {
                        return;
                    }
                } while (B2 == this.f4109b);
                this.f4111d = B2;
                return;
            }
            do {
                if (z10) {
                    y10 = H();
                } else {
                    y10 = y();
                }
                list.add(y10);
                if (this.f4108a.e()) {
                    return;
                }
                B = this.f4108a.B();
            } while (B == this.f4109b);
            this.f4111d = B;
            return;
        }
        throw z.d();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public long a() {
        U(1);
        return this.f4108a.r();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void b(List list) {
        int B;
        if (list instanceof x) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f4109b);
            if (b10 != 2) {
                if (b10 != 5) {
                    throw z.d();
                }
                this.f4108a.v();
                throw null;
            }
            V(this.f4108a.C());
            this.f4108a.d();
            this.f4108a.v();
            throw null;
        }
        int b11 = q1.b(this.f4109b);
        if (b11 != 2) {
            if (b11 == 5) {
                do {
                    list.add(Integer.valueOf(this.f4108a.v()));
                    if (!this.f4108a.e()) {
                        B = this.f4108a.B();
                    } else {
                        return;
                    }
                } while (B == this.f4109b);
                this.f4111d = B;
                return;
            }
            throw z.d();
        }
        int C = this.f4108a.C();
        V(C);
        int d10 = this.f4108a.d() + C;
        do {
            list.add(Integer.valueOf(this.f4108a.v()));
        } while (this.f4108a.d() < d10);
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void c(List list) {
        int B;
        if (list instanceof f0) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f4109b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw z.d();
                }
                this.f4108a.C();
                this.f4108a.d();
                this.f4108a.y();
                throw null;
            }
            this.f4108a.y();
            throw null;
        }
        int b11 = q1.b(this.f4109b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f4108a.d() + this.f4108a.C();
                do {
                    list.add(Long.valueOf(this.f4108a.y()));
                } while (this.f4108a.d() < d10);
                T(d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Long.valueOf(this.f4108a.y()));
            if (this.f4108a.e()) {
                return;
            }
            B = this.f4108a.B();
        } while (B == this.f4109b);
        this.f4111d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public boolean d() {
        U(0);
        return this.f4108a.m();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public long e() {
        U(1);
        return this.f4108a.w();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void f(List list) {
        int B;
        if (list instanceof f0) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f4109b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw z.d();
                }
                this.f4108a.C();
                this.f4108a.d();
                this.f4108a.D();
                throw null;
            }
            this.f4108a.D();
            throw null;
        }
        int b11 = q1.b(this.f4109b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f4108a.d() + this.f4108a.C();
                do {
                    list.add(Long.valueOf(this.f4108a.D()));
                } while (this.f4108a.d() < d10);
                T(d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Long.valueOf(this.f4108a.D()));
            if (this.f4108a.e()) {
                return;
            }
            B = this.f4108a.B();
        } while (B == this.f4109b);
        this.f4111d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public int g() {
        U(0);
        return this.f4108a.C();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public int getTag() {
        return this.f4109b;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void h(List list) {
        int B;
        if (list instanceof f0) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f4109b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw z.d();
                }
                this.f4108a.C();
                this.f4108a.d();
                this.f4108a.u();
                throw null;
            }
            this.f4108a.u();
            throw null;
        }
        int b11 = q1.b(this.f4109b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f4108a.d() + this.f4108a.C();
                do {
                    list.add(Long.valueOf(this.f4108a.u()));
                } while (this.f4108a.d() < d10);
                T(d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Long.valueOf(this.f4108a.u()));
            if (this.f4108a.e()) {
                return;
            }
            B = this.f4108a.B();
        } while (B == this.f4109b);
        this.f4111d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void i(List list) {
        int B;
        if (list instanceof x) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f4109b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw z.d();
                }
                this.f4108a.C();
                this.f4108a.d();
                this.f4108a.p();
                throw null;
            }
            this.f4108a.p();
            throw null;
        }
        int b11 = q1.b(this.f4109b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f4108a.d() + this.f4108a.C();
                do {
                    list.add(Integer.valueOf(this.f4108a.p()));
                } while (this.f4108a.d() < d10);
                T(d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Integer.valueOf(this.f4108a.p()));
            if (this.f4108a.e()) {
                return;
            }
            B = this.f4108a.B();
        } while (B == this.f4109b);
        this.f4111d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public int j() {
        U(0);
        return this.f4108a.p();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public int k() {
        U(0);
        return this.f4108a.x();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void l(List list) {
        int B;
        if (list instanceof e) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f4109b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw z.d();
                }
                this.f4108a.C();
                this.f4108a.d();
                this.f4108a.m();
                throw null;
            }
            this.f4108a.m();
            throw null;
        }
        int b11 = q1.b(this.f4109b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f4108a.d() + this.f4108a.C();
                do {
                    list.add(Boolean.valueOf(this.f4108a.m()));
                } while (this.f4108a.d() < d10);
                T(d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Boolean.valueOf(this.f4108a.m()));
            if (this.f4108a.e()) {
                return;
            }
            B = this.f4108a.B();
        } while (B == this.f4109b);
        this.f4111d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void m(List list) {
        S(list, true);
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public g n() {
        U(2);
        return this.f4108a.n();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public int o() {
        U(0);
        return this.f4108a.t();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void p(List list) {
        int B;
        if (list instanceof f0) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f4109b);
            if (b10 != 1) {
                if (b10 != 2) {
                    throw z.d();
                }
                W(this.f4108a.C());
                this.f4108a.d();
                this.f4108a.r();
                throw null;
            }
            this.f4108a.r();
            throw null;
        }
        int b11 = q1.b(this.f4109b);
        if (b11 != 1) {
            if (b11 == 2) {
                int C = this.f4108a.C();
                W(C);
                int d10 = this.f4108a.d() + C;
                do {
                    list.add(Long.valueOf(this.f4108a.r()));
                } while (this.f4108a.d() < d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Long.valueOf(this.f4108a.r()));
            if (this.f4108a.e()) {
                return;
            }
            B = this.f4108a.B();
        } while (B == this.f4109b);
        this.f4111d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void q(List list) {
        int B;
        if (list instanceof x) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f4109b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw z.d();
                }
                this.f4108a.C();
                this.f4108a.d();
                this.f4108a.x();
                throw null;
            }
            this.f4108a.x();
            throw null;
        }
        int b11 = q1.b(this.f4109b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f4108a.d() + this.f4108a.C();
                do {
                    list.add(Integer.valueOf(this.f4108a.x()));
                } while (this.f4108a.d() < d10);
                T(d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Integer.valueOf(this.f4108a.x()));
            if (this.f4108a.e()) {
                return;
            }
            B = this.f4108a.B();
        } while (B == this.f4109b);
        this.f4111d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public long r() {
        U(0);
        return this.f4108a.D();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public double readDouble() {
        U(1);
        return this.f4108a.o();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public float readFloat() {
        U(5);
        return this.f4108a.s();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void s(List list) {
        int B;
        if (list instanceof x) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f4109b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw z.d();
                }
                this.f4108a.C();
                this.f4108a.d();
                this.f4108a.C();
                throw null;
            }
            this.f4108a.C();
            throw null;
        }
        int b11 = q1.b(this.f4109b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f4108a.d() + this.f4108a.C();
                do {
                    list.add(Integer.valueOf(this.f4108a.C()));
                } while (this.f4108a.d() < d10);
                T(d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Integer.valueOf(this.f4108a.C()));
            if (this.f4108a.e()) {
                return;
            }
            B = this.f4108a.B();
        } while (B == this.f4109b);
        this.f4111d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public int t() {
        U(5);
        return this.f4108a.q();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void u(List list) {
        int B;
        if (list instanceof f0) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f4109b);
            if (b10 != 1) {
                if (b10 != 2) {
                    throw z.d();
                }
                W(this.f4108a.C());
                this.f4108a.d();
                this.f4108a.w();
                throw null;
            }
            this.f4108a.w();
            throw null;
        }
        int b11 = q1.b(this.f4109b);
        if (b11 != 1) {
            if (b11 == 2) {
                int C = this.f4108a.C();
                W(C);
                int d10 = this.f4108a.d() + C;
                do {
                    list.add(Long.valueOf(this.f4108a.w()));
                } while (this.f4108a.d() < d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Long.valueOf(this.f4108a.w()));
            if (this.f4108a.e()) {
                return;
            }
            B = this.f4108a.B();
        } while (B == this.f4109b);
        this.f4111d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void v(List list) {
        int B;
        if (list instanceof x) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f4109b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw z.d();
                }
                this.f4108a.C();
                this.f4108a.d();
                this.f4108a.t();
                throw null;
            }
            this.f4108a.t();
            throw null;
        }
        int b11 = q1.b(this.f4109b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f4108a.d() + this.f4108a.C();
                do {
                    list.add(Integer.valueOf(this.f4108a.t()));
                } while (this.f4108a.d() < d10);
                T(d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Integer.valueOf(this.f4108a.t()));
            if (this.f4108a.e()) {
                return;
            }
            B = this.f4108a.B();
        } while (B == this.f4109b);
        this.f4111d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void w(List list) {
        int B;
        if (list instanceof x) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f4109b);
            if (b10 != 2) {
                if (b10 != 5) {
                    throw z.d();
                }
                this.f4108a.q();
                throw null;
            }
            V(this.f4108a.C());
            this.f4108a.d();
            this.f4108a.q();
            throw null;
        }
        int b11 = q1.b(this.f4109b);
        if (b11 != 2) {
            if (b11 == 5) {
                do {
                    list.add(Integer.valueOf(this.f4108a.q()));
                    if (!this.f4108a.e()) {
                        B = this.f4108a.B();
                    } else {
                        return;
                    }
                } while (B == this.f4109b);
                this.f4111d = B;
                return;
            }
            throw z.d();
        }
        int C = this.f4108a.C();
        V(C);
        int d10 = this.f4108a.d() + C;
        do {
            list.add(Integer.valueOf(this.f4108a.q()));
        } while (this.f4108a.d() < d10);
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public long x() {
        U(0);
        return this.f4108a.y();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public String y() {
        U(2);
        return this.f4108a.z();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public int z() {
        int i10 = this.f4111d;
        if (i10 != 0) {
            this.f4109b = i10;
            this.f4111d = 0;
        } else {
            this.f4109b = this.f4108a.B();
        }
        int i11 = this.f4109b;
        if (i11 != 0 && i11 != this.f4110c) {
            return q1.a(i11);
        }
        return Integer.MAX_VALUE;
    }
}
