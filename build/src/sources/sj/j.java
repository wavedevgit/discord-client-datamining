package sj;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class j extends lg.u {

    /* renamed from: e  reason: collision with root package name */
    private static final ThreadLocal f49662e = new ThreadLocal();

    /* renamed from: d  reason: collision with root package name */
    private final ThreadPoolExecutor f49663d;

    public j() {
        final ThreadFactory defaultThreadFactory = Executors.defaultThreadFactory();
        int availableProcessors = Runtime.getRuntime().availableProcessors();
        ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(availableProcessors, availableProcessors, 60L, TimeUnit.SECONDS, new LinkedBlockingQueue(), new ThreadFactory() { // from class: sj.v
            @Override // java.util.concurrent.ThreadFactory
            public final Thread newThread(final Runnable runnable) {
                return defaultThreadFactory.newThread(new Runnable() { // from class: sj.w
                    @Override // java.lang.Runnable
                    public final void run() {
                        j.o(runnable);
                    }
                });
            }
        });
        this.f49663d = threadPoolExecutor;
        threadPoolExecutor.allowCoreThreadTimeOut(true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ void o(Runnable runnable) {
        f49662e.set(new ArrayDeque());
        runnable.run();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void y(Deque deque, Runnable runnable) {
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

    @Override // lg.x0
    protected final /* synthetic */ Object a() {
        return this.f49663d;
    }

    @Override // java.util.concurrent.Executor
    public final void execute(final Runnable runnable) {
        Deque deque = (Deque) f49662e.get();
        if (deque != null && deque.size() <= 1) {
            y(deque, runnable);
        } else {
            this.f49663d.execute(new Runnable() { // from class: sj.u
                @Override // java.lang.Runnable
                public final void run() {
                    j.y((Deque) j.f49662e.get(), runnable);
                }
            });
        }
    }

    @Override // lg.u
    protected final ExecutorService h() {
        return this.f49663d;
    }
}
