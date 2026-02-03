package u4;

import java.util.Locale;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b {

    /* renamed from: d  reason: collision with root package name */
    private static final b f50110d = new b();

    /* renamed from: a  reason: collision with root package name */
    private final ExecutorService f50111a;

    /* renamed from: b  reason: collision with root package name */
    private final ScheduledExecutorService f50112b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f50113c;

    /* renamed from: u4.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class ExecutorC0659b implements Executor {

        /* renamed from: d  reason: collision with root package name */
        private ThreadLocal f50114d;

        private ExecutorC0659b() {
            this.f50114d = new ThreadLocal();
        }

        private int a() {
            Integer num = (Integer) this.f50114d.get();
            if (num == null) {
                num = 0;
            }
            int intValue = num.intValue() - 1;
            if (intValue == 0) {
                this.f50114d.remove();
                return intValue;
            }
            this.f50114d.set(Integer.valueOf(intValue));
            return intValue;
        }

        private int b() {
            Integer num = (Integer) this.f50114d.get();
            if (num == null) {
                num = 0;
            }
            int intValue = num.intValue() + 1;
            this.f50114d.set(Integer.valueOf(intValue));
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
        this.f50111a = b10;
        this.f50112b = Executors.newSingleThreadScheduledExecutor();
        this.f50113c = new ExecutorC0659b();
    }

    public static ExecutorService a() {
        return f50110d.f50111a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Executor b() {
        return f50110d.f50113c;
    }

    private static boolean c() {
        String property = System.getProperty("java.runtime.name");
        if (property == null) {
            return false;
        }
        return property.toLowerCase(Locale.US).contains("android");
    }
}
