package q4;

import java.util.ArrayDeque;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p implements r4.a {

    /* renamed from: e  reason: collision with root package name */
    private final Executor f43932e;

    /* renamed from: i  reason: collision with root package name */
    private Runnable f43933i;

    /* renamed from: d  reason: collision with root package name */
    private final ArrayDeque f43931d = new ArrayDeque();

    /* renamed from: o  reason: collision with root package name */
    final Object f43934o = new Object();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final p f43935d;

        /* renamed from: e  reason: collision with root package name */
        final Runnable f43936e;

        a(p pVar, Runnable runnable) {
            this.f43935d = pVar;
            this.f43936e = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f43936e.run();
                synchronized (this.f43935d.f43934o) {
                    this.f43935d.a();
                }
            } catch (Throwable th2) {
                synchronized (this.f43935d.f43934o) {
                    this.f43935d.a();
                    throw th2;
                }
            }
        }
    }

    public p(Executor executor) {
        this.f43932e = executor;
    }

    @Override // r4.a
    public boolean V0() {
        boolean z10;
        synchronized (this.f43934o) {
            z10 = !this.f43931d.isEmpty();
        }
        return z10;
    }

    void a() {
        Runnable runnable = (Runnable) this.f43931d.poll();
        this.f43933i = runnable;
        if (runnable != null) {
            this.f43932e.execute(runnable);
        }
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        synchronized (this.f43934o) {
            try {
                this.f43931d.add(new a(this, runnable));
                if (this.f43933i == null) {
                    a();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
