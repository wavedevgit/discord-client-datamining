package d0;

import androidx.arch.core.util.Function;
import androidx.concurrent.futures.c;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.concurrent.Executor;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d implements ListenableFuture {

    /* renamed from: d  reason: collision with root package name */
    private final ListenableFuture f21487d;

    /* renamed from: e  reason: collision with root package name */
    c.a f21488e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements c.InterfaceC0026c {
        a() {
        }

        @Override // androidx.concurrent.futures.c.InterfaceC0026c
        public Object a(c.a aVar) {
            boolean z10;
            if (d.this.f21488e == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            b2.e.j(z10, "The result can only set once!");
            d.this.f21488e = aVar;
            return "FutureChain[" + d.this + "]";
        }
    }

    d(ListenableFuture listenableFuture) {
        this.f21487d = (ListenableFuture) b2.e.g(listenableFuture);
    }

    public static d b(ListenableFuture listenableFuture) {
        if (listenableFuture instanceof d) {
            return (d) listenableFuture;
        }
        return new d(listenableFuture);
    }

    @Override // com.google.common.util.concurrent.ListenableFuture
    public void a(Runnable runnable, Executor executor) {
        this.f21487d.a(runnable, executor);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean c(Object obj) {
        c.a aVar = this.f21488e;
        if (aVar != null) {
            return aVar.c(obj);
        }
        return false;
    }

    @Override // java.util.concurrent.Future
    public boolean cancel(boolean z10) {
        return this.f21487d.cancel(z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean d(Throwable th2) {
        c.a aVar = this.f21488e;
        if (aVar != null) {
            return aVar.f(th2);
        }
        return false;
    }

    public final d e(Function function, Executor executor) {
        return (d) n.x(this, function, executor);
    }

    public final d f(d0.a aVar, Executor executor) {
        return (d) n.y(this, aVar, executor);
    }

    @Override // java.util.concurrent.Future
    public Object get() {
        return this.f21487d.get();
    }

    @Override // java.util.concurrent.Future
    public boolean isCancelled() {
        return this.f21487d.isCancelled();
    }

    @Override // java.util.concurrent.Future
    public boolean isDone() {
        return this.f21487d.isDone();
    }

    @Override // java.util.concurrent.Future
    public Object get(long j10, TimeUnit timeUnit) {
        return this.f21487d.get(j10, timeUnit);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d() {
        this.f21487d = androidx.concurrent.futures.c.a(new a());
    }
}
