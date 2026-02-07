package zs;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import zs.b;
import zs.d;
import zs.e;
import zs.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends zs.a {

    /* renamed from: a  reason: collision with root package name */
    private final bt.f f56589a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements b, d, e, o.b {

        /* renamed from: a  reason: collision with root package name */
        private final bt.d f56590a;

        public a(bt.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f56590a = actualBuilder;
        }

        @Override // zs.b
        public bt.d a() {
            return this.f56590a;
        }

        @Override // zs.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // zs.o.d
        public void c(h0 h0Var) {
            e.a.b(this, h0Var);
        }

        @Override // zs.o.c
        public void d(h0 h0Var) {
            d.a.g(this, h0Var);
        }

        @Override // zs.o.d
        public void e(h0 h0Var) {
            e.a.c(this, h0Var);
        }

        @Override // zs.o.a
        public void f(h0 h0Var) {
            d.a.l(this, h0Var);
        }

        @Override // zs.o.d
        public void g(n nVar) {
            e.a.a(this, nVar);
        }

        @Override // zs.o.d
        public void h(h0 h0Var) {
            e.a.d(this, h0Var);
        }

        @Override // zs.o.a
        public void i(s sVar) {
            d.a.e(this, sVar);
        }

        @Override // zs.o.a
        public void j(n nVar) {
            d.a.c(this, nVar);
        }

        @Override // zs.b
        public void k(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // zs.d
        public void l(bt.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // zs.o.a
        public void m(h0 h0Var) {
            d.a.d(this, h0Var);
        }

        @Override // zs.o.c
        public void n(h0 h0Var) {
            d.a.j(this, h0Var);
        }

        @Override // zs.e
        public void o(bt.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // zs.o.c
        public void p(h0 h0Var) {
            d.a.f(this, h0Var);
        }

        @Override // zs.o
        public void r(String str) {
            b.a.d(this, str);
        }

        @Override // zs.o.a
        public void s(h0 h0Var) {
            d.a.i(this, h0Var);
        }

        @Override // zs.o.c
        public void t(int i10, int i11) {
            d.a.k(this, i10, i11);
        }

        @Override // zs.o.a
        public void u(f0 f0Var) {
            d.a.h(this, f0Var);
        }

        @Override // zs.f
        public void v(bt.o oVar) {
            d.a.b(this, oVar);
        }

        @Override // zs.c
        public void w(bt.o oVar) {
            d.a.a(this, oVar);
        }

        public bt.f x() {
            return b.a.c(this);
        }

        @Override // zs.b
        /* renamed from: y */
        public a q() {
            return new a(new bt.d());
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public l(bt.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f56589a = actualFormat;
    }

    @Override // zs.a
    public bt.f b() {
        return this.f56589a;
    }

    @Override // zs.a
    /* renamed from: e */
    public k c() {
        k kVar;
        kVar = m.f56605b;
        return kVar;
    }

    @Override // zs.a
    /* renamed from: f */
    public j d(k intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return new j(intermediate);
    }
}
