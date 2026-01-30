package io.sentry;

import java.util.Enumeration;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends io.sentry.protocol.c {

    /* renamed from: i  reason: collision with root package name */
    private final io.sentry.protocol.c f29996i;

    /* renamed from: o  reason: collision with root package name */
    private final io.sentry.protocol.c f29997o;

    /* renamed from: p  reason: collision with root package name */
    private final io.sentry.protocol.c f29998p;

    /* renamed from: q  reason: collision with root package name */
    private final d4 f29999q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f30000a;

        static {
            int[] iArr = new int[d4.values().length];
            f30000a = iArr;
            try {
                iArr[d4.CURRENT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f30000a[d4.ISOLATION.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f30000a[d4.GLOBAL.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public f(io.sentry.protocol.c cVar, io.sentry.protocol.c cVar2, io.sentry.protocol.c cVar3, d4 d4Var) {
        this.f29996i = cVar;
        this.f29997o = cVar2;
        this.f29998p = cVar3;
        this.f29999q = d4Var;
    }

    private io.sentry.protocol.c B() {
        int i10 = a.f30000a[this.f29999q.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    return this.f29998p;
                }
                return this.f29996i;
            }
            return this.f29997o;
        }
        return this.f29998p;
    }

    private io.sentry.protocol.c C() {
        io.sentry.protocol.c cVar = new io.sentry.protocol.c();
        cVar.m(this.f29996i);
        cVar.m(this.f29997o);
        cVar.m(this.f29998p);
        return cVar;
    }

    @Override // io.sentry.protocol.c
    public boolean a(Object obj) {
        if (!this.f29996i.a(obj) && !this.f29997o.a(obj) && !this.f29998p.a(obj)) {
            return false;
        }
        return true;
    }

    @Override // io.sentry.protocol.c
    public Set b() {
        return C().b();
    }

    @Override // io.sentry.protocol.c
    public Object c(Object obj) {
        Object c10 = this.f29998p.c(obj);
        if (c10 != null) {
            return c10;
        }
        Object c11 = this.f29997o.c(obj);
        if (c11 != null) {
            return c11;
        }
        return this.f29996i.c(obj);
    }

    @Override // io.sentry.protocol.c
    public io.sentry.protocol.a d() {
        io.sentry.protocol.a d10 = this.f29998p.d();
        if (d10 != null) {
            return d10;
        }
        io.sentry.protocol.a d11 = this.f29997o.d();
        if (d11 != null) {
            return d11;
        }
        return this.f29996i.d();
    }

    @Override // io.sentry.protocol.c
    public io.sentry.protocol.e e() {
        io.sentry.protocol.e e10 = this.f29998p.e();
        if (e10 != null) {
            return e10;
        }
        io.sentry.protocol.e e11 = this.f29997o.e();
        if (e11 != null) {
            return e11;
        }
        return this.f29996i.e();
    }

    @Override // io.sentry.protocol.c
    public io.sentry.protocol.g f() {
        io.sentry.protocol.g f10 = this.f29998p.f();
        if (f10 != null) {
            return f10;
        }
        io.sentry.protocol.g f11 = this.f29997o.f();
        if (f11 != null) {
            return f11;
        }
        return this.f29996i.f();
    }

    @Override // io.sentry.protocol.c
    public io.sentry.protocol.n h() {
        io.sentry.protocol.n h10 = this.f29998p.h();
        if (h10 != null) {
            return h10;
        }
        io.sentry.protocol.n h11 = this.f29997o.h();
        if (h11 != null) {
            return h11;
        }
        return this.f29996i.h();
    }

    @Override // io.sentry.protocol.c
    public io.sentry.protocol.z i() {
        io.sentry.protocol.z i10 = this.f29998p.i();
        if (i10 != null) {
            return i10;
        }
        io.sentry.protocol.z i11 = this.f29997o.i();
        if (i11 != null) {
            return i11;
        }
        return this.f29996i.i();
    }

    @Override // io.sentry.protocol.c
    public e8 j() {
        e8 j10 = this.f29998p.j();
        if (j10 != null) {
            return j10;
        }
        e8 j11 = this.f29997o.j();
        if (j11 != null) {
            return j11;
        }
        return this.f29996i.j();
    }

    @Override // io.sentry.protocol.c
    public Enumeration k() {
        return C().k();
    }

    @Override // io.sentry.protocol.c
    public Object l(String str, Object obj) {
        return B().l(str, obj);
    }

    @Override // io.sentry.protocol.c
    public void m(io.sentry.protocol.c cVar) {
        B().m(cVar);
    }

    @Override // io.sentry.protocol.c
    public Object n(Object obj) {
        return B().n(obj);
    }

    @Override // io.sentry.protocol.c
    public void o(io.sentry.protocol.a aVar) {
        B().o(aVar);
    }

    @Override // io.sentry.protocol.c
    public void p(io.sentry.protocol.b bVar) {
        B().p(bVar);
    }

    @Override // io.sentry.protocol.c
    public void q(io.sentry.protocol.e eVar) {
        B().q(eVar);
    }

    @Override // io.sentry.protocol.c
    public void r(io.sentry.protocol.g gVar) {
        B().r(gVar);
    }

    @Override // io.sentry.protocol.c, io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        C().serialize(f3Var, iLogger);
    }

    @Override // io.sentry.protocol.c
    public void t(io.sentry.protocol.j jVar) {
        B().t(jVar);
    }

    @Override // io.sentry.protocol.c
    public void u(io.sentry.protocol.n nVar) {
        B().u(nVar);
    }

    @Override // io.sentry.protocol.c
    public void w(io.sentry.protocol.p pVar) {
        B().w(pVar);
    }

    @Override // io.sentry.protocol.c
    public void x(io.sentry.protocol.z zVar) {
        B().x(zVar);
    }

    @Override // io.sentry.protocol.c
    public void y(io.sentry.protocol.e0 e0Var) {
        B().y(e0Var);
    }

    @Override // io.sentry.protocol.c
    public void z(e8 e8Var) {
        B().z(e8Var);
    }
}
