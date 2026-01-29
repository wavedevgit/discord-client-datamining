package ne;

import android.os.SystemClock;
import java.util.concurrent.TimeoutException;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s0 {

    /* renamed from: a  reason: collision with root package name */
    private long f40266a;

    /* renamed from: b  reason: collision with root package name */
    private long f40267b;

    /* renamed from: c  reason: collision with root package name */
    private long f40268c;

    /* renamed from: d  reason: collision with root package name */
    private final ThreadLocal f40269d = new ThreadLocal();

    public s0(long j10) {
        h(j10);
    }

    public static long g(long j10) {
        return (j10 * 1000000) / 90000;
    }

    public static long j(long j10) {
        return (j10 * 90000) / 1000000;
    }

    public static long k(long j10) {
        return j(j10) % 8589934592L;
    }

    public synchronized long a(long j10) {
        if (j10 == -9223372036854775807L) {
            return -9223372036854775807L;
        }
        try {
            if (!f()) {
                long j11 = this.f40266a;
                if (j11 == 9223372036854775806L) {
                    j11 = ((Long) a.e((Long) this.f40269d.get())).longValue();
                }
                this.f40267b = j11 - j10;
                notifyAll();
            }
            this.f40268c = j10;
            return j10 + this.f40267b;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized long b(long j10) {
        if (j10 == -9223372036854775807L) {
            return -9223372036854775807L;
        }
        try {
            long j11 = this.f40268c;
            if (j11 != -9223372036854775807L) {
                long j12 = j(j11);
                long j13 = (4294967296L + j12) / 8589934592L;
                long j14 = ((j13 - 1) * 8589934592L) + j10;
                j10 += j13 * 8589934592L;
                if (Math.abs(j14 - j12) < Math.abs(j10 - j12)) {
                    j10 = j14;
                }
            }
            return a(g(j10));
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized long c() {
        long j10;
        j10 = this.f40266a;
        return (j10 == LongCompanionObject.MAX_VALUE || j10 == 9223372036854775806L) ? -9223372036854775807L : -9223372036854775807L;
    }

    public synchronized long d() {
        long c10;
        try {
            long j10 = this.f40268c;
            if (j10 != -9223372036854775807L) {
                c10 = j10 + this.f40267b;
            } else {
                c10 = c();
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return c10;
    }

    public synchronized long e() {
        return this.f40267b;
    }

    public synchronized boolean f() {
        boolean z10;
        if (this.f40267b != -9223372036854775807L) {
            z10 = true;
        } else {
            z10 = false;
        }
        return z10;
    }

    public synchronized void h(long j10) {
        long j11;
        this.f40266a = j10;
        if (j10 == LongCompanionObject.MAX_VALUE) {
            j11 = 0;
        } else {
            j11 = -9223372036854775807L;
        }
        this.f40267b = j11;
        this.f40268c = -9223372036854775807L;
    }

    public synchronized void i(boolean z10, long j10, long j11) {
        boolean z11;
        boolean z12;
        try {
            if (this.f40266a == 9223372036854775806L) {
                z11 = true;
            } else {
                z11 = false;
            }
            a.g(z11);
            if (f()) {
                return;
            }
            if (z10) {
                this.f40269d.set(Long.valueOf(j10));
            } else {
                long j12 = 0;
                long j13 = j11;
                while (!f()) {
                    if (j11 == 0) {
                        wait();
                    } else {
                        if (j13 > 0) {
                            z12 = true;
                        } else {
                            z12 = false;
                        }
                        a.g(z12);
                        long elapsedRealtime = SystemClock.elapsedRealtime();
                        wait(j13);
                        j12 += SystemClock.elapsedRealtime() - elapsedRealtime;
                        if (j12 >= j11 && !f()) {
                            throw new TimeoutException("TimestampAdjuster failed to initialize in " + j11 + " milliseconds");
                        }
                        j13 = j11 - j12;
                    }
                }
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }
}
