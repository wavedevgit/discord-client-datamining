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
    private volatile io.sentry.protocol.x f29975a;

    /* renamed from: b  reason: collision with root package name */
    private SentryLevel f29976b;

    /* renamed from: c  reason: collision with root package name */
    private e1 f29977c;

    /* renamed from: d  reason: collision with root package name */
    private WeakReference f29978d;

    /* renamed from: e  reason: collision with root package name */
    private String f29979e;

    /* renamed from: f  reason: collision with root package name */
    private io.sentry.protocol.h0 f29980f;

    /* renamed from: g  reason: collision with root package name */
    private String f29981g;

    /* renamed from: h  reason: collision with root package name */
    private io.sentry.protocol.o f29982h;

    /* renamed from: i  reason: collision with root package name */
    private List f29983i;

    /* renamed from: j  reason: collision with root package name */
    private volatile Queue f29984j;

    /* renamed from: k  reason: collision with root package name */
    private Map f29985k;

    /* renamed from: l  reason: collision with root package name */
    private Map f29986l;

    /* renamed from: m  reason: collision with root package name */
    private List f29987m;

    /* renamed from: n  reason: collision with root package name */
    private volatile k7 f29988n;

    /* renamed from: o  reason: collision with root package name */
    private volatile z7 f29989o;

    /* renamed from: p  reason: collision with root package name */
    private final io.sentry.util.a f29990p;

    /* renamed from: q  reason: collision with root package name */
    private final io.sentry.util.a f29991q;

    /* renamed from: r  reason: collision with root package name */
    private final io.sentry.util.a f29992r;

    /* renamed from: s  reason: collision with root package name */
    private io.sentry.protocol.c f29993s;

    /* renamed from: t  reason: collision with root package name */
    private List f29994t;

    /* renamed from: u  reason: collision with root package name */
    private s3 f29995u;

    /* renamed from: v  reason: collision with root package name */
    private io.sentry.protocol.x f29996v;

    /* renamed from: w  reason: collision with root package name */
    private y0 f29997w;

    /* renamed from: x  reason: collision with root package name */
    private final Map f29998x;

    /* renamed from: y  reason: collision with root package name */
    private final io.sentry.featureflags.b f29999y;

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
        private final z7 f30000a;

        /* renamed from: b  reason: collision with root package name */
        private final z7 f30001b;

        public d(z7 z7Var, z7 z7Var2) {
            this.f30001b = z7Var;
            this.f30000a = z7Var2;
        }

        public z7 a() {
            return this.f30001b;
        }

        public z7 b() {
            return this.f30000a;
        }
    }

    public z3(k7 k7Var) {
        this.f29978d = new WeakReference(null);
        this.f29983i = new ArrayList();
        this.f29985k = new ConcurrentHashMap();
        this.f29986l = new ConcurrentHashMap();
        this.f29987m = new CopyOnWriteArrayList();
        this.f29990p = new io.sentry.util.a();
        this.f29991q = new io.sentry.util.a();
        this.f29992r = new io.sentry.util.a();
        this.f29993s = new io.sentry.protocol.c();
        this.f29994t = new CopyOnWriteArrayList();
        io.sentry.protocol.x xVar = io.sentry.protocol.x.f29471e;
        this.f29996v = xVar;
        this.f29997w = s2.n();
        this.f29998x = Collections.synchronizedMap(new WeakHashMap());
        this.f29988n = (k7) io.sentry.util.y.c(k7Var, "SentryOptions is required.");
        this.f29984j = g(this.f29988n.getMaxBreadcrumbs());
        this.f29999y = io.sentry.featureflags.a.a(k7Var);
        this.f29995u = new s3();
        this.f29975a = xVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Queue g(int i10) {
        if (i10 > 0) {
            return o8.d(new e(i10));
        }
        return new t();
    }

    private Breadcrumb j(k7.a aVar, Breadcrumb breadcrumb, Hint hint) {
        try {
            return aVar.a(breadcrumb, hint);
        } catch (Throwable th2) {
            this.f29988n.getLogger().b(SentryLevel.ERROR, "The BeforeBreadcrumbCallback callback threw an exception. Exception details will be added to the breadcrumb.", th2);
            if (th2.getMessage() != null) {
                breadcrumb.A("sentry:message", th2.getMessage());
            }
            return breadcrumb;
        }
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.c A() {
        return this.f29993s;
    }

    @Override // io.sentry.IScope
    public void B(String str, Object obj) {
        if (str != null) {
            this.f29993s.l(str, obj);
            for (v0 v0Var : this.f29988n.getScopeObservers()) {
                v0Var.j(this.f29993s);
            }
        }
    }

    @Override // io.sentry.IScope
    public void C(e1 e1Var) {
        a1 a10 = this.f29991q.a();
        try {
            this.f29977c = e1Var;
            for (v0 v0Var : this.f29988n.getScopeObservers()) {
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
    public List D() {
        return this.f29983i;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.h0 E() {
        return this.f29980f;
    }

    @Override // io.sentry.IScope
    public String F() {
        e1 e1Var = this.f29977c;
        if (e1Var != null) {
            return e1Var.getName();
        }
        return this.f29979e;
    }

    @Override // io.sentry.IScope
    public void G() {
        a1 a10 = this.f29991q.a();
        try {
            this.f29977c = null;
            if (a10 != null) {
                a10.close();
            }
            this.f29979e = null;
            for (v0 v0Var : this.f29988n.getScopeObservers()) {
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
    public io.sentry.featureflags.b H() {
        return this.f29999y;
    }

    @Override // io.sentry.IScope
    public void I(y0 y0Var) {
        this.f29997w = y0Var;
    }

    @Override // io.sentry.IScope
    public void J(String str) {
        if (str == null) {
            return;
        }
        this.f29993s.n(str);
    }

    @Override // io.sentry.IScope
    public z7 K() {
        return this.f29989o;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.x L() {
        return this.f29996v;
    }

    @Override // io.sentry.IScope
    public s3 M() {
        return this.f29995u;
    }

    @Override // io.sentry.IScope
    public void N(String str) {
        this.f29981g = str;
        io.sentry.protocol.c A = A();
        io.sentry.protocol.a d10 = A.d();
        if (d10 == null) {
            d10 = new io.sentry.protocol.a();
            A.o(d10);
        }
        if (str == null) {
            d10.x(null);
        } else {
            ArrayList arrayList = new ArrayList(1);
            arrayList.add(str);
            d10.x(arrayList);
        }
        for (v0 v0Var : this.f29988n.getScopeObservers()) {
            v0Var.j(A);
        }
    }

    @Override // io.sentry.IScope
    public y0 O() {
        return this.f29997w;
    }

    @Override // io.sentry.IScope
    public List P() {
        return new CopyOnWriteArrayList(this.f29994t);
    }

    @Override // io.sentry.IScope
    public void Q(SentryEvent sentryEvent) {
        io.sentry.util.z zVar;
        ISpan iSpan;
        if (this.f29988n.isTracingEnabled() && sentryEvent.O() != null && (zVar = (io.sentry.util.z) this.f29998x.get(io.sentry.util.h.a(sentryEvent.O()))) != null) {
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
    public void R() {
        this.f29989o = null;
    }

    @Override // io.sentry.IScope
    public s3 S(a aVar) {
        a1 a10 = this.f29992r.a();
        try {
            aVar.a(this.f29995u);
            s3 s3Var = new s3(this.f29995u);
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
    public void T(c cVar) {
        a1 a10 = this.f29991q.a();
        try {
            cVar.a(this.f29977c);
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
    public void U(io.sentry.protocol.x xVar) {
        this.f29975a = xVar;
    }

    @Override // io.sentry.IScope
    public List V() {
        return io.sentry.util.f.a(this.f29987m);
    }

    @Override // io.sentry.IScope
    public void W(s3 s3Var) {
        this.f29995u = s3Var;
        e8 g10 = s3Var.g();
        for (v0 v0Var : this.f29988n.getScopeObservers()) {
            v0Var.i(g10, this);
        }
    }

    public io.sentry.protocol.x X() {
        return this.f29975a;
    }

    public void Y(String str) {
        if (str != null) {
            this.f29986l.remove(str);
            for (v0 v0Var : this.f29988n.getScopeObservers()) {
                v0Var.b(str);
                v0Var.k(this.f29986l);
            }
        }
    }

    public void Z(String str) {
        if (str != null) {
            this.f29985k.remove(str);
            for (v0 v0Var : this.f29988n.getScopeObservers()) {
                v0Var.d(str);
                v0Var.c(this.f29985k);
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
            this.f29985k.put(str, str2);
            for (v0 v0Var : this.f29988n.getScopeObservers()) {
                v0Var.a(str, str2);
                v0Var.c(this.f29985k);
            }
        }
    }

    @Override // io.sentry.IScope
    public k7 b() {
        return this.f29988n;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.o c() {
        return this.f29982h;
    }

    @Override // io.sentry.IScope
    public void clear() {
        this.f29976b = null;
        this.f29980f = null;
        this.f29982h = null;
        this.f29981g = null;
        this.f29983i.clear();
        y();
        this.f29985k.clear();
        this.f29986l.clear();
        this.f29987m.clear();
        G();
        d();
    }

    public void d() {
        this.f29994t.clear();
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
            this.f29986l.put(str, str2);
            for (v0 v0Var : this.f29988n.getScopeObservers()) {
                v0Var.f(str, str2);
                v0Var.k(this.f29986l);
            }
        }
    }

    @Override // io.sentry.IScope
    public Map getExtras() {
        return this.f29986l;
    }

    @Override // io.sentry.IScope
    public String h() {
        return this.f29981g;
    }

    @Override // io.sentry.IScope
    public void i(Breadcrumb breadcrumb, Hint hint) {
        if (breadcrumb != null && !(this.f29984j instanceof t)) {
            if (hint == null) {
                hint = new Hint();
            }
            k7.a beforeBreadcrumb = this.f29988n.getBeforeBreadcrumb();
            if (beforeBreadcrumb != null) {
                breadcrumb = j(beforeBreadcrumb, breadcrumb, hint);
            }
            if (breadcrumb != null) {
                this.f29984j.add(breadcrumb);
                for (v0 v0Var : this.f29988n.getScopeObservers()) {
                    v0Var.e(breadcrumb);
                    v0Var.g(this.f29984j);
                }
                return;
            }
            this.f29988n.getLogger().c(SentryLevel.INFO, "Breadcrumb was dropped by beforeBreadcrumb", new Object[0]);
        }
    }

    @Override // io.sentry.IScope
    public void k(Throwable th2, ISpan iSpan, String str) {
        io.sentry.util.y.c(th2, "throwable is required");
        io.sentry.util.y.c(iSpan, "span is required");
        io.sentry.util.y.c(str, "transactionName is required");
        Throwable a10 = io.sentry.util.h.a(th2);
        if (!this.f29998x.containsKey(a10)) {
            this.f29998x.put(a10, new io.sentry.util.z(new WeakReference(iSpan), str));
        }
    }

    @Override // io.sentry.IScope
    public void l(io.sentry.protocol.h0 h0Var) {
        this.f29980f = h0Var;
        for (v0 v0Var : this.f29988n.getScopeObservers()) {
            v0Var.l(h0Var);
        }
    }

    @Override // io.sentry.IScope
    public e1 m() {
        return this.f29977c;
    }

    @Override // io.sentry.IScope
    public z7 n() {
        a1 a10 = this.f29990p.a();
        try {
            z7 z7Var = null;
            if (this.f29989o != null) {
                this.f29989o.c();
                this.f29988n.getContinuousProfiler().e();
                z7 clone = this.f29989o.clone();
                this.f29989o = null;
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
    public SentryLevel o() {
        return this.f29976b;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.g p() {
        return this.f29999y.p();
    }

    @Override // io.sentry.IScope
    public void q(io.sentry.protocol.x xVar) {
        this.f29996v = xVar;
        for (v0 v0Var : this.f29988n.getScopeObservers()) {
            v0Var.q(xVar);
        }
    }

    @Override // io.sentry.IScope
    public d r() {
        a1 a10 = this.f29990p.a();
        try {
            if (this.f29989o != null) {
                this.f29989o.c();
                this.f29988n.getContinuousProfiler().e();
            }
            z7 z7Var = this.f29989o;
            d dVar = null;
            z7 z7Var2 = null;
            if (this.f29988n.getRelease() != null) {
                this.f29989o = new z7(this.f29988n.getDistinctId(), this.f29980f, this.f29988n.getEnvironment(), this.f29988n.getRelease());
                if (z7Var != null) {
                    z7Var2 = z7Var.clone();
                }
                dVar = new d(this.f29989o.clone(), z7Var2);
            } else {
                this.f29988n.getLogger().c(SentryLevel.WARNING, "Release is not set on SentryOptions. Session could not be started", new Object[0]);
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
    public void s(k7 k7Var) {
        this.f29988n = k7Var;
        Queue<Breadcrumb> queue = this.f29984j;
        this.f29984j = g(k7Var.getMaxBreadcrumbs());
        for (Breadcrumb breadcrumb : queue) {
            e(breadcrumb);
        }
    }

    @Override // io.sentry.IScope
    public ISpan t() {
        ISpan n10;
        ISpan iSpan = (ISpan) this.f29978d.get();
        if (iSpan != null) {
            return iSpan;
        }
        e1 e1Var = this.f29977c;
        if (e1Var != null && (n10 = e1Var.n()) != null) {
            return n10;
        }
        return e1Var;
    }

    @Override // io.sentry.IScope
    public Queue u() {
        return this.f29984j;
    }

    @Override // io.sentry.IScope
    public void v(List list) {
        if (list != null) {
            this.f29983i = new ArrayList(list);
            for (v0 v0Var : this.f29988n.getScopeObservers()) {
                v0Var.h(list);
            }
        }
    }

    @Override // io.sentry.IScope
    public z7 w(b bVar) {
        z7 z7Var;
        a1 a10 = this.f29990p.a();
        try {
            bVar.a(this.f29989o);
            if (this.f29989o != null) {
                z7Var = this.f29989o.clone();
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
    public Map x() {
        return io.sentry.util.c.b(this.f29985k);
    }

    @Override // io.sentry.IScope
    public void y() {
        this.f29984j.clear();
        for (v0 v0Var : this.f29988n.getScopeObservers()) {
            v0Var.g(this.f29984j);
        }
    }

    @Override // io.sentry.IScope
    public List z() {
        return this.f29987m;
    }

    @Override // io.sentry.IScope
    /* renamed from: clone */
    public IScope m1192clone() {
        return new z3(this);
    }

    private z3(z3 z3Var) {
        this.f29978d = new WeakReference(null);
        this.f29983i = new ArrayList();
        this.f29985k = new ConcurrentHashMap();
        this.f29986l = new ConcurrentHashMap();
        this.f29987m = new CopyOnWriteArrayList();
        this.f29990p = new io.sentry.util.a();
        this.f29991q = new io.sentry.util.a();
        this.f29992r = new io.sentry.util.a();
        this.f29993s = new io.sentry.protocol.c();
        this.f29994t = new CopyOnWriteArrayList();
        this.f29996v = io.sentry.protocol.x.f29471e;
        this.f29997w = s2.n();
        this.f29998x = Collections.synchronizedMap(new WeakHashMap());
        this.f29977c = z3Var.f29977c;
        this.f29979e = z3Var.f29979e;
        this.f29978d = z3Var.f29978d;
        this.f29989o = z3Var.f29989o;
        this.f29988n = z3Var.f29988n;
        this.f29976b = z3Var.f29976b;
        this.f29997w = z3Var.f29997w;
        this.f29975a = z3Var.X();
        io.sentry.protocol.h0 h0Var = z3Var.f29980f;
        this.f29980f = h0Var != null ? new io.sentry.protocol.h0(h0Var) : null;
        this.f29981g = z3Var.f29981g;
        this.f29996v = z3Var.f29996v;
        io.sentry.protocol.o oVar = z3Var.f29982h;
        this.f29982h = oVar != null ? new io.sentry.protocol.o(oVar) : null;
        this.f29983i = new ArrayList(z3Var.f29983i);
        this.f29987m = new CopyOnWriteArrayList(z3Var.f29987m);
        Breadcrumb[] breadcrumbArr = (Breadcrumb[]) z3Var.f29984j.toArray(new Breadcrumb[0]);
        Queue g10 = g(z3Var.f29988n.getMaxBreadcrumbs());
        for (Breadcrumb breadcrumb : breadcrumbArr) {
            g10.add(new Breadcrumb(breadcrumb));
        }
        this.f29984j = g10;
        Map map = z3Var.f29985k;
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
        for (Map.Entry entry : map.entrySet()) {
            if (entry != null) {
                concurrentHashMap.put((String) entry.getKey(), (String) entry.getValue());
            }
        }
        this.f29985k = concurrentHashMap;
        Map map2 = z3Var.f29986l;
        ConcurrentHashMap concurrentHashMap2 = new ConcurrentHashMap();
        for (Map.Entry entry2 : map2.entrySet()) {
            if (entry2 != null) {
                concurrentHashMap2.put((String) entry2.getKey(), entry2.getValue());
            }
        }
        this.f29986l = concurrentHashMap2;
        this.f29993s = new io.sentry.protocol.c(z3Var.f29993s);
        this.f29994t = new CopyOnWriteArrayList(z3Var.f29994t);
        this.f29999y = z3Var.f29999y.clone();
        this.f29995u = new s3(z3Var.f29995u);
    }
}
