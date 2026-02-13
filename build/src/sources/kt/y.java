package kt;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kt.b;
import kt.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y extends kt.a {

    /* renamed from: b  reason: collision with root package name */
    public static final b f35894b = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final mt.f f35895a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements kt.b, c {

        /* renamed from: a  reason: collision with root package name */
        private final mt.d f35896a;

        public a(mt.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f35896a = actualBuilder;
        }

        @Override // kt.b
        public mt.d a() {
            return this.f35896a;
        }

        @Override // kt.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // kt.o.a
        public void c(h0 h0Var) {
            c.a.e(this, h0Var);
        }

        @Override // kt.b
        public void e(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // kt.c
        public void f(mt.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // kt.o
        public void k(String str) {
            b.a.d(this, str);
        }

        @Override // kt.o.a
        public void m(h0 h0Var) {
            c.a.f(this, h0Var);
        }

        @Override // kt.o.a
        public void w(h0 h0Var) {
            c.a.b(this, h0Var);
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

        public final n a(Function1 block) {
            Intrinsics.checkNotNullParameter(block, "block");
            a aVar = new a(new mt.d());
            block.invoke(aVar);
            return new y(aVar.x());
        }

        private b() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public y(mt.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f35895a = actualFormat;
    }

    @Override // kt.a
    public mt.f b() {
        return this.f35895a;
    }

    @Override // kt.a
    /* renamed from: e */
    public v c() {
        v vVar;
        vVar = z.f35899c;
        return vVar;
    }

    @Override // kt.a
    /* renamed from: f */
    public jt.f d(v intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return intermediate.b();
    }
}
