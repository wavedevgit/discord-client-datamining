package io.sentry;

import java.net.InetAddress;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i0 {

    /* renamed from: i  reason: collision with root package name */
    private static volatile i0 f29612i;

    /* renamed from: a  reason: collision with root package name */
    private final long f29614a;

    /* renamed from: b  reason: collision with root package name */
    private volatile String f29615b;

    /* renamed from: c  reason: collision with root package name */
    private volatile long f29616c;

    /* renamed from: d  reason: collision with root package name */
    private final AtomicBoolean f29617d;

    /* renamed from: e  reason: collision with root package name */
    private final Callable f29618e;

    /* renamed from: f  reason: collision with root package name */
    private final ExecutorService f29619f;

    /* renamed from: g  reason: collision with root package name */
    private static final long f29610g = TimeUnit.HOURS.toMillis(5);

    /* renamed from: h  reason: collision with root package name */
    private static final long f29611h = TimeUnit.SECONDS.toMillis(1);

    /* renamed from: j  reason: collision with root package name */
    private static final io.sentry.util.a f29613j = new io.sentry.util.a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class b implements ThreadFactory {

        /* renamed from: a  reason: collision with root package name */
        private int f29620a;

        private b() {
        }

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable runnable) {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("SentryHostnameCache-");
            int i10 = this.f29620a;
            this.f29620a = i10 + 1;
            sb2.append(i10);
            Thread thread = new Thread(runnable, sb2.toString());
            thread.setDaemon(true);
            return thread;
        }
    }

    private i0() {
        this(f29610g);
    }

    public static /* synthetic */ Void b(i0 i0Var) {
        i0Var.getClass();
        try {
            i0Var.f29615b = ((InetAddress) i0Var.f29618e.call()).getCanonicalHostName();
            i0Var.f29616c = System.currentTimeMillis() + i0Var.f29614a;
            i0Var.f29617d.set(false);
            return null;
        } catch (Throwable th2) {
            i0Var.f29617d.set(false);
            throw th2;
        }
    }

    public static i0 e() {
        if (f29612i == null) {
            a1 a10 = f29613j.a();
            try {
                if (f29612i == null) {
                    f29612i = new i0();
                }
                if (a10 != null) {
                    a10.close();
                }
            } catch (Throwable th2) {
                if (a10 != null) {
                    try {
                        a10.close();
                    } catch (Throwable th3) {
                        th2.addSuppressed(th3);
                    }
                }
                throw th2;
            }
        }
        return f29612i;
    }

    private void f() {
        this.f29616c = System.currentTimeMillis() + TimeUnit.SECONDS.toMillis(1L);
    }

    private void g() {
        try {
            this.f29619f.submit(new Callable() { // from class: io.sentry.h0
                @Override // java.util.concurrent.Callable
                public final Object call() {
                    return i0.b(i0.this);
                }
            }).get(f29611h, TimeUnit.MILLISECONDS);
        } catch (InterruptedException unused) {
            Thread.currentThread().interrupt();
            f();
        } catch (RuntimeException | ExecutionException | TimeoutException unused2) {
            f();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c() {
        this.f29619f.shutdown();
    }

    public String d() {
        if (this.f29616c < System.currentTimeMillis() && this.f29617d.compareAndSet(false, true)) {
            g();
        }
        return this.f29615b;
    }

    i0(long j10) {
        this(j10, new Callable() { // from class: io.sentry.g0
            @Override // java.util.concurrent.Callable
            public final Object call() {
                InetAddress localHost;
                localHost = InetAddress.getLocalHost();
                return localHost;
            }
        });
    }

    i0(long j10, Callable callable) {
        this.f29617d = new AtomicBoolean(false);
        this.f29619f = Executors.newSingleThreadExecutor(new b());
        this.f29614a = j10;
        this.f29618e = (Callable) io.sentry.util.y.c(callable, "getLocalhost is required");
        g();
    }
}
