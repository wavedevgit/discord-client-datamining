package uj;

import java.util.ArrayDeque;
import java.util.Queue;
import java.util.concurrent.Executor;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class n {

    /* renamed from: b  reason: collision with root package name */
    private boolean f51614b;

    /* renamed from: a  reason: collision with root package name */
    private final Object f51613a = new Object();

    /* renamed from: c  reason: collision with root package name */
    private final Queue f51615c = new ArrayDeque();

    /* renamed from: d  reason: collision with root package name */
    private final AtomicReference f51616d = new AtomicReference();

    /* JADX INFO: Access modifiers changed from: private */
    public final void d() {
        synchronized (this.f51613a) {
            try {
                if (this.f51615c.isEmpty()) {
                    this.f51614b = false;
                    return;
                }
                h0 h0Var = (h0) this.f51615c.remove();
                e(h0Var.f51574a, h0Var.f51575b);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final void e(Executor executor, final Runnable runnable) {
        try {
            executor.execute(new Runnable() { // from class: uj.f0
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
        synchronized (this.f51613a) {
            try {
                if (this.f51614b) {
                    this.f51615c.add(new h0(executor, runnable, null));
                    return;
                }
                this.f51614b = true;
                e(executor, runnable);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
