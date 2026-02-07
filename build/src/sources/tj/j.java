package tj;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class j extends mg.u {

    /* renamed from: e  reason: collision with root package name */
    private static final ThreadLocal f50674e = new ThreadLocal();

    /* renamed from: d  reason: collision with root package name */
    private final ThreadPoolExecutor f50675d;

    public j() {
        final ThreadFactory defaultThreadFactory = Executors.defaultThreadFactory();
        int availableProcessors = Runtime.getRuntime().availableProcessors();
        ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(availableProcessors, availableProcessors, 60L, TimeUnit.SECONDS, new LinkedBlockingQueue(), new ThreadFactory() { // from class: tj.v
            @Override // java.util.concurrent.ThreadFactory
            public final Thread newThread(final Runnable runnable) {
                return defaultThreadFactory.newThread(new Runnable() { // from class: tj.w
                    @Override // java.lang.Runnable
                    public final void run() {
                        j.n(runnable);
                    }
                });
            }
        });
        this.f50675d = threadPoolExecutor;
        threadPoolExecutor.allowCoreThreadTimeOut(true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ void n(Runnable runnable) {
        f50674e.set(new ArrayDeque());
        runnable.run();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void p(Deque deque, Runnable runnable) {
        gf.q.l(deque);
        deque.add(runnable);
        if (deque.size() <= 1) {
            do {
                runnable.run();
                deque.removeFirst();
                runnable = (Runnable) deque.peekFirst();
            } while (runnable != null);
        }
    }

    @Override // mg.x0
    protected final /* synthetic */ Object a() {
        return this.f50675d;
    }

    @Override // java.util.concurrent.Executor
    public final void execute(final Runnable runnable) {
        Deque deque = (Deque) f50674e.get();
        if (deque != null && deque.size() <= 1) {
            p(deque, runnable);
        } else {
            this.f50675d.execute(new Runnable() { // from class: tj.u
                @Override // java.lang.Runnable
                public final void run() {
                    j.p((Deque) j.f50674e.get(), runnable);
                }
            });
        }
    }

    @Override // mg.u
    protected final ExecutorService k() {
        return this.f50675d;
    }
}
