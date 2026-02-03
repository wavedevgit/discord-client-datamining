package mu;

import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements lu.b {

    /* renamed from: a  reason: collision with root package name */
    private final Function1 f39443a;

    public e(Function1 function1) {
        this.f39443a = function1;
    }

    @Override // lu.b
    public Object f(Object obj, Object obj2) {
        Object firstOrNull = CollectionsKt.firstOrNull(qv.a.c(obj));
        Function1 function1 = this.f39443a;
        if (function1 != null) {
            function1.invoke(firstOrNull);
        }
        return firstOrNull;
    }
}
