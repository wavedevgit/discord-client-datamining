package rs;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import rs.b;
import rs.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a0 extends rs.a {

    /* renamed from: b  reason: collision with root package name */
    public static final b f48467b = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final ts.f f48468a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements rs.b, f {

        /* renamed from: a  reason: collision with root package name */
        private final ts.d f48469a;

        public a(ts.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f48469a = actualBuilder;
        }

        @Override // rs.b
        public ts.d a() {
            return this.f48469a;
        }

        @Override // rs.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // rs.o.c
        public void d(h0 h0Var) {
            f.a.c(this, h0Var);
        }

        @Override // rs.o.c
        public void e(h0 h0Var) {
            f.a.a(this, h0Var);
        }

        @Override // rs.b
        public void g(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // rs.o.c
        public void m(h0 h0Var) {
            f.a.b(this, h0Var);
        }

        @Override // rs.f
        public void n(ts.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // rs.o
        public void p(String str) {
            b.a.d(this, str);
        }

        @Override // rs.o.c
        public void q(int i10, int i11) {
            f.a.d(this, i10, i11);
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

        public final a0 a(Function1 block) {
            Intrinsics.checkNotNullParameter(block, "block");
            a aVar = new a(new ts.d());
            block.invoke(aVar);
            return new a0(aVar.x());
        }

        private b() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a0(ts.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f48468a = actualFormat;
    }

    @Override // rs.a
    public ts.f b() {
        return this.f48468a;
    }

    @Override // rs.a
    /* renamed from: e */
    public w c() {
        return b0.a();
    }

    @Override // rs.a
    /* renamed from: f */
    public qs.i d(w intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return intermediate.f();
    }
}
