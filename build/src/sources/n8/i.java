package n8;

import android.os.Handler;
import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class i extends e {

    /* renamed from: e  reason: collision with root package name */
    private static i f36994e;

    private i() {
        super(new Handler(Looper.getMainLooper()));
    }

    public static i y() {
        if (f36994e == null) {
            f36994e = new i();
        }
        return f36994e;
    }

    @Override // n8.e, java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        if (a()) {
            runnable.run();
        } else {
            super.execute(runnable);
        }
    }
}
