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
    private static final Class f37288s = b.class;

    /* renamed from: d  reason: collision with root package name */
    private final String f37289d;

    /* renamed from: e  reason: collision with root package name */
    private final Executor f37290e;

    /* renamed from: i  reason: collision with root package name */
    private volatile int f37291i;

    /* renamed from: o  reason: collision with root package name */
    private final BlockingQueue f37292o;

    /* renamed from: p  reason: collision with root package name */
    private final a f37293p;

    /* renamed from: q  reason: collision with root package name */
    private final AtomicInteger f37294q;

    /* renamed from: r  reason: collision with root package name */
    private final AtomicInteger f37295r;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements Runnable {
        @Override // java.lang.Runnable
        public void run() {
            try {
                Runnable runnable = (Runnable) b.this.f37292o.poll();
                if (runnable != null) {
                    runnable.run();
                } else {
                    p8.a.z(b.f37288s, "%s: Worker has nothing to run", b.this.f37289d);
                }
                int decrementAndGet = b.this.f37294q.decrementAndGet();
                if (!b.this.f37292o.isEmpty()) {
                    b.this.E();
                } else {
                    p8.a.A(b.f37288s, "%s: worker finished; %d workers left", b.this.f37289d, Integer.valueOf(decrementAndGet));
                }
            } catch (Throwable th2) {
                int decrementAndGet2 = b.this.f37294q.decrementAndGet();
                if (!b.this.f37292o.isEmpty()) {
                    b.this.E();
                } else {
                    p8.a.A(b.f37288s, "%s: worker finished; %d workers left", b.this.f37289d, Integer.valueOf(decrementAndGet2));
                }
                throw th2;
            }
        }

        private a() {
        }
    }

    public b(String str, int i10, Executor executor, BlockingQueue blockingQueue) {
        if (i10 > 0) {
            this.f37289d = str;
            this.f37290e = executor;
            this.f37291i = i10;
            this.f37292o = blockingQueue;
            this.f37293p = new a();
            this.f37294q = new AtomicInteger(0);
            this.f37295r = new AtomicInteger(0);
            return;
        }
        throw new IllegalArgumentException("max concurrency must be > 0");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void E() {
        int i10 = this.f37294q.get();
        while (i10 < this.f37291i) {
            int i11 = i10 + 1;
            if (this.f37294q.compareAndSet(i10, i11)) {
                p8.a.B(f37288s, "%s: starting worker %d of %d", this.f37289d, Integer.valueOf(i11), Integer.valueOf(this.f37291i));
                this.f37290e.execute(this.f37293p);
                return;
            }
            p8.a.z(f37288s, "%s: race in startWorkerIfNeeded; retrying", this.f37289d);
            i10 = this.f37294q.get();
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
            if (this.f37292o.offer(runnable)) {
                int size = this.f37292o.size();
                int i10 = this.f37295r.get();
                if (size > i10 && this.f37295r.compareAndSet(i10, size)) {
                    p8.a.A(f37288s, "%s: max pending work in queue = %d", this.f37289d, Integer.valueOf(size));
                }
                E();
                return;
            }
            throw new RejectedExecutionException(this.f37289d + " queue is full, size=" + this.f37292o.size());
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
