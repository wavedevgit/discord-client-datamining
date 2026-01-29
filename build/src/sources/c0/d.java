package c0;

import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
import androidx.concurrent.futures.c;
import com.google.common.util.concurrent.ListenableFuture;
import d0.n;
import java.util.List;
import java.util.concurrent.AbstractExecutorService;
import java.util.concurrent.Callable;
import java.util.concurrent.Delayed;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.RunnableScheduledFuture;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d extends AbstractExecutorService implements ScheduledExecutorService, AutoCloseable {

    /* renamed from: e  reason: collision with root package name */
    private static ThreadLocal f8046e = new a();

    /* renamed from: d  reason: collision with root package name */
    private final Handler f8047d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends ThreadLocal {
        a() {
        }

        @Override // java.lang.ThreadLocal
        /* renamed from: a */
        public ScheduledExecutorService initialValue() {
            if (Looper.myLooper() == Looper.getMainLooper()) {
                return c0.a.d();
            }
            if (Looper.myLooper() != null) {
                return new d(new Handler(Looper.myLooper()));
            }
            return null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements Callable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Runnable f8048d;

        b(Runnable runnable) {
            this.f8048d = runnable;
        }

        @Override // java.util.concurrent.Callable
        /* renamed from: a */
        public Void call() {
            this.f8048d.run();
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c implements RunnableScheduledFuture {

        /* renamed from: d  reason: collision with root package name */
        final AtomicReference f8050d = new AtomicReference(null);

        /* renamed from: e  reason: collision with root package name */
        private final long f8051e;

        /* renamed from: i  reason: collision with root package name */
        private final Callable f8052i;

        /* renamed from: o  reason: collision with root package name */
        private final ListenableFuture f8053o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a implements c.InterfaceC0026c {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ Handler f8054a;

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ Callable f8055b;

            /* renamed from: c0.d$c$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            class RunnableC0131a implements Runnable {
                RunnableC0131a() {
                }

                @Override // java.lang.Runnable
                public void run() {
                    if (c.this.f8050d.getAndSet(null) != null) {
                        a aVar = a.this;
                        aVar.f8054a.removeCallbacks(c.this);
                    }
                }
            }

            a(Handler handler, Callable callable) {
                this.f8054a = handler;
                this.f8055b = callable;
            }

            @Override // androidx.concurrent.futures.c.InterfaceC0026c
            public Object a(c.a aVar) {
                aVar.a(new RunnableC0131a(), c0.a.a());
                c.this.f8050d.set(aVar);
                return "HandlerScheduledFuture-" + this.f8055b.toString();
            }
        }

        c(Handler handler, long j10, Callable callable) {
            this.f8051e = j10;
            this.f8052i = callable;
            this.f8053o = androidx.concurrent.futures.c.a(new a(handler, callable));
        }

        @Override // java.util.concurrent.Future
        public boolean cancel(boolean z10) {
            return this.f8053o.cancel(z10);
        }

        @Override // java.lang.Comparable
        /* renamed from: d */
        public int compareTo(Delayed delayed) {
            TimeUnit timeUnit = TimeUnit.MILLISECONDS;
            return Long.compare(getDelay(timeUnit), delayed.getDelay(timeUnit));
        }

        @Override // java.util.concurrent.Future
        public Object get() {
            return this.f8053o.get();
        }

        @Override // java.util.concurrent.Delayed
        public long getDelay(TimeUnit timeUnit) {
            return timeUnit.convert(this.f8051e - System.currentTimeMillis(), TimeUnit.MILLISECONDS);
        }

        @Override // java.util.concurrent.Future
        public boolean isCancelled() {
            return this.f8053o.isCancelled();
        }

        @Override // java.util.concurrent.Future
        public boolean isDone() {
            return this.f8053o.isDone();
        }

        @Override // java.util.concurrent.RunnableScheduledFuture
        public boolean isPeriodic() {
            return false;
        }

        @Override // java.util.concurrent.RunnableFuture, java.lang.Runnable
        public void run() {
            c.a aVar = (c.a) this.f8050d.getAndSet(null);
            if (aVar != null) {
                try {
                    aVar.c(this.f8052i.call());
                } catch (Exception e10) {
                    aVar.f(e10);
                }
            }
        }

        @Override // java.util.concurrent.Future
        public Object get(long j10, TimeUnit timeUnit) {
            return this.f8053o.get(j10, timeUnit);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(Handler handler) {
        this.f8047d = handler;
    }

    private RejectedExecutionException a() {
        return new RejectedExecutionException(this.f8047d + " is shutting down");
    }

    @Override // java.util.concurrent.ExecutorService
    public boolean awaitTermination(long j10, TimeUnit timeUnit) {
        throw new UnsupportedOperationException(d.class.getSimpleName() + " cannot be shut down. Use Looper.quitSafely().");
    }

    @Override // java.lang.AutoCloseable
    public /* synthetic */ void close() {
        c0.c.a(this);
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        if (this.f8047d.post(runnable)) {
            return;
        }
        throw a();
    }

    @Override // java.util.concurrent.ExecutorService
    public boolean isShutdown() {
        return false;
    }

    @Override // java.util.concurrent.ExecutorService
    public boolean isTerminated() {
        return false;
    }

    @Override // java.util.concurrent.ScheduledExecutorService
    public ScheduledFuture schedule(Runnable runnable, long j10, TimeUnit timeUnit) {
        return schedule(new b(runnable), j10, timeUnit);
    }

    @Override // java.util.concurrent.ScheduledExecutorService
    public ScheduledFuture scheduleAtFixedRate(Runnable runnable, long j10, long j11, TimeUnit timeUnit) {
        throw new UnsupportedOperationException(d.class.getSimpleName() + " does not yet support fixed-rate scheduling.");
    }

    @Override // java.util.concurrent.ScheduledExecutorService
    public ScheduledFuture scheduleWithFixedDelay(Runnable runnable, long j10, long j11, TimeUnit timeUnit) {
        throw new UnsupportedOperationException(d.class.getSimpleName() + " does not yet support fixed-delay scheduling.");
    }

    @Override // java.util.concurrent.ExecutorService
    public void shutdown() {
        throw new UnsupportedOperationException(d.class.getSimpleName() + " cannot be shut down. Use Looper.quitSafely().");
    }

    @Override // java.util.concurrent.ExecutorService
    public List shutdownNow() {
        throw new UnsupportedOperationException(d.class.getSimpleName() + " cannot be shut down. Use Looper.quitSafely().");
    }

    @Override // java.util.concurrent.ScheduledExecutorService
    public ScheduledFuture schedule(Callable callable, long j10, TimeUnit timeUnit) {
        long uptimeMillis = SystemClock.uptimeMillis() + TimeUnit.MILLISECONDS.convert(j10, timeUnit);
        c cVar = new c(this.f8047d, uptimeMillis, callable);
        return this.f8047d.postAtTime(cVar, uptimeMillis) ? cVar : n.o(a());
    }
}
