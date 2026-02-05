package b0;

import android.os.Handler;
import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class l {

    /* renamed from: a  reason: collision with root package name */
    private static volatile Handler f6081a;

    public static Handler a() {
        if (f6081a != null) {
            return f6081a;
        }
        synchronized (l.class) {
            try {
                if (f6081a == null) {
                    f6081a = w1.g.a(Looper.getMainLooper());
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f6081a;
    }
}
