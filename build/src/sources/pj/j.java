package pj;

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
    private static final ThreadLocal f46046e = new ThreadLocal();

    /* renamed from: d  reason: collision with root package name */
    private final ThreadPoolExecutor f46047d;

    public j() {
        final ThreadFactory defaultThreadFactory = Executors.defaultThreadFactory();
        int availableProcessors = Runtime.getRuntime().availableProcessors();
        ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(availableProcessors, availableProcessors, 60L, TimeUnit.SECONDS, new LinkedBlockingQueue(), new ThreadFactory() { // from class: pj.v
            @Override // java.util.concurrent.ThreadFactory
            public final Thread newThread(final Runnable runnable) {
                return defaultThreadFactory.newThread(new Runnable() { // from class: pj.w
                    @Override // java.lang.Runnable
                    public final void run() {
                        j.n(runnable);
                    }
                });
            }
        });
        this.f46047d = threadPoolExecutor;
        threadPoolExecutor.allowCoreThreadTimeOut(true);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void B(Deque deque, Runnable runnable) {
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

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ void n(Runnable runnable) {
        f46046e.set(new ArrayDeque());
        runnable.run();
    }

    @Override // lg.x0
    protected final /* synthetic */ Object a() {
        return this.f46047d;
    }

    @Override // java.util.concurrent.Executor
    public final void execute(final Runnable runnable) {
        Deque deque = (Deque) f46046e.get();
        if (deque != null && deque.size() <= 1) {
            B(deque, runnable);
        } else {
            this.f46047d.execute(new Runnable() { // from class: pj.u
                @Override // java.lang.Runnable
                public final void run() {
                    j.B((Deque) j.f46046e.get(), runnable);
                }
            });
        }
    }

    @Override // lg.u
    protected final ExecutorService h() {
        return this.f46047d;
    }
}
