package sj;

import android.os.Handler;
import android.os.HandlerThread;
import android.os.Looper;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.Callable;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g {

    /* renamed from: b  reason: collision with root package name */
    private static final Object f49654b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private static g f49655c;

    /* renamed from: a  reason: collision with root package name */
    private final Handler f49656a;

    private g(Looper looper) {
        this.f49656a = new lg.a(looper);
    }

    public static g a() {
        g gVar;
        synchronized (f49654b) {
            try {
                if (f49655c == null) {
                    HandlerThread handlerThread = new HandlerThread("MLHandler", 9);
                    handlerThread.start();
                    f49655c = new g(handlerThread.getLooper());
                }
                gVar = f49655c;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return gVar;
    }

    public static Executor d() {
        return t.f49706d;
    }

    public Task b(final Callable callable) {
        final xg.k kVar = new xg.k();
        c(new Runnable() { // from class: sj.s
            @Override // java.lang.Runnable
            public final void run() {
                Callable callable2 = callable;
                xg.k kVar2 = kVar;
                try {
                    kVar2.c(callable2.call());
                } catch (oj.a e10) {
                    kVar2.b(e10);
                } catch (Exception e11) {
                    kVar2.b(new oj.a("Internal error has occurred when executing ML Kit tasks", 13, e11));
                }
            }
        });
        return kVar.a();
    }

    public void c(Runnable runnable) {
        d().execute(runnable);
    }
}
