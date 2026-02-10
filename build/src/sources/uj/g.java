package uj;

import android.os.Handler;
import android.os.HandlerThread;
import android.os.Looper;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.Callable;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g {

    /* renamed from: b  reason: collision with root package name */
    private static final Object f51571b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private static g f51572c;

    /* renamed from: a  reason: collision with root package name */
    private final Handler f51573a;

    private g(Looper looper) {
        this.f51573a = new ng.a(looper);
    }

    public static g a() {
        g gVar;
        synchronized (f51571b) {
            try {
                if (f51572c == null) {
                    HandlerThread handlerThread = new HandlerThread("MLHandler", 9);
                    handlerThread.start();
                    f51572c = new g(handlerThread.getLooper());
                }
                gVar = f51572c;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return gVar;
    }

    public static Executor d() {
        return t.f51623d;
    }

    public Task b(final Callable callable) {
        final zg.k kVar = new zg.k();
        c(new Runnable() { // from class: uj.s
            @Override // java.lang.Runnable
            public final void run() {
                Callable callable2 = callable;
                zg.k kVar2 = kVar;
                try {
                    kVar2.c(callable2.call());
                } catch (qj.a e10) {
                    kVar2.b(e10);
                } catch (Exception e11) {
                    kVar2.b(new qj.a("Internal error has occurred when executing ML Kit tasks", 13, e11));
                }
            }
        });
        return kVar.a();
    }

    public void c(Runnable runnable) {
        d().execute(runnable);
    }
}
