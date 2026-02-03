package dt;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
import kotlinx.serialization.KSerializer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class p implements k2 {

    /* renamed from: a  reason: collision with root package name */
    private final Function1 f20990a;

    /* renamed from: b  reason: collision with root package name */
    private final r f20991b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ KClass f20993e;

        public a(KClass kClass) {
            this.f20993e = kClass;
        }

        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            return new k((KSerializer) p.this.b().invoke(this.f20993e));
        }
    }

    public p(Function1 compute) {
        Intrinsics.checkNotNullParameter(compute, "compute");
        this.f20990a = compute;
        this.f20991b = new r();
    }

    @Override // dt.k2
    public KSerializer a(KClass key) {
        Intrinsics.checkNotNullParameter(key, "key");
        Object obj = this.f20991b.get(yr.a.b(key));
        Intrinsics.checkNotNullExpressionValue(obj, "get(...)");
        e1 e1Var = (e1) obj;
        Object obj2 = e1Var.f20928a.get();
        if (obj2 == null) {
            obj2 = e1Var.a(new a(key));
        }
        return ((k) obj2).f20960a;
    }

    public final Function1 b() {
        return this.f20990a;
    }
}
