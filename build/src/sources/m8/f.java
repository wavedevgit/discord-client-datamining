package m8;

import android.os.Handler;
import java.util.concurrent.Callable;
import java.util.concurrent.Delayed;
import java.util.concurrent.FutureTask;
import java.util.concurrent.RunnableFuture;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f implements RunnableFuture, ScheduledFuture {

    /* renamed from: d  reason: collision with root package name */
    private final Handler f37636d;

    /* renamed from: e  reason: collision with root package name */
    private final FutureTask f37637e;

    public f(Handler handler, Callable callable) {
        this.f37636d = handler;
        this.f37637e = new FutureTask(callable);
    }

    @Override // java.util.concurrent.Future
    public boolean cancel(boolean z10) {
        return this.f37637e.cancel(z10);
    }

    @Override // java.lang.Comparable
    /* renamed from: d */
    public int compareTo(Delayed delayed) {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.concurrent.Future
    public Object get() {
        return this.f37637e.get();
    }

    @Override // java.util.concurrent.Delayed
    public long getDelay(TimeUnit timeUnit) {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.concurrent.Future
    public boolean isCancelled() {
        return this.f37637e.isCancelled();
    }

    @Override // java.util.concurrent.Future
    public boolean isDone() {
        return this.f37637e.isDone();
    }

    @Override // java.util.concurrent.RunnableFuture, java.lang.Runnable
    public void run() {
        this.f37637e.run();
    }

    @Override // java.util.concurrent.Future
    public Object get(long j10, TimeUnit timeUnit) {
        return this.f37637e.get(j10, timeUnit);
    }

    public f(Handler handler, Runnable runnable, Object obj) {
        this.f37636d = handler;
        this.f37637e = new FutureTask(runnable, obj);
    }
}
