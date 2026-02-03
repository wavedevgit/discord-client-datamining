package us;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import us.b;
import us.d;
import us.e;
import us.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends us.a {

    /* renamed from: a  reason: collision with root package name */
    private final ws.f f50944a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements b, d, e, o.b {

        /* renamed from: a  reason: collision with root package name */
        private final ws.d f50945a;

        public a(ws.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f50945a = actualBuilder;
        }

        @Override // us.b
        public ws.d a() {
            return this.f50945a;
        }

        @Override // us.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // us.o.a
        public void c(s sVar) {
            d.a.e(this, sVar);
        }

        @Override // us.o.d
        public void d(h0 h0Var) {
            e.a.c(this, h0Var);
        }

        @Override // us.o.a
        public void e(f0 f0Var) {
            d.a.h(this, f0Var);
        }

        @Override // us.b
        public void f(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // us.f
        public void g(ws.o oVar) {
            d.a.b(this, oVar);
        }

        @Override // us.c
        public void h(ws.o oVar) {
            d.a.a(this, oVar);
        }

        @Override // us.o.d
        public void j(h0 h0Var) {
            e.a.d(this, h0Var);
        }

        @Override // us.o
        public void k(String str) {
            b.a.d(this, str);
        }

        @Override // us.o.c
        public void l(h0 h0Var) {
            d.a.j(this, h0Var);
        }

        @Override // us.o.c
        public void m(h0 h0Var) {
            d.a.f(this, h0Var);
        }

        @Override // us.o.c
        public void n(h0 h0Var) {
            d.a.g(this, h0Var);
        }

        @Override // us.o.c
        public void o(int i10, int i11) {
            d.a.k(this, i10, i11);
        }

        @Override // us.o.a
        public void p(h0 h0Var) {
            d.a.l(this, h0Var);
        }

        @Override // us.o.d
        public void q(h0 h0Var) {
            e.a.b(this, h0Var);
        }

        @Override // us.o.d
        public void r(n nVar) {
            e.a.a(this, nVar);
        }

        @Override // us.e
        public void s(ws.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // us.o.a
        public void t(n nVar) {
            d.a.c(this, nVar);
        }

        @Override // us.o.a
        public void u(h0 h0Var) {
            d.a.d(this, h0Var);
        }

        @Override // us.o.a
        public void v(h0 h0Var) {
            d.a.i(this, h0Var);
        }

        @Override // us.d
        public void w(ws.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        public ws.f x() {
            return b.a.c(this);
        }

        @Override // us.b
        /* renamed from: y */
        public a i() {
            return new a(new ws.d());
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public l(ws.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f50944a = actualFormat;
    }

    @Override // us.a
    public ws.f b() {
        return this.f50944a;
    }

    @Override // us.a
    /* renamed from: e */
    public k c() {
        k kVar;
        kVar = m.f50960b;
        return kVar;
    }

    @Override // us.a
    /* renamed from: f */
    public j d(k intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return new j(intermediate);
    }
}
