package t9;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadFactory;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f48636a = new b();

    /* renamed from: b  reason: collision with root package name */
    private static final ThreadFactory f48637b;

    /* renamed from: c  reason: collision with root package name */
    private static final ExecutorService f48638c;

    static {
        ThreadFactory threadFactory = new ThreadFactory() { // from class: t9.a
            @Override // java.util.concurrent.ThreadFactory
            public final Thread newThread(Runnable runnable) {
                Thread c10;
                c10 = b.c(runnable);
                return c10;
            }
        };
        f48637b = threadFactory;
        f48638c = Executors.newCachedThreadPool(threadFactory);
    }

    private b() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Thread c(Runnable runnable) {
        Thread thread = new Thread(runnable);
        thread.setPriority(1);
        return thread;
    }

    public final void b(Runnable task) {
        Intrinsics.checkNotNullParameter(task, "task");
        f48638c.execute(task);
    }
}
