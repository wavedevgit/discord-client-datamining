package x5;

import java.util.concurrent.ThreadFactory;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements ThreadFactory {

    /* renamed from: d  reason: collision with root package name */
    private static final AtomicInteger f53166d = new AtomicInteger(1);

    /* renamed from: a  reason: collision with root package name */
    private final ThreadGroup f53167a;

    /* renamed from: b  reason: collision with root package name */
    private final AtomicInteger f53168b = new AtomicInteger(1);

    /* renamed from: c  reason: collision with root package name */
    private final String f53169c;

    public e() {
        ThreadGroup threadGroup;
        SecurityManager securityManager = System.getSecurityManager();
        if (securityManager == null) {
            threadGroup = Thread.currentThread().getThreadGroup();
        } else {
            threadGroup = securityManager.getThreadGroup();
        }
        this.f53167a = threadGroup;
        this.f53169c = "lottie-" + f53166d.getAndIncrement() + "-thread-";
    }

    @Override // java.util.concurrent.ThreadFactory
    public Thread newThread(Runnable runnable) {
        ThreadGroup threadGroup = this.f53167a;
        Thread thread = new Thread(threadGroup, runnable, this.f53169c + this.f53168b.getAndIncrement(), 0L);
        thread.setDaemon(false);
        thread.setPriority(10);
        return thread;
    }
}
