package tc;

import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d implements z {

    /* renamed from: a  reason: collision with root package name */
    private final long f50543a;

    /* renamed from: b  reason: collision with root package name */
    private final long f50544b;

    /* renamed from: c  reason: collision with root package name */
    private final int f50545c;

    /* renamed from: d  reason: collision with root package name */
    private final long f50546d;

    /* renamed from: e  reason: collision with root package name */
    private final int f50547e;

    /* renamed from: f  reason: collision with root package name */
    private final long f50548f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f50549g;

    public d(long j10, long j11, int i10, int i11, boolean z10) {
        this.f50543a = j10;
        this.f50544b = j11;
        this.f50545c = i11 == -1 ? 1 : i11;
        this.f50547e = i10;
        this.f50549g = z10;
        if (j10 == -1) {
            this.f50546d = -1L;
            this.f50548f = -9223372036854775807L;
            return;
        }
        this.f50546d = j10 - j11;
        this.f50548f = d(j10, j11, i10);
    }

    private long a(long j10) {
        int i10 = this.f50545c;
        long j11 = (((j10 * this.f50547e) / 8000000) / i10) * i10;
        long j12 = this.f50546d;
        if (j12 != -1) {
            j11 = Math.min(j11, j12 - i10);
        }
        return this.f50544b + Math.max(j11, 0L);
    }

    private static long d(long j10, long j11, int i10) {
        return (Math.max(0L, j10 - j11) * 8000000) / i10;
    }

    public long c(long j10) {
        return d(j10, this.f50544b, this.f50547e);
    }

    @Override // tc.z
    public z.a e(long j10) {
        if (this.f50546d == -1 && !this.f50549g) {
            return new z.a(new a0(0L, this.f50544b));
        }
        long a10 = a(j10);
        long c10 = c(a10);
        a0 a0Var = new a0(c10, a10);
        if (this.f50546d != -1 && c10 < j10) {
            int i10 = this.f50545c;
            if (i10 + a10 < this.f50543a) {
                long j11 = a10 + i10;
                return new z.a(a0Var, new a0(c(j11), j11));
            }
        }
        return new z.a(a0Var);
    }

    @Override // tc.z
    public boolean h() {
        if (this.f50546d == -1 && !this.f50549g) {
            return false;
        }
        return true;
    }

    @Override // tc.z
    public long i() {
        return this.f50548f;
    }
}
