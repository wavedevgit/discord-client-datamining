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
    private final IScope f29893a;

    /* renamed from: b  reason: collision with root package name */
    private final IScope f29894b;

    /* renamed from: c  reason: collision with root package name */
    private final IScope f29895c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f29896a;

        static {
            int[] iArr = new int[d4.values().length];
            f29896a = iArr;
            try {
                iArr[d4.CURRENT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f29896a[d4.ISOLATION.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f29896a[d4.GLOBAL.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f29896a[d4.COMBINED.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    public g(IScope iScope, IScope iScope2, IScope iScope3) {
        this.f29893a = iScope;
        this.f29894b = iScope2;
        this.f29895c = iScope3;
    }

    private IScope d() {
        return g(null);
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
        List C = this.f29895c.C();
        if (!C.isEmpty()) {
            return C;
        }
        List C2 = this.f29894b.C();
        if (!C2.isEmpty()) {
            return C2;
        }
        return this.f29893a.C();
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.h0 D() {
        io.sentry.protocol.h0 D = this.f29895c.D();
        if (D != null) {
            return D;
        }
        io.sentry.protocol.h0 D2 = this.f29894b.D();
        if (D2 != null) {
            return D2;
        }
        return this.f29893a.D();
    }

    @Override // io.sentry.IScope
    public String E() {
        String E = this.f29895c.E();
        if (E != null) {
            return E;
        }
        String E2 = this.f29894b.E();
        if (E2 != null) {
            return E2;
        }
        return this.f29893a.E();
    }

    @Override // io.sentry.IScope
    public void F() {
        d().F();
    }

    @Override // io.sentry.IScope
    public io.sentry.featureflags.b G() {
        return io.sentry.featureflags.a.c(b(), this.f29893a.G(), this.f29894b.G(), this.f29895c.G());
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
        z7 J = this.f29895c.J();
        if (J != null) {
            return J;
        }
        z7 J2 = this.f29894b.J();
        if (J2 != null) {
            return J2;
        }
        return this.f29893a.J();
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.x K() {
        io.sentry.protocol.x K = this.f29895c.K();
        io.sentry.protocol.x xVar = io.sentry.protocol.x.f30367e;
        if (!xVar.equals(K)) {
            return K;
        }
        io.sentry.protocol.x K2 = this.f29894b.K();
        if (!xVar.equals(K2)) {
            return K2;
        }
        return this.f29893a.K();
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
        y0 N = this.f29895c.N();
        if (!(N instanceof s2)) {
            return N;
        }
        y0 N2 = this.f29894b.N();
        if (!(N2 instanceof s2)) {
            return N2;
        }
        return this.f29893a.N();
    }

    @Override // io.sentry.IScope
    public List O() {
        CopyOnWriteArrayList copyOnWriteArrayList = new CopyOnWriteArrayList();
        copyOnWriteArrayList.addAll(this.f29893a.O());
        copyOnWriteArrayList.addAll(this.f29894b.O());
        copyOnWriteArrayList.addAll(this.f29895c.O());
        return copyOnWriteArrayList;
    }

    @Override // io.sentry.IScope
    public void P(SentryEvent sentryEvent) {
        this.f29893a.P(sentryEvent);
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
        this.f29893a.T(xVar);
        this.f29894b.T(xVar);
        this.f29895c.T(xVar);
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
        return this.f29893a.b();
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.o c() {
        io.sentry.protocol.o c10 = this.f29895c.c();
        if (c10 != null) {
            return c10;
        }
        io.sentry.protocol.o c11 = this.f29894b.c();
        if (c11 != null) {
            return c11;
        }
        return this.f29893a.c();
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
            int i10 = a.f29896a[d4Var.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            return this;
                        }
                    } else {
                        return this.f29893a;
                    }
                } else {
                    return this.f29894b;
                }
            } else {
                return this.f29895c;
            }
        }
        int i11 = a.f29896a[b().getDefaultScopeType().ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 != 3) {
                    return this.f29895c;
                }
                return this.f29893a;
            }
            return this.f29894b;
        }
        return this.f29895c;
    }

    @Override // io.sentry.IScope
    public Map getExtras() {
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
        concurrentHashMap.putAll(this.f29893a.getExtras());
        concurrentHashMap.putAll(this.f29894b.getExtras());
        concurrentHashMap.putAll(this.f29895c.getExtras());
        return concurrentHashMap;
    }

    @Override // io.sentry.IScope
    public String h() {
        String h10 = this.f29895c.h();
        if (h10 != null) {
            return h10;
        }
        String h11 = this.f29894b.h();
        if (h11 != null) {
            return h11;
        }
        return this.f29893a.h();
    }

    @Override // io.sentry.IScope
    public void i(Breadcrumb breadcrumb, Hint hint) {
        d().i(breadcrumb, hint);
    }

    @Override // io.sentry.IScope
    public void j(Throwable th2, ISpan iSpan, String str) {
        this.f29893a.j(th2, iSpan, str);
    }

    @Override // io.sentry.IScope
    public void k(io.sentry.protocol.h0 h0Var) {
        d().k(h0Var);
    }

    @Override // io.sentry.IScope
    public e1 l() {
        e1 l10 = this.f29895c.l();
        if (l10 != null) {
            return l10;
        }
        e1 l11 = this.f29894b.l();
        if (l11 != null) {
            return l11;
        }
        return this.f29893a.l();
    }

    @Override // io.sentry.IScope
    public z7 m() {
        return d().m();
    }

    @Override // io.sentry.IScope
    public SentryLevel n() {
        SentryLevel n10 = this.f29895c.n();
        if (n10 != null) {
            return n10;
        }
        SentryLevel n11 = this.f29894b.n();
        if (n11 != null) {
            return n11;
        }
        return this.f29893a.n();
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
        this.f29893a.r(k7Var);
    }

    @Override // io.sentry.IScope
    public ISpan s() {
        ISpan s10 = this.f29895c.s();
        if (s10 != null) {
            return s10;
        }
        ISpan s11 = this.f29894b.s();
        if (s11 != null) {
            return s11;
        }
        return this.f29893a.s();
    }

    @Override // io.sentry.IScope
    public Queue t() {
        ArrayList arrayList = new ArrayList();
        arrayList.addAll(this.f29893a.t());
        arrayList.addAll(this.f29894b.t());
        arrayList.addAll(this.f29895c.t());
        Collections.sort(arrayList);
        Queue g10 = z3.g(this.f29895c.b().getMaxBreadcrumbs());
        g10.addAll(arrayList);
        return g10;
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
        concurrentHashMap.putAll(this.f29893a.w());
        concurrentHashMap.putAll(this.f29894b.w());
        concurrentHashMap.putAll(this.f29895c.w());
        return concurrentHashMap;
    }

    @Override // io.sentry.IScope
    public void x() {
        d().x();
    }

    @Override // io.sentry.IScope
    public List y() {
        CopyOnWriteArrayList copyOnWriteArrayList = new CopyOnWriteArrayList();
        copyOnWriteArrayList.addAll(this.f29893a.y());
        copyOnWriteArrayList.addAll(this.f29894b.y());
        copyOnWriteArrayList.addAll(this.f29895c.y());
        Collections.sort(copyOnWriteArrayList);
        return copyOnWriteArrayList;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.c z() {
        return new f(this.f29893a.z(), this.f29894b.z(), this.f29895c.z(), b().getDefaultScopeType());
    }

    @Override // io.sentry.IScope
    /* renamed from: clone */
    public IScope m1185clone() {
        return new g(this.f29893a, this.f29894b.clone(), this.f29895c.clone());
    }
}
