package us;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import us.b;
import us.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y extends us.a {

    /* renamed from: b  reason: collision with root package name */
    public static final b f51018b = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final ws.f f51019a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements us.b, c {

        /* renamed from: a  reason: collision with root package name */
        private final ws.d f51020a;

        public a(ws.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f51020a = actualBuilder;
        }

        @Override // us.b
        public ws.d a() {
            return this.f51020a;
        }

        @Override // us.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // us.b
        public void f(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // us.c
        public void h(ws.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // us.o
        public void k(String str) {
            b.a.d(this, str);
        }

        @Override // us.o.a
        public void p(h0 h0Var) {
            c.a.f(this, h0Var);
        }

        @Override // us.o.a
        public void u(h0 h0Var) {
            c.a.b(this, h0Var);
        }

        @Override // us.o.a
        public void v(h0 h0Var) {
            c.a.e(this, h0Var);
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

        public final n a(Function1 block) {
            Intrinsics.checkNotNullParameter(block, "block");
            a aVar = new a(new ws.d());
            block.invoke(aVar);
            return new y(aVar.x());
        }

        private b() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public y(ws.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f51019a = actualFormat;
    }

    @Override // us.a
    public ws.f b() {
        return this.f51019a;
    }

    @Override // us.a
    /* renamed from: e */
    public v c() {
        v vVar;
        vVar = z.f51023c;
        return vVar;
    }

    @Override // us.a
    /* renamed from: f */
    public ts.f d(v intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return intermediate.b();
    }
}
