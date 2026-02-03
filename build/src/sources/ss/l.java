package ss;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import ss.b;
import ss.d;
import ss.e;
import ss.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends ss.a {

    /* renamed from: a  reason: collision with root package name */
    private final us.f f49348a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements b, d, e, o.b {

        /* renamed from: a  reason: collision with root package name */
        private final us.d f49349a;

        public a(us.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f49349a = actualBuilder;
        }

        @Override // ss.b
        public us.d a() {
            return this.f49349a;
        }

        @Override // ss.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // ss.c
        public void c(us.o oVar) {
            d.a.a(this, oVar);
        }

        @Override // ss.o.d
        public void d(h0 h0Var) {
            e.a.b(this, h0Var);
        }

        @Override // ss.o.a
        public void e(h0 h0Var) {
            d.a.i(this, h0Var);
        }

        @Override // ss.b
        public void f(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // ss.o.a
        public void g(f0 f0Var) {
            d.a.h(this, f0Var);
        }

        @Override // ss.f
        public void h(us.o oVar) {
            d.a.b(this, oVar);
        }

        @Override // ss.o.a
        public void i(h0 h0Var) {
            d.a.l(this, h0Var);
        }

        @Override // ss.o.c
        public void k(h0 h0Var) {
            d.a.j(this, h0Var);
        }

        @Override // ss.o.c
        public void l(h0 h0Var) {
            d.a.f(this, h0Var);
        }

        @Override // ss.o.a
        public void m(h0 h0Var) {
            d.a.d(this, h0Var);
        }

        @Override // ss.o.d
        public void n(n nVar) {
            e.a.a(this, nVar);
        }

        @Override // ss.o
        public void o(String str) {
            b.a.d(this, str);
        }

        @Override // ss.o.a
        public void p(s sVar) {
            d.a.e(this, sVar);
        }

        @Override // ss.o.a
        public void q(n nVar) {
            d.a.c(this, nVar);
        }

        @Override // ss.o.c
        public void r(int i10, int i11) {
            d.a.k(this, i10, i11);
        }

        @Override // ss.o.c
        public void s(h0 h0Var) {
            d.a.g(this, h0Var);
        }

        @Override // ss.o.d
        public void t(h0 h0Var) {
            e.a.d(this, h0Var);
        }

        @Override // ss.o.d
        public void u(h0 h0Var) {
            e.a.c(this, h0Var);
        }

        @Override // ss.d
        public void v(us.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // ss.e
        public void w(us.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        public us.f x() {
            return b.a.c(this);
        }

        @Override // ss.b
        /* renamed from: y */
        public a j() {
            return new a(new us.d());
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public l(us.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f49348a = actualFormat;
    }

    @Override // ss.a
    public us.f b() {
        return this.f49348a;
    }

    @Override // ss.a
    /* renamed from: e */
    public k c() {
        k kVar;
        kVar = m.f49364b;
        return kVar;
    }

    @Override // ss.a
    /* renamed from: f */
    public j d(k intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return new j(intermediate);
    }
}
