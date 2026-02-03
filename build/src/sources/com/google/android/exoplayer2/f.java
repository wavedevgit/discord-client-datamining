package com.google.android.exoplayer2;

import com.google.android.exoplayer2.w1;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f implements v1, w1 {

    /* renamed from: e  reason: collision with root package name */
    private final int f13137e;

    /* renamed from: o  reason: collision with root package name */
    private lc.r0 f13139o;

    /* renamed from: p  reason: collision with root package name */
    private int f13140p;

    /* renamed from: q  reason: collision with root package name */
    private mc.t1 f13141q;

    /* renamed from: r  reason: collision with root package name */
    private int f13142r;

    /* renamed from: s  reason: collision with root package name */
    private qd.m0 f13143s;

    /* renamed from: t  reason: collision with root package name */
    private Format[] f13144t;

    /* renamed from: u  reason: collision with root package name */
    private long f13145u;

    /* renamed from: v  reason: collision with root package name */
    private long f13146v;

    /* renamed from: x  reason: collision with root package name */
    private boolean f13148x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f13149y;

    /* renamed from: z  reason: collision with root package name */
    private w1.a f13150z;

    /* renamed from: d  reason: collision with root package name */
    private final Object f13136d = new Object();

    /* renamed from: i  reason: collision with root package name */
    private final lc.x f13138i = new lc.x();

    /* renamed from: w  reason: collision with root package name */
    private long f13147w = Long.MIN_VALUE;

    public f(int i10) {
        this.f13137e = i10;
    }

    private void Y(long j10, boolean z10) {
        this.f13148x = false;
        this.f13146v = j10;
        this.f13147w = j10;
        Q(j10, z10);
    }

    @Override // com.google.android.exoplayer2.v1
    public final void A(lc.r0 r0Var, Format[] formatArr, qd.m0 m0Var, long j10, boolean z10, boolean z11, long j11, long j12) {
        boolean z12;
        if (this.f13142r == 0) {
            z12 = true;
        } else {
            z12 = false;
        }
        ne.a.g(z12);
        this.f13139o = r0Var;
        this.f13142r = 1;
        P(z10, z11);
        s(formatArr, m0Var, j11, j12);
        Y(j10, z10);
    }

    @Override // com.google.android.exoplayer2.v1
    public final long B() {
        return this.f13147w;
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
        synchronized (this.f13136d) {
            this.f13150z = aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final j G(Throwable th2, Format format, int i10) {
        return H(th2, format, false, i10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final j H(Throwable th2, Format format, boolean z10, int i10) {
        int i11;
        if (format != null && !this.f13149y) {
            this.f13149y = true;
            try {
                i11 = w1.F(a(format));
            } catch (j unused) {
            } finally {
                this.f13149y = false;
            }
            return j.f(th2, getName(), K(), format, i11, z10, i10);
        }
        i11 = 4;
        return j.f(th2, getName(), K(), format, i11, z10, i10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final lc.r0 I() {
        return (lc.r0) ne.a.e(this.f13139o);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final lc.x J() {
        this.f13138i.a();
        return this.f13138i;
    }

    protected final int K() {
        return this.f13140p;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final mc.t1 L() {
        return (mc.t1) ne.a.e(this.f13141q);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Format[] M() {
        return (Format[]) ne.a.e(this.f13144t);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean N() {
        if (h()) {
            return this.f13148x;
        }
        return ((qd.m0) ne.a.e(this.f13143s)).isReady();
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
        synchronized (this.f13136d) {
            aVar = this.f13150z;
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
        int c10 = ((qd.m0) ne.a.e(this.f13143s)).c(xVar, fVar, i10);
        if (c10 == -4) {
            if (fVar.o()) {
                this.f13147w = Long.MIN_VALUE;
                if (this.f13148x) {
                    return -4;
                }
                return -3;
            }
            long j10 = fVar.f47349p + this.f13145u;
            fVar.f47349p = j10;
            this.f13147w = Math.max(this.f13147w, j10);
            return c10;
        }
        if (c10 == -5) {
            Format format = (Format) ne.a.e(xVar.f37240b);
            if (format.A != LongCompanionObject.MAX_VALUE) {
                xVar.f37240b = format.b().k0(format.A + this.f13145u).G();
            }
        }
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int Z(long j10) {
        return ((qd.m0) ne.a.e(this.f13143s)).q(j10 - this.f13145u);
    }

    @Override // com.google.android.exoplayer2.v1
    public final void disable() {
        boolean z10 = true;
        if (this.f13142r != 1) {
            z10 = false;
        }
        ne.a.g(z10);
        this.f13138i.a();
        this.f13142r = 0;
        this.f13143s = null;
        this.f13144t = null;
        this.f13148x = false;
        O();
    }

    @Override // com.google.android.exoplayer2.v1, com.google.android.exoplayer2.w1
    public final int e() {
        return this.f13137e;
    }

    @Override // com.google.android.exoplayer2.w1
    public final void g() {
        synchronized (this.f13136d) {
            this.f13150z = null;
        }
    }

    @Override // com.google.android.exoplayer2.v1
    public final int getState() {
        return this.f13142r;
    }

    @Override // com.google.android.exoplayer2.v1
    public final boolean h() {
        if (this.f13147w == Long.MIN_VALUE) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.v1
    public final void j() {
        this.f13148x = true;
    }

    @Override // com.google.android.exoplayer2.s1.b
    public void n(int i10, Object obj) {
    }

    @Override // com.google.android.exoplayer2.v1
    public final void o() {
        ((qd.m0) ne.a.e(this.f13143s)).a();
    }

    @Override // com.google.android.exoplayer2.v1
    public final boolean p() {
        return this.f13148x;
    }

    @Override // com.google.android.exoplayer2.v1
    public final void q(int i10, mc.t1 t1Var) {
        this.f13140p = i10;
        this.f13141q = t1Var;
    }

    @Override // com.google.android.exoplayer2.v1
    public final void release() {
        boolean z10;
        if (this.f13142r == 0) {
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
        if (this.f13142r == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        this.f13138i.a();
        T();
    }

    @Override // com.google.android.exoplayer2.v1
    public final void s(Format[] formatArr, qd.m0 m0Var, long j10, long j11) {
        ne.a.g(!this.f13148x);
        this.f13143s = m0Var;
        if (this.f13147w == Long.MIN_VALUE) {
            this.f13147w = j10;
        }
        this.f13144t = formatArr;
        this.f13145u = j11;
        W(formatArr, j10, j11);
    }

    @Override // com.google.android.exoplayer2.v1
    public final void start() {
        boolean z10 = true;
        if (this.f13142r != 1) {
            z10 = false;
        }
        ne.a.g(z10);
        this.f13142r = 2;
        U();
    }

    @Override // com.google.android.exoplayer2.v1
    public final void stop() {
        boolean z10;
        if (this.f13142r == 2) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        this.f13142r = 1;
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
        return this.f13143s;
    }
}
