package rs;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import rs.b;
import rs.d;
import rs.e;
import rs.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends rs.a {

    /* renamed from: a  reason: collision with root package name */
    private final ts.f f48567a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements b, d, e, o.b {

        /* renamed from: a  reason: collision with root package name */
        private final ts.d f48568a;

        public a(ts.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f48568a = actualBuilder;
        }

        @Override // rs.b
        public ts.d a() {
            return this.f48568a;
        }

        @Override // rs.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // rs.c
        public void c(ts.o oVar) {
            d.a.a(this, oVar);
        }

        @Override // rs.o.c
        public void d(h0 h0Var) {
            d.a.j(this, h0Var);
        }

        @Override // rs.o.c
        public void e(h0 h0Var) {
            d.a.f(this, h0Var);
        }

        @Override // rs.o.a
        public void f(s sVar) {
            d.a.e(this, sVar);
        }

        @Override // rs.b
        public void g(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // rs.o.d
        public void h(h0 h0Var) {
            e.a.b(this, h0Var);
        }

        @Override // rs.o.a
        public void i(h0 h0Var) {
            d.a.l(this, h0Var);
        }

        @Override // rs.o.a
        public void j(n nVar) {
            d.a.c(this, nVar);
        }

        @Override // rs.o.d
        public void l(h0 h0Var) {
            e.a.d(this, h0Var);
        }

        @Override // rs.o.c
        public void m(h0 h0Var) {
            d.a.g(this, h0Var);
        }

        @Override // rs.f
        public void n(ts.o oVar) {
            d.a.b(this, oVar);
        }

        @Override // rs.o.a
        public void o(h0 h0Var) {
            d.a.d(this, h0Var);
        }

        @Override // rs.o
        public void p(String str) {
            b.a.d(this, str);
        }

        @Override // rs.o.c
        public void q(int i10, int i11) {
            d.a.k(this, i10, i11);
        }

        @Override // rs.o.d
        public void r(h0 h0Var) {
            e.a.c(this, h0Var);
        }

        @Override // rs.o.a
        public void s(f0 f0Var) {
            d.a.h(this, f0Var);
        }

        @Override // rs.o.d
        public void t(n nVar) {
            e.a.a(this, nVar);
        }

        @Override // rs.o.a
        public void u(h0 h0Var) {
            d.a.i(this, h0Var);
        }

        @Override // rs.d
        public void v(ts.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // rs.e
        public void w(ts.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        public ts.f x() {
            return b.a.c(this);
        }

        @Override // rs.b
        /* renamed from: y */
        public a k() {
            return new a(new ts.d());
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public l(ts.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f48567a = actualFormat;
    }

    @Override // rs.a
    public ts.f b() {
        return this.f48567a;
    }

    @Override // rs.a
    /* renamed from: e */
    public k c() {
        k kVar;
        kVar = m.f48583b;
        return kVar;
    }

    @Override // rs.a
    /* renamed from: f */
    public j d(k intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return new j(intermediate);
    }
}
