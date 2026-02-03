package us;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import us.b;
import us.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a0 extends us.a {

    /* renamed from: b  reason: collision with root package name */
    public static final b f50860b = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final ws.f f50861a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements us.b, f {

        /* renamed from: a  reason: collision with root package name */
        private final ws.d f50862a;

        public a(ws.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f50862a = actualBuilder;
        }

        @Override // us.b
        public ws.d a() {
            return this.f50862a;
        }

        @Override // us.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // us.b
        public void f(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // us.f
        public void g(ws.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // us.o
        public void k(String str) {
            b.a.d(this, str);
        }

        @Override // us.o.c
        public void l(h0 h0Var) {
            f.a.c(this, h0Var);
        }

        @Override // us.o.c
        public void m(h0 h0Var) {
            f.a.a(this, h0Var);
        }

        @Override // us.o.c
        public void n(h0 h0Var) {
            f.a.b(this, h0Var);
        }

        @Override // us.o.c
        public void o(int i10, int i11) {
            f.a.d(this, i10, i11);
        }

        public ws.f x() {
            return b.a.c(this);
        }

        @Override // us.b
        /* renamed from: y */
        public a i() {
            return new a(new ws.d());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final a0 a(Function1 block) {
            Intrinsics.checkNotNullParameter(block, "block");
            a aVar = new a(new ws.d());
            block.invoke(aVar);
            return new a0(aVar.x());
        }

        private b() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a0(ws.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f50861a = actualFormat;
    }

    @Override // us.a
    public ws.f b() {
        return this.f50861a;
    }

    @Override // us.a
    /* renamed from: e */
    public w c() {
        return b0.a();
    }

    @Override // us.a
    /* renamed from: f */
    public ts.i d(w intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return intermediate.f();
    }
}
