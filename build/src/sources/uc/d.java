package uc;

import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d implements z {

    /* renamed from: a  reason: collision with root package name */
    private final long f51199a;

    /* renamed from: b  reason: collision with root package name */
    private final long f51200b;

    /* renamed from: c  reason: collision with root package name */
    private final int f51201c;

    /* renamed from: d  reason: collision with root package name */
    private final long f51202d;

    /* renamed from: e  reason: collision with root package name */
    private final int f51203e;

    /* renamed from: f  reason: collision with root package name */
    private final long f51204f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f51205g;

    public d(long j10, long j11, int i10, int i11, boolean z10) {
        this.f51199a = j10;
        this.f51200b = j11;
        this.f51201c = i11 == -1 ? 1 : i11;
        this.f51203e = i10;
        this.f51205g = z10;
        if (j10 == -1) {
            this.f51202d = -1L;
            this.f51204f = -9223372036854775807L;
            return;
        }
        this.f51202d = j10 - j11;
        this.f51204f = d(j10, j11, i10);
    }

    private long a(long j10) {
        int i10 = this.f51201c;
        long j11 = (((j10 * this.f51203e) / 8000000) / i10) * i10;
        long j12 = this.f51202d;
        if (j12 != -1) {
            j11 = Math.min(j11, j12 - i10);
        }
        return this.f51200b + Math.max(j11, 0L);
    }

    private static long d(long j10, long j11, int i10) {
        return (Math.max(0L, j10 - j11) * 8000000) / i10;
    }

    public long c(long j10) {
        return d(j10, this.f51200b, this.f51203e);
    }

    @Override // uc.z
    public z.a e(long j10) {
        if (this.f51202d == -1 && !this.f51205g) {
            return new z.a(new a0(0L, this.f51200b));
        }
        long a10 = a(j10);
        long c10 = c(a10);
        a0 a0Var = new a0(c10, a10);
        if (this.f51202d != -1 && c10 < j10) {
            int i10 = this.f51201c;
            if (i10 + a10 < this.f51199a) {
                long j11 = a10 + i10;
                return new z.a(a0Var, new a0(c(j11), j11));
            }
        }
        return new z.a(a0Var);
    }

    @Override // uc.z
    public boolean g() {
        if (this.f51202d == -1 && !this.f51205g) {
            return false;
        }
        return true;
    }

    @Override // uc.z
    public long i() {
        return this.f51204f;
    }
}
