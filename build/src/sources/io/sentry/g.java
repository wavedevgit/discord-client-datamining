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
    private final IScope f28389a;

    /* renamed from: b  reason: collision with root package name */
    private final IScope f28390b;

    /* renamed from: c  reason: collision with root package name */
    private final IScope f28391c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f28392a;

        static {
            int[] iArr = new int[d4.values().length];
            f28392a = iArr;
            try {
                iArr[d4.CURRENT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f28392a[d4.ISOLATION.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f28392a[d4.GLOBAL.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f28392a[d4.COMBINED.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    public g(IScope iScope, IScope iScope2, IScope iScope3) {
        this.f28389a = iScope;
        this.f28390b = iScope2;
        this.f28391c = iScope3;
    }

    private IScope d() {
        return V(null);
    }

    @Override // io.sentry.IScope
    public void A(e1 e1Var) {
        d().A(e1Var);
    }

    @Override // io.sentry.IScope
    public List B() {
        List B = this.f28391c.B();
        if (!B.isEmpty()) {
            return B;
        }
        List B2 = this.f28390b.B();
        if (!B2.isEmpty()) {
            return B2;
        }
        return this.f28389a.B();
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.h0 C() {
        io.sentry.protocol.h0 C = this.f28391c.C();
        if (C != null) {
            return C;
        }
        io.sentry.protocol.h0 C2 = this.f28390b.C();
        if (C2 != null) {
            return C2;
        }
        return this.f28389a.C();
    }

    @Override // io.sentry.IScope
    public String D() {
        String D = this.f28391c.D();
        if (D != null) {
            return D;
        }
        String D2 = this.f28390b.D();
        if (D2 != null) {
            return D2;
        }
        return this.f28389a.D();
    }

    @Override // io.sentry.IScope
    public void E() {
        d().E();
    }

    @Override // io.sentry.IScope
    public io.sentry.featureflags.b F() {
        return io.sentry.featureflags.a.c(b(), this.f28389a.F(), this.f28390b.F(), this.f28391c.F());
    }

    @Override // io.sentry.IScope
    public void G(y0 y0Var) {
        d().G(y0Var);
    }

    @Override // io.sentry.IScope
    public void H(String str) {
        d().H(str);
    }

    @Override // io.sentry.IScope
    public z7 I() {
        z7 I = this.f28391c.I();
        if (I != null) {
            return I;
        }
        z7 I2 = this.f28390b.I();
        if (I2 != null) {
            return I2;
        }
        return this.f28389a.I();
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.x J() {
        io.sentry.protocol.x J = this.f28391c.J();
        io.sentry.protocol.x xVar = io.sentry.protocol.x.f28863e;
        if (!xVar.equals(J)) {
            return J;
        }
        io.sentry.protocol.x J2 = this.f28390b.J();
        if (!xVar.equals(J2)) {
            return J2;
        }
        return this.f28389a.J();
    }

    @Override // io.sentry.IScope
    public s3 K() {
        return d().K();
    }

    @Override // io.sentry.IScope
    public void L(String str) {
        d().L(str);
    }

    @Override // io.sentry.IScope
    public y0 M() {
        y0 M = this.f28391c.M();
        if (!(M instanceof s2)) {
            return M;
        }
        y0 M2 = this.f28390b.M();
        if (!(M2 instanceof s2)) {
            return M2;
        }
        return this.f28389a.M();
    }

    @Override // io.sentry.IScope
    public List N() {
        CopyOnWriteArrayList copyOnWriteArrayList = new CopyOnWriteArrayList();
        copyOnWriteArrayList.addAll(this.f28389a.N());
        copyOnWriteArrayList.addAll(this.f28390b.N());
        copyOnWriteArrayList.addAll(this.f28391c.N());
        return copyOnWriteArrayList;
    }

    @Override // io.sentry.IScope
    public void O(SentryEvent sentryEvent) {
        this.f28389a.O(sentryEvent);
    }

    @Override // io.sentry.IScope
    public void P() {
        d().P();
    }

    @Override // io.sentry.IScope
    public s3 Q(z3.a aVar) {
        return d().Q(aVar);
    }

    @Override // io.sentry.IScope
    public void R(z3.c cVar) {
        d().R(cVar);
    }

    @Override // io.sentry.IScope
    public void S(io.sentry.protocol.x xVar) {
        this.f28389a.S(xVar);
        this.f28390b.S(xVar);
        this.f28391c.S(xVar);
    }

    @Override // io.sentry.IScope
    public List T() {
        return io.sentry.util.f.a(x());
    }

    @Override // io.sentry.IScope
    public void U(s3 s3Var) {
        d().U(s3Var);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public IScope V(d4 d4Var) {
        if (d4Var != null) {
            int i10 = a.f28392a[d4Var.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            return this;
                        }
                    } else {
                        return this.f28389a;
                    }
                } else {
                    return this.f28390b;
                }
            } else {
                return this.f28391c;
            }
        }
        int i11 = a.f28392a[b().getDefaultScopeType().ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 != 3) {
                    return this.f28391c;
                }
                return this.f28389a;
            }
            return this.f28390b;
        }
        return this.f28391c;
    }

    @Override // io.sentry.IScope
    public void a(String str, String str2) {
        d().a(str, str2);
    }

    @Override // io.sentry.IScope
    public k7 b() {
        return this.f28389a.b();
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.o c() {
        io.sentry.protocol.o c10 = this.f28391c.c();
        if (c10 != null) {
            return c10;
        }
        io.sentry.protocol.o c11 = this.f28390b.c();
        if (c11 != null) {
            return c11;
        }
        return this.f28389a.c();
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
        String g10 = this.f28391c.g();
        if (g10 != null) {
            return g10;
        }
        String g11 = this.f28390b.g();
        if (g11 != null) {
            return g11;
        }
        return this.f28389a.g();
    }

    @Override // io.sentry.IScope
    public Map getExtras() {
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
        concurrentHashMap.putAll(this.f28389a.getExtras());
        concurrentHashMap.putAll(this.f28390b.getExtras());
        concurrentHashMap.putAll(this.f28391c.getExtras());
        return concurrentHashMap;
    }

    @Override // io.sentry.IScope
    public void h(Breadcrumb breadcrumb, Hint hint) {
        d().h(breadcrumb, hint);
    }

    @Override // io.sentry.IScope
    public void i(Throwable th2, ISpan iSpan, String str) {
        this.f28389a.i(th2, iSpan, str);
    }

    @Override // io.sentry.IScope
    public void j(io.sentry.protocol.h0 h0Var) {
        d().j(h0Var);
    }

    @Override // io.sentry.IScope
    public e1 k() {
        e1 k10 = this.f28391c.k();
        if (k10 != null) {
            return k10;
        }
        e1 k11 = this.f28390b.k();
        if (k11 != null) {
            return k11;
        }
        return this.f28389a.k();
    }

    @Override // io.sentry.IScope
    public z7 l() {
        return d().l();
    }

    @Override // io.sentry.IScope
    public SentryLevel m() {
        SentryLevel m10 = this.f28391c.m();
        if (m10 != null) {
            return m10;
        }
        SentryLevel m11 = this.f28390b.m();
        if (m11 != null) {
            return m11;
        }
        return this.f28389a.m();
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.g n() {
        return F().n();
    }

    @Override // io.sentry.IScope
    public void o(io.sentry.protocol.x xVar) {
        d().o(xVar);
    }

    @Override // io.sentry.IScope
    public z3.d p() {
        return d().p();
    }

    @Override // io.sentry.IScope
    public void q(k7 k7Var) {
        this.f28389a.q(k7Var);
    }

    @Override // io.sentry.IScope
    public ISpan r() {
        ISpan r10 = this.f28391c.r();
        if (r10 != null) {
            return r10;
        }
        ISpan r11 = this.f28390b.r();
        if (r11 != null) {
            return r11;
        }
        return this.f28389a.r();
    }

    @Override // io.sentry.IScope
    public Queue s() {
        ArrayList arrayList = new ArrayList();
        arrayList.addAll(this.f28389a.s());
        arrayList.addAll(this.f28390b.s());
        arrayList.addAll(this.f28391c.s());
        Collections.sort(arrayList);
        Queue V = z3.V(this.f28391c.b().getMaxBreadcrumbs());
        V.addAll(arrayList);
        return V;
    }

    @Override // io.sentry.IScope
    public void t(List list) {
        d().t(list);
    }

    @Override // io.sentry.IScope
    public z7 u(z3.b bVar) {
        return d().u(bVar);
    }

    @Override // io.sentry.IScope
    public Map v() {
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
        concurrentHashMap.putAll(this.f28389a.v());
        concurrentHashMap.putAll(this.f28390b.v());
        concurrentHashMap.putAll(this.f28391c.v());
        return concurrentHashMap;
    }

    @Override // io.sentry.IScope
    public void w() {
        d().w();
    }

    @Override // io.sentry.IScope
    public List x() {
        CopyOnWriteArrayList copyOnWriteArrayList = new CopyOnWriteArrayList();
        copyOnWriteArrayList.addAll(this.f28389a.x());
        copyOnWriteArrayList.addAll(this.f28390b.x());
        copyOnWriteArrayList.addAll(this.f28391c.x());
        Collections.sort(copyOnWriteArrayList);
        return copyOnWriteArrayList;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.c y() {
        return new f(this.f28389a.y(), this.f28390b.y(), this.f28391c.y(), b().getDefaultScopeType());
    }

    @Override // io.sentry.IScope
    public void z(String str, Object obj) {
        d().z(str, obj);
    }

    @Override // io.sentry.IScope
    /* renamed from: clone */
    public IScope m1185clone() {
        return new g(this.f28389a, this.f28390b.clone(), this.f28391c.clone());
    }
}
