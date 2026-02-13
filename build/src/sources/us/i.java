package us;

import java.util.concurrent.ConcurrentHashMap;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class i extends a {

    /* renamed from: a  reason: collision with root package name */
    private final Function1 f51627a;

    /* renamed from: b  reason: collision with root package name */
    private final ConcurrentHashMap f51628b;

    public i(Function1 compute) {
        Intrinsics.checkNotNullParameter(compute, "compute");
        this.f51627a = compute;
        this.f51628b = new ConcurrentHashMap();
    }

    @Override // us.a
    public Object a(Class key) {
        Intrinsics.checkNotNullParameter(key, "key");
        ConcurrentHashMap concurrentHashMap = this.f51628b;
        Object obj = concurrentHashMap.get(key);
        if (obj == null) {
            Object invoke = this.f51627a.invoke(key);
            Object putIfAbsent = concurrentHashMap.putIfAbsent(key, invoke);
            if (putIfAbsent == null) {
                return invoke;
            }
            return putIfAbsent;
        }
        return obj;
    }
}
