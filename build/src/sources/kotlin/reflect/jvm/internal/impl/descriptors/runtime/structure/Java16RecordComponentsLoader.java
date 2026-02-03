package kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure;

import java.lang.reflect.Method;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class Java16RecordComponentsLoader {

    /* renamed from: a  reason: collision with root package name */
    public static final Java16RecordComponentsLoader f33071a = new Java16RecordComponentsLoader();

    /* renamed from: b  reason: collision with root package name */
    private static Cache f33072b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Cache {

        /* renamed from: a  reason: collision with root package name */
        private final Method f33073a;

        /* renamed from: b  reason: collision with root package name */
        private final Method f33074b;

        public Cache(Method method, Method method2) {
            this.f33073a = method;
            this.f33074b = method2;
        }

        public final Method getGetAccessor() {
            return this.f33074b;
        }

        public final Method getGetType() {
            return this.f33073a;
        }
    }

    private Java16RecordComponentsLoader() {
    }

    private final Cache a(Object obj) {
        Class<?> cls = obj.getClass();
        try {
            return new Cache(cls.getMethod("getType", null), cls.getMethod("getAccessor", null));
        } catch (NoSuchMethodException unused) {
            return new Cache(null, null);
        }
    }

    private final Cache b(Object obj) {
        Cache cache = f33072b;
        if (cache == null) {
            Cache a10 = a(obj);
            f33072b = a10;
            return a10;
        }
        return cache;
    }

    public final Method c(Object recordComponent) {
        Intrinsics.checkNotNullParameter(recordComponent, "recordComponent");
        Method getAccessor = b(recordComponent).getGetAccessor();
        if (getAccessor == null) {
            return null;
        }
        Object invoke = getAccessor.invoke(recordComponent, null);
        Intrinsics.checkNotNull(invoke, "null cannot be cast to non-null type java.lang.reflect.Method");
        return (Method) invoke;
    }

    public final Class d(Object recordComponent) {
        Intrinsics.checkNotNullParameter(recordComponent, "recordComponent");
        Method getType = b(recordComponent).getGetType();
        if (getType == null) {
            return null;
        }
        Object invoke = getType.invoke(recordComponent, null);
        Intrinsics.checkNotNull(invoke, "null cannot be cast to non-null type java.lang.Class<*>");
        return (Class) invoke;
    }
}
