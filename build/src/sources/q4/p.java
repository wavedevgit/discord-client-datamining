package q4;

import java.util.ArrayDeque;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p implements r4.a {

    /* renamed from: e  reason: collision with root package name */
    private final Executor f47199e;

    /* renamed from: i  reason: collision with root package name */
    private Runnable f47200i;

    /* renamed from: d  reason: collision with root package name */
    private final ArrayDeque f47198d = new ArrayDeque();

    /* renamed from: o  reason: collision with root package name */
    final Object f47201o = new Object();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final p f47202d;

        /* renamed from: e  reason: collision with root package name */
        final Runnable f47203e;

        a(p pVar, Runnable runnable) {
            this.f47202d = pVar;
            this.f47203e = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f47203e.run();
                synchronized (this.f47202d.f47201o) {
                    this.f47202d.a();
                }
            } catch (Throwable th2) {
                synchronized (this.f47202d.f47201o) {
                    this.f47202d.a();
                    throw th2;
                }
            }
        }
    }

    public p(Executor executor) {
        this.f47199e = executor;
    }

    void a() {
        Runnable runnable = (Runnable) this.f47198d.poll();
        this.f47200i = runnable;
        if (runnable != null) {
            this.f47199e.execute(runnable);
        }
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        synchronized (this.f47201o) {
            try {
                this.f47198d.add(new a(this, runnable));
                if (this.f47200i == null) {
                    a();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // r4.a
    public boolean x1() {
        boolean z10;
        synchronized (this.f47201o) {
            z10 = !this.f47198d.isEmpty();
        }
        return z10;
    }
}
