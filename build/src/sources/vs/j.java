package vs;

import java.util.concurrent.TimeUnit;
import ts.f0;
import ts.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class j {

    /* renamed from: a  reason: collision with root package name */
    public static final String f53022a = f0.e("kotlinx.coroutines.scheduler.default.name", "DefaultDispatcher");

    /* renamed from: b  reason: collision with root package name */
    public static final long f53023b;

    /* renamed from: c  reason: collision with root package name */
    public static final int f53024c;

    /* renamed from: d  reason: collision with root package name */
    public static final int f53025d;

    /* renamed from: e  reason: collision with root package name */
    public static final long f53026e;

    /* renamed from: f  reason: collision with root package name */
    public static g f53027f;

    static {
        long f10;
        int e10;
        int e11;
        long f11;
        f10 = h0.f("kotlinx.coroutines.scheduler.resolution.ns", 100000L, 0L, 0L, 12, null);
        f53023b = f10;
        e10 = h0.e("kotlinx.coroutines.scheduler.core.pool.size", kotlin.ranges.d.d(f0.a(), 2), 1, 0, 8, null);
        f53024c = e10;
        e11 = h0.e("kotlinx.coroutines.scheduler.max.pool.size", 2097150, 0, 2097150, 4, null);
        f53025d = e11;
        TimeUnit timeUnit = TimeUnit.SECONDS;
        f11 = h0.f("kotlinx.coroutines.scheduler.keep.alive.sec", 60L, 0L, 0L, 12, null);
        f53026e = timeUnit.toNanos(f11);
        f53027f = e.f53013a;
    }

    public static final h b(Runnable runnable, long j10, boolean z10) {
        return new i(runnable, j10, z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final String c(boolean z10) {
        if (z10) {
            return "Blocking";
        }
        return "Non-blocking";
    }
}
