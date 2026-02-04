package vd;

import lc.x;
import qd.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class l implements m0 {

    /* renamed from: d  reason: collision with root package name */
    private final int f51457d;

    /* renamed from: e  reason: collision with root package name */
    private final p f51458e;

    /* renamed from: i  reason: collision with root package name */
    private int f51459i = -1;

    public l(p pVar, int i10) {
        this.f51458e = pVar;
        this.f51457d = i10;
    }

    private boolean d() {
        int i10 = this.f51459i;
        if (i10 != -1 && i10 != -3 && i10 != -2) {
            return true;
        }
        return false;
    }

    @Override // qd.m0
    public void a() {
        int i10 = this.f51459i;
        if (i10 != -2) {
            if (i10 == -1) {
                this.f51458e.U();
                return;
            } else if (i10 != -3) {
                this.f51458e.V(i10);
                return;
            } else {
                return;
            }
        }
        throw new r(this.f51458e.t().b(this.f51457d).c(0).f11303w);
    }

    public void b() {
        boolean z10;
        if (this.f51459i == -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        this.f51459i = this.f51458e.y(this.f51457d);
    }

    @Override // qd.m0
    public int c(x xVar, qc.f fVar, int i10) {
        if (this.f51459i == -3) {
            fVar.g(4);
            return -4;
        } else if (!d()) {
            return -3;
        } else {
            return this.f51458e.e0(this.f51459i, xVar, fVar, i10);
        }
    }

    public void e() {
        if (this.f51459i != -1) {
            this.f51458e.p0(this.f51457d);
            this.f51459i = -1;
        }
    }

    @Override // qd.m0
    public boolean isReady() {
        if (this.f51459i != -3) {
            if (!d() || !this.f51458e.Q(this.f51459i)) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // qd.m0
    public int q(long j10) {
        if (d()) {
            return this.f51458e.o0(this.f51459i, j10);
        }
        return 0;
    }
}
