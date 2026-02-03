package c0;

import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b implements Executor {

    /* renamed from: d  reason: collision with root package name */
    private static volatile b f6888d;

    b() {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Executor a() {
        if (f6888d != null) {
            return f6888d;
        }
        synchronized (b.class) {
            try {
                if (f6888d == null) {
                    f6888d = new b();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f6888d;
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        runnable.run();
    }
}
