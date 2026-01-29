package c0;

import android.os.Handler;
import java.util.concurrent.Executor;
import java.util.concurrent.ScheduledExecutorService;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {
    public static Executor a() {
        return b.a();
    }

    public static Executor b() {
        return e.a();
    }

    public static Executor c() {
        return f.a();
    }

    public static ScheduledExecutorService d() {
        return g.a();
    }

    public static ScheduledExecutorService e(Handler handler) {
        return new d(handler);
    }

    public static Executor f(Executor executor) {
        return new h(executor);
    }
}
