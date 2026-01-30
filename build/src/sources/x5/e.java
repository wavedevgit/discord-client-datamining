package x5;

import java.util.concurrent.ThreadFactory;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements ThreadFactory {

    /* renamed from: d  reason: collision with root package name */
    private static final AtomicInteger f53237d = new AtomicInteger(1);

    /* renamed from: a  reason: collision with root package name */
    private final ThreadGroup f53238a;

    /* renamed from: b  reason: collision with root package name */
    private final AtomicInteger f53239b = new AtomicInteger(1);

    /* renamed from: c  reason: collision with root package name */
    private final String f53240c;

    public e() {
        ThreadGroup threadGroup;
        SecurityManager securityManager = System.getSecurityManager();
        if (securityManager == null) {
            threadGroup = Thread.currentThread().getThreadGroup();
        } else {
            threadGroup = securityManager.getThreadGroup();
        }
        this.f53238a = threadGroup;
        this.f53240c = "lottie-" + f53237d.getAndIncrement() + "-thread-";
    }

    @Override // java.util.concurrent.ThreadFactory
    public Thread newThread(Runnable runnable) {
        ThreadGroup threadGroup = this.f53238a;
        Thread thread = new Thread(threadGroup, runnable, this.f53240c + this.f53239b.getAndIncrement(), 0L);
        thread.setDaemon(false);
        thread.setPriority(10);
        return thread;
    }
}
