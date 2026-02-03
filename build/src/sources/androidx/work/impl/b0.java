package androidx.work.impl;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b0 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f5562a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final Map f5563b = new LinkedHashMap();

    public final boolean a(p4.m id2) {
        boolean containsKey;
        Intrinsics.checkNotNullParameter(id2, "id");
        synchronized (this.f5562a) {
            containsKey = this.f5563b.containsKey(id2);
        }
        return containsKey;
    }

    public final a0 b(p4.m id2) {
        a0 a0Var;
        Intrinsics.checkNotNullParameter(id2, "id");
        synchronized (this.f5562a) {
            a0Var = (a0) this.f5563b.remove(id2);
        }
        return a0Var;
    }

    public final List c(String workSpecId) {
        List h12;
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        synchronized (this.f5562a) {
            try {
                Map map = this.f5563b;
                LinkedHashMap linkedHashMap = new LinkedHashMap();
                for (Map.Entry entry : map.entrySet()) {
                    if (Intrinsics.areEqual(((p4.m) entry.getKey()).b(), workSpecId)) {
                        linkedHashMap.put(entry.getKey(), entry.getValue());
                    }
                }
                for (p4.m mVar : linkedHashMap.keySet()) {
                    this.f5563b.remove(mVar);
                }
                h12 = CollectionsKt.h1(linkedHashMap.values());
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return h12;
    }

    public final a0 d(p4.m id2) {
        a0 a0Var;
        Intrinsics.checkNotNullParameter(id2, "id");
        synchronized (this.f5562a) {
            try {
                Map map = this.f5563b;
                Object obj = map.get(id2);
                if (obj == null) {
                    obj = new a0(id2);
                    map.put(id2, obj);
                }
                a0Var = (a0) obj;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return a0Var;
    }

    public final a0 e(p4.u spec) {
        Intrinsics.checkNotNullParameter(spec, "spec");
        return d(p4.x.a(spec));
    }
}
