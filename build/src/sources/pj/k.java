package pj;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Callable;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    protected final n f46001a;

    /* renamed from: b  reason: collision with root package name */
    private final AtomicInteger f46002b;

    /* renamed from: c  reason: collision with root package name */
    private final AtomicBoolean f46003c;

    public k() {
        this.f46002b = new AtomicInteger(0);
        this.f46003c = new AtomicBoolean(false);
        this.f46001a = new n();
    }

    public Task a(final Executor executor, final Callable callable, final wg.a aVar) {
        boolean z10;
        if (this.f46002b.get() > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        gf.q.n(z10);
        if (aVar.a()) {
            return wg.m.d();
        }
        final wg.b bVar = new wg.b();
        final wg.k kVar = new wg.k(bVar.b());
        this.f46001a.a(new Executor() { // from class: pj.y
            @Override // java.util.concurrent.Executor
            public final void execute(Runnable runnable) {
                try {
                    executor.execute(runnable);
                } catch (RuntimeException e10) {
                    if (aVar.a()) {
                        bVar.a();
                    } else {
                        kVar.b(e10);
                    }
                    throw e10;
                }
            }
        }, new Runnable() { // from class: pj.z
            @Override // java.lang.Runnable
            public final void run() {
                k.this.g(aVar, bVar, callable, kVar);
            }
        });
        return kVar.a();
    }

    public abstract void b();

    public void c() {
        this.f46002b.incrementAndGet();
    }

    protected abstract void d();

    public void e(Executor executor) {
        f(executor);
    }

    public Task f(Executor executor) {
        boolean z10;
        if (this.f46002b.get() > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        gf.q.n(z10);
        final wg.k kVar = new wg.k();
        this.f46001a.a(executor, new Runnable() { // from class: pj.x
            @Override // java.lang.Runnable
            public final void run() {
                k.this.h(kVar);
            }
        });
        return kVar.a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void g(wg.a aVar, wg.b bVar, Callable callable, wg.k kVar) {
        try {
            if (aVar.a()) {
                bVar.a();
                return;
            }
            try {
                if (!this.f46003c.get()) {
                    b();
                    this.f46003c.set(true);
                }
                if (aVar.a()) {
                    bVar.a();
                    return;
                }
                Object call = callable.call();
                if (aVar.a()) {
                    bVar.a();
                } else {
                    kVar.c(call);
                }
            } catch (RuntimeException e10) {
                throw new lj.a("Internal error has occurred when executing ML Kit tasks", 13, e10);
            }
        } catch (Exception e11) {
            if (aVar.a()) {
                bVar.a();
            } else {
                kVar.b(e11);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void h(wg.k kVar) {
        boolean z10;
        int decrementAndGet = this.f46002b.decrementAndGet();
        if (decrementAndGet >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        gf.q.n(z10);
        if (decrementAndGet == 0) {
            d();
            this.f46003c.set(false);
        }
        lg.x.a();
        kVar.c(null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public k(n nVar) {
        this.f46002b = new AtomicInteger(0);
        this.f46003c = new AtomicBoolean(false);
        this.f46001a = nVar;
    }
}
