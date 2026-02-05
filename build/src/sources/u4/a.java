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
    private static final a f51161b = new a();

    /* renamed from: c  reason: collision with root package name */
    private static final int f51162c;

    /* renamed from: d  reason: collision with root package name */
    static final int f51163d;

    /* renamed from: e  reason: collision with root package name */
    static final int f51164e;

    /* renamed from: a  reason: collision with root package name */
    private final Executor f51165a = new b();

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
        f51162c = availableProcessors;
        f51163d = availableProcessors + 1;
        f51164e = (availableProcessors * 2) + 1;
    }

    private a() {
    }

    public static void a(ThreadPoolExecutor threadPoolExecutor, boolean z10) {
        threadPoolExecutor.allowCoreThreadTimeOut(z10);
    }

    public static ExecutorService b() {
        ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(f51163d, f51164e, 1L, TimeUnit.SECONDS, new LinkedBlockingQueue());
        a(threadPoolExecutor, true);
        return threadPoolExecutor;
    }

    public static Executor c() {
        return f51161b.f51165a;
    }
}
