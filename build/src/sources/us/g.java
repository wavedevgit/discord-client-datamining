package us;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements v {

    /* renamed from: a  reason: collision with root package name */
    private final Object f50648a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f50649b;

    public g(Object obj, Function1 getter) {
        Intrinsics.checkNotNullParameter(getter, "getter");
        this.f50648a = obj;
        this.f50649b = getter;
    }

    @Override // us.v
    public boolean test(Object obj) {
        return Intrinsics.areEqual(this.f50649b.invoke(obj), this.f50648a);
    }
}
