package c0;

import android.os.Handler;
import android.os.Looper;
import java.util.concurrent.ScheduledExecutorService;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class g {

    /* renamed from: a  reason: collision with root package name */
    private static volatile ScheduledExecutorService f7952a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public static ScheduledExecutorService a() {
        if (f7952a != null) {
            return f7952a;
        }
        synchronized (g.class) {
            try {
                if (f7952a == null) {
                    f7952a = new d(new Handler(Looper.getMainLooper()));
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f7952a;
    }
}
