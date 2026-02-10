package ls;

import java.util.concurrent.ConcurrentHashMap;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class i extends a {

    /* renamed from: a  reason: collision with root package name */
    private final Function1 f36453a;

    /* renamed from: b  reason: collision with root package name */
    private final ConcurrentHashMap f36454b;

    public i(Function1 compute) {
        Intrinsics.checkNotNullParameter(compute, "compute");
        this.f36453a = compute;
        this.f36454b = new ConcurrentHashMap();
    }

    @Override // ls.a
    public Object a(Class key) {
        Intrinsics.checkNotNullParameter(key, "key");
        ConcurrentHashMap concurrentHashMap = this.f36454b;
        Object obj = concurrentHashMap.get(key);
        if (obj == null) {
            Object invoke = this.f36453a.invoke(key);
            Object putIfAbsent = concurrentHashMap.putIfAbsent(key, invoke);
            if (putIfAbsent == null) {
                return invoke;
            }
            return putIfAbsent;
        }
        return obj;
    }
}
