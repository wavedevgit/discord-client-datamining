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
    private final boolean f29159f;

    /* renamed from: g  reason: collision with root package name */
    private final k7 f29160g;

    /* renamed from: a  reason: collision with root package name */
    private final io.sentry.util.a f29154a = new io.sentry.util.a();

    /* renamed from: b  reason: collision with root package name */
    private volatile Timer f29155b = null;

    /* renamed from: c  reason: collision with root package name */
    private final Map f29156c = new ConcurrentHashMap();

    /* renamed from: h  reason: collision with root package name */
    private final AtomicBoolean f29161h = new AtomicBoolean(false);

    /* renamed from: i  reason: collision with root package name */
    private long f29162i = 0;

    /* renamed from: d  reason: collision with root package name */
    private final List f29157d = new ArrayList();

    /* renamed from: e  reason: collision with root package name */
    private final List f29158e = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends TimerTask {
        a() {
        }

        @Override // java.util.TimerTask, java.lang.Runnable
        public void run() {
            for (t0 t0Var : m.this.f29157d) {
                t0Var.c();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends TimerTask {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ List f29164d;

        b(List list) {
            this.f29164d = list;
        }

        @Override // java.util.TimerTask, java.lang.Runnable
        public void run() {
            long currentTimeMillis = System.currentTimeMillis();
            if (currentTimeMillis - m.this.f29162i > 10) {
                this.f29164d.clear();
                m.this.f29162i = currentTimeMillis;
                k3 k3Var = new k3(m.this.f29160g.getDateProvider().now().h());
                for (t0 t0Var : m.this.f29157d) {
                    t0Var.d(k3Var);
                }
                for (c cVar : m.this.f29156c.values()) {
                    if (cVar.c(k3Var) && cVar.f29167b != null) {
                        this.f29164d.add(cVar.f29167b);
                    }
                }
                for (e1 e1Var : this.f29164d) {
                    m.this.d(e1Var);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c {

        /* renamed from: a  reason: collision with root package name */
        private final List f29166a;

        /* renamed from: b  reason: collision with root package name */
        private final e1 f29167b;

        /* renamed from: c  reason: collision with root package name */
        private final long f29168c;

        /* synthetic */ c(m mVar, e1 e1Var, a aVar) {
            this(e1Var);
        }

        boolean c(k3 k3Var) {
            this.f29166a.add(k3Var);
            if (this.f29167b != null && m.this.f29160g.getDateProvider().now().h() > this.f29168c + TimeUnit.MILLISECONDS.toNanos(30000L)) {
                return true;
            }
            return false;
        }

        private c(e1 e1Var) {
            this.f29166a = new ArrayList();
            this.f29167b = e1Var;
            this.f29168c = m.this.f29160g.getDateProvider().now().h();
        }
    }

    public m(k7 k7Var) {
        boolean z10 = false;
        this.f29160g = (k7) io.sentry.util.y.c(k7Var, "The options object is required.");
        for (r0 r0Var : k7Var.getPerformanceCollectors()) {
            if (r0Var instanceof t0) {
                this.f29157d.add((t0) r0Var);
            }
            if (r0Var instanceof s0) {
                this.f29158e.add((s0) r0Var);
            }
        }
        if (this.f29157d.isEmpty() && this.f29158e.isEmpty()) {
            z10 = true;
        }
        this.f29159f = z10;
    }

    @Override // io.sentry.h
    public void a(ISpan iSpan) {
        for (s0 s0Var : this.f29158e) {
            s0Var.a(iSpan);
        }
    }

    @Override // io.sentry.h
    public void b(ISpan iSpan) {
        for (s0 s0Var : this.f29158e) {
            s0Var.b(iSpan);
        }
    }

    @Override // io.sentry.h
    public List c(String str) {
        c cVar = (c) this.f29156c.remove(str);
        ILogger logger = this.f29160g.getLogger();
        SentryLevel sentryLevel = SentryLevel.DEBUG;
        logger.c(sentryLevel, "stop collecting performance info for " + str, new Object[0]);
        if (this.f29156c.isEmpty()) {
            close();
        }
        if (cVar != null) {
            return cVar.f29166a;
        }
        return null;
    }

    @Override // io.sentry.h
    public void close() {
        this.f29160g.getLogger().c(SentryLevel.DEBUG, "stop collecting all performance info for transactions", new Object[0]);
        this.f29156c.clear();
        for (s0 s0Var : this.f29158e) {
            s0Var.clear();
        }
        if (this.f29161h.getAndSet(false)) {
            a1 a10 = this.f29154a.a();
            try {
                if (this.f29155b != null) {
                    this.f29155b.cancel();
                    this.f29155b = null;
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
        this.f29160g.getLogger().c(SentryLevel.DEBUG, "stop collecting performance info for transactions %s (%s)", e1Var.getName(), e1Var.q().p().toString());
        for (s0 s0Var : this.f29158e) {
            s0Var.a(e1Var);
        }
        return c(e1Var.f().toString());
    }

    @Override // io.sentry.h
    public void e(e1 e1Var) {
        if (this.f29159f) {
            this.f29160g.getLogger().c(SentryLevel.INFO, "No collector found. Performance stats will not be captured during transactions.", new Object[0]);
            return;
        }
        for (s0 s0Var : this.f29158e) {
            s0Var.b(e1Var);
        }
        String xVar = e1Var.f().toString();
        if (!this.f29156c.containsKey(xVar)) {
            this.f29156c.put(xVar, new c(this, e1Var, null));
        }
        f(xVar);
    }

    @Override // io.sentry.h
    public void f(String str) {
        if (this.f29159f) {
            this.f29160g.getLogger().c(SentryLevel.INFO, "No collector found. Performance stats will not be captured during transactions.", new Object[0]);
            return;
        }
        if (!this.f29156c.containsKey(str)) {
            this.f29156c.put(str, new c(this, null, null));
        }
        if (!this.f29161h.getAndSet(true)) {
            a1 a10 = this.f29154a.a();
            try {
                if (this.f29155b == null) {
                    this.f29155b = new Timer(true);
                }
                this.f29155b.schedule(new a(), 0L);
                this.f29155b.scheduleAtFixedRate(new b(new ArrayList()), 100L, 100L);
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
