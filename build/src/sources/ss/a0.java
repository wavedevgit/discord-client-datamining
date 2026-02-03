package ss;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import ss.b;
import ss.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a0 extends ss.a {

    /* renamed from: b  reason: collision with root package name */
    public static final b f49264b = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final us.f f49265a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements ss.b, f {

        /* renamed from: a  reason: collision with root package name */
        private final us.d f49266a;

        public a(us.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f49266a = actualBuilder;
        }

        @Override // ss.b
        public us.d a() {
            return this.f49266a;
        }

        @Override // ss.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // ss.b
        public void f(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // ss.f
        public void h(us.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // ss.o.c
        public void k(h0 h0Var) {
            f.a.c(this, h0Var);
        }

        @Override // ss.o.c
        public void l(h0 h0Var) {
            f.a.a(this, h0Var);
        }

        @Override // ss.o
        public void o(String str) {
            b.a.d(this, str);
        }

        @Override // ss.o.c
        public void r(int i10, int i11) {
            f.a.d(this, i10, i11);
        }

        @Override // ss.o.c
        public void s(h0 h0Var) {
            f.a.b(this, h0Var);
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

        public final a0 a(Function1 block) {
            Intrinsics.checkNotNullParameter(block, "block");
            a aVar = new a(new us.d());
            block.invoke(aVar);
            return new a0(aVar.x());
        }

        private b() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a0(us.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f49265a = actualFormat;
    }

    @Override // ss.a
    public us.f b() {
        return this.f49265a;
    }

    @Override // ss.a
    /* renamed from: e */
    public w c() {
        return b0.a();
    }

    @Override // ss.a
    /* renamed from: f */
    public rs.i d(w intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return intermediate.f();
    }
}
