package uj;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Callable;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    protected final n f51582a;

    /* renamed from: b  reason: collision with root package name */
    private final AtomicInteger f51583b;

    /* renamed from: c  reason: collision with root package name */
    private final AtomicBoolean f51584c;

    public k() {
        this.f51583b = new AtomicInteger(0);
        this.f51584c = new AtomicBoolean(false);
        this.f51582a = new n();
    }

    public Task a(final Executor executor, final Callable callable, final zg.a aVar) {
        boolean z10;
        if (this.f51583b.get() > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        hf.q.n(z10);
        if (aVar.a()) {
            return zg.m.d();
        }
        final zg.b bVar = new zg.b();
        final zg.k kVar = new zg.k(bVar.b());
        this.f51582a.a(new Executor() { // from class: uj.y
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
        }, new Runnable() { // from class: uj.z
            @Override // java.lang.Runnable
            public final void run() {
                k.this.g(aVar, bVar, callable, kVar);
            }
        });
        return kVar.a();
    }

    public abstract void b();

    public void c() {
        this.f51583b.incrementAndGet();
    }

    protected abstract void d();

    public void e(Executor executor) {
        f(executor);
    }

    public Task f(Executor executor) {
        boolean z10;
        if (this.f51583b.get() > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        hf.q.n(z10);
        final zg.k kVar = new zg.k();
        this.f51582a.a(executor, new Runnable() { // from class: uj.x
            @Override // java.lang.Runnable
            public final void run() {
                k.this.h(kVar);
            }
        });
        return kVar.a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void g(zg.a aVar, zg.b bVar, Callable callable, zg.k kVar) {
        try {
            if (aVar.a()) {
                bVar.a();
                return;
            }
            try {
                if (!this.f51584c.get()) {
                    b();
                    this.f51584c.set(true);
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
                throw new qj.a("Internal error has occurred when executing ML Kit tasks", 13, e10);
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
    public final /* synthetic */ void h(zg.k kVar) {
        boolean z10;
        int decrementAndGet = this.f51583b.decrementAndGet();
        if (decrementAndGet >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        hf.q.n(z10);
        if (decrementAndGet == 0) {
            d();
            this.f51584c.set(false);
        }
        ng.x.a();
        kVar.c(null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public k(n nVar) {
        this.f51583b = new AtomicInteger(0);
        this.f51584c = new AtomicBoolean(false);
        this.f51582a = nVar;
    }
}
