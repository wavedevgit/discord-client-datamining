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
    private volatile io.sentry.protocol.x f30917a;

    /* renamed from: b  reason: collision with root package name */
    private SentryLevel f30918b;

    /* renamed from: c  reason: collision with root package name */
    private e1 f30919c;

    /* renamed from: d  reason: collision with root package name */
    private WeakReference f30920d;

    /* renamed from: e  reason: collision with root package name */
    private String f30921e;

    /* renamed from: f  reason: collision with root package name */
    private io.sentry.protocol.h0 f30922f;

    /* renamed from: g  reason: collision with root package name */
    private String f30923g;

    /* renamed from: h  reason: collision with root package name */
    private io.sentry.protocol.o f30924h;

    /* renamed from: i  reason: collision with root package name */
    private List f30925i;

    /* renamed from: j  reason: collision with root package name */
    private volatile Queue f30926j;

    /* renamed from: k  reason: collision with root package name */
    private Map f30927k;

    /* renamed from: l  reason: collision with root package name */
    private Map f30928l;

    /* renamed from: m  reason: collision with root package name */
    private List f30929m;

    /* renamed from: n  reason: collision with root package name */
    private volatile k7 f30930n;

    /* renamed from: o  reason: collision with root package name */
    private volatile z7 f30931o;

    /* renamed from: p  reason: collision with root package name */
    private final io.sentry.util.a f30932p;

    /* renamed from: q  reason: collision with root package name */
    private final io.sentry.util.a f30933q;

    /* renamed from: r  reason: collision with root package name */
    private final io.sentry.util.a f30934r;

    /* renamed from: s  reason: collision with root package name */
    private io.sentry.protocol.c f30935s;

    /* renamed from: t  reason: collision with root package name */
    private List f30936t;

    /* renamed from: u  reason: collision with root package name */
    private s3 f30937u;

    /* renamed from: v  reason: collision with root package name */
    private io.sentry.protocol.x f30938v;

    /* renamed from: w  reason: collision with root package name */
    private y0 f30939w;

    /* renamed from: x  reason: collision with root package name */
    private final Map f30940x;

    /* renamed from: y  reason: collision with root package name */
    private final io.sentry.featureflags.b f30941y;

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
        private final z7 f30942a;

        /* renamed from: b  reason: collision with root package name */
        private final z7 f30943b;

        public d(z7 z7Var, z7 z7Var2) {
            this.f30943b = z7Var;
            this.f30942a = z7Var2;
        }

        public z7 a() {
            return this.f30943b;
        }

        public z7 b() {
            return this.f30942a;
        }
    }

    public z3(k7 k7Var) {
        this.f30920d = new WeakReference(null);
        this.f30925i = new ArrayList();
        this.f30927k = new ConcurrentHashMap();
        this.f30928l = new ConcurrentHashMap();
        this.f30929m = new CopyOnWriteArrayList();
        this.f30932p = new io.sentry.util.a();
        this.f30933q = new io.sentry.util.a();
        this.f30934r = new io.sentry.util.a();
        this.f30935s = new io.sentry.protocol.c();
        this.f30936t = new CopyOnWriteArrayList();
        io.sentry.protocol.x xVar = io.sentry.protocol.x.f30413e;
        this.f30938v = xVar;
        this.f30939w = s2.n();
        this.f30940x = Collections.synchronizedMap(new WeakHashMap());
        this.f30930n = (k7) io.sentry.util.y.c(k7Var, "SentryOptions is required.");
        this.f30926j = V(this.f30930n.getMaxBreadcrumbs());
        this.f30941y = io.sentry.featureflags.a.a(k7Var);
        this.f30937u = new s3();
        this.f30917a = xVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Queue V(int i10) {
        if (i10 > 0) {
            return o8.d(new e(i10));
        }
        return new t();
    }

    private Breadcrumb W(k7.a aVar, Breadcrumb breadcrumb, Hint hint) {
        try {
            return aVar.a(breadcrumb, hint);
        } catch (Throwable th2) {
            this.f30930n.getLogger().b(SentryLevel.ERROR, "The BeforeBreadcrumbCallback callback threw an exception. Exception details will be added to the breadcrumb.", th2);
            if (th2.getMessage() != null) {
                breadcrumb.A("sentry:message", th2.getMessage());
            }
            return breadcrumb;
        }
    }

    @Override // io.sentry.IScope
    public void A(e1 e1Var) {
        a1 a10 = this.f30933q.a();
        try {
            this.f30919c = e1Var;
            for (v0 v0Var : this.f30930n.getScopeObservers()) {
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
    public List B() {
        return this.f30925i;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.h0 C() {
        return this.f30922f;
    }

    @Override // io.sentry.IScope
    public String D() {
        e1 e1Var = this.f30919c;
        if (e1Var != null) {
            return e1Var.getName();
        }
        return this.f30921e;
    }

    @Override // io.sentry.IScope
    public void E() {
        a1 a10 = this.f30933q.a();
        try {
            this.f30919c = null;
            if (a10 != null) {
                a10.close();
            }
            this.f30921e = null;
            for (v0 v0Var : this.f30930n.getScopeObservers()) {
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
    public io.sentry.featureflags.b F() {
        return this.f30941y;
    }

    @Override // io.sentry.IScope
    public void G(y0 y0Var) {
        this.f30939w = y0Var;
    }

    @Override // io.sentry.IScope
    public void H(String str) {
        if (str == null) {
            return;
        }
        this.f30935s.n(str);
    }

    @Override // io.sentry.IScope
    public z7 I() {
        return this.f30931o;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.x J() {
        return this.f30938v;
    }

    @Override // io.sentry.IScope
    public s3 K() {
        return this.f30937u;
    }

    @Override // io.sentry.IScope
    public void L(String str) {
        this.f30923g = str;
        io.sentry.protocol.c y10 = y();
        io.sentry.protocol.a d10 = y10.d();
        if (d10 == null) {
            d10 = new io.sentry.protocol.a();
            y10.o(d10);
        }
        if (str == null) {
            d10.x(null);
        } else {
            ArrayList arrayList = new ArrayList(1);
            arrayList.add(str);
            d10.x(arrayList);
        }
        for (v0 v0Var : this.f30930n.getScopeObservers()) {
            v0Var.k(y10);
        }
    }

    @Override // io.sentry.IScope
    public y0 M() {
        return this.f30939w;
    }

    @Override // io.sentry.IScope
    public List N() {
        return new CopyOnWriteArrayList(this.f30936t);
    }

    @Override // io.sentry.IScope
    public void O(SentryEvent sentryEvent) {
        io.sentry.util.z zVar;
        ISpan iSpan;
        if (this.f30930n.isTracingEnabled() && sentryEvent.O() != null && (zVar = (io.sentry.util.z) this.f30940x.get(io.sentry.util.h.a(sentryEvent.O()))) != null) {
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
    public void P() {
        this.f30931o = null;
    }

    @Override // io.sentry.IScope
    public s3 Q(a aVar) {
        a1 a10 = this.f30934r.a();
        try {
            aVar.a(this.f30937u);
            s3 s3Var = new s3(this.f30937u);
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
    public void R(c cVar) {
        a1 a10 = this.f30933q.a();
        try {
            cVar.a(this.f30919c);
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
    public void S(io.sentry.protocol.x xVar) {
        this.f30917a = xVar;
    }

    @Override // io.sentry.IScope
    public List T() {
        return io.sentry.util.f.a(this.f30929m);
    }

    @Override // io.sentry.IScope
    public void U(s3 s3Var) {
        this.f30937u = s3Var;
        e8 g10 = s3Var.g();
        for (v0 v0Var : this.f30930n.getScopeObservers()) {
            v0Var.i(g10, this);
        }
    }

    public io.sentry.protocol.x X() {
        return this.f30917a;
    }

    public void Y(String str) {
        if (str != null) {
            this.f30928l.remove(str);
            for (v0 v0Var : this.f30930n.getScopeObservers()) {
                v0Var.b(str);
                v0Var.l(this.f30928l);
            }
        }
    }

    public void Z(String str) {
        if (str != null) {
            this.f30927k.remove(str);
            for (v0 v0Var : this.f30930n.getScopeObservers()) {
                v0Var.d(str);
                v0Var.c(this.f30927k);
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
            this.f30927k.put(str, str2);
            for (v0 v0Var : this.f30930n.getScopeObservers()) {
                v0Var.a(str, str2);
                v0Var.c(this.f30927k);
            }
        }
    }

    @Override // io.sentry.IScope
    public k7 b() {
        return this.f30930n;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.o c() {
        return this.f30924h;
    }

    @Override // io.sentry.IScope
    public void clear() {
        this.f30918b = null;
        this.f30922f = null;
        this.f30924h = null;
        this.f30923g = null;
        this.f30925i.clear();
        w();
        this.f30927k.clear();
        this.f30928l.clear();
        this.f30929m.clear();
        E();
        d();
    }

    public void d() {
        this.f30936t.clear();
    }

    @Override // io.sentry.IScope
    public void e(Breadcrumb breadcrumb) {
        g(breadcrumb, null);
    }

    @Override // io.sentry.IScope
    public void f(String str, String str2) {
        if (str != null) {
            if (str2 == null) {
                Y(str);
                return;
            }
            this.f30928l.put(str, str2);
            for (v0 v0Var : this.f30930n.getScopeObservers()) {
                v0Var.f(str, str2);
                v0Var.l(this.f30928l);
            }
        }
    }

    @Override // io.sentry.IScope
    public void g(Breadcrumb breadcrumb, Hint hint) {
        if (breadcrumb != null && !(this.f30926j instanceof t)) {
            if (hint == null) {
                hint = new Hint();
            }
            k7.a beforeBreadcrumb = this.f30930n.getBeforeBreadcrumb();
            if (beforeBreadcrumb != null) {
                breadcrumb = W(beforeBreadcrumb, breadcrumb, hint);
            }
            if (breadcrumb != null) {
                this.f30926j.add(breadcrumb);
                for (v0 v0Var : this.f30930n.getScopeObservers()) {
                    v0Var.e(breadcrumb);
                    v0Var.g(this.f30926j);
                }
                return;
            }
            this.f30930n.getLogger().c(SentryLevel.INFO, "Breadcrumb was dropped by beforeBreadcrumb", new Object[0]);
        }
    }

    @Override // io.sentry.IScope
    public Map getExtras() {
        return this.f30928l;
    }

    @Override // io.sentry.IScope
    public String h() {
        return this.f30923g;
    }

    @Override // io.sentry.IScope
    public void i(Throwable th2, ISpan iSpan, String str) {
        io.sentry.util.y.c(th2, "throwable is required");
        io.sentry.util.y.c(iSpan, "span is required");
        io.sentry.util.y.c(str, "transactionName is required");
        Throwable a10 = io.sentry.util.h.a(th2);
        if (!this.f30940x.containsKey(a10)) {
            this.f30940x.put(a10, new io.sentry.util.z(new WeakReference(iSpan), str));
        }
    }

    @Override // io.sentry.IScope
    public void j(io.sentry.protocol.h0 h0Var) {
        this.f30922f = h0Var;
        for (v0 v0Var : this.f30930n.getScopeObservers()) {
            v0Var.j(h0Var);
        }
    }

    @Override // io.sentry.IScope
    public e1 k() {
        return this.f30919c;
    }

    @Override // io.sentry.IScope
    public z7 l() {
        a1 a10 = this.f30932p.a();
        try {
            z7 z7Var = null;
            if (this.f30931o != null) {
                this.f30931o.c();
                this.f30930n.getContinuousProfiler().e();
                z7 clone = this.f30931o.clone();
                this.f30931o = null;
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
    public SentryLevel m() {
        return this.f30918b;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.g n() {
        return this.f30941y.n();
    }

    @Override // io.sentry.IScope
    public void o(io.sentry.protocol.x xVar) {
        this.f30938v = xVar;
        for (v0 v0Var : this.f30930n.getScopeObservers()) {
            v0Var.o(xVar);
        }
    }

    @Override // io.sentry.IScope
    public d p() {
        a1 a10 = this.f30932p.a();
        try {
            if (this.f30931o != null) {
                this.f30931o.c();
                this.f30930n.getContinuousProfiler().e();
            }
            z7 z7Var = this.f30931o;
            d dVar = null;
            z7 z7Var2 = null;
            if (this.f30930n.getRelease() != null) {
                this.f30931o = new z7(this.f30930n.getDistinctId(), this.f30922f, this.f30930n.getEnvironment(), this.f30930n.getRelease());
                if (z7Var != null) {
                    z7Var2 = z7Var.clone();
                }
                dVar = new d(this.f30931o.clone(), z7Var2);
            } else {
                this.f30930n.getLogger().c(SentryLevel.WARNING, "Release is not set on SentryOptions. Session could not be started", new Object[0]);
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
    public void q(k7 k7Var) {
        this.f30930n = k7Var;
        Queue<Breadcrumb> queue = this.f30926j;
        this.f30926j = V(k7Var.getMaxBreadcrumbs());
        for (Breadcrumb breadcrumb : queue) {
            e(breadcrumb);
        }
    }

    @Override // io.sentry.IScope
    public ISpan r() {
        ISpan n10;
        ISpan iSpan = (ISpan) this.f30920d.get();
        if (iSpan != null) {
            return iSpan;
        }
        e1 e1Var = this.f30919c;
        if (e1Var != null && (n10 = e1Var.n()) != null) {
            return n10;
        }
        return e1Var;
    }

    @Override // io.sentry.IScope
    public Queue s() {
        return this.f30926j;
    }

    @Override // io.sentry.IScope
    public void t(List list) {
        if (list != null) {
            this.f30925i = new ArrayList(list);
            for (v0 v0Var : this.f30930n.getScopeObservers()) {
                v0Var.h(list);
            }
        }
    }

    @Override // io.sentry.IScope
    public z7 u(b bVar) {
        z7 z7Var;
        a1 a10 = this.f30932p.a();
        try {
            bVar.a(this.f30931o);
            if (this.f30931o != null) {
                z7Var = this.f30931o.clone();
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
    public Map v() {
        return io.sentry.util.c.b(this.f30927k);
    }

    @Override // io.sentry.IScope
    public void w() {
        this.f30926j.clear();
        for (v0 v0Var : this.f30930n.getScopeObservers()) {
            v0Var.g(this.f30926j);
        }
    }

    @Override // io.sentry.IScope
    public List x() {
        return this.f30929m;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.c y() {
        return this.f30935s;
    }

    @Override // io.sentry.IScope
    public void z(String str, Object obj) {
        if (str != null) {
            this.f30935s.l(str, obj);
            for (v0 v0Var : this.f30930n.getScopeObservers()) {
                v0Var.k(this.f30935s);
            }
        }
    }

    @Override // io.sentry.IScope
    /* renamed from: clone */
    public IScope m1190clone() {
        return new z3(this);
    }

    private z3(z3 z3Var) {
        this.f30920d = new WeakReference(null);
        this.f30925i = new ArrayList();
        this.f30927k = new ConcurrentHashMap();
        this.f30928l = new ConcurrentHashMap();
        this.f30929m = new CopyOnWriteArrayList();
        this.f30932p = new io.sentry.util.a();
        this.f30933q = new io.sentry.util.a();
        this.f30934r = new io.sentry.util.a();
        this.f30935s = new io.sentry.protocol.c();
        this.f30936t = new CopyOnWriteArrayList();
        this.f30938v = io.sentry.protocol.x.f30413e;
        this.f30939w = s2.n();
        this.f30940x = Collections.synchronizedMap(new WeakHashMap());
        this.f30919c = z3Var.f30919c;
        this.f30921e = z3Var.f30921e;
        this.f30920d = z3Var.f30920d;
        this.f30931o = z3Var.f30931o;
        this.f30930n = z3Var.f30930n;
        this.f30918b = z3Var.f30918b;
        this.f30939w = z3Var.f30939w;
        this.f30917a = z3Var.X();
        io.sentry.protocol.h0 h0Var = z3Var.f30922f;
        this.f30922f = h0Var != null ? new io.sentry.protocol.h0(h0Var) : null;
        this.f30923g = z3Var.f30923g;
        this.f30938v = z3Var.f30938v;
        io.sentry.protocol.o oVar = z3Var.f30924h;
        this.f30924h = oVar != null ? new io.sentry.protocol.o(oVar) : null;
        this.f30925i = new ArrayList(z3Var.f30925i);
        this.f30929m = new CopyOnWriteArrayList(z3Var.f30929m);
        Breadcrumb[] breadcrumbArr = (Breadcrumb[]) z3Var.f30926j.toArray(new Breadcrumb[0]);
        Queue V = V(z3Var.f30930n.getMaxBreadcrumbs());
        for (Breadcrumb breadcrumb : breadcrumbArr) {
            V.add(new Breadcrumb(breadcrumb));
        }
        this.f30926j = V;
        Map map = z3Var.f30927k;
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
        for (Map.Entry entry : map.entrySet()) {
            if (entry != null) {
                concurrentHashMap.put((String) entry.getKey(), (String) entry.getValue());
            }
        }
        this.f30927k = concurrentHashMap;
        Map map2 = z3Var.f30928l;
        ConcurrentHashMap concurrentHashMap2 = new ConcurrentHashMap();
        for (Map.Entry entry2 : map2.entrySet()) {
            if (entry2 != null) {
                concurrentHashMap2.put((String) entry2.getKey(), entry2.getValue());
            }
        }
        this.f30928l = concurrentHashMap2;
        this.f30935s = new io.sentry.protocol.c(z3Var.f30935s);
        this.f30936t = new CopyOnWriteArrayList(z3Var.f30936t);
        this.f30941y = z3Var.f30941y.clone();
        this.f30937u = new s3(z3Var.f30937u);
    }
}
