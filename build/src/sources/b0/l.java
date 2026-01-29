package b0;

import android.os.Handler;
import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class l {

    /* renamed from: a  reason: collision with root package name */
    private static volatile Handler f7137a;

    public static Handler a() {
        if (f7137a != null) {
            return f7137a;
        }
        synchronized (l.class) {
            try {
                if (f7137a == null) {
                    f7137a = w1.g.a(Looper.getMainLooper());
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f7137a;
    }
}
