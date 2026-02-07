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
    private volatile io.sentry.protocol.x f29167a;

    /* renamed from: b  reason: collision with root package name */
    private SentryLevel f29168b;

    /* renamed from: c  reason: collision with root package name */
    private e1 f29169c;

    /* renamed from: d  reason: collision with root package name */
    private WeakReference f29170d;

    /* renamed from: e  reason: collision with root package name */
    private String f29171e;

    /* renamed from: f  reason: collision with root package name */
    private io.sentry.protocol.h0 f29172f;

    /* renamed from: g  reason: collision with root package name */
    private String f29173g;

    /* renamed from: h  reason: collision with root package name */
    private io.sentry.protocol.o f29174h;

    /* renamed from: i  reason: collision with root package name */
    private List f29175i;

    /* renamed from: j  reason: collision with root package name */
    private volatile Queue f29176j;

    /* renamed from: k  reason: collision with root package name */
    private Map f29177k;

    /* renamed from: l  reason: collision with root package name */
    private Map f29178l;

    /* renamed from: m  reason: collision with root package name */
    private List f29179m;

    /* renamed from: n  reason: collision with root package name */
    private volatile k7 f29180n;

    /* renamed from: o  reason: collision with root package name */
    private volatile z7 f29181o;

    /* renamed from: p  reason: collision with root package name */
    private final io.sentry.util.a f29182p;

    /* renamed from: q  reason: collision with root package name */
    private final io.sentry.util.a f29183q;

    /* renamed from: r  reason: collision with root package name */
    private final io.sentry.util.a f29184r;

    /* renamed from: s  reason: collision with root package name */
    private io.sentry.protocol.c f29185s;

    /* renamed from: t  reason: collision with root package name */
    private List f29186t;

    /* renamed from: u  reason: collision with root package name */
    private s3 f29187u;

    /* renamed from: v  reason: collision with root package name */
    private io.sentry.protocol.x f29188v;

    /* renamed from: w  reason: collision with root package name */
    private y0 f29189w;

    /* renamed from: x  reason: collision with root package name */
    private final Map f29190x;

    /* renamed from: y  reason: collision with root package name */
    private final io.sentry.featureflags.b f29191y;

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
        private final z7 f29192a;

        /* renamed from: b  reason: collision with root package name */
        private final z7 f29193b;

        public d(z7 z7Var, z7 z7Var2) {
            this.f29193b = z7Var;
            this.f29192a = z7Var2;
        }

        public z7 a() {
            return this.f29193b;
        }

        public z7 b() {
            return this.f29192a;
        }
    }

    public z3(k7 k7Var) {
        this.f29170d = new WeakReference(null);
        this.f29175i = new ArrayList();
        this.f29177k = new ConcurrentHashMap();
        this.f29178l = new ConcurrentHashMap();
        this.f29179m = new CopyOnWriteArrayList();
        this.f29182p = new io.sentry.util.a();
        this.f29183q = new io.sentry.util.a();
        this.f29184r = new io.sentry.util.a();
        this.f29185s = new io.sentry.protocol.c();
        this.f29186t = new CopyOnWriteArrayList();
        io.sentry.protocol.x xVar = io.sentry.protocol.x.f28663e;
        this.f29188v = xVar;
        this.f29189w = s2.n();
        this.f29190x = Collections.synchronizedMap(new WeakHashMap());
        this.f29180n = (k7) io.sentry.util.y.c(k7Var, "SentryOptions is required.");
        this.f29176j = i(this.f29180n.getMaxBreadcrumbs());
        this.f29191y = io.sentry.featureflags.a.a(k7Var);
        this.f29187u = new s3();
        this.f29167a = xVar;
    }

    private Breadcrumb W(k7.a aVar, Breadcrumb breadcrumb, Hint hint) {
        try {
            return aVar.a(breadcrumb, hint);
        } catch (Throwable th2) {
            this.f29180n.getLogger().b(SentryLevel.ERROR, "The BeforeBreadcrumbCallback callback threw an exception. Exception details will be added to the breadcrumb.", th2);
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
            this.f29185s.l(str, obj);
            for (v0 v0Var : this.f29180n.getScopeObservers()) {
                v0Var.j(this.f29185s);
            }
        }
    }

    @Override // io.sentry.IScope
    public void B(e1 e1Var) {
        a1 a10 = this.f29183q.a();
        try {
            this.f29169c = e1Var;
            for (v0 v0Var : this.f29180n.getScopeObservers()) {
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
        return this.f29175i;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.h0 D() {
        return this.f29172f;
    }

    @Override // io.sentry.IScope
    public String E() {
        e1 e1Var = this.f29169c;
        if (e1Var != null) {
            return e1Var.getName();
        }
        return this.f29171e;
    }

    @Override // io.sentry.IScope
    public void F() {
        a1 a10 = this.f29183q.a();
        try {
            this.f29169c = null;
            if (a10 != null) {
                a10.close();
            }
            this.f29171e = null;
            for (v0 v0Var : this.f29180n.getScopeObservers()) {
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
        return this.f29191y;
    }

    @Override // io.sentry.IScope
    public void H(y0 y0Var) {
        this.f29189w = y0Var;
    }

    @Override // io.sentry.IScope
    public void I(String str) {
        if (str == null) {
            return;
        }
        this.f29185s.n(str);
    }

    @Override // io.sentry.IScope
    public z7 J() {
        return this.f29181o;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.x K() {
        return this.f29188v;
    }

    @Override // io.sentry.IScope
    public s3 L() {
        return this.f29187u;
    }

    @Override // io.sentry.IScope
    public void M(String str) {
        this.f29173g = str;
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
        for (v0 v0Var : this.f29180n.getScopeObservers()) {
            v0Var.j(z10);
        }
    }

    @Override // io.sentry.IScope
    public y0 N() {
        return this.f29189w;
    }

    @Override // io.sentry.IScope
    public List O() {
        return new CopyOnWriteArrayList(this.f29186t);
    }

    @Override // io.sentry.IScope
    public void P(SentryEvent sentryEvent) {
        io.sentry.util.z zVar;
        ISpan iSpan;
        if (this.f29180n.isTracingEnabled() && sentryEvent.O() != null && (zVar = (io.sentry.util.z) this.f29190x.get(io.sentry.util.h.a(sentryEvent.O()))) != null) {
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
        this.f29181o = null;
    }

    @Override // io.sentry.IScope
    public s3 R(a aVar) {
        a1 a10 = this.f29184r.a();
        try {
            aVar.a(this.f29187u);
            s3 s3Var = new s3(this.f29187u);
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
        a1 a10 = this.f29183q.a();
        try {
            cVar.a(this.f29169c);
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
        this.f29167a = xVar;
    }

    @Override // io.sentry.IScope
    public List U() {
        return io.sentry.util.f.a(this.f29179m);
    }

    @Override // io.sentry.IScope
    public void V(s3 s3Var) {
        this.f29187u = s3Var;
        e8 g10 = s3Var.g();
        for (v0 v0Var : this.f29180n.getScopeObservers()) {
            v0Var.i(g10, this);
        }
    }

    public io.sentry.protocol.x X() {
        return this.f29167a;
    }

    public void Y(String str) {
        if (str != null) {
            this.f29178l.remove(str);
            for (v0 v0Var : this.f29180n.getScopeObservers()) {
                v0Var.b(str);
                v0Var.l(this.f29178l);
            }
        }
    }

    public void Z(String str) {
        if (str != null) {
            this.f29177k.remove(str);
            for (v0 v0Var : this.f29180n.getScopeObservers()) {
                v0Var.d(str);
                v0Var.c(this.f29177k);
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
            this.f29177k.put(str, str2);
            for (v0 v0Var : this.f29180n.getScopeObservers()) {
                v0Var.a(str, str2);
                v0Var.c(this.f29177k);
            }
        }
    }

    @Override // io.sentry.IScope
    public k7 b() {
        return this.f29180n;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.o c() {
        return this.f29174h;
    }

    @Override // io.sentry.IScope
    public void clear() {
        this.f29168b = null;
        this.f29172f = null;
        this.f29174h = null;
        this.f29173g = null;
        this.f29175i.clear();
        x();
        this.f29177k.clear();
        this.f29178l.clear();
        this.f29179m.clear();
        F();
        d();
    }

    public void d() {
        this.f29186t.clear();
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
            this.f29178l.put(str, str2);
            for (v0 v0Var : this.f29180n.getScopeObservers()) {
                v0Var.f(str, str2);
                v0Var.l(this.f29178l);
            }
        }
    }

    @Override // io.sentry.IScope
    public String g() {
        return this.f29173g;
    }

    @Override // io.sentry.IScope
    public Map getExtras() {
        return this.f29178l;
    }

    @Override // io.sentry.IScope
    public void h(Breadcrumb breadcrumb, Hint hint) {
        if (breadcrumb != null && !(this.f29176j instanceof t)) {
            if (hint == null) {
                hint = new Hint();
            }
            k7.a beforeBreadcrumb = this.f29180n.getBeforeBreadcrumb();
            if (beforeBreadcrumb != null) {
                breadcrumb = W(beforeBreadcrumb, breadcrumb, hint);
            }
            if (breadcrumb != null) {
                this.f29176j.add(breadcrumb);
                for (v0 v0Var : this.f29180n.getScopeObservers()) {
                    v0Var.e(breadcrumb);
                    v0Var.g(this.f29176j);
                }
                return;
            }
            this.f29180n.getLogger().c(SentryLevel.INFO, "Breadcrumb was dropped by beforeBreadcrumb", new Object[0]);
        }
    }

    @Override // io.sentry.IScope
    public void j(Throwable th2, ISpan iSpan, String str) {
        io.sentry.util.y.c(th2, "throwable is required");
        io.sentry.util.y.c(iSpan, "span is required");
        io.sentry.util.y.c(str, "transactionName is required");
        Throwable a10 = io.sentry.util.h.a(th2);
        if (!this.f29190x.containsKey(a10)) {
            this.f29190x.put(a10, new io.sentry.util.z(new WeakReference(iSpan), str));
        }
    }

    @Override // io.sentry.IScope
    public void k(io.sentry.protocol.h0 h0Var) {
        this.f29172f = h0Var;
        for (v0 v0Var : this.f29180n.getScopeObservers()) {
            v0Var.k(h0Var);
        }
    }

    @Override // io.sentry.IScope
    public e1 l() {
        return this.f29169c;
    }

    @Override // io.sentry.IScope
    public z7 m() {
        a1 a10 = this.f29182p.a();
        try {
            z7 z7Var = null;
            if (this.f29181o != null) {
                this.f29181o.c();
                this.f29180n.getContinuousProfiler().e();
                z7 clone = this.f29181o.clone();
                this.f29181o = null;
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
        return this.f29168b;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.g o() {
        return this.f29191y.o();
    }

    @Override // io.sentry.IScope
    public void p(io.sentry.protocol.x xVar) {
        this.f29188v = xVar;
        for (v0 v0Var : this.f29180n.getScopeObservers()) {
            v0Var.p(xVar);
        }
    }

    @Override // io.sentry.IScope
    public d q() {
        a1 a10 = this.f29182p.a();
        try {
            if (this.f29181o != null) {
                this.f29181o.c();
                this.f29180n.getContinuousProfiler().e();
            }
            z7 z7Var = this.f29181o;
            d dVar = null;
            z7 z7Var2 = null;
            if (this.f29180n.getRelease() != null) {
                this.f29181o = new z7(this.f29180n.getDistinctId(), this.f29172f, this.f29180n.getEnvironment(), this.f29180n.getRelease());
                if (z7Var != null) {
                    z7Var2 = z7Var.clone();
                }
                dVar = new d(this.f29181o.clone(), z7Var2);
            } else {
                this.f29180n.getLogger().c(SentryLevel.WARNING, "Release is not set on SentryOptions. Session could not be started", new Object[0]);
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
        this.f29180n = k7Var;
        Queue<Breadcrumb> queue = this.f29176j;
        this.f29176j = i(k7Var.getMaxBreadcrumbs());
        for (Breadcrumb breadcrumb : queue) {
            e(breadcrumb);
        }
    }

    @Override // io.sentry.IScope
    public ISpan s() {
        ISpan n10;
        ISpan iSpan = (ISpan) this.f29170d.get();
        if (iSpan != null) {
            return iSpan;
        }
        e1 e1Var = this.f29169c;
        if (e1Var != null && (n10 = e1Var.n()) != null) {
            return n10;
        }
        return e1Var;
    }

    @Override // io.sentry.IScope
    public Queue t() {
        return this.f29176j;
    }

    @Override // io.sentry.IScope
    public void u(List list) {
        if (list != null) {
            this.f29175i = new ArrayList(list);
            for (v0 v0Var : this.f29180n.getScopeObservers()) {
                v0Var.h(list);
            }
        }
    }

    @Override // io.sentry.IScope
    public z7 v(b bVar) {
        z7 z7Var;
        a1 a10 = this.f29182p.a();
        try {
            bVar.a(this.f29181o);
            if (this.f29181o != null) {
                z7Var = this.f29181o.clone();
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
        return io.sentry.util.c.b(this.f29177k);
    }

    @Override // io.sentry.IScope
    public void x() {
        this.f29176j.clear();
        for (v0 v0Var : this.f29180n.getScopeObservers()) {
            v0Var.g(this.f29176j);
        }
    }

    @Override // io.sentry.IScope
    public List y() {
        return this.f29179m;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.c z() {
        return this.f29185s;
    }

    @Override // io.sentry.IScope
    /* renamed from: clone */
    public IScope m1192clone() {
        return new z3(this);
    }

    private z3(z3 z3Var) {
        this.f29170d = new WeakReference(null);
        this.f29175i = new ArrayList();
        this.f29177k = new ConcurrentHashMap();
        this.f29178l = new ConcurrentHashMap();
        this.f29179m = new CopyOnWriteArrayList();
        this.f29182p = new io.sentry.util.a();
        this.f29183q = new io.sentry.util.a();
        this.f29184r = new io.sentry.util.a();
        this.f29185s = new io.sentry.protocol.c();
        this.f29186t = new CopyOnWriteArrayList();
        this.f29188v = io.sentry.protocol.x.f28663e;
        this.f29189w = s2.n();
        this.f29190x = Collections.synchronizedMap(new WeakHashMap());
        this.f29169c = z3Var.f29169c;
        this.f29171e = z3Var.f29171e;
        this.f29170d = z3Var.f29170d;
        this.f29181o = z3Var.f29181o;
        this.f29180n = z3Var.f29180n;
        this.f29168b = z3Var.f29168b;
        this.f29189w = z3Var.f29189w;
        this.f29167a = z3Var.X();
        io.sentry.protocol.h0 h0Var = z3Var.f29172f;
        this.f29172f = h0Var != null ? new io.sentry.protocol.h0(h0Var) : null;
        this.f29173g = z3Var.f29173g;
        this.f29188v = z3Var.f29188v;
        io.sentry.protocol.o oVar = z3Var.f29174h;
        this.f29174h = oVar != null ? new io.sentry.protocol.o(oVar) : null;
        this.f29175i = new ArrayList(z3Var.f29175i);
        this.f29179m = new CopyOnWriteArrayList(z3Var.f29179m);
        Breadcrumb[] breadcrumbArr = (Breadcrumb[]) z3Var.f29176j.toArray(new Breadcrumb[0]);
        Queue i10 = i(z3Var.f29180n.getMaxBreadcrumbs());
        for (Breadcrumb breadcrumb : breadcrumbArr) {
            i10.add(new Breadcrumb(breadcrumb));
        }
        this.f29176j = i10;
        Map map = z3Var.f29177k;
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
        for (Map.Entry entry : map.entrySet()) {
            if (entry != null) {
                concurrentHashMap.put((String) entry.getKey(), (String) entry.getValue());
            }
        }
        this.f29177k = concurrentHashMap;
        Map map2 = z3Var.f29178l;
        ConcurrentHashMap concurrentHashMap2 = new ConcurrentHashMap();
        for (Map.Entry entry2 : map2.entrySet()) {
            if (entry2 != null) {
                concurrentHashMap2.put((String) entry2.getKey(), entry2.getValue());
            }
        }
        this.f29178l = concurrentHashMap2;
        this.f29185s = new io.sentry.protocol.c(z3Var.f29185s);
        this.f29186t = new CopyOnWriteArrayList(z3Var.f29186t);
        this.f29191y = z3Var.f29191y.clone();
        this.f29187u = new s3(z3Var.f29187u);
    }
}
