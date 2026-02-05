package sj;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Callable;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    protected final n f49665a;

    /* renamed from: b  reason: collision with root package name */
    private final AtomicInteger f49666b;

    /* renamed from: c  reason: collision with root package name */
    private final AtomicBoolean f49667c;

    public k() {
        this.f49666b = new AtomicInteger(0);
        this.f49667c = new AtomicBoolean(false);
        this.f49665a = new n();
    }

    public Task a(final Executor executor, final Callable callable, final xg.a aVar) {
        boolean z10;
        if (this.f49666b.get() > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        gf.q.n(z10);
        if (aVar.a()) {
            return xg.m.d();
        }
        final xg.b bVar = new xg.b();
        final xg.k kVar = new xg.k(bVar.b());
        this.f49665a.a(new Executor() { // from class: sj.y
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
        }, new Runnable() { // from class: sj.z
            @Override // java.lang.Runnable
            public final void run() {
                k.this.g(aVar, bVar, callable, kVar);
            }
        });
        return kVar.a();
    }

    public abstract void b();

    public void c() {
        this.f49666b.incrementAndGet();
    }

    protected abstract void d();

    public void e(Executor executor) {
        f(executor);
    }

    public Task f(Executor executor) {
        boolean z10;
        if (this.f49666b.get() > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        gf.q.n(z10);
        final xg.k kVar = new xg.k();
        this.f49665a.a(executor, new Runnable() { // from class: sj.x
            @Override // java.lang.Runnable
            public final void run() {
                k.this.h(kVar);
            }
        });
        return kVar.a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void g(xg.a aVar, xg.b bVar, Callable callable, xg.k kVar) {
        try {
            if (aVar.a()) {
                bVar.a();
                return;
            }
            try {
                if (!this.f49667c.get()) {
                    b();
                    this.f49667c.set(true);
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
                throw new oj.a("Internal error has occurred when executing ML Kit tasks", 13, e10);
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
    public final /* synthetic */ void h(xg.k kVar) {
        boolean z10;
        int decrementAndGet = this.f49666b.decrementAndGet();
        if (decrementAndGet >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        gf.q.n(z10);
        if (decrementAndGet == 0) {
            d();
            this.f49667c.set(false);
        }
        lg.x.a();
        kVar.c(null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public k(n nVar) {
        this.f49666b = new AtomicInteger(0);
        this.f49667c = new AtomicBoolean(false);
        this.f49665a = nVar;
    }
}
