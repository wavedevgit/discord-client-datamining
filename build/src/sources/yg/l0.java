package yg;

import android.os.Handler;
import android.os.Looper;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class l0 implements Executor {

    /* renamed from: d  reason: collision with root package name */
    private final Handler f55338d = new tg.a(Looper.getMainLooper());

    @Override // java.util.concurrent.Executor
    public final void execute(Runnable runnable) {
        this.f55338d.post(runnable);
    }
}
