package fd;

import oe.w0;
import uc.a0;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e implements z {

    /* renamed from: a  reason: collision with root package name */
    private final c f23675a;

    /* renamed from: b  reason: collision with root package name */
    private final int f23676b;

    /* renamed from: c  reason: collision with root package name */
    private final long f23677c;

    /* renamed from: d  reason: collision with root package name */
    private final long f23678d;

    /* renamed from: e  reason: collision with root package name */
    private final long f23679e;

    public e(c cVar, int i10, long j10, long j11) {
        this.f23675a = cVar;
        this.f23676b = i10;
        this.f23677c = j10;
        long j12 = (j11 - j10) / cVar.f23670e;
        this.f23678d = j12;
        this.f23679e = a(j12);
    }

    private long a(long j10) {
        return w0.X0(j10 * this.f23676b, 1000000L, this.f23675a.f23668c);
    }

    @Override // uc.z
    public z.a e(long j10) {
        long r10 = w0.r((this.f23675a.f23668c * j10) / (this.f23676b * 1000000), 0L, this.f23678d - 1);
        long j11 = this.f23677c + (this.f23675a.f23670e * r10);
        long a10 = a(r10);
        a0 a0Var = new a0(a10, j11);
        if (a10 < j10 && r10 != this.f23678d - 1) {
            long j12 = r10 + 1;
            return new z.a(a0Var, new a0(a(j12), this.f23677c + (this.f23675a.f23670e * j12)));
        }
        return new z.a(a0Var);
    }

    @Override // uc.z
    public boolean g() {
        return true;
    }

    @Override // uc.z
    public long i() {
        return this.f23679e;
    }
}
