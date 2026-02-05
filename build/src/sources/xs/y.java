package xs;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import xs.b;
import xs.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y extends xs.a {

    /* renamed from: b  reason: collision with root package name */
    public static final b f54254b = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final zs.f f54255a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements xs.b, c {

        /* renamed from: a  reason: collision with root package name */
        private final zs.d f54256a;

        public a(zs.d actualBuilder) {
            Intrinsics.checkNotNullParameter(actualBuilder, "actualBuilder");
            this.f54256a = actualBuilder;
        }

        @Override // xs.b
        public zs.d a() {
            return this.f54256a;
        }

        @Override // xs.b
        public void b(String str, Function1 function1) {
            b.a.b(this, str, function1);
        }

        @Override // xs.o.a
        public void c(h0 h0Var) {
            c.a.f(this, h0Var);
        }

        @Override // xs.b
        public void i(Function1[] function1Arr, Function1 function1) {
            b.a.a(this, function1Arr, function1);
        }

        @Override // xs.c
        public void l(zs.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            a().a(structure);
        }

        @Override // xs.o
        public void m(String str) {
            b.a.d(this, str);
        }

        @Override // xs.o.a
        public void n(h0 h0Var) {
            c.a.e(this, h0Var);
        }

        @Override // xs.o.a
        public void w(h0 h0Var) {
            c.a.b(this, h0Var);
        }

        public zs.f x() {
            return b.a.c(this);
        }

        @Override // xs.b
        /* renamed from: y */
        public a k() {
            return new a(new zs.d());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final n a(Function1 block) {
            Intrinsics.checkNotNullParameter(block, "block");
            a aVar = new a(new zs.d());
            block.invoke(aVar);
            return new y(aVar.x());
        }

        private b() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public y(zs.f actualFormat) {
        super(null);
        Intrinsics.checkNotNullParameter(actualFormat, "actualFormat");
        this.f54255a = actualFormat;
    }

    @Override // xs.a
    public zs.f b() {
        return this.f54255a;
    }

    @Override // xs.a
    /* renamed from: e */
    public v c() {
        v vVar;
        vVar = z.f54259c;
        return vVar;
    }

    @Override // xs.a
    /* renamed from: f */
    public ws.f d(v intermediate) {
        Intrinsics.checkNotNullParameter(intermediate, "intermediate");
        return intermediate.b();
    }
}
