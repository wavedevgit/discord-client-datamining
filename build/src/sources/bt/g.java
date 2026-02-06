package bt;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements v {

    /* renamed from: a  reason: collision with root package name */
    private final Object f7065a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f7066b;

    public g(Object obj, Function1 getter) {
        Intrinsics.checkNotNullParameter(getter, "getter");
        this.f7065a = obj;
        this.f7066b = getter;
    }

    @Override // bt.v
    public boolean test(Object obj) {
        return Intrinsics.areEqual(this.f7066b.invoke(obj), this.f7065a);
    }
}
