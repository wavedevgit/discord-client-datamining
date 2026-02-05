package xs;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import xs.b;
import xs.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o0 extends xs.a {

    /* renamed from: b  reason: collision with root package name */
    public static final b f54199b = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final zs.f f54200a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements xs.b, e {

        /* renamed from: a  reason: collision with root package name */
        private final zs.d f54201a;

        public a(zs.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f54201a = actualBuilder;
        }

        @Override // xs.b
        public zs.d a() {
            return this.f54201a;
        }

        @Override // xs.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // xs.o.d
        public void f(h0 h0Var) {
            e.a.d(this, h0Var);
        }

        @Override // xs.o.d
        public void g(h0 h0Var) {
            e.a.b(this, h0Var);
        }

        @Override // xs.b
        public void i(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // xs.o.d
        public void j(h0 h0Var) {
            e.a.c(this, h0Var);
        }

        @Override // xs.o
        public void m(String str) {
            b.a.d(this, str);
        }

        @Override // xs.e
        public void o(zs.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
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

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final o0 a(Function1 block) {
            Intrinsics.checkNotNullParameter(block, "block");
            a aVar = new a(new zs.d());
            block.invoke(aVar);
            return new o0(aVar.x());
        }

        private b() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public o0(zs.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f54200a = actualFormat;
    }

    @Override // xs.a
    public zs.f b() {
        return this.f54200a;
    }

    @Override // xs.a
    /* renamed from: e */
    public x c() {
        return p0.a();
    }

    @Override // xs.a
    /* renamed from: f */
    public ws.k d(x intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return intermediate.c();
    }
}
