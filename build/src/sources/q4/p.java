package q4;

import java.util.ArrayDeque;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p implements r4.a {

    /* renamed from: e  reason: collision with root package name */
    private final Executor f46509e;

    /* renamed from: i  reason: collision with root package name */
    private Runnable f46510i;

    /* renamed from: d  reason: collision with root package name */
    private final ArrayDeque f46508d = new ArrayDeque();

    /* renamed from: o  reason: collision with root package name */
    final Object f46511o = new Object();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final p f46512d;

        /* renamed from: e  reason: collision with root package name */
        final Runnable f46513e;

        a(p pVar, Runnable runnable) {
            this.f46512d = pVar;
            this.f46513e = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f46513e.run();
                synchronized (this.f46512d.f46511o) {
                    this.f46512d.a();
                }
            } catch (Throwable th2) {
                synchronized (this.f46512d.f46511o) {
                    this.f46512d.a();
                    throw th2;
                }
            }
        }
    }

    public p(Executor executor) {
        this.f46509e = executor;
    }

    void a() {
        Runnable runnable = (Runnable) this.f46508d.poll();
        this.f46510i = runnable;
        if (runnable != null) {
            this.f46509e.execute(runnable);
        }
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        synchronized (this.f46511o) {
            try {
                this.f46508d.add(new a(this, runnable));
                if (this.f46510i == null) {
                    a();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // r4.a
    public boolean w1() {
        boolean z10;
        synchronized (this.f46511o) {
            z10 = !this.f46508d.isEmpty();
        }
        return z10;
    }
}
