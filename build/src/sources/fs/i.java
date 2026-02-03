package fs;

import java.util.concurrent.ConcurrentHashMap;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class i extends a {

    /* renamed from: a  reason: collision with root package name */
    private final Function1 f24533a;

    /* renamed from: b  reason: collision with root package name */
    private final ConcurrentHashMap f24534b;

    public i(Function1 compute) {
        Intrinsics.checkNotNullParameter(compute, "compute");
        this.f24533a = compute;
        this.f24534b = new ConcurrentHashMap();
    }

    @Override // fs.a
    public Object a(Class key) {
        Intrinsics.checkNotNullParameter(key, "key");
        ConcurrentHashMap concurrentHashMap = this.f24534b;
        Object obj = concurrentHashMap.get(key);
        if (obj == null) {
            Object invoke = this.f24533a.invoke(key);
            Object putIfAbsent = concurrentHashMap.putIfAbsent(key, invoke);
            if (putIfAbsent == null) {
                return invoke;
            }
            return putIfAbsent;
        }
        return obj;
    }
}
