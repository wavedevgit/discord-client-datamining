package se;

import android.util.Log;
import java.lang.Thread;
import java.util.concurrent.FutureTask;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i extends FutureTask {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ j f49484d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(j jVar, Runnable runnable, Object obj) {
        super(runnable, obj);
        this.f49484d = jVar;
    }

    @Override // java.util.concurrent.FutureTask
    protected final void setException(Throwable th2) {
        Thread.UncaughtExceptionHandler uncaughtExceptionHandler;
        uncaughtExceptionHandler = this.f49484d.f49485d.f49493f;
        if (uncaughtExceptionHandler != null) {
            uncaughtExceptionHandler.uncaughtException(Thread.currentThread(), th2);
        } else if (Log.isLoggable("GAv4", 6)) {
            String valueOf = String.valueOf(th2);
            StringBuilder sb2 = new StringBuilder(valueOf.length() + 37);
            sb2.append("MeasurementExecutor: job failed with ");
            sb2.append(valueOf);
            Log.e("GAv4", sb2.toString());
        }
        super.setException(th2);
    }
}
