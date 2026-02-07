package ks;

import java.util.concurrent.ConcurrentHashMap;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class i extends a {

    /* renamed from: a  reason: collision with root package name */
    private final Function1 f35374a;

    /* renamed from: b  reason: collision with root package name */
    private final ConcurrentHashMap f35375b;

    public i(Function1 compute) {
        Intrinsics.checkNotNullParameter(compute, "compute");
        this.f35374a = compute;
        this.f35375b = new ConcurrentHashMap();
    }

    @Override // ks.a
    public Object a(Class key) {
        Intrinsics.checkNotNullParameter(key, "key");
        ConcurrentHashMap concurrentHashMap = this.f35375b;
        Object obj = concurrentHashMap.get(key);
        if (obj == null) {
            Object invoke = this.f35374a.invoke(key);
            Object putIfAbsent = concurrentHashMap.putIfAbsent(key, invoke);
            if (putIfAbsent == null) {
                return invoke;
            }
            return putIfAbsent;
        }
        return obj;
    }
}
