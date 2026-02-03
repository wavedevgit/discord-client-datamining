package b0;

import android.os.Handler;
import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class l {

    /* renamed from: a  reason: collision with root package name */
    private static volatile Handler f6234a;

    public static Handler a() {
        if (f6234a != null) {
            return f6234a;
        }
        synchronized (l.class) {
            try {
                if (f6234a == null) {
                    f6234a = w1.g.a(Looper.getMainLooper());
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f6234a;
    }
}
