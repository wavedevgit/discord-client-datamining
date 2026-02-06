package io.sentry;

import io.sentry.z3;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements IScope {

    /* renamed from: a  reason: collision with root package name */
    private final IScope f28141a;

    /* renamed from: b  reason: collision with root package name */
    private final IScope f28142b;

    /* renamed from: c  reason: collision with root package name */
    private final IScope f28143c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f28144a;

        static {
            int[] iArr = new int[d4.values().length];
            f28144a = iArr;
            try {
                iArr[d4.CURRENT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f28144a[d4.ISOLATION.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f28144a[d4.GLOBAL.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f28144a[d4.COMBINED.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    public g(IScope iScope, IScope iScope2, IScope iScope3) {
        this.f28141a = iScope;
        this.f28142b = iScope2;
        this.f28143c = iScope3;
    }

    private IScope d() {
        return i(null);
    }

    @Override // io.sentry.IScope
    public void A(String str, Object obj) {
        d().A(str, obj);
    }

    @Override // io.sentry.IScope
    public void B(e1 e1Var) {
        d().B(e1Var);
    }

    @Override // io.sentry.IScope
    public List C() {
        List C = this.f28143c.C();
        if (!C.isEmpty()) {
            return C;
        }
        List C2 = this.f28142b.C();
        if (!C2.isEmpty()) {
            return C2;
        }
        return this.f28141a.C();
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.h0 D() {
        io.sentry.protocol.h0 D = this.f28143c.D();
        if (D != null) {
            return D;
        }
        io.sentry.protocol.h0 D2 = this.f28142b.D();
        if (D2 != null) {
            return D2;
        }
        return this.f28141a.D();
    }

    @Override // io.sentry.IScope
    public String E() {
        String E = this.f28143c.E();
        if (E != null) {
            return E;
        }
        String E2 = this.f28142b.E();
        if (E2 != null) {
            return E2;
        }
        return this.f28141a.E();
    }

    @Override // io.sentry.IScope
    public void F() {
        d().F();
    }

    @Override // io.sentry.IScope
    public io.sentry.featureflags.b G() {
        return io.sentry.featureflags.a.c(b(), this.f28141a.G(), this.f28142b.G(), this.f28143c.G());
    }

    @Override // io.sentry.IScope
    public void H(y0 y0Var) {
        d().H(y0Var);
    }

    @Override // io.sentry.IScope
    public void I(String str) {
        d().I(str);
    }

    @Override // io.sentry.IScope
    public z7 J() {
        z7 J = this.f28143c.J();
        if (J != null) {
            return J;
        }
        z7 J2 = this.f28142b.J();
        if (J2 != null) {
            return J2;
        }
        return this.f28141a.J();
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.x K() {
        io.sentry.protocol.x K = this.f28143c.K();
        io.sentry.protocol.x xVar = io.sentry.protocol.x.f28615e;
        if (!xVar.equals(K)) {
            return K;
        }
        io.sentry.protocol.x K2 = this.f28142b.K();
        if (!xVar.equals(K2)) {
            return K2;
        }
        return this.f28141a.K();
    }

    @Override // io.sentry.IScope
    public s3 L() {
        return d().L();
    }

    @Override // io.sentry.IScope
    public void M(String str) {
        d().M(str);
    }

    @Override // io.sentry.IScope
    public y0 N() {
        y0 N = this.f28143c.N();
        if (!(N instanceof s2)) {
            return N;
        }
        y0 N2 = this.f28142b.N();
        if (!(N2 instanceof s2)) {
            return N2;
        }
        return this.f28141a.N();
    }

    @Override // io.sentry.IScope
    public List O() {
        CopyOnWriteArrayList copyOnWriteArrayList = new CopyOnWriteArrayList();
        copyOnWriteArrayList.addAll(this.f28141a.O());
        copyOnWriteArrayList.addAll(this.f28142b.O());
        copyOnWriteArrayList.addAll(this.f28143c.O());
        return copyOnWriteArrayList;
    }

    @Override // io.sentry.IScope
    public void P(SentryEvent sentryEvent) {
        this.f28141a.P(sentryEvent);
    }

    @Override // io.sentry.IScope
    public void Q() {
        d().Q();
    }

    @Override // io.sentry.IScope
    public s3 R(z3.a aVar) {
        return d().R(aVar);
    }

    @Override // io.sentry.IScope
    public void S(z3.c cVar) {
        d().S(cVar);
    }

    @Override // io.sentry.IScope
    public void T(io.sentry.protocol.x xVar) {
        this.f28141a.T(xVar);
        this.f28142b.T(xVar);
        this.f28143c.T(xVar);
    }

    @Override // io.sentry.IScope
    public List U() {
        return io.sentry.util.f.a(y());
    }

    @Override // io.sentry.IScope
    public void V(s3 s3Var) {
        d().V(s3Var);
    }

    @Override // io.sentry.IScope
    public void a(String str, String str2) {
        d().a(str, str2);
    }

    @Override // io.sentry.IScope
    public k7 b() {
        return this.f28141a.b();
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.o c() {
        io.sentry.protocol.o c10 = this.f28143c.c();
        if (c10 != null) {
            return c10;
        }
        io.sentry.protocol.o c11 = this.f28142b.c();
        if (c11 != null) {
            return c11;
        }
        return this.f28141a.c();
    }

    @Override // io.sentry.IScope
    public void clear() {
        d().clear();
    }

    @Override // io.sentry.IScope
    public void e(Breadcrumb breadcrumb) {
        d().e(breadcrumb);
    }

    @Override // io.sentry.IScope
    public void f(String str, String str2) {
        d().f(str, str2);
    }

    @Override // io.sentry.IScope
    public String g() {
        String g10 = this.f28143c.g();
        if (g10 != null) {
            return g10;
        }
        String g11 = this.f28142b.g();
        if (g11 != null) {
            return g11;
        }
        return this.f28141a.g();
    }

    @Override // io.sentry.IScope
    public Map getExtras() {
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
        concurrentHashMap.putAll(this.f28141a.getExtras());
        concurrentHashMap.putAll(this.f28142b.getExtras());
        concurrentHashMap.putAll(this.f28143c.getExtras());
        return concurrentHashMap;
    }

    @Override // io.sentry.IScope
    public void h(Breadcrumb breadcrumb, Hint hint) {
        d().h(breadcrumb, hint);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public IScope i(d4 d4Var) {
        if (d4Var != null) {
            int i10 = a.f28144a[d4Var.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            return this;
                        }
                    } else {
                        return this.f28141a;
                    }
                } else {
                    return this.f28142b;
                }
            } else {
                return this.f28143c;
            }
        }
        int i11 = a.f28144a[b().getDefaultScopeType().ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 != 3) {
                    return this.f28143c;
                }
                return this.f28141a;
            }
            return this.f28142b;
        }
        return this.f28143c;
    }

    @Override // io.sentry.IScope
    public void j(Throwable th2, ISpan iSpan, String str) {
        this.f28141a.j(th2, iSpan, str);
    }

    @Override // io.sentry.IScope
    public void k(io.sentry.protocol.h0 h0Var) {
        d().k(h0Var);
    }

    @Override // io.sentry.IScope
    public e1 l() {
        e1 l10 = this.f28143c.l();
        if (l10 != null) {
            return l10;
        }
        e1 l11 = this.f28142b.l();
        if (l11 != null) {
            return l11;
        }
        return this.f28141a.l();
    }

    @Override // io.sentry.IScope
    public z7 m() {
        return d().m();
    }

    @Override // io.sentry.IScope
    public SentryLevel n() {
        SentryLevel n10 = this.f28143c.n();
        if (n10 != null) {
            return n10;
        }
        SentryLevel n11 = this.f28142b.n();
        if (n11 != null) {
            return n11;
        }
        return this.f28141a.n();
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.g o() {
        return G().o();
    }

    @Override // io.sentry.IScope
    public void p(io.sentry.protocol.x xVar) {
        d().p(xVar);
    }

    @Override // io.sentry.IScope
    public z3.d q() {
        return d().q();
    }

    @Override // io.sentry.IScope
    public void r(k7 k7Var) {
        this.f28141a.r(k7Var);
    }

    @Override // io.sentry.IScope
    public ISpan s() {
        ISpan s10 = this.f28143c.s();
        if (s10 != null) {
            return s10;
        }
        ISpan s11 = this.f28142b.s();
        if (s11 != null) {
            return s11;
        }
        return this.f28141a.s();
    }

    @Override // io.sentry.IScope
    public Queue t() {
        ArrayList arrayList = new ArrayList();
        arrayList.addAll(this.f28141a.t());
        arrayList.addAll(this.f28142b.t());
        arrayList.addAll(this.f28143c.t());
        Collections.sort(arrayList);
        Queue i10 = z3.i(this.f28143c.b().getMaxBreadcrumbs());
        i10.addAll(arrayList);
        return i10;
    }

    @Override // io.sentry.IScope
    public void u(List list) {
        d().u(list);
    }

    @Override // io.sentry.IScope
    public z7 v(z3.b bVar) {
        return d().v(bVar);
    }

    @Override // io.sentry.IScope
    public Map w() {
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
        concurrentHashMap.putAll(this.f28141a.w());
        concurrentHashMap.putAll(this.f28142b.w());
        concurrentHashMap.putAll(this.f28143c.w());
        return concurrentHashMap;
    }

    @Override // io.sentry.IScope
    public void x() {
        d().x();
    }

    @Override // io.sentry.IScope
    public List y() {
        CopyOnWriteArrayList copyOnWriteArrayList = new CopyOnWriteArrayList();
        copyOnWriteArrayList.addAll(this.f28141a.y());
        copyOnWriteArrayList.addAll(this.f28142b.y());
        copyOnWriteArrayList.addAll(this.f28143c.y());
        Collections.sort(copyOnWriteArrayList);
        return copyOnWriteArrayList;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.c z() {
        return new f(this.f28141a.z(), this.f28142b.z(), this.f28143c.z(), b().getDefaultScopeType());
    }

    @Override // io.sentry.IScope
    /* renamed from: clone */
    public IScope m1185clone() {
        return new g(this.f28141a, this.f28142b.clone(), this.f28143c.clone());
    }
}
