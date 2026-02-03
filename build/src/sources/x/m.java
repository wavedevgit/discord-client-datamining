package x;

import java.util.Locale;
import java.util.concurrent.Executor;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.RejectedExecutionHandler;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class m implements Executor {

    /* renamed from: i  reason: collision with root package name */
    private static final ThreadFactory f52860i = new a();

    /* renamed from: d  reason: collision with root package name */
    private final Object f52861d = new Object();

    /* renamed from: e  reason: collision with root package name */
    private ThreadPoolExecutor f52862e = b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements ThreadFactory {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicInteger f52863a = new AtomicInteger(0);

        a() {
        }

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable runnable) {
            Thread thread = new Thread(runnable);
            thread.setName(String.format(Locale.US, "CameraX-core_camera_%d", Integer.valueOf(this.f52863a.getAndIncrement())));
            return thread;
        }
    }

    private static ThreadPoolExecutor b() {
        ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(1, 1, 0L, TimeUnit.MILLISECONDS, new LinkedBlockingQueue(), f52860i);
        threadPoolExecutor.setRejectedExecutionHandler(new RejectedExecutionHandler() { // from class: x.l
            @Override // java.util.concurrent.RejectedExecutionHandler
            public final void rejectedExecution(Runnable runnable, ThreadPoolExecutor threadPoolExecutor2) {
                y0.c("CameraExecutor", "A rejected execution occurred in CameraExecutor!");
            }
        });
        return threadPoolExecutor;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(a0.c0 c0Var) {
        ThreadPoolExecutor threadPoolExecutor;
        b2.e.g(c0Var);
        synchronized (this.f52861d) {
            try {
                if (this.f52862e.isShutdown()) {
                    this.f52862e = b();
                }
                threadPoolExecutor = this.f52862e;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        int max = Math.max(1, c0Var.b().size());
        threadPoolExecutor.setMaximumPoolSize(max);
        threadPoolExecutor.setCorePoolSize(max);
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        b2.e.g(runnable);
        synchronized (this.f52861d) {
            this.f52862e.execute(runnable);
        }
    }
}
