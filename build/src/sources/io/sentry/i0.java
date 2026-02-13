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
    private static volatile i0 f29927i;

    /* renamed from: a  reason: collision with root package name */
    private final long f29929a;

    /* renamed from: b  reason: collision with root package name */
    private volatile String f29930b;

    /* renamed from: c  reason: collision with root package name */
    private volatile long f29931c;

    /* renamed from: d  reason: collision with root package name */
    private final AtomicBoolean f29932d;

    /* renamed from: e  reason: collision with root package name */
    private final Callable f29933e;

    /* renamed from: f  reason: collision with root package name */
    private final ExecutorService f29934f;

    /* renamed from: g  reason: collision with root package name */
    private static final long f29925g = TimeUnit.HOURS.toMillis(5);

    /* renamed from: h  reason: collision with root package name */
    private static final long f29926h = TimeUnit.SECONDS.toMillis(1);

    /* renamed from: j  reason: collision with root package name */
    private static final io.sentry.util.a f29928j = new io.sentry.util.a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class b implements ThreadFactory {

        /* renamed from: a  reason: collision with root package name */
        private int f29935a;

        private b() {
        }

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable runnable) {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("SentryHostnameCache-");
            int i10 = this.f29935a;
            this.f29935a = i10 + 1;
            sb2.append(i10);
            Thread thread = new Thread(runnable, sb2.toString());
            thread.setDaemon(true);
            return thread;
        }
    }

    private i0() {
        this(f29925g);
    }

    public static /* synthetic */ Void b(i0 i0Var) {
        i0Var.getClass();
        try {
            i0Var.f29930b = ((InetAddress) i0Var.f29933e.call()).getCanonicalHostName();
            i0Var.f29931c = System.currentTimeMillis() + i0Var.f29929a;
            i0Var.f29932d.set(false);
            return null;
        } catch (Throwable th2) {
            i0Var.f29932d.set(false);
            throw th2;
        }
    }

    public static i0 e() {
        if (f29927i == null) {
            a1 a10 = f29928j.a();
            try {
                if (f29927i == null) {
                    f29927i = new i0();
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
        return f29927i;
    }

    private void f() {
        this.f29931c = System.currentTimeMillis() + TimeUnit.SECONDS.toMillis(1L);
    }

    private void g() {
        try {
            this.f29934f.submit(new Callable() { // from class: io.sentry.h0
                @Override // java.util.concurrent.Callable
                public final Object call() {
                    return i0.b(i0.this);
                }
            }).get(f29926h, TimeUnit.MILLISECONDS);
        } catch (InterruptedException unused) {
            Thread.currentThread().interrupt();
            f();
        } catch (RuntimeException | ExecutionException | TimeoutException unused2) {
            f();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c() {
        this.f29934f.shutdown();
    }

    public String d() {
        if (this.f29931c < System.currentTimeMillis() && this.f29932d.compareAndSet(false, true)) {
            g();
        }
        return this.f29930b;
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
        this.f29932d = new AtomicBoolean(false);
        this.f29934f = Executors.newSingleThreadExecutor(new b());
        this.f29929a = j10;
        this.f29933e = (Callable) io.sentry.util.y.c(callable, "getLocalhost is required");
        g();
    }
}
