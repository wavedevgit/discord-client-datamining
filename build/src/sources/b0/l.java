package b0;

import android.os.Handler;
import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class l {

    /* renamed from: a  reason: collision with root package name */
    private static volatile Handler f6374a;

    public static Handler a() {
        if (f6374a != null) {
            return f6374a;
        }
        synchronized (l.class) {
            try {
                if (f6374a == null) {
                    f6374a = w1.g.a(Looper.getMainLooper());
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f6374a;
    }
}
