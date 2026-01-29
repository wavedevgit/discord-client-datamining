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
    private final IScope f29996a;

    /* renamed from: b  reason: collision with root package name */
    private final IScope f29997b;

    /* renamed from: c  reason: collision with root package name */
    private final IScope f29998c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f29999a;

        static {
            int[] iArr = new int[d4.values().length];
            f29999a = iArr;
            try {
                iArr[d4.CURRENT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f29999a[d4.ISOLATION.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f29999a[d4.GLOBAL.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f29999a[d4.COMBINED.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    public g(IScope iScope, IScope iScope2, IScope iScope3) {
        this.f29996a = iScope;
        this.f29997b = iScope2;
        this.f29998c = iScope3;
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
        List B = this.f29998c.B();
        if (!B.isEmpty()) {
            return B;
        }
        List B2 = this.f29997b.B();
        if (!B2.isEmpty()) {
            return B2;
        }
        return this.f29996a.B();
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.h0 C() {
        io.sentry.protocol.h0 C = this.f29998c.C();
        if (C != null) {
            return C;
        }
        io.sentry.protocol.h0 C2 = this.f29997b.C();
        if (C2 != null) {
            return C2;
        }
        return this.f29996a.C();
    }

    @Override // io.sentry.IScope
    public String D() {
        String D = this.f29998c.D();
        if (D != null) {
            return D;
        }
        String D2 = this.f29997b.D();
        if (D2 != null) {
            return D2;
        }
        return this.f29996a.D();
    }

    @Override // io.sentry.IScope
    public void E() {
        d().E();
    }

    @Override // io.sentry.IScope
    public io.sentry.featureflags.b F() {
        return io.sentry.featureflags.a.c(b(), this.f29996a.F(), this.f29997b.F(), this.f29998c.F());
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
        z7 I = this.f29998c.I();
        if (I != null) {
            return I;
        }
        z7 I2 = this.f29997b.I();
        if (I2 != null) {
            return I2;
        }
        return this.f29996a.I();
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.x J() {
        io.sentry.protocol.x J = this.f29998c.J();
        io.sentry.protocol.x xVar = io.sentry.protocol.x.f30470e;
        if (!xVar.equals(J)) {
            return J;
        }
        io.sentry.protocol.x J2 = this.f29997b.J();
        if (!xVar.equals(J2)) {
            return J2;
        }
        return this.f29996a.J();
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
        y0 M = this.f29998c.M();
        if (!(M instanceof s2)) {
            return M;
        }
        y0 M2 = this.f29997b.M();
        if (!(M2 instanceof s2)) {
            return M2;
        }
        return this.f29996a.M();
    }

    @Override // io.sentry.IScope
    public List N() {
        CopyOnWriteArrayList copyOnWriteArrayList = new CopyOnWriteArrayList();
        copyOnWriteArrayList.addAll(this.f29996a.N());
        copyOnWriteArrayList.addAll(this.f29997b.N());
        copyOnWriteArrayList.addAll(this.f29998c.N());
        return copyOnWriteArrayList;
    }

    @Override // io.sentry.IScope
    public void O(SentryEvent sentryEvent) {
        this.f29996a.O(sentryEvent);
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
        this.f29996a.S(xVar);
        this.f29997b.S(xVar);
        this.f29998c.S(xVar);
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
            int i10 = a.f29999a[d4Var.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            return this;
                        }
                    } else {
                        return this.f29996a;
                    }
                } else {
                    return this.f29997b;
                }
            } else {
                return this.f29998c;
            }
        }
        int i11 = a.f29999a[b().getDefaultScopeType().ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 != 3) {
                    return this.f29998c;
                }
                return this.f29996a;
            }
            return this.f29997b;
        }
        return this.f29998c;
    }

    @Override // io.sentry.IScope
    public void a(String str, String str2) {
        d().a(str, str2);
    }

    @Override // io.sentry.IScope
    public k7 b() {
        return this.f29996a.b();
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.o c() {
        io.sentry.protocol.o c10 = this.f29998c.c();
        if (c10 != null) {
            return c10;
        }
        io.sentry.protocol.o c11 = this.f29997b.c();
        if (c11 != null) {
            return c11;
        }
        return this.f29996a.c();
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
    public void g(Breadcrumb breadcrumb, Hint hint) {
        d().g(breadcrumb, hint);
    }

    @Override // io.sentry.IScope
    public Map getExtras() {
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
        concurrentHashMap.putAll(this.f29996a.getExtras());
        concurrentHashMap.putAll(this.f29997b.getExtras());
        concurrentHashMap.putAll(this.f29998c.getExtras());
        return concurrentHashMap;
    }

    @Override // io.sentry.IScope
    public String h() {
        String h10 = this.f29998c.h();
        if (h10 != null) {
            return h10;
        }
        String h11 = this.f29997b.h();
        if (h11 != null) {
            return h11;
        }
        return this.f29996a.h();
    }

    @Override // io.sentry.IScope
    public void i(Throwable th2, ISpan iSpan, String str) {
        this.f29996a.i(th2, iSpan, str);
    }

    @Override // io.sentry.IScope
    public void j(io.sentry.protocol.h0 h0Var) {
        d().j(h0Var);
    }

    @Override // io.sentry.IScope
    public e1 k() {
        e1 k10 = this.f29998c.k();
        if (k10 != null) {
            return k10;
        }
        e1 k11 = this.f29997b.k();
        if (k11 != null) {
            return k11;
        }
        return this.f29996a.k();
    }

    @Override // io.sentry.IScope
    public z7 l() {
        return d().l();
    }

    @Override // io.sentry.IScope
    public SentryLevel m() {
        SentryLevel m10 = this.f29998c.m();
        if (m10 != null) {
            return m10;
        }
        SentryLevel m11 = this.f29997b.m();
        if (m11 != null) {
            return m11;
        }
        return this.f29996a.m();
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
        this.f29996a.q(k7Var);
    }

    @Override // io.sentry.IScope
    public ISpan r() {
        ISpan r10 = this.f29998c.r();
        if (r10 != null) {
            return r10;
        }
        ISpan r11 = this.f29997b.r();
        if (r11 != null) {
            return r11;
        }
        return this.f29996a.r();
    }

    @Override // io.sentry.IScope
    public Queue s() {
        ArrayList arrayList = new ArrayList();
        arrayList.addAll(this.f29996a.s());
        arrayList.addAll(this.f29997b.s());
        arrayList.addAll(this.f29998c.s());
        Collections.sort(arrayList);
        Queue V = z3.V(this.f29998c.b().getMaxBreadcrumbs());
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
        concurrentHashMap.putAll(this.f29996a.v());
        concurrentHashMap.putAll(this.f29997b.v());
        concurrentHashMap.putAll(this.f29998c.v());
        return concurrentHashMap;
    }

    @Override // io.sentry.IScope
    public void w() {
        d().w();
    }

    @Override // io.sentry.IScope
    public List x() {
        CopyOnWriteArrayList copyOnWriteArrayList = new CopyOnWriteArrayList();
        copyOnWriteArrayList.addAll(this.f29996a.x());
        copyOnWriteArrayList.addAll(this.f29997b.x());
        copyOnWriteArrayList.addAll(this.f29998c.x());
        Collections.sort(copyOnWriteArrayList);
        return copyOnWriteArrayList;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.c y() {
        return new f(this.f29996a.y(), this.f29997b.y(), this.f29998c.y(), b().getDefaultScopeType());
    }

    @Override // io.sentry.IScope
    public void z(String str, Object obj) {
        d().z(str, obj);
    }

    @Override // io.sentry.IScope
    /* renamed from: clone */
    public IScope m1181clone() {
        return new g(this.f29996a, this.f29997b.clone(), this.f29998c.clone());
    }
}
