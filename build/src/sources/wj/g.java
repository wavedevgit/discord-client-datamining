package wj;

import android.os.Handler;
import android.os.HandlerThread;
import android.os.Looper;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.Callable;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g {

    /* renamed from: b  reason: collision with root package name */
    private static final Object f52784b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private static g f52785c;

    /* renamed from: a  reason: collision with root package name */
    private final Handler f52786a;

    private g(Looper looper) {
        this.f52786a = new ng.a(looper);
    }

    public static g a() {
        g gVar;
        synchronized (f52784b) {
            try {
                if (f52785c == null) {
                    HandlerThread handlerThread = new HandlerThread("MLHandler", 9);
                    handlerThread.start();
                    f52785c = new g(handlerThread.getLooper());
                }
                gVar = f52785c;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return gVar;
    }

    public static Executor d() {
        return t.f52836d;
    }

    public Task b(final Callable callable) {
        final zg.k kVar = new zg.k();
        c(new Runnable() { // from class: wj.s
            @Override // java.lang.Runnable
            public final void run() {
                Callable callable2 = callable;
                zg.k kVar2 = kVar;
                try {
                    kVar2.c(callable2.call());
                } catch (sj.a e10) {
                    kVar2.b(e10);
                } catch (Exception e11) {
                    kVar2.b(new sj.a("Internal error has occurred when executing ML Kit tasks", 13, e11));
                }
            }
        });
        return kVar.a();
    }

    public void c(Runnable runnable) {
        d().execute(runnable);
    }
}
