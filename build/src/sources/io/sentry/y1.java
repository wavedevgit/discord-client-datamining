package io.sentry;

import java.io.Closeable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y1 implements b0, Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final k7 f29148d;

    /* renamed from: e  reason: collision with root package name */
    private final p7 f29149e;

    /* renamed from: i  reason: collision with root package name */
    private final n6 f29150i;

    /* renamed from: o  reason: collision with root package name */
    private volatile i0 f29151o = null;

    public y1(k7 k7Var) {
        k7 k7Var2 = (k7) io.sentry.util.y.c(k7Var, "The SentryOptions is required.");
        this.f29148d = k7Var2;
        o7 o7Var = new o7(k7Var2);
        this.f29150i = new n6(o7Var);
        this.f29149e = new p7(o7Var, k7Var2);
    }

    private void C(e5 e5Var) {
        if (e5Var.E() == null) {
            e5Var.V(this.f29148d.getDist());
        }
    }

    private void E0(e5 e5Var) {
        if (e5Var.J() == null) {
            e5Var.b0(this.f29148d.getRelease());
        }
    }

    private void F0(e5 e5Var) {
        if (e5Var.L() == null) {
            e5Var.d0(this.f29148d.getSdkVersion());
        }
    }

    private void I(e5 e5Var) {
        if (e5Var.F() == null) {
            e5Var.W(this.f29148d.getEnvironment());
        }
    }

    private void I0(e5 e5Var) {
        if (e5Var.M() == null) {
            e5Var.e0(this.f29148d.getServerName());
        }
        if (this.f29148d.isAttachServerName() && e5Var.M() == null) {
            m();
            if (this.f29151o != null) {
                e5Var.e0(this.f29151o.d());
            }
        }
    }

    private void J(SentryEvent sentryEvent) {
        Throwable P = sentryEvent.P();
        if (P != null) {
            sentryEvent.C0(this.f29150i.d(P));
        }
    }

    private void J0(e5 e5Var) {
        if (e5Var.N() == null) {
            e5Var.g0(new HashMap(this.f29148d.getTags()));
            return;
        }
        for (Map.Entry<String, String> entry : this.f29148d.getTags().entrySet()) {
            if (!e5Var.N().containsKey(entry.getKey())) {
                e5Var.f0(entry.getKey(), entry.getValue());
            }
        }
    }

    private void K0(SentryEvent sentryEvent, Hint hint) {
        boolean z10;
        if (sentryEvent.w0() == null) {
            List<io.sentry.protocol.s> r02 = sentryEvent.r0();
            ArrayList arrayList = null;
            if (r02 != null && !r02.isEmpty()) {
                for (io.sentry.protocol.s sVar : r02) {
                    if (sVar.g() != null && sVar.j() != null) {
                        if (arrayList == null) {
                            arrayList = new ArrayList();
                        }
                        arrayList.add(sVar.j());
                    }
                }
            }
            if (!this.f29148d.isAttachThreads() && !io.sentry.util.n.h(hint, io.sentry.hints.a.class)) {
                if (this.f29148d.isAttachStacktrace()) {
                    if ((r02 == null || r02.isEmpty()) && !n(hint)) {
                        sentryEvent.H0(this.f29149e.a());
                        return;
                    }
                    return;
                }
                return;
            }
            Object g10 = io.sentry.util.n.g(hint);
            if (g10 instanceof io.sentry.hints.a) {
                z10 = ((io.sentry.hints.a) g10).f();
            } else {
                z10 = false;
            }
            sentryEvent.H0(this.f29149e.b(arrayList, z10));
        }
    }

    private boolean L0(e5 e5Var, Hint hint) {
        if (io.sentry.util.n.q(hint)) {
            return true;
        }
        this.f29148d.getLogger().c(SentryLevel.DEBUG, "Event was cached so not applying data relevant to the current app execution/version: %s", e5Var.G());
        return false;
    }

    private void P(SentryEvent sentryEvent) {
        Map a10 = this.f29148d.getModulesLoader().a();
        if (a10 == null) {
            return;
        }
        Map v02 = sentryEvent.v0();
        if (v02 == null) {
            sentryEvent.G0(a10);
        } else {
            v02.putAll(a10);
        }
    }

    private void Y(e5 e5Var) {
        if (e5Var.I() == null) {
            e5Var.a0("java");
        }
    }

    private void m() {
        if (this.f29151o == null) {
            this.f29151o = i0.e();
        }
    }

    private boolean n(Hint hint) {
        return io.sentry.util.n.h(hint, io.sentry.hints.e.class);
    }

    private void p(e5 e5Var) {
        io.sentry.protocol.h0 Q = e5Var.Q();
        if (Q == null) {
            Q = new io.sentry.protocol.h0();
            e5Var.h0(Q);
        }
        if (Q.j() == null && this.f29148d.isSendDefaultPii()) {
            Q.p("{{auto}}");
        }
    }

    private void s(e5 e5Var) {
        E0(e5Var);
        I(e5Var);
        I0(e5Var);
        C(e5Var);
        F0(e5Var);
        J0(e5Var);
        p(e5Var);
    }

    private void y(e5 e5Var) {
        Y(e5Var);
    }

    private void z(e5 e5Var) {
        io.sentry.protocol.d c10 = io.sentry.protocol.d.c(e5Var.D(), this.f29148d);
        if (c10 != null) {
            e5Var.U(c10);
        }
    }

    @Override // io.sentry.b0
    public l7 a(l7 l7Var, Hint hint) {
        y(l7Var);
        if (L0(l7Var, hint)) {
            s(l7Var);
            io.sentry.protocol.r o10 = this.f29148d.getSessionReplay().o();
            if (o10 != null) {
                l7Var.d0(o10);
            }
        }
        return l7Var;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (this.f29151o != null) {
            this.f29151o.c();
        }
    }

    @Override // io.sentry.b0
    public SentryEvent g(SentryEvent sentryEvent, Hint hint) {
        y(sentryEvent);
        J(sentryEvent);
        z(sentryEvent);
        P(sentryEvent);
        if (L0(sentryEvent, hint)) {
            s(sentryEvent);
            K0(sentryEvent, hint);
        }
        return sentryEvent;
    }

    @Override // io.sentry.b0
    public io.sentry.protocol.d0 k(io.sentry.protocol.d0 d0Var, Hint hint) {
        y(d0Var);
        z(d0Var);
        if (L0(d0Var, hint)) {
            s(d0Var);
        }
        return d0Var;
    }
}
