package ud;

import vd.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h implements f {

    /* renamed from: a  reason: collision with root package name */
    private final uc.c f51546a;

    /* renamed from: b  reason: collision with root package name */
    private final long f51547b;

    public h(uc.c cVar, long j10) {
        this.f51546a = cVar;
        this.f51547b = j10;
    }

    @Override // ud.f
    public long a(long j10, long j11) {
        return this.f51546a.f51441d[(int) j10];
    }

    @Override // ud.f
    public long b(long j10) {
        return this.f51546a.f51442e[(int) j10] - this.f51547b;
    }

    @Override // ud.f
    public long c(long j10, long j11) {
        return 0L;
    }

    @Override // ud.f
    public long d(long j10, long j11) {
        return -9223372036854775807L;
    }

    @Override // ud.f
    public i e(long j10) {
        uc.c cVar = this.f51546a;
        int i10 = (int) j10;
        return new i(null, cVar.f51440c[i10], cVar.f51439b[i10]);
    }

    @Override // ud.f
    public long f(long j10, long j11) {
        return this.f51546a.a(j10 + this.f51547b);
    }

    @Override // ud.f
    public long g(long j10) {
        return this.f51546a.f51438a;
    }

    @Override // ud.f
    public boolean h() {
        return true;
    }

    @Override // ud.f
    public long i() {
        return 0L;
    }

    @Override // ud.f
    public long j(long j10, long j11) {
        return this.f51546a.f51438a;
    }
}
