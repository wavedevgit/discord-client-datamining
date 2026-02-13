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
    private volatile io.sentry.protocol.x f30871a;

    /* renamed from: b  reason: collision with root package name */
    private SentryLevel f30872b;

    /* renamed from: c  reason: collision with root package name */
    private e1 f30873c;

    /* renamed from: d  reason: collision with root package name */
    private WeakReference f30874d;

    /* renamed from: e  reason: collision with root package name */
    private String f30875e;

    /* renamed from: f  reason: collision with root package name */
    private io.sentry.protocol.h0 f30876f;

    /* renamed from: g  reason: collision with root package name */
    private String f30877g;

    /* renamed from: h  reason: collision with root package name */
    private io.sentry.protocol.o f30878h;

    /* renamed from: i  reason: collision with root package name */
    private List f30879i;

    /* renamed from: j  reason: collision with root package name */
    private volatile Queue f30880j;

    /* renamed from: k  reason: collision with root package name */
    private Map f30881k;

    /* renamed from: l  reason: collision with root package name */
    private Map f30882l;

    /* renamed from: m  reason: collision with root package name */
    private List f30883m;

    /* renamed from: n  reason: collision with root package name */
    private volatile k7 f30884n;

    /* renamed from: o  reason: collision with root package name */
    private volatile z7 f30885o;

    /* renamed from: p  reason: collision with root package name */
    private final io.sentry.util.a f30886p;

    /* renamed from: q  reason: collision with root package name */
    private final io.sentry.util.a f30887q;

    /* renamed from: r  reason: collision with root package name */
    private final io.sentry.util.a f30888r;

    /* renamed from: s  reason: collision with root package name */
    private io.sentry.protocol.c f30889s;

    /* renamed from: t  reason: collision with root package name */
    private List f30890t;

    /* renamed from: u  reason: collision with root package name */
    private s3 f30891u;

    /* renamed from: v  reason: collision with root package name */
    private io.sentry.protocol.x f30892v;

    /* renamed from: w  reason: collision with root package name */
    private y0 f30893w;

    /* renamed from: x  reason: collision with root package name */
    private final Map f30894x;

    /* renamed from: y  reason: collision with root package name */
    private final io.sentry.featureflags.b f30895y;

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
        private final z7 f30896a;

        /* renamed from: b  reason: collision with root package name */
        private final z7 f30897b;

        public d(z7 z7Var, z7 z7Var2) {
            this.f30897b = z7Var;
            this.f30896a = z7Var2;
        }

        public z7 a() {
            return this.f30897b;
        }

        public z7 b() {
            return this.f30896a;
        }
    }

    public z3(k7 k7Var) {
        this.f30874d = new WeakReference(null);
        this.f30879i = new ArrayList();
        this.f30881k = new ConcurrentHashMap();
        this.f30882l = new ConcurrentHashMap();
        this.f30883m = new CopyOnWriteArrayList();
        this.f30886p = new io.sentry.util.a();
        this.f30887q = new io.sentry.util.a();
        this.f30888r = new io.sentry.util.a();
        this.f30889s = new io.sentry.protocol.c();
        this.f30890t = new CopyOnWriteArrayList();
        io.sentry.protocol.x xVar = io.sentry.protocol.x.f30367e;
        this.f30892v = xVar;
        this.f30893w = s2.m();
        this.f30894x = Collections.synchronizedMap(new WeakHashMap());
        this.f30884n = (k7) io.sentry.util.y.c(k7Var, "SentryOptions is required.");
        this.f30880j = g(this.f30884n.getMaxBreadcrumbs());
        this.f30895y = io.sentry.featureflags.a.a(k7Var);
        this.f30891u = new s3();
        this.f30871a = xVar;
    }

    private Breadcrumb W(k7.a aVar, Breadcrumb breadcrumb, Hint hint) {
        try {
            return aVar.a(breadcrumb, hint);
        } catch (Throwable th2) {
            this.f30884n.getLogger().b(SentryLevel.ERROR, "The BeforeBreadcrumbCallback callback threw an exception. Exception details will be added to the breadcrumb.", th2);
            if (th2.getMessage() != null) {
                breadcrumb.A("sentry:message", th2.getMessage());
            }
            return breadcrumb;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Queue g(int i10) {
        if (i10 > 0) {
            return o8.d(new e(i10));
        }
        return new t();
    }

    @Override // io.sentry.IScope
    public void A(String str, Object obj) {
        if (str != null) {
            this.f30889s.l(str, obj);
            for (v0 v0Var : this.f30884n.getScopeObservers()) {
                v0Var.j(this.f30889s);
            }
        }
    }

    @Override // io.sentry.IScope
    public void B(e1 e1Var) {
        a1 a10 = this.f30887q.a();
        try {
            this.f30873c = e1Var;
            for (v0 v0Var : this.f30884n.getScopeObservers()) {
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
        return this.f30879i;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.h0 D() {
        return this.f30876f;
    }

    @Override // io.sentry.IScope
    public String E() {
        e1 e1Var = this.f30873c;
        if (e1Var != null) {
            return e1Var.getName();
        }
        return this.f30875e;
    }

    @Override // io.sentry.IScope
    public void F() {
        a1 a10 = this.f30887q.a();
        try {
            this.f30873c = null;
            if (a10 != null) {
                a10.close();
            }
            this.f30875e = null;
            for (v0 v0Var : this.f30884n.getScopeObservers()) {
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
        return this.f30895y;
    }

    @Override // io.sentry.IScope
    public void H(y0 y0Var) {
        this.f30893w = y0Var;
    }

    @Override // io.sentry.IScope
    public void I(String str) {
        if (str == null) {
            return;
        }
        this.f30889s.n(str);
    }

    @Override // io.sentry.IScope
    public z7 J() {
        return this.f30885o;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.x K() {
        return this.f30892v;
    }

    @Override // io.sentry.IScope
    public s3 L() {
        return this.f30891u;
    }

    @Override // io.sentry.IScope
    public void M(String str) {
        this.f30877g = str;
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
        for (v0 v0Var : this.f30884n.getScopeObservers()) {
            v0Var.j(z10);
        }
    }

    @Override // io.sentry.IScope
    public y0 N() {
        return this.f30893w;
    }

    @Override // io.sentry.IScope
    public List O() {
        return new CopyOnWriteArrayList(this.f30890t);
    }

    @Override // io.sentry.IScope
    public void P(SentryEvent sentryEvent) {
        io.sentry.util.z zVar;
        ISpan iSpan;
        if (this.f30884n.isTracingEnabled() && sentryEvent.O() != null && (zVar = (io.sentry.util.z) this.f30894x.get(io.sentry.util.h.a(sentryEvent.O()))) != null) {
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
        this.f30885o = null;
    }

    @Override // io.sentry.IScope
    public s3 R(a aVar) {
        a1 a10 = this.f30888r.a();
        try {
            aVar.a(this.f30891u);
            s3 s3Var = new s3(this.f30891u);
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
        a1 a10 = this.f30887q.a();
        try {
            cVar.a(this.f30873c);
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
        this.f30871a = xVar;
    }

    @Override // io.sentry.IScope
    public List U() {
        return io.sentry.util.f.a(this.f30883m);
    }

    @Override // io.sentry.IScope
    public void V(s3 s3Var) {
        this.f30891u = s3Var;
        e8 g10 = s3Var.g();
        for (v0 v0Var : this.f30884n.getScopeObservers()) {
            v0Var.i(g10, this);
        }
    }

    public io.sentry.protocol.x X() {
        return this.f30871a;
    }

    public void Y(String str) {
        if (str != null) {
            this.f30882l.remove(str);
            for (v0 v0Var : this.f30884n.getScopeObservers()) {
                v0Var.b(str);
                v0Var.l(this.f30882l);
            }
        }
    }

    public void Z(String str) {
        if (str != null) {
            this.f30881k.remove(str);
            for (v0 v0Var : this.f30884n.getScopeObservers()) {
                v0Var.d(str);
                v0Var.c(this.f30881k);
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
            this.f30881k.put(str, str2);
            for (v0 v0Var : this.f30884n.getScopeObservers()) {
                v0Var.a(str, str2);
                v0Var.c(this.f30881k);
            }
        }
    }

    @Override // io.sentry.IScope
    public k7 b() {
        return this.f30884n;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.o c() {
        return this.f30878h;
    }

    @Override // io.sentry.IScope
    public void clear() {
        this.f30872b = null;
        this.f30876f = null;
        this.f30878h = null;
        this.f30877g = null;
        this.f30879i.clear();
        x();
        this.f30881k.clear();
        this.f30882l.clear();
        this.f30883m.clear();
        F();
        d();
    }

    public void d() {
        this.f30890t.clear();
    }

    @Override // io.sentry.IScope
    public void e(Breadcrumb breadcrumb) {
        i(breadcrumb, null);
    }

    @Override // io.sentry.IScope
    public void f(String str, String str2) {
        if (str != null) {
            if (str2 == null) {
                Y(str);
                return;
            }
            this.f30882l.put(str, str2);
            for (v0 v0Var : this.f30884n.getScopeObservers()) {
                v0Var.f(str, str2);
                v0Var.l(this.f30882l);
            }
        }
    }

    @Override // io.sentry.IScope
    public Map getExtras() {
        return this.f30882l;
    }

    @Override // io.sentry.IScope
    public String h() {
        return this.f30877g;
    }

    @Override // io.sentry.IScope
    public void i(Breadcrumb breadcrumb, Hint hint) {
        if (breadcrumb != null && !(this.f30880j instanceof t)) {
            if (hint == null) {
                hint = new Hint();
            }
            k7.a beforeBreadcrumb = this.f30884n.getBeforeBreadcrumb();
            if (beforeBreadcrumb != null) {
                breadcrumb = W(beforeBreadcrumb, breadcrumb, hint);
            }
            if (breadcrumb != null) {
                this.f30880j.add(breadcrumb);
                for (v0 v0Var : this.f30884n.getScopeObservers()) {
                    v0Var.e(breadcrumb);
                    v0Var.g(this.f30880j);
                }
                return;
            }
            this.f30884n.getLogger().c(SentryLevel.INFO, "Breadcrumb was dropped by beforeBreadcrumb", new Object[0]);
        }
    }

    @Override // io.sentry.IScope
    public void j(Throwable th2, ISpan iSpan, String str) {
        io.sentry.util.y.c(th2, "throwable is required");
        io.sentry.util.y.c(iSpan, "span is required");
        io.sentry.util.y.c(str, "transactionName is required");
        Throwable a10 = io.sentry.util.h.a(th2);
        if (!this.f30894x.containsKey(a10)) {
            this.f30894x.put(a10, new io.sentry.util.z(new WeakReference(iSpan), str));
        }
    }

    @Override // io.sentry.IScope
    public void k(io.sentry.protocol.h0 h0Var) {
        this.f30876f = h0Var;
        for (v0 v0Var : this.f30884n.getScopeObservers()) {
            v0Var.k(h0Var);
        }
    }

    @Override // io.sentry.IScope
    public e1 l() {
        return this.f30873c;
    }

    @Override // io.sentry.IScope
    public z7 m() {
        a1 a10 = this.f30886p.a();
        try {
            z7 z7Var = null;
            if (this.f30885o != null) {
                this.f30885o.c();
                this.f30884n.getContinuousProfiler().e();
                z7 clone = this.f30885o.clone();
                this.f30885o = null;
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
        return this.f30872b;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.g o() {
        return this.f30895y.o();
    }

    @Override // io.sentry.IScope
    public void p(io.sentry.protocol.x xVar) {
        this.f30892v = xVar;
        for (v0 v0Var : this.f30884n.getScopeObservers()) {
            v0Var.p(xVar);
        }
    }

    @Override // io.sentry.IScope
    public d q() {
        a1 a10 = this.f30886p.a();
        try {
            if (this.f30885o != null) {
                this.f30885o.c();
                this.f30884n.getContinuousProfiler().e();
            }
            z7 z7Var = this.f30885o;
            d dVar = null;
            z7 z7Var2 = null;
            if (this.f30884n.getRelease() != null) {
                this.f30885o = new z7(this.f30884n.getDistinctId(), this.f30876f, this.f30884n.getEnvironment(), this.f30884n.getRelease());
                if (z7Var != null) {
                    z7Var2 = z7Var.clone();
                }
                dVar = new d(this.f30885o.clone(), z7Var2);
            } else {
                this.f30884n.getLogger().c(SentryLevel.WARNING, "Release is not set on SentryOptions. Session could not be started", new Object[0]);
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
        this.f30884n = k7Var;
        Queue<Breadcrumb> queue = this.f30880j;
        this.f30880j = g(k7Var.getMaxBreadcrumbs());
        for (Breadcrumb breadcrumb : queue) {
            e(breadcrumb);
        }
    }

    @Override // io.sentry.IScope
    public ISpan s() {
        ISpan n10;
        ISpan iSpan = (ISpan) this.f30874d.get();
        if (iSpan != null) {
            return iSpan;
        }
        e1 e1Var = this.f30873c;
        if (e1Var != null && (n10 = e1Var.n()) != null) {
            return n10;
        }
        return e1Var;
    }

    @Override // io.sentry.IScope
    public Queue t() {
        return this.f30880j;
    }

    @Override // io.sentry.IScope
    public void u(List list) {
        if (list != null) {
            this.f30879i = new ArrayList(list);
            for (v0 v0Var : this.f30884n.getScopeObservers()) {
                v0Var.h(list);
            }
        }
    }

    @Override // io.sentry.IScope
    public z7 v(b bVar) {
        z7 z7Var;
        a1 a10 = this.f30886p.a();
        try {
            bVar.a(this.f30885o);
            if (this.f30885o != null) {
                z7Var = this.f30885o.clone();
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
        return io.sentry.util.c.b(this.f30881k);
    }

    @Override // io.sentry.IScope
    public void x() {
        this.f30880j.clear();
        for (v0 v0Var : this.f30884n.getScopeObservers()) {
            v0Var.g(this.f30880j);
        }
    }

    @Override // io.sentry.IScope
    public List y() {
        return this.f30883m;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.c z() {
        return this.f30889s;
    }

    @Override // io.sentry.IScope
    /* renamed from: clone */
    public IScope m1192clone() {
        return new z3(this);
    }

    private z3(z3 z3Var) {
        this.f30874d = new WeakReference(null);
        this.f30879i = new ArrayList();
        this.f30881k = new ConcurrentHashMap();
        this.f30882l = new ConcurrentHashMap();
        this.f30883m = new CopyOnWriteArrayList();
        this.f30886p = new io.sentry.util.a();
        this.f30887q = new io.sentry.util.a();
        this.f30888r = new io.sentry.util.a();
        this.f30889s = new io.sentry.protocol.c();
        this.f30890t = new CopyOnWriteArrayList();
        this.f30892v = io.sentry.protocol.x.f30367e;
        this.f30893w = s2.m();
        this.f30894x = Collections.synchronizedMap(new WeakHashMap());
        this.f30873c = z3Var.f30873c;
        this.f30875e = z3Var.f30875e;
        this.f30874d = z3Var.f30874d;
        this.f30885o = z3Var.f30885o;
        this.f30884n = z3Var.f30884n;
        this.f30872b = z3Var.f30872b;
        this.f30893w = z3Var.f30893w;
        this.f30871a = z3Var.X();
        io.sentry.protocol.h0 h0Var = z3Var.f30876f;
        this.f30876f = h0Var != null ? new io.sentry.protocol.h0(h0Var) : null;
        this.f30877g = z3Var.f30877g;
        this.f30892v = z3Var.f30892v;
        io.sentry.protocol.o oVar = z3Var.f30878h;
        this.f30878h = oVar != null ? new io.sentry.protocol.o(oVar) : null;
        this.f30879i = new ArrayList(z3Var.f30879i);
        this.f30883m = new CopyOnWriteArrayList(z3Var.f30883m);
        Breadcrumb[] breadcrumbArr = (Breadcrumb[]) z3Var.f30880j.toArray(new Breadcrumb[0]);
        Queue g10 = g(z3Var.f30884n.getMaxBreadcrumbs());
        for (Breadcrumb breadcrumb : breadcrumbArr) {
            g10.add(new Breadcrumb(breadcrumb));
        }
        this.f30880j = g10;
        Map map = z3Var.f30881k;
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
        for (Map.Entry entry : map.entrySet()) {
            if (entry != null) {
                concurrentHashMap.put((String) entry.getKey(), (String) entry.getValue());
            }
        }
        this.f30881k = concurrentHashMap;
        Map map2 = z3Var.f30882l;
        ConcurrentHashMap concurrentHashMap2 = new ConcurrentHashMap();
        for (Map.Entry entry2 : map2.entrySet()) {
            if (entry2 != null) {
                concurrentHashMap2.put((String) entry2.getKey(), entry2.getValue());
            }
        }
        this.f30882l = concurrentHashMap2;
        this.f30889s = new io.sentry.protocol.c(z3Var.f30889s);
        this.f30890t = new CopyOnWriteArrayList(z3Var.f30890t);
        this.f30895y = z3Var.f30895y.clone();
        this.f30891u = new s3(z3Var.f30891u);
    }
}
