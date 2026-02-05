package io.sentry.util;

import java.io.Serializable;
import java.util.concurrent.atomic.AtomicLong;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b0 implements Serializable {

    /* renamed from: i  reason: collision with root package name */
    static final AtomicLong f29799i = new AtomicLong(System.nanoTime());

    /* renamed from: d  reason: collision with root package name */
    private long f29800d;

    /* renamed from: e  reason: collision with root package name */
    private long f29801e;

    public b0() {
        this(a(), a());
    }

    private static long a() {
        AtomicLong atomicLong;
        long j10;
        long j11;
        do {
            atomicLong = f29799i;
            j10 = atomicLong.get();
            long j12 = (j10 >> 12) ^ j10;
            long j13 = j12 ^ (j12 << 25);
            j11 = (j13 ^ (j13 >> 27)) * 2685821657736338717L;
        } while (!atomicLong.compareAndSet(j10, j11));
        return j11;
    }

    public void b(byte[] bArr) {
        for (int i10 = 0; i10 < bArr.length; i10++) {
            long j10 = (this.f29800d * 6364136223846793005L) + this.f29801e;
            this.f29800d = j10;
            bArr[i10] = (byte) ((((j10 >>> 22) ^ j10) >>> ((int) ((j10 >>> 61) + 22))) >>> 24);
        }
    }

    public double c() {
        long j10 = this.f29801e;
        long j11 = (this.f29800d * 6364136223846793005L) + j10;
        long j12 = (j11 * 6364136223846793005L) + j10;
        this.f29800d = j12;
        return (((((((j11 >>> 22) ^ j11) >>> ((int) ((j11 >>> 61) + 22))) & 4294967295L) >>> 6) << 27) + (((((j12 >>> 22) ^ j12) >>> ((int) ((j12 >>> 61) + 22))) & 4294967295L) >>> 5)) / 9.007199254740992E15d;
    }

    public void d(long j10, long j11) {
        long j12 = (j11 << 1) | 1;
        this.f29801e = j12;
        this.f29800d = j12 + j10;
    }

    public b0(long j10, long j11) {
        d(j10, j11);
    }
}
