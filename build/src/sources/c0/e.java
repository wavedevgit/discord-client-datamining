package c0;

import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadFactory;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e implements Executor {

    /* renamed from: e  reason: collision with root package name */
    private static volatile Executor f7164e;

    /* renamed from: d  reason: collision with root package name */
    private final ExecutorService f7165d = Executors.newSingleThreadExecutor(new a());

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
        if (f7164e != null) {
            return f7164e;
        }
        synchronized (e.class) {
            try {
                if (f7164e == null) {
                    f7164e = new e();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f7164e;
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        this.f7165d.execute(runnable);
    }
}
