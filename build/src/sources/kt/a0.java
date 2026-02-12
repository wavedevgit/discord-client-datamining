package kt;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kt.b;
import kt.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a0 extends kt.a {

    /* renamed from: b  reason: collision with root package name */
    public static final b f35168b = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final mt.f f35169a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements kt.b, f {

        /* renamed from: a  reason: collision with root package name */
        private final mt.d f35170a;

        public a(mt.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f35170a = actualBuilder;
        }

        @Override // kt.b
        public mt.d a() {
            return this.f35170a;
        }

        @Override // kt.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // kt.f
        public void d(mt.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // kt.b
        public void e(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // kt.o
        public void k(String str) {
            b.a.d(this, str);
        }

        @Override // kt.o.c
        public void o(int i10, int i11) {
            f.a.d(this, i10, i11);
        }

        @Override // kt.o.c
        public void p(h0 h0Var) {
            f.a.b(this, h0Var);
        }

        @Override // kt.o.c
        public void t(h0 h0Var) {
            f.a.c(this, h0Var);
        }

        @Override // kt.o.c
        public void v(h0 h0Var) {
            f.a.a(this, h0Var);
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

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final a0 a(Function1 block) {
            Intrinsics.checkNotNullParameter(block, "block");
            a aVar = new a(new mt.d());
            block.invoke(aVar);
            return new a0(aVar.x());
        }

        private b() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a0(mt.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f35169a = actualFormat;
    }

    @Override // kt.a
    public mt.f b() {
        return this.f35169a;
    }

    @Override // kt.a
    /* renamed from: e */
    public w c() {
        return b0.a();
    }

    @Override // kt.a
    /* renamed from: f */
    public jt.i d(w intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return intermediate.c();
    }
}
