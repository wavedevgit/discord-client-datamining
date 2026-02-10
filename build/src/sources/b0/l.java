package b0;

import android.os.Handler;
import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class l {

    /* renamed from: a  reason: collision with root package name */
    private static volatile Handler f6403a;

    public static Handler a() {
        if (f6403a != null) {
            return f6403a;
        }
        synchronized (l.class) {
            try {
                if (f6403a == null) {
                    f6403a = w1.g.a(Looper.getMainLooper());
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f6403a;
    }
}
