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
    private static volatile i0 f30030i;

    /* renamed from: a  reason: collision with root package name */
    private final long f30032a;

    /* renamed from: b  reason: collision with root package name */
    private volatile String f30033b;

    /* renamed from: c  reason: collision with root package name */
    private volatile long f30034c;

    /* renamed from: d  reason: collision with root package name */
    private final AtomicBoolean f30035d;

    /* renamed from: e  reason: collision with root package name */
    private final Callable f30036e;

    /* renamed from: f  reason: collision with root package name */
    private final ExecutorService f30037f;

    /* renamed from: g  reason: collision with root package name */
    private static final long f30028g = TimeUnit.HOURS.toMillis(5);

    /* renamed from: h  reason: collision with root package name */
    private static final long f30029h = TimeUnit.SECONDS.toMillis(1);

    /* renamed from: j  reason: collision with root package name */
    private static final io.sentry.util.a f30031j = new io.sentry.util.a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class b implements ThreadFactory {

        /* renamed from: a  reason: collision with root package name */
        private int f30038a;

        private b() {
        }

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable runnable) {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("SentryHostnameCache-");
            int i10 = this.f30038a;
            this.f30038a = i10 + 1;
            sb2.append(i10);
            Thread thread = new Thread(runnable, sb2.toString());
            thread.setDaemon(true);
            return thread;
        }
    }

    private i0() {
        this(f30028g);
    }

    public static /* synthetic */ Void b(i0 i0Var) {
        i0Var.getClass();
        try {
            i0Var.f30033b = ((InetAddress) i0Var.f30036e.call()).getCanonicalHostName();
            i0Var.f30034c = System.currentTimeMillis() + i0Var.f30032a;
            i0Var.f30035d.set(false);
            return null;
        } catch (Throwable th2) {
            i0Var.f30035d.set(false);
            throw th2;
        }
    }

    public static i0 e() {
        if (f30030i == null) {
            a1 a10 = f30031j.a();
            try {
                if (f30030i == null) {
                    f30030i = new i0();
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
        return f30030i;
    }

    private void f() {
        this.f30034c = System.currentTimeMillis() + TimeUnit.SECONDS.toMillis(1L);
    }

    private void g() {
        try {
            this.f30037f.submit(new Callable() { // from class: io.sentry.h0
                @Override // java.util.concurrent.Callable
                public final Object call() {
                    return i0.b(i0.this);
                }
            }).get(f30029h, TimeUnit.MILLISECONDS);
        } catch (InterruptedException unused) {
            Thread.currentThread().interrupt();
            f();
        } catch (RuntimeException | ExecutionException | TimeoutException unused2) {
            f();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c() {
        this.f30037f.shutdown();
    }

    public String d() {
        if (this.f30034c < System.currentTimeMillis() && this.f30035d.compareAndSet(false, true)) {
            g();
        }
        return this.f30033b;
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
        this.f30035d = new AtomicBoolean(false);
        this.f30037f = Executors.newSingleThreadExecutor(new b());
        this.f30032a = j10;
        this.f30036e = (Callable) io.sentry.util.y.c(callable, "getLocalhost is required");
        g();
    }
}
