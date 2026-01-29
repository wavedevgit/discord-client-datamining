package ed;

import ne.w0;
import tc.a0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e implements z {

    /* renamed from: a  reason: collision with root package name */
    private final c f22714a;

    /* renamed from: b  reason: collision with root package name */
    private final int f22715b;

    /* renamed from: c  reason: collision with root package name */
    private final long f22716c;

    /* renamed from: d  reason: collision with root package name */
    private final long f22717d;

    /* renamed from: e  reason: collision with root package name */
    private final long f22718e;

    public e(c cVar, int i10, long j10, long j11) {
        this.f22714a = cVar;
        this.f22715b = i10;
        this.f22716c = j10;
        long j12 = (j11 - j10) / cVar.f22709e;
        this.f22717d = j12;
        this.f22718e = a(j12);
    }

    private long a(long j10) {
        return w0.X0(j10 * this.f22715b, 1000000L, this.f22714a.f22707c);
    }

    @Override // tc.z
    public z.a e(long j10) {
        long r10 = w0.r((this.f22714a.f22707c * j10) / (this.f22715b * 1000000), 0L, this.f22717d - 1);
        long j11 = this.f22716c + (this.f22714a.f22709e * r10);
        long a10 = a(r10);
        a0 a0Var = new a0(a10, j11);
        if (a10 < j10 && r10 != this.f22717d - 1) {
            long j12 = r10 + 1;
            return new z.a(a0Var, new a0(a(j12), this.f22716c + (this.f22714a.f22709e * j12)));
        }
        return new z.a(a0Var);
    }

    @Override // tc.z
    public boolean h() {
        return true;
    }

    @Override // tc.z
    public long i() {
        return this.f22718e;
    }
}
