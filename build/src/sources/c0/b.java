package c0;

import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b implements Executor {

    /* renamed from: d  reason: collision with root package name */
    private static volatile b f7151d;

    b() {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Executor a() {
        if (f7151d != null) {
            return f7151d;
        }
        synchronized (b.class) {
            try {
                if (f7151d == null) {
                    f7151d = new b();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f7151d;
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        runnable.run();
    }
}
