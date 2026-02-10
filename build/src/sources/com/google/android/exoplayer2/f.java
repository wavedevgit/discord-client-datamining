package com.google.android.exoplayer2;

import com.google.android.exoplayer2.w1;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f implements v1, w1 {

    /* renamed from: e  reason: collision with root package name */
    private final int f12591e;

    /* renamed from: o  reason: collision with root package name */
    private mc.r0 f12593o;

    /* renamed from: p  reason: collision with root package name */
    private int f12594p;

    /* renamed from: q  reason: collision with root package name */
    private nc.t1 f12595q;

    /* renamed from: r  reason: collision with root package name */
    private int f12596r;

    /* renamed from: s  reason: collision with root package name */
    private rd.m0 f12597s;

    /* renamed from: t  reason: collision with root package name */
    private Format[] f12598t;

    /* renamed from: u  reason: collision with root package name */
    private long f12599u;

    /* renamed from: v  reason: collision with root package name */
    private long f12600v;

    /* renamed from: x  reason: collision with root package name */
    private boolean f12602x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f12603y;

    /* renamed from: z  reason: collision with root package name */
    private w1.a f12604z;

    /* renamed from: d  reason: collision with root package name */
    private final Object f12590d = new Object();

    /* renamed from: i  reason: collision with root package name */
    private final mc.x f12592i = new mc.x();

    /* renamed from: w  reason: collision with root package name */
    private long f12601w = Long.MIN_VALUE;

    public f(int i10) {
        this.f12591e = i10;
    }

    private void Y(long j10, boolean z10) {
        this.f12602x = false;
        this.f12600v = j10;
        this.f12601w = j10;
        Q(j10, z10);
    }

    @Override // com.google.android.exoplayer2.v1
    public final long A() {
        return this.f12601w;
    }

    @Override // com.google.android.exoplayer2.v1
    public final void B(long j10) {
        Y(j10, false);
    }

    @Override // com.google.android.exoplayer2.v1
    public oe.a0 C() {
        return null;
    }

    @Override // com.google.android.exoplayer2.w1
    public final void D(w1.a aVar) {
        synchronized (this.f12590d) {
            this.f12604z = aVar;
        }
    }

    @Override // com.google.android.exoplayer2.v1
    public final void E(mc.r0 r0Var, Format[] formatArr, rd.m0 m0Var, long j10, boolean z10, boolean z11, long j11, long j12) {
        boolean z12;
        if (this.f12596r == 0) {
            z12 = true;
        } else {
            z12 = false;
        }
        oe.a.g(z12);
        this.f12593o = r0Var;
        this.f12596r = 1;
        P(z10, z11);
        j(formatArr, m0Var, j11, j12);
        Y(j10, z10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final j G(Throwable th2, Format format, int i10) {
        return H(th2, format, false, i10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final j H(Throwable th2, Format format, boolean z10, int i10) {
        int i11;
        if (format != null && !this.f12603y) {
            this.f12603y = true;
            try {
                i11 = w1.F(a(format));
            } catch (j unused) {
            } finally {
                this.f12603y = false;
            }
            return j.f(th2, getName(), K(), format, i11, z10, i10);
        }
        i11 = 4;
        return j.f(th2, getName(), K(), format, i11, z10, i10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final mc.r0 I() {
        return (mc.r0) oe.a.e(this.f12593o);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final mc.x J() {
        this.f12592i.a();
        return this.f12592i;
    }

    protected final int K() {
        return this.f12594p;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final nc.t1 L() {
        return (nc.t1) oe.a.e(this.f12595q);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Format[] M() {
        return (Format[]) oe.a.e(this.f12598t);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean N() {
        if (h()) {
            return this.f12602x;
        }
        return ((rd.m0) oe.a.e(this.f12597s)).isReady();
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
        synchronized (this.f12590d) {
            aVar = this.f12604z;
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
    public final int X(mc.x xVar, rc.f fVar, int i10) {
        int c10 = ((rd.m0) oe.a.e(this.f12597s)).c(xVar, fVar, i10);
        if (c10 == -4) {
            if (fVar.n()) {
                this.f12601w = Long.MIN_VALUE;
                if (this.f12602x) {
                    return -4;
                }
                return -3;
            }
            long j10 = fVar.f47777p + this.f12599u;
            fVar.f47777p = j10;
            this.f12601w = Math.max(this.f12601w, j10);
            return c10;
        }
        if (c10 == -5) {
            Format format = (Format) oe.a.e(xVar.f36907b);
            if (format.A != LongCompanionObject.MAX_VALUE) {
                xVar.f36907b = format.b().k0(format.A + this.f12599u).G();
            }
        }
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int Z(long j10) {
        return ((rd.m0) oe.a.e(this.f12597s)).j(j10 - this.f12599u);
    }

    @Override // com.google.android.exoplayer2.v1
    public final void disable() {
        boolean z10 = true;
        if (this.f12596r != 1) {
            z10 = false;
        }
        oe.a.g(z10);
        this.f12592i.a();
        this.f12596r = 0;
        this.f12597s = null;
        this.f12598t = null;
        this.f12602x = false;
        O();
    }

    @Override // com.google.android.exoplayer2.v1, com.google.android.exoplayer2.w1
    public final int e() {
        return this.f12591e;
    }

    @Override // com.google.android.exoplayer2.w1
    public final void g() {
        synchronized (this.f12590d) {
            this.f12604z = null;
        }
    }

    @Override // com.google.android.exoplayer2.v1
    public final int getState() {
        return this.f12596r;
    }

    @Override // com.google.android.exoplayer2.v1
    public final boolean h() {
        if (this.f12601w == Long.MIN_VALUE) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.v1
    public final void j(Format[] formatArr, rd.m0 m0Var, long j10, long j11) {
        oe.a.g(!this.f12602x);
        this.f12597s = m0Var;
        if (this.f12601w == Long.MIN_VALUE) {
            this.f12601w = j10;
        }
        this.f12598t = formatArr;
        this.f12599u = j11;
        W(formatArr, j10, j11);
    }

    @Override // com.google.android.exoplayer2.v1
    public final void k() {
        this.f12602x = true;
    }

    @Override // com.google.android.exoplayer2.s1.b
    public void o(int i10, Object obj) {
    }

    @Override // com.google.android.exoplayer2.v1
    public final void p(int i10, nc.t1 t1Var) {
        this.f12594p = i10;
        this.f12595q = t1Var;
    }

    @Override // com.google.android.exoplayer2.v1
    public final void q() {
        ((rd.m0) oe.a.e(this.f12597s)).a();
    }

    @Override // com.google.android.exoplayer2.v1
    public final boolean r() {
        return this.f12602x;
    }

    @Override // com.google.android.exoplayer2.v1
    public final void release() {
        boolean z10;
        if (this.f12596r == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        R();
    }

    @Override // com.google.android.exoplayer2.v1
    public final void reset() {
        boolean z10;
        if (this.f12596r == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        this.f12592i.a();
        T();
    }

    @Override // com.google.android.exoplayer2.v1
    public final void start() {
        boolean z10 = true;
        if (this.f12596r != 1) {
            z10 = false;
        }
        oe.a.g(z10);
        this.f12596r = 2;
        U();
    }

    @Override // com.google.android.exoplayer2.v1
    public final void stop() {
        boolean z10;
        if (this.f12596r == 2) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        this.f12596r = 1;
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
    public final rd.m0 z() {
        return this.f12597s;
    }
}
