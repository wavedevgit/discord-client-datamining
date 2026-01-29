package pj;

import java.util.ArrayDeque;
import java.util.Queue;
import java.util.concurrent.Executor;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class n {

    /* renamed from: b  reason: collision with root package name */
    private boolean f46033b;

    /* renamed from: a  reason: collision with root package name */
    private final Object f46032a = new Object();

    /* renamed from: c  reason: collision with root package name */
    private final Queue f46034c = new ArrayDeque();

    /* renamed from: d  reason: collision with root package name */
    private final AtomicReference f46035d = new AtomicReference();

    /* JADX INFO: Access modifiers changed from: private */
    public final void d() {
        synchronized (this.f46032a) {
            try {
                if (this.f46034c.isEmpty()) {
                    this.f46033b = false;
                    return;
                }
                h0 h0Var = (h0) this.f46034c.remove();
                e(h0Var.f45993a, h0Var.f45994b);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final void e(Executor executor, final Runnable runnable) {
        try {
            executor.execute(new Runnable() { // from class: pj.f0
                @Override // java.lang.Runnable
                public final void run() {
                    j0 j0Var = new j0(n.this, null);
                    try {
                        runnable.run();
                        j0Var.close();
                    } catch (Throwable th2) {
                        try {
                            j0Var.close();
                        } catch (Throwable th3) {
                            th2.addSuppressed(th3);
                        }
                        throw th2;
                    }
                }
            });
        } catch (RejectedExecutionException unused) {
            d();
        }
    }

    public void a(Executor executor, Runnable runnable) {
        synchronized (this.f46032a) {
            try {
                if (this.f46033b) {
                    this.f46034c.add(new h0(executor, runnable, null));
                    return;
                }
                this.f46033b = true;
                e(executor, runnable);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
