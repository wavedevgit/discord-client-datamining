package pj;

import android.os.Handler;
import android.os.HandlerThread;
import android.os.Looper;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.Callable;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g {

    /* renamed from: b  reason: collision with root package name */
    private static final Object f46080b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private static g f46081c;

    /* renamed from: a  reason: collision with root package name */
    private final Handler f46082a;

    private g(Looper looper) {
        this.f46082a = new lg.a(looper);
    }

    public static g a() {
        g gVar;
        synchronized (f46080b) {
            try {
                if (f46081c == null) {
                    HandlerThread handlerThread = new HandlerThread("MLHandler", 9);
                    handlerThread.start();
                    f46081c = new g(handlerThread.getLooper());
                }
                gVar = f46081c;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return gVar;
    }

    public static Executor d() {
        return t.f46132d;
    }

    public Task b(final Callable callable) {
        final wg.k kVar = new wg.k();
        c(new Runnable() { // from class: pj.s
            @Override // java.lang.Runnable
            public final void run() {
                Callable callable2 = callable;
                wg.k kVar2 = kVar;
                try {
                    kVar2.c(callable2.call());
                } catch (lj.a e10) {
                    kVar2.b(e10);
                } catch (Exception e11) {
                    kVar2.b(new lj.a("Internal error has occurred when executing ML Kit tasks", 13, e11));
                }
            }
        });
        return kVar.a();
    }

    public void c(Runnable runnable) {
        d().execute(runnable);
    }
}
