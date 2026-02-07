package jt;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
import kotlinx.serialization.KSerializer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class p implements k2 {

    /* renamed from: a  reason: collision with root package name */
    private final Function1 f31101a;

    /* renamed from: b  reason: collision with root package name */
    private final r f31102b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ KClass f31104e;

        public a(KClass kClass) {
            this.f31104e = kClass;
        }

        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            return new k((KSerializer) p.this.b().invoke(this.f31104e));
        }
    }

    public p(Function1 compute) {
        Intrinsics.checkNotNullParameter(compute, "compute");
        this.f31101a = compute;
        this.f31102b = new r();
    }

    @Override // jt.k2
    public KSerializer a(KClass key) {
        Intrinsics.checkNotNullParameter(key, "key");
        Object obj = this.f31102b.get(ds.a.b(key));
        Intrinsics.checkNotNullExpressionValue(obj, "get(...)");
        e1 e1Var = (e1) obj;
        Object obj2 = e1Var.f31039a.get();
        if (obj2 == null) {
            obj2 = e1Var.a(new a(key));
        }
        return ((k) obj2).f31071a;
    }

    public final Function1 b() {
        return this.f31101a;
    }
}
