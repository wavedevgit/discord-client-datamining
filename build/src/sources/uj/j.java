package uj;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class j extends ng.u {

    /* renamed from: e  reason: collision with root package name */
    private static final ThreadLocal f51579e = new ThreadLocal();

    /* renamed from: d  reason: collision with root package name */
    private final ThreadPoolExecutor f51580d;

    public j() {
        final ThreadFactory defaultThreadFactory = Executors.defaultThreadFactory();
        int availableProcessors = Runtime.getRuntime().availableProcessors();
        ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(availableProcessors, availableProcessors, 60L, TimeUnit.SECONDS, new LinkedBlockingQueue(), new ThreadFactory() { // from class: uj.v
            @Override // java.util.concurrent.ThreadFactory
            public final Thread newThread(final Runnable runnable) {
                return defaultThreadFactory.newThread(new Runnable() { // from class: uj.w
                    @Override // java.lang.Runnable
                    public final void run() {
                        j.n(runnable);
                    }
                });
            }
        });
        this.f51580d = threadPoolExecutor;
        threadPoolExecutor.allowCoreThreadTimeOut(true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ void n(Runnable runnable) {
        f51579e.set(new ArrayDeque());
        runnable.run();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void p(Deque deque, Runnable runnable) {
        hf.q.l(deque);
        deque.add(runnable);
        if (deque.size() <= 1) {
            do {
                runnable.run();
                deque.removeFirst();
                runnable = (Runnable) deque.peekFirst();
            } while (runnable != null);
        }
    }

    @Override // ng.x0
    protected final /* synthetic */ Object a() {
        return this.f51580d;
    }

    @Override // java.util.concurrent.Executor
    public final void execute(final Runnable runnable) {
        Deque deque = (Deque) f51579e.get();
        if (deque != null && deque.size() <= 1) {
            p(deque, runnable);
        } else {
            this.f51580d.execute(new Runnable() { // from class: uj.u
                @Override // java.lang.Runnable
                public final void run() {
                    j.p((Deque) j.f51579e.get(), runnable);
                }
            });
        }
    }

    @Override // ng.u
    protected final ExecutorService k() {
        return this.f51580d;
    }
}
