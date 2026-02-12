package q4;

import java.util.ArrayDeque;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p implements r4.a {

    /* renamed from: e  reason: collision with root package name */
    private final Executor f43933e;

    /* renamed from: i  reason: collision with root package name */
    private Runnable f43934i;

    /* renamed from: d  reason: collision with root package name */
    private final ArrayDeque f43932d = new ArrayDeque();

    /* renamed from: o  reason: collision with root package name */
    final Object f43935o = new Object();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final p f43936d;

        /* renamed from: e  reason: collision with root package name */
        final Runnable f43937e;

        a(p pVar, Runnable runnable) {
            this.f43936d = pVar;
            this.f43937e = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f43937e.run();
                synchronized (this.f43936d.f43935o) {
                    this.f43936d.a();
                }
            } catch (Throwable th2) {
                synchronized (this.f43936d.f43935o) {
                    this.f43936d.a();
                    throw th2;
                }
            }
        }
    }

    public p(Executor executor) {
        this.f43933e = executor;
    }

    @Override // r4.a
    public boolean V0() {
        boolean z10;
        synchronized (this.f43935o) {
            z10 = !this.f43932d.isEmpty();
        }
        return z10;
    }

    void a() {
        Runnable runnable = (Runnable) this.f43932d.poll();
        this.f43934i = runnable;
        if (runnable != null) {
            this.f43933e.execute(runnable);
        }
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        synchronized (this.f43935o) {
            try {
                this.f43932d.add(new a(this, runnable));
                if (this.f43934i == null) {
                    a();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
