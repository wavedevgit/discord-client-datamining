package com.google.android.gms.internal.play_billing;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a1 implements o4 {

    /* renamed from: a  reason: collision with root package name */
    private final z0 f14134a;

    private a1(z0 z0Var) {
        byte[] bArr = y1.f14367d;
        this.f14134a = z0Var;
        z0Var.f14388a = this;
    }

    public static a1 L(z0 z0Var) {
        a1 a1Var = z0Var.f14388a;
        if (a1Var != null) {
            return a1Var;
        }
        return new a1(z0Var);
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void A(int i10, List list, boolean z10) {
        int i11 = 0;
        if (list instanceof r1) {
            r1 r1Var = (r1) list;
            if (z10) {
                this.f14134a.o(i10, 2);
                int i12 = 0;
                for (int i13 = 0; i13 < r1Var.size(); i13++) {
                    i12 += z0.x(r1Var.c(i13));
                }
                this.f14134a.q(i12);
                while (i11 < r1Var.size()) {
                    this.f14134a.l(r1Var.c(i11));
                    i11++;
                }
                return;
            }
            while (i11 < r1Var.size()) {
                this.f14134a.k(i10, r1Var.c(i11));
                i11++;
            }
        } else if (z10) {
            this.f14134a.o(i10, 2);
            int i14 = 0;
            for (int i15 = 0; i15 < list.size(); i15++) {
                i14 += z0.x(((Integer) list.get(i15)).intValue());
            }
            this.f14134a.q(i14);
            while (i11 < list.size()) {
                this.f14134a.l(((Integer) list.get(i11)).intValue());
                i11++;
            }
        } else {
            while (i11 < list.size()) {
                this.f14134a.k(i10, ((Integer) list.get(i11)).intValue());
                i11++;
            }
        }
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void B(int i10, List list, boolean z10) {
        int i11 = 0;
        if (list instanceof r1) {
            r1 r1Var = (r1) list;
            if (z10) {
                this.f14134a.o(i10, 2);
                int i12 = 0;
                for (int i13 = 0; i13 < r1Var.size(); i13++) {
                    int c10 = r1Var.c(i13);
                    i12 += z0.w((c10 >> 31) ^ (c10 + c10));
                }
                this.f14134a.q(i12);
                while (i11 < r1Var.size()) {
                    z0 z0Var = this.f14134a;
                    int c11 = r1Var.c(i11);
                    z0Var.q((c11 >> 31) ^ (c11 + c11));
                    i11++;
                }
                return;
            }
            while (i11 < r1Var.size()) {
                z0 z0Var2 = this.f14134a;
                int c12 = r1Var.c(i11);
                z0Var2.p(i10, (c12 >> 31) ^ (c12 + c12));
                i11++;
            }
        } else if (z10) {
            this.f14134a.o(i10, 2);
            int i14 = 0;
            for (int i15 = 0; i15 < list.size(); i15++) {
                int intValue = ((Integer) list.get(i15)).intValue();
                i14 += z0.w((intValue >> 31) ^ (intValue + intValue));
            }
            this.f14134a.q(i14);
            while (i11 < list.size()) {
                z0 z0Var3 = this.f14134a;
                int intValue2 = ((Integer) list.get(i11)).intValue();
                z0Var3.q((intValue2 >> 31) ^ (intValue2 + intValue2));
                i11++;
            }
        } else {
            while (i11 < list.size()) {
                z0 z0Var4 = this.f14134a;
                int intValue3 = ((Integer) list.get(i11)).intValue();
                z0Var4.p(i10, (intValue3 >> 31) ^ (intValue3 + intValue3));
                i11++;
            }
        }
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void C(int i10, float f10) {
        this.f14134a.g(i10, Float.floatToRawIntBits(f10));
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void D(int i10, List list, boolean z10) {
        if (list instanceof l2) {
            android.support.v4.media.session.b.a(list);
            if (z10) {
                this.f14134a.o(i10, 2);
                throw null;
            }
            throw null;
        }
        int i11 = 0;
        if (z10) {
            this.f14134a.o(i10, 2);
            int i12 = 0;
            for (int i13 = 0; i13 < list.size(); i13++) {
                i12 += z0.x(((Long) list.get(i13)).longValue());
            }
            this.f14134a.q(i12);
            while (i11 < list.size()) {
                this.f14134a.s(((Long) list.get(i11)).longValue());
                i11++;
            }
            return;
        }
        while (i11 < list.size()) {
            this.f14134a.r(i10, ((Long) list.get(i11)).longValue());
            i11++;
        }
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void E(int i10, Object obj) {
        if (obj instanceof r0) {
            w0 w0Var = (w0) this.f14134a;
            w0Var.q(11);
            w0Var.p(2, i10);
            w0Var.f(3, (r0) obj);
            w0Var.q(12);
            return;
        }
        z0 z0Var = this.f14134a;
        v2 v2Var = (v2) obj;
        w0 w0Var2 = (w0) z0Var;
        w0Var2.q(11);
        w0Var2.p(2, i10);
        w0Var2.q(26);
        w0Var2.q(v2Var.c());
        v2Var.b(z0Var);
        w0Var2.q(12);
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void F(int i10, Object obj, g3 g3Var) {
        v2 v2Var = (v2) obj;
        w0 w0Var = (w0) this.f14134a;
        w0Var.q((i10 << 3) | 2);
        w0Var.q(((z) v2Var).d(g3Var));
        g3Var.g(v2Var, w0Var.f14388a);
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void G(int i10, List list, boolean z10) {
        if (list instanceof l2) {
            android.support.v4.media.session.b.a(list);
            if (z10) {
                this.f14134a.o(i10, 2);
                throw null;
            }
            throw null;
        }
        int i11 = 0;
        if (z10) {
            this.f14134a.o(i10, 2);
            int i12 = 0;
            for (int i13 = 0; i13 < list.size(); i13++) {
                long longValue = ((Long) list.get(i13)).longValue();
                i12 += z0.x((longValue >> 63) ^ (longValue + longValue));
            }
            this.f14134a.q(i12);
            while (i11 < list.size()) {
                z0 z0Var = this.f14134a;
                long longValue2 = ((Long) list.get(i11)).longValue();
                z0Var.s((longValue2 >> 63) ^ (longValue2 + longValue2));
                i11++;
            }
            return;
        }
        while (i11 < list.size()) {
            z0 z0Var2 = this.f14134a;
            long longValue3 = ((Long) list.get(i11)).longValue();
            z0Var2.r(i10, (longValue3 >> 63) ^ (longValue3 + longValue3));
            i11++;
        }
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void H(int i10, List list, boolean z10) {
        if (list instanceof b1) {
            android.support.v4.media.session.b.a(list);
            if (z10) {
                this.f14134a.o(i10, 2);
                throw null;
            }
            throw null;
        }
        int i11 = 0;
        if (z10) {
            this.f14134a.o(i10, 2);
            int i12 = 0;
            for (int i13 = 0; i13 < list.size(); i13++) {
                ((Double) list.get(i13)).getClass();
                i12 += 8;
            }
            this.f14134a.q(i12);
            while (i11 < list.size()) {
                this.f14134a.j(Double.doubleToRawLongBits(((Double) list.get(i11)).doubleValue()));
                i11++;
            }
            return;
        }
        while (i11 < list.size()) {
            this.f14134a.i(i10, Double.doubleToRawLongBits(((Double) list.get(i11)).doubleValue()));
            i11++;
        }
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void I(int i10, long j10) {
        this.f14134a.i(i10, j10);
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void J(int i10, List list) {
        int i11 = 0;
        if (list instanceof e2) {
            e2 e2Var = (e2) list;
            while (i11 < list.size()) {
                Object Y = e2Var.Y(i11);
                if (Y instanceof String) {
                    this.f14134a.n(i10, (String) Y);
                } else {
                    this.f14134a.f(i10, (r0) Y);
                }
                i11++;
            }
            return;
        }
        while (i11 < list.size()) {
            this.f14134a.n(i10, (String) list.get(i11));
            i11++;
        }
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void K(int i10, long j10) {
        this.f14134a.r(i10, j10);
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void a(int i10, List list) {
        for (int i11 = 0; i11 < list.size(); i11++) {
            this.f14134a.f(i10, (r0) list.get(i11));
        }
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void b(int i10, String str) {
        this.f14134a.n(i10, str);
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void c(int i10, Object obj, g3 g3Var) {
        z0 z0Var = this.f14134a;
        z0Var.o(i10, 3);
        g3Var.g((v2) obj, z0Var.f14388a);
        z0Var.o(i10, 4);
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void d(int i10, boolean z10) {
        this.f14134a.e(i10, z10);
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void e(int i10, r0 r0Var) {
        this.f14134a.f(i10, r0Var);
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void f(int i10, long j10) {
        this.f14134a.r(i10, j10);
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void g(int i10, List list, boolean z10) {
        if (list instanceof f0) {
            android.support.v4.media.session.b.a(list);
            if (z10) {
                this.f14134a.o(i10, 2);
                throw null;
            }
            throw null;
        }
        int i11 = 0;
        if (z10) {
            this.f14134a.o(i10, 2);
            int i12 = 0;
            for (int i13 = 0; i13 < list.size(); i13++) {
                ((Boolean) list.get(i13)).getClass();
                i12++;
            }
            this.f14134a.q(i12);
            while (i11 < list.size()) {
                this.f14134a.d(((Boolean) list.get(i11)).booleanValue() ? (byte) 1 : (byte) 0);
                i11++;
            }
            return;
        }
        while (i11 < list.size()) {
            this.f14134a.e(i10, ((Boolean) list.get(i11)).booleanValue());
            i11++;
        }
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void h(int i10, List list, boolean z10) {
        if (list instanceof l2) {
            android.support.v4.media.session.b.a(list);
            if (z10) {
                this.f14134a.o(i10, 2);
                throw null;
            }
            throw null;
        }
        int i11 = 0;
        if (z10) {
            this.f14134a.o(i10, 2);
            int i12 = 0;
            for (int i13 = 0; i13 < list.size(); i13++) {
                ((Long) list.get(i13)).getClass();
                i12 += 8;
            }
            this.f14134a.q(i12);
            while (i11 < list.size()) {
                this.f14134a.j(((Long) list.get(i11)).longValue());
                i11++;
            }
            return;
        }
        while (i11 < list.size()) {
            this.f14134a.i(i10, ((Long) list.get(i11)).longValue());
            i11++;
        }
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void i(int i10, List list, boolean z10) {
        int i11 = 0;
        if (list instanceof r1) {
            r1 r1Var = (r1) list;
            if (z10) {
                this.f14134a.o(i10, 2);
                int i12 = 0;
                for (int i13 = 0; i13 < r1Var.size(); i13++) {
                    i12 += z0.x(r1Var.c(i13));
                }
                this.f14134a.q(i12);
                while (i11 < r1Var.size()) {
                    this.f14134a.l(r1Var.c(i11));
                    i11++;
                }
                return;
            }
            while (i11 < r1Var.size()) {
                this.f14134a.k(i10, r1Var.c(i11));
                i11++;
            }
        } else if (z10) {
            this.f14134a.o(i10, 2);
            int i14 = 0;
            for (int i15 = 0; i15 < list.size(); i15++) {
                i14 += z0.x(((Integer) list.get(i15)).intValue());
            }
            this.f14134a.q(i14);
            while (i11 < list.size()) {
                this.f14134a.l(((Integer) list.get(i11)).intValue());
                i11++;
            }
        } else {
            while (i11 < list.size()) {
                this.f14134a.k(i10, ((Integer) list.get(i11)).intValue());
                i11++;
            }
        }
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void j(int i10, int i11) {
        this.f14134a.k(i10, i11);
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void k(int i10, double d10) {
        this.f14134a.i(i10, Double.doubleToRawLongBits(d10));
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void l(int i10, long j10) {
        this.f14134a.r(i10, (j10 >> 63) ^ (j10 + j10));
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void m(int i10, List list, boolean z10) {
        if (list instanceof l2) {
            android.support.v4.media.session.b.a(list);
            if (z10) {
                this.f14134a.o(i10, 2);
                throw null;
            }
            throw null;
        }
        int i11 = 0;
        if (z10) {
            this.f14134a.o(i10, 2);
            int i12 = 0;
            for (int i13 = 0; i13 < list.size(); i13++) {
                i12 += z0.x(((Long) list.get(i13)).longValue());
            }
            this.f14134a.q(i12);
            while (i11 < list.size()) {
                this.f14134a.s(((Long) list.get(i11)).longValue());
                i11++;
            }
            return;
        }
        while (i11 < list.size()) {
            this.f14134a.r(i10, ((Long) list.get(i11)).longValue());
            i11++;
        }
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void n(int i10, List list, boolean z10) {
        if (list instanceof l2) {
            android.support.v4.media.session.b.a(list);
            if (z10) {
                this.f14134a.o(i10, 2);
                throw null;
            }
            throw null;
        }
        int i11 = 0;
        if (z10) {
            this.f14134a.o(i10, 2);
            int i12 = 0;
            for (int i13 = 0; i13 < list.size(); i13++) {
                ((Long) list.get(i13)).getClass();
                i12 += 8;
            }
            this.f14134a.q(i12);
            while (i11 < list.size()) {
                this.f14134a.j(((Long) list.get(i11)).longValue());
                i11++;
            }
            return;
        }
        while (i11 < list.size()) {
            this.f14134a.i(i10, ((Long) list.get(i11)).longValue());
            i11++;
        }
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void o(int i10, int i11) {
        this.f14134a.g(i10, i11);
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void p(int i10, List list, boolean z10) {
        if (list instanceof l1) {
            android.support.v4.media.session.b.a(list);
            if (z10) {
                this.f14134a.o(i10, 2);
                throw null;
            }
            throw null;
        }
        int i11 = 0;
        if (z10) {
            this.f14134a.o(i10, 2);
            int i12 = 0;
            for (int i13 = 0; i13 < list.size(); i13++) {
                ((Float) list.get(i13)).getClass();
                i12 += 4;
            }
            this.f14134a.q(i12);
            while (i11 < list.size()) {
                this.f14134a.h(Float.floatToRawIntBits(((Float) list.get(i11)).floatValue()));
                i11++;
            }
            return;
        }
        while (i11 < list.size()) {
            this.f14134a.g(i10, Float.floatToRawIntBits(((Float) list.get(i11)).floatValue()));
            i11++;
        }
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void q(int i10, int i11) {
        this.f14134a.p(i10, (i11 >> 31) ^ (i11 + i11));
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void r(int i10) {
        this.f14134a.o(i10, 4);
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void s(int i10) {
        this.f14134a.o(i10, 3);
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void t(int i10, int i11) {
        this.f14134a.p(i10, i11);
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void u(int i10, List list, boolean z10) {
        int i11 = 0;
        if (list instanceof r1) {
            r1 r1Var = (r1) list;
            if (z10) {
                this.f14134a.o(i10, 2);
                int i12 = 0;
                for (int i13 = 0; i13 < r1Var.size(); i13++) {
                    r1Var.c(i13);
                    i12 += 4;
                }
                this.f14134a.q(i12);
                while (i11 < r1Var.size()) {
                    this.f14134a.h(r1Var.c(i11));
                    i11++;
                }
                return;
            }
            while (i11 < r1Var.size()) {
                this.f14134a.g(i10, r1Var.c(i11));
                i11++;
            }
        } else if (z10) {
            this.f14134a.o(i10, 2);
            int i14 = 0;
            for (int i15 = 0; i15 < list.size(); i15++) {
                ((Integer) list.get(i15)).getClass();
                i14 += 4;
            }
            this.f14134a.q(i14);
            while (i11 < list.size()) {
                this.f14134a.h(((Integer) list.get(i11)).intValue());
                i11++;
            }
        } else {
            while (i11 < list.size()) {
                this.f14134a.g(i10, ((Integer) list.get(i11)).intValue());
                i11++;
            }
        }
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void v(int i10, int i11) {
        this.f14134a.g(i10, i11);
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void w(int i10, List list, boolean z10) {
        int i11 = 0;
        if (list instanceof r1) {
            r1 r1Var = (r1) list;
            if (z10) {
                this.f14134a.o(i10, 2);
                int i12 = 0;
                for (int i13 = 0; i13 < r1Var.size(); i13++) {
                    i12 += z0.w(r1Var.c(i13));
                }
                this.f14134a.q(i12);
                while (i11 < r1Var.size()) {
                    this.f14134a.q(r1Var.c(i11));
                    i11++;
                }
                return;
            }
            while (i11 < r1Var.size()) {
                this.f14134a.p(i10, r1Var.c(i11));
                i11++;
            }
        } else if (z10) {
            this.f14134a.o(i10, 2);
            int i14 = 0;
            for (int i15 = 0; i15 < list.size(); i15++) {
                i14 += z0.w(((Integer) list.get(i15)).intValue());
            }
            this.f14134a.q(i14);
            while (i11 < list.size()) {
                this.f14134a.q(((Integer) list.get(i11)).intValue());
                i11++;
            }
        } else {
            while (i11 < list.size()) {
                this.f14134a.p(i10, ((Integer) list.get(i11)).intValue());
                i11++;
            }
        }
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void x(int i10, List list, boolean z10) {
        int i11 = 0;
        if (list instanceof r1) {
            r1 r1Var = (r1) list;
            if (z10) {
                this.f14134a.o(i10, 2);
                int i12 = 0;
                for (int i13 = 0; i13 < r1Var.size(); i13++) {
                    r1Var.c(i13);
                    i12 += 4;
                }
                this.f14134a.q(i12);
                while (i11 < r1Var.size()) {
                    this.f14134a.h(r1Var.c(i11));
                    i11++;
                }
                return;
            }
            while (i11 < r1Var.size()) {
                this.f14134a.g(i10, r1Var.c(i11));
                i11++;
            }
        } else if (z10) {
            this.f14134a.o(i10, 2);
            int i14 = 0;
            for (int i15 = 0; i15 < list.size(); i15++) {
                ((Integer) list.get(i15)).getClass();
                i14 += 4;
            }
            this.f14134a.q(i14);
            while (i11 < list.size()) {
                this.f14134a.h(((Integer) list.get(i11)).intValue());
                i11++;
            }
        } else {
            while (i11 < list.size()) {
                this.f14134a.g(i10, ((Integer) list.get(i11)).intValue());
                i11++;
            }
        }
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void y(int i10, long j10) {
        this.f14134a.i(i10, j10);
    }

    @Override // com.google.android.gms.internal.play_billing.o4
    public final void z(int i10, int i11) {
        this.f14134a.k(i10, i11);
    }
}
