package ru;

import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements qu.b {

    /* renamed from: a  reason: collision with root package name */
    private final Function1 f49247a;

    public e(Function1 function1) {
        this.f49247a = function1;
    }

    @Override // qu.b
    public Object f(Object obj, Object obj2) {
        Object firstOrNull = CollectionsKt.firstOrNull(vv.a.c(obj));
        Function1 function1 = this.f49247a;
        if (function1 != null) {
            function1.invoke(firstOrNull);
        }
        return firstOrNull;
    }
}
