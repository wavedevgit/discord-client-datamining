package ed;

import ne.w0;
import tc.a0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e implements z {

    /* renamed from: a  reason: collision with root package name */
    private final c f21437a;

    /* renamed from: b  reason: collision with root package name */
    private final int f21438b;

    /* renamed from: c  reason: collision with root package name */
    private final long f21439c;

    /* renamed from: d  reason: collision with root package name */
    private final long f21440d;

    /* renamed from: e  reason: collision with root package name */
    private final long f21441e;

    public e(c cVar, int i10, long j10, long j11) {
        this.f21437a = cVar;
        this.f21438b = i10;
        this.f21439c = j10;
        long j12 = (j11 - j10) / cVar.f21432e;
        this.f21440d = j12;
        this.f21441e = a(j12);
    }

    private long a(long j10) {
        return w0.X0(j10 * this.f21438b, 1000000L, this.f21437a.f21430c);
    }

    @Override // tc.z
    public z.a e(long j10) {
        long r10 = w0.r((this.f21437a.f21430c * j10) / (this.f21438b * 1000000), 0L, this.f21440d - 1);
        long j11 = this.f21439c + (this.f21437a.f21432e * r10);
        long a10 = a(r10);
        a0 a0Var = new a0(a10, j11);
        if (a10 < j10 && r10 != this.f21440d - 1) {
            long j12 = r10 + 1;
            return new z.a(a0Var, new a0(a(j12), this.f21439c + (this.f21437a.f21432e * j12)));
        }
        return new z.a(a0Var);
    }

    @Override // tc.z
    public boolean h() {
        return true;
    }

    @Override // tc.z
    public long i() {
        return this.f21441e;
    }
}
