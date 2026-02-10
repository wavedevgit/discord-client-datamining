package kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure;

import java.lang.reflect.Method;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class Java16SealedRecordLoader {

    /* renamed from: a  reason: collision with root package name */
    public static final Java16SealedRecordLoader f32376a = new Java16SealedRecordLoader();

    /* renamed from: b  reason: collision with root package name */
    private static Cache f32377b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Cache {

        /* renamed from: a  reason: collision with root package name */
        private final Method f32378a;

        /* renamed from: b  reason: collision with root package name */
        private final Method f32379b;

        /* renamed from: c  reason: collision with root package name */
        private final Method f32380c;

        /* renamed from: d  reason: collision with root package name */
        private final Method f32381d;

        public Cache(Method method, Method method2, Method method3, Method method4) {
            this.f32378a = method;
            this.f32379b = method2;
            this.f32380c = method3;
            this.f32381d = method4;
        }

        public final Method getGetPermittedSubclasses() {
            return this.f32379b;
        }

        public final Method getGetRecordComponents() {
            return this.f32381d;
        }

        public final Method isRecord() {
            return this.f32380c;
        }

        public final Method isSealed() {
            return this.f32378a;
        }
    }

    private Java16SealedRecordLoader() {
    }

    private final Cache a() {
        try {
            return new Cache(Class.class.getMethod("isSealed", null), Class.class.getMethod("getPermittedSubclasses", null), Class.class.getMethod("isRecord", null), Class.class.getMethod("getRecordComponents", null));
        } catch (NoSuchMethodException unused) {
            return new Cache(null, null, null, null);
        }
    }

    private final Cache b() {
        Cache cache = f32377b;
        if (cache == null) {
            Cache a10 = a();
            f32377b = a10;
            return a10;
        }
        return cache;
    }

    public final Class[] c(Class clazz) {
        Intrinsics.checkNotNullParameter(clazz, "clazz");
        Method getPermittedSubclasses = b().getGetPermittedSubclasses();
        if (getPermittedSubclasses == null) {
            return null;
        }
        Object invoke = getPermittedSubclasses.invoke(clazz, null);
        Intrinsics.checkNotNull(invoke, "null cannot be cast to non-null type kotlin.Array<java.lang.Class<*>>");
        return (Class[]) invoke;
    }

    public final Object[] d(Class clazz) {
        Intrinsics.checkNotNullParameter(clazz, "clazz");
        Method getRecordComponents = b().getGetRecordComponents();
        if (getRecordComponents == null) {
            return null;
        }
        return (Object[]) getRecordComponents.invoke(clazz, null);
    }

    public final Boolean e(Class clazz) {
        Intrinsics.checkNotNullParameter(clazz, "clazz");
        Method isRecord = b().isRecord();
        if (isRecord == null) {
            return null;
        }
        Object invoke = isRecord.invoke(clazz, null);
        Intrinsics.checkNotNull(invoke, "null cannot be cast to non-null type kotlin.Boolean");
        return (Boolean) invoke;
    }

    public final Boolean f(Class clazz) {
        Intrinsics.checkNotNullParameter(clazz, "clazz");
        Method isSealed = b().isSealed();
        if (isSealed == null) {
            return null;
        }
        Object invoke = isSealed.invoke(clazz, null);
        Intrinsics.checkNotNull(invoke, "null cannot be cast to non-null type kotlin.Boolean");
        return (Boolean) invoke;
    }
}
