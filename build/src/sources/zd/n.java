package zd;

import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.text.CueGroup;
import com.google.android.exoplayer2.w1;
import ji.s;
import kotlin.jvm.internal.LongCompanionObject;
import lc.x;
import ne.c0;
import ne.w0;
import ne.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n extends com.google.android.exoplayer2.f implements Handler.Callback {
    private final Handler A;
    private final m B;
    private final j C;
    private final x D;
    private boolean E;
    private boolean F;
    private boolean G;
    private int H;
    private Format I;
    private h J;
    private k K;
    private l L;
    private l M;
    private int N;
    private long O;
    private long P;
    private long Q;

    public n(m mVar, Looper looper) {
        this(mVar, looper, j.f55629a);
    }

    private void a0() {
        l0(new CueGroup(s.r(), d0(this.Q)));
    }

    private long b0(long j10) {
        int a10 = this.L.a(j10);
        if (a10 != 0 && this.L.f() != 0) {
            if (a10 == -1) {
                l lVar = this.L;
                return lVar.e(lVar.f() - 1);
            }
            return this.L.e(a10 - 1);
        }
        return this.L.f47084e;
    }

    private long c0() {
        if (this.N == -1) {
            return LongCompanionObject.MAX_VALUE;
        }
        ne.a.e(this.L);
        if (this.N >= this.L.f()) {
            return LongCompanionObject.MAX_VALUE;
        }
        return this.L.e(this.N);
    }

    private long d0(long j10) {
        boolean z10;
        boolean z11 = false;
        if (j10 != -9223372036854775807L) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        if (this.P != -9223372036854775807L) {
            z11 = true;
        }
        ne.a.g(z11);
        return j10 - this.P;
    }

    private void e0(i iVar) {
        y.d("TextRenderer", "Subtitle decoding failed. streamFormat=" + this.I, iVar);
        a0();
        j0();
    }

    private void f0() {
        this.G = true;
        this.J = this.C.b((Format) ne.a.e(this.I));
    }

    private void g0(CueGroup cueGroup) {
        this.B.onCues(cueGroup.f13995d);
        this.B.onCues(cueGroup);
    }

    private void h0() {
        this.K = null;
        this.N = -1;
        l lVar = this.L;
        if (lVar != null) {
            lVar.t();
            this.L = null;
        }
        l lVar2 = this.M;
        if (lVar2 != null) {
            lVar2.t();
            this.M = null;
        }
    }

    private void i0() {
        h0();
        ((h) ne.a.e(this.J)).release();
        this.J = null;
        this.H = 0;
    }

    private void j0() {
        i0();
        f0();
    }

    private void l0(CueGroup cueGroup) {
        Handler handler = this.A;
        if (handler != null) {
            handler.obtainMessage(0, cueGroup).sendToTarget();
        } else {
            g0(cueGroup);
        }
    }

    @Override // com.google.android.exoplayer2.f
    protected void O() {
        this.I = null;
        this.O = -9223372036854775807L;
        a0();
        this.P = -9223372036854775807L;
        this.Q = -9223372036854775807L;
        i0();
    }

    @Override // com.google.android.exoplayer2.f
    protected void Q(long j10, boolean z10) {
        this.Q = j10;
        a0();
        this.E = false;
        this.F = false;
        this.O = -9223372036854775807L;
        if (this.H != 0) {
            j0();
            return;
        }
        h0();
        ((h) ne.a.e(this.J)).flush();
    }

    @Override // com.google.android.exoplayer2.f
    protected void W(Format[] formatArr, long j10, long j11) {
        this.P = j11;
        this.I = formatArr[0];
        if (this.J != null) {
            this.H = 1;
        } else {
            f0();
        }
    }

    @Override // com.google.android.exoplayer2.w1
    public int a(Format format) {
        int i10;
        if (this.C.a(format)) {
            if (format.R == 0) {
                i10 = 4;
            } else {
                i10 = 2;
            }
            return w1.b(i10);
        } else if (c0.r(format.f12706w)) {
            return w1.b(1);
        } else {
            return w1.b(0);
        }
    }

    @Override // com.google.android.exoplayer2.v1
    public boolean d() {
        return this.F;
    }

    @Override // com.google.android.exoplayer2.v1, com.google.android.exoplayer2.w1
    public String getName() {
        return "TextRenderer";
    }

    @Override // android.os.Handler.Callback
    public boolean handleMessage(Message message) {
        if (message.what == 0) {
            g0((CueGroup) message.obj);
            return true;
        }
        throw new IllegalStateException();
    }

    @Override // com.google.android.exoplayer2.v1
    public boolean isReady() {
        return true;
    }

    public void k0(long j10) {
        ne.a.g(p());
        this.O = j10;
    }

    @Override // com.google.android.exoplayer2.v1
    public void y(long j10, long j11) {
        boolean z10;
        this.Q = j10;
        if (p()) {
            long j12 = this.O;
            if (j12 != -9223372036854775807L && j10 >= j12) {
                h0();
                this.F = true;
            }
        }
        if (!this.F) {
            if (this.M == null) {
                ((h) ne.a.e(this.J)).a(j10);
                try {
                    this.M = (l) ((h) ne.a.e(this.J)).b();
                } catch (i e10) {
                    e0(e10);
                    return;
                }
            }
            if (getState() == 2) {
                if (this.L != null) {
                    long c02 = c0();
                    z10 = false;
                    while (c02 <= j10) {
                        this.N++;
                        c02 = c0();
                        z10 = true;
                    }
                } else {
                    z10 = false;
                }
                l lVar = this.M;
                if (lVar != null) {
                    if (lVar.o()) {
                        if (!z10 && c0() == LongCompanionObject.MAX_VALUE) {
                            if (this.H == 2) {
                                j0();
                            } else {
                                h0();
                                this.F = true;
                            }
                        }
                    } else if (lVar.f47084e <= j10) {
                        l lVar2 = this.L;
                        if (lVar2 != null) {
                            lVar2.t();
                        }
                        this.N = lVar.a(j10);
                        this.L = lVar;
                        this.M = null;
                        z10 = true;
                    }
                }
                if (z10) {
                    ne.a.e(this.L);
                    l0(new CueGroup(this.L.d(j10), d0(b0(j10))));
                }
                if (this.H != 2) {
                    while (!this.E) {
                        try {
                            k kVar = this.K;
                            if (kVar == null) {
                                kVar = (k) ((h) ne.a.e(this.J)).d();
                                if (kVar != null) {
                                    this.K = kVar;
                                } else {
                                    return;
                                }
                            }
                            if (this.H == 1) {
                                kVar.s(4);
                                ((h) ne.a.e(this.J)).c(kVar);
                                this.K = null;
                                this.H = 2;
                                return;
                            }
                            int X = X(this.D, kVar, 0);
                            if (X == -4) {
                                if (kVar.o()) {
                                    this.E = true;
                                    this.G = false;
                                } else {
                                    Format format = this.D.f37110b;
                                    if (format != null) {
                                        kVar.f55630t = format.A;
                                        kVar.v();
                                        this.G &= !kVar.q();
                                    } else {
                                        return;
                                    }
                                }
                                if (!this.G) {
                                    ((h) ne.a.e(this.J)).c(kVar);
                                    this.K = null;
                                }
                            } else if (X == -3) {
                                return;
                            }
                        } catch (i e11) {
                            e0(e11);
                            return;
                        }
                    }
                }
            }
        }
    }

    public n(m mVar, Looper looper, j jVar) {
        super(3);
        this.B = (m) ne.a.e(mVar);
        this.A = looper == null ? null : w0.v(looper, this);
        this.C = jVar;
        this.D = new x();
        this.O = -9223372036854775807L;
        this.P = -9223372036854775807L;
        this.Q = -9223372036854775807L;
    }
}
