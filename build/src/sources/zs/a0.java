package zs;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import zs.b;
import zs.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a0 extends zs.a {

    /* renamed from: b  reason: collision with root package name */
    public static final b f56505b = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final bt.f f56506a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements zs.b, f {

        /* renamed from: a  reason: collision with root package name */
        private final bt.d f56507a;

        public a(bt.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f56507a = actualBuilder;
        }

        @Override // zs.b
        public bt.d a() {
            return this.f56507a;
        }

        @Override // zs.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // zs.o.c
        public void d(h0 h0Var) {
            f.a.b(this, h0Var);
        }

        @Override // zs.b
        public void k(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // zs.o.c
        public void n(h0 h0Var) {
            f.a.c(this, h0Var);
        }

        @Override // zs.o.c
        public void p(h0 h0Var) {
            f.a.a(this, h0Var);
        }

        @Override // zs.o
        public void r(String str) {
            b.a.d(this, str);
        }

        @Override // zs.o.c
        public void t(int i10, int i11) {
            f.a.d(this, i10, i11);
        }

        @Override // zs.f
        public void v(bt.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
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

        public final a0 a(Function1 block) {
            Intrinsics.checkNotNullParameter(block, "block");
            a aVar = new a(new bt.d());
            block.invoke(aVar);
            return new a0(aVar.x());
        }

        private b() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a0(bt.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f56506a = actualFormat;
    }

    @Override // zs.a
    public bt.f b() {
        return this.f56506a;
    }

    @Override // zs.a
    /* renamed from: e */
    public w c() {
        return b0.a();
    }

    @Override // zs.a
    /* renamed from: f */
    public ys.i d(w intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return intermediate.f();
    }
}
