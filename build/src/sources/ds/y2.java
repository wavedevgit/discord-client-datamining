package ds;

import java.lang.ref.WeakReference;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.components.RuntimeModuleData;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.ReflectClassUtilKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class y2 {

    /* renamed from: a  reason: collision with root package name */
    private static final ConcurrentMap f22373a = new ConcurrentHashMap();

    public static final RuntimeModuleData a(Class cls) {
        Intrinsics.checkNotNullParameter(cls, "<this>");
        ClassLoader safeClassLoader = ReflectClassUtilKt.getSafeClassLoader(cls);
        k3 k3Var = new k3(safeClassLoader);
        ConcurrentMap concurrentMap = f22373a;
        WeakReference weakReference = (WeakReference) concurrentMap.get(k3Var);
        if (weakReference != null) {
            RuntimeModuleData runtimeModuleData = (RuntimeModuleData) weakReference.get();
            if (runtimeModuleData != null) {
                return runtimeModuleData;
            }
            concurrentMap.remove(k3Var, weakReference);
        }
        RuntimeModuleData create = RuntimeModuleData.Companion.create(safeClassLoader);
        while (true) {
            try {
                ConcurrentMap concurrentMap2 = f22373a;
                WeakReference weakReference2 = (WeakReference) concurrentMap2.putIfAbsent(k3Var, new WeakReference(create));
                if (weakReference2 == null) {
                    return create;
                }
                RuntimeModuleData runtimeModuleData2 = (RuntimeModuleData) weakReference2.get();
                if (runtimeModuleData2 != null) {
                    return runtimeModuleData2;
                }
                concurrentMap2.remove(k3Var, weakReference2);
            } finally {
                k3Var.a(null);
            }
        }
    }
}
