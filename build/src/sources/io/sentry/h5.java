package io.sentry;

import io.sentry.k7;
import io.sentry.z3;
import io.sentry.z7;
import java.io.Closeable;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h5 implements y0 {

    /* renamed from: b  reason: collision with root package name */
    private final k7 f28209b;

    /* renamed from: c  reason: collision with root package name */
    private final io.sentry.transport.q f28210c;

    /* renamed from: e  reason: collision with root package name */
    private final io.sentry.logger.b f28212e;

    /* renamed from: d  reason: collision with root package name */
    private final b f28211d = new b();

    /* renamed from: a  reason: collision with root package name */
    private boolean f28208a = true;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements Comparator {
        private b() {
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(Breadcrumb breadcrumb, Breadcrumb breadcrumb2) {
            return breadcrumb.t().compareTo(breadcrumb2.t());
        }
    }

    public h5(k7 k7Var) {
        this.f28209b = (k7) io.sentry.util.y.c(k7Var, "SentryOptions is required.");
        g1 transportFactory = k7Var.getTransportFactory();
        if (transportFactory instanceof c3) {
            transportFactory = new io.sentry.a();
            k7Var.setTransportFactory(transportFactory);
        }
        this.f28210c = transportFactory.a(k7Var, new x3(k7Var).a());
        if (k7Var.getLogs().a()) {
            this.f28212e = new io.sentry.logger.e(k7Var, this);
        } else {
            this.f28212e = io.sentry.logger.f.a();
        }
    }

    private void A(IScope iScope, Hint hint) {
        e1 l10 = iScope.l();
        if (l10 != null && io.sentry.util.n.h(hint, io.sentry.hints.q.class)) {
            Object g10 = io.sentry.util.n.g(hint);
            if (g10 instanceof io.sentry.hints.f) {
                ((io.sentry.hints.f) g10).c(l10.f());
                l10.b(l8.ABORTED, false, hint);
                return;
            }
            l10.b(l8.ABORTED, false, null);
        }
    }

    private List B(Hint hint) {
        List e10 = hint.e();
        io.sentry.b g10 = hint.g();
        if (g10 != null) {
            e10.add(g10);
        }
        io.sentry.b i10 = hint.i();
        if (i10 != null) {
            e10.add(i10);
        }
        io.sentry.b h10 = hint.h();
        if (h10 != null) {
            e10.add(h10);
        }
        return e10;
    }

    private q8 C(IScope iScope, Hint hint, e5 e5Var, String str) {
        if (io.sentry.util.n.h(hint, io.sentry.hints.c.class)) {
            if (e5Var != null) {
                return d.c(e5Var, str, this.f28209b).J();
            }
            return null;
        } else if (iScope != null) {
            e1 l10 = iScope.l();
            if (l10 != null) {
                return l10.i();
            }
            return io.sentry.util.j0.g(iScope, this.f28209b).h();
        } else {
            return null;
        }
    }

    private q8 D(IScope iScope, Hint hint, SentryEvent sentryEvent) {
        String str;
        if (sentryEvent != null) {
            str = sentryEvent.y0();
        } else {
            str = null;
        }
        return C(iScope, hint, sentryEvent, str);
    }

    private SentryEvent E(SentryEvent sentryEvent, Hint hint, List list) {
        Iterator it = list.iterator();
        while (true) {
            if (!it.hasNext()) {
                break;
            }
            b0 b0Var = (b0) it.next();
            try {
                boolean z10 = b0Var instanceof c;
                boolean h10 = io.sentry.util.n.h(hint, io.sentry.hints.c.class);
                if (h10 && z10) {
                    sentryEvent = b0Var.g(sentryEvent, hint);
                    continue;
                } else if (!h10 && !z10) {
                    sentryEvent = b0Var.g(sentryEvent, hint);
                    continue;
                }
            } catch (Throwable th2) {
                this.f28209b.getLogger().a(SentryLevel.ERROR, th2, "An exception occurred while processing event by processor: %s", b0Var.getClass().getName());
                continue;
            }
            if (sentryEvent == null) {
                this.f28209b.getLogger().c(SentryLevel.DEBUG, "Event was dropped by a processor: %s", b0Var.getClass().getName());
                this.f28209b.getClientReportRecorder().a(io.sentry.clientreport.f.EVENT_PROCESSOR, j.Error);
                break;
            }
        }
        return sentryEvent;
    }

    private l7 F(l7 l7Var, Hint hint, List list) {
        Iterator it = list.iterator();
        while (true) {
            if (!it.hasNext()) {
                break;
            }
            b0 b0Var = (b0) it.next();
            try {
                l7Var = b0Var.a(l7Var, hint);
                continue;
            } catch (Throwable th2) {
                this.f28209b.getLogger().a(SentryLevel.ERROR, th2, "An exception occurred while processing replay event by processor: %s", b0Var.getClass().getName());
                continue;
            }
            if (l7Var == null) {
                this.f28209b.getLogger().c(SentryLevel.DEBUG, "Replay event was dropped by a processor: %s", b0Var.getClass().getName());
                this.f28209b.getClientReportRecorder().a(io.sentry.clientreport.f.EVENT_PROCESSOR, j.Replay);
                break;
            }
        }
        return l7Var;
    }

    private io.sentry.protocol.d0 G(io.sentry.protocol.d0 d0Var, Hint hint, List list) {
        int size;
        Iterator it = list.iterator();
        while (true) {
            if (!it.hasNext()) {
                break;
            }
            b0 b0Var = (b0) it.next();
            int size2 = d0Var.q0().size();
            try {
                d0Var = b0Var.k(d0Var, hint);
            } catch (Throwable th2) {
                this.f28209b.getLogger().a(SentryLevel.ERROR, th2, "An exception occurred while processing transaction by processor: %s", b0Var.getClass().getName());
            }
            if (d0Var == null) {
                size = 0;
            } else {
                size = d0Var.q0().size();
            }
            if (d0Var == null) {
                this.f28209b.getLogger().c(SentryLevel.DEBUG, "Transaction was dropped by a processor: %s", b0Var.getClass().getName());
                io.sentry.clientreport.h clientReportRecorder = this.f28209b.getClientReportRecorder();
                io.sentry.clientreport.f fVar = io.sentry.clientreport.f.EVENT_PROCESSOR;
                clientReportRecorder.a(fVar, j.Transaction);
                this.f28209b.getClientReportRecorder().c(fVar, j.Span, size2 + 1);
                break;
            } else if (size < size2) {
                int i10 = size2 - size;
                this.f28209b.getLogger().c(SentryLevel.DEBUG, "%d spans were dropped by a processor: %s", Integer.valueOf(i10), b0Var.getClass().getName());
                this.f28209b.getClientReportRecorder().c(io.sentry.clientreport.f.EVENT_PROCESSOR, j.Span, i10);
            }
        }
        return d0Var;
    }

    private boolean H() {
        io.sentry.util.b0 a10;
        if (this.f28209b.getSampleRate() == null) {
            a10 = null;
        } else {
            a10 = io.sentry.util.d0.a();
        }
        if (this.f28209b.getSampleRate() == null || a10 == null || this.f28209b.getSampleRate().doubleValue() >= a10.c()) {
            return true;
        }
        return false;
    }

    private io.sentry.protocol.x I(l5 l5Var, Hint hint) {
        k7.b beforeEnvelopeCallback = this.f28209b.getBeforeEnvelopeCallback();
        if (beforeEnvelopeCallback != null) {
            try {
                beforeEnvelopeCallback.a(l5Var, hint);
            } catch (Throwable th2) {
                this.f28209b.getLogger().b(SentryLevel.ERROR, "The BeforeEnvelope callback threw an exception.", th2);
            }
        }
        u6.d().c(this.f28209b.getLogger());
        if (hint == null) {
            this.f28210c.Q1(l5Var);
        } else {
            this.f28210c.c0(l5Var, hint);
        }
        io.sentry.protocol.x a10 = l5Var.b().a();
        if (a10 == null) {
            return io.sentry.protocol.x.f28663e;
        }
        return a10;
    }

    private boolean J(e5 e5Var, Hint hint) {
        if (io.sentry.util.n.q(hint)) {
            return true;
        }
        this.f28209b.getLogger().c(SentryLevel.DEBUG, "Event was cached so not applying scope: %s", e5Var.G());
        return false;
    }

    private boolean K(z7 z7Var, z7 z7Var2) {
        if (z7Var2 == null) {
            return false;
        }
        if (z7Var == null) {
            return true;
        }
        z7.b l10 = z7Var2.l();
        z7.b bVar = z7.b.Crashed;
        if (l10 == bVar && z7Var.l() != bVar) {
            return true;
        }
        if (z7Var2.e() <= 0 || z7Var.e() > 0) {
            return false;
        }
        return true;
    }

    private void L(e5 e5Var, Collection collection) {
        List B = e5Var.B();
        if (B != null && !collection.isEmpty()) {
            B.addAll(collection);
            Collections.sort(B, this.f28211d);
        }
    }

    public static /* synthetic */ void n(z7 z7Var) {
    }

    public static /* synthetic */ void o(h5 h5Var, SentryEvent sentryEvent, Hint hint, z7 z7Var) {
        z7.b bVar;
        String str;
        boolean z10 = false;
        if (z7Var != null) {
            h5Var.getClass();
            String str2 = null;
            if (sentryEvent.A0()) {
                bVar = z7.b.Crashed;
            } else {
                bVar = null;
            }
            z10 = (z7.b.Crashed == bVar || sentryEvent.B0()) ? true : true;
            if (sentryEvent.K() != null && sentryEvent.K().l() != null && sentryEvent.K().l().containsKey("user-agent")) {
                str = (String) sentryEvent.K().l().get("user-agent");
            } else {
                str = null;
            }
            Object g10 = io.sentry.util.n.g(hint);
            if (g10 instanceof io.sentry.hints.a) {
                str2 = ((io.sentry.hints.a) g10).h();
                bVar = z7.b.Abnormal;
            }
            if (z7Var.q(bVar, str, z10, str2) && z7Var.m()) {
                z7Var.c();
                return;
            }
            return;
        }
        h5Var.f28209b.getLogger().c(SentryLevel.INFO, "Session is null on scope.withSession", new Object[0]);
    }

    private void p(IScope iScope, Hint hint) {
        if (iScope != null) {
            hint.a(iScope.O());
        }
    }

    private e5 q(e5 e5Var, IScope iScope) {
        if (iScope != null) {
            if (e5Var.K() == null) {
                e5Var.c0(iScope.c());
            }
            if (e5Var.Q() == null) {
                e5Var.h0(iScope.D());
            }
            if (e5Var.N() == null) {
                e5Var.g0(new HashMap(iScope.w()));
            } else {
                for (Map.Entry entry : iScope.w().entrySet()) {
                    if (!e5Var.N().containsKey(entry.getKey())) {
                        e5Var.N().put((String) entry.getKey(), (String) entry.getValue());
                    }
                }
            }
            if (e5Var.B() == null) {
                e5Var.T(new ArrayList(iScope.t()));
            } else {
                L(e5Var, iScope.t());
            }
            if (e5Var.H() == null) {
                e5Var.Z(new HashMap(iScope.getExtras()));
            } else {
                for (Map.Entry entry2 : iScope.getExtras().entrySet()) {
                    if (!e5Var.H().containsKey(entry2.getKey())) {
                        e5Var.H().put((String) entry2.getKey(), entry2.getValue());
                    }
                }
            }
            io.sentry.protocol.c C = e5Var.C();
            for (Map.Entry entry3 : new io.sentry.protocol.c(iScope.z()).b()) {
                if (!C.a(entry3.getKey())) {
                    C.l((String) entry3.getKey(), entry3.getValue());
                }
            }
        }
        return e5Var;
    }

    private SentryEvent r(SentryEvent sentryEvent, IScope iScope, Hint hint) {
        io.sentry.protocol.g o10;
        if (iScope != null) {
            q(sentryEvent, iScope);
            if (sentryEvent.y0() == null) {
                sentryEvent.J0(iScope.E());
            }
            if (sentryEvent.s0() == null) {
                sentryEvent.D0(iScope.C());
            }
            if (iScope.n() != null) {
                sentryEvent.E0(iScope.n());
            }
            ISpan s10 = iScope.s();
            if (sentryEvent.C().j() == null) {
                if (s10 == null) {
                    sentryEvent.C().z(t8.x(iScope.L()));
                } else {
                    sentryEvent.C().z(s10.q());
                }
            }
            if (sentryEvent.C().f() == null && (o10 = iScope.o()) != null) {
                sentryEvent.C().r(o10);
            }
            return E(sentryEvent, hint, iScope.U());
        }
        return sentryEvent;
    }

    private l7 s(l7 l7Var, IScope iScope) {
        if (iScope != null) {
            if (l7Var.K() == null) {
                l7Var.c0(iScope.c());
            }
            if (l7Var.Q() == null) {
                l7Var.h0(iScope.D());
            }
            if (l7Var.N() == null) {
                l7Var.g0(new HashMap(iScope.w()));
            } else {
                for (Map.Entry entry : iScope.w().entrySet()) {
                    if (!l7Var.N().containsKey(entry.getKey())) {
                        l7Var.N().put((String) entry.getKey(), (String) entry.getValue());
                    }
                }
            }
            io.sentry.protocol.c C = l7Var.C();
            for (Map.Entry entry2 : new io.sentry.protocol.c(iScope.z()).b()) {
                if (!C.a(entry2.getKey())) {
                    C.l((String) entry2.getKey(), entry2.getValue());
                }
            }
            ISpan s10 = iScope.s();
            if (l7Var.C().j() == null) {
                if (s10 == null) {
                    l7Var.C().z(t8.x(iScope.L()));
                    return l7Var;
                }
                l7Var.C().z(s10.q());
            }
        }
        return l7Var;
    }

    private l5 t(e5 e5Var, List list, z7 z7Var, q8 q8Var, q3 q3Var) {
        io.sentry.protocol.x xVar;
        ArrayList arrayList = new ArrayList();
        if (e5Var != null) {
            arrayList.add(l6.B(this.f28209b.getSerializer(), e5Var));
            xVar = e5Var.G();
        } else {
            xVar = null;
        }
        if (z7Var != null) {
            arrayList.add(l6.G(this.f28209b.getSerializer(), z7Var));
        }
        if (q3Var != null) {
            arrayList.add(l6.E(q3Var, this.f28209b.getMaxTraceFileSize(), this.f28209b.getSerializer()));
            if (xVar == null) {
                xVar = new io.sentry.protocol.x(q3Var.B());
            }
        }
        if (list != null) {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                arrayList.add(l6.z(this.f28209b.getSerializer(), this.f28209b.getLogger(), (io.sentry.b) it.next(), this.f28209b.getMaxAttachmentSize()));
            }
        }
        if (arrayList.isEmpty()) {
            return null;
        }
        return new l5(new m5(xVar, this.f28209b.getSdkVersion(), q8Var), arrayList);
    }

    private l5 u(z6 z6Var) {
        ArrayList arrayList = new ArrayList();
        arrayList.add(l6.C(this.f28209b.getSerializer(), z6Var));
        return new l5(new m5(null, this.f28209b.getSdkVersion(), null), arrayList);
    }

    private l5 v(l7 l7Var, v3 v3Var, q8 q8Var, boolean z10) {
        ArrayList arrayList = new ArrayList();
        arrayList.add(l6.F(this.f28209b.getSerializer(), this.f28209b.getLogger(), l7Var, v3Var, z10));
        return new l5(new m5(l7Var.G(), this.f28209b.getSessionReplay().o(), q8Var), arrayList);
    }

    private SentryEvent w(SentryEvent sentryEvent, Hint hint) {
        k7.c beforeSend = this.f28209b.getBeforeSend();
        if (beforeSend != null) {
            try {
                return beforeSend.a(sentryEvent, hint);
            } catch (Throwable th2) {
                this.f28209b.getLogger().b(SentryLevel.ERROR, "The BeforeSend callback threw an exception. It will be added as breadcrumb and continue.", th2);
                return null;
            }
        }
        return sentryEvent;
    }

    private l7 x(l7 l7Var, Hint hint) {
        this.f28209b.getBeforeSendReplay();
        return l7Var;
    }

    private io.sentry.protocol.d0 y(io.sentry.protocol.d0 d0Var, Hint hint) {
        this.f28209b.getBeforeSendTransaction();
        return d0Var;
    }

    private List z(List list) {
        if (list == null) {
            return null;
        }
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            io.sentry.b bVar = (io.sentry.b) it.next();
            if (bVar.k()) {
                arrayList.add(bVar);
            }
        }
        return arrayList;
    }

    z7 M(final SentryEvent sentryEvent, final Hint hint, IScope iScope) {
        if (io.sentry.util.n.q(hint)) {
            if (iScope != null) {
                return iScope.v(new z3.b() { // from class: io.sentry.g5
                    @Override // io.sentry.z3.b
                    public final void a(z7 z7Var) {
                        h5.o(h5.this, sentryEvent, hint, z7Var);
                    }
                });
            }
            this.f28209b.getLogger().c(SentryLevel.INFO, "Scope is null on client.captureEvent", new Object[0]);
        }
        return null;
    }

    @Override // io.sentry.y0
    public io.sentry.protocol.x a(l7 l7Var, IScope iScope, Hint hint) {
        io.sentry.protocol.x xVar;
        io.sentry.util.y.c(l7Var, "SessionReplay is required.");
        if (hint == null) {
            hint = new Hint();
        }
        if (J(l7Var, hint)) {
            s(l7Var, iScope);
        }
        ILogger logger = this.f28209b.getLogger();
        SentryLevel sentryLevel = SentryLevel.DEBUG;
        logger.c(sentryLevel, "Capturing session replay: %s", l7Var.G());
        io.sentry.protocol.x xVar2 = io.sentry.protocol.x.f28663e;
        if (l7Var.G() != null) {
            xVar = l7Var.G();
        } else {
            xVar = xVar2;
        }
        l7 F = F(l7Var, hint, this.f28209b.getEventProcessors());
        if (F != null && (F = x(F, hint)) == null) {
            this.f28209b.getLogger().c(sentryLevel, "Event was dropped by beforeSendReplay", new Object[0]);
            this.f28209b.getClientReportRecorder().a(io.sentry.clientreport.f.BEFORE_SEND, j.Replay);
        }
        if (F == null) {
            return xVar2;
        }
        try {
            l5 v10 = v(F, hint.f(), C(iScope, hint, F, null), io.sentry.util.n.h(hint, io.sentry.hints.c.class));
            hint.b();
            this.f28210c.c0(v10, hint);
            return xVar;
        } catch (IOException e10) {
            this.f28209b.getLogger().a(SentryLevel.WARNING, e10, "Capturing event %s failed.", xVar);
            return io.sentry.protocol.x.f28663e;
        }
    }

    @Override // io.sentry.y0
    public io.sentry.protocol.x b(io.sentry.protocol.d0 d0Var, q8 q8Var, IScope iScope, Hint hint, q3 q3Var) {
        io.sentry.protocol.x xVar;
        int size;
        io.sentry.util.y.c(d0Var, "Transaction is required.");
        if (hint == null) {
            hint = new Hint();
        }
        if (J(d0Var, hint)) {
            p(iScope, hint);
        }
        ILogger logger = this.f28209b.getLogger();
        SentryLevel sentryLevel = SentryLevel.DEBUG;
        logger.c(sentryLevel, "Capturing transaction: %s", d0Var.G());
        if (io.sentry.util.j0.f(this.f28209b.getIgnoredTransactions(), d0Var.r0())) {
            this.f28209b.getLogger().c(sentryLevel, "Transaction was dropped as transaction name %s is ignored", d0Var.r0());
            io.sentry.clientreport.h clientReportRecorder = this.f28209b.getClientReportRecorder();
            io.sentry.clientreport.f fVar = io.sentry.clientreport.f.EVENT_PROCESSOR;
            clientReportRecorder.a(fVar, j.Transaction);
            this.f28209b.getClientReportRecorder().c(fVar, j.Span, d0Var.q0().size() + 1);
            return io.sentry.protocol.x.f28663e;
        }
        io.sentry.protocol.x xVar2 = io.sentry.protocol.x.f28663e;
        if (d0Var.G() != null) {
            xVar = d0Var.G();
        } else {
            xVar = xVar2;
        }
        if (J(d0Var, hint)) {
            d0Var = (io.sentry.protocol.d0) q(d0Var, iScope);
            if (d0Var != null && iScope != null) {
                d0Var = G(d0Var, hint, iScope.U());
            }
            if (d0Var == null) {
                this.f28209b.getLogger().c(sentryLevel, "Transaction was dropped by applyScope", new Object[0]);
            }
        }
        if (d0Var != null) {
            d0Var = G(d0Var, hint, this.f28209b.getEventProcessors());
        }
        if (d0Var == null) {
            this.f28209b.getLogger().c(sentryLevel, "Transaction was dropped by Event processors.", new Object[0]);
            return xVar2;
        }
        int size2 = d0Var.q0().size();
        io.sentry.protocol.d0 y10 = y(d0Var, hint);
        if (y10 == null) {
            size = 0;
        } else {
            size = y10.q0().size();
        }
        if (y10 == null) {
            this.f28209b.getLogger().c(sentryLevel, "Transaction was dropped by beforeSendTransaction.", new Object[0]);
            io.sentry.clientreport.h clientReportRecorder2 = this.f28209b.getClientReportRecorder();
            io.sentry.clientreport.f fVar2 = io.sentry.clientreport.f.BEFORE_SEND;
            clientReportRecorder2.a(fVar2, j.Transaction);
            this.f28209b.getClientReportRecorder().c(fVar2, j.Span, size2 + 1);
            return xVar2;
        }
        if (size < size2) {
            int i10 = size2 - size;
            this.f28209b.getLogger().c(sentryLevel, "%d spans were dropped by beforeSendTransaction.", Integer.valueOf(i10));
            this.f28209b.getClientReportRecorder().c(io.sentry.clientreport.f.BEFORE_SEND, j.Span, i10);
        }
        try {
            l5 t10 = t(y10, z(B(hint)), null, q8Var, q3Var);
            hint.b();
            if (t10 != null) {
                return I(t10, hint);
            }
            return xVar;
        } catch (io.sentry.exception.b | IOException e10) {
            this.f28209b.getLogger().a(SentryLevel.WARNING, e10, "Capturing transaction %s failed.", xVar);
            return io.sentry.protocol.x.f28663e;
        }
    }

    @Override // io.sentry.y0
    public void c(boolean z10) {
        long shutdownTimeoutMillis;
        this.f28209b.getLogger().c(SentryLevel.INFO, "Closing SentryClient.", new Object[0]);
        if (z10) {
            shutdownTimeoutMillis = 0;
        } else {
            try {
                shutdownTimeoutMillis = this.f28209b.getShutdownTimeoutMillis();
            } catch (IOException e10) {
                this.f28209b.getLogger().b(SentryLevel.WARNING, "Failed to close the connection to the Sentry Server.", e10);
            }
        }
        d(shutdownTimeoutMillis);
        this.f28212e.c(z10);
        this.f28210c.c(z10);
        for (b0 b0Var : this.f28209b.getEventProcessors()) {
            if (b0Var instanceof Closeable) {
                try {
                    ((Closeable) b0Var).close();
                } catch (IOException e11) {
                    this.f28209b.getLogger().c(SentryLevel.WARNING, "Failed to close the event processor {}.", b0Var, e11);
                }
            }
        }
        this.f28208a = false;
    }

    @Override // io.sentry.y0
    public void d(long j10) {
        this.f28212e.d(j10);
        this.f28210c.d(j10);
    }

    @Override // io.sentry.y0
    public boolean f() {
        return this.f28210c.f();
    }

    @Override // io.sentry.y0
    public void g(z7 z7Var, Hint hint) {
        io.sentry.util.y.c(z7Var, "Session is required.");
        if (z7Var.h() != null && !z7Var.h().isEmpty()) {
            try {
                k(l5.a(this.f28209b.getSerializer(), z7Var, this.f28209b.getSdkVersion()), hint);
                return;
            } catch (IOException e10) {
                this.f28209b.getLogger().b(SentryLevel.ERROR, "Failed to capture session.", e10);
                return;
            }
        }
        this.f28209b.getLogger().c(SentryLevel.WARNING, "Sessions can't be captured without setting a release.", new Object[0]);
    }

    @Override // io.sentry.y0
    public void h(z6 z6Var) {
        try {
            I(u(z6Var), null);
        } catch (IOException e10) {
            this.f28209b.getLogger().a(SentryLevel.WARNING, e10, "Capturing log failed.", new Object[0]);
        }
    }

    @Override // io.sentry.y0
    public io.sentry.transport.a0 i() {
        return this.f28210c.i();
    }

    @Override // io.sentry.y0
    public boolean isEnabled() {
        return this.f28208a;
    }

    @Override // io.sentry.y0
    public io.sentry.protocol.x k(l5 l5Var, Hint hint) {
        io.sentry.util.y.c(l5Var, "SentryEnvelope is required.");
        if (hint == null) {
            hint = new Hint();
        }
        try {
            hint.b();
            return I(l5Var, hint);
        } catch (IOException e10) {
            this.f28209b.getLogger().b(SentryLevel.ERROR, "Failed to capture envelope.", e10);
            return io.sentry.protocol.x.f28663e;
        }
    }

    @Override // io.sentry.y0
    public io.sentry.protocol.x l(m3 m3Var, IScope iScope) {
        io.sentry.util.y.c(m3Var, "profileChunk is required.");
        this.f28209b.getLogger().c(SentryLevel.DEBUG, "Capturing profile chunk: %s", m3Var.n());
        io.sentry.protocol.x n10 = m3Var.n();
        io.sentry.protocol.d c10 = io.sentry.protocol.d.c(m3Var.o(), this.f28209b);
        if (c10 != null) {
            m3Var.r(c10);
        }
        try {
            return I(new l5(new m5(n10, this.f28209b.getSdkVersion(), null), Collections.singletonList(l6.D(m3Var, this.f28209b.getSerializer(), this.f28209b.getProfilerConverter()))), null);
        } catch (io.sentry.exception.b | IOException e10) {
            this.f28209b.getLogger().a(SentryLevel.WARNING, e10, "Capturing profile chunk %s failed.", n10);
            return io.sentry.protocol.x.f28663e;
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:89:0x01c4  */
    @Override // io.sentry.y0
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public io.sentry.protocol.x m(io.sentry.SentryEvent r12, io.sentry.IScope r13, io.sentry.Hint r14) {
        /*
            Method dump skipped, instructions count: 456
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: io.sentry.h5.m(io.sentry.SentryEvent, io.sentry.IScope, io.sentry.Hint):io.sentry.protocol.x");
    }
}
