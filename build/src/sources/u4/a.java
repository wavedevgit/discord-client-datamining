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
    private static final a f50389b = new a();

    /* renamed from: c  reason: collision with root package name */
    private static final int f50390c;

    /* renamed from: d  reason: collision with root package name */
    static final int f50391d;

    /* renamed from: e  reason: collision with root package name */
    static final int f50392e;

    /* renamed from: a  reason: collision with root package name */
    private final Executor f50393a = new b();

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
        f50390c = availableProcessors;
        f50391d = availableProcessors + 1;
        f50392e = (availableProcessors * 2) + 1;
    }

    private a() {
    }

    public static void a(ThreadPoolExecutor threadPoolExecutor, boolean z10) {
        threadPoolExecutor.allowCoreThreadTimeOut(z10);
    }

    public static ExecutorService b() {
        ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(f50391d, f50392e, 1L, TimeUnit.SECONDS, new LinkedBlockingQueue());
        a(threadPoolExecutor, true);
        return threadPoolExecutor;
    }

    public static Executor c() {
        return f50389b.f50393a;
    }
}
