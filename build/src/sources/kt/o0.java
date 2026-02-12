package kt;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kt.b;
import kt.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o0 extends kt.a {

    /* renamed from: b  reason: collision with root package name */
    public static final b f35271b = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final mt.f f35272a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements kt.b, e {

        /* renamed from: a  reason: collision with root package name */
        private final mt.d f35273a;

        public a(mt.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f35273a = actualBuilder;
        }

        @Override // kt.b
        public mt.d a() {
            return this.f35273a;
        }

        @Override // kt.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // kt.b
        public void e(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // kt.o.d
        public void j(h0 h0Var) {
            e.a.b(this, h0Var);
        }

        @Override // kt.o
        public void k(String str) {
            b.a.d(this, str);
        }

        @Override // kt.o.d
        public void n(h0 h0Var) {
            e.a.c(this, h0Var);
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

        public final o0 a(Function1 block) {
            Intrinsics.checkNotNullParameter(block, "block");
            a aVar = new a(new mt.d());
            block.invoke(aVar);
            return new o0(aVar.x());
        }

        private b() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public o0(mt.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f35272a = actualFormat;
    }

    @Override // kt.a
    public mt.f b() {
        return this.f35272a;
    }

    @Override // kt.a
    /* renamed from: e */
    public x c() {
        return p0.a();
    }

    @Override // kt.a
    /* renamed from: f */
    public jt.k d(x intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return intermediate.d();
    }
}
