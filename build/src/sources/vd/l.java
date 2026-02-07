package vd;

import lc.x;
import qd.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class l implements m0 {

    /* renamed from: d  reason: collision with root package name */
    private final int f52559d;

    /* renamed from: e  reason: collision with root package name */
    private final p f52560e;

    /* renamed from: i  reason: collision with root package name */
    private int f52561i = -1;

    public l(p pVar, int i10) {
        this.f52560e = pVar;
        this.f52559d = i10;
    }

    private boolean d() {
        int i10 = this.f52561i;
        if (i10 != -1 && i10 != -3 && i10 != -2) {
            return true;
        }
        return false;
    }

    @Override // qd.m0
    public void a() {
        int i10 = this.f52561i;
        if (i10 != -2) {
            if (i10 == -1) {
                this.f52560e.U();
                return;
            } else if (i10 != -3) {
                this.f52560e.V(i10);
                return;
            } else {
                return;
            }
        }
        throw new r(this.f52560e.t().b(this.f52559d).c(0).f11587w);
    }

    public void b() {
        boolean z10;
        if (this.f52561i == -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        this.f52561i = this.f52560e.y(this.f52559d);
    }

    @Override // qd.m0
    public int c(x xVar, qc.f fVar, int i10) {
        if (this.f52561i == -3) {
            fVar.g(4);
            return -4;
        } else if (!d()) {
            return -3;
        } else {
            return this.f52560e.e0(this.f52561i, xVar, fVar, i10);
        }
    }

    public void e() {
        if (this.f52561i != -1) {
            this.f52560e.p0(this.f52559d);
            this.f52561i = -1;
        }
    }

    @Override // qd.m0
    public boolean isReady() {
        if (this.f52561i != -3) {
            if (!d() || !this.f52560e.Q(this.f52561i)) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // qd.m0
    public int q(long j10) {
        if (d()) {
            return this.f52560e.o0(this.f52561i, j10);
        }
        return 0;
    }
}
