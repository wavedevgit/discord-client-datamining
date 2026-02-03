package q4;

import java.util.ArrayDeque;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p implements r4.a {

    /* renamed from: e  reason: collision with root package name */
    private final Executor f47349e;

    /* renamed from: i  reason: collision with root package name */
    private Runnable f47350i;

    /* renamed from: d  reason: collision with root package name */
    private final ArrayDeque f47348d = new ArrayDeque();

    /* renamed from: o  reason: collision with root package name */
    final Object f47351o = new Object();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final p f47352d;

        /* renamed from: e  reason: collision with root package name */
        final Runnable f47353e;

        a(p pVar, Runnable runnable) {
            this.f47352d = pVar;
            this.f47353e = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f47353e.run();
                synchronized (this.f47352d.f47351o) {
                    this.f47352d.a();
                }
            } catch (Throwable th2) {
                synchronized (this.f47352d.f47351o) {
                    this.f47352d.a();
                    throw th2;
                }
            }
        }
    }

    public p(Executor executor) {
        this.f47349e = executor;
    }

    @Override // r4.a
    public boolean Z0() {
        boolean z10;
        synchronized (this.f47351o) {
            z10 = !this.f47348d.isEmpty();
        }
        return z10;
    }

    void a() {
        Runnable runnable = (Runnable) this.f47348d.poll();
        this.f47350i = runnable;
        if (runnable != null) {
            this.f47349e.execute(runnable);
        }
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        synchronized (this.f47351o) {
            try {
                this.f47348d.add(new a(this, runnable));
                if (this.f47350i == null) {
                    a();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
