package at;

import at.b;
import at.c;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y extends at.a {

    /* renamed from: b  reason: collision with root package name */
    public static final b f6193b = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final ct.f f6194a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements at.b, c {

        /* renamed from: a  reason: collision with root package name */
        private final ct.d f6195a;

        public a(ct.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f6195a = actualBuilder;
        }

        @Override // at.b
        public ct.d a() {
            return this.f6195a;
        }

        @Override // at.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // at.c
        public void e(ct.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // at.o.a
        public void f(h0 h0Var) {
            c.a.b(this, h0Var);
        }

        @Override // at.b
        public void j(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // at.o
        public void m(String str) {
            b.a.d(this, str);
        }

        @Override // at.o.a
        public void t(h0 h0Var) {
            c.a.f(this, h0Var);
        }

        @Override // at.o.a
        public void u(h0 h0Var) {
            c.a.e(this, h0Var);
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

        public final n a(Function1 block) {
            Intrinsics.checkNotNullParameter(block, "block");
            a aVar = new a(new ct.d());
            block.invoke(aVar);
            return new y(aVar.x());
        }

        private b() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public y(ct.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f6194a = actualFormat;
    }

    @Override // at.a
    public ct.f b() {
        return this.f6194a;
    }

    @Override // at.a
    /* renamed from: e */
    public v c() {
        v vVar;
        vVar = z.f6198c;
        return vVar;
    }

    @Override // at.a
    /* renamed from: f */
    public zs.f d(v intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return intermediate.b();
    }
}
