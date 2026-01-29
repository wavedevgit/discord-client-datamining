package ts;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements v {

    /* renamed from: a  reason: collision with root package name */
    private final Object f49874a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f49875b;

    public g(Object obj, Function1 getter) {
        Intrinsics.checkNotNullParameter(getter, "getter");
        this.f49874a = obj;
        this.f49875b = getter;
    }

    @Override // ts.v
    public boolean test(Object obj) {
        return Intrinsics.areEqual(this.f49875b.invoke(obj), this.f49874a);
    }
}
