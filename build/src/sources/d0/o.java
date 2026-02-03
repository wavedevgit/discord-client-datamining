package d0;

import com.google.common.util.concurrent.ListenableFuture;
import java.util.concurrent.Delayed;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class o implements ListenableFuture {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a extends o {

        /* renamed from: d  reason: collision with root package name */
        private final Throwable f19952d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public a(Throwable th2) {
            this.f19952d = th2;
        }

        @Override // d0.o, java.util.concurrent.Future
        public Object get() {
            throw new ExecutionException(this.f19952d);
        }

        public String toString() {
            return super.toString() + "[status=FAILURE, cause=[" + this.f19952d + "]]";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b extends a implements ScheduledFuture {
        /* JADX INFO: Access modifiers changed from: package-private */
        public b(Throwable th2) {
            super(th2);
        }

        @Override // java.lang.Comparable
        /* renamed from: e */
        public int compareTo(Delayed delayed) {
            return -1;
        }

        @Override // java.util.concurrent.Delayed
        public long getDelay(TimeUnit timeUnit) {
            return 0L;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class c extends o {

        /* renamed from: e  reason: collision with root package name */
        static final o f19953e = new c(null);

        /* renamed from: d  reason: collision with root package name */
        private final Object f19954d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(Object obj) {
            this.f19954d = obj;
        }

        @Override // d0.o, java.util.concurrent.Future
        public Object get() {
            return this.f19954d;
        }

        public String toString() {
            return super.toString() + "[status=SUCCESS, result=[" + this.f19954d + "]]";
        }
    }

    o() {
    }

    public static ListenableFuture d() {
        return c.f19953e;
    }

    @Override // com.google.common.util.concurrent.ListenableFuture
    public void a(Runnable runnable, Executor executor) {
        b2.e.g(runnable);
        b2.e.g(executor);
        try {
            executor.execute(runnable);
        } catch (RuntimeException e10) {
            y0.d("ImmediateFuture", "Experienced RuntimeException while attempting to notify " + runnable + " on Executor " + executor, e10);
        }
    }

    @Override // java.util.concurrent.Future
    public boolean cancel(boolean z10) {
        return false;
    }

    @Override // java.util.concurrent.Future
    public abstract Object get();

    @Override // java.util.concurrent.Future
    public Object get(long j10, TimeUnit timeUnit) {
        b2.e.g(timeUnit);
        return get();
    }

    @Override // java.util.concurrent.Future
    public boolean isCancelled() {
        return false;
    }

    @Override // java.util.concurrent.Future
    public boolean isDone() {
        return true;
    }
}
