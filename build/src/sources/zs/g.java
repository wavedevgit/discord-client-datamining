package zs;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements v {

    /* renamed from: a  reason: collision with root package name */
    private final Object f56236a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f56237b;

    public g(Object obj, Function1 getter) {
        Intrinsics.checkNotNullParameter(getter, "getter");
        this.f56236a = obj;
        this.f56237b = getter;
    }

    @Override // zs.v
    public boolean test(Object obj) {
        return Intrinsics.areEqual(this.f56237b.invoke(obj), this.f56236a);
    }
}
