package m8;

import android.os.Handler;
import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class i extends e {

    /* renamed from: e  reason: collision with root package name */
    private static i f36883e;

    private i() {
        super(new Handler(Looper.getMainLooper()));
    }

    public static i y() {
        if (f36883e == null) {
            f36883e = new i();
        }
        return f36883e;
    }

    @Override // m8.e, java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        if (a()) {
            runnable.run();
        } else {
            super.execute(runnable);
        }
    }
}
