package x5;

import java.util.concurrent.ThreadFactory;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements ThreadFactory {

    /* renamed from: d  reason: collision with root package name */
    private static final AtomicInteger f53163d = new AtomicInteger(1);

    /* renamed from: a  reason: collision with root package name */
    private final ThreadGroup f53164a;

    /* renamed from: b  reason: collision with root package name */
    private final AtomicInteger f53165b = new AtomicInteger(1);

    /* renamed from: c  reason: collision with root package name */
    private final String f53166c;

    public e() {
        ThreadGroup threadGroup;
        SecurityManager securityManager = System.getSecurityManager();
        if (securityManager == null) {
            threadGroup = Thread.currentThread().getThreadGroup();
        } else {
            threadGroup = securityManager.getThreadGroup();
        }
        this.f53164a = threadGroup;
        this.f53166c = "lottie-" + f53163d.getAndIncrement() + "-thread-";
    }

    @Override // java.util.concurrent.ThreadFactory
    public Thread newThread(Runnable runnable) {
        ThreadGroup threadGroup = this.f53164a;
        Thread thread = new Thread(threadGroup, runnable, this.f53166c + this.f53165b.getAndIncrement(), 0L);
        thread.setDaemon(false);
        thread.setPriority(10);
        return thread;
    }
}
