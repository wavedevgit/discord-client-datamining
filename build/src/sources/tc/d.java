package tc;

import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d implements z {

    /* renamed from: a  reason: collision with root package name */
    private final long f49706a;

    /* renamed from: b  reason: collision with root package name */
    private final long f49707b;

    /* renamed from: c  reason: collision with root package name */
    private final int f49708c;

    /* renamed from: d  reason: collision with root package name */
    private final long f49709d;

    /* renamed from: e  reason: collision with root package name */
    private final int f49710e;

    /* renamed from: f  reason: collision with root package name */
    private final long f49711f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f49712g;

    public d(long j10, long j11, int i10, int i11, boolean z10) {
        this.f49706a = j10;
        this.f49707b = j11;
        this.f49708c = i11 == -1 ? 1 : i11;
        this.f49710e = i10;
        this.f49712g = z10;
        if (j10 == -1) {
            this.f49709d = -1L;
            this.f49711f = -9223372036854775807L;
            return;
        }
        this.f49709d = j10 - j11;
        this.f49711f = d(j10, j11, i10);
    }

    private long a(long j10) {
        int i10 = this.f49708c;
        long j11 = (((j10 * this.f49710e) / 8000000) / i10) * i10;
        long j12 = this.f49709d;
        if (j12 != -1) {
            j11 = Math.min(j11, j12 - i10);
        }
        return this.f49707b + Math.max(j11, 0L);
    }

    private static long d(long j10, long j11, int i10) {
        return (Math.max(0L, j10 - j11) * 8000000) / i10;
    }

    public long c(long j10) {
        return d(j10, this.f49707b, this.f49710e);
    }

    @Override // tc.z
    public z.a e(long j10) {
        if (this.f49709d == -1 && !this.f49712g) {
            return new z.a(new a0(0L, this.f49707b));
        }
        long a10 = a(j10);
        long c10 = c(a10);
        a0 a0Var = new a0(c10, a10);
        if (this.f49709d != -1 && c10 < j10) {
            int i10 = this.f49708c;
            if (i10 + a10 < this.f49706a) {
                long j11 = a10 + i10;
                return new z.a(a0Var, new a0(c(j11), j11));
            }
        }
        return new z.a(a0Var);
    }

    @Override // tc.z
    public boolean h() {
        if (this.f49709d == -1 && !this.f49712g) {
            return false;
        }
        return true;
    }

    @Override // tc.z
    public long i() {
        return this.f49711f;
    }
}
