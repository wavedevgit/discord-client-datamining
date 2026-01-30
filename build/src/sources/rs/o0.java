package rs;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import rs.b;
import rs.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o0 extends rs.a {

    /* renamed from: b  reason: collision with root package name */
    public static final b f48586b = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final ts.f f48587a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements rs.b, e {

        /* renamed from: a  reason: collision with root package name */
        private final ts.d f48588a;

        public a(ts.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f48588a = actualBuilder;
        }

        @Override // rs.b
        public ts.d a() {
            return this.f48588a;
        }

        @Override // rs.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // rs.b
        public void g(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // rs.o.d
        public void h(h0 h0Var) {
            e.a.b(this, h0Var);
        }

        @Override // rs.o.d
        public void l(h0 h0Var) {
            e.a.d(this, h0Var);
        }

        @Override // rs.o
        public void p(String str) {
            b.a.d(this, str);
        }

        @Override // rs.o.d
        public void r(h0 h0Var) {
            e.a.c(this, h0Var);
        }

        @Override // rs.e
        public void w(ts.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        public ts.f x() {
            return b.a.c(this);
        }

        @Override // rs.b
        /* renamed from: y */
        public a k() {
            return new a(new ts.d());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final o0 a(Function1 block) {
            Intrinsics.checkNotNullParameter(block, "block");
            a aVar = new a(new ts.d());
            block.invoke(aVar);
            return new o0(aVar.x());
        }

        private b() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public o0(ts.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f48587a = actualFormat;
    }

    @Override // rs.a
    public ts.f b() {
        return this.f48587a;
    }

    @Override // rs.a
    /* renamed from: e */
    public x c() {
        return p0.a();
    }

    @Override // rs.a
    /* renamed from: f */
    public qs.k d(x intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return intermediate.c();
    }
}
