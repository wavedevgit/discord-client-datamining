package c0;

import java.util.Locale;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class f implements Executor {

    /* renamed from: e  reason: collision with root package name */
    private static volatile Executor f6904e;

    /* renamed from: d  reason: collision with root package name */
    private final ExecutorService f6905d = Executors.newFixedThreadPool(2, new a());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements ThreadFactory {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicInteger f6906a = new AtomicInteger(0);

        a() {
        }

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable runnable) {
            Thread thread = new Thread(runnable);
            thread.setName(String.format(Locale.US, "CameraX-camerax_io_%d", Integer.valueOf(this.f6906a.getAndIncrement())));
            return thread;
        }
    }

    f() {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Executor a() {
        if (f6904e != null) {
            return f6904e;
        }
        synchronized (f.class) {
            try {
                if (f6904e == null) {
                    f6904e = new f();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f6904e;
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        this.f6905d.execute(runnable);
    }
}
