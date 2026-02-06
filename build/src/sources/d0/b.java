package d0;

import com.google.common.util.concurrent.ListenableFuture;
import java.lang.reflect.UndeclaredThrowableException;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.CancellationException;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b extends d implements Runnable {

    /* renamed from: i  reason: collision with root package name */
    private d0.a f20086i;

    /* renamed from: o  reason: collision with root package name */
    private final BlockingQueue f20087o = new LinkedBlockingQueue(1);

    /* renamed from: p  reason: collision with root package name */
    private final CountDownLatch f20088p = new CountDownLatch(1);

    /* renamed from: q  reason: collision with root package name */
    private ListenableFuture f20089q;

    /* renamed from: r  reason: collision with root package name */
    volatile ListenableFuture f20090r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ListenableFuture f20091d;

        a(ListenableFuture listenableFuture) {
            this.f20091d = listenableFuture;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                try {
                    try {
                        b.this.c(n.m(this.f20091d));
                    } catch (CancellationException unused) {
                        b.this.cancel(false);
                    }
                } catch (ExecutionException e10) {
                    b.this.d(e10.getCause());
                }
            } finally {
                b.this.f20090r = null;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(d0.a aVar, ListenableFuture listenableFuture) {
        this.f20086i = (d0.a) b2.e.g(aVar);
        this.f20089q = (ListenableFuture) b2.e.g(listenableFuture);
    }

    private void g(Future future, boolean z10) {
        if (future != null) {
            future.cancel(z10);
        }
    }

    private void h(BlockingQueue blockingQueue, Object obj) {
        boolean z10 = false;
        while (true) {
            try {
                blockingQueue.put(obj);
                break;
            } catch (InterruptedException unused) {
                z10 = true;
            } catch (Throwable th2) {
                if (z10) {
                    Thread.currentThread().interrupt();
                }
                throw th2;
            }
        }
        if (z10) {
            Thread.currentThread().interrupt();
        }
    }

    private Object i(BlockingQueue blockingQueue) {
        Object take;
        boolean z10 = false;
        while (true) {
            try {
                take = blockingQueue.take();
                break;
            } catch (InterruptedException unused) {
                z10 = true;
            } catch (Throwable th2) {
                if (z10) {
                    Thread.currentThread().interrupt();
                }
                throw th2;
            }
        }
        if (z10) {
            Thread.currentThread().interrupt();
        }
        return take;
    }

    @Override // d0.d, java.util.concurrent.Future
    public boolean cancel(boolean z10) {
        if (super.cancel(z10)) {
            h(this.f20087o, Boolean.valueOf(z10));
            g(this.f20089q, z10);
            g(this.f20090r, z10);
            return true;
        }
        return false;
    }

    @Override // d0.d, java.util.concurrent.Future
    public Object get() {
        if (!isDone()) {
            ListenableFuture listenableFuture = this.f20089q;
            if (listenableFuture != null) {
                listenableFuture.get();
            }
            this.f20088p.await();
            ListenableFuture listenableFuture2 = this.f20090r;
            if (listenableFuture2 != null) {
                listenableFuture2.get();
            }
        }
        return super.get();
    }

    /* JADX WARN: Type inference failed for: r0v0, types: [d0.a, com.google.common.util.concurrent.ListenableFuture] */
    /* JADX WARN: Type inference failed for: r0v1, types: [d0.a, com.google.common.util.concurrent.ListenableFuture] */
    /* JADX WARN: Type inference failed for: r0v10 */
    /* JADX WARN: Type inference failed for: r0v11 */
    /* JADX WARN: Type inference failed for: r0v12 */
    /* JADX WARN: Type inference failed for: r0v13 */
    /* JADX WARN: Type inference failed for: r0v14 */
    /* JADX WARN: Type inference failed for: r0v15 */
    /* JADX WARN: Type inference failed for: r0v3 */
    /* JADX WARN: Type inference failed for: r0v4, types: [d0.a, com.google.common.util.concurrent.ListenableFuture] */
    /* JADX WARN: Type inference failed for: r0v6 */
    /* JADX WARN: Type inference failed for: r0v7 */
    /* JADX WARN: Type inference failed for: r0v8, types: [java.util.concurrent.CountDownLatch] */
    /* JADX WARN: Type inference failed for: r0v9 */
    @Override // java.lang.Runnable
    public void run() {
        ?? r02;
        ?? r03 = 0;
        r03 = 0;
        r03 = 0;
        r03 = 0;
        r03 = 0;
        try {
            try {
                try {
                    try {
                        try {
                            ListenableFuture apply = this.f20086i.apply(n.m(this.f20089q));
                            this.f20090r = apply;
                            if (isCancelled()) {
                                apply.cancel(((Boolean) i(this.f20087o)).booleanValue());
                                this.f20090r = null;
                            } else {
                                apply.a(new a(apply), c0.a.a());
                            }
                        } catch (Exception e10) {
                            d(e10);
                            r02 = r03;
                        }
                    } catch (Error e11) {
                        d(e11);
                        r02 = r03;
                    }
                } finally {
                    this.f20086i = r03;
                    this.f20089q = r03;
                    this.f20088p.countDown();
                }
            } catch (CancellationException unused) {
                cancel(false);
            } catch (ExecutionException e12) {
                d(e12.getCause());
            }
        } catch (UndeclaredThrowableException e13) {
            d(e13.getCause());
            r02 = r03;
        }
    }

    @Override // d0.d, java.util.concurrent.Future
    public Object get(long j10, TimeUnit timeUnit) {
        if (!isDone()) {
            TimeUnit timeUnit2 = TimeUnit.NANOSECONDS;
            if (timeUnit != timeUnit2) {
                j10 = timeUnit2.convert(j10, timeUnit);
                timeUnit = timeUnit2;
            }
            ListenableFuture listenableFuture = this.f20089q;
            if (listenableFuture != null) {
                long nanoTime = System.nanoTime();
                listenableFuture.get(j10, timeUnit);
                j10 -= Math.max(0L, System.nanoTime() - nanoTime);
            }
            long nanoTime2 = System.nanoTime();
            if (this.f20088p.await(j10, timeUnit)) {
                j10 -= Math.max(0L, System.nanoTime() - nanoTime2);
                ListenableFuture listenableFuture2 = this.f20090r;
                if (listenableFuture2 != null) {
                    listenableFuture2.get(j10, timeUnit);
                }
            } else {
                throw new TimeoutException();
            }
        }
        return super.get(j10, timeUnit);
    }
}
