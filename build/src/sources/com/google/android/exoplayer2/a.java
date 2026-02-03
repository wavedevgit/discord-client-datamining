package com.google.android.exoplayer2;

import android.util.Pair;
import com.google.android.exoplayer2.Timeline;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a extends Timeline {

    /* renamed from: q  reason: collision with root package name */
    private final int f11631q;

    /* renamed from: r  reason: collision with root package name */
    private final qd.o0 f11632r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f11633s;

    public a(boolean z10, qd.o0 o0Var) {
        this.f11633s = z10;
        this.f11632r = o0Var;
        this.f11631q = o0Var.getLength();
    }

    public static Object A(Object obj) {
        return ((Pair) obj).first;
    }

    public static Object C(Object obj, Object obj2) {
        return Pair.create(obj, obj2);
    }

    private int F(int i10, boolean z10) {
        if (z10) {
            return this.f11632r.c(i10);
        }
        if (i10 < this.f11631q - 1) {
            return i10 + 1;
        }
        return -1;
    }

    private int G(int i10, boolean z10) {
        if (z10) {
            return this.f11632r.b(i10);
        }
        if (i10 > 0) {
            return i10 - 1;
        }
        return -1;
    }

    public static Object z(Object obj) {
        return ((Pair) obj).second;
    }

    protected abstract Object B(int i10);

    protected abstract int D(int i10);

    protected abstract int E(int i10);

    protected abstract Timeline H(int i10);

    @Override // com.google.android.exoplayer2.Timeline
    public int e(boolean z10) {
        if (this.f11631q == 0) {
            return -1;
        }
        int i10 = 0;
        if (this.f11633s) {
            z10 = false;
        }
        if (z10) {
            i10 = this.f11632r.f();
        }
        while (H(i10).u()) {
            i10 = F(i10, z10);
            if (i10 == -1) {
                return -1;
            }
        }
        return E(i10) + H(i10).e(z10);
    }

    @Override // com.google.android.exoplayer2.Timeline
    public final int f(Object obj) {
        int f10;
        if (!(obj instanceof Pair)) {
            return -1;
        }
        Object A = A(obj);
        Object z10 = z(obj);
        int w10 = w(A);
        if (w10 == -1 || (f10 = H(w10).f(z10)) == -1) {
            return -1;
        }
        return D(w10) + f10;
    }

    @Override // com.google.android.exoplayer2.Timeline
    public int g(boolean z10) {
        int i10;
        int i11 = this.f11631q;
        if (i11 == 0) {
            return -1;
        }
        if (this.f11633s) {
            z10 = false;
        }
        if (z10) {
            i10 = this.f11632r.d();
        } else {
            i10 = i11 - 1;
        }
        while (H(i10).u()) {
            i10 = G(i10, z10);
            if (i10 == -1) {
                return -1;
            }
        }
        return E(i10) + H(i10).g(z10);
    }

    @Override // com.google.android.exoplayer2.Timeline
    public int i(int i10, int i11, boolean z10) {
        int i12 = 0;
        if (this.f11633s) {
            if (i11 == 1) {
                i11 = 2;
            }
            z10 = false;
        }
        int y10 = y(i10);
        int E = E(y10);
        Timeline H = H(y10);
        int i13 = i10 - E;
        if (i11 != 2) {
            i12 = i11;
        }
        int i14 = H.i(i13, i12, z10);
        if (i14 != -1) {
            return E + i14;
        }
        int F = F(y10, z10);
        while (F != -1 && H(F).u()) {
            F = F(F, z10);
        }
        if (F != -1) {
            return E(F) + H(F).e(z10);
        }
        if (i11 != 2) {
            return -1;
        }
        return e(z10);
    }

    @Override // com.google.android.exoplayer2.Timeline
    public final Timeline.b k(int i10, Timeline.b bVar, boolean z10) {
        int x10 = x(i10);
        int E = E(x10);
        H(x10).k(i10 - D(x10), bVar, z10);
        bVar.f11593i += E;
        if (z10) {
            bVar.f11592e = C(B(x10), ne.a.e(bVar.f11592e));
        }
        return bVar;
    }

    @Override // com.google.android.exoplayer2.Timeline
    public final Timeline.b l(Object obj, Timeline.b bVar) {
        Object A = A(obj);
        Object z10 = z(obj);
        int w10 = w(A);
        int E = E(w10);
        H(w10).l(z10, bVar);
        bVar.f11593i += E;
        bVar.f11592e = obj;
        return bVar;
    }

    @Override // com.google.android.exoplayer2.Timeline
    public int p(int i10, int i11, boolean z10) {
        int i12 = 0;
        if (this.f11633s) {
            if (i11 == 1) {
                i11 = 2;
            }
            z10 = false;
        }
        int y10 = y(i10);
        int E = E(y10);
        Timeline H = H(y10);
        int i13 = i10 - E;
        if (i11 != 2) {
            i12 = i11;
        }
        int p10 = H.p(i13, i12, z10);
        if (p10 != -1) {
            return E + p10;
        }
        int G = G(y10, z10);
        while (G != -1 && H(G).u()) {
            G = G(G, z10);
        }
        if (G != -1) {
            return E(G) + H(G).g(z10);
        }
        if (i11 != 2) {
            return -1;
        }
        return g(z10);
    }

    @Override // com.google.android.exoplayer2.Timeline
    public final Object q(int i10) {
        int x10 = x(i10);
        return C(B(x10), H(x10).q(i10 - D(x10)));
    }

    @Override // com.google.android.exoplayer2.Timeline
    public final Timeline.d s(int i10, Timeline.d dVar, long j10) {
        int y10 = y(i10);
        int E = E(y10);
        int D = D(y10);
        H(y10).s(i10 - E, dVar, j10);
        Object B = B(y10);
        if (!Timeline.d.C.equals(dVar.f11602d)) {
            B = C(B, dVar.f11602d);
        }
        dVar.f11602d = B;
        dVar.f11616z += D;
        dVar.A += D;
        return dVar;
    }

    protected abstract int w(Object obj);

    protected abstract int x(int i10);

    protected abstract int y(int i10);
}
