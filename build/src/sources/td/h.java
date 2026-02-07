package td;

import ud.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h implements f {

    /* renamed from: a  reason: collision with root package name */
    private final tc.c f50638a;

    /* renamed from: b  reason: collision with root package name */
    private final long f50639b;

    public h(tc.c cVar, long j10) {
        this.f50638a = cVar;
        this.f50639b = j10;
    }

    @Override // td.f
    public long a(long j10, long j11) {
        return this.f50638a.f50533d[(int) j10];
    }

    @Override // td.f
    public long b(long j10) {
        return this.f50638a.f50534e[(int) j10] - this.f50639b;
    }

    @Override // td.f
    public long c(long j10, long j11) {
        return 0L;
    }

    @Override // td.f
    public long d(long j10, long j11) {
        return -9223372036854775807L;
    }

    @Override // td.f
    public i e(long j10) {
        tc.c cVar = this.f50638a;
        int i10 = (int) j10;
        return new i(null, cVar.f50532c[i10], cVar.f50531b[i10]);
    }

    @Override // td.f
    public long f(long j10, long j11) {
        return this.f50638a.a(j10 + this.f50639b);
    }

    @Override // td.f
    public long g(long j10) {
        return this.f50638a.f50530a;
    }

    @Override // td.f
    public boolean h() {
        return true;
    }

    @Override // td.f
    public long i() {
        return 0L;
    }

    @Override // td.f
    public long j(long j10, long j11) {
        return this.f50638a.f50530a;
    }
}
