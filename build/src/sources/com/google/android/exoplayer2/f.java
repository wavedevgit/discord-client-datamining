package com.google.android.exoplayer2;

import com.google.android.exoplayer2.w1;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f implements v1, w1 {

    /* renamed from: e  reason: collision with root package name */
    private final int f12490e;

    /* renamed from: o  reason: collision with root package name */
    private lc.r0 f12492o;

    /* renamed from: p  reason: collision with root package name */
    private int f12493p;

    /* renamed from: q  reason: collision with root package name */
    private mc.t1 f12494q;

    /* renamed from: r  reason: collision with root package name */
    private int f12495r;

    /* renamed from: s  reason: collision with root package name */
    private qd.m0 f12496s;

    /* renamed from: t  reason: collision with root package name */
    private Format[] f12497t;

    /* renamed from: u  reason: collision with root package name */
    private long f12498u;

    /* renamed from: v  reason: collision with root package name */
    private long f12499v;

    /* renamed from: x  reason: collision with root package name */
    private boolean f12501x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f12502y;

    /* renamed from: z  reason: collision with root package name */
    private w1.a f12503z;

    /* renamed from: d  reason: collision with root package name */
    private final Object f12489d = new Object();

    /* renamed from: i  reason: collision with root package name */
    private final lc.x f12491i = new lc.x();

    /* renamed from: w  reason: collision with root package name */
    private long f12500w = Long.MIN_VALUE;

    public f(int i10) {
        this.f12490e = i10;
    }

    private void Y(long j10, boolean z10) {
        this.f12501x = false;
        this.f12499v = j10;
        this.f12500w = j10;
        Q(j10, z10);
    }

    @Override // com.google.android.exoplayer2.v1
    public final void A(lc.r0 r0Var, Format[] formatArr, qd.m0 m0Var, long j10, boolean z10, boolean z11, long j11, long j12) {
        boolean z12;
        if (this.f12495r == 0) {
            z12 = true;
        } else {
            z12 = false;
        }
        ne.a.g(z12);
        this.f12492o = r0Var;
        this.f12495r = 1;
        P(z10, z11);
        s(formatArr, m0Var, j11, j12);
        Y(j10, z10);
    }

    @Override // com.google.android.exoplayer2.v1
    public final long B() {
        return this.f12500w;
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
        synchronized (this.f12489d) {
            this.f12503z = aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final j G(Throwable th2, Format format, int i10) {
        return H(th2, format, false, i10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final j H(Throwable th2, Format format, boolean z10, int i10) {
        int i11;
        if (format != null && !this.f12502y) {
            this.f12502y = true;
            try {
                i11 = w1.F(a(format));
            } catch (j unused) {
            } finally {
                this.f12502y = false;
            }
            return j.f(th2, getName(), K(), format, i11, z10, i10);
        }
        i11 = 4;
        return j.f(th2, getName(), K(), format, i11, z10, i10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final lc.r0 I() {
        return (lc.r0) ne.a.e(this.f12492o);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final lc.x J() {
        this.f12491i.a();
        return this.f12491i;
    }

    protected final int K() {
        return this.f12493p;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final mc.t1 L() {
        return (mc.t1) ne.a.e(this.f12494q);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Format[] M() {
        return (Format[]) ne.a.e(this.f12497t);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean N() {
        if (h()) {
            return this.f12501x;
        }
        return ((qd.m0) ne.a.e(this.f12496s)).isReady();
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
        synchronized (this.f12489d) {
            aVar = this.f12503z;
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
        int c10 = ((qd.m0) ne.a.e(this.f12496s)).c(xVar, fVar, i10);
        if (c10 == -4) {
            if (fVar.n()) {
                this.f12500w = Long.MIN_VALUE;
                if (this.f12501x) {
                    return -4;
                }
                return -3;
            }
            long j10 = fVar.f47563p + this.f12498u;
            fVar.f47563p = j10;
            this.f12500w = Math.max(this.f12500w, j10);
            return c10;
        }
        if (c10 == -5) {
            Format format = (Format) ne.a.e(xVar.f36636b);
            if (format.A != LongCompanionObject.MAX_VALUE) {
                xVar.f36636b = format.b().k0(format.A + this.f12498u).G();
            }
        }
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int Z(long j10) {
        return ((qd.m0) ne.a.e(this.f12496s)).q(j10 - this.f12498u);
    }

    @Override // com.google.android.exoplayer2.v1
    public final void disable() {
        boolean z10 = true;
        if (this.f12495r != 1) {
            z10 = false;
        }
        ne.a.g(z10);
        this.f12491i.a();
        this.f12495r = 0;
        this.f12496s = null;
        this.f12497t = null;
        this.f12501x = false;
        O();
    }

    @Override // com.google.android.exoplayer2.v1, com.google.android.exoplayer2.w1
    public final int e() {
        return this.f12490e;
    }

    @Override // com.google.android.exoplayer2.w1
    public final void g() {
        synchronized (this.f12489d) {
            this.f12503z = null;
        }
    }

    @Override // com.google.android.exoplayer2.v1
    public final int getState() {
        return this.f12495r;
    }

    @Override // com.google.android.exoplayer2.v1
    public final boolean h() {
        if (this.f12500w == Long.MIN_VALUE) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.v1
    public final void j() {
        this.f12501x = true;
    }

    @Override // com.google.android.exoplayer2.s1.b
    public void n(int i10, Object obj) {
    }

    @Override // com.google.android.exoplayer2.v1
    public final void o() {
        ((qd.m0) ne.a.e(this.f12496s)).a();
    }

    @Override // com.google.android.exoplayer2.v1
    public final boolean p() {
        return this.f12501x;
    }

    @Override // com.google.android.exoplayer2.v1
    public final void q(int i10, mc.t1 t1Var) {
        this.f12493p = i10;
        this.f12494q = t1Var;
    }

    @Override // com.google.android.exoplayer2.v1
    public final void release() {
        boolean z10;
        if (this.f12495r == 0) {
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
        if (this.f12495r == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        this.f12491i.a();
        T();
    }

    @Override // com.google.android.exoplayer2.v1
    public final void s(Format[] formatArr, qd.m0 m0Var, long j10, long j11) {
        ne.a.g(!this.f12501x);
        this.f12496s = m0Var;
        if (this.f12500w == Long.MIN_VALUE) {
            this.f12500w = j10;
        }
        this.f12497t = formatArr;
        this.f12498u = j11;
        W(formatArr, j10, j11);
    }

    @Override // com.google.android.exoplayer2.v1
    public final void start() {
        boolean z10 = true;
        if (this.f12495r != 1) {
            z10 = false;
        }
        ne.a.g(z10);
        this.f12495r = 2;
        U();
    }

    @Override // com.google.android.exoplayer2.v1
    public final void stop() {
        boolean z10;
        if (this.f12495r == 2) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        this.f12495r = 1;
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
        return this.f12496s;
    }
}
