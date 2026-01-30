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
    private volatile io.sentry.protocol.x f30990a;

    /* renamed from: b  reason: collision with root package name */
    private SentryLevel f30991b;

    /* renamed from: c  reason: collision with root package name */
    private e1 f30992c;

    /* renamed from: d  reason: collision with root package name */
    private WeakReference f30993d;

    /* renamed from: e  reason: collision with root package name */
    private String f30994e;

    /* renamed from: f  reason: collision with root package name */
    private io.sentry.protocol.h0 f30995f;

    /* renamed from: g  reason: collision with root package name */
    private String f30996g;

    /* renamed from: h  reason: collision with root package name */
    private io.sentry.protocol.o f30997h;

    /* renamed from: i  reason: collision with root package name */
    private List f30998i;

    /* renamed from: j  reason: collision with root package name */
    private volatile Queue f30999j;

    /* renamed from: k  reason: collision with root package name */
    private Map f31000k;

    /* renamed from: l  reason: collision with root package name */
    private Map f31001l;

    /* renamed from: m  reason: collision with root package name */
    private List f31002m;

    /* renamed from: n  reason: collision with root package name */
    private volatile k7 f31003n;

    /* renamed from: o  reason: collision with root package name */
    private volatile z7 f31004o;

    /* renamed from: p  reason: collision with root package name */
    private final io.sentry.util.a f31005p;

    /* renamed from: q  reason: collision with root package name */
    private final io.sentry.util.a f31006q;

    /* renamed from: r  reason: collision with root package name */
    private final io.sentry.util.a f31007r;

    /* renamed from: s  reason: collision with root package name */
    private io.sentry.protocol.c f31008s;

    /* renamed from: t  reason: collision with root package name */
    private List f31009t;

    /* renamed from: u  reason: collision with root package name */
    private s3 f31010u;

    /* renamed from: v  reason: collision with root package name */
    private io.sentry.protocol.x f31011v;

    /* renamed from: w  reason: collision with root package name */
    private y0 f31012w;

    /* renamed from: x  reason: collision with root package name */
    private final Map f31013x;

    /* renamed from: y  reason: collision with root package name */
    private final io.sentry.featureflags.b f31014y;

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
        private final z7 f31015a;

        /* renamed from: b  reason: collision with root package name */
        private final z7 f31016b;

        public d(z7 z7Var, z7 z7Var2) {
            this.f31016b = z7Var;
            this.f31015a = z7Var2;
        }

        public z7 a() {
            return this.f31016b;
        }

        public z7 b() {
            return this.f31015a;
        }
    }

    public z3(k7 k7Var) {
        this.f30993d = new WeakReference(null);
        this.f30998i = new ArrayList();
        this.f31000k = new ConcurrentHashMap();
        this.f31001l = new ConcurrentHashMap();
        this.f31002m = new CopyOnWriteArrayList();
        this.f31005p = new io.sentry.util.a();
        this.f31006q = new io.sentry.util.a();
        this.f31007r = new io.sentry.util.a();
        this.f31008s = new io.sentry.protocol.c();
        this.f31009t = new CopyOnWriteArrayList();
        io.sentry.protocol.x xVar = io.sentry.protocol.x.f30486e;
        this.f31011v = xVar;
        this.f31012w = s2.n();
        this.f31013x = Collections.synchronizedMap(new WeakHashMap());
        this.f31003n = (k7) io.sentry.util.y.c(k7Var, "SentryOptions is required.");
        this.f30999j = V(this.f31003n.getMaxBreadcrumbs());
        this.f31014y = io.sentry.featureflags.a.a(k7Var);
        this.f31010u = new s3();
        this.f30990a = xVar;
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
            this.f31003n.getLogger().b(SentryLevel.ERROR, "The BeforeBreadcrumbCallback callback threw an exception. Exception details will be added to the breadcrumb.", th2);
            if (th2.getMessage() != null) {
                breadcrumb.A("sentry:message", th2.getMessage());
            }
            return breadcrumb;
        }
    }

    @Override // io.sentry.IScope
    public void A(e1 e1Var) {
        a1 a10 = this.f31006q.a();
        try {
            this.f30992c = e1Var;
            for (v0 v0Var : this.f31003n.getScopeObservers()) {
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
        return this.f30998i;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.h0 C() {
        return this.f30995f;
    }

    @Override // io.sentry.IScope
    public String D() {
        e1 e1Var = this.f30992c;
        if (e1Var != null) {
            return e1Var.getName();
        }
        return this.f30994e;
    }

    @Override // io.sentry.IScope
    public void E() {
        a1 a10 = this.f31006q.a();
        try {
            this.f30992c = null;
            if (a10 != null) {
                a10.close();
            }
            this.f30994e = null;
            for (v0 v0Var : this.f31003n.getScopeObservers()) {
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
        return this.f31014y;
    }

    @Override // io.sentry.IScope
    public void G(y0 y0Var) {
        this.f31012w = y0Var;
    }

    @Override // io.sentry.IScope
    public void H(String str) {
        if (str == null) {
            return;
        }
        this.f31008s.n(str);
    }

    @Override // io.sentry.IScope
    public z7 I() {
        return this.f31004o;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.x J() {
        return this.f31011v;
    }

    @Override // io.sentry.IScope
    public s3 K() {
        return this.f31010u;
    }

    @Override // io.sentry.IScope
    public void L(String str) {
        this.f30996g = str;
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
        for (v0 v0Var : this.f31003n.getScopeObservers()) {
            v0Var.k(y10);
        }
    }

    @Override // io.sentry.IScope
    public y0 M() {
        return this.f31012w;
    }

    @Override // io.sentry.IScope
    public List N() {
        return new CopyOnWriteArrayList(this.f31009t);
    }

    @Override // io.sentry.IScope
    public void O(SentryEvent sentryEvent) {
        io.sentry.util.z zVar;
        ISpan iSpan;
        if (this.f31003n.isTracingEnabled() && sentryEvent.O() != null && (zVar = (io.sentry.util.z) this.f31013x.get(io.sentry.util.h.a(sentryEvent.O()))) != null) {
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
        this.f31004o = null;
    }

    @Override // io.sentry.IScope
    public s3 Q(a aVar) {
        a1 a10 = this.f31007r.a();
        try {
            aVar.a(this.f31010u);
            s3 s3Var = new s3(this.f31010u);
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
        a1 a10 = this.f31006q.a();
        try {
            cVar.a(this.f30992c);
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
        this.f30990a = xVar;
    }

    @Override // io.sentry.IScope
    public List T() {
        return io.sentry.util.f.a(this.f31002m);
    }

    @Override // io.sentry.IScope
    public void U(s3 s3Var) {
        this.f31010u = s3Var;
        e8 g10 = s3Var.g();
        for (v0 v0Var : this.f31003n.getScopeObservers()) {
            v0Var.i(g10, this);
        }
    }

    public io.sentry.protocol.x X() {
        return this.f30990a;
    }

    public void Y(String str) {
        if (str != null) {
            this.f31001l.remove(str);
            for (v0 v0Var : this.f31003n.getScopeObservers()) {
                v0Var.b(str);
                v0Var.l(this.f31001l);
            }
        }
    }

    public void Z(String str) {
        if (str != null) {
            this.f31000k.remove(str);
            for (v0 v0Var : this.f31003n.getScopeObservers()) {
                v0Var.d(str);
                v0Var.c(this.f31000k);
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
            this.f31000k.put(str, str2);
            for (v0 v0Var : this.f31003n.getScopeObservers()) {
                v0Var.a(str, str2);
                v0Var.c(this.f31000k);
            }
        }
    }

    @Override // io.sentry.IScope
    public k7 b() {
        return this.f31003n;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.o c() {
        return this.f30997h;
    }

    @Override // io.sentry.IScope
    public void clear() {
        this.f30991b = null;
        this.f30995f = null;
        this.f30997h = null;
        this.f30996g = null;
        this.f30998i.clear();
        w();
        this.f31000k.clear();
        this.f31001l.clear();
        this.f31002m.clear();
        E();
        d();
    }

    public void d() {
        this.f31009t.clear();
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
            this.f31001l.put(str, str2);
            for (v0 v0Var : this.f31003n.getScopeObservers()) {
                v0Var.f(str, str2);
                v0Var.l(this.f31001l);
            }
        }
    }

    @Override // io.sentry.IScope
    public void g(Breadcrumb breadcrumb, Hint hint) {
        if (breadcrumb != null && !(this.f30999j instanceof t)) {
            if (hint == null) {
                hint = new Hint();
            }
            k7.a beforeBreadcrumb = this.f31003n.getBeforeBreadcrumb();
            if (beforeBreadcrumb != null) {
                breadcrumb = W(beforeBreadcrumb, breadcrumb, hint);
            }
            if (breadcrumb != null) {
                this.f30999j.add(breadcrumb);
                for (v0 v0Var : this.f31003n.getScopeObservers()) {
                    v0Var.e(breadcrumb);
                    v0Var.g(this.f30999j);
                }
                return;
            }
            this.f31003n.getLogger().c(SentryLevel.INFO, "Breadcrumb was dropped by beforeBreadcrumb", new Object[0]);
        }
    }

    @Override // io.sentry.IScope
    public Map getExtras() {
        return this.f31001l;
    }

    @Override // io.sentry.IScope
    public String h() {
        return this.f30996g;
    }

    @Override // io.sentry.IScope
    public void i(Throwable th2, ISpan iSpan, String str) {
        io.sentry.util.y.c(th2, "throwable is required");
        io.sentry.util.y.c(iSpan, "span is required");
        io.sentry.util.y.c(str, "transactionName is required");
        Throwable a10 = io.sentry.util.h.a(th2);
        if (!this.f31013x.containsKey(a10)) {
            this.f31013x.put(a10, new io.sentry.util.z(new WeakReference(iSpan), str));
        }
    }

    @Override // io.sentry.IScope
    public void j(io.sentry.protocol.h0 h0Var) {
        this.f30995f = h0Var;
        for (v0 v0Var : this.f31003n.getScopeObservers()) {
            v0Var.j(h0Var);
        }
    }

    @Override // io.sentry.IScope
    public e1 k() {
        return this.f30992c;
    }

    @Override // io.sentry.IScope
    public z7 l() {
        a1 a10 = this.f31005p.a();
        try {
            z7 z7Var = null;
            if (this.f31004o != null) {
                this.f31004o.c();
                this.f31003n.getContinuousProfiler().e();
                z7 clone = this.f31004o.clone();
                this.f31004o = null;
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
        return this.f30991b;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.g n() {
        return this.f31014y.n();
    }

    @Override // io.sentry.IScope
    public void o(io.sentry.protocol.x xVar) {
        this.f31011v = xVar;
        for (v0 v0Var : this.f31003n.getScopeObservers()) {
            v0Var.o(xVar);
        }
    }

    @Override // io.sentry.IScope
    public d p() {
        a1 a10 = this.f31005p.a();
        try {
            if (this.f31004o != null) {
                this.f31004o.c();
                this.f31003n.getContinuousProfiler().e();
            }
            z7 z7Var = this.f31004o;
            d dVar = null;
            z7 z7Var2 = null;
            if (this.f31003n.getRelease() != null) {
                this.f31004o = new z7(this.f31003n.getDistinctId(), this.f30995f, this.f31003n.getEnvironment(), this.f31003n.getRelease());
                if (z7Var != null) {
                    z7Var2 = z7Var.clone();
                }
                dVar = new d(this.f31004o.clone(), z7Var2);
            } else {
                this.f31003n.getLogger().c(SentryLevel.WARNING, "Release is not set on SentryOptions. Session could not be started", new Object[0]);
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
        this.f31003n = k7Var;
        Queue<Breadcrumb> queue = this.f30999j;
        this.f30999j = V(k7Var.getMaxBreadcrumbs());
        for (Breadcrumb breadcrumb : queue) {
            e(breadcrumb);
        }
    }

    @Override // io.sentry.IScope
    public ISpan r() {
        ISpan n10;
        ISpan iSpan = (ISpan) this.f30993d.get();
        if (iSpan != null) {
            return iSpan;
        }
        e1 e1Var = this.f30992c;
        if (e1Var != null && (n10 = e1Var.n()) != null) {
            return n10;
        }
        return e1Var;
    }

    @Override // io.sentry.IScope
    public Queue s() {
        return this.f30999j;
    }

    @Override // io.sentry.IScope
    public void t(List list) {
        if (list != null) {
            this.f30998i = new ArrayList(list);
            for (v0 v0Var : this.f31003n.getScopeObservers()) {
                v0Var.h(list);
            }
        }
    }

    @Override // io.sentry.IScope
    public z7 u(b bVar) {
        z7 z7Var;
        a1 a10 = this.f31005p.a();
        try {
            bVar.a(this.f31004o);
            if (this.f31004o != null) {
                z7Var = this.f31004o.clone();
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
        return io.sentry.util.c.b(this.f31000k);
    }

    @Override // io.sentry.IScope
    public void w() {
        this.f30999j.clear();
        for (v0 v0Var : this.f31003n.getScopeObservers()) {
            v0Var.g(this.f30999j);
        }
    }

    @Override // io.sentry.IScope
    public List x() {
        return this.f31002m;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.c y() {
        return this.f31008s;
    }

    @Override // io.sentry.IScope
    public void z(String str, Object obj) {
        if (str != null) {
            this.f31008s.l(str, obj);
            for (v0 v0Var : this.f31003n.getScopeObservers()) {
                v0Var.k(this.f31008s);
            }
        }
    }

    @Override // io.sentry.IScope
    /* renamed from: clone */
    public IScope m1188clone() {
        return new z3(this);
    }

    private z3(z3 z3Var) {
        this.f30993d = new WeakReference(null);
        this.f30998i = new ArrayList();
        this.f31000k = new ConcurrentHashMap();
        this.f31001l = new ConcurrentHashMap();
        this.f31002m = new CopyOnWriteArrayList();
        this.f31005p = new io.sentry.util.a();
        this.f31006q = new io.sentry.util.a();
        this.f31007r = new io.sentry.util.a();
        this.f31008s = new io.sentry.protocol.c();
        this.f31009t = new CopyOnWriteArrayList();
        this.f31011v = io.sentry.protocol.x.f30486e;
        this.f31012w = s2.n();
        this.f31013x = Collections.synchronizedMap(new WeakHashMap());
        this.f30992c = z3Var.f30992c;
        this.f30994e = z3Var.f30994e;
        this.f30993d = z3Var.f30993d;
        this.f31004o = z3Var.f31004o;
        this.f31003n = z3Var.f31003n;
        this.f30991b = z3Var.f30991b;
        this.f31012w = z3Var.f31012w;
        this.f30990a = z3Var.X();
        io.sentry.protocol.h0 h0Var = z3Var.f30995f;
        this.f30995f = h0Var != null ? new io.sentry.protocol.h0(h0Var) : null;
        this.f30996g = z3Var.f30996g;
        this.f31011v = z3Var.f31011v;
        io.sentry.protocol.o oVar = z3Var.f30997h;
        this.f30997h = oVar != null ? new io.sentry.protocol.o(oVar) : null;
        this.f30998i = new ArrayList(z3Var.f30998i);
        this.f31002m = new CopyOnWriteArrayList(z3Var.f31002m);
        Breadcrumb[] breadcrumbArr = (Breadcrumb[]) z3Var.f30999j.toArray(new Breadcrumb[0]);
        Queue V = V(z3Var.f31003n.getMaxBreadcrumbs());
        for (Breadcrumb breadcrumb : breadcrumbArr) {
            V.add(new Breadcrumb(breadcrumb));
        }
        this.f30999j = V;
        Map map = z3Var.f31000k;
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
        for (Map.Entry entry : map.entrySet()) {
            if (entry != null) {
                concurrentHashMap.put((String) entry.getKey(), (String) entry.getValue());
            }
        }
        this.f31000k = concurrentHashMap;
        Map map2 = z3Var.f31001l;
        ConcurrentHashMap concurrentHashMap2 = new ConcurrentHashMap();
        for (Map.Entry entry2 : map2.entrySet()) {
            if (entry2 != null) {
                concurrentHashMap2.put((String) entry2.getKey(), entry2.getValue());
            }
        }
        this.f31001l = concurrentHashMap2;
        this.f31008s = new io.sentry.protocol.c(z3Var.f31008s);
        this.f31009t = new CopyOnWriteArrayList(z3Var.f31009t);
        this.f31014y = z3Var.f31014y.clone();
        this.f31010u = new s3(z3Var.f31010u);
    }
}
