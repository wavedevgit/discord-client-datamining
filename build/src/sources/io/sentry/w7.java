package io.sentry;

import io.sentry.z3;
import java.util.List;
import java.util.ListIterator;
import java.util.Map;
import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w7 implements e1 {

    /* renamed from: b  reason: collision with root package name */
    private final d8 f30491b;

    /* renamed from: d  reason: collision with root package name */
    private final w0 f30493d;

    /* renamed from: e  reason: collision with root package name */
    private String f30494e;

    /* renamed from: g  reason: collision with root package name */
    private volatile TimerTask f30496g;

    /* renamed from: h  reason: collision with root package name */
    private volatile TimerTask f30497h;

    /* renamed from: i  reason: collision with root package name */
    private volatile Timer f30498i;

    /* renamed from: n  reason: collision with root package name */
    private io.sentry.protocol.g0 f30503n;

    /* renamed from: o  reason: collision with root package name */
    private final j1 f30504o;

    /* renamed from: p  reason: collision with root package name */
    private final io.sentry.protocol.c f30505p;

    /* renamed from: q  reason: collision with root package name */
    private final h f30506q;

    /* renamed from: r  reason: collision with root package name */
    private final v8 f30507r;

    /* renamed from: a  reason: collision with root package name */
    private final io.sentry.protocol.x f30490a = new io.sentry.protocol.x();

    /* renamed from: c  reason: collision with root package name */
    private final List f30492c = new CopyOnWriteArrayList();

    /* renamed from: f  reason: collision with root package name */
    private c f30495f = c.f30510c;

    /* renamed from: j  reason: collision with root package name */
    private final io.sentry.util.a f30499j = new io.sentry.util.a();

    /* renamed from: k  reason: collision with root package name */
    private final io.sentry.util.a f30500k = new io.sentry.util.a();

    /* renamed from: l  reason: collision with root package name */
    private final AtomicBoolean f30501l = new AtomicBoolean(false);

    /* renamed from: m  reason: collision with root package name */
    private final AtomicBoolean f30502m = new AtomicBoolean(false);

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends TimerTask {
        a() {
        }

        @Override // java.util.TimerTask, java.lang.Runnable
        public void run() {
            w7.this.T();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends TimerTask {
        b() {
        }

        @Override // java.util.TimerTask, java.lang.Runnable
        public void run() {
            w7.this.S();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: c  reason: collision with root package name */
        static final c f30510c = d();

        /* renamed from: a  reason: collision with root package name */
        private final boolean f30511a;

        /* renamed from: b  reason: collision with root package name */
        private final l8 f30512b;

        private c(boolean z10, l8 l8Var) {
            this.f30511a = z10;
            this.f30512b = l8Var;
        }

        static c c(l8 l8Var) {
            return new c(true, l8Var);
        }

        private static c d() {
            return new c(false, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public w7(t8 t8Var, w0 w0Var, v8 v8Var, h hVar) {
        this.f30498i = null;
        io.sentry.protocol.c cVar = new io.sentry.protocol.c();
        this.f30505p = cVar;
        io.sentry.util.y.c(t8Var, "context is required");
        io.sentry.util.y.c(w0Var, "scopes are required");
        d8 d8Var = new d8(t8Var, this, w0Var, v8Var);
        this.f30491b = d8Var;
        this.f30494e = t8Var.y();
        this.f30504o = t8Var.e();
        this.f30493d = w0Var;
        Boolean bool = Boolean.TRUE;
        hVar = bool.equals(c()) ? hVar : null;
        this.f30506q = hVar;
        this.f30503n = t8Var.A();
        this.f30507r = v8Var;
        V(d8Var);
        io.sentry.protocol.x L = L();
        if (!L.equals(io.sentry.protocol.x.f30052e) && bool.equals(c())) {
            cVar.v(new n3(L));
        }
        if (hVar != null) {
            hVar.e(this);
        }
        if (v8Var.l() == null && v8Var.k() == null) {
            return;
        }
        this.f30498i = new Timer(true);
        U();
        p();
    }

    private void C() {
        a1 a10 = this.f30499j.a();
        try {
            if (this.f30497h != null) {
                this.f30497h.cancel();
                this.f30502m.set(false);
                this.f30497h = null;
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

    private void D() {
        a1 a10 = this.f30499j.a();
        try {
            if (this.f30496g != null) {
                this.f30496g.cancel();
                this.f30501l.set(false);
                this.f30496g = null;
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

    private ISpan E(e8 e8Var, k8 k8Var) {
        if (this.f30491b.isFinished()) {
            return y2.u();
        }
        if (!this.f30504o.equals(e8Var.e())) {
            return y2.u();
        }
        if (io.sentry.util.e0.b(this.f30493d.b().getIgnoredSpanOrigins(), k8Var.a())) {
            return y2.u();
        }
        j8 h10 = e8Var.h();
        String f10 = e8Var.f();
        String c10 = e8Var.c();
        if (this.f30492c.size() < this.f30493d.b().getMaxSpans()) {
            io.sentry.util.y.c(h10, "parentSpanId is required");
            io.sentry.util.y.c(f10, "operation is required");
            D();
            d8 d8Var = new d8(this, this.f30493d, e8Var, k8Var, new g8() { // from class: io.sentry.s7
                @Override // io.sentry.g8
                public final void a(d8 d8Var2) {
                    w7.y(w7.this, d8Var2);
                }
            });
            V(d8Var);
            this.f30492c.add(d8Var);
            h hVar = this.f30506q;
            if (hVar != null) {
                hVar.b(d8Var);
            }
            return d8Var;
        }
        this.f30493d.b().getLogger().c(SentryLevel.WARNING, "Span operation: %s, description: %s dropped due to limit reached. Returning NoOpSpan.", f10, c10);
        return y2.u();
    }

    private ISpan F(j8 j8Var, String str, String str2, k8 k8Var) {
        e8 a10 = q().a(str, j8Var, null);
        a10.r(str2);
        a10.s(j1.SENTRY);
        return E(a10, k8Var);
    }

    private ISpan G(String str, String str2, j5 j5Var, j1 j1Var, k8 k8Var) {
        if (this.f30491b.isFinished()) {
            return y2.u();
        }
        if (!this.f30504o.equals(j1Var)) {
            return y2.u();
        }
        if (this.f30492c.size() < this.f30493d.b().getMaxSpans()) {
            return this.f30491b.o(str, str2, j5Var, j1Var, k8Var);
        }
        this.f30493d.b().getLogger().c(SentryLevel.WARNING, "Span operation: %s, description: %s dropped due to limit reached. Returning NoOpSpan.", str, str2);
        return y2.u();
    }

    private io.sentry.protocol.x L() {
        if (!this.f30491b.q().j().equals(io.sentry.protocol.x.f30052e)) {
            return this.f30491b.q().j();
        }
        return this.f30493d.b().getContinuousProfiler().h();
    }

    private boolean Q() {
        ListIterator listIterator = this.f30492c.listIterator();
        while (listIterator.hasNext()) {
            d8 d8Var = (d8) listIterator.next();
            if (!d8Var.isFinished() && d8Var.r() == null) {
                return false;
            }
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void S() {
        boolean z10;
        l8 a10 = a();
        if (a10 == null) {
            a10 = l8.DEADLINE_EXCEEDED;
        }
        if (this.f30507r.l() != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        b(a10, z10, null);
        this.f30502m.set(false);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void T() {
        l8 a10 = a();
        if (a10 == null) {
            a10 = l8.OK;
        }
        k(a10);
        this.f30501l.set(false);
    }

    private void U() {
        Long k10 = this.f30507r.k();
        if (k10 != null) {
            a1 a10 = this.f30499j.a();
            try {
                if (this.f30498i != null) {
                    C();
                    this.f30502m.set(true);
                    this.f30497h = new b();
                    this.f30498i.schedule(this.f30497h, k10.longValue());
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

    private void V(ISpan iSpan) {
        io.sentry.util.thread.a threadChecker = this.f30493d.b().getThreadChecker();
        io.sentry.protocol.x L = L();
        if (!L.equals(io.sentry.protocol.x.f30052e) && Boolean.TRUE.equals(iSpan.c())) {
            iSpan.j("profiler_id", L.toString());
        }
        iSpan.j("thread.id", String.valueOf(threadChecker.c()));
        iSpan.j("thread.name", threadChecker.b());
    }

    private void c0(d dVar) {
        a1 a10 = this.f30500k.a();
        try {
            if (dVar.q()) {
                final AtomicReference atomicReference = new AtomicReference();
                this.f30493d.o(new b4() { // from class: io.sentry.v7
                    @Override // io.sentry.b4
                    public final void a(IScope iScope) {
                        atomicReference.set(iScope.J());
                    }
                });
                dVar.I(q().p(), (io.sentry.protocol.x) atomicReference.get(), this.f30493d.b(), N(), getName(), P());
                dVar.b();
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

    public static /* synthetic */ void v(w7 w7Var, IScope iScope, e1 e1Var) {
        w7Var.getClass();
        if (e1Var == w7Var) {
            iScope.E();
        }
    }

    public static /* synthetic */ void w(final w7 w7Var, final IScope iScope) {
        w7Var.getClass();
        iScope.R(new z3.c() { // from class: io.sentry.u7
            @Override // io.sentry.z3.c
            public final void a(e1 e1Var) {
                w7.v(w7.this, iScope, e1Var);
            }
        });
    }

    public static /* synthetic */ void x(w7 w7Var, IScope iScope) {
        w7Var.getClass();
        iScope.A(w7Var);
    }

    public static /* synthetic */ void y(w7 w7Var, d8 d8Var) {
        h hVar = w7Var.f30506q;
        if (hVar != null) {
            hVar.a(d8Var);
        }
        c cVar = w7Var.f30495f;
        if (w7Var.f30507r.l() != null) {
            if (!w7Var.f30507r.q() || w7Var.Q()) {
                w7Var.p();
            }
        } else if (cVar.f30511a) {
            w7Var.k(cVar.f30512b);
        }
    }

    public static /* synthetic */ void z(w7 w7Var, g8 g8Var, AtomicReference atomicReference, d8 d8Var) {
        if (g8Var != null) {
            w7Var.getClass();
            g8Var.a(d8Var);
        }
        u8 n10 = w7Var.f30507r.n();
        if (n10 != null) {
            n10.a(w7Var);
        }
        h hVar = w7Var.f30506q;
        if (hVar != null) {
            atomicReference.set(hVar.d(w7Var));
        }
    }

    public void H(l8 l8Var, j5 j5Var, boolean z10, Hint hint) {
        q3 q3Var;
        l8 l8Var2;
        j5 r10 = this.f30491b.r();
        if (j5Var == null) {
            j5Var = r10;
        }
        if (j5Var == null) {
            j5Var = this.f30493d.b().getDateProvider().now();
        }
        for (d8 d8Var : this.f30492c) {
            if (d8Var.y().d()) {
                if (l8Var != null) {
                    l8Var2 = l8Var;
                } else {
                    l8Var2 = q().f29549r;
                }
                d8Var.s(l8Var2, j5Var);
            }
        }
        this.f30495f = c.c(l8Var);
        if (!this.f30491b.isFinished()) {
            if (!this.f30507r.q() || Q()) {
                final AtomicReference atomicReference = new AtomicReference();
                final g8 B = this.f30491b.B();
                this.f30491b.G(new g8() { // from class: io.sentry.q7
                    @Override // io.sentry.g8
                    public final void a(d8 d8Var2) {
                        w7.z(w7.this, B, atomicReference, d8Var2);
                    }
                });
                this.f30491b.s(this.f30495f.f30512b, j5Var);
                Boolean bool = Boolean.TRUE;
                if (bool.equals(c()) && bool.equals(R())) {
                    q3Var = this.f30493d.b().getTransactionProfiler().b(this, (List) atomicReference.get(), this.f30493d.b());
                } else {
                    q3Var = null;
                }
                if (this.f30493d.b().isContinuousProfilingEnabled()) {
                    o3 profileLifecycle = this.f30493d.b().getProfileLifecycle();
                    o3 o3Var = o3.TRACE;
                    if (profileLifecycle == o3Var && this.f30491b.q().j().equals(io.sentry.protocol.x.f30052e)) {
                        this.f30493d.b().getContinuousProfiler().g(o3Var);
                    }
                }
                if (atomicReference.get() != null) {
                    ((List) atomicReference.get()).clear();
                }
                this.f30493d.o(new b4() { // from class: io.sentry.r7
                    @Override // io.sentry.b4
                    public final void a(IScope iScope) {
                        w7.w(w7.this, iScope);
                    }
                });
                io.sentry.protocol.d0 d0Var = new io.sentry.protocol.d0(this);
                if (this.f30498i != null) {
                    a1 a10 = this.f30499j.a();
                    try {
                        if (this.f30498i != null) {
                            D();
                            C();
                            this.f30498i.cancel();
                            this.f30498i = null;
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
                if (z10 && this.f30492c.isEmpty() && this.f30507r.l() != null) {
                    this.f30493d.b().getLogger().c(SentryLevel.DEBUG, "Dropping idle transaction %s because it has no child spans", this.f30494e);
                    return;
                }
                d0Var.o0().putAll(this.f30491b.w());
                this.f30493d.G(d0Var, i(), hint, q3Var);
            }
        }
    }

    public List I() {
        return this.f30492c;
    }

    public io.sentry.protocol.c J() {
        return this.f30505p;
    }

    public Map K() {
        return this.f30491b.u();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d8 M() {
        return this.f30491b;
    }

    public s8 N() {
        return this.f30491b.A();
    }

    public List O() {
        return this.f30492c;
    }

    public io.sentry.protocol.g0 P() {
        return this.f30503n;
    }

    public Boolean R() {
        return this.f30491b.F();
    }

    public void W(String str, Number number) {
        if (!this.f30491b.w().containsKey(str)) {
            h(str, number);
        }
    }

    public void X(String str, Number number, a2 a2Var) {
        if (!this.f30491b.w().containsKey(str)) {
            m(str, number, a2Var);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ISpan Y(j8 j8Var, String str, String str2) {
        return a0(j8Var, str, str2, new k8());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ISpan Z(j8 j8Var, String str, String str2, j5 j5Var, j1 j1Var, k8 k8Var) {
        e8 a10 = q().a(str, j8Var, null);
        a10.r(str2);
        a10.s(j1Var);
        k8Var.h(j5Var);
        return E(a10, k8Var);
    }

    @Override // io.sentry.ISpan
    public l8 a() {
        return this.f30491b.a();
    }

    ISpan a0(j8 j8Var, String str, String str2, k8 k8Var) {
        return F(j8Var, str, str2, k8Var);
    }

    @Override // io.sentry.e1
    public void b(l8 l8Var, boolean z10, Hint hint) {
        if (isFinished()) {
            return;
        }
        j5 now = this.f30493d.b().getDateProvider().now();
        ListIterator d10 = io.sentry.util.c.d((CopyOnWriteArrayList) this.f30492c);
        while (d10.hasPrevious()) {
            d8 d8Var = (d8) d10.previous();
            d8Var.G(null);
            d8Var.s(l8Var, now);
        }
        H(l8Var, now, z10, hint);
    }

    public ISpan b0(String str, String str2) {
        return o(str, str2, null, j1.SENTRY, new k8());
    }

    @Override // io.sentry.ISpan
    public Boolean c() {
        return this.f30491b.c();
    }

    @Override // io.sentry.ISpan
    public void d() {
        k(a());
    }

    @Override // io.sentry.ISpan
    public void e(String str) {
        if (this.f30491b.isFinished()) {
            this.f30493d.b().getLogger().c(SentryLevel.DEBUG, "The transaction is already finished. Description %s cannot be set", str);
        } else {
            this.f30491b.e(str);
        }
    }

    @Override // io.sentry.e1
    public io.sentry.protocol.x f() {
        return this.f30490a;
    }

    @Override // io.sentry.ISpan
    public ISpan g(String str) {
        return b0(str, null);
    }

    @Override // io.sentry.ISpan
    public String getDescription() {
        return this.f30491b.getDescription();
    }

    @Override // io.sentry.e1
    public String getName() {
        return this.f30494e;
    }

    @Override // io.sentry.ISpan
    public void h(String str, Number number) {
        this.f30491b.h(str, number);
    }

    @Override // io.sentry.ISpan
    public q8 i() {
        d b10;
        if (this.f30493d.b().isTraceSampling() && (b10 = q().b()) != null) {
            c0(b10);
            return b10.J();
        }
        return null;
    }

    @Override // io.sentry.ISpan
    public boolean isFinished() {
        return this.f30491b.isFinished();
    }

    @Override // io.sentry.ISpan
    public void j(String str, Object obj) {
        if (this.f30491b.isFinished()) {
            this.f30493d.b().getLogger().c(SentryLevel.DEBUG, "The transaction is already finished. Data %s cannot be set", str);
        } else {
            this.f30491b.j(str, obj);
        }
    }

    @Override // io.sentry.ISpan
    public void k(l8 l8Var) {
        s(l8Var, null);
    }

    @Override // io.sentry.ISpan
    public ISpan l(String str, String str2, j5 j5Var, j1 j1Var) {
        return o(str, str2, j5Var, j1Var, new k8());
    }

    @Override // io.sentry.ISpan
    public void m(String str, Number number, a2 a2Var) {
        this.f30491b.m(str, number, a2Var);
    }

    @Override // io.sentry.ISpan
    public a1 makeCurrent() {
        this.f30493d.o(new b4() { // from class: io.sentry.t7
            @Override // io.sentry.b4
            public final void a(IScope iScope) {
                w7.x(w7.this, iScope);
            }
        });
        return q2.a();
    }

    @Override // io.sentry.e1
    public ISpan n() {
        ListIterator d10 = io.sentry.util.c.d((CopyOnWriteArrayList) this.f30492c);
        while (d10.hasPrevious()) {
            d8 d8Var = (d8) d10.previous();
            if (!d8Var.isFinished()) {
                return d8Var;
            }
        }
        return null;
    }

    @Override // io.sentry.ISpan
    public ISpan o(String str, String str2, j5 j5Var, j1 j1Var, k8 k8Var) {
        return G(str, str2, j5Var, j1Var, k8Var);
    }

    @Override // io.sentry.e1
    public void p() {
        Long l10;
        a1 a10 = this.f30499j.a();
        try {
            if (this.f30498i != null && (l10 = this.f30507r.l()) != null) {
                D();
                this.f30501l.set(true);
                this.f30496g = new a();
                this.f30498i.schedule(this.f30496g, l10.longValue());
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

    @Override // io.sentry.ISpan
    public e8 q() {
        return this.f30491b.q();
    }

    @Override // io.sentry.ISpan
    public j5 r() {
        return this.f30491b.r();
    }

    @Override // io.sentry.ISpan
    public void s(l8 l8Var, j5 j5Var) {
        H(l8Var, j5Var, true, null);
    }

    @Override // io.sentry.ISpan
    public j5 t() {
        return this.f30491b.t();
    }
}
