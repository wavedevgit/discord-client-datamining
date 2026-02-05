package sj;

import java.util.ArrayDeque;
import java.util.Queue;
import java.util.concurrent.Executor;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class n {

    /* renamed from: b  reason: collision with root package name */
    private boolean f49697b;

    /* renamed from: a  reason: collision with root package name */
    private final Object f49696a = new Object();

    /* renamed from: c  reason: collision with root package name */
    private final Queue f49698c = new ArrayDeque();

    /* renamed from: d  reason: collision with root package name */
    private final AtomicReference f49699d = new AtomicReference();

    /* JADX INFO: Access modifiers changed from: private */
    public final void d() {
        synchronized (this.f49696a) {
            try {
                if (this.f49698c.isEmpty()) {
                    this.f49697b = false;
                    return;
                }
                h0 h0Var = (h0) this.f49698c.remove();
                e(h0Var.f49657a, h0Var.f49658b);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final void e(Executor executor, final Runnable runnable) {
        try {
            executor.execute(new Runnable() { // from class: sj.f0
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
        synchronized (this.f49696a) {
            try {
                if (this.f49697b) {
                    this.f49698c.add(new h0(executor, runnable, null));
                    return;
                }
                this.f49697b = true;
                e(executor, runnable);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
