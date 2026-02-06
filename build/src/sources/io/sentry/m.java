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
    private final boolean f28303f;

    /* renamed from: g  reason: collision with root package name */
    private final k7 f28304g;

    /* renamed from: a  reason: collision with root package name */
    private final io.sentry.util.a f28298a = new io.sentry.util.a();

    /* renamed from: b  reason: collision with root package name */
    private volatile Timer f28299b = null;

    /* renamed from: c  reason: collision with root package name */
    private final Map f28300c = new ConcurrentHashMap();

    /* renamed from: h  reason: collision with root package name */
    private final AtomicBoolean f28305h = new AtomicBoolean(false);

    /* renamed from: i  reason: collision with root package name */
    private long f28306i = 0;

    /* renamed from: d  reason: collision with root package name */
    private final List f28301d = new ArrayList();

    /* renamed from: e  reason: collision with root package name */
    private final List f28302e = new ArrayList();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends TimerTask {
        a() {
        }

        @Override // java.util.TimerTask, java.lang.Runnable
        public void run() {
            for (t0 t0Var : m.this.f28301d) {
                t0Var.c();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends TimerTask {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ List f28308d;

        b(List list) {
            this.f28308d = list;
        }

        @Override // java.util.TimerTask, java.lang.Runnable
        public void run() {
            long currentTimeMillis = System.currentTimeMillis();
            if (currentTimeMillis - m.this.f28306i > 10) {
                this.f28308d.clear();
                m.this.f28306i = currentTimeMillis;
                k3 k3Var = new k3(m.this.f28304g.getDateProvider().now().h());
                for (t0 t0Var : m.this.f28301d) {
                    t0Var.d(k3Var);
                }
                for (c cVar : m.this.f28300c.values()) {
                    if (cVar.c(k3Var) && cVar.f28311b != null) {
                        this.f28308d.add(cVar.f28311b);
                    }
                }
                for (e1 e1Var : this.f28308d) {
                    m.this.d(e1Var);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c {

        /* renamed from: a  reason: collision with root package name */
        private final List f28310a;

        /* renamed from: b  reason: collision with root package name */
        private final e1 f28311b;

        /* renamed from: c  reason: collision with root package name */
        private final long f28312c;

        /* synthetic */ c(m mVar, e1 e1Var, a aVar) {
            this(e1Var);
        }

        boolean c(k3 k3Var) {
            this.f28310a.add(k3Var);
            if (this.f28311b != null && m.this.f28304g.getDateProvider().now().h() > this.f28312c + TimeUnit.MILLISECONDS.toNanos(30000L)) {
                return true;
            }
            return false;
        }

        private c(e1 e1Var) {
            this.f28310a = new ArrayList();
            this.f28311b = e1Var;
            this.f28312c = m.this.f28304g.getDateProvider().now().h();
        }
    }

    public m(k7 k7Var) {
        boolean z10 = false;
        this.f28304g = (k7) io.sentry.util.y.c(k7Var, "The options object is required.");
        for (r0 r0Var : k7Var.getPerformanceCollectors()) {
            if (r0Var instanceof t0) {
                this.f28301d.add((t0) r0Var);
            }
            if (r0Var instanceof s0) {
                this.f28302e.add((s0) r0Var);
            }
        }
        if (this.f28301d.isEmpty() && this.f28302e.isEmpty()) {
            z10 = true;
        }
        this.f28303f = z10;
    }

    @Override // io.sentry.h
    public void a(ISpan iSpan) {
        for (s0 s0Var : this.f28302e) {
            s0Var.a(iSpan);
        }
    }

    @Override // io.sentry.h
    public void b(ISpan iSpan) {
        for (s0 s0Var : this.f28302e) {
            s0Var.b(iSpan);
        }
    }

    @Override // io.sentry.h
    public List c(String str) {
        c cVar = (c) this.f28300c.remove(str);
        ILogger logger = this.f28304g.getLogger();
        SentryLevel sentryLevel = SentryLevel.DEBUG;
        logger.c(sentryLevel, "stop collecting performance info for " + str, new Object[0]);
        if (this.f28300c.isEmpty()) {
            close();
        }
        if (cVar != null) {
            return cVar.f28310a;
        }
        return null;
    }

    @Override // io.sentry.h
    public void close() {
        this.f28304g.getLogger().c(SentryLevel.DEBUG, "stop collecting all performance info for transactions", new Object[0]);
        this.f28300c.clear();
        for (s0 s0Var : this.f28302e) {
            s0Var.clear();
        }
        if (this.f28305h.getAndSet(false)) {
            a1 a10 = this.f28298a.a();
            try {
                if (this.f28299b != null) {
                    this.f28299b.cancel();
                    this.f28299b = null;
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
        this.f28304g.getLogger().c(SentryLevel.DEBUG, "stop collecting performance info for transactions %s (%s)", e1Var.getName(), e1Var.q().p().toString());
        for (s0 s0Var : this.f28302e) {
            s0Var.a(e1Var);
        }
        return c(e1Var.f().toString());
    }

    @Override // io.sentry.h
    public void e(e1 e1Var) {
        if (this.f28303f) {
            this.f28304g.getLogger().c(SentryLevel.INFO, "No collector found. Performance stats will not be captured during transactions.", new Object[0]);
            return;
        }
        for (s0 s0Var : this.f28302e) {
            s0Var.b(e1Var);
        }
        String xVar = e1Var.f().toString();
        if (!this.f28300c.containsKey(xVar)) {
            this.f28300c.put(xVar, new c(this, e1Var, null));
        }
        f(xVar);
    }

    @Override // io.sentry.h
    public void f(String str) {
        if (this.f28303f) {
            this.f28304g.getLogger().c(SentryLevel.INFO, "No collector found. Performance stats will not be captured during transactions.", new Object[0]);
            return;
        }
        if (!this.f28300c.containsKey(str)) {
            this.f28300c.put(str, new c(this, null, null));
        }
        if (!this.f28305h.getAndSet(true)) {
            a1 a10 = this.f28298a.a();
            try {
                if (this.f28299b == null) {
                    this.f28299b = new Timer(true);
                }
                this.f28299b.schedule(new a(), 0L);
                this.f28299b.scheduleAtFixedRate(new b(new ArrayList()), 100L, 100L);
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
