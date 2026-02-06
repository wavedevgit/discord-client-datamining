package io.sentry;

import io.sentry.k7;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.WeakHashMap;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z3 implements IScope {

    /* renamed from: a  reason: collision with root package name */
    private volatile io.sentry.protocol.x f29119a;

    /* renamed from: b  reason: collision with root package name */
    private SentryLevel f29120b;

    /* renamed from: c  reason: collision with root package name */
    private e1 f29121c;

    /* renamed from: d  reason: collision with root package name */
    private WeakReference f29122d;

    /* renamed from: e  reason: collision with root package name */
    private String f29123e;

    /* renamed from: f  reason: collision with root package name */
    private io.sentry.protocol.h0 f29124f;

    /* renamed from: g  reason: collision with root package name */
    private String f29125g;

    /* renamed from: h  reason: collision with root package name */
    private io.sentry.protocol.o f29126h;

    /* renamed from: i  reason: collision with root package name */
    private List f29127i;

    /* renamed from: j  reason: collision with root package name */
    private volatile Queue f29128j;

    /* renamed from: k  reason: collision with root package name */
    private Map f29129k;

    /* renamed from: l  reason: collision with root package name */
    private Map f29130l;

    /* renamed from: m  reason: collision with root package name */
    private List f29131m;

    /* renamed from: n  reason: collision with root package name */
    private volatile k7 f29132n;

    /* renamed from: o  reason: collision with root package name */
    private volatile z7 f29133o;

    /* renamed from: p  reason: collision with root package name */
    private final io.sentry.util.a f29134p;

    /* renamed from: q  reason: collision with root package name */
    private final io.sentry.util.a f29135q;

    /* renamed from: r  reason: collision with root package name */
    private final io.sentry.util.a f29136r;

    /* renamed from: s  reason: collision with root package name */
    private io.sentry.protocol.c f29137s;

    /* renamed from: t  reason: collision with root package name */
    private List f29138t;

    /* renamed from: u  reason: collision with root package name */
    private s3 f29139u;

    /* renamed from: v  reason: collision with root package name */
    private io.sentry.protocol.x f29140v;

    /* renamed from: w  reason: collision with root package name */
    private y0 f29141w;

    /* renamed from: x  reason: collision with root package name */
    private final Map f29142x;

    /* renamed from: y  reason: collision with root package name */
    private final io.sentry.featureflags.b f29143y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void a(s3 s3Var);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    interface b {
        void a(z7 z7Var);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {
        void a(e1 e1Var);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d {

        /* renamed from: a  reason: collision with root package name */
        private final z7 f29144a;

        /* renamed from: b  reason: collision with root package name */
        private final z7 f29145b;

        public d(z7 z7Var, z7 z7Var2) {
            this.f29145b = z7Var;
            this.f29144a = z7Var2;
        }

        public z7 a() {
            return this.f29145b;
        }

        public z7 b() {
            return this.f29144a;
        }
    }

    public z3(k7 k7Var) {
        this.f29122d = new WeakReference(null);
        this.f29127i = new ArrayList();
        this.f29129k = new ConcurrentHashMap();
        this.f29130l = new ConcurrentHashMap();
        this.f29131m = new CopyOnWriteArrayList();
        this.f29134p = new io.sentry.util.a();
        this.f29135q = new io.sentry.util.a();
        this.f29136r = new io.sentry.util.a();
        this.f29137s = new io.sentry.protocol.c();
        this.f29138t = new CopyOnWriteArrayList();
        io.sentry.protocol.x xVar = io.sentry.protocol.x.f28615e;
        this.f29140v = xVar;
        this.f29141w = s2.n();
        this.f29142x = Collections.synchronizedMap(new WeakHashMap());
        this.f29132n = (k7) io.sentry.util.y.c(k7Var, "SentryOptions is required.");
        this.f29128j = i(this.f29132n.getMaxBreadcrumbs());
        this.f29143y = io.sentry.featureflags.a.a(k7Var);
        this.f29139u = new s3();
        this.f29119a = xVar;
    }

    private Breadcrumb W(k7.a aVar, Breadcrumb breadcrumb, Hint hint) {
        try {
            return aVar.a(breadcrumb, hint);
        } catch (Throwable th2) {
            this.f29132n.getLogger().b(SentryLevel.ERROR, "The BeforeBreadcrumbCallback callback threw an exception. Exception details will be added to the breadcrumb.", th2);
            if (th2.getMessage() != null) {
                breadcrumb.A("sentry:message", th2.getMessage());
            }
            return breadcrumb;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Queue i(int i10) {
        if (i10 > 0) {
            return o8.d(new e(i10));
        }
        return new t();
    }

    @Override // io.sentry.IScope
    public void A(String str, Object obj) {
        if (str != null) {
            this.f29137s.l(str, obj);
            for (v0 v0Var : this.f29132n.getScopeObservers()) {
                v0Var.j(this.f29137s);
            }
        }
    }

    @Override // io.sentry.IScope
    public void B(e1 e1Var) {
        a1 a10 = this.f29135q.a();
        try {
            this.f29121c = e1Var;
            for (v0 v0Var : this.f29132n.getScopeObservers()) {
                if (e1Var != null) {
                    v0Var.m(e1Var.getName());
                    v0Var.i(e1Var.q(), this);
                } else {
                    v0Var.m(null);
                    v0Var.i(null, this);
                }
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

    @Override // io.sentry.IScope
    public List C() {
        return this.f29127i;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.h0 D() {
        return this.f29124f;
    }

    @Override // io.sentry.IScope
    public String E() {
        e1 e1Var = this.f29121c;
        if (e1Var != null) {
            return e1Var.getName();
        }
        return this.f29123e;
    }

    @Override // io.sentry.IScope
    public void F() {
        a1 a10 = this.f29135q.a();
        try {
            this.f29121c = null;
            if (a10 != null) {
                a10.close();
            }
            this.f29123e = null;
            for (v0 v0Var : this.f29132n.getScopeObservers()) {
                v0Var.m(null);
                v0Var.i(null, this);
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

    @Override // io.sentry.IScope
    public io.sentry.featureflags.b G() {
        return this.f29143y;
    }

    @Override // io.sentry.IScope
    public void H(y0 y0Var) {
        this.f29141w = y0Var;
    }

    @Override // io.sentry.IScope
    public void I(String str) {
        if (str == null) {
            return;
        }
        this.f29137s.n(str);
    }

    @Override // io.sentry.IScope
    public z7 J() {
        return this.f29133o;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.x K() {
        return this.f29140v;
    }

    @Override // io.sentry.IScope
    public s3 L() {
        return this.f29139u;
    }

    @Override // io.sentry.IScope
    public void M(String str) {
        this.f29125g = str;
        io.sentry.protocol.c z10 = z();
        io.sentry.protocol.a d10 = z10.d();
        if (d10 == null) {
            d10 = new io.sentry.protocol.a();
            z10.o(d10);
        }
        if (str == null) {
            d10.x(null);
        } else {
            ArrayList arrayList = new ArrayList(1);
            arrayList.add(str);
            d10.x(arrayList);
        }
        for (v0 v0Var : this.f29132n.getScopeObservers()) {
            v0Var.j(z10);
        }
    }

    @Override // io.sentry.IScope
    public y0 N() {
        return this.f29141w;
    }

    @Override // io.sentry.IScope
    public List O() {
        return new CopyOnWriteArrayList(this.f29138t);
    }

    @Override // io.sentry.IScope
    public void P(SentryEvent sentryEvent) {
        io.sentry.util.z zVar;
        ISpan iSpan;
        if (this.f29132n.isTracingEnabled() && sentryEvent.O() != null && (zVar = (io.sentry.util.z) this.f29142x.get(io.sentry.util.h.a(sentryEvent.O()))) != null) {
            WeakReference weakReference = (WeakReference) zVar.a();
            if (sentryEvent.C().j() == null && weakReference != null && (iSpan = (ISpan) weakReference.get()) != null) {
                sentryEvent.C().z(iSpan.q());
            }
            String str = (String) zVar.b();
            if (sentryEvent.y0() == null && str != null) {
                sentryEvent.J0(str);
            }
        }
    }

    @Override // io.sentry.IScope
    public void Q() {
        this.f29133o = null;
    }

    @Override // io.sentry.IScope
    public s3 R(a aVar) {
        a1 a10 = this.f29136r.a();
        try {
            aVar.a(this.f29139u);
            s3 s3Var = new s3(this.f29139u);
            if (a10 != null) {
                a10.close();
            }
            return s3Var;
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

    @Override // io.sentry.IScope
    public void S(c cVar) {
        a1 a10 = this.f29135q.a();
        try {
            cVar.a(this.f29121c);
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

    @Override // io.sentry.IScope
    public void T(io.sentry.protocol.x xVar) {
        this.f29119a = xVar;
    }

    @Override // io.sentry.IScope
    public List U() {
        return io.sentry.util.f.a(this.f29131m);
    }

    @Override // io.sentry.IScope
    public void V(s3 s3Var) {
        this.f29139u = s3Var;
        e8 g10 = s3Var.g();
        for (v0 v0Var : this.f29132n.getScopeObservers()) {
            v0Var.i(g10, this);
        }
    }

    public io.sentry.protocol.x X() {
        return this.f29119a;
    }

    public void Y(String str) {
        if (str != null) {
            this.f29130l.remove(str);
            for (v0 v0Var : this.f29132n.getScopeObservers()) {
                v0Var.b(str);
                v0Var.l(this.f29130l);
            }
        }
    }

    public void Z(String str) {
        if (str != null) {
            this.f29129k.remove(str);
            for (v0 v0Var : this.f29132n.getScopeObservers()) {
                v0Var.d(str);
                v0Var.c(this.f29129k);
            }
        }
    }

    @Override // io.sentry.IScope
    public void a(String str, String str2) {
        if (str != null) {
            if (str2 == null) {
                Z(str);
                return;
            }
            this.f29129k.put(str, str2);
            for (v0 v0Var : this.f29132n.getScopeObservers()) {
                v0Var.a(str, str2);
                v0Var.c(this.f29129k);
            }
        }
    }

    @Override // io.sentry.IScope
    public k7 b() {
        return this.f29132n;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.o c() {
        return this.f29126h;
    }

    @Override // io.sentry.IScope
    public void clear() {
        this.f29120b = null;
        this.f29124f = null;
        this.f29126h = null;
        this.f29125g = null;
        this.f29127i.clear();
        x();
        this.f29129k.clear();
        this.f29130l.clear();
        this.f29131m.clear();
        F();
        d();
    }

    public void d() {
        this.f29138t.clear();
    }

    @Override // io.sentry.IScope
    public void e(Breadcrumb breadcrumb) {
        h(breadcrumb, null);
    }

    @Override // io.sentry.IScope
    public void f(String str, String str2) {
        if (str != null) {
            if (str2 == null) {
                Y(str);
                return;
            }
            this.f29130l.put(str, str2);
            for (v0 v0Var : this.f29132n.getScopeObservers()) {
                v0Var.f(str, str2);
                v0Var.l(this.f29130l);
            }
        }
    }

    @Override // io.sentry.IScope
    public String g() {
        return this.f29125g;
    }

    @Override // io.sentry.IScope
    public Map getExtras() {
        return this.f29130l;
    }

    @Override // io.sentry.IScope
    public void h(Breadcrumb breadcrumb, Hint hint) {
        if (breadcrumb != null && !(this.f29128j instanceof t)) {
            if (hint == null) {
                hint = new Hint();
            }
            k7.a beforeBreadcrumb = this.f29132n.getBeforeBreadcrumb();
            if (beforeBreadcrumb != null) {
                breadcrumb = W(beforeBreadcrumb, breadcrumb, hint);
            }
            if (breadcrumb != null) {
                this.f29128j.add(breadcrumb);
                for (v0 v0Var : this.f29132n.getScopeObservers()) {
                    v0Var.e(breadcrumb);
                    v0Var.g(this.f29128j);
                }
                return;
            }
            this.f29132n.getLogger().c(SentryLevel.INFO, "Breadcrumb was dropped by beforeBreadcrumb", new Object[0]);
        }
    }

    @Override // io.sentry.IScope
    public void j(Throwable th2, ISpan iSpan, String str) {
        io.sentry.util.y.c(th2, "throwable is required");
        io.sentry.util.y.c(iSpan, "span is required");
        io.sentry.util.y.c(str, "transactionName is required");
        Throwable a10 = io.sentry.util.h.a(th2);
        if (!this.f29142x.containsKey(a10)) {
            this.f29142x.put(a10, new io.sentry.util.z(new WeakReference(iSpan), str));
        }
    }

    @Override // io.sentry.IScope
    public void k(io.sentry.protocol.h0 h0Var) {
        this.f29124f = h0Var;
        for (v0 v0Var : this.f29132n.getScopeObservers()) {
            v0Var.k(h0Var);
        }
    }

    @Override // io.sentry.IScope
    public e1 l() {
        return this.f29121c;
    }

    @Override // io.sentry.IScope
    public z7 m() {
        a1 a10 = this.f29134p.a();
        try {
            z7 z7Var = null;
            if (this.f29133o != null) {
                this.f29133o.c();
                this.f29132n.getContinuousProfiler().e();
                z7 clone = this.f29133o.clone();
                this.f29133o = null;
                z7Var = clone;
            }
            if (a10 != null) {
                a10.close();
            }
            return z7Var;
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

    @Override // io.sentry.IScope
    public SentryLevel n() {
        return this.f29120b;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.g o() {
        return this.f29143y.o();
    }

    @Override // io.sentry.IScope
    public void p(io.sentry.protocol.x xVar) {
        this.f29140v = xVar;
        for (v0 v0Var : this.f29132n.getScopeObservers()) {
            v0Var.p(xVar);
        }
    }

    @Override // io.sentry.IScope
    public d q() {
        a1 a10 = this.f29134p.a();
        try {
            if (this.f29133o != null) {
                this.f29133o.c();
                this.f29132n.getContinuousProfiler().e();
            }
            z7 z7Var = this.f29133o;
            d dVar = null;
            z7 z7Var2 = null;
            if (this.f29132n.getRelease() != null) {
                this.f29133o = new z7(this.f29132n.getDistinctId(), this.f29124f, this.f29132n.getEnvironment(), this.f29132n.getRelease());
                if (z7Var != null) {
                    z7Var2 = z7Var.clone();
                }
                dVar = new d(this.f29133o.clone(), z7Var2);
            } else {
                this.f29132n.getLogger().c(SentryLevel.WARNING, "Release is not set on SentryOptions. Session could not be started", new Object[0]);
            }
            if (a10 != null) {
                a10.close();
            }
            return dVar;
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

    @Override // io.sentry.IScope
    public void r(k7 k7Var) {
        this.f29132n = k7Var;
        Queue<Breadcrumb> queue = this.f29128j;
        this.f29128j = i(k7Var.getMaxBreadcrumbs());
        for (Breadcrumb breadcrumb : queue) {
            e(breadcrumb);
        }
    }

    @Override // io.sentry.IScope
    public ISpan s() {
        ISpan n10;
        ISpan iSpan = (ISpan) this.f29122d.get();
        if (iSpan != null) {
            return iSpan;
        }
        e1 e1Var = this.f29121c;
        if (e1Var != null && (n10 = e1Var.n()) != null) {
            return n10;
        }
        return e1Var;
    }

    @Override // io.sentry.IScope
    public Queue t() {
        return this.f29128j;
    }

    @Override // io.sentry.IScope
    public void u(List list) {
        if (list != null) {
            this.f29127i = new ArrayList(list);
            for (v0 v0Var : this.f29132n.getScopeObservers()) {
                v0Var.h(list);
            }
        }
    }

    @Override // io.sentry.IScope
    public z7 v(b bVar) {
        z7 z7Var;
        a1 a10 = this.f29134p.a();
        try {
            bVar.a(this.f29133o);
            if (this.f29133o != null) {
                z7Var = this.f29133o.clone();
            } else {
                z7Var = null;
            }
            if (a10 != null) {
                a10.close();
            }
            return z7Var;
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

    @Override // io.sentry.IScope
    public Map w() {
        return io.sentry.util.c.b(this.f29129k);
    }

    @Override // io.sentry.IScope
    public void x() {
        this.f29128j.clear();
        for (v0 v0Var : this.f29132n.getScopeObservers()) {
            v0Var.g(this.f29128j);
        }
    }

    @Override // io.sentry.IScope
    public List y() {
        return this.f29131m;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.c z() {
        return this.f29137s;
    }

    @Override // io.sentry.IScope
    /* renamed from: clone */
    public IScope m1192clone() {
        return new z3(this);
    }

    private z3(z3 z3Var) {
        this.f29122d = new WeakReference(null);
        this.f29127i = new ArrayList();
        this.f29129k = new ConcurrentHashMap();
        this.f29130l = new ConcurrentHashMap();
        this.f29131m = new CopyOnWriteArrayList();
        this.f29134p = new io.sentry.util.a();
        this.f29135q = new io.sentry.util.a();
        this.f29136r = new io.sentry.util.a();
        this.f29137s = new io.sentry.protocol.c();
        this.f29138t = new CopyOnWriteArrayList();
        this.f29140v = io.sentry.protocol.x.f28615e;
        this.f29141w = s2.n();
        this.f29142x = Collections.synchronizedMap(new WeakHashMap());
        this.f29121c = z3Var.f29121c;
        this.f29123e = z3Var.f29123e;
        this.f29122d = z3Var.f29122d;
        this.f29133o = z3Var.f29133o;
        this.f29132n = z3Var.f29132n;
        this.f29120b = z3Var.f29120b;
        this.f29141w = z3Var.f29141w;
        this.f29119a = z3Var.X();
        io.sentry.protocol.h0 h0Var = z3Var.f29124f;
        this.f29124f = h0Var != null ? new io.sentry.protocol.h0(h0Var) : null;
        this.f29125g = z3Var.f29125g;
        this.f29140v = z3Var.f29140v;
        io.sentry.protocol.o oVar = z3Var.f29126h;
        this.f29126h = oVar != null ? new io.sentry.protocol.o(oVar) : null;
        this.f29127i = new ArrayList(z3Var.f29127i);
        this.f29131m = new CopyOnWriteArrayList(z3Var.f29131m);
        Breadcrumb[] breadcrumbArr = (Breadcrumb[]) z3Var.f29128j.toArray(new Breadcrumb[0]);
        Queue i10 = i(z3Var.f29132n.getMaxBreadcrumbs());
        for (Breadcrumb breadcrumb : breadcrumbArr) {
            i10.add(new Breadcrumb(breadcrumb));
        }
        this.f29128j = i10;
        Map map = z3Var.f29129k;
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
        for (Map.Entry entry : map.entrySet()) {
            if (entry != null) {
                concurrentHashMap.put((String) entry.getKey(), (String) entry.getValue());
            }
        }
        this.f29129k = concurrentHashMap;
        Map map2 = z3Var.f29130l;
        ConcurrentHashMap concurrentHashMap2 = new ConcurrentHashMap();
        for (Map.Entry entry2 : map2.entrySet()) {
            if (entry2 != null) {
                concurrentHashMap2.put((String) entry2.getKey(), entry2.getValue());
            }
        }
        this.f29130l = concurrentHashMap2;
        this.f29137s = new io.sentry.protocol.c(z3Var.f29137s);
        this.f29138t = new CopyOnWriteArrayList(z3Var.f29138t);
        this.f29143y = z3Var.f29143y.clone();
        this.f29139u = new s3(z3Var.f29139u);
    }
}
