package m8;

import java.util.List;
import java.util.concurrent.AbstractExecutorService;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.Executor;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b extends AbstractExecutorService implements AutoCloseable {

    /* renamed from: s  reason: collision with root package name */
    private static final Class f36870s = b.class;

    /* renamed from: d  reason: collision with root package name */
    private final String f36871d;

    /* renamed from: e  reason: collision with root package name */
    private final Executor f36872e;

    /* renamed from: i  reason: collision with root package name */
    private volatile int f36873i;

    /* renamed from: o  reason: collision with root package name */
    private final BlockingQueue f36874o;

    /* renamed from: p  reason: collision with root package name */
    private final a f36875p;

    /* renamed from: q  reason: collision with root package name */
    private final AtomicInteger f36876q;

    /* renamed from: r  reason: collision with root package name */
    private final AtomicInteger f36877r;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements Runnable {
        @Override // java.lang.Runnable
        public void run() {
            try {
                Runnable runnable = (Runnable) b.this.f36874o.poll();
                if (runnable != null) {
                    runnable.run();
                } else {
                    p8.a.z(b.f36870s, "%s: Worker has nothing to run", b.this.f36871d);
                }
                int decrementAndGet = b.this.f36876q.decrementAndGet();
                if (!b.this.f36874o.isEmpty()) {
                    b.this.s();
                } else {
                    p8.a.A(b.f36870s, "%s: worker finished; %d workers left", b.this.f36871d, Integer.valueOf(decrementAndGet));
                }
            } catch (Throwable th2) {
                int decrementAndGet2 = b.this.f36876q.decrementAndGet();
                if (!b.this.f36874o.isEmpty()) {
                    b.this.s();
                } else {
                    p8.a.A(b.f36870s, "%s: worker finished; %d workers left", b.this.f36871d, Integer.valueOf(decrementAndGet2));
                }
                throw th2;
            }
        }

        private a() {
        }
    }

    public b(String str, int i10, Executor executor, BlockingQueue blockingQueue) {
        if (i10 > 0) {
            this.f36871d = str;
            this.f36872e = executor;
            this.f36873i = i10;
            this.f36874o = blockingQueue;
            this.f36875p = new a();
            this.f36876q = new AtomicInteger(0);
            this.f36877r = new AtomicInteger(0);
            return;
        }
        throw new IllegalArgumentException("max concurrency must be > 0");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void s() {
        int i10 = this.f36876q.get();
        while (i10 < this.f36873i) {
            int i11 = i10 + 1;
            if (this.f36876q.compareAndSet(i10, i11)) {
                p8.a.B(f36870s, "%s: starting worker %d of %d", this.f36871d, Integer.valueOf(i11), Integer.valueOf(this.f36873i));
                this.f36872e.execute(this.f36875p);
                return;
            }
            p8.a.z(f36870s, "%s: race in startWorkerIfNeeded; retrying", this.f36871d);
            i10 = this.f36876q.get();
        }
    }

    @Override // java.util.concurrent.ExecutorService
    public boolean awaitTermination(long j10, TimeUnit timeUnit) {
        throw new UnsupportedOperationException();
    }

    @Override // java.lang.AutoCloseable
    public /* synthetic */ void close() {
        c0.c.a(this);
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        if (runnable != null) {
            if (this.f36874o.offer(runnable)) {
                int size = this.f36874o.size();
                int i10 = this.f36877r.get();
                if (size > i10 && this.f36877r.compareAndSet(i10, size)) {
                    p8.a.A(f36870s, "%s: max pending work in queue = %d", this.f36871d, Integer.valueOf(size));
                }
                s();
                return;
            }
            throw new RejectedExecutionException(this.f36871d + " queue is full, size=" + this.f36874o.size());
        }
        throw new NullPointerException("runnable parameter is null");
    }

    @Override // java.util.concurrent.ExecutorService
    public boolean isShutdown() {
        return false;
    }

    @Override // java.util.concurrent.ExecutorService
    public boolean isTerminated() {
        return false;
    }

    @Override // java.util.concurrent.ExecutorService
    public void shutdown() {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.concurrent.ExecutorService
    public List shutdownNow() {
        throw new UnsupportedOperationException();
    }
}
