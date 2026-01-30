package q4;

import java.util.ArrayDeque;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p implements r4.a {

    /* renamed from: e  reason: collision with root package name */
    private final Executor f46944e;

    /* renamed from: i  reason: collision with root package name */
    private Runnable f46945i;

    /* renamed from: d  reason: collision with root package name */
    private final ArrayDeque f46943d = new ArrayDeque();

    /* renamed from: o  reason: collision with root package name */
    final Object f46946o = new Object();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final p f46947d;

        /* renamed from: e  reason: collision with root package name */
        final Runnable f46948e;

        a(p pVar, Runnable runnable) {
            this.f46947d = pVar;
            this.f46948e = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f46948e.run();
                synchronized (this.f46947d.f46946o) {
                    this.f46947d.a();
                }
            } catch (Throwable th2) {
                synchronized (this.f46947d.f46946o) {
                    this.f46947d.a();
                    throw th2;
                }
            }
        }
    }

    public p(Executor executor) {
        this.f46944e = executor;
    }

    void a() {
        Runnable runnable = (Runnable) this.f46943d.poll();
        this.f46945i = runnable;
        if (runnable != null) {
            this.f46944e.execute(runnable);
        }
    }

    @Override // r4.a
    public boolean d1() {
        boolean z10;
        synchronized (this.f46946o) {
            z10 = !this.f46943d.isEmpty();
        }
        return z10;
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        synchronized (this.f46946o) {
            try {
                this.f46943d.add(new a(this, runnable));
                if (this.f46945i == null) {
                    a();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
