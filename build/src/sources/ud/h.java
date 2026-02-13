package ud;

import vd.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h implements f {

    /* renamed from: a  reason: collision with root package name */
    private final uc.c f51294a;

    /* renamed from: b  reason: collision with root package name */
    private final long f51295b;

    public h(uc.c cVar, long j10) {
        this.f51294a = cVar;
        this.f51295b = j10;
    }

    @Override // ud.f
    public long a(long j10, long j11) {
        return this.f51294a.f51189d[(int) j10];
    }

    @Override // ud.f
    public long b(long j10) {
        return this.f51294a.f51190e[(int) j10] - this.f51295b;
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
        uc.c cVar = this.f51294a;
        int i10 = (int) j10;
        return new i(null, cVar.f51188c[i10], cVar.f51187b[i10]);
    }

    @Override // ud.f
    public long f(long j10, long j11) {
        return this.f51294a.a(j10 + this.f51295b);
    }

    @Override // ud.f
    public long g(long j10) {
        return this.f51294a.f51186a;
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
        return this.f51294a.f51186a;
    }
}
