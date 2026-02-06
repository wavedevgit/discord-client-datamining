package u4;

import java.util.Locale;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b {

    /* renamed from: d  reason: collision with root package name */
    private static final b f51207d = new b();

    /* renamed from: a  reason: collision with root package name */
    private final ExecutorService f51208a;

    /* renamed from: b  reason: collision with root package name */
    private final ScheduledExecutorService f51209b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f51210c;

    /* renamed from: u4.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class ExecutorC0676b implements Executor {

        /* renamed from: d  reason: collision with root package name */
        private ThreadLocal f51211d;

        private ExecutorC0676b() {
            this.f51211d = new ThreadLocal();
        }

        private int a() {
            Integer num = (Integer) this.f51211d.get();
            if (num == null) {
                num = 0;
            }
            int intValue = num.intValue() - 1;
            if (intValue == 0) {
                this.f51211d.remove();
                return intValue;
            }
            this.f51211d.set(Integer.valueOf(intValue));
            return intValue;
        }

        private int b() {
            Integer num = (Integer) this.f51211d.get();
            if (num == null) {
                num = 0;
            }
            int intValue = num.intValue() + 1;
            this.f51211d.set(Integer.valueOf(intValue));
            return intValue;
        }

        @Override // java.util.concurrent.Executor
        public void execute(Runnable runnable) {
            try {
                if (b() <= 15) {
                    runnable.run();
                } else {
                    b.a().execute(runnable);
                }
                a();
            } catch (Throwable th2) {
                a();
                throw th2;
            }
        }
    }

    private b() {
        ExecutorService b10;
        if (!c()) {
            b10 = Executors.newCachedThreadPool();
        } else {
            b10 = u4.a.b();
        }
        this.f51208a = b10;
        this.f51209b = Executors.newSingleThreadScheduledExecutor();
        this.f51210c = new ExecutorC0676b();
    }

    public static ExecutorService a() {
        return f51207d.f51208a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Executor b() {
        return f51207d.f51210c;
    }

    private static boolean c() {
        String property = System.getProperty("java.runtime.name");
        if (property == null) {
            return false;
        }
        return property.toLowerCase(Locale.US).contains("android");
    }
}
