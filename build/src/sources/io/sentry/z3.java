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
    private volatile io.sentry.protocol.x f30303a;

    /* renamed from: b  reason: collision with root package name */
    private SentryLevel f30304b;

    /* renamed from: c  reason: collision with root package name */
    private e1 f30305c;

    /* renamed from: d  reason: collision with root package name */
    private WeakReference f30306d;

    /* renamed from: e  reason: collision with root package name */
    private String f30307e;

    /* renamed from: f  reason: collision with root package name */
    private io.sentry.protocol.h0 f30308f;

    /* renamed from: g  reason: collision with root package name */
    private String f30309g;

    /* renamed from: h  reason: collision with root package name */
    private io.sentry.protocol.o f30310h;

    /* renamed from: i  reason: collision with root package name */
    private List f30311i;

    /* renamed from: j  reason: collision with root package name */
    private volatile Queue f30312j;

    /* renamed from: k  reason: collision with root package name */
    private Map f30313k;

    /* renamed from: l  reason: collision with root package name */
    private Map f30314l;

    /* renamed from: m  reason: collision with root package name */
    private List f30315m;

    /* renamed from: n  reason: collision with root package name */
    private volatile k7 f30316n;

    /* renamed from: o  reason: collision with root package name */
    private volatile z7 f30317o;

    /* renamed from: p  reason: collision with root package name */
    private final io.sentry.util.a f30318p;

    /* renamed from: q  reason: collision with root package name */
    private final io.sentry.util.a f30319q;

    /* renamed from: r  reason: collision with root package name */
    private final io.sentry.util.a f30320r;

    /* renamed from: s  reason: collision with root package name */
    private io.sentry.protocol.c f30321s;

    /* renamed from: t  reason: collision with root package name */
    private List f30322t;

    /* renamed from: u  reason: collision with root package name */
    private s3 f30323u;

    /* renamed from: v  reason: collision with root package name */
    private io.sentry.protocol.x f30324v;

    /* renamed from: w  reason: collision with root package name */
    private y0 f30325w;

    /* renamed from: x  reason: collision with root package name */
    private final Map f30326x;

    /* renamed from: y  reason: collision with root package name */
    private final io.sentry.featureflags.b f30327y;

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
        private final z7 f30328a;

        /* renamed from: b  reason: collision with root package name */
        private final z7 f30329b;

        public d(z7 z7Var, z7 z7Var2) {
            this.f30329b = z7Var;
            this.f30328a = z7Var2;
        }

        public z7 a() {
            return this.f30329b;
        }

        public z7 b() {
            return this.f30328a;
        }
    }

    public z3(k7 k7Var) {
        this.f30306d = new WeakReference(null);
        this.f30311i = new ArrayList();
        this.f30313k = new ConcurrentHashMap();
        this.f30314l = new ConcurrentHashMap();
        this.f30315m = new CopyOnWriteArrayList();
        this.f30318p = new io.sentry.util.a();
        this.f30319q = new io.sentry.util.a();
        this.f30320r = new io.sentry.util.a();
        this.f30321s = new io.sentry.protocol.c();
        this.f30322t = new CopyOnWriteArrayList();
        io.sentry.protocol.x xVar = io.sentry.protocol.x.f29799e;
        this.f30324v = xVar;
        this.f30325w = s2.m();
        this.f30326x = Collections.synchronizedMap(new WeakHashMap());
        this.f30316n = (k7) io.sentry.util.y.c(k7Var, "SentryOptions is required.");
        this.f30312j = g(this.f30316n.getMaxBreadcrumbs());
        this.f30327y = io.sentry.featureflags.a.a(k7Var);
        this.f30323u = new s3();
        this.f30303a = xVar;
    }

    private Breadcrumb W(k7.a aVar, Breadcrumb breadcrumb, Hint hint) {
        try {
            return aVar.a(breadcrumb, hint);
        } catch (Throwable th2) {
            this.f30316n.getLogger().b(SentryLevel.ERROR, "The BeforeBreadcrumbCallback callback threw an exception. Exception details will be added to the breadcrumb.", th2);
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
            this.f30321s.l(str, obj);
            for (v0 v0Var : this.f30316n.getScopeObservers()) {
                v0Var.j(this.f30321s);
            }
        }
    }

    @Override // io.sentry.IScope
    public void B(e1 e1Var) {
        a1 a10 = this.f30319q.a();
        try {
            this.f30305c = e1Var;
            for (v0 v0Var : this.f30316n.getScopeObservers()) {
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
        return this.f30311i;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.h0 D() {
        return this.f30308f;
    }

    @Override // io.sentry.IScope
    public String E() {
        e1 e1Var = this.f30305c;
        if (e1Var != null) {
            return e1Var.getName();
        }
        return this.f30307e;
    }

    @Override // io.sentry.IScope
    public void F() {
        a1 a10 = this.f30319q.a();
        try {
            this.f30305c = null;
            if (a10 != null) {
                a10.close();
            }
            this.f30307e = null;
            for (v0 v0Var : this.f30316n.getScopeObservers()) {
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
        return this.f30327y;
    }

    @Override // io.sentry.IScope
    public void H(y0 y0Var) {
        this.f30325w = y0Var;
    }

    @Override // io.sentry.IScope
    public void I(String str) {
        if (str == null) {
            return;
        }
        this.f30321s.n(str);
    }

    @Override // io.sentry.IScope
    public z7 J() {
        return this.f30317o;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.x K() {
        return this.f30324v;
    }

    @Override // io.sentry.IScope
    public s3 L() {
        return this.f30323u;
    }

    @Override // io.sentry.IScope
    public void M(String str) {
        this.f30309g = str;
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
        for (v0 v0Var : this.f30316n.getScopeObservers()) {
            v0Var.j(z10);
        }
    }

    @Override // io.sentry.IScope
    public y0 N() {
        return this.f30325w;
    }

    @Override // io.sentry.IScope
    public List O() {
        return new CopyOnWriteArrayList(this.f30322t);
    }

    @Override // io.sentry.IScope
    public void P(SentryEvent sentryEvent) {
        io.sentry.util.z zVar;
        ISpan iSpan;
        if (this.f30316n.isTracingEnabled() && sentryEvent.O() != null && (zVar = (io.sentry.util.z) this.f30326x.get(io.sentry.util.h.a(sentryEvent.O()))) != null) {
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
        this.f30317o = null;
    }

    @Override // io.sentry.IScope
    public s3 R(a aVar) {
        a1 a10 = this.f30320r.a();
        try {
            aVar.a(this.f30323u);
            s3 s3Var = new s3(this.f30323u);
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
        a1 a10 = this.f30319q.a();
        try {
            cVar.a(this.f30305c);
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
        this.f30303a = xVar;
    }

    @Override // io.sentry.IScope
    public List U() {
        return io.sentry.util.f.a(this.f30315m);
    }

    @Override // io.sentry.IScope
    public void V(s3 s3Var) {
        this.f30323u = s3Var;
        e8 g10 = s3Var.g();
        for (v0 v0Var : this.f30316n.getScopeObservers()) {
            v0Var.i(g10, this);
        }
    }

    public io.sentry.protocol.x X() {
        return this.f30303a;
    }

    public void Y(String str) {
        if (str != null) {
            this.f30314l.remove(str);
            for (v0 v0Var : this.f30316n.getScopeObservers()) {
                v0Var.b(str);
                v0Var.l(this.f30314l);
            }
        }
    }

    public void Z(String str) {
        if (str != null) {
            this.f30313k.remove(str);
            for (v0 v0Var : this.f30316n.getScopeObservers()) {
                v0Var.d(str);
                v0Var.c(this.f30313k);
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
            this.f30313k.put(str, str2);
            for (v0 v0Var : this.f30316n.getScopeObservers()) {
                v0Var.a(str, str2);
                v0Var.c(this.f30313k);
            }
        }
    }

    @Override // io.sentry.IScope
    public k7 b() {
        return this.f30316n;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.o c() {
        return this.f30310h;
    }

    @Override // io.sentry.IScope
    public void clear() {
        this.f30304b = null;
        this.f30308f = null;
        this.f30310h = null;
        this.f30309g = null;
        this.f30311i.clear();
        x();
        this.f30313k.clear();
        this.f30314l.clear();
        this.f30315m.clear();
        F();
        d();
    }

    public void d() {
        this.f30322t.clear();
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
            this.f30314l.put(str, str2);
            for (v0 v0Var : this.f30316n.getScopeObservers()) {
                v0Var.f(str, str2);
                v0Var.l(this.f30314l);
            }
        }
    }

    @Override // io.sentry.IScope
    public Map getExtras() {
        return this.f30314l;
    }

    @Override // io.sentry.IScope
    public String h() {
        return this.f30309g;
    }

    @Override // io.sentry.IScope
    public void i(Breadcrumb breadcrumb, Hint hint) {
        if (breadcrumb != null && !(this.f30312j instanceof t)) {
            if (hint == null) {
                hint = new Hint();
            }
            k7.a beforeBreadcrumb = this.f30316n.getBeforeBreadcrumb();
            if (beforeBreadcrumb != null) {
                breadcrumb = W(beforeBreadcrumb, breadcrumb, hint);
            }
            if (breadcrumb != null) {
                this.f30312j.add(breadcrumb);
                for (v0 v0Var : this.f30316n.getScopeObservers()) {
                    v0Var.e(breadcrumb);
                    v0Var.g(this.f30312j);
                }
                return;
            }
            this.f30316n.getLogger().c(SentryLevel.INFO, "Breadcrumb was dropped by beforeBreadcrumb", new Object[0]);
        }
    }

    @Override // io.sentry.IScope
    public void j(Throwable th2, ISpan iSpan, String str) {
        io.sentry.util.y.c(th2, "throwable is required");
        io.sentry.util.y.c(iSpan, "span is required");
        io.sentry.util.y.c(str, "transactionName is required");
        Throwable a10 = io.sentry.util.h.a(th2);
        if (!this.f30326x.containsKey(a10)) {
            this.f30326x.put(a10, new io.sentry.util.z(new WeakReference(iSpan), str));
        }
    }

    @Override // io.sentry.IScope
    public void k(io.sentry.protocol.h0 h0Var) {
        this.f30308f = h0Var;
        for (v0 v0Var : this.f30316n.getScopeObservers()) {
            v0Var.k(h0Var);
        }
    }

    @Override // io.sentry.IScope
    public e1 l() {
        return this.f30305c;
    }

    @Override // io.sentry.IScope
    public z7 m() {
        a1 a10 = this.f30318p.a();
        try {
            z7 z7Var = null;
            if (this.f30317o != null) {
                this.f30317o.c();
                this.f30316n.getContinuousProfiler().e();
                z7 clone = this.f30317o.clone();
                this.f30317o = null;
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
        return this.f30304b;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.g o() {
        return this.f30327y.o();
    }

    @Override // io.sentry.IScope
    public void p(io.sentry.protocol.x xVar) {
        this.f30324v = xVar;
        for (v0 v0Var : this.f30316n.getScopeObservers()) {
            v0Var.p(xVar);
        }
    }

    @Override // io.sentry.IScope
    public d q() {
        a1 a10 = this.f30318p.a();
        try {
            if (this.f30317o != null) {
                this.f30317o.c();
                this.f30316n.getContinuousProfiler().e();
            }
            z7 z7Var = this.f30317o;
            d dVar = null;
            z7 z7Var2 = null;
            if (this.f30316n.getRelease() != null) {
                this.f30317o = new z7(this.f30316n.getDistinctId(), this.f30308f, this.f30316n.getEnvironment(), this.f30316n.getRelease());
                if (z7Var != null) {
                    z7Var2 = z7Var.clone();
                }
                dVar = new d(this.f30317o.clone(), z7Var2);
            } else {
                this.f30316n.getLogger().c(SentryLevel.WARNING, "Release is not set on SentryOptions. Session could not be started", new Object[0]);
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
        this.f30316n = k7Var;
        Queue<Breadcrumb> queue = this.f30312j;
        this.f30312j = g(k7Var.getMaxBreadcrumbs());
        for (Breadcrumb breadcrumb : queue) {
            e(breadcrumb);
        }
    }

    @Override // io.sentry.IScope
    public ISpan s() {
        ISpan n10;
        ISpan iSpan = (ISpan) this.f30306d.get();
        if (iSpan != null) {
            return iSpan;
        }
        e1 e1Var = this.f30305c;
        if (e1Var != null && (n10 = e1Var.n()) != null) {
            return n10;
        }
        return e1Var;
    }

    @Override // io.sentry.IScope
    public Queue t() {
        return this.f30312j;
    }

    @Override // io.sentry.IScope
    public void u(List list) {
        if (list != null) {
            this.f30311i = new ArrayList(list);
            for (v0 v0Var : this.f30316n.getScopeObservers()) {
                v0Var.h(list);
            }
        }
    }

    @Override // io.sentry.IScope
    public z7 v(b bVar) {
        z7 z7Var;
        a1 a10 = this.f30318p.a();
        try {
            bVar.a(this.f30317o);
            if (this.f30317o != null) {
                z7Var = this.f30317o.clone();
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
        return io.sentry.util.c.b(this.f30313k);
    }

    @Override // io.sentry.IScope
    public void x() {
        this.f30312j.clear();
        for (v0 v0Var : this.f30316n.getScopeObservers()) {
            v0Var.g(this.f30312j);
        }
    }

    @Override // io.sentry.IScope
    public List y() {
        return this.f30315m;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.c z() {
        return this.f30321s;
    }

    @Override // io.sentry.IScope
    /* renamed from: clone */
    public IScope m1192clone() {
        return new z3(this);
    }

    private z3(z3 z3Var) {
        this.f30306d = new WeakReference(null);
        this.f30311i = new ArrayList();
        this.f30313k = new ConcurrentHashMap();
        this.f30314l = new ConcurrentHashMap();
        this.f30315m = new CopyOnWriteArrayList();
        this.f30318p = new io.sentry.util.a();
        this.f30319q = new io.sentry.util.a();
        this.f30320r = new io.sentry.util.a();
        this.f30321s = new io.sentry.protocol.c();
        this.f30322t = new CopyOnWriteArrayList();
        this.f30324v = io.sentry.protocol.x.f29799e;
        this.f30325w = s2.m();
        this.f30326x = Collections.synchronizedMap(new WeakHashMap());
        this.f30305c = z3Var.f30305c;
        this.f30307e = z3Var.f30307e;
        this.f30306d = z3Var.f30306d;
        this.f30317o = z3Var.f30317o;
        this.f30316n = z3Var.f30316n;
        this.f30304b = z3Var.f30304b;
        this.f30325w = z3Var.f30325w;
        this.f30303a = z3Var.X();
        io.sentry.protocol.h0 h0Var = z3Var.f30308f;
        this.f30308f = h0Var != null ? new io.sentry.protocol.h0(h0Var) : null;
        this.f30309g = z3Var.f30309g;
        this.f30324v = z3Var.f30324v;
        io.sentry.protocol.o oVar = z3Var.f30310h;
        this.f30310h = oVar != null ? new io.sentry.protocol.o(oVar) : null;
        this.f30311i = new ArrayList(z3Var.f30311i);
        this.f30315m = new CopyOnWriteArrayList(z3Var.f30315m);
        Breadcrumb[] breadcrumbArr = (Breadcrumb[]) z3Var.f30312j.toArray(new Breadcrumb[0]);
        Queue g10 = g(z3Var.f30316n.getMaxBreadcrumbs());
        for (Breadcrumb breadcrumb : breadcrumbArr) {
            g10.add(new Breadcrumb(breadcrumb));
        }
        this.f30312j = g10;
        Map map = z3Var.f30313k;
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
        for (Map.Entry entry : map.entrySet()) {
            if (entry != null) {
                concurrentHashMap.put((String) entry.getKey(), (String) entry.getValue());
            }
        }
        this.f30313k = concurrentHashMap;
        Map map2 = z3Var.f30314l;
        ConcurrentHashMap concurrentHashMap2 = new ConcurrentHashMap();
        for (Map.Entry entry2 : map2.entrySet()) {
            if (entry2 != null) {
                concurrentHashMap2.put((String) entry2.getKey(), entry2.getValue());
            }
        }
        this.f30314l = concurrentHashMap2;
        this.f30321s = new io.sentry.protocol.c(z3Var.f30321s);
        this.f30322t = new CopyOnWriteArrayList(z3Var.f30322t);
        this.f30327y = z3Var.f30327y.clone();
        this.f30323u = new s3(z3Var.f30323u);
    }
}
