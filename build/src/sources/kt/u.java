package kt;

import java.util.concurrent.ConcurrentHashMap;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
import kotlinx.serialization.KSerializer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class u implements k2 {

    /* renamed from: a  reason: collision with root package name */
    private final Function1 f35220a;

    /* renamed from: b  reason: collision with root package name */
    private final ConcurrentHashMap f35221b;

    public u(Function1 compute) {
        Intrinsics.checkNotNullParameter(compute, "compute");
        this.f35220a = compute;
        this.f35221b = new ConcurrentHashMap();
    }

    @Override // kt.k2
    public KSerializer a(KClass key) {
        Object putIfAbsent;
        Intrinsics.checkNotNullParameter(key, "key");
        ConcurrentHashMap concurrentHashMap = this.f35221b;
        Class b10 = es.a.b(key);
        Object obj = concurrentHashMap.get(b10);
        if (obj == null && (putIfAbsent = concurrentHashMap.putIfAbsent(b10, (obj = new k((KSerializer) this.f35220a.invoke(key))))) != null) {
            obj = putIfAbsent;
        }
        return ((k) obj).f35163a;
    }
}
