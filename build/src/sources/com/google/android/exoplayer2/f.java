package com.google.android.exoplayer2;

import com.google.android.exoplayer2.w1;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f implements v1, w1 {

    /* renamed from: e  reason: collision with root package name */
    private final int f13168e;

    /* renamed from: o  reason: collision with root package name */
    private mc.r0 f13170o;

    /* renamed from: p  reason: collision with root package name */
    private int f13171p;

    /* renamed from: q  reason: collision with root package name */
    private nc.t1 f13172q;

    /* renamed from: r  reason: collision with root package name */
    private int f13173r;

    /* renamed from: s  reason: collision with root package name */
    private rd.m0 f13174s;

    /* renamed from: t  reason: collision with root package name */
    private Format[] f13175t;

    /* renamed from: u  reason: collision with root package name */
    private long f13176u;

    /* renamed from: v  reason: collision with root package name */
    private long f13177v;

    /* renamed from: x  reason: collision with root package name */
    private boolean f13179x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f13180y;

    /* renamed from: z  reason: collision with root package name */
    private w1.a f13181z;

    /* renamed from: d  reason: collision with root package name */
    private final Object f13167d = new Object();

    /* renamed from: i  reason: collision with root package name */
    private final mc.x f13169i = new mc.x();

    /* renamed from: w  reason: collision with root package name */
    private long f13178w = Long.MIN_VALUE;

    public f(int i10) {
        this.f13168e = i10;
    }

    private void Y(long j10, boolean z10) {
        this.f13179x = false;
        this.f13177v = j10;
        this.f13178w = j10;
        Q(j10, z10);
    }

    @Override // com.google.android.exoplayer2.v1
    public final long A() {
        return this.f13178w;
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
        synchronized (this.f13167d) {
            this.f13181z = aVar;
        }
    }

    @Override // com.google.android.exoplayer2.v1
    public final void E(mc.r0 r0Var, Format[] formatArr, rd.m0 m0Var, long j10, boolean z10, boolean z11, long j11, long j12) {
        boolean z12;
        if (this.f13173r == 0) {
            z12 = true;
        } else {
            z12 = false;
        }
        oe.a.g(z12);
        this.f13170o = r0Var;
        this.f13173r = 1;
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
        if (format != null && !this.f13180y) {
            this.f13180y = true;
            try {
                i11 = w1.F(a(format));
            } catch (j unused) {
            } finally {
                this.f13180y = false;
            }
            return j.f(th2, getName(), K(), format, i11, z10, i10);
        }
        i11 = 4;
        return j.f(th2, getName(), K(), format, i11, z10, i10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final mc.r0 I() {
        return (mc.r0) oe.a.e(this.f13170o);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final mc.x J() {
        this.f13169i.a();
        return this.f13169i;
    }

    protected final int K() {
        return this.f13171p;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final nc.t1 L() {
        return (nc.t1) oe.a.e(this.f13172q);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Format[] M() {
        return (Format[]) oe.a.e(this.f13175t);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean N() {
        if (h()) {
            return this.f13179x;
        }
        return ((rd.m0) oe.a.e(this.f13174s)).isReady();
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
        synchronized (this.f13167d) {
            aVar = this.f13181z;
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
        int c10 = ((rd.m0) oe.a.e(this.f13174s)).c(xVar, fVar, i10);
        if (c10 == -4) {
            if (fVar.n()) {
                this.f13178w = Long.MIN_VALUE;
                if (this.f13179x) {
                    return -4;
                }
                return -3;
            }
            long j10 = fVar.f46231p + this.f13176u;
            fVar.f46231p = j10;
            this.f13178w = Math.max(this.f13178w, j10);
            return c10;
        }
        if (c10 == -5) {
            Format format = (Format) oe.a.e(xVar.f36282b);
            if (format.A != LongCompanionObject.MAX_VALUE) {
                xVar.f36282b = format.b().k0(format.A + this.f13176u).G();
            }
        }
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int Z(long j10) {
        return ((rd.m0) oe.a.e(this.f13174s)).j(j10 - this.f13176u);
    }

    @Override // com.google.android.exoplayer2.v1
    public final void disable() {
        boolean z10 = true;
        if (this.f13173r != 1) {
            z10 = false;
        }
        oe.a.g(z10);
        this.f13169i.a();
        this.f13173r = 0;
        this.f13174s = null;
        this.f13175t = null;
        this.f13179x = false;
        O();
    }

    @Override // com.google.android.exoplayer2.v1, com.google.android.exoplayer2.w1
    public final int e() {
        return this.f13168e;
    }

    @Override // com.google.android.exoplayer2.w1
    public final void g() {
        synchronized (this.f13167d) {
            this.f13181z = null;
        }
    }

    @Override // com.google.android.exoplayer2.v1
    public final int getState() {
        return this.f13173r;
    }

    @Override // com.google.android.exoplayer2.v1
    public final boolean h() {
        if (this.f13178w == Long.MIN_VALUE) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.v1
    public final void j(Format[] formatArr, rd.m0 m0Var, long j10, long j11) {
        oe.a.g(!this.f13179x);
        this.f13174s = m0Var;
        if (this.f13178w == Long.MIN_VALUE) {
            this.f13178w = j10;
        }
        this.f13175t = formatArr;
        this.f13176u = j11;
        W(formatArr, j10, j11);
    }

    @Override // com.google.android.exoplayer2.v1
    public final void k() {
        this.f13179x = true;
    }

    @Override // com.google.android.exoplayer2.s1.b
    public void o(int i10, Object obj) {
    }

    @Override // com.google.android.exoplayer2.v1
    public final void p(int i10, nc.t1 t1Var) {
        this.f13171p = i10;
        this.f13172q = t1Var;
    }

    @Override // com.google.android.exoplayer2.v1
    public final void q() {
        ((rd.m0) oe.a.e(this.f13174s)).a();
    }

    @Override // com.google.android.exoplayer2.v1
    public final boolean r() {
        return this.f13179x;
    }

    @Override // com.google.android.exoplayer2.v1
    public final void release() {
        boolean z10;
        if (this.f13173r == 0) {
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
        if (this.f13173r == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        this.f13169i.a();
        T();
    }

    @Override // com.google.android.exoplayer2.v1
    public final void start() {
        boolean z10 = true;
        if (this.f13173r != 1) {
            z10 = false;
        }
        oe.a.g(z10);
        this.f13173r = 2;
        U();
    }

    @Override // com.google.android.exoplayer2.v1
    public final void stop() {
        boolean z10;
        if (this.f13173r == 2) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        this.f13173r = 1;
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
        return this.f13174s;
    }
}
