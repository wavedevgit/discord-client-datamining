package ss;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import ss.b;
import ss.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o0 extends ss.a {

    /* renamed from: b  reason: collision with root package name */
    public static final b f49367b = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final us.f f49368a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements ss.b, e {

        /* renamed from: a  reason: collision with root package name */
        private final us.d f49369a;

        public a(us.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f49369a = actualBuilder;
        }

        @Override // ss.b
        public us.d a() {
            return this.f49369a;
        }

        @Override // ss.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // ss.o.d
        public void d(h0 h0Var) {
            e.a.b(this, h0Var);
        }

        @Override // ss.b
        public void f(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // ss.o
        public void o(String str) {
            b.a.d(this, str);
        }

        @Override // ss.o.d
        public void t(h0 h0Var) {
            e.a.d(this, h0Var);
        }

        @Override // ss.o.d
        public void u(h0 h0Var) {
            e.a.c(this, h0Var);
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

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final o0 a(Function1 block) {
            Intrinsics.checkNotNullParameter(block, "block");
            a aVar = new a(new us.d());
            block.invoke(aVar);
            return new o0(aVar.x());
        }

        private b() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public o0(us.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f49368a = actualFormat;
    }

    @Override // ss.a
    public us.f b() {
        return this.f49368a;
    }

    @Override // ss.a
    /* renamed from: e */
    public x c() {
        return p0.a();
    }

    @Override // ss.a
    /* renamed from: f */
    public rs.k d(x intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return intermediate.b();
    }
}
