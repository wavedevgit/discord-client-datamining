package m8;

import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    protected final AtomicInteger f37845d = new AtomicInteger(0);

    public void a() {
        if (this.f37845d.compareAndSet(0, 2)) {
            d();
        }
    }

    protected abstract void b(Object obj);

    protected abstract Object c();

    protected abstract void d();

    protected abstract void e(Exception exc);

    protected abstract void f(Object obj);

    @Override // java.lang.Runnable
    public final void run() {
        if (!this.f37845d.compareAndSet(0, 1)) {
            return;
        }
        try {
            Object c10 = c();
            this.f37845d.set(3);
            try {
                f(c10);
            } finally {
                b(c10);
            }
        } catch (Exception e10) {
            this.f37845d.set(4);
            e(e10);
        }
    }
}
