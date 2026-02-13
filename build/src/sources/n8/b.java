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
    private static final Class f37550s = b.class;

    /* renamed from: d  reason: collision with root package name */
    private final String f37551d;

    /* renamed from: e  reason: collision with root package name */
    private final Executor f37552e;

    /* renamed from: i  reason: collision with root package name */
    private volatile int f37553i;

    /* renamed from: o  reason: collision with root package name */
    private final BlockingQueue f37554o;

    /* renamed from: p  reason: collision with root package name */
    private final a f37555p;

    /* renamed from: q  reason: collision with root package name */
    private final AtomicInteger f37556q;

    /* renamed from: r  reason: collision with root package name */
    private final AtomicInteger f37557r;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements Runnable {
        @Override // java.lang.Runnable
        public void run() {
            try {
                Runnable runnable = (Runnable) b.this.f37554o.poll();
                if (runnable != null) {
                    runnable.run();
                } else {
                    q8.a.z(b.f37550s, "%s: Worker has nothing to run", b.this.f37551d);
                }
                int decrementAndGet = b.this.f37556q.decrementAndGet();
                if (!b.this.f37554o.isEmpty()) {
                    b.this.s();
                } else {
                    q8.a.A(b.f37550s, "%s: worker finished; %d workers left", b.this.f37551d, Integer.valueOf(decrementAndGet));
                }
            } catch (Throwable th2) {
                int decrementAndGet2 = b.this.f37556q.decrementAndGet();
                if (!b.this.f37554o.isEmpty()) {
                    b.this.s();
                } else {
                    q8.a.A(b.f37550s, "%s: worker finished; %d workers left", b.this.f37551d, Integer.valueOf(decrementAndGet2));
                }
                throw th2;
            }
        }

        private a() {
        }
    }

    public b(String str, int i10, Executor executor, BlockingQueue blockingQueue) {
        if (i10 > 0) {
            this.f37551d = str;
            this.f37552e = executor;
            this.f37553i = i10;
            this.f37554o = blockingQueue;
            this.f37555p = new a();
            this.f37556q = new AtomicInteger(0);
            this.f37557r = new AtomicInteger(0);
            return;
        }
        throw new IllegalArgumentException("max concurrency must be > 0");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void s() {
        int i10 = this.f37556q.get();
        while (i10 < this.f37553i) {
            int i11 = i10 + 1;
            if (this.f37556q.compareAndSet(i10, i11)) {
                q8.a.B(f37550s, "%s: starting worker %d of %d", this.f37551d, Integer.valueOf(i11), Integer.valueOf(this.f37553i));
                this.f37552e.execute(this.f37555p);
                return;
            }
            q8.a.z(f37550s, "%s: race in startWorkerIfNeeded; retrying", this.f37551d);
            i10 = this.f37556q.get();
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
            if (this.f37554o.offer(runnable)) {
                int size = this.f37554o.size();
                int i10 = this.f37557r.get();
                if (size > i10 && this.f37557r.compareAndSet(i10, size)) {
                    q8.a.A(f37550s, "%s: max pending work in queue = %d", this.f37551d, Integer.valueOf(size));
                }
                s();
                return;
            }
            throw new RejectedExecutionException(this.f37551d + " queue is full, size=" + this.f37554o.size());
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
