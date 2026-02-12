package n8;

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
    private static final Class f36982s = b.class;

    /* renamed from: d  reason: collision with root package name */
    private final String f36983d;

    /* renamed from: e  reason: collision with root package name */
    private final Executor f36984e;

    /* renamed from: i  reason: collision with root package name */
    private volatile int f36985i;

    /* renamed from: o  reason: collision with root package name */
    private final BlockingQueue f36986o;

    /* renamed from: p  reason: collision with root package name */
    private final a f36987p;

    /* renamed from: q  reason: collision with root package name */
    private final AtomicInteger f36988q;

    /* renamed from: r  reason: collision with root package name */
    private final AtomicInteger f36989r;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements Runnable {
        @Override // java.lang.Runnable
        public void run() {
            try {
                Runnable runnable = (Runnable) b.this.f36986o.poll();
                if (runnable != null) {
                    runnable.run();
                } else {
                    q8.a.z(b.f36982s, "%s: Worker has nothing to run", b.this.f36983d);
                }
                int decrementAndGet = b.this.f36988q.decrementAndGet();
                if (!b.this.f36986o.isEmpty()) {
                    b.this.s();
                } else {
                    q8.a.A(b.f36982s, "%s: worker finished; %d workers left", b.this.f36983d, Integer.valueOf(decrementAndGet));
                }
            } catch (Throwable th2) {
                int decrementAndGet2 = b.this.f36988q.decrementAndGet();
                if (!b.this.f36986o.isEmpty()) {
                    b.this.s();
                } else {
                    q8.a.A(b.f36982s, "%s: worker finished; %d workers left", b.this.f36983d, Integer.valueOf(decrementAndGet2));
                }
                throw th2;
            }
        }

        private a() {
        }
    }

    public b(String str, int i10, Executor executor, BlockingQueue blockingQueue) {
        if (i10 > 0) {
            this.f36983d = str;
            this.f36984e = executor;
            this.f36985i = i10;
            this.f36986o = blockingQueue;
            this.f36987p = new a();
            this.f36988q = new AtomicInteger(0);
            this.f36989r = new AtomicInteger(0);
            return;
        }
        throw new IllegalArgumentException("max concurrency must be > 0");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void s() {
        int i10 = this.f36988q.get();
        while (i10 < this.f36985i) {
            int i11 = i10 + 1;
            if (this.f36988q.compareAndSet(i10, i11)) {
                q8.a.B(f36982s, "%s: starting worker %d of %d", this.f36983d, Integer.valueOf(i11), Integer.valueOf(this.f36985i));
                this.f36984e.execute(this.f36987p);
                return;
            }
            q8.a.z(f36982s, "%s: race in startWorkerIfNeeded; retrying", this.f36983d);
            i10 = this.f36988q.get();
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
            if (this.f36986o.offer(runnable)) {
                int size = this.f36986o.size();
                int i10 = this.f36989r.get();
                if (size > i10 && this.f36989r.compareAndSet(i10, size)) {
                    q8.a.A(f36982s, "%s: max pending work in queue = %d", this.f36983d, Integer.valueOf(size));
                }
                s();
                return;
            }
            throw new RejectedExecutionException(this.f36983d + " queue is full, size=" + this.f36986o.size());
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
