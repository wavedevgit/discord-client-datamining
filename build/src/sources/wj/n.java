package wj;

import java.util.ArrayDeque;
import java.util.Queue;
import java.util.concurrent.Executor;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class n {

    /* renamed from: b  reason: collision with root package name */
    private boolean f52827b;

    /* renamed from: a  reason: collision with root package name */
    private final Object f52826a = new Object();

    /* renamed from: c  reason: collision with root package name */
    private final Queue f52828c = new ArrayDeque();

    /* renamed from: d  reason: collision with root package name */
    private final AtomicReference f52829d = new AtomicReference();

    /* JADX INFO: Access modifiers changed from: private */
    public final void d() {
        synchronized (this.f52826a) {
            try {
                if (this.f52828c.isEmpty()) {
                    this.f52827b = false;
                    return;
                }
                h0 h0Var = (h0) this.f52828c.remove();
                e(h0Var.f52787a, h0Var.f52788b);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final void e(Executor executor, final Runnable runnable) {
        try {
            executor.execute(new Runnable() { // from class: wj.f0
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
        synchronized (this.f52826a) {
            try {
                if (this.f52827b) {
                    this.f52828c.add(new h0(executor, runnable, null));
                    return;
                }
                this.f52827b = true;
                e(executor, runnable);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
