package jt;

import java.util.concurrent.ConcurrentHashMap;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
import kotlinx.serialization.KSerializer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class u implements k2 {

    /* renamed from: a  reason: collision with root package name */
    private final Function1 f31128a;

    /* renamed from: b  reason: collision with root package name */
    private final ConcurrentHashMap f31129b;

    public u(Function1 compute) {
        Intrinsics.checkNotNullParameter(compute, "compute");
        this.f31128a = compute;
        this.f31129b = new ConcurrentHashMap();
    }

    @Override // jt.k2
    public KSerializer a(KClass key) {
        Object putIfAbsent;
        Intrinsics.checkNotNullParameter(key, "key");
        ConcurrentHashMap concurrentHashMap = this.f31129b;
        Class b10 = ds.a.b(key);
        Object obj = concurrentHashMap.get(b10);
        if (obj == null && (putIfAbsent = concurrentHashMap.putIfAbsent(b10, (obj = new k((KSerializer) this.f31128a.invoke(key))))) != null) {
            obj = putIfAbsent;
        }
        return ((k) obj).f31071a;
    }
}
