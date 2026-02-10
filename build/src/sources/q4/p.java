package q4;

import java.util.ArrayDeque;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p implements r4.a {

    /* renamed from: e  reason: collision with root package name */
    private final Executor f45264e;

    /* renamed from: i  reason: collision with root package name */
    private Runnable f45265i;

    /* renamed from: d  reason: collision with root package name */
    private final ArrayDeque f45263d = new ArrayDeque();

    /* renamed from: o  reason: collision with root package name */
    final Object f45266o = new Object();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final p f45267d;

        /* renamed from: e  reason: collision with root package name */
        final Runnable f45268e;

        a(p pVar, Runnable runnable) {
            this.f45267d = pVar;
            this.f45268e = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f45268e.run();
                synchronized (this.f45267d.f45266o) {
                    this.f45267d.a();
                }
            } catch (Throwable th2) {
                synchronized (this.f45267d.f45266o) {
                    this.f45267d.a();
                    throw th2;
                }
            }
        }
    }

    public p(Executor executor) {
        this.f45264e = executor;
    }

    void a() {
        Runnable runnable = (Runnable) this.f45263d.poll();
        this.f45265i = runnable;
        if (runnable != null) {
            this.f45264e.execute(runnable);
        }
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        synchronized (this.f45266o) {
            try {
                this.f45263d.add(new a(this, runnable));
                if (this.f45265i == null) {
                    a();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // r4.a
    public boolean r1() {
        boolean z10;
        synchronized (this.f45266o) {
            z10 = !this.f45263d.isEmpty();
        }
        return z10;
    }
}
