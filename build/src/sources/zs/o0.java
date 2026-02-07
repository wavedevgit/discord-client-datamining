package zs;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import zs.b;
import zs.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o0 extends zs.a {

    /* renamed from: b  reason: collision with root package name */
    public static final b f56608b = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final bt.f f56609a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements zs.b, e {

        /* renamed from: a  reason: collision with root package name */
        private final bt.d f56610a;

        public a(bt.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f56610a = actualBuilder;
        }

        @Override // zs.b
        public bt.d a() {
            return this.f56610a;
        }

        @Override // zs.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // zs.o.d
        public void c(h0 h0Var) {
            e.a.b(this, h0Var);
        }

        @Override // zs.o.d
        public void e(h0 h0Var) {
            e.a.c(this, h0Var);
        }

        @Override // zs.o.d
        public void h(h0 h0Var) {
            e.a.d(this, h0Var);
        }

        @Override // zs.b
        public void k(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // zs.e
        public void o(bt.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // zs.o
        public void r(String str) {
            b.a.d(this, str);
        }

        public bt.f x() {
            return b.a.c(this);
        }

        @Override // zs.b
        /* renamed from: y */
        public a q() {
            return new a(new bt.d());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final o0 a(Function1 block) {
            Intrinsics.checkNotNullParameter(block, "block");
            a aVar = new a(new bt.d());
            block.invoke(aVar);
            return new o0(aVar.x());
        }

        private b() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public o0(bt.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f56609a = actualFormat;
    }

    @Override // zs.a
    public bt.f b() {
        return this.f56609a;
    }

    @Override // zs.a
    /* renamed from: e */
    public x c() {
        return p0.a();
    }

    @Override // zs.a
    /* renamed from: f */
    public ys.k d(x intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return intermediate.c();
    }
}
