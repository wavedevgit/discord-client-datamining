package oc;

import android.os.Handler;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final /* synthetic */ class s implements Executor {

    /* renamed from: d  reason: collision with root package name */
    public final /* synthetic */ Handler f38820d;

    @Override // java.util.concurrent.Executor
    public final void execute(Runnable runnable) {
        this.f38820d.post(runnable);
    }
}
