package zs;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import zs.b;
import zs.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y extends zs.a {

    /* renamed from: b  reason: collision with root package name */
    public static final b f56615b = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final bt.f f56616a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements zs.b, c {

        /* renamed from: a  reason: collision with root package name */
        private final bt.d f56617a;

        public a(bt.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f56617a = actualBuilder;
        }

        @Override // zs.b
        public bt.d a() {
            return this.f56617a;
        }

        @Override // zs.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // zs.o.a
        public void f(h0 h0Var) {
            c.a.f(this, h0Var);
        }

        @Override // zs.b
        public void k(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // zs.o.a
        public void m(h0 h0Var) {
            c.a.b(this, h0Var);
        }

        @Override // zs.o
        public void r(String str) {
            b.a.d(this, str);
        }

        @Override // zs.o.a
        public void s(h0 h0Var) {
            c.a.e(this, h0Var);
        }

        @Override // zs.c
        public void w(bt.o structure) {
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

        public final n a(Function1 block) {
            Intrinsics.checkNotNullParameter(block, "block");
            a aVar = new a(new bt.d());
            block.invoke(aVar);
            return new y(aVar.x());
        }

        private b() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public y(bt.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f56616a = actualFormat;
    }

    @Override // zs.a
    public bt.f b() {
        return this.f56616a;
    }

    @Override // zs.a
    /* renamed from: e */
    public v c() {
        v vVar;
        vVar = z.f56620c;
        return vVar;
    }

    @Override // zs.a
    /* renamed from: f */
    public ys.f d(v intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return intermediate.b();
    }
}
