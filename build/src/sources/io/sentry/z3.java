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
    private volatile io.sentry.protocol.x f30302a;

    /* renamed from: b  reason: collision with root package name */
    private SentryLevel f30303b;

    /* renamed from: c  reason: collision with root package name */
    private e1 f30304c;

    /* renamed from: d  reason: collision with root package name */
    private WeakReference f30305d;

    /* renamed from: e  reason: collision with root package name */
    private String f30306e;

    /* renamed from: f  reason: collision with root package name */
    private io.sentry.protocol.h0 f30307f;

    /* renamed from: g  reason: collision with root package name */
    private String f30308g;

    /* renamed from: h  reason: collision with root package name */
    private io.sentry.protocol.o f30309h;

    /* renamed from: i  reason: collision with root package name */
    private List f30310i;

    /* renamed from: j  reason: collision with root package name */
    private volatile Queue f30311j;

    /* renamed from: k  reason: collision with root package name */
    private Map f30312k;

    /* renamed from: l  reason: collision with root package name */
    private Map f30313l;

    /* renamed from: m  reason: collision with root package name */
    private List f30314m;

    /* renamed from: n  reason: collision with root package name */
    private volatile k7 f30315n;

    /* renamed from: o  reason: collision with root package name */
    private volatile z7 f30316o;

    /* renamed from: p  reason: collision with root package name */
    private final io.sentry.util.a f30317p;

    /* renamed from: q  reason: collision with root package name */
    private final io.sentry.util.a f30318q;

    /* renamed from: r  reason: collision with root package name */
    private final io.sentry.util.a f30319r;

    /* renamed from: s  reason: collision with root package name */
    private io.sentry.protocol.c f30320s;

    /* renamed from: t  reason: collision with root package name */
    private List f30321t;

    /* renamed from: u  reason: collision with root package name */
    private s3 f30322u;

    /* renamed from: v  reason: collision with root package name */
    private io.sentry.protocol.x f30323v;

    /* renamed from: w  reason: collision with root package name */
    private y0 f30324w;

    /* renamed from: x  reason: collision with root package name */
    private final Map f30325x;

    /* renamed from: y  reason: collision with root package name */
    private final io.sentry.featureflags.b f30326y;

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
        private final z7 f30327a;

        /* renamed from: b  reason: collision with root package name */
        private final z7 f30328b;

        public d(z7 z7Var, z7 z7Var2) {
            this.f30328b = z7Var;
            this.f30327a = z7Var2;
        }

        public z7 a() {
            return this.f30328b;
        }

        public z7 b() {
            return this.f30327a;
        }
    }

    public z3(k7 k7Var) {
        this.f30305d = new WeakReference(null);
        this.f30310i = new ArrayList();
        this.f30312k = new ConcurrentHashMap();
        this.f30313l = new ConcurrentHashMap();
        this.f30314m = new CopyOnWriteArrayList();
        this.f30317p = new io.sentry.util.a();
        this.f30318q = new io.sentry.util.a();
        this.f30319r = new io.sentry.util.a();
        this.f30320s = new io.sentry.protocol.c();
        this.f30321t = new CopyOnWriteArrayList();
        io.sentry.protocol.x xVar = io.sentry.protocol.x.f29798e;
        this.f30323v = xVar;
        this.f30324w = s2.m();
        this.f30325x = Collections.synchronizedMap(new WeakHashMap());
        this.f30315n = (k7) io.sentry.util.y.c(k7Var, "SentryOptions is required.");
        this.f30311j = g(this.f30315n.getMaxBreadcrumbs());
        this.f30326y = io.sentry.featureflags.a.a(k7Var);
        this.f30322u = new s3();
        this.f30302a = xVar;
    }

    private Breadcrumb W(k7.a aVar, Breadcrumb breadcrumb, Hint hint) {
        try {
            return aVar.a(breadcrumb, hint);
        } catch (Throwable th2) {
            this.f30315n.getLogger().b(SentryLevel.ERROR, "The BeforeBreadcrumbCallback callback threw an exception. Exception details will be added to the breadcrumb.", th2);
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
            this.f30320s.l(str, obj);
            for (v0 v0Var : this.f30315n.getScopeObservers()) {
                v0Var.j(this.f30320s);
            }
        }
    }

    @Override // io.sentry.IScope
    public void B(e1 e1Var) {
        a1 a10 = this.f30318q.a();
        try {
            this.f30304c = e1Var;
            for (v0 v0Var : this.f30315n.getScopeObservers()) {
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
        return this.f30310i;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.h0 D() {
        return this.f30307f;
    }

    @Override // io.sentry.IScope
    public String E() {
        e1 e1Var = this.f30304c;
        if (e1Var != null) {
            return e1Var.getName();
        }
        return this.f30306e;
    }

    @Override // io.sentry.IScope
    public void F() {
        a1 a10 = this.f30318q.a();
        try {
            this.f30304c = null;
            if (a10 != null) {
                a10.close();
            }
            this.f30306e = null;
            for (v0 v0Var : this.f30315n.getScopeObservers()) {
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
        return this.f30326y;
    }

    @Override // io.sentry.IScope
    public void H(y0 y0Var) {
        this.f30324w = y0Var;
    }

    @Override // io.sentry.IScope
    public void I(String str) {
        if (str == null) {
            return;
        }
        this.f30320s.n(str);
    }

    @Override // io.sentry.IScope
    public z7 J() {
        return this.f30316o;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.x K() {
        return this.f30323v;
    }

    @Override // io.sentry.IScope
    public s3 L() {
        return this.f30322u;
    }

    @Override // io.sentry.IScope
    public void M(String str) {
        this.f30308g = str;
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
        for (v0 v0Var : this.f30315n.getScopeObservers()) {
            v0Var.j(z10);
        }
    }

    @Override // io.sentry.IScope
    public y0 N() {
        return this.f30324w;
    }

    @Override // io.sentry.IScope
    public List O() {
        return new CopyOnWriteArrayList(this.f30321t);
    }

    @Override // io.sentry.IScope
    public void P(SentryEvent sentryEvent) {
        io.sentry.util.z zVar;
        ISpan iSpan;
        if (this.f30315n.isTracingEnabled() && sentryEvent.O() != null && (zVar = (io.sentry.util.z) this.f30325x.get(io.sentry.util.h.a(sentryEvent.O()))) != null) {
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
        this.f30316o = null;
    }

    @Override // io.sentry.IScope
    public s3 R(a aVar) {
        a1 a10 = this.f30319r.a();
        try {
            aVar.a(this.f30322u);
            s3 s3Var = new s3(this.f30322u);
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
        a1 a10 = this.f30318q.a();
        try {
            cVar.a(this.f30304c);
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
        this.f30302a = xVar;
    }

    @Override // io.sentry.IScope
    public List U() {
        return io.sentry.util.f.a(this.f30314m);
    }

    @Override // io.sentry.IScope
    public void V(s3 s3Var) {
        this.f30322u = s3Var;
        e8 g10 = s3Var.g();
        for (v0 v0Var : this.f30315n.getScopeObservers()) {
            v0Var.i(g10, this);
        }
    }

    public io.sentry.protocol.x X() {
        return this.f30302a;
    }

    public void Y(String str) {
        if (str != null) {
            this.f30313l.remove(str);
            for (v0 v0Var : this.f30315n.getScopeObservers()) {
                v0Var.b(str);
                v0Var.l(this.f30313l);
            }
        }
    }

    public void Z(String str) {
        if (str != null) {
            this.f30312k.remove(str);
            for (v0 v0Var : this.f30315n.getScopeObservers()) {
                v0Var.d(str);
                v0Var.c(this.f30312k);
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
            this.f30312k.put(str, str2);
            for (v0 v0Var : this.f30315n.getScopeObservers()) {
                v0Var.a(str, str2);
                v0Var.c(this.f30312k);
            }
        }
    }

    @Override // io.sentry.IScope
    public k7 b() {
        return this.f30315n;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.o c() {
        return this.f30309h;
    }

    @Override // io.sentry.IScope
    public void clear() {
        this.f30303b = null;
        this.f30307f = null;
        this.f30309h = null;
        this.f30308g = null;
        this.f30310i.clear();
        x();
        this.f30312k.clear();
        this.f30313l.clear();
        this.f30314m.clear();
        F();
        d();
    }

    public void d() {
        this.f30321t.clear();
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
            this.f30313l.put(str, str2);
            for (v0 v0Var : this.f30315n.getScopeObservers()) {
                v0Var.f(str, str2);
                v0Var.l(this.f30313l);
            }
        }
    }

    @Override // io.sentry.IScope
    public Map getExtras() {
        return this.f30313l;
    }

    @Override // io.sentry.IScope
    public String h() {
        return this.f30308g;
    }

    @Override // io.sentry.IScope
    public void i(Breadcrumb breadcrumb, Hint hint) {
        if (breadcrumb != null && !(this.f30311j instanceof t)) {
            if (hint == null) {
                hint = new Hint();
            }
            k7.a beforeBreadcrumb = this.f30315n.getBeforeBreadcrumb();
            if (beforeBreadcrumb != null) {
                breadcrumb = W(beforeBreadcrumb, breadcrumb, hint);
            }
            if (breadcrumb != null) {
                this.f30311j.add(breadcrumb);
                for (v0 v0Var : this.f30315n.getScopeObservers()) {
                    v0Var.e(breadcrumb);
                    v0Var.g(this.f30311j);
                }
                return;
            }
            this.f30315n.getLogger().c(SentryLevel.INFO, "Breadcrumb was dropped by beforeBreadcrumb", new Object[0]);
        }
    }

    @Override // io.sentry.IScope
    public void j(Throwable th2, ISpan iSpan, String str) {
        io.sentry.util.y.c(th2, "throwable is required");
        io.sentry.util.y.c(iSpan, "span is required");
        io.sentry.util.y.c(str, "transactionName is required");
        Throwable a10 = io.sentry.util.h.a(th2);
        if (!this.f30325x.containsKey(a10)) {
            this.f30325x.put(a10, new io.sentry.util.z(new WeakReference(iSpan), str));
        }
    }

    @Override // io.sentry.IScope
    public void k(io.sentry.protocol.h0 h0Var) {
        this.f30307f = h0Var;
        for (v0 v0Var : this.f30315n.getScopeObservers()) {
            v0Var.k(h0Var);
        }
    }

    @Override // io.sentry.IScope
    public e1 l() {
        return this.f30304c;
    }

    @Override // io.sentry.IScope
    public z7 m() {
        a1 a10 = this.f30317p.a();
        try {
            z7 z7Var = null;
            if (this.f30316o != null) {
                this.f30316o.c();
                this.f30315n.getContinuousProfiler().e();
                z7 clone = this.f30316o.clone();
                this.f30316o = null;
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
        return this.f30303b;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.g o() {
        return this.f30326y.o();
    }

    @Override // io.sentry.IScope
    public void p(io.sentry.protocol.x xVar) {
        this.f30323v = xVar;
        for (v0 v0Var : this.f30315n.getScopeObservers()) {
            v0Var.p(xVar);
        }
    }

    @Override // io.sentry.IScope
    public d q() {
        a1 a10 = this.f30317p.a();
        try {
            if (this.f30316o != null) {
                this.f30316o.c();
                this.f30315n.getContinuousProfiler().e();
            }
            z7 z7Var = this.f30316o;
            d dVar = null;
            z7 z7Var2 = null;
            if (this.f30315n.getRelease() != null) {
                this.f30316o = new z7(this.f30315n.getDistinctId(), this.f30307f, this.f30315n.getEnvironment(), this.f30315n.getRelease());
                if (z7Var != null) {
                    z7Var2 = z7Var.clone();
                }
                dVar = new d(this.f30316o.clone(), z7Var2);
            } else {
                this.f30315n.getLogger().c(SentryLevel.WARNING, "Release is not set on SentryOptions. Session could not be started", new Object[0]);
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
        this.f30315n = k7Var;
        Queue<Breadcrumb> queue = this.f30311j;
        this.f30311j = g(k7Var.getMaxBreadcrumbs());
        for (Breadcrumb breadcrumb : queue) {
            e(breadcrumb);
        }
    }

    @Override // io.sentry.IScope
    public ISpan s() {
        ISpan n10;
        ISpan iSpan = (ISpan) this.f30305d.get();
        if (iSpan != null) {
            return iSpan;
        }
        e1 e1Var = this.f30304c;
        if (e1Var != null && (n10 = e1Var.n()) != null) {
            return n10;
        }
        return e1Var;
    }

    @Override // io.sentry.IScope
    public Queue t() {
        return this.f30311j;
    }

    @Override // io.sentry.IScope
    public void u(List list) {
        if (list != null) {
            this.f30310i = new ArrayList(list);
            for (v0 v0Var : this.f30315n.getScopeObservers()) {
                v0Var.h(list);
            }
        }
    }

    @Override // io.sentry.IScope
    public z7 v(b bVar) {
        z7 z7Var;
        a1 a10 = this.f30317p.a();
        try {
            bVar.a(this.f30316o);
            if (this.f30316o != null) {
                z7Var = this.f30316o.clone();
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
        return io.sentry.util.c.b(this.f30312k);
    }

    @Override // io.sentry.IScope
    public void x() {
        this.f30311j.clear();
        for (v0 v0Var : this.f30315n.getScopeObservers()) {
            v0Var.g(this.f30311j);
        }
    }

    @Override // io.sentry.IScope
    public List y() {
        return this.f30314m;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.c z() {
        return this.f30320s;
    }

    @Override // io.sentry.IScope
    /* renamed from: clone */
    public IScope m1193clone() {
        return new z3(this);
    }

    private z3(z3 z3Var) {
        this.f30305d = new WeakReference(null);
        this.f30310i = new ArrayList();
        this.f30312k = new ConcurrentHashMap();
        this.f30313l = new ConcurrentHashMap();
        this.f30314m = new CopyOnWriteArrayList();
        this.f30317p = new io.sentry.util.a();
        this.f30318q = new io.sentry.util.a();
        this.f30319r = new io.sentry.util.a();
        this.f30320s = new io.sentry.protocol.c();
        this.f30321t = new CopyOnWriteArrayList();
        this.f30323v = io.sentry.protocol.x.f29798e;
        this.f30324w = s2.m();
        this.f30325x = Collections.synchronizedMap(new WeakHashMap());
        this.f30304c = z3Var.f30304c;
        this.f30306e = z3Var.f30306e;
        this.f30305d = z3Var.f30305d;
        this.f30316o = z3Var.f30316o;
        this.f30315n = z3Var.f30315n;
        this.f30303b = z3Var.f30303b;
        this.f30324w = z3Var.f30324w;
        this.f30302a = z3Var.X();
        io.sentry.protocol.h0 h0Var = z3Var.f30307f;
        this.f30307f = h0Var != null ? new io.sentry.protocol.h0(h0Var) : null;
        this.f30308g = z3Var.f30308g;
        this.f30323v = z3Var.f30323v;
        io.sentry.protocol.o oVar = z3Var.f30309h;
        this.f30309h = oVar != null ? new io.sentry.protocol.o(oVar) : null;
        this.f30310i = new ArrayList(z3Var.f30310i);
        this.f30314m = new CopyOnWriteArrayList(z3Var.f30314m);
        Breadcrumb[] breadcrumbArr = (Breadcrumb[]) z3Var.f30311j.toArray(new Breadcrumb[0]);
        Queue g10 = g(z3Var.f30315n.getMaxBreadcrumbs());
        for (Breadcrumb breadcrumb : breadcrumbArr) {
            g10.add(new Breadcrumb(breadcrumb));
        }
        this.f30311j = g10;
        Map map = z3Var.f30312k;
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
        for (Map.Entry entry : map.entrySet()) {
            if (entry != null) {
                concurrentHashMap.put((String) entry.getKey(), (String) entry.getValue());
            }
        }
        this.f30312k = concurrentHashMap;
        Map map2 = z3Var.f30313l;
        ConcurrentHashMap concurrentHashMap2 = new ConcurrentHashMap();
        for (Map.Entry entry2 : map2.entrySet()) {
            if (entry2 != null) {
                concurrentHashMap2.put((String) entry2.getKey(), entry2.getValue());
            }
        }
        this.f30313l = concurrentHashMap2;
        this.f30320s = new io.sentry.protocol.c(z3Var.f30320s);
        this.f30321t = new CopyOnWriteArrayList(z3Var.f30321t);
        this.f30326y = z3Var.f30326y.clone();
        this.f30322u = new s3(z3Var.f30322u);
    }
}
