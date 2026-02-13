package q4;

import java.util.ArrayDeque;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p implements r4.a {

    /* renamed from: e  reason: collision with root package name */
    private final Executor f44501e;

    /* renamed from: i  reason: collision with root package name */
    private Runnable f44502i;

    /* renamed from: d  reason: collision with root package name */
    private final ArrayDeque f44500d = new ArrayDeque();

    /* renamed from: o  reason: collision with root package name */
    final Object f44503o = new Object();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final p f44504d;

        /* renamed from: e  reason: collision with root package name */
        final Runnable f44505e;

        a(p pVar, Runnable runnable) {
            this.f44504d = pVar;
            this.f44505e = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f44505e.run();
                synchronized (this.f44504d.f44503o) {
                    this.f44504d.a();
                }
            } catch (Throwable th2) {
                synchronized (this.f44504d.f44503o) {
                    this.f44504d.a();
                    throw th2;
                }
            }
        }
    }

    public p(Executor executor) {
        this.f44501e = executor;
    }

    @Override // r4.a
    public boolean V0() {
        boolean z10;
        synchronized (this.f44503o) {
            z10 = !this.f44500d.isEmpty();
        }
        return z10;
    }

    void a() {
        Runnable runnable = (Runnable) this.f44500d.poll();
        this.f44502i = runnable;
        if (runnable != null) {
            this.f44501e.execute(runnable);
        }
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        synchronized (this.f44503o) {
            try {
                this.f44500d.add(new a(this, runnable));
                if (this.f44502i == null) {
                    a();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
