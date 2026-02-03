package com.google.android.exoplayer2;

import com.google.android.exoplayer2.Timeline;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class e implements Player {

    /* renamed from: a  reason: collision with root package name */
    protected final Timeline.d f12099a = new Timeline.d();

    private int h0() {
        int T = T();
        if (T == 1) {
            return 0;
        }
        return T;
    }

    private void j0(int i10) {
        k0(Q(), -9223372036854775807L, i10, true);
    }

    private void m0(long j10, int i10) {
        k0(Q(), j10, i10, false);
    }

    private void n0(int i10, int i11) {
        k0(i10, -9223372036854775807L, i11, false);
    }

    private void o0(int i10) {
        int f02 = f0();
        if (f02 == -1) {
            return;
        }
        if (f02 == Q()) {
            j0(i10);
        } else {
            n0(f02, i10);
        }
    }

    private void p0(long j10, int i10) {
        long Z = Z() + j10;
        long duration = getDuration();
        if (duration != -9223372036854775807L) {
            Z = Math.min(Z, duration);
        }
        m0(Math.max(Z, 0L), i10);
    }

    private void q0(int i10) {
        int g02 = g0();
        if (g02 == -1) {
            return;
        }
        if (g02 == Q()) {
            j0(i10);
        } else {
            n0(g02, i10);
        }
    }

    @Override // com.google.android.exoplayer2.Player
    public final boolean H() {
        if (g0() != -1) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.Player
    public final boolean N() {
        Timeline v10 = v();
        if (!v10.u() && v10.r(Q(), this.f12099a).f11609s) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.Player
    public final boolean P() {
        if (O() == 3 && B() && u() == 0) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.Player
    public final void W() {
        p0(J(), 12);
    }

    @Override // com.google.android.exoplayer2.Player
    public final void X() {
        p0(-a0(), 11);
    }

    public final void a() {
        k(0, Integer.MAX_VALUE);
    }

    @Override // com.google.android.exoplayer2.Player
    public final void b() {
        n(false);
    }

    @Override // com.google.android.exoplayer2.Player
    public final boolean b0() {
        Timeline v10 = v();
        if (!v10.u() && v10.r(Q(), this.f12099a).g()) {
            return true;
        }
        return false;
    }

    public final int c0() {
        long M = M();
        long duration = getDuration();
        if (M == -9223372036854775807L || duration == -9223372036854775807L) {
            return 0;
        }
        if (duration == 0) {
            return 100;
        }
        return ne.w0.q((int) ((M * 100) / duration), 0, 100);
    }

    public final long d0() {
        Timeline v10 = v();
        if (v10.u()) {
            return -9223372036854775807L;
        }
        return v10.r(Q(), this.f12099a).f();
    }

    @Override // com.google.android.exoplayer2.Player
    public final void e() {
        n(true);
    }

    public final int e0() {
        return Q();
    }

    public final int f0() {
        Timeline v10 = v();
        if (v10.u()) {
            return -1;
        }
        return v10.i(Q(), h0(), U());
    }

    public final int g0() {
        Timeline v10 = v();
        if (v10.u()) {
            return -1;
        }
        return v10.p(Q(), h0(), U());
    }

    @Override // com.google.android.exoplayer2.Player
    public final void i() {
        n0(Q(), 4);
    }

    public final boolean i0() {
        return N();
    }

    public abstract void k0(int i10, long j10, int i11, boolean z10);

    @Override // com.google.android.exoplayer2.Player
    public final void l() {
        if (!v().u() && !f()) {
            boolean H = H();
            if (b0() && !N()) {
                if (H) {
                    q0(7);
                }
            } else if (H && Z() <= D()) {
                q0(7);
            } else {
                m0(0L, 7);
            }
        }
    }

    public final void l0(long j10) {
        m0(j10, 5);
    }

    @Override // com.google.android.exoplayer2.Player
    public final boolean p() {
        if (f0() != -1) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.Player
    public final boolean s(int i10) {
        return A().c(i10);
    }

    @Override // com.google.android.exoplayer2.Player
    public final boolean t() {
        Timeline v10 = v();
        if (!v10.u() && v10.r(Q(), this.f12099a).f11610t) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.Player
    public final void x() {
        if (!v().u() && !f()) {
            if (p()) {
                o0(9);
            } else if (b0() && t()) {
                n0(Q(), 9);
            }
        }
    }

    @Override // com.google.android.exoplayer2.Player
    public final void z(int i10, long j10) {
        k0(i10, j10, 10, false);
    }
}
