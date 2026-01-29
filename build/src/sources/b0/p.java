package b0;

import android.os.Handler;
import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class p {
    public static void a() {
        b2.e.j(c(), "Not in application's main thread");
    }

    private static Handler b() {
        return new Handler(Looper.getMainLooper());
    }

    public static boolean c() {
        if (Looper.getMainLooper().getThread() == Thread.currentThread()) {
            return true;
        }
        return false;
    }

    public static void d(Runnable runnable) {
        if (c()) {
            runnable.run();
        } else {
            b2.e.j(b().post(runnable), "Unable to post to main thread");
        }
    }
}
