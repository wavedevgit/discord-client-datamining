package ss;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import ss.b;
import ss.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y extends ss.a {

    /* renamed from: b  reason: collision with root package name */
    public static final b f49422b = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final us.f f49423a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements ss.b, c {

        /* renamed from: a  reason: collision with root package name */
        private final us.d f49424a;

        public a(us.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f49424a = actualBuilder;
        }

        @Override // ss.b
        public us.d a() {
            return this.f49424a;
        }

        @Override // ss.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // ss.c
        public void c(us.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // ss.o.a
        public void e(h0 h0Var) {
            c.a.e(this, h0Var);
        }

        @Override // ss.b
        public void f(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // ss.o.a
        public void i(h0 h0Var) {
            c.a.f(this, h0Var);
        }

        @Override // ss.o.a
        public void m(h0 h0Var) {
            c.a.b(this, h0Var);
        }

        @Override // ss.o
        public void o(String str) {
            b.a.d(this, str);
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

        public final n a(Function1 block) {
            Intrinsics.checkNotNullParameter(block, "block");
            a aVar = new a(new us.d());
            block.invoke(aVar);
            return new y(aVar.x());
        }

        private b() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public y(us.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f49423a = actualFormat;
    }

    @Override // ss.a
    public us.f b() {
        return this.f49423a;
    }

    @Override // ss.a
    /* renamed from: e */
    public v c() {
        v vVar;
        vVar = z.f49427c;
        return vVar;
    }

    @Override // ss.a
    /* renamed from: f */
    public rs.f d(v intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return intermediate.b();
    }
}
