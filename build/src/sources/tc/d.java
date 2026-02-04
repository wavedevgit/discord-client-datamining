package tc;

import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d implements z {

    /* renamed from: a  reason: collision with root package name */
    private final long f49914a;

    /* renamed from: b  reason: collision with root package name */
    private final long f49915b;

    /* renamed from: c  reason: collision with root package name */
    private final int f49916c;

    /* renamed from: d  reason: collision with root package name */
    private final long f49917d;

    /* renamed from: e  reason: collision with root package name */
    private final int f49918e;

    /* renamed from: f  reason: collision with root package name */
    private final long f49919f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f49920g;

    public d(long j10, long j11, int i10, int i11, boolean z10) {
        this.f49914a = j10;
        this.f49915b = j11;
        this.f49916c = i11 == -1 ? 1 : i11;
        this.f49918e = i10;
        this.f49920g = z10;
        if (j10 == -1) {
            this.f49917d = -1L;
            this.f49919f = -9223372036854775807L;
            return;
        }
        this.f49917d = j10 - j11;
        this.f49919f = d(j10, j11, i10);
    }

    private long a(long j10) {
        int i10 = this.f49916c;
        long j11 = (((j10 * this.f49918e) / 8000000) / i10) * i10;
        long j12 = this.f49917d;
        if (j12 != -1) {
            j11 = Math.min(j11, j12 - i10);
        }
        return this.f49915b + Math.max(j11, 0L);
    }

    private static long d(long j10, long j11, int i10) {
        return (Math.max(0L, j10 - j11) * 8000000) / i10;
    }

    public long c(long j10) {
        return d(j10, this.f49915b, this.f49918e);
    }

    @Override // tc.z
    public z.a e(long j10) {
        if (this.f49917d == -1 && !this.f49920g) {
            return new z.a(new a0(0L, this.f49915b));
        }
        long a10 = a(j10);
        long c10 = c(a10);
        a0 a0Var = new a0(c10, a10);
        if (this.f49917d != -1 && c10 < j10) {
            int i10 = this.f49916c;
            if (i10 + a10 < this.f49914a) {
                long j11 = a10 + i10;
                return new z.a(a0Var, new a0(c(j11), j11));
            }
        }
        return new z.a(a0Var);
    }

    @Override // tc.z
    public boolean h() {
        if (this.f49917d == -1 && !this.f49920g) {
            return false;
        }
        return true;
    }

    @Override // tc.z
    public long i() {
        return this.f49919f;
    }
}
