package q4;

import java.util.ArrayDeque;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p implements r4.a {

    /* renamed from: e  reason: collision with root package name */
    private final Executor f46461e;

    /* renamed from: i  reason: collision with root package name */
    private Runnable f46462i;

    /* renamed from: d  reason: collision with root package name */
    private final ArrayDeque f46460d = new ArrayDeque();

    /* renamed from: o  reason: collision with root package name */
    final Object f46463o = new Object();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final p f46464d;

        /* renamed from: e  reason: collision with root package name */
        final Runnable f46465e;

        a(p pVar, Runnable runnable) {
            this.f46464d = pVar;
            this.f46465e = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f46465e.run();
                synchronized (this.f46464d.f46463o) {
                    this.f46464d.a();
                }
            } catch (Throwable th2) {
                synchronized (this.f46464d.f46463o) {
                    this.f46464d.a();
                    throw th2;
                }
            }
        }
    }

    public p(Executor executor) {
        this.f46461e = executor;
    }

    void a() {
        Runnable runnable = (Runnable) this.f46460d.poll();
        this.f46462i = runnable;
        if (runnable != null) {
            this.f46461e.execute(runnable);
        }
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        synchronized (this.f46463o) {
            try {
                this.f46460d.add(new a(this, runnable));
                if (this.f46462i == null) {
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
        synchronized (this.f46463o) {
            z10 = !this.f46460d.isEmpty();
        }
        return z10;
    }
}
