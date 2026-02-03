package com.google.android.exoplayer2;

import com.google.android.exoplayer2.w1;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f implements v1, w1 {

    /* renamed from: e  reason: collision with root package name */
    private final int f12105e;

    /* renamed from: o  reason: collision with root package name */
    private lc.r0 f12107o;

    /* renamed from: p  reason: collision with root package name */
    private int f12108p;

    /* renamed from: q  reason: collision with root package name */
    private mc.t1 f12109q;

    /* renamed from: r  reason: collision with root package name */
    private int f12110r;

    /* renamed from: s  reason: collision with root package name */
    private qd.m0 f12111s;

    /* renamed from: t  reason: collision with root package name */
    private Format[] f12112t;

    /* renamed from: u  reason: collision with root package name */
    private long f12113u;

    /* renamed from: v  reason: collision with root package name */
    private long f12114v;

    /* renamed from: x  reason: collision with root package name */
    private boolean f12116x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f12117y;

    /* renamed from: z  reason: collision with root package name */
    private w1.a f12118z;

    /* renamed from: d  reason: collision with root package name */
    private final Object f12104d = new Object();

    /* renamed from: i  reason: collision with root package name */
    private final lc.x f12106i = new lc.x();

    /* renamed from: w  reason: collision with root package name */
    private long f12115w = Long.MIN_VALUE;

    public f(int i10) {
        this.f12105e = i10;
    }

    private void Y(long j10, boolean z10) {
        this.f12116x = false;
        this.f12114v = j10;
        this.f12115w = j10;
        Q(j10, z10);
    }

    @Override // com.google.android.exoplayer2.v1
    public final void A(lc.r0 r0Var, Format[] formatArr, qd.m0 m0Var, long j10, boolean z10, boolean z11, long j11, long j12) {
        boolean z12;
        if (this.f12110r == 0) {
            z12 = true;
        } else {
            z12 = false;
        }
        ne.a.g(z12);
        this.f12107o = r0Var;
        this.f12110r = 1;
        P(z10, z11);
        s(formatArr, m0Var, j11, j12);
        Y(j10, z10);
    }

    @Override // com.google.android.exoplayer2.v1
    public final long B() {
        return this.f12115w;
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
        synchronized (this.f12104d) {
            this.f12118z = aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final j G(Throwable th2, Format format, int i10) {
        return H(th2, format, false, i10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final j H(Throwable th2, Format format, boolean z10, int i10) {
        int i11;
        if (format != null && !this.f12117y) {
            this.f12117y = true;
            try {
                i11 = w1.F(a(format));
            } catch (j unused) {
            } finally {
                this.f12117y = false;
            }
            return j.f(th2, getName(), K(), format, i11, z10, i10);
        }
        i11 = 4;
        return j.f(th2, getName(), K(), format, i11, z10, i10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final lc.r0 I() {
        return (lc.r0) ne.a.e(this.f12107o);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final lc.x J() {
        this.f12106i.a();
        return this.f12106i;
    }

    protected final int K() {
        return this.f12108p;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final mc.t1 L() {
        return (mc.t1) ne.a.e(this.f12109q);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Format[] M() {
        return (Format[]) ne.a.e(this.f12112t);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean N() {
        if (h()) {
            return this.f12116x;
        }
        return ((qd.m0) ne.a.e(this.f12111s)).isReady();
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
        synchronized (this.f12104d) {
            aVar = this.f12118z;
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
        int c10 = ((qd.m0) ne.a.e(this.f12111s)).c(xVar, fVar, i10);
        if (c10 == -4) {
            if (fVar.o()) {
                this.f12115w = Long.MIN_VALUE;
                if (this.f12116x) {
                    return -4;
                }
                return -3;
            }
            long j10 = fVar.f47499p + this.f12113u;
            fVar.f47499p = j10;
            this.f12115w = Math.max(this.f12115w, j10);
            return c10;
        }
        if (c10 == -5) {
            Format format = (Format) ne.a.e(xVar.f36709b);
            if (format.A != LongCompanionObject.MAX_VALUE) {
                xVar.f36709b = format.b().k0(format.A + this.f12113u).G();
            }
        }
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int Z(long j10) {
        return ((qd.m0) ne.a.e(this.f12111s)).q(j10 - this.f12113u);
    }

    @Override // com.google.android.exoplayer2.v1
    public final void disable() {
        boolean z10 = true;
        if (this.f12110r != 1) {
            z10 = false;
        }
        ne.a.g(z10);
        this.f12106i.a();
        this.f12110r = 0;
        this.f12111s = null;
        this.f12112t = null;
        this.f12116x = false;
        O();
    }

    @Override // com.google.android.exoplayer2.v1, com.google.android.exoplayer2.w1
    public final int e() {
        return this.f12105e;
    }

    @Override // com.google.android.exoplayer2.w1
    public final void g() {
        synchronized (this.f12104d) {
            this.f12118z = null;
        }
    }

    @Override // com.google.android.exoplayer2.v1
    public final int getState() {
        return this.f12110r;
    }

    @Override // com.google.android.exoplayer2.v1
    public final boolean h() {
        if (this.f12115w == Long.MIN_VALUE) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.v1
    public final void j() {
        this.f12116x = true;
    }

    @Override // com.google.android.exoplayer2.s1.b
    public void n(int i10, Object obj) {
    }

    @Override // com.google.android.exoplayer2.v1
    public final void o() {
        ((qd.m0) ne.a.e(this.f12111s)).a();
    }

    @Override // com.google.android.exoplayer2.v1
    public final boolean p() {
        return this.f12116x;
    }

    @Override // com.google.android.exoplayer2.v1
    public final void q(int i10, mc.t1 t1Var) {
        this.f12108p = i10;
        this.f12109q = t1Var;
    }

    @Override // com.google.android.exoplayer2.v1
    public final void release() {
        boolean z10;
        if (this.f12110r == 0) {
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
        if (this.f12110r == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        this.f12106i.a();
        T();
    }

    @Override // com.google.android.exoplayer2.v1
    public final void s(Format[] formatArr, qd.m0 m0Var, long j10, long j11) {
        ne.a.g(!this.f12116x);
        this.f12111s = m0Var;
        if (this.f12115w == Long.MIN_VALUE) {
            this.f12115w = j10;
        }
        this.f12112t = formatArr;
        this.f12113u = j11;
        W(formatArr, j10, j11);
    }

    @Override // com.google.android.exoplayer2.v1
    public final void start() {
        boolean z10 = true;
        if (this.f12110r != 1) {
            z10 = false;
        }
        ne.a.g(z10);
        this.f12110r = 2;
        U();
    }

    @Override // com.google.android.exoplayer2.v1
    public final void stop() {
        boolean z10;
        if (this.f12110r == 2) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        this.f12110r = 1;
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
        return this.f12111s;
    }
}
