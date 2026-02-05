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
    private final IScope f28997a;

    /* renamed from: b  reason: collision with root package name */
    private final IScope f28998b;

    /* renamed from: c  reason: collision with root package name */
    private final IScope f28999c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f29000a;

        static {
            int[] iArr = new int[d4.values().length];
            f29000a = iArr;
            try {
                iArr[d4.CURRENT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f29000a[d4.ISOLATION.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f29000a[d4.GLOBAL.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f29000a[d4.COMBINED.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    public g(IScope iScope, IScope iScope2, IScope iScope3) {
        this.f28997a = iScope;
        this.f28998b = iScope2;
        this.f28999c = iScope3;
    }

    private IScope d() {
        return g(null);
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.c A() {
        return new f(this.f28997a.A(), this.f28998b.A(), this.f28999c.A(), b().getDefaultScopeType());
    }

    @Override // io.sentry.IScope
    public void B(String str, Object obj) {
        d().B(str, obj);
    }

    @Override // io.sentry.IScope
    public void C(e1 e1Var) {
        d().C(e1Var);
    }

    @Override // io.sentry.IScope
    public List D() {
        List D = this.f28999c.D();
        if (!D.isEmpty()) {
            return D;
        }
        List D2 = this.f28998b.D();
        if (!D2.isEmpty()) {
            return D2;
        }
        return this.f28997a.D();
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.h0 E() {
        io.sentry.protocol.h0 E = this.f28999c.E();
        if (E != null) {
            return E;
        }
        io.sentry.protocol.h0 E2 = this.f28998b.E();
        if (E2 != null) {
            return E2;
        }
        return this.f28997a.E();
    }

    @Override // io.sentry.IScope
    public String F() {
        String F = this.f28999c.F();
        if (F != null) {
            return F;
        }
        String F2 = this.f28998b.F();
        if (F2 != null) {
            return F2;
        }
        return this.f28997a.F();
    }

    @Override // io.sentry.IScope
    public void G() {
        d().G();
    }

    @Override // io.sentry.IScope
    public io.sentry.featureflags.b H() {
        return io.sentry.featureflags.a.c(b(), this.f28997a.H(), this.f28998b.H(), this.f28999c.H());
    }

    @Override // io.sentry.IScope
    public void I(y0 y0Var) {
        d().I(y0Var);
    }

    @Override // io.sentry.IScope
    public void J(String str) {
        d().J(str);
    }

    @Override // io.sentry.IScope
    public z7 K() {
        z7 K = this.f28999c.K();
        if (K != null) {
            return K;
        }
        z7 K2 = this.f28998b.K();
        if (K2 != null) {
            return K2;
        }
        return this.f28997a.K();
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.x L() {
        io.sentry.protocol.x L = this.f28999c.L();
        io.sentry.protocol.x xVar = io.sentry.protocol.x.f29471e;
        if (!xVar.equals(L)) {
            return L;
        }
        io.sentry.protocol.x L2 = this.f28998b.L();
        if (!xVar.equals(L2)) {
            return L2;
        }
        return this.f28997a.L();
    }

    @Override // io.sentry.IScope
    public s3 M() {
        return d().M();
    }

    @Override // io.sentry.IScope
    public void N(String str) {
        d().N(str);
    }

    @Override // io.sentry.IScope
    public y0 O() {
        y0 O = this.f28999c.O();
        if (!(O instanceof s2)) {
            return O;
        }
        y0 O2 = this.f28998b.O();
        if (!(O2 instanceof s2)) {
            return O2;
        }
        return this.f28997a.O();
    }

    @Override // io.sentry.IScope
    public List P() {
        CopyOnWriteArrayList copyOnWriteArrayList = new CopyOnWriteArrayList();
        copyOnWriteArrayList.addAll(this.f28997a.P());
        copyOnWriteArrayList.addAll(this.f28998b.P());
        copyOnWriteArrayList.addAll(this.f28999c.P());
        return copyOnWriteArrayList;
    }

    @Override // io.sentry.IScope
    public void Q(SentryEvent sentryEvent) {
        this.f28997a.Q(sentryEvent);
    }

    @Override // io.sentry.IScope
    public void R() {
        d().R();
    }

    @Override // io.sentry.IScope
    public s3 S(z3.a aVar) {
        return d().S(aVar);
    }

    @Override // io.sentry.IScope
    public void T(z3.c cVar) {
        d().T(cVar);
    }

    @Override // io.sentry.IScope
    public void U(io.sentry.protocol.x xVar) {
        this.f28997a.U(xVar);
        this.f28998b.U(xVar);
        this.f28999c.U(xVar);
    }

    @Override // io.sentry.IScope
    public List V() {
        return io.sentry.util.f.a(z());
    }

    @Override // io.sentry.IScope
    public void W(s3 s3Var) {
        d().W(s3Var);
    }

    @Override // io.sentry.IScope
    public void a(String str, String str2) {
        d().a(str, str2);
    }

    @Override // io.sentry.IScope
    public k7 b() {
        return this.f28997a.b();
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.o c() {
        io.sentry.protocol.o c10 = this.f28999c.c();
        if (c10 != null) {
            return c10;
        }
        io.sentry.protocol.o c11 = this.f28998b.c();
        if (c11 != null) {
            return c11;
        }
        return this.f28997a.c();
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

    /* JADX INFO: Access modifiers changed from: package-private */
    public IScope g(d4 d4Var) {
        if (d4Var != null) {
            int i10 = a.f29000a[d4Var.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            return this;
                        }
                    } else {
                        return this.f28997a;
                    }
                } else {
                    return this.f28998b;
                }
            } else {
                return this.f28999c;
            }
        }
        int i11 = a.f29000a[b().getDefaultScopeType().ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 != 3) {
                    return this.f28999c;
                }
                return this.f28997a;
            }
            return this.f28998b;
        }
        return this.f28999c;
    }

    @Override // io.sentry.IScope
    public Map getExtras() {
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
        concurrentHashMap.putAll(this.f28997a.getExtras());
        concurrentHashMap.putAll(this.f28998b.getExtras());
        concurrentHashMap.putAll(this.f28999c.getExtras());
        return concurrentHashMap;
    }

    @Override // io.sentry.IScope
    public String h() {
        String h10 = this.f28999c.h();
        if (h10 != null) {
            return h10;
        }
        String h11 = this.f28998b.h();
        if (h11 != null) {
            return h11;
        }
        return this.f28997a.h();
    }

    @Override // io.sentry.IScope
    public void i(Breadcrumb breadcrumb, Hint hint) {
        d().i(breadcrumb, hint);
    }

    @Override // io.sentry.IScope
    public void k(Throwable th2, ISpan iSpan, String str) {
        this.f28997a.k(th2, iSpan, str);
    }

    @Override // io.sentry.IScope
    public void l(io.sentry.protocol.h0 h0Var) {
        d().l(h0Var);
    }

    @Override // io.sentry.IScope
    public e1 m() {
        e1 m10 = this.f28999c.m();
        if (m10 != null) {
            return m10;
        }
        e1 m11 = this.f28998b.m();
        if (m11 != null) {
            return m11;
        }
        return this.f28997a.m();
    }

    @Override // io.sentry.IScope
    public z7 n() {
        return d().n();
    }

    @Override // io.sentry.IScope
    public SentryLevel o() {
        SentryLevel o10 = this.f28999c.o();
        if (o10 != null) {
            return o10;
        }
        SentryLevel o11 = this.f28998b.o();
        if (o11 != null) {
            return o11;
        }
        return this.f28997a.o();
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.g p() {
        return H().p();
    }

    @Override // io.sentry.IScope
    public void q(io.sentry.protocol.x xVar) {
        d().q(xVar);
    }

    @Override // io.sentry.IScope
    public z3.d r() {
        return d().r();
    }

    @Override // io.sentry.IScope
    public void s(k7 k7Var) {
        this.f28997a.s(k7Var);
    }

    @Override // io.sentry.IScope
    public ISpan t() {
        ISpan t10 = this.f28999c.t();
        if (t10 != null) {
            return t10;
        }
        ISpan t11 = this.f28998b.t();
        if (t11 != null) {
            return t11;
        }
        return this.f28997a.t();
    }

    @Override // io.sentry.IScope
    public Queue u() {
        ArrayList arrayList = new ArrayList();
        arrayList.addAll(this.f28997a.u());
        arrayList.addAll(this.f28998b.u());
        arrayList.addAll(this.f28999c.u());
        Collections.sort(arrayList);
        Queue g10 = z3.g(this.f28999c.b().getMaxBreadcrumbs());
        g10.addAll(arrayList);
        return g10;
    }

    @Override // io.sentry.IScope
    public void v(List list) {
        d().v(list);
    }

    @Override // io.sentry.IScope
    public z7 w(z3.b bVar) {
        return d().w(bVar);
    }

    @Override // io.sentry.IScope
    public Map x() {
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
        concurrentHashMap.putAll(this.f28997a.x());
        concurrentHashMap.putAll(this.f28998b.x());
        concurrentHashMap.putAll(this.f28999c.x());
        return concurrentHashMap;
    }

    @Override // io.sentry.IScope
    public void y() {
        d().y();
    }

    @Override // io.sentry.IScope
    public List z() {
        CopyOnWriteArrayList copyOnWriteArrayList = new CopyOnWriteArrayList();
        copyOnWriteArrayList.addAll(this.f28997a.z());
        copyOnWriteArrayList.addAll(this.f28998b.z());
        copyOnWriteArrayList.addAll(this.f28999c.z());
        Collections.sort(copyOnWriteArrayList);
        return copyOnWriteArrayList;
    }

    @Override // io.sentry.IScope
    /* renamed from: clone */
    public IScope m1185clone() {
        return new g(this.f28997a, this.f28998b.clone(), this.f28999c.clone());
    }
}
