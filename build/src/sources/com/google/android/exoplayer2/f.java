package com.google.android.exoplayer2;

import com.google.android.exoplayer2.w1;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f implements v1, w1 {

    /* renamed from: e  reason: collision with root package name */
    private final int f13508e;

    /* renamed from: o  reason: collision with root package name */
    private lc.r0 f13510o;

    /* renamed from: p  reason: collision with root package name */
    private int f13511p;

    /* renamed from: q  reason: collision with root package name */
    private mc.t1 f13512q;

    /* renamed from: r  reason: collision with root package name */
    private int f13513r;

    /* renamed from: s  reason: collision with root package name */
    private qd.m0 f13514s;

    /* renamed from: t  reason: collision with root package name */
    private Format[] f13515t;

    /* renamed from: u  reason: collision with root package name */
    private long f13516u;

    /* renamed from: v  reason: collision with root package name */
    private long f13517v;

    /* renamed from: x  reason: collision with root package name */
    private boolean f13519x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f13520y;

    /* renamed from: z  reason: collision with root package name */
    private w1.a f13521z;

    /* renamed from: d  reason: collision with root package name */
    private final Object f13507d = new Object();

    /* renamed from: i  reason: collision with root package name */
    private final lc.x f13509i = new lc.x();

    /* renamed from: w  reason: collision with root package name */
    private long f13518w = Long.MIN_VALUE;

    public f(int i10) {
        this.f13508e = i10;
    }

    private void Y(long j10, boolean z10) {
        this.f13519x = false;
        this.f13517v = j10;
        this.f13518w = j10;
        Q(j10, z10);
    }

    @Override // com.google.android.exoplayer2.v1
    public final void A(lc.r0 r0Var, Format[] formatArr, qd.m0 m0Var, long j10, boolean z10, boolean z11, long j11, long j12) {
        boolean z12;
        if (this.f13513r == 0) {
            z12 = true;
        } else {
            z12 = false;
        }
        ne.a.g(z12);
        this.f13510o = r0Var;
        this.f13513r = 1;
        P(z10, z11);
        s(formatArr, m0Var, j11, j12);
        Y(j10, z10);
    }

    @Override // com.google.android.exoplayer2.v1
    public final long B() {
        return this.f13518w;
    }

    @Override // com.google.android.exoplayer2.v1
    public final void C(long j10) {
        Y(j10, false);
    }

    @Override // com.google.android.exoplayer2.v1
    public ne.a0 D() {
        return null;
    }

    @Override // com.google.android.exoplayer2.w1
    public final void E(w1.a aVar) {
        synchronized (this.f13507d) {
            this.f13521z = aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final j G(Throwable th2, Format format, int i10) {
        return H(th2, format, false, i10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final j H(Throwable th2, Format format, boolean z10, int i10) {
        int i11;
        if (format != null && !this.f13520y) {
            this.f13520y = true;
            try {
                i11 = w1.F(a(format));
            } catch (j unused) {
            } finally {
                this.f13520y = false;
            }
            return j.f(th2, getName(), K(), format, i11, z10, i10);
        }
        i11 = 4;
        return j.f(th2, getName(), K(), format, i11, z10, i10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final lc.r0 I() {
        return (lc.r0) ne.a.e(this.f13510o);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final lc.x J() {
        this.f13509i.a();
        return this.f13509i;
    }

    protected final int K() {
        return this.f13511p;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final mc.t1 L() {
        return (mc.t1) ne.a.e(this.f13512q);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Format[] M() {
        return (Format[]) ne.a.e(this.f13515t);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean N() {
        if (h()) {
            return this.f13519x;
        }
        return ((qd.m0) ne.a.e(this.f13514s)).isReady();
    }

    protected abstract void O();

    protected void P(boolean z10, boolean z11) {
    }

    protected abstract void Q(long j10, boolean z10);

    protected void R() {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void S() {
        w1.a aVar;
        synchronized (this.f13507d) {
            aVar = this.f13521z;
        }
        if (aVar != null) {
            aVar.a(this);
        }
    }

    protected void T() {
    }

    protected void U() {
    }

    protected void V() {
    }

    protected abstract void W(Format[] formatArr, long j10, long j11);

    /* JADX INFO: Access modifiers changed from: protected */
    public final int X(lc.x xVar, qc.f fVar, int i10) {
        int c10 = ((qd.m0) ne.a.e(this.f13514s)).c(xVar, fVar, i10);
        if (c10 == -4) {
            if (fVar.o()) {
                this.f13518w = Long.MIN_VALUE;
                if (this.f13519x) {
                    return -4;
                }
                return -3;
            }
            long j10 = fVar.f47094p + this.f13516u;
            fVar.f47094p = j10;
            this.f13518w = Math.max(this.f13518w, j10);
            return c10;
        }
        if (c10 == -5) {
            Format format = (Format) ne.a.e(xVar.f37126b);
            if (format.A != LongCompanionObject.MAX_VALUE) {
                xVar.f37126b = format.b().k0(format.A + this.f13516u).G();
            }
        }
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int Z(long j10) {
        return ((qd.m0) ne.a.e(this.f13514s)).q(j10 - this.f13516u);
    }

    @Override // com.google.android.exoplayer2.v1
    public final void disable() {
        boolean z10 = true;
        if (this.f13513r != 1) {
            z10 = false;
        }
        ne.a.g(z10);
        this.f13509i.a();
        this.f13513r = 0;
        this.f13514s = null;
        this.f13515t = null;
        this.f13519x = false;
        O();
    }

    @Override // com.google.android.exoplayer2.v1, com.google.android.exoplayer2.w1
    public final int e() {
        return this.f13508e;
    }

    @Override // com.google.android.exoplayer2.w1
    public final void g() {
        synchronized (this.f13507d) {
            this.f13521z = null;
        }
    }

    @Override // com.google.android.exoplayer2.v1
    public final int getState() {
        return this.f13513r;
    }

    @Override // com.google.android.exoplayer2.v1
    public final boolean h() {
        if (this.f13518w == Long.MIN_VALUE) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.v1
    public final void j() {
        this.f13519x = true;
    }

    @Override // com.google.android.exoplayer2.s1.b
    public void n(int i10, Object obj) {
    }

    @Override // com.google.android.exoplayer2.v1
    public final void o() {
        ((qd.m0) ne.a.e(this.f13514s)).a();
    }

    @Override // com.google.android.exoplayer2.v1
    public final boolean p() {
        return this.f13519x;
    }

    @Override // com.google.android.exoplayer2.v1
    public final void q(int i10, mc.t1 t1Var) {
        this.f13511p = i10;
        this.f13512q = t1Var;
    }

    @Override // com.google.android.exoplayer2.v1
    public final void release() {
        boolean z10;
        if (this.f13513r == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        R();
    }

    @Override // com.google.android.exoplayer2.v1
    public final void reset() {
        boolean z10;
        if (this.f13513r == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        this.f13509i.a();
        T();
    }

    @Override // com.google.android.exoplayer2.v1
    public final void s(Format[] formatArr, qd.m0 m0Var, long j10, long j11) {
        ne.a.g(!this.f13519x);
        this.f13514s = m0Var;
        if (this.f13518w == Long.MIN_VALUE) {
            this.f13518w = j10;
        }
        this.f13515t = formatArr;
        this.f13516u = j11;
        W(formatArr, j10, j11);
    }

    @Override // com.google.android.exoplayer2.v1
    public final void start() {
        boolean z10 = true;
        if (this.f13513r != 1) {
            z10 = false;
        }
        ne.a.g(z10);
        this.f13513r = 2;
        U();
    }

    @Override // com.google.android.exoplayer2.v1
    public final void stop() {
        boolean z10;
        if (this.f13513r == 2) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        this.f13513r = 1;
        V();
    }

    @Override // com.google.android.exoplayer2.v1
    public final w1 t() {
        return this;
    }

    @Override // com.google.android.exoplayer2.w1
    public int x() {
        return 0;
    }

    @Override // com.google.android.exoplayer2.v1
    public final qd.m0 z() {
        return this.f13514s;
    }
}
