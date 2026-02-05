package xs;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import xs.b;
import xs.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a0 extends xs.a {

    /* renamed from: b  reason: collision with root package name */
    public static final b f54096b = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final zs.f f54097a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements xs.b, f {

        /* renamed from: a  reason: collision with root package name */
        private final zs.d f54098a;

        public a(zs.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f54098a = actualBuilder;
        }

        @Override // xs.b
        public zs.d a() {
            return this.f54098a;
        }

        @Override // xs.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // xs.o.c
        public void h(h0 h0Var) {
            f.a.b(this, h0Var);
        }

        @Override // xs.b
        public void i(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // xs.o
        public void m(String str) {
            b.a.d(this, str);
        }

        @Override // xs.o.c
        public void p(int i10, int i11) {
            f.a.d(this, i10, i11);
        }

        @Override // xs.f
        public void q(zs.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // xs.o.c
        public void u(h0 h0Var) {
            f.a.a(this, h0Var);
        }

        @Override // xs.o.c
        public void v(h0 h0Var) {
            f.a.c(this, h0Var);
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

        public final a0 a(Function1 block) {
            Intrinsics.checkNotNullParameter(block, "block");
            a aVar = new a(new zs.d());
            block.invoke(aVar);
            return new a0(aVar.x());
        }

        private b() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a0(zs.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f54097a = actualFormat;
    }

    @Override // xs.a
    public zs.f b() {
        return this.f54097a;
    }

    @Override // xs.a
    /* renamed from: e */
    public w c() {
        return b0.a();
    }

    @Override // xs.a
    /* renamed from: f */
    public ws.i d(w intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return intermediate.f();
    }
}
