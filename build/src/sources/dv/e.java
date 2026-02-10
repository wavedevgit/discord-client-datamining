package dv;

import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements cv.b {

    /* renamed from: a  reason: collision with root package name */
    private final Function1 f22165a;

    public e(Function1 function1) {
        this.f22165a = function1;
    }

    @Override // cv.b
    public Object f(Object obj, Object obj2) {
        Object firstOrNull = CollectionsKt.firstOrNull(mw.a.c(obj));
        Function1 function1 = this.f22165a;
        if (function1 != null) {
            function1.invoke(firstOrNull);
        }
        return firstOrNull;
    }
}
