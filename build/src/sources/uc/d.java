package uc;

import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d implements z {

    /* renamed from: a  reason: collision with root package name */
    private final long f50631a;

    /* renamed from: b  reason: collision with root package name */
    private final long f50632b;

    /* renamed from: c  reason: collision with root package name */
    private final int f50633c;

    /* renamed from: d  reason: collision with root package name */
    private final long f50634d;

    /* renamed from: e  reason: collision with root package name */
    private final int f50635e;

    /* renamed from: f  reason: collision with root package name */
    private final long f50636f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f50637g;

    public d(long j10, long j11, int i10, int i11, boolean z10) {
        this.f50631a = j10;
        this.f50632b = j11;
        this.f50633c = i11 == -1 ? 1 : i11;
        this.f50635e = i10;
        this.f50637g = z10;
        if (j10 == -1) {
            this.f50634d = -1L;
            this.f50636f = -9223372036854775807L;
            return;
        }
        this.f50634d = j10 - j11;
        this.f50636f = d(j10, j11, i10);
    }

    private long a(long j10) {
        int i10 = this.f50633c;
        long j11 = (((j10 * this.f50635e) / 8000000) / i10) * i10;
        long j12 = this.f50634d;
        if (j12 != -1) {
            j11 = Math.min(j11, j12 - i10);
        }
        return this.f50632b + Math.max(j11, 0L);
    }

    private static long d(long j10, long j11, int i10) {
        return (Math.max(0L, j10 - j11) * 8000000) / i10;
    }

    public long c(long j10) {
        return d(j10, this.f50632b, this.f50635e);
    }

    @Override // uc.z
    public z.a e(long j10) {
        if (this.f50634d == -1 && !this.f50637g) {
            return new z.a(new a0(0L, this.f50632b));
        }
        long a10 = a(j10);
        long c10 = c(a10);
        a0 a0Var = new a0(c10, a10);
        if (this.f50634d != -1 && c10 < j10) {
            int i10 = this.f50633c;
            if (i10 + a10 < this.f50631a) {
                long j11 = a10 + i10;
                return new z.a(a0Var, new a0(c(j11), j11));
            }
        }
        return new z.a(a0Var);
    }

    @Override // uc.z
    public boolean g() {
        if (this.f50634d == -1 && !this.f50637g) {
            return false;
        }
        return true;
    }

    @Override // uc.z
    public long i() {
        return this.f50636f;
    }
}
