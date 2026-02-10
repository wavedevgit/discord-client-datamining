package ud;

import vd.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h implements f {

    /* renamed from: a  reason: collision with root package name */
    private final uc.c f50725a;

    /* renamed from: b  reason: collision with root package name */
    private final long f50726b;

    public h(uc.c cVar, long j10) {
        this.f50725a = cVar;
        this.f50726b = j10;
    }

    @Override // ud.f
    public long a(long j10, long j11) {
        return this.f50725a.f50620d[(int) j10];
    }

    @Override // ud.f
    public long b(long j10) {
        return this.f50725a.f50621e[(int) j10] - this.f50726b;
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
        uc.c cVar = this.f50725a;
        int i10 = (int) j10;
        return new i(null, cVar.f50619c[i10], cVar.f50618b[i10]);
    }

    @Override // ud.f
    public long f(long j10, long j11) {
        return this.f50725a.a(j10 + this.f50726b);
    }

    @Override // ud.f
    public long g(long j10) {
        return this.f50725a.f50617a;
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
        return this.f50725a.f50617a;
    }
}
