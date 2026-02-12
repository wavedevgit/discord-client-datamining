package wd;

import mc.x;
import rd.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class l implements m0 {

    /* renamed from: d  reason: collision with root package name */
    private final int f52616d;

    /* renamed from: e  reason: collision with root package name */
    private final p f52617e;

    /* renamed from: i  reason: collision with root package name */
    private int f52618i = -1;

    public l(p pVar, int i10) {
        this.f52617e = pVar;
        this.f52616d = i10;
    }

    private boolean d() {
        int i10 = this.f52618i;
        if (i10 != -1 && i10 != -3 && i10 != -2) {
            return true;
        }
        return false;
    }

    @Override // rd.m0
    public void a() {
        int i10 = this.f52618i;
        if (i10 != -2) {
            if (i10 == -1) {
                this.f52617e.U();
                return;
            } else if (i10 != -3) {
                this.f52617e.V(i10);
                return;
            } else {
                return;
            }
        }
        throw new r(this.f52617e.s().b(this.f52616d).c(0).f12305w);
    }

    public void b() {
        boolean z10;
        if (this.f52618i == -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.a(z10);
        this.f52618i = this.f52617e.y(this.f52616d);
    }

    @Override // rd.m0
    public int c(x xVar, rc.f fVar, int i10) {
        if (this.f52618i == -3) {
            fVar.g(4);
            return -4;
        } else if (!d()) {
            return -3;
        } else {
            return this.f52617e.e0(this.f52618i, xVar, fVar, i10);
        }
    }

    public void e() {
        if (this.f52618i != -1) {
            this.f52617e.p0(this.f52616d);
            this.f52618i = -1;
        }
    }

    @Override // rd.m0
    public boolean isReady() {
        if (this.f52618i != -3) {
            if (!d() || !this.f52617e.Q(this.f52618i)) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // rd.m0
    public int j(long j10) {
        if (d()) {
            return this.f52617e.o0(this.f52618i, j10);
        }
        return 0;
    }
}
