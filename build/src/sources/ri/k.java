package ri;

import android.os.Handler;
import android.os.Looper;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public enum k implements Executor {
    INSTANCE;
    

    /* renamed from: e  reason: collision with root package name */
    private static final Handler f48317e = new Handler(Looper.getMainLooper());

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        f48317e.post(runnable);
    }
}
