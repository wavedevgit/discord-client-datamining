package b0;

import android.os.Handler;
import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class l {

    /* renamed from: a  reason: collision with root package name */
    private static volatile Handler f6188a;

    public static Handler a() {
        if (f6188a != null) {
            return f6188a;
        }
        synchronized (l.class) {
            try {
                if (f6188a == null) {
                    f6188a = w1.g.a(Looper.getMainLooper());
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f6188a;
    }
}
