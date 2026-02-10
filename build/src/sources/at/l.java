package at;

import at.b;
import at.d;
import at.e;
import at.o;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends at.a {

    /* renamed from: a  reason: collision with root package name */
    private final ct.f f6119a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements b, d, e, o.b {

        /* renamed from: a  reason: collision with root package name */
        private final ct.d f6120a;

        public a(ct.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f6120a = actualBuilder;
        }

        @Override // at.b
        public ct.d a() {
            return this.f6120a;
        }

        @Override // at.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // at.e
        public void c(ct.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // at.o.d
        public void d(h0 h0Var) {
            e.a.c(this, h0Var);
        }

        @Override // at.c
        public void e(ct.o oVar) {
            d.a.a(this, oVar);
        }

        @Override // at.o.a
        public void f(h0 h0Var) {
            d.a.d(this, h0Var);
        }

        @Override // at.o.d
        public void g(h0 h0Var) {
            e.a.b(this, h0Var);
        }

        @Override // at.f
        public void h(ct.o oVar) {
            d.a.b(this, oVar);
        }

        @Override // at.o.c
        public void i(h0 h0Var) {
            d.a.g(this, h0Var);
        }

        @Override // at.b
        public void j(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // at.o.a
        public void k(s sVar) {
            d.a.e(this, sVar);
        }

        @Override // at.o
        public void m(String str) {
            b.a.d(this, str);
        }

        @Override // at.d
        public void n(ct.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // at.o.c
        public void o(int i10, int i11) {
            d.a.k(this, i10, i11);
        }

        @Override // at.o.a
        public void p(n nVar) {
            d.a.c(this, nVar);
        }

        @Override // at.o.d
        public void q(h0 h0Var) {
            e.a.d(this, h0Var);
        }

        @Override // at.o.d
        public void r(n nVar) {
            e.a.a(this, nVar);
        }

        @Override // at.o.a
        public void s(f0 f0Var) {
            d.a.h(this, f0Var);
        }

        @Override // at.o.a
        public void t(h0 h0Var) {
            d.a.l(this, h0Var);
        }

        @Override // at.o.a
        public void u(h0 h0Var) {
            d.a.i(this, h0Var);
        }

        @Override // at.o.c
        public void v(h0 h0Var) {
            d.a.f(this, h0Var);
        }

        @Override // at.o.c
        public void w(h0 h0Var) {
            d.a.j(this, h0Var);
        }

        public ct.f x() {
            return b.a.c(this);
        }

        @Override // at.b
        /* renamed from: y */
        public a l() {
            return new a(new ct.d());
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public l(ct.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f6119a = actualFormat;
    }

    @Override // at.a
    public ct.f b() {
        return this.f6119a;
    }

    @Override // at.a
    /* renamed from: e */
    public k c() {
        k kVar;
        kVar = m.f6135b;
        return kVar;
    }

    @Override // at.a
    /* renamed from: f */
    public j d(k intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return new j(intermediate);
    }
}
