package tj;

import android.os.Handler;
import android.os.HandlerThread;
import android.os.Looper;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.Callable;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g {

    /* renamed from: b  reason: collision with root package name */
    private static final Object f50618b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private static g f50619c;

    /* renamed from: a  reason: collision with root package name */
    private final Handler f50620a;

    private g(Looper looper) {
        this.f50620a = new mg.a(looper);
    }

    public static g a() {
        g gVar;
        synchronized (f50618b) {
            try {
                if (f50619c == null) {
                    HandlerThread handlerThread = new HandlerThread("MLHandler", 9);
                    handlerThread.start();
                    f50619c = new g(handlerThread.getLooper());
                }
                gVar = f50619c;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return gVar;
    }

    public static Executor d() {
        return t.f50670d;
    }

    public Task b(final Callable callable) {
        final yg.k kVar = new yg.k();
        c(new Runnable() { // from class: tj.s
            @Override // java.lang.Runnable
            public final void run() {
                Callable callable2 = callable;
                yg.k kVar2 = kVar;
                try {
                    kVar2.c(callable2.call());
                } catch (pj.a e10) {
                    kVar2.b(e10);
                } catch (Exception e11) {
                    kVar2.b(new pj.a("Internal error has occurred when executing ML Kit tasks", 13, e11));
                }
            }
        });
        return kVar.a();
    }

    public void c(Runnable runnable) {
        d().execute(runnable);
    }
}
