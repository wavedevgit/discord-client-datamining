package u4;

import android.os.Handler;
import android.os.Looper;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a {

    /* renamed from: b  reason: collision with root package name */
    private static final a f50968b = new a();

    /* renamed from: c  reason: collision with root package name */
    private static final int f50969c;

    /* renamed from: d  reason: collision with root package name */
    static final int f50970d;

    /* renamed from: e  reason: collision with root package name */
    static final int f50971e;

    /* renamed from: a  reason: collision with root package name */
    private final Executor f50972a = new b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class b implements Executor {
        private b() {
        }

        @Override // java.util.concurrent.Executor
        public void execute(Runnable runnable) {
            new Handler(Looper.getMainLooper()).post(runnable);
        }
    }

    static {
        int availableProcessors = Runtime.getRuntime().availableProcessors();
        f50969c = availableProcessors;
        f50970d = availableProcessors + 1;
        f50971e = (availableProcessors * 2) + 1;
    }

    private a() {
    }

    public static void a(ThreadPoolExecutor threadPoolExecutor, boolean z10) {
        threadPoolExecutor.allowCoreThreadTimeOut(z10);
    }

    public static ExecutorService b() {
        ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(f50970d, f50971e, 1L, TimeUnit.SECONDS, new LinkedBlockingQueue());
        a(threadPoolExecutor, true);
        return threadPoolExecutor;
    }

    public static Executor c() {
        return f50968b.f50972a;
    }
}
