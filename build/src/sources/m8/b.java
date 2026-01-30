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
    private static final Class f37849s = b.class;

    /* renamed from: d  reason: collision with root package name */
    private final String f37850d;

    /* renamed from: e  reason: collision with root package name */
    private final Executor f37851e;

    /* renamed from: i  reason: collision with root package name */
    private volatile int f37852i;

    /* renamed from: o  reason: collision with root package name */
    private final BlockingQueue f37853o;

    /* renamed from: p  reason: collision with root package name */
    private final a f37854p;

    /* renamed from: q  reason: collision with root package name */
    private final AtomicInteger f37855q;

    /* renamed from: r  reason: collision with root package name */
    private final AtomicInteger f37856r;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements Runnable {
        @Override // java.lang.Runnable
        public void run() {
            try {
                Runnable runnable = (Runnable) b.this.f37853o.poll();
                if (runnable != null) {
                    runnable.run();
                } else {
                    p8.a.z(b.f37849s, "%s: Worker has nothing to run", b.this.f37850d);
                }
                int decrementAndGet = b.this.f37855q.decrementAndGet();
                if (!b.this.f37853o.isEmpty()) {
                    b.this.E();
                } else {
                    p8.a.A(b.f37849s, "%s: worker finished; %d workers left", b.this.f37850d, Integer.valueOf(decrementAndGet));
                }
            } catch (Throwable th2) {
                int decrementAndGet2 = b.this.f37855q.decrementAndGet();
                if (!b.this.f37853o.isEmpty()) {
                    b.this.E();
                } else {
                    p8.a.A(b.f37849s, "%s: worker finished; %d workers left", b.this.f37850d, Integer.valueOf(decrementAndGet2));
                }
                throw th2;
            }
        }

        private a() {
        }
    }

    public b(String str, int i10, Executor executor, BlockingQueue blockingQueue) {
        if (i10 > 0) {
            this.f37850d = str;
            this.f37851e = executor;
            this.f37852i = i10;
            this.f37853o = blockingQueue;
            this.f37854p = new a();
            this.f37855q = new AtomicInteger(0);
            this.f37856r = new AtomicInteger(0);
            return;
        }
        throw new IllegalArgumentException("max concurrency must be > 0");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void E() {
        int i10 = this.f37855q.get();
        while (i10 < this.f37852i) {
            int i11 = i10 + 1;
            if (this.f37855q.compareAndSet(i10, i11)) {
                p8.a.B(f37849s, "%s: starting worker %d of %d", this.f37850d, Integer.valueOf(i11), Integer.valueOf(this.f37852i));
                this.f37851e.execute(this.f37854p);
                return;
            }
            p8.a.z(f37849s, "%s: race in startWorkerIfNeeded; retrying", this.f37850d);
            i10 = this.f37855q.get();
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
            if (this.f37853o.offer(runnable)) {
                int size = this.f37853o.size();
                int i10 = this.f37856r.get();
                if (size > i10 && this.f37856r.compareAndSet(i10, size)) {
                    p8.a.A(f37849s, "%s: max pending work in queue = %d", this.f37850d, Integer.valueOf(size));
                }
                E();
                return;
            }
            throw new RejectedExecutionException(this.f37850d + " queue is full, size=" + this.f37853o.size());
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
