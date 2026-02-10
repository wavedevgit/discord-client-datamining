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
    private volatile io.sentry.protocol.x f29367a;

    /* renamed from: b  reason: collision with root package name */
    private SentryLevel f29368b;

    /* renamed from: c  reason: collision with root package name */
    private e1 f29369c;

    /* renamed from: d  reason: collision with root package name */
    private WeakReference f29370d;

    /* renamed from: e  reason: collision with root package name */
    private String f29371e;

    /* renamed from: f  reason: collision with root package name */
    private io.sentry.protocol.h0 f29372f;

    /* renamed from: g  reason: collision with root package name */
    private String f29373g;

    /* renamed from: h  reason: collision with root package name */
    private io.sentry.protocol.o f29374h;

    /* renamed from: i  reason: collision with root package name */
    private List f29375i;

    /* renamed from: j  reason: collision with root package name */
    private volatile Queue f29376j;

    /* renamed from: k  reason: collision with root package name */
    private Map f29377k;

    /* renamed from: l  reason: collision with root package name */
    private Map f29378l;

    /* renamed from: m  reason: collision with root package name */
    private List f29379m;

    /* renamed from: n  reason: collision with root package name */
    private volatile k7 f29380n;

    /* renamed from: o  reason: collision with root package name */
    private volatile z7 f29381o;

    /* renamed from: p  reason: collision with root package name */
    private final io.sentry.util.a f29382p;

    /* renamed from: q  reason: collision with root package name */
    private final io.sentry.util.a f29383q;

    /* renamed from: r  reason: collision with root package name */
    private final io.sentry.util.a f29384r;

    /* renamed from: s  reason: collision with root package name */
    private io.sentry.protocol.c f29385s;

    /* renamed from: t  reason: collision with root package name */
    private List f29386t;

    /* renamed from: u  reason: collision with root package name */
    private s3 f29387u;

    /* renamed from: v  reason: collision with root package name */
    private io.sentry.protocol.x f29388v;

    /* renamed from: w  reason: collision with root package name */
    private y0 f29389w;

    /* renamed from: x  reason: collision with root package name */
    private final Map f29390x;

    /* renamed from: y  reason: collision with root package name */
    private final io.sentry.featureflags.b f29391y;

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
        private final z7 f29392a;

        /* renamed from: b  reason: collision with root package name */
        private final z7 f29393b;

        public d(z7 z7Var, z7 z7Var2) {
            this.f29393b = z7Var;
            this.f29392a = z7Var2;
        }

        public z7 a() {
            return this.f29393b;
        }

        public z7 b() {
            return this.f29392a;
        }
    }

    public z3(k7 k7Var) {
        this.f29370d = new WeakReference(null);
        this.f29375i = new ArrayList();
        this.f29377k = new ConcurrentHashMap();
        this.f29378l = new ConcurrentHashMap();
        this.f29379m = new CopyOnWriteArrayList();
        this.f29382p = new io.sentry.util.a();
        this.f29383q = new io.sentry.util.a();
        this.f29384r = new io.sentry.util.a();
        this.f29385s = new io.sentry.protocol.c();
        this.f29386t = new CopyOnWriteArrayList();
        io.sentry.protocol.x xVar = io.sentry.protocol.x.f28863e;
        this.f29388v = xVar;
        this.f29389w = s2.n();
        this.f29390x = Collections.synchronizedMap(new WeakHashMap());
        this.f29380n = (k7) io.sentry.util.y.c(k7Var, "SentryOptions is required.");
        this.f29376j = V(this.f29380n.getMaxBreadcrumbs());
        this.f29391y = io.sentry.featureflags.a.a(k7Var);
        this.f29387u = new s3();
        this.f29367a = xVar;
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
            this.f29380n.getLogger().b(SentryLevel.ERROR, "The BeforeBreadcrumbCallback callback threw an exception. Exception details will be added to the breadcrumb.", th2);
            if (th2.getMessage() != null) {
                breadcrumb.A("sentry:message", th2.getMessage());
            }
            return breadcrumb;
        }
    }

    @Override // io.sentry.IScope
    public void A(e1 e1Var) {
        a1 a10 = this.f29383q.a();
        try {
            this.f29369c = e1Var;
            for (v0 v0Var : this.f29380n.getScopeObservers()) {
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
        return this.f29375i;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.h0 C() {
        return this.f29372f;
    }

    @Override // io.sentry.IScope
    public String D() {
        e1 e1Var = this.f29369c;
        if (e1Var != null) {
            return e1Var.getName();
        }
        return this.f29371e;
    }

    @Override // io.sentry.IScope
    public void E() {
        a1 a10 = this.f29383q.a();
        try {
            this.f29369c = null;
            if (a10 != null) {
                a10.close();
            }
            this.f29371e = null;
            for (v0 v0Var : this.f29380n.getScopeObservers()) {
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
        return this.f29391y;
    }

    @Override // io.sentry.IScope
    public void G(y0 y0Var) {
        this.f29389w = y0Var;
    }

    @Override // io.sentry.IScope
    public void H(String str) {
        if (str == null) {
            return;
        }
        this.f29385s.n(str);
    }

    @Override // io.sentry.IScope
    public z7 I() {
        return this.f29381o;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.x J() {
        return this.f29388v;
    }

    @Override // io.sentry.IScope
    public s3 K() {
        return this.f29387u;
    }

    @Override // io.sentry.IScope
    public void L(String str) {
        this.f29373g = str;
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
        for (v0 v0Var : this.f29380n.getScopeObservers()) {
            v0Var.k(y10);
        }
    }

    @Override // io.sentry.IScope
    public y0 M() {
        return this.f29389w;
    }

    @Override // io.sentry.IScope
    public List N() {
        return new CopyOnWriteArrayList(this.f29386t);
    }

    @Override // io.sentry.IScope
    public void O(SentryEvent sentryEvent) {
        io.sentry.util.z zVar;
        ISpan iSpan;
        if (this.f29380n.isTracingEnabled() && sentryEvent.O() != null && (zVar = (io.sentry.util.z) this.f29390x.get(io.sentry.util.h.a(sentryEvent.O()))) != null) {
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
        this.f29381o = null;
    }

    @Override // io.sentry.IScope
    public s3 Q(a aVar) {
        a1 a10 = this.f29384r.a();
        try {
            aVar.a(this.f29387u);
            s3 s3Var = new s3(this.f29387u);
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
        a1 a10 = this.f29383q.a();
        try {
            cVar.a(this.f29369c);
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
        this.f29367a = xVar;
    }

    @Override // io.sentry.IScope
    public List T() {
        return io.sentry.util.f.a(this.f29379m);
    }

    @Override // io.sentry.IScope
    public void U(s3 s3Var) {
        this.f29387u = s3Var;
        e8 g10 = s3Var.g();
        for (v0 v0Var : this.f29380n.getScopeObservers()) {
            v0Var.i(g10, this);
        }
    }

    public io.sentry.protocol.x X() {
        return this.f29367a;
    }

    public void Y(String str) {
        if (str != null) {
            this.f29378l.remove(str);
            for (v0 v0Var : this.f29380n.getScopeObservers()) {
                v0Var.b(str);
                v0Var.l(this.f29378l);
            }
        }
    }

    public void Z(String str) {
        if (str != null) {
            this.f29377k.remove(str);
            for (v0 v0Var : this.f29380n.getScopeObservers()) {
                v0Var.d(str);
                v0Var.c(this.f29377k);
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
            this.f29377k.put(str, str2);
            for (v0 v0Var : this.f29380n.getScopeObservers()) {
                v0Var.a(str, str2);
                v0Var.c(this.f29377k);
            }
        }
    }

    @Override // io.sentry.IScope
    public k7 b() {
        return this.f29380n;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.o c() {
        return this.f29374h;
    }

    @Override // io.sentry.IScope
    public void clear() {
        this.f29368b = null;
        this.f29372f = null;
        this.f29374h = null;
        this.f29373g = null;
        this.f29375i.clear();
        w();
        this.f29377k.clear();
        this.f29378l.clear();
        this.f29379m.clear();
        E();
        d();
    }

    public void d() {
        this.f29386t.clear();
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
            this.f29378l.put(str, str2);
            for (v0 v0Var : this.f29380n.getScopeObservers()) {
                v0Var.f(str, str2);
                v0Var.l(this.f29378l);
            }
        }
    }

    @Override // io.sentry.IScope
    public String g() {
        return this.f29373g;
    }

    @Override // io.sentry.IScope
    public Map getExtras() {
        return this.f29378l;
    }

    @Override // io.sentry.IScope
    public void h(Breadcrumb breadcrumb, Hint hint) {
        if (breadcrumb != null && !(this.f29376j instanceof t)) {
            if (hint == null) {
                hint = new Hint();
            }
            k7.a beforeBreadcrumb = this.f29380n.getBeforeBreadcrumb();
            if (beforeBreadcrumb != null) {
                breadcrumb = W(beforeBreadcrumb, breadcrumb, hint);
            }
            if (breadcrumb != null) {
                this.f29376j.add(breadcrumb);
                for (v0 v0Var : this.f29380n.getScopeObservers()) {
                    v0Var.e(breadcrumb);
                    v0Var.g(this.f29376j);
                }
                return;
            }
            this.f29380n.getLogger().c(SentryLevel.INFO, "Breadcrumb was dropped by beforeBreadcrumb", new Object[0]);
        }
    }

    @Override // io.sentry.IScope
    public void i(Throwable th2, ISpan iSpan, String str) {
        io.sentry.util.y.c(th2, "throwable is required");
        io.sentry.util.y.c(iSpan, "span is required");
        io.sentry.util.y.c(str, "transactionName is required");
        Throwable a10 = io.sentry.util.h.a(th2);
        if (!this.f29390x.containsKey(a10)) {
            this.f29390x.put(a10, new io.sentry.util.z(new WeakReference(iSpan), str));
        }
    }

    @Override // io.sentry.IScope
    public void j(io.sentry.protocol.h0 h0Var) {
        this.f29372f = h0Var;
        for (v0 v0Var : this.f29380n.getScopeObservers()) {
            v0Var.j(h0Var);
        }
    }

    @Override // io.sentry.IScope
    public e1 k() {
        return this.f29369c;
    }

    @Override // io.sentry.IScope
    public z7 l() {
        a1 a10 = this.f29382p.a();
        try {
            z7 z7Var = null;
            if (this.f29381o != null) {
                this.f29381o.c();
                this.f29380n.getContinuousProfiler().e();
                z7 clone = this.f29381o.clone();
                this.f29381o = null;
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
        return this.f29368b;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.g n() {
        return this.f29391y.n();
    }

    @Override // io.sentry.IScope
    public void o(io.sentry.protocol.x xVar) {
        this.f29388v = xVar;
        for (v0 v0Var : this.f29380n.getScopeObservers()) {
            v0Var.o(xVar);
        }
    }

    @Override // io.sentry.IScope
    public d p() {
        a1 a10 = this.f29382p.a();
        try {
            if (this.f29381o != null) {
                this.f29381o.c();
                this.f29380n.getContinuousProfiler().e();
            }
            z7 z7Var = this.f29381o;
            d dVar = null;
            z7 z7Var2 = null;
            if (this.f29380n.getRelease() != null) {
                this.f29381o = new z7(this.f29380n.getDistinctId(), this.f29372f, this.f29380n.getEnvironment(), this.f29380n.getRelease());
                if (z7Var != null) {
                    z7Var2 = z7Var.clone();
                }
                dVar = new d(this.f29381o.clone(), z7Var2);
            } else {
                this.f29380n.getLogger().c(SentryLevel.WARNING, "Release is not set on SentryOptions. Session could not be started", new Object[0]);
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
        this.f29380n = k7Var;
        Queue<Breadcrumb> queue = this.f29376j;
        this.f29376j = V(k7Var.getMaxBreadcrumbs());
        for (Breadcrumb breadcrumb : queue) {
            e(breadcrumb);
        }
    }

    @Override // io.sentry.IScope
    public ISpan r() {
        ISpan n10;
        ISpan iSpan = (ISpan) this.f29370d.get();
        if (iSpan != null) {
            return iSpan;
        }
        e1 e1Var = this.f29369c;
        if (e1Var != null && (n10 = e1Var.n()) != null) {
            return n10;
        }
        return e1Var;
    }

    @Override // io.sentry.IScope
    public Queue s() {
        return this.f29376j;
    }

    @Override // io.sentry.IScope
    public void t(List list) {
        if (list != null) {
            this.f29375i = new ArrayList(list);
            for (v0 v0Var : this.f29380n.getScopeObservers()) {
                v0Var.h(list);
            }
        }
    }

    @Override // io.sentry.IScope
    public z7 u(b bVar) {
        z7 z7Var;
        a1 a10 = this.f29382p.a();
        try {
            bVar.a(this.f29381o);
            if (this.f29381o != null) {
                z7Var = this.f29381o.clone();
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
        return io.sentry.util.c.b(this.f29377k);
    }

    @Override // io.sentry.IScope
    public void w() {
        this.f29376j.clear();
        for (v0 v0Var : this.f29380n.getScopeObservers()) {
            v0Var.g(this.f29376j);
        }
    }

    @Override // io.sentry.IScope
    public List x() {
        return this.f29379m;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.c y() {
        return this.f29385s;
    }

    @Override // io.sentry.IScope
    public void z(String str, Object obj) {
        if (str != null) {
            this.f29385s.l(str, obj);
            for (v0 v0Var : this.f29380n.getScopeObservers()) {
                v0Var.k(this.f29385s);
            }
        }
    }

    @Override // io.sentry.IScope
    /* renamed from: clone */
    public IScope m1192clone() {
        return new z3(this);
    }

    private z3(z3 z3Var) {
        this.f29370d = new WeakReference(null);
        this.f29375i = new ArrayList();
        this.f29377k = new ConcurrentHashMap();
        this.f29378l = new ConcurrentHashMap();
        this.f29379m = new CopyOnWriteArrayList();
        this.f29382p = new io.sentry.util.a();
        this.f29383q = new io.sentry.util.a();
        this.f29384r = new io.sentry.util.a();
        this.f29385s = new io.sentry.protocol.c();
        this.f29386t = new CopyOnWriteArrayList();
        this.f29388v = io.sentry.protocol.x.f28863e;
        this.f29389w = s2.n();
        this.f29390x = Collections.synchronizedMap(new WeakHashMap());
        this.f29369c = z3Var.f29369c;
        this.f29371e = z3Var.f29371e;
        this.f29370d = z3Var.f29370d;
        this.f29381o = z3Var.f29381o;
        this.f29380n = z3Var.f29380n;
        this.f29368b = z3Var.f29368b;
        this.f29389w = z3Var.f29389w;
        this.f29367a = z3Var.X();
        io.sentry.protocol.h0 h0Var = z3Var.f29372f;
        this.f29372f = h0Var != null ? new io.sentry.protocol.h0(h0Var) : null;
        this.f29373g = z3Var.f29373g;
        this.f29388v = z3Var.f29388v;
        io.sentry.protocol.o oVar = z3Var.f29374h;
        this.f29374h = oVar != null ? new io.sentry.protocol.o(oVar) : null;
        this.f29375i = new ArrayList(z3Var.f29375i);
        this.f29379m = new CopyOnWriteArrayList(z3Var.f29379m);
        Breadcrumb[] breadcrumbArr = (Breadcrumb[]) z3Var.f29376j.toArray(new Breadcrumb[0]);
        Queue V = V(z3Var.f29380n.getMaxBreadcrumbs());
        for (Breadcrumb breadcrumb : breadcrumbArr) {
            V.add(new Breadcrumb(breadcrumb));
        }
        this.f29376j = V;
        Map map = z3Var.f29377k;
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
        for (Map.Entry entry : map.entrySet()) {
            if (entry != null) {
                concurrentHashMap.put((String) entry.getKey(), (String) entry.getValue());
            }
        }
        this.f29377k = concurrentHashMap;
        Map map2 = z3Var.f29378l;
        ConcurrentHashMap concurrentHashMap2 = new ConcurrentHashMap();
        for (Map.Entry entry2 : map2.entrySet()) {
            if (entry2 != null) {
                concurrentHashMap2.put((String) entry2.getKey(), entry2.getValue());
            }
        }
        this.f29378l = concurrentHashMap2;
        this.f29385s = new io.sentry.protocol.c(z3Var.f29385s);
        this.f29386t = new CopyOnWriteArrayList(z3Var.f29386t);
        this.f29391y = z3Var.f29391y.clone();
        this.f29387u = new s3(z3Var.f29387u);
    }
}
