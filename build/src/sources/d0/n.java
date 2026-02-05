package d0;

import androidx.arch.core.util.Function;
import androidx.concurrent.futures.c;
import com.google.common.util.concurrent.ListenableFuture;
import d0.o;
import java.util.ArrayList;
import java.util.Collection;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.Future;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class n {

    /* renamed from: a  reason: collision with root package name */
    private static final Function f20161a = new b();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements d0.a {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Function f20162a;

        a(Function function) {
            this.f20162a = function;
        }

        @Override // d0.a
        public ListenableFuture apply(Object obj) {
            return n.p(this.f20162a.apply(obj));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class c implements d0.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ c.a f20163a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Function f20164b;

        c(c.a aVar, Function function) {
            this.f20163a = aVar;
            this.f20164b = function;
        }

        @Override // d0.c
        public void onFailure(Throwable th2) {
            this.f20163a.f(th2);
        }

        @Override // d0.c
        public void onSuccess(Object obj) {
            try {
                this.f20163a.c(this.f20164b.apply(obj));
            } catch (Throwable th2) {
                this.f20163a.f(th2);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ListenableFuture f20165d;

        d(ListenableFuture listenableFuture) {
            this.f20165d = listenableFuture;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f20165d.cancel(true);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final Future f20166d;

        /* renamed from: e  reason: collision with root package name */
        final d0.c f20167e;

        e(Future future, d0.c cVar) {
            this.f20166d = future;
            this.f20167e = cVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                this.f20167e.onSuccess(n.l(this.f20166d));
            } catch (Error e10) {
                e = e10;
                this.f20167e.onFailure(e);
            } catch (RuntimeException e11) {
                e = e11;
                this.f20167e.onFailure(e);
            } catch (ExecutionException e12) {
                Throwable cause = e12.getCause();
                if (cause == null) {
                    this.f20167e.onFailure(e12);
                } else {
                    this.f20167e.onFailure(cause);
                }
            }
        }

        public String toString() {
            return e.class.getSimpleName() + "," + this.f20167e;
        }
    }

    public static /* synthetic */ Object a(final ListenableFuture listenableFuture, ScheduledExecutorService scheduledExecutorService, final Object obj, final boolean z10, long j10, final c.a aVar) {
        t(listenableFuture, aVar);
        if (!listenableFuture.isDone()) {
            final ScheduledFuture<?> schedule = scheduledExecutorService.schedule(new Runnable() { // from class: d0.k
                @Override // java.lang.Runnable
                public final void run() {
                    n.h(c.a.this, obj, z10, listenableFuture);
                }
            }, j10, TimeUnit.MILLISECONDS);
            listenableFuture.a(new Runnable() { // from class: d0.l
                @Override // java.lang.Runnable
                public final void run() {
                    schedule.cancel(true);
                }
            }, c0.a.a());
        }
        return "TimeoutFuture[" + listenableFuture + "]";
    }

    public static /* synthetic */ Object c(ListenableFuture listenableFuture, c.a aVar) {
        v(false, listenableFuture, f20161a, aVar, c0.a.a());
        return "nonCancellationPropagating[" + listenableFuture + "]";
    }

    public static /* synthetic */ Object d(final ListenableFuture listenableFuture, ScheduledExecutorService scheduledExecutorService, final long j10, final c.a aVar) {
        t(listenableFuture, aVar);
        if (!listenableFuture.isDone()) {
            final ScheduledFuture schedule = scheduledExecutorService.schedule(new Callable() { // from class: d0.f
                @Override // java.util.concurrent.Callable
                public final Object call() {
                    Boolean valueOf;
                    valueOf = Boolean.valueOf(c.a.this.f(new TimeoutException("Future[" + listenableFuture + "] is not done within " + j10 + " ms.")));
                    return valueOf;
                }
            }, j10, TimeUnit.MILLISECONDS);
            listenableFuture.a(new Runnable() { // from class: d0.g
                @Override // java.lang.Runnable
                public final void run() {
                    schedule.cancel(true);
                }
            }, c0.a.a());
        }
        return "TimeoutFuture[" + listenableFuture + "]";
    }

    public static /* synthetic */ Object f(ListenableFuture listenableFuture, final c.a aVar) {
        listenableFuture.a(new Runnable() { // from class: d0.i
            @Override // java.lang.Runnable
            public final void run() {
                c.a.this.c(null);
            }
        }, c0.a.a());
        return "transformVoidFuture [" + listenableFuture + "]";
    }

    public static /* synthetic */ void h(c.a aVar, Object obj, boolean z10, ListenableFuture listenableFuture) {
        aVar.c(obj);
        if (z10) {
            listenableFuture.cancel(true);
        }
    }

    public static void j(ListenableFuture listenableFuture, d0.c cVar, Executor executor) {
        b2.e.g(cVar);
        listenableFuture.a(new e(listenableFuture, cVar), executor);
    }

    public static ListenableFuture k(Collection collection) {
        return new p(new ArrayList(collection), true, c0.a.a());
    }

    public static Object l(Future future) {
        boolean isDone = future.isDone();
        b2.e.j(isDone, "Future was expected to be done, " + future);
        return m(future);
    }

    public static Object m(Future future) {
        Object obj;
        boolean z10 = false;
        while (true) {
            try {
                obj = future.get();
                break;
            } catch (InterruptedException unused) {
                z10 = true;
            } catch (Throwable th2) {
                if (z10) {
                    Thread.currentThread().interrupt();
                }
                throw th2;
            }
        }
        if (z10) {
            Thread.currentThread().interrupt();
        }
        return obj;
    }

    public static ListenableFuture n(Throwable th2) {
        return new o.a(th2);
    }

    public static ScheduledFuture o(Throwable th2) {
        return new o.b(th2);
    }

    public static ListenableFuture p(Object obj) {
        if (obj == null) {
            return o.d();
        }
        return new o.c(obj);
    }

    public static ListenableFuture q(final long j10, final ScheduledExecutorService scheduledExecutorService, final ListenableFuture listenableFuture) {
        return androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: d0.e
            @Override // androidx.concurrent.futures.c.InterfaceC0029c
            public final Object a(c.a aVar) {
                return n.d(ListenableFuture.this, scheduledExecutorService, j10, aVar);
            }
        });
    }

    public static ListenableFuture r(final long j10, final ScheduledExecutorService scheduledExecutorService, final Object obj, final boolean z10, final ListenableFuture listenableFuture) {
        return androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: d0.j
            @Override // androidx.concurrent.futures.c.InterfaceC0029c
            public final Object a(c.a aVar) {
                return n.a(ListenableFuture.this, scheduledExecutorService, obj, z10, j10, aVar);
            }
        });
    }

    public static ListenableFuture s(final ListenableFuture listenableFuture) {
        b2.e.g(listenableFuture);
        if (listenableFuture.isDone()) {
            return listenableFuture;
        }
        return androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: d0.m
            @Override // androidx.concurrent.futures.c.InterfaceC0029c
            public final Object a(c.a aVar) {
                return n.c(ListenableFuture.this, aVar);
            }
        });
    }

    public static void t(ListenableFuture listenableFuture, c.a aVar) {
        u(listenableFuture, f20161a, aVar, c0.a.a());
    }

    public static void u(ListenableFuture listenableFuture, Function function, c.a aVar, Executor executor) {
        v(true, listenableFuture, function, aVar, executor);
    }

    private static void v(boolean z10, ListenableFuture listenableFuture, Function function, c.a aVar, Executor executor) {
        b2.e.g(listenableFuture);
        b2.e.g(function);
        b2.e.g(aVar);
        b2.e.g(executor);
        j(listenableFuture, new c(aVar, function), executor);
        if (z10) {
            aVar.a(new d(listenableFuture), c0.a.a());
        }
    }

    public static ListenableFuture w(Collection collection) {
        return new p(new ArrayList(collection), false, c0.a.a());
    }

    public static ListenableFuture x(ListenableFuture listenableFuture, Function function, Executor executor) {
        b2.e.g(function);
        return y(listenableFuture, new a(function), executor);
    }

    public static ListenableFuture y(ListenableFuture listenableFuture, d0.a aVar, Executor executor) {
        d0.b bVar = new d0.b(aVar, listenableFuture);
        listenableFuture.a(bVar, executor);
        return bVar;
    }

    public static ListenableFuture z(final ListenableFuture listenableFuture) {
        return androidx.concurrent.futures.c.a(new c.InterfaceC0029c() { // from class: d0.h
            @Override // androidx.concurrent.futures.c.InterfaceC0029c
            public final Object a(c.a aVar) {
                return n.f(ListenableFuture.this, aVar);
            }
        });
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements Function {
        b() {
        }

        @Override // androidx.arch.core.util.Function
        public Object apply(Object obj) {
            return obj;
        }
    }
}
