package kt;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kt.b;
import kt.d;
import kt.e;
import kt.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends kt.a {

    /* renamed from: a  reason: collision with root package name */
    private final mt.f f35820a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements b, d, e, o.b {

        /* renamed from: a  reason: collision with root package name */
        private final mt.d f35821a;

        public a(mt.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f35821a = actualBuilder;
        }

        @Override // kt.b
        public mt.d a() {
            return this.f35821a;
        }

        @Override // kt.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // kt.o.a
        public void c(h0 h0Var) {
            d.a.i(this, h0Var);
        }

        @Override // kt.f
        public void d(mt.o oVar) {
            d.a.b(this, oVar);
        }

        @Override // kt.b
        public void e(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // kt.c
        public void f(mt.o oVar) {
            d.a.a(this, oVar);
        }

        @Override // kt.o.a
        public void h(f0 f0Var) {
            d.a.h(this, f0Var);
        }

        @Override // kt.o.a
        public void i(s sVar) {
            d.a.e(this, sVar);
        }

        @Override // kt.o.d
        public void j(h0 h0Var) {
            e.a.b(this, h0Var);
        }

        @Override // kt.o
        public void k(String str) {
            b.a.d(this, str);
        }

        @Override // kt.o.a
        public void l(n nVar) {
            d.a.c(this, nVar);
        }

        @Override // kt.o.a
        public void m(h0 h0Var) {
            d.a.l(this, h0Var);
        }

        @Override // kt.o.d
        public void n(h0 h0Var) {
            e.a.c(this, h0Var);
        }

        @Override // kt.o.c
        public void o(int i10, int i11) {
            d.a.k(this, i10, i11);
        }

        @Override // kt.o.c
        public void p(h0 h0Var) {
            d.a.g(this, h0Var);
        }

        @Override // kt.o.d
        public void q(n nVar) {
            e.a.a(this, nVar);
        }

        @Override // kt.o.d
        public void r(h0 h0Var) {
            e.a.d(this, h0Var);
        }

        @Override // kt.e
        public void s(mt.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // kt.o.c
        public void t(h0 h0Var) {
            d.a.j(this, h0Var);
        }

        @Override // kt.d
        public void u(mt.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // kt.o.c
        public void v(h0 h0Var) {
            d.a.f(this, h0Var);
        }

        @Override // kt.o.a
        public void w(h0 h0Var) {
            d.a.d(this, h0Var);
        }

        public mt.f x() {
            return b.a.c(this);
        }

        @Override // kt.b
        /* renamed from: y */
        public a g() {
            return new a(new mt.d());
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public l(mt.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f35820a = actualFormat;
    }

    @Override // kt.a
    public mt.f b() {
        return this.f35820a;
    }

    @Override // kt.a
    /* renamed from: e */
    public k c() {
        k kVar;
        kVar = m.f35836b;
        return kVar;
    }

    @Override // kt.a
    /* renamed from: f */
    public j d(k intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return new j(intermediate);
    }
}
