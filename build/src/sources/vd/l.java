package vd;

import lc.x;
import qd.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class l implements m0 {

    /* renamed from: d  reason: collision with root package name */
    private final int f50992d;

    /* renamed from: e  reason: collision with root package name */
    private final p f50993e;

    /* renamed from: i  reason: collision with root package name */
    private int f50994i = -1;

    public l(p pVar, int i10) {
        this.f50993e = pVar;
        this.f50992d = i10;
    }

    private boolean d() {
        int i10 = this.f50994i;
        if (i10 != -1 && i10 != -3 && i10 != -2) {
            return true;
        }
        return false;
    }

    @Override // qd.m0
    public void a() {
        int i10 = this.f50994i;
        if (i10 != -2) {
            if (i10 == -1) {
                this.f50993e.U();
                return;
            } else if (i10 != -3) {
                this.f50993e.V(i10);
                return;
            } else {
                return;
            }
        }
        throw new r(this.f50993e.t().b(this.f50992d).c(0).f12706w);
    }

    public void b() {
        boolean z10;
        if (this.f50994i == -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        this.f50994i = this.f50993e.y(this.f50992d);
    }

    @Override // qd.m0
    public int c(x xVar, qc.f fVar, int i10) {
        if (this.f50994i == -3) {
            fVar.g(4);
            return -4;
        } else if (!d()) {
            return -3;
        } else {
            return this.f50993e.e0(this.f50994i, xVar, fVar, i10);
        }
    }

    public void e() {
        if (this.f50994i != -1) {
            this.f50993e.p0(this.f50992d);
            this.f50994i = -1;
        }
    }

    @Override // qd.m0
    public boolean isReady() {
        if (this.f50994i != -3) {
            if (!d() || !this.f50993e.Q(this.f50994i)) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // qd.m0
    public int q(long j10) {
        if (d()) {
            return this.f50993e.o0(this.f50994i, j10);
        }
        return 0;
    }
}
