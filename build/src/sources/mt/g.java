package mt;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements v {

    /* renamed from: a  reason: collision with root package name */
    private final Object f36619a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f36620b;

    public g(Object obj, Function1 getter) {
        Intrinsics.checkNotNullParameter(getter, "getter");
        this.f36619a = obj;
        this.f36620b = getter;
    }

    @Override // mt.v
    public boolean test(Object obj) {
        return Intrinsics.areEqual(this.f36620b.invoke(obj), this.f36619a);
    }
}
