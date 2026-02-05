package q4;

import java.util.ArrayDeque;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p implements r4.a {

    /* renamed from: e  reason: collision with root package name */
    private final Executor f47413e;

    /* renamed from: i  reason: collision with root package name */
    private Runnable f47414i;

    /* renamed from: d  reason: collision with root package name */
    private final ArrayDeque f47412d = new ArrayDeque();

    /* renamed from: o  reason: collision with root package name */
    final Object f47415o = new Object();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final p f47416d;

        /* renamed from: e  reason: collision with root package name */
        final Runnable f47417e;

        a(p pVar, Runnable runnable) {
            this.f47416d = pVar;
            this.f47417e = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f47417e.run();
                synchronized (this.f47416d.f47415o) {
                    this.f47416d.a();
                }
            } catch (Throwable th2) {
                synchronized (this.f47416d.f47415o) {
                    this.f47416d.a();
                    throw th2;
                }
            }
        }
    }

    public p(Executor executor) {
        this.f47413e = executor;
    }

    void a() {
        Runnable runnable = (Runnable) this.f47412d.poll();
        this.f47414i = runnable;
        if (runnable != null) {
            this.f47413e.execute(runnable);
        }
    }

    @Override // r4.a
    public boolean e1() {
        boolean z10;
        synchronized (this.f47415o) {
            z10 = !this.f47412d.isEmpty();
        }
        return z10;
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        synchronized (this.f47415o) {
            try {
                this.f47412d.add(new a(this, runnable));
                if (this.f47414i == null) {
                    a();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
