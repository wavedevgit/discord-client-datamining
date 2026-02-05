package xs;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import xs.b;
import xs.d;
import xs.e;
import xs.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends xs.a {

    /* renamed from: a  reason: collision with root package name */
    private final zs.f f54180a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements b, d, e, o.b {

        /* renamed from: a  reason: collision with root package name */
        private final zs.d f54181a;

        public a(zs.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f54181a = actualBuilder;
        }

        @Override // xs.b
        public zs.d a() {
            return this.f54181a;
        }

        @Override // xs.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // xs.o.a
        public void c(h0 h0Var) {
            d.a.l(this, h0Var);
        }

        @Override // xs.d
        public void d(zs.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // xs.o.a
        public void e(f0 f0Var) {
            d.a.h(this, f0Var);
        }

        @Override // xs.o.d
        public void f(h0 h0Var) {
            e.a.d(this, h0Var);
        }

        @Override // xs.o.d
        public void g(h0 h0Var) {
            e.a.b(this, h0Var);
        }

        @Override // xs.o.c
        public void h(h0 h0Var) {
            d.a.g(this, h0Var);
        }

        @Override // xs.b
        public void i(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // xs.o.d
        public void j(h0 h0Var) {
            e.a.c(this, h0Var);
        }

        @Override // xs.c
        public void l(zs.o oVar) {
            d.a.a(this, oVar);
        }

        @Override // xs.o
        public void m(String str) {
            b.a.d(this, str);
        }

        @Override // xs.o.a
        public void n(h0 h0Var) {
            d.a.i(this, h0Var);
        }

        @Override // xs.e
        public void o(zs.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // xs.o.c
        public void p(int i10, int i11) {
            d.a.k(this, i10, i11);
        }

        @Override // xs.f
        public void q(zs.o oVar) {
            d.a.b(this, oVar);
        }

        @Override // xs.o.d
        public void r(n nVar) {
            e.a.a(this, nVar);
        }

        @Override // xs.o.a
        public void s(s sVar) {
            d.a.e(this, sVar);
        }

        @Override // xs.o.a
        public void t(n nVar) {
            d.a.c(this, nVar);
        }

        @Override // xs.o.c
        public void u(h0 h0Var) {
            d.a.f(this, h0Var);
        }

        @Override // xs.o.c
        public void v(h0 h0Var) {
            d.a.j(this, h0Var);
        }

        @Override // xs.o.a
        public void w(h0 h0Var) {
            d.a.d(this, h0Var);
        }

        public zs.f x() {
            return b.a.c(this);
        }

        @Override // xs.b
        /* renamed from: y */
        public a k() {
            return new a(new zs.d());
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public l(zs.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f54180a = actualFormat;
    }

    @Override // xs.a
    public zs.f b() {
        return this.f54180a;
    }

    @Override // xs.a
    /* renamed from: e */
    public k c() {
        k kVar;
        kVar = m.f54196b;
        return kVar;
    }

    @Override // xs.a
    /* renamed from: f */
    public j d(k intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return new j(intermediate);
    }
}
