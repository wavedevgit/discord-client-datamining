package dt;

import java.util.concurrent.ConcurrentHashMap;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
import kotlinx.serialization.KSerializer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class u implements k2 {

    /* renamed from: a  reason: collision with root package name */
    private final Function1 f21017a;

    /* renamed from: b  reason: collision with root package name */
    private final ConcurrentHashMap f21018b;

    public u(Function1 compute) {
        Intrinsics.checkNotNullParameter(compute, "compute");
        this.f21017a = compute;
        this.f21018b = new ConcurrentHashMap();
    }

    @Override // dt.k2
    public KSerializer a(KClass key) {
        Object putIfAbsent;
        Intrinsics.checkNotNullParameter(key, "key");
        ConcurrentHashMap concurrentHashMap = this.f21018b;
        Class b10 = yr.a.b(key);
        Object obj = concurrentHashMap.get(b10);
        if (obj == null && (putIfAbsent = concurrentHashMap.putIfAbsent(b10, (obj = new k((KSerializer) this.f21017a.invoke(key))))) != null) {
            obj = putIfAbsent;
        }
        return ((k) obj).f20960a;
    }
}
