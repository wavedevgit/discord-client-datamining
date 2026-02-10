package ct;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements v {

    /* renamed from: a  reason: collision with root package name */
    private final Object f20220a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f20221b;

    public g(Object obj, Function1 getter) {
        Intrinsics.checkNotNullParameter(getter, "getter");
        this.f20220a = obj;
        this.f20221b = getter;
    }

    @Override // ct.v
    public boolean test(Object obj) {
        return Intrinsics.areEqual(this.f20221b.invoke(obj), this.f20220a);
    }
}
