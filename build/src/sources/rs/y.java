package rs;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import rs.b;
import rs.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y extends rs.a {

    /* renamed from: b  reason: collision with root package name */
    public static final b f48625b = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final ts.f f48626a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements rs.b, c {

        /* renamed from: a  reason: collision with root package name */
        private final ts.d f48627a;

        public a(ts.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f48627a = actualBuilder;
        }

        @Override // rs.b
        public ts.d a() {
            return this.f48627a;
        }

        @Override // rs.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // rs.c
        public void c(ts.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // rs.b
        public void g(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // rs.o.a
        public void i(h0 h0Var) {
            c.a.f(this, h0Var);
        }

        @Override // rs.o.a
        public void o(h0 h0Var) {
            c.a.b(this, h0Var);
        }

        @Override // rs.o
        public void p(String str) {
            b.a.d(this, str);
        }

        @Override // rs.o.a
        public void u(h0 h0Var) {
            c.a.e(this, h0Var);
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

        public final n a(Function1 block) {
            Intrinsics.checkNotNullParameter(block, "block");
            a aVar = new a(new ts.d());
            block.invoke(aVar);
            return new y(aVar.x());
        }

        private b() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public y(ts.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f48626a = actualFormat;
    }

    @Override // rs.a
    public ts.f b() {
        return this.f48626a;
    }

    @Override // rs.a
    /* renamed from: e */
    public v c() {
        v vVar;
        vVar = z.f48630c;
        return vVar;
    }

    @Override // rs.a
    /* renamed from: f */
    public qs.f d(v intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return intermediate.b();
    }
}
