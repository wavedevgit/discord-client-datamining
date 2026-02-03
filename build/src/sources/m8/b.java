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
    private static final Class f37829s = b.class;

    /* renamed from: d  reason: collision with root package name */
    private final String f37830d;

    /* renamed from: e  reason: collision with root package name */
    private final Executor f37831e;

    /* renamed from: i  reason: collision with root package name */
    private volatile int f37832i;

    /* renamed from: o  reason: collision with root package name */
    private final BlockingQueue f37833o;

    /* renamed from: p  reason: collision with root package name */
    private final a f37834p;

    /* renamed from: q  reason: collision with root package name */
    private final AtomicInteger f37835q;

    /* renamed from: r  reason: collision with root package name */
    private final AtomicInteger f37836r;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements Runnable {
        @Override // java.lang.Runnable
        public void run() {
            try {
                Runnable runnable = (Runnable) b.this.f37833o.poll();
                if (runnable != null) {
                    runnable.run();
                } else {
                    p8.a.z(b.f37829s, "%s: Worker has nothing to run", b.this.f37830d);
                }
                int decrementAndGet = b.this.f37835q.decrementAndGet();
                if (!b.this.f37833o.isEmpty()) {
                    b.this.E();
                } else {
                    p8.a.A(b.f37829s, "%s: worker finished; %d workers left", b.this.f37830d, Integer.valueOf(decrementAndGet));
                }
            } catch (Throwable th2) {
                int decrementAndGet2 = b.this.f37835q.decrementAndGet();
                if (!b.this.f37833o.isEmpty()) {
                    b.this.E();
                } else {
                    p8.a.A(b.f37829s, "%s: worker finished; %d workers left", b.this.f37830d, Integer.valueOf(decrementAndGet2));
                }
                throw th2;
            }
        }

        private a() {
        }
    }

    public b(String str, int i10, Executor executor, BlockingQueue blockingQueue) {
        if (i10 > 0) {
            this.f37830d = str;
            this.f37831e = executor;
            this.f37832i = i10;
            this.f37833o = blockingQueue;
            this.f37834p = new a();
            this.f37835q = new AtomicInteger(0);
            this.f37836r = new AtomicInteger(0);
            return;
        }
        throw new IllegalArgumentException("max concurrency must be > 0");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void E() {
        int i10 = this.f37835q.get();
        while (i10 < this.f37832i) {
            int i11 = i10 + 1;
            if (this.f37835q.compareAndSet(i10, i11)) {
                p8.a.B(f37829s, "%s: starting worker %d of %d", this.f37830d, Integer.valueOf(i11), Integer.valueOf(this.f37832i));
                this.f37831e.execute(this.f37834p);
                return;
            }
            p8.a.z(f37829s, "%s: race in startWorkerIfNeeded; retrying", this.f37830d);
            i10 = this.f37835q.get();
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
            if (this.f37833o.offer(runnable)) {
                int size = this.f37833o.size();
                int i10 = this.f37836r.get();
                if (size > i10 && this.f37836r.compareAndSet(i10, size)) {
                    p8.a.A(f37829s, "%s: max pending work in queue = %d", this.f37830d, Integer.valueOf(size));
                }
                E();
                return;
            }
            throw new RejectedExecutionException(this.f37830d + " queue is full, size=" + this.f37833o.size());
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
