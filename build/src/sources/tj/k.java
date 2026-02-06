package tj;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Callable;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    protected final n f50629a;

    /* renamed from: b  reason: collision with root package name */
    private final AtomicInteger f50630b;

    /* renamed from: c  reason: collision with root package name */
    private final AtomicBoolean f50631c;

    public k() {
        this.f50630b = new AtomicInteger(0);
        this.f50631c = new AtomicBoolean(false);
        this.f50629a = new n();
    }

    public Task a(final Executor executor, final Callable callable, final yg.a aVar) {
        boolean z10;
        if (this.f50630b.get() > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        gf.q.n(z10);
        if (aVar.a()) {
            return yg.m.d();
        }
        final yg.b bVar = new yg.b();
        final yg.k kVar = new yg.k(bVar.b());
        this.f50629a.a(new Executor() { // from class: tj.y
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
        }, new Runnable() { // from class: tj.z
            @Override // java.lang.Runnable
            public final void run() {
                k.this.g(aVar, bVar, callable, kVar);
            }
        });
        return kVar.a();
    }

    public abstract void b();

    public void c() {
        this.f50630b.incrementAndGet();
    }

    protected abstract void d();

    public void e(Executor executor) {
        f(executor);
    }

    public Task f(Executor executor) {
        boolean z10;
        if (this.f50630b.get() > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        gf.q.n(z10);
        final yg.k kVar = new yg.k();
        this.f50629a.a(executor, new Runnable() { // from class: tj.x
            @Override // java.lang.Runnable
            public final void run() {
                k.this.h(kVar);
            }
        });
        return kVar.a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void g(yg.a aVar, yg.b bVar, Callable callable, yg.k kVar) {
        try {
            if (aVar.a()) {
                bVar.a();
                return;
            }
            try {
                if (!this.f50631c.get()) {
                    b();
                    this.f50631c.set(true);
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
                throw new pj.a("Internal error has occurred when executing ML Kit tasks", 13, e10);
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
    public final /* synthetic */ void h(yg.k kVar) {
        boolean z10;
        int decrementAndGet = this.f50630b.decrementAndGet();
        if (decrementAndGet >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        gf.q.n(z10);
        if (decrementAndGet == 0) {
            d();
            this.f50631c.set(false);
        }
        mg.x.a();
        kVar.c(null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public k(n nVar) {
        this.f50630b = new AtomicInteger(0);
        this.f50631c = new AtomicBoolean(false);
        this.f50629a = nVar;
    }
}
