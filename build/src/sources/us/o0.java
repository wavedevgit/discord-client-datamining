package us;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import us.b;
import us.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o0 extends us.a {

    /* renamed from: b  reason: collision with root package name */
    public static final b f50960b = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final ws.f f50961a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements us.b, e {

        /* renamed from: a  reason: collision with root package name */
        private final ws.d f50962a;

        public a(ws.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f50962a = actualBuilder;
        }

        @Override // us.b
        public ws.d a() {
            return this.f50962a;
        }

        @Override // us.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // us.o.d
        public void d(h0 h0Var) {
            e.a.c(this, h0Var);
        }

        @Override // us.b
        public void f(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // us.o.d
        public void j(h0 h0Var) {
            e.a.d(this, h0Var);
        }

        @Override // us.o
        public void k(String str) {
            b.a.d(this, str);
        }

        @Override // us.o.d
        public void q(h0 h0Var) {
            e.a.b(this, h0Var);
        }

        @Override // us.e
        public void s(ws.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
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

        public final o0 a(Function1 block) {
            Intrinsics.checkNotNullParameter(block, "block");
            a aVar = new a(new ws.d());
            block.invoke(aVar);
            return new o0(aVar.x());
        }

        private b() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public o0(ws.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f50961a = actualFormat;
    }

    @Override // us.a
    public ws.f b() {
        return this.f50961a;
    }

    @Override // us.a
    /* renamed from: e */
    public x c() {
        return p0.a();
    }

    @Override // us.a
    /* renamed from: f */
    public ts.k d(x intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return intermediate.c();
    }
}
