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
    private static final Class f36981s = b.class;

    /* renamed from: d  reason: collision with root package name */
    private final String f36982d;

    /* renamed from: e  reason: collision with root package name */
    private final Executor f36983e;

    /* renamed from: i  reason: collision with root package name */
    private volatile int f36984i;

    /* renamed from: o  reason: collision with root package name */
    private final BlockingQueue f36985o;

    /* renamed from: p  reason: collision with root package name */
    private final a f36986p;

    /* renamed from: q  reason: collision with root package name */
    private final AtomicInteger f36987q;

    /* renamed from: r  reason: collision with root package name */
    private final AtomicInteger f36988r;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements Runnable {
        @Override // java.lang.Runnable
        public void run() {
            try {
                Runnable runnable = (Runnable) b.this.f36985o.poll();
                if (runnable != null) {
                    runnable.run();
                } else {
                    q8.a.z(b.f36981s, "%s: Worker has nothing to run", b.this.f36982d);
                }
                int decrementAndGet = b.this.f36987q.decrementAndGet();
                if (!b.this.f36985o.isEmpty()) {
                    b.this.s();
                } else {
                    q8.a.A(b.f36981s, "%s: worker finished; %d workers left", b.this.f36982d, Integer.valueOf(decrementAndGet));
                }
            } catch (Throwable th2) {
                int decrementAndGet2 = b.this.f36987q.decrementAndGet();
                if (!b.this.f36985o.isEmpty()) {
                    b.this.s();
                } else {
                    q8.a.A(b.f36981s, "%s: worker finished; %d workers left", b.this.f36982d, Integer.valueOf(decrementAndGet2));
                }
                throw th2;
            }
        }

        private a() {
        }
    }

    public b(String str, int i10, Executor executor, BlockingQueue blockingQueue) {
        if (i10 > 0) {
            this.f36982d = str;
            this.f36983e = executor;
            this.f36984i = i10;
            this.f36985o = blockingQueue;
            this.f36986p = new a();
            this.f36987q = new AtomicInteger(0);
            this.f36988r = new AtomicInteger(0);
            return;
        }
        throw new IllegalArgumentException("max concurrency must be > 0");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void s() {
        int i10 = this.f36987q.get();
        while (i10 < this.f36984i) {
            int i11 = i10 + 1;
            if (this.f36987q.compareAndSet(i10, i11)) {
                q8.a.B(f36981s, "%s: starting worker %d of %d", this.f36982d, Integer.valueOf(i11), Integer.valueOf(this.f36984i));
                this.f36983e.execute(this.f36986p);
                return;
            }
            q8.a.z(f36981s, "%s: race in startWorkerIfNeeded; retrying", this.f36982d);
            i10 = this.f36987q.get();
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
            if (this.f36985o.offer(runnable)) {
                int size = this.f36985o.size();
                int i10 = this.f36988r.get();
                if (size > i10 && this.f36988r.compareAndSet(i10, size)) {
                    q8.a.A(f36981s, "%s: max pending work in queue = %d", this.f36982d, Integer.valueOf(size));
                }
                s();
                return;
            }
            throw new RejectedExecutionException(this.f36982d + " queue is full, size=" + this.f36985o.size());
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
