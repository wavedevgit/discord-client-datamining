package fd;

import oe.w0;
import uc.a0;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e implements z {

    /* renamed from: a  reason: collision with root package name */
    private final c f22550a;

    /* renamed from: b  reason: collision with root package name */
    private final int f22551b;

    /* renamed from: c  reason: collision with root package name */
    private final long f22552c;

    /* renamed from: d  reason: collision with root package name */
    private final long f22553d;

    /* renamed from: e  reason: collision with root package name */
    private final long f22554e;

    public e(c cVar, int i10, long j10, long j11) {
        this.f22550a = cVar;
        this.f22551b = i10;
        this.f22552c = j10;
        long j12 = (j11 - j10) / cVar.f22545e;
        this.f22553d = j12;
        this.f22554e = a(j12);
    }

    private long a(long j10) {
        return w0.X0(j10 * this.f22551b, 1000000L, this.f22550a.f22543c);
    }

    @Override // uc.z
    public z.a e(long j10) {
        long r10 = w0.r((this.f22550a.f22543c * j10) / (this.f22551b * 1000000), 0L, this.f22553d - 1);
        long j11 = this.f22552c + (this.f22550a.f22545e * r10);
        long a10 = a(r10);
        a0 a0Var = new a0(a10, j11);
        if (a10 < j10 && r10 != this.f22553d - 1) {
            long j12 = r10 + 1;
            return new z.a(a0Var, new a0(a(j12), this.f22552c + (this.f22550a.f22545e * j12)));
        }
        return new z.a(a0Var);
    }

    @Override // uc.z
    public boolean g() {
        return true;
    }

    @Override // uc.z
    public long i() {
        return this.f22554e;
    }
}
