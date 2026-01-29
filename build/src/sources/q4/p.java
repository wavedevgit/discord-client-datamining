package q4;

import java.util.ArrayDeque;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p implements r4.a {

    /* renamed from: e  reason: collision with root package name */
    private final Executor f46928e;

    /* renamed from: i  reason: collision with root package name */
    private Runnable f46929i;

    /* renamed from: d  reason: collision with root package name */
    private final ArrayDeque f46927d = new ArrayDeque();

    /* renamed from: o  reason: collision with root package name */
    final Object f46930o = new Object();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final p f46931d;

        /* renamed from: e  reason: collision with root package name */
        final Runnable f46932e;

        a(p pVar, Runnable runnable) {
            this.f46931d = pVar;
            this.f46932e = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f46932e.run();
                synchronized (this.f46931d.f46930o) {
                    this.f46931d.a();
                }
            } catch (Throwable th2) {
                synchronized (this.f46931d.f46930o) {
                    this.f46931d.a();
                    throw th2;
                }
            }
        }
    }

    public p(Executor executor) {
        this.f46928e = executor;
    }

    void a() {
        Runnable runnable = (Runnable) this.f46927d.poll();
        this.f46929i = runnable;
        if (runnable != null) {
            this.f46928e.execute(runnable);
        }
    }

    @Override // r4.a
    public boolean d1() {
        boolean z10;
        synchronized (this.f46930o) {
            z10 = !this.f46927d.isEmpty();
        }
        return z10;
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        synchronized (this.f46930o) {
            try {
                this.f46927d.add(new a(this, runnable));
                if (this.f46929i == null) {
                    a();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
