package c0;

import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadFactory;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e implements Executor {

    /* renamed from: e  reason: collision with root package name */
    private static volatile Executor f7945e;

    /* renamed from: d  reason: collision with root package name */
    private final ExecutorService f7946d = Executors.newSingleThreadExecutor(new a());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements ThreadFactory {
        a() {
        }

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable runnable) {
            Thread thread = new Thread(runnable);
            thread.setPriority(10);
            thread.setName("CameraX-camerax_high_priority");
            return thread;
        }
    }

    e() {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Executor a() {
        if (f7945e != null) {
            return f7945e;
        }
        synchronized (e.class) {
            try {
                if (f7945e == null) {
                    f7945e = new e();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f7945e;
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        this.f7946d.execute(runnable);
    }
}
