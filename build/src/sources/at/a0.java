package at;

import at.b;
import at.f;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a0 extends at.a {

    /* renamed from: b  reason: collision with root package name */
    public static final b f6035b = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final ct.f f6036a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements at.b, f {

        /* renamed from: a  reason: collision with root package name */
        private final ct.d f6037a;

        public a(ct.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f6037a = actualBuilder;
        }

        @Override // at.b
        public ct.d a() {
            return this.f6037a;
        }

        @Override // at.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // at.f
        public void h(ct.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // at.o.c
        public void i(h0 h0Var) {
            f.a.b(this, h0Var);
        }

        @Override // at.b
        public void j(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // at.o
        public void m(String str) {
            b.a.d(this, str);
        }

        @Override // at.o.c
        public void o(int i10, int i11) {
            f.a.d(this, i10, i11);
        }

        @Override // at.o.c
        public void v(h0 h0Var) {
            f.a.a(this, h0Var);
        }

        @Override // at.o.c
        public void w(h0 h0Var) {
            f.a.c(this, h0Var);
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

        public final a0 a(Function1 block) {
            Intrinsics.checkNotNullParameter(block, "block");
            a aVar = new a(new ct.d());
            block.invoke(aVar);
            return new a0(aVar.x());
        }

        private b() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a0(ct.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f6036a = actualFormat;
    }

    @Override // at.a
    public ct.f b() {
        return this.f6036a;
    }

    @Override // at.a
    /* renamed from: e */
    public w c() {
        return b0.a();
    }

    @Override // at.a
    /* renamed from: f */
    public zs.i d(w intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return intermediate.c();
    }
}
