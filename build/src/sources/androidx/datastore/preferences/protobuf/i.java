package androidx.datastore.preferences.protobuf;

import androidx.datastore.preferences.protobuf.q1;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i implements c1 {

    /* renamed from: a  reason: collision with root package name */
    private final h f3667a;

    /* renamed from: b  reason: collision with root package name */
    private int f3668b;

    /* renamed from: c  reason: collision with root package name */
    private int f3669c;

    /* renamed from: d  reason: collision with root package name */
    private int f3670d = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f3671a;

        static {
            int[] iArr = new int[q1.b.values().length];
            f3671a = iArr;
            try {
                iArr[q1.b.f3746u.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f3671a[q1.b.f3750y.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f3671a[q1.b.f3739i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f3671a[q1.b.A.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f3671a[q1.b.f3745t.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f3671a[q1.b.f3744s.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f3671a[q1.b.f3740o.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f3671a[q1.b.f3743r.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f3671a[q1.b.f3741p.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f3671a[q1.b.f3749x.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f3671a[q1.b.B.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f3671a[q1.b.C.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                f3671a[q1.b.D.ordinal()] = 13;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                f3671a[q1.b.E.ordinal()] = 14;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                f3671a[q1.b.f3747v.ordinal()] = 15;
            } catch (NoSuchFieldError unused15) {
            }
            try {
                f3671a[q1.b.f3751z.ordinal()] = 16;
            } catch (NoSuchFieldError unused16) {
            }
            try {
                f3671a[q1.b.f3742q.ordinal()] = 17;
            } catch (NoSuchFieldError unused17) {
            }
        }
    }

    private i(h hVar) {
        h hVar2 = (h) y.b(hVar, "input");
        this.f3667a = hVar2;
        hVar2.f3641d = this;
    }

    public static i N(h hVar) {
        i iVar = hVar.f3641d;
        if (iVar != null) {
            return iVar;
        }
        return new i(hVar);
    }

    private Object O(q1.b bVar, Class cls, o oVar) {
        switch (a.f3671a[bVar.ordinal()]) {
            case 1:
                return Boolean.valueOf(e());
            case 2:
                return o();
            case 3:
                return Double.valueOf(readDouble());
            case 4:
                return Integer.valueOf(k());
            case 5:
                return Integer.valueOf(w());
            case 6:
                return Long.valueOf(b());
            case 7:
                return Float.valueOf(readFloat());
            case 8:
                return Integer.valueOf(p());
            case 9:
                return Long.valueOf(L());
            case 10:
                return R(cls, oVar);
            case 11:
                return Integer.valueOf(I());
            case 12:
                return Long.valueOf(f());
            case 13:
                return Integer.valueOf(l());
            case 14:
                return Long.valueOf(B());
            case 15:
                return M();
            case 16:
                return Integer.valueOf(h());
            case 17:
                return Long.valueOf(u());
            default:
                throw new RuntimeException("unsupported field type.");
        }
    }

    private Object P(d1 d1Var, o oVar) {
        int i10 = this.f3669c;
        this.f3669c = q1.c(q1.a(this.f3668b), 4);
        try {
            Object f10 = d1Var.f();
            d1Var.b(f10, this, oVar);
            d1Var.c(f10);
            if (this.f3668b == this.f3669c) {
                return f10;
            }
            throw z.g();
        } finally {
            this.f3669c = i10;
        }
    }

    private Object Q(d1 d1Var, o oVar) {
        h hVar;
        int C = this.f3667a.C();
        h hVar2 = this.f3667a;
        if (hVar2.f3638a < hVar2.f3639b) {
            int l10 = hVar2.l(C);
            Object f10 = d1Var.f();
            this.f3667a.f3638a++;
            d1Var.b(f10, this, oVar);
            d1Var.c(f10);
            this.f3667a.a(0);
            hVar.f3638a--;
            this.f3667a.k(l10);
            return f10;
        }
        throw z.h();
    }

    private void T(int i10) {
        if (this.f3667a.d() == i10) {
            return;
        }
        throw z.k();
    }

    private void U(int i10) {
        if (q1.b(this.f3668b) == i10) {
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
        int B;
        if (list instanceof x) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3668b);
            if (b10 != 2) {
                if (b10 != 5) {
                    throw z.d();
                }
                this.f3667a.q();
                throw null;
            }
            V(this.f3667a.C());
            this.f3667a.d();
            this.f3667a.q();
            throw null;
        }
        int b11 = q1.b(this.f3668b);
        if (b11 != 2) {
            if (b11 == 5) {
                do {
                    list.add(Integer.valueOf(this.f3667a.q()));
                    if (!this.f3667a.e()) {
                        B = this.f3667a.B();
                    } else {
                        return;
                    }
                } while (B == this.f3668b);
                this.f3670d = B;
                return;
            }
            throw z.d();
        }
        int C = this.f3667a.C();
        V(C);
        int d10 = this.f3667a.d() + C;
        do {
            list.add(Integer.valueOf(this.f3667a.q()));
        } while (this.f3667a.d() < d10);
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public long B() {
        U(0);
        return this.f3667a.y();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public String C() {
        U(2);
        return this.f3667a.z();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public int D() {
        int i10 = this.f3670d;
        if (i10 != 0) {
            this.f3668b = i10;
            this.f3670d = 0;
        } else {
            this.f3668b = this.f3667a.B();
        }
        int i11 = this.f3668b;
        if (i11 != 0 && i11 != this.f3669c) {
            return q1.a(i11);
        }
        return Integer.MAX_VALUE;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void E(List list) {
        S(list, false);
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void F(List list) {
        int B;
        if (list instanceof u) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3668b);
            if (b10 != 2) {
                if (b10 != 5) {
                    throw z.d();
                }
                this.f3667a.s();
                throw null;
            }
            V(this.f3667a.C());
            this.f3667a.d();
            this.f3667a.s();
            throw null;
        }
        int b11 = q1.b(this.f3668b);
        if (b11 != 2) {
            if (b11 == 5) {
                do {
                    list.add(Float.valueOf(this.f3667a.s()));
                    if (!this.f3667a.e()) {
                        B = this.f3667a.B();
                    } else {
                        return;
                    }
                } while (B == this.f3668b);
                this.f3670d = B;
                return;
            }
            throw z.d();
        }
        int C = this.f3667a.C();
        V(C);
        int d10 = this.f3667a.d() + C;
        do {
            list.add(Float.valueOf(this.f3667a.s()));
        } while (this.f3667a.d() < d10);
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void G(List list, d1 d1Var, o oVar) {
        int B;
        if (q1.b(this.f3668b) == 3) {
            int i10 = this.f3668b;
            do {
                list.add(P(d1Var, oVar));
                if (!this.f3667a.e() && this.f3670d == 0) {
                    B = this.f3667a.B();
                } else {
                    return;
                }
            } while (B == i10);
            this.f3670d = B;
            return;
        }
        throw z.d();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public boolean H() {
        int i10;
        if (!this.f3667a.e() && (i10 = this.f3668b) != this.f3669c) {
            return this.f3667a.E(i10);
        }
        return false;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public int I() {
        U(5);
        return this.f3667a.v();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void J(List list) {
        int B;
        if (q1.b(this.f3668b) == 2) {
            do {
                list.add(o());
                if (this.f3667a.e()) {
                    return;
                }
                B = this.f3667a.B();
            } while (B == this.f3668b);
            this.f3670d = B;
            return;
        }
        throw z.d();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void K(List list) {
        int B;
        if (list instanceof l) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3668b);
            if (b10 != 1) {
                if (b10 != 2) {
                    throw z.d();
                }
                W(this.f3667a.C());
                this.f3667a.d();
                this.f3667a.o();
                throw null;
            }
            this.f3667a.o();
            throw null;
        }
        int b11 = q1.b(this.f3668b);
        if (b11 != 1) {
            if (b11 == 2) {
                int C = this.f3667a.C();
                W(C);
                int d10 = this.f3667a.d() + C;
                do {
                    list.add(Double.valueOf(this.f3667a.o()));
                } while (this.f3667a.d() < d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Double.valueOf(this.f3667a.o()));
            if (this.f3667a.e()) {
                return;
            }
            B = this.f3667a.B();
        } while (B == this.f3668b);
        this.f3670d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public long L() {
        U(0);
        return this.f3667a.u();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public String M() {
        U(2);
        return this.f3667a.A();
    }

    public Object R(Class cls, o oVar) {
        U(2);
        return Q(z0.a().c(cls), oVar);
    }

    public void S(List list, boolean z10) {
        String C;
        int B;
        int B2;
        if (q1.b(this.f3668b) == 2) {
            if ((list instanceof d0) && !z10) {
                d0 d0Var = (d0) list;
                do {
                    d0Var.F0(o());
                    if (!this.f3667a.e()) {
                        B2 = this.f3667a.B();
                    } else {
                        return;
                    }
                } while (B2 == this.f3668b);
                this.f3670d = B2;
                return;
            }
            do {
                if (z10) {
                    C = M();
                } else {
                    C = C();
                }
                list.add(C);
                if (this.f3667a.e()) {
                    return;
                }
                B = this.f3667a.B();
            } while (B == this.f3668b);
            this.f3670d = B;
            return;
        }
        throw z.d();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public Object a(d1 d1Var, o oVar) {
        U(2);
        return Q(d1Var, oVar);
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public long b() {
        U(1);
        return this.f3667a.r();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void c(List list) {
        int B;
        if (list instanceof x) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3668b);
            if (b10 != 2) {
                if (b10 != 5) {
                    throw z.d();
                }
                this.f3667a.v();
                throw null;
            }
            V(this.f3667a.C());
            this.f3667a.d();
            this.f3667a.v();
            throw null;
        }
        int b11 = q1.b(this.f3668b);
        if (b11 != 2) {
            if (b11 == 5) {
                do {
                    list.add(Integer.valueOf(this.f3667a.v()));
                    if (!this.f3667a.e()) {
                        B = this.f3667a.B();
                    } else {
                        return;
                    }
                } while (B == this.f3668b);
                this.f3670d = B;
                return;
            }
            throw z.d();
        }
        int C = this.f3667a.C();
        V(C);
        int d10 = this.f3667a.d() + C;
        do {
            list.add(Integer.valueOf(this.f3667a.v()));
        } while (this.f3667a.d() < d10);
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void d(List list) {
        int B;
        if (list instanceof f0) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3668b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw z.d();
                }
                this.f3667a.C();
                this.f3667a.d();
                this.f3667a.y();
                throw null;
            }
            this.f3667a.y();
            throw null;
        }
        int b11 = q1.b(this.f3668b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f3667a.d() + this.f3667a.C();
                do {
                    list.add(Long.valueOf(this.f3667a.y()));
                } while (this.f3667a.d() < d10);
                T(d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Long.valueOf(this.f3667a.y()));
            if (this.f3667a.e()) {
                return;
            }
            B = this.f3667a.B();
        } while (B == this.f3668b);
        this.f3670d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public boolean e() {
        U(0);
        return this.f3667a.m();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public long f() {
        U(1);
        return this.f3667a.w();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void g(List list) {
        int B;
        if (list instanceof f0) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3668b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw z.d();
                }
                this.f3667a.C();
                this.f3667a.d();
                this.f3667a.D();
                throw null;
            }
            this.f3667a.D();
            throw null;
        }
        int b11 = q1.b(this.f3668b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f3667a.d() + this.f3667a.C();
                do {
                    list.add(Long.valueOf(this.f3667a.D()));
                } while (this.f3667a.d() < d10);
                T(d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Long.valueOf(this.f3667a.D()));
            if (this.f3667a.e()) {
                return;
            }
            B = this.f3667a.B();
        } while (B == this.f3668b);
        this.f3670d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public int getTag() {
        return this.f3668b;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public int h() {
        U(0);
        return this.f3667a.C();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void i(List list) {
        int B;
        if (list instanceof f0) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3668b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw z.d();
                }
                this.f3667a.C();
                this.f3667a.d();
                this.f3667a.u();
                throw null;
            }
            this.f3667a.u();
            throw null;
        }
        int b11 = q1.b(this.f3668b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f3667a.d() + this.f3667a.C();
                do {
                    list.add(Long.valueOf(this.f3667a.u()));
                } while (this.f3667a.d() < d10);
                T(d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Long.valueOf(this.f3667a.u()));
            if (this.f3667a.e()) {
                return;
            }
            B = this.f3667a.B();
        } while (B == this.f3668b);
        this.f3670d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void j(List list) {
        int B;
        if (list instanceof x) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3668b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw z.d();
                }
                this.f3667a.C();
                this.f3667a.d();
                this.f3667a.p();
                throw null;
            }
            this.f3667a.p();
            throw null;
        }
        int b11 = q1.b(this.f3668b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f3667a.d() + this.f3667a.C();
                do {
                    list.add(Integer.valueOf(this.f3667a.p()));
                } while (this.f3667a.d() < d10);
                T(d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Integer.valueOf(this.f3667a.p()));
            if (this.f3667a.e()) {
                return;
            }
            B = this.f3667a.B();
        } while (B == this.f3668b);
        this.f3670d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public int k() {
        U(0);
        return this.f3667a.p();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public int l() {
        U(0);
        return this.f3667a.x();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void m(List list) {
        int B;
        if (list instanceof e) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3668b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw z.d();
                }
                this.f3667a.C();
                this.f3667a.d();
                this.f3667a.m();
                throw null;
            }
            this.f3667a.m();
            throw null;
        }
        int b11 = q1.b(this.f3668b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f3667a.d() + this.f3667a.C();
                do {
                    list.add(Boolean.valueOf(this.f3667a.m()));
                } while (this.f3667a.d() < d10);
                T(d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Boolean.valueOf(this.f3667a.m()));
            if (this.f3667a.e()) {
                return;
            }
            B = this.f3667a.B();
        } while (B == this.f3668b);
        this.f3670d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void n(List list) {
        S(list, true);
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public g o() {
        U(2);
        return this.f3667a.n();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public int p() {
        U(0);
        return this.f3667a.t();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void q(List list, d1 d1Var, o oVar) {
        int B;
        if (q1.b(this.f3668b) == 2) {
            int i10 = this.f3668b;
            do {
                list.add(Q(d1Var, oVar));
                if (!this.f3667a.e() && this.f3670d == 0) {
                    B = this.f3667a.B();
                } else {
                    return;
                }
            } while (B == i10);
            this.f3670d = B;
            return;
        }
        throw z.d();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void r(List list) {
        int B;
        if (list instanceof f0) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3668b);
            if (b10 != 1) {
                if (b10 != 2) {
                    throw z.d();
                }
                W(this.f3667a.C());
                this.f3667a.d();
                this.f3667a.r();
                throw null;
            }
            this.f3667a.r();
            throw null;
        }
        int b11 = q1.b(this.f3668b);
        if (b11 != 1) {
            if (b11 == 2) {
                int C = this.f3667a.C();
                W(C);
                int d10 = this.f3667a.d() + C;
                do {
                    list.add(Long.valueOf(this.f3667a.r()));
                } while (this.f3667a.d() < d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Long.valueOf(this.f3667a.r()));
            if (this.f3667a.e()) {
                return;
            }
            B = this.f3667a.B();
        } while (B == this.f3668b);
        this.f3670d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public double readDouble() {
        U(1);
        return this.f3667a.o();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public float readFloat() {
        U(5);
        return this.f3667a.s();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public Object s(d1 d1Var, o oVar) {
        U(3);
        return P(d1Var, oVar);
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void t(List list) {
        int B;
        if (list instanceof x) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3668b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw z.d();
                }
                this.f3667a.C();
                this.f3667a.d();
                this.f3667a.x();
                throw null;
            }
            this.f3667a.x();
            throw null;
        }
        int b11 = q1.b(this.f3668b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f3667a.d() + this.f3667a.C();
                do {
                    list.add(Integer.valueOf(this.f3667a.x()));
                } while (this.f3667a.d() < d10);
                T(d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Integer.valueOf(this.f3667a.x()));
            if (this.f3667a.e()) {
                return;
            }
            B = this.f3667a.B();
        } while (B == this.f3668b);
        this.f3670d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public long u() {
        U(0);
        return this.f3667a.D();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void v(List list) {
        int B;
        if (list instanceof x) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3668b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw z.d();
                }
                this.f3667a.C();
                this.f3667a.d();
                this.f3667a.C();
                throw null;
            }
            this.f3667a.C();
            throw null;
        }
        int b11 = q1.b(this.f3668b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f3667a.d() + this.f3667a.C();
                do {
                    list.add(Integer.valueOf(this.f3667a.C()));
                } while (this.f3667a.d() < d10);
                T(d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Integer.valueOf(this.f3667a.C()));
            if (this.f3667a.e()) {
                return;
            }
            B = this.f3667a.B();
        } while (B == this.f3668b);
        this.f3670d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public int w() {
        U(5);
        return this.f3667a.q();
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void x(List list) {
        int B;
        if (list instanceof f0) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3668b);
            if (b10 != 1) {
                if (b10 != 2) {
                    throw z.d();
                }
                W(this.f3667a.C());
                this.f3667a.d();
                this.f3667a.w();
                throw null;
            }
            this.f3667a.w();
            throw null;
        }
        int b11 = q1.b(this.f3668b);
        if (b11 != 1) {
            if (b11 == 2) {
                int C = this.f3667a.C();
                W(C);
                int d10 = this.f3667a.d() + C;
                do {
                    list.add(Long.valueOf(this.f3667a.w()));
                } while (this.f3667a.d() < d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Long.valueOf(this.f3667a.w()));
            if (this.f3667a.e()) {
                return;
            }
            B = this.f3667a.B();
        } while (B == this.f3668b);
        this.f3670d = B;
    }

    @Override // androidx.datastore.preferences.protobuf.c1
    public void y(List list) {
        int B;
        if (list instanceof x) {
            android.support.v4.media.session.b.a(list);
            int b10 = q1.b(this.f3668b);
            if (b10 != 0) {
                if (b10 != 2) {
                    throw z.d();
                }
                this.f3667a.C();
                this.f3667a.d();
                this.f3667a.t();
                throw null;
            }
            this.f3667a.t();
            throw null;
        }
        int b11 = q1.b(this.f3668b);
        if (b11 != 0) {
            if (b11 == 2) {
                int d10 = this.f3667a.d() + this.f3667a.C();
                do {
                    list.add(Integer.valueOf(this.f3667a.t()));
                } while (this.f3667a.d() < d10);
                T(d10);
                return;
            }
            throw z.d();
        }
        do {
            list.add(Integer.valueOf(this.f3667a.t()));
            if (this.f3667a.e()) {
                return;
            }
            B = this.f3667a.B();
        } while (B == this.f3668b);
        this.f3670d = B;
    }

    /* JADX WARN: Code restructure failed: missing block: B:26:0x005e, code lost:
        r8.put(r2, r3);
     */
    /* JADX WARN: Code restructure failed: missing block: B:27:0x0061, code lost:
        r7.f3667a.k(r1);
     */
    /* JADX WARN: Code restructure failed: missing block: B:28:0x0066, code lost:
        return;
     */
    @Override // androidx.datastore.preferences.protobuf.c1
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void z(java.util.Map r8, androidx.datastore.preferences.protobuf.h0.a r9, androidx.datastore.preferences.protobuf.o r10) {
        /*
            r7 = this;
            r0 = 2
            r7.U(r0)
            androidx.datastore.preferences.protobuf.h r1 = r7.f3667a
            int r1 = r1.C()
            androidx.datastore.preferences.protobuf.h r2 = r7.f3667a
            int r1 = r2.l(r1)
            java.lang.Object r2 = r9.f3664b
            java.lang.Object r3 = r9.f3666d
        L14:
            int r4 = r7.D()     // Catch: java.lang.Throwable -> L3a
            r5 = 2147483647(0x7fffffff, float:NaN)
            if (r4 == r5) goto L5e
            androidx.datastore.preferences.protobuf.h r5 = r7.f3667a     // Catch: java.lang.Throwable -> L3a
            boolean r5 = r5.e()     // Catch: java.lang.Throwable -> L3a
            if (r5 == 0) goto L26
            goto L5e
        L26:
            r5 = 1
            java.lang.String r6 = "Unable to parse map entry."
            if (r4 == r5) goto L49
            if (r4 == r0) goto L3c
            boolean r4 = r7.H()     // Catch: java.lang.Throwable -> L3a androidx.datastore.preferences.protobuf.z.a -> L51
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
            androidx.datastore.preferences.protobuf.q1$b r4 = r9.f3665c     // Catch: java.lang.Throwable -> L3a androidx.datastore.preferences.protobuf.z.a -> L51
            java.lang.Object r5 = r9.f3666d     // Catch: java.lang.Throwable -> L3a androidx.datastore.preferences.protobuf.z.a -> L51
            java.lang.Class r5 = r5.getClass()     // Catch: java.lang.Throwable -> L3a androidx.datastore.preferences.protobuf.z.a -> L51
            java.lang.Object r3 = r7.O(r4, r5, r10)     // Catch: java.lang.Throwable -> L3a androidx.datastore.preferences.protobuf.z.a -> L51
            goto L14
        L49:
            androidx.datastore.preferences.protobuf.q1$b r4 = r9.f3663a     // Catch: java.lang.Throwable -> L3a androidx.datastore.preferences.protobuf.z.a -> L51
            r5 = 0
            java.lang.Object r2 = r7.O(r4, r5, r5)     // Catch: java.lang.Throwable -> L3a androidx.datastore.preferences.protobuf.z.a -> L51
            goto L14
        L51:
            boolean r4 = r7.H()     // Catch: java.lang.Throwable -> L3a
            if (r4 == 0) goto L58
            goto L14
        L58:
            androidx.datastore.preferences.protobuf.z r8 = new androidx.datastore.preferences.protobuf.z     // Catch: java.lang.Throwable -> L3a
            r8.<init>(r6)     // Catch: java.lang.Throwable -> L3a
            throw r8     // Catch: java.lang.Throwable -> L3a
        L5e:
            r8.put(r2, r3)     // Catch: java.lang.Throwable -> L3a
            androidx.datastore.preferences.protobuf.h r8 = r7.f3667a
            r8.k(r1)
            return
        L67:
            androidx.datastore.preferences.protobuf.h r9 = r7.f3667a
            r9.k(r1)
            throw r8
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.datastore.preferences.protobuf.i.z(java.util.Map, androidx.datastore.preferences.protobuf.h0$a, androidx.datastore.preferences.protobuf.o):void");
    }
}
