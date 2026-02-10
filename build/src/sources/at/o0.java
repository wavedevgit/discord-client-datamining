package at;

import at.b;
import at.e;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o0 extends at.a {

    /* renamed from: b  reason: collision with root package name */
    public static final b f6138b = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final ct.f f6139a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements at.b, e {

        /* renamed from: a  reason: collision with root package name */
        private final ct.d f6140a;

        public a(ct.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f6140a = actualBuilder;
        }

        @Override // at.b
        public ct.d a() {
            return this.f6140a;
        }

        @Override // at.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // at.e
        public void c(ct.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // at.o.d
        public void d(h0 h0Var) {
            e.a.c(this, h0Var);
        }

        @Override // at.o.d
        public void g(h0 h0Var) {
            e.a.b(this, h0Var);
        }

        @Override // at.b
        public void j(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // at.o
        public void m(String str) {
            b.a.d(this, str);
        }

        @Override // at.o.d
        public void q(h0 h0Var) {
            e.a.d(this, h0Var);
        }

        public ct.f x() {
            return b.a.c(this);
        }

        @Override // at.b
        /* renamed from: y */
        public a l() {
            return new a(new ct.d());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final o0 a(Function1 block) {
            Intrinsics.checkNotNullParameter(block, "block");
            a aVar = new a(new ct.d());
            block.invoke(aVar);
            return new o0(aVar.x());
        }

        private b() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public o0(ct.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f6139a = actualFormat;
    }

    @Override // at.a
    public ct.f b() {
        return this.f6139a;
    }

    @Override // at.a
    /* renamed from: e */
    public x c() {
        return p0.a();
    }

    @Override // at.a
    /* renamed from: f */
    public zs.k d(x intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return intermediate.d();
    }
}
