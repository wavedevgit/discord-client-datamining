package fd;

import oe.w0;
import uc.a0;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e implements z {

    /* renamed from: a  reason: collision with root package name */
    private final c f23676a;

    /* renamed from: b  reason: collision with root package name */
    private final int f23677b;

    /* renamed from: c  reason: collision with root package name */
    private final long f23678c;

    /* renamed from: d  reason: collision with root package name */
    private final long f23679d;

    /* renamed from: e  reason: collision with root package name */
    private final long f23680e;

    public e(c cVar, int i10, long j10, long j11) {
        this.f23676a = cVar;
        this.f23677b = i10;
        this.f23678c = j10;
        long j12 = (j11 - j10) / cVar.f23671e;
        this.f23679d = j12;
        this.f23680e = a(j12);
    }

    private long a(long j10) {
        return w0.X0(j10 * this.f23677b, 1000000L, this.f23676a.f23669c);
    }

    @Override // uc.z
    public z.a e(long j10) {
        long r10 = w0.r((this.f23676a.f23669c * j10) / (this.f23677b * 1000000), 0L, this.f23679d - 1);
        long j11 = this.f23678c + (this.f23676a.f23671e * r10);
        long a10 = a(r10);
        a0 a0Var = new a0(a10, j11);
        if (a10 < j10 && r10 != this.f23679d - 1) {
            long j12 = r10 + 1;
            return new z.a(a0Var, new a0(a(j12), this.f23678c + (this.f23676a.f23671e * j12)));
        }
        return new z.a(a0Var);
    }

    @Override // uc.z
    public boolean g() {
        return true;
    }

    @Override // uc.z
    public long i() {
        return this.f23680e;
    }
}
