package ws;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements v {

    /* renamed from: a  reason: collision with root package name */
    private final Object f52710a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f52711b;

    public g(Object obj, Function1 getter) {
        Intrinsics.checkNotNullParameter(getter, "getter");
        this.f52710a = obj;
        this.f52711b = getter;
    }

    @Override // ws.v
    public boolean test(Object obj) {
        return Intrinsics.areEqual(this.f52711b.invoke(obj), this.f52710a);
    }
}
