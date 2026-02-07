package io.sentry;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements h {

    /* renamed from: f  reason: collision with root package name */
    private final boolean f28351f;

    /* renamed from: g  reason: collision with root package name */
    private final k7 f28352g;

    /* renamed from: a  reason: collision with root package name */
    private final io.sentry.util.a f28346a = new io.sentry.util.a();

    /* renamed from: b  reason: collision with root package name */
    private volatile Timer f28347b = null;

    /* renamed from: c  reason: collision with root package name */
    private final Map f28348c = new ConcurrentHashMap();

    /* renamed from: h  reason: collision with root package name */
    private final AtomicBoolean f28353h = new AtomicBoolean(false);

    /* renamed from: i  reason: collision with root package name */
    private long f28354i = 0;

    /* renamed from: d  reason: collision with root package name */
    private final List f28349d = new ArrayList();

    /* renamed from: e  reason: collision with root package name */
    private final List f28350e = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends TimerTask {
        a() {
        }

        @Override // java.util.TimerTask, java.lang.Runnable
        public void run() {
            for (t0 t0Var : m.this.f28349d) {
                t0Var.c();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends TimerTask {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ List f28356d;

        b(List list) {
            this.f28356d = list;
        }

        @Override // java.util.TimerTask, java.lang.Runnable
        public void run() {
            long currentTimeMillis = System.currentTimeMillis();
            if (currentTimeMillis - m.this.f28354i > 10) {
                this.f28356d.clear();
                m.this.f28354i = currentTimeMillis;
                k3 k3Var = new k3(m.this.f28352g.getDateProvider().now().h());
                for (t0 t0Var : m.this.f28349d) {
                    t0Var.d(k3Var);
                }
                for (c cVar : m.this.f28348c.values()) {
                    if (cVar.c(k3Var) && cVar.f28359b != null) {
                        this.f28356d.add(cVar.f28359b);
                    }
                }
                for (e1 e1Var : this.f28356d) {
                    m.this.d(e1Var);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c {

        /* renamed from: a  reason: collision with root package name */
        private final List f28358a;

        /* renamed from: b  reason: collision with root package name */
        private final e1 f28359b;

        /* renamed from: c  reason: collision with root package name */
        private final long f28360c;

        /* synthetic */ c(m mVar, e1 e1Var, a aVar) {
            this(e1Var);
        }

        boolean c(k3 k3Var) {
            this.f28358a.add(k3Var);
            if (this.f28359b != null && m.this.f28352g.getDateProvider().now().h() > this.f28360c + TimeUnit.MILLISECONDS.toNanos(30000L)) {
                return true;
            }
            return false;
        }

        private c(e1 e1Var) {
            this.f28358a = new ArrayList();
            this.f28359b = e1Var;
            this.f28360c = m.this.f28352g.getDateProvider().now().h();
        }
    }

    public m(k7 k7Var) {
        boolean z10 = false;
        this.f28352g = (k7) io.sentry.util.y.c(k7Var, "The options object is required.");
        for (r0 r0Var : k7Var.getPerformanceCollectors()) {
            if (r0Var instanceof t0) {
                this.f28349d.add((t0) r0Var);
            }
            if (r0Var instanceof s0) {
                this.f28350e.add((s0) r0Var);
            }
        }
        if (this.f28349d.isEmpty() && this.f28350e.isEmpty()) {
            z10 = true;
        }
        this.f28351f = z10;
    }

    @Override // io.sentry.h
    public void a(ISpan iSpan) {
        for (s0 s0Var : this.f28350e) {
            s0Var.a(iSpan);
        }
    }

    @Override // io.sentry.h
    public void b(ISpan iSpan) {
        for (s0 s0Var : this.f28350e) {
            s0Var.b(iSpan);
        }
    }

    @Override // io.sentry.h
    public List c(String str) {
        c cVar = (c) this.f28348c.remove(str);
        ILogger logger = this.f28352g.getLogger();
        SentryLevel sentryLevel = SentryLevel.DEBUG;
        logger.c(sentryLevel, "stop collecting performance info for " + str, new Object[0]);
        if (this.f28348c.isEmpty()) {
            close();
        }
        if (cVar != null) {
            return cVar.f28358a;
        }
        return null;
    }

    @Override // io.sentry.h
    public void close() {
        this.f28352g.getLogger().c(SentryLevel.DEBUG, "stop collecting all performance info for transactions", new Object[0]);
        this.f28348c.clear();
        for (s0 s0Var : this.f28350e) {
            s0Var.clear();
        }
        if (this.f28353h.getAndSet(false)) {
            a1 a10 = this.f28346a.a();
            try {
                if (this.f28347b != null) {
                    this.f28347b.cancel();
                    this.f28347b = null;
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
    }

    @Override // io.sentry.h
    public List d(e1 e1Var) {
        this.f28352g.getLogger().c(SentryLevel.DEBUG, "stop collecting performance info for transactions %s (%s)", e1Var.getName(), e1Var.q().p().toString());
        for (s0 s0Var : this.f28350e) {
            s0Var.a(e1Var);
        }
        return c(e1Var.f().toString());
    }

    @Override // io.sentry.h
    public void e(e1 e1Var) {
        if (this.f28351f) {
            this.f28352g.getLogger().c(SentryLevel.INFO, "No collector found. Performance stats will not be captured during transactions.", new Object[0]);
            return;
        }
        for (s0 s0Var : this.f28350e) {
            s0Var.b(e1Var);
        }
        String xVar = e1Var.f().toString();
        if (!this.f28348c.containsKey(xVar)) {
            this.f28348c.put(xVar, new c(this, e1Var, null));
        }
        f(xVar);
    }

    @Override // io.sentry.h
    public void f(String str) {
        if (this.f28351f) {
            this.f28352g.getLogger().c(SentryLevel.INFO, "No collector found. Performance stats will not be captured during transactions.", new Object[0]);
            return;
        }
        if (!this.f28348c.containsKey(str)) {
            this.f28348c.put(str, new c(this, null, null));
        }
        if (!this.f28353h.getAndSet(true)) {
            a1 a10 = this.f28346a.a();
            try {
                if (this.f28347b == null) {
                    this.f28347b = new Timer(true);
                }
                this.f28347b.schedule(new a(), 0L);
                this.f28347b.scheduleAtFixedRate(new b(new ArrayList()), 100L, 100L);
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
    }
}
