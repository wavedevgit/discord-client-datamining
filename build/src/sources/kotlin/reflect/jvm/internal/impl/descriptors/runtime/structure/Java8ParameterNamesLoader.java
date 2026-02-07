package kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure;

import java.lang.reflect.Member;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class Java8ParameterNamesLoader {

    /* renamed from: a  reason: collision with root package name */
    public static final Java8ParameterNamesLoader f32673a = new Java8ParameterNamesLoader();

    /* renamed from: b  reason: collision with root package name */
    private static Cache f32674b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Cache {

        /* renamed from: a  reason: collision with root package name */
        private final Method f32675a;

        /* renamed from: b  reason: collision with root package name */
        private final Method f32676b;

        public Cache(Method method, Method method2) {
            this.f32675a = method;
            this.f32676b = method2;
        }

        public final Method getGetName() {
            return this.f32676b;
        }

        public final Method getGetParameters() {
            return this.f32675a;
        }
    }

    private Java8ParameterNamesLoader() {
    }

    public final Cache a(Member member) {
        Intrinsics.checkNotNullParameter(member, "member");
        Class<?> cls = member.getClass();
        try {
            return new Cache(cls.getMethod("getParameters", null), ReflectClassUtilKt.getSafeClassLoader(cls).loadClass("java.lang.reflect.Parameter").getMethod("getName", null));
        } catch (NoSuchMethodException unused) {
            return new Cache(null, null);
        }
    }

    public final List b(Member member) {
        Method getName;
        Intrinsics.checkNotNullParameter(member, "member");
        Cache cache = f32674b;
        if (cache == null) {
            synchronized (this) {
                cache = f32674b;
                if (cache == null) {
                    cache = f32673a.a(member);
                    f32674b = cache;
                }
            }
        }
        Method getParameters = cache.getGetParameters();
        if (getParameters == null || (getName = cache.getGetName()) == null) {
            return null;
        }
        Object invoke = getParameters.invoke(member, null);
        Intrinsics.checkNotNull(invoke, "null cannot be cast to non-null type kotlin.Array<*>");
        Object[] objArr = (Object[]) invoke;
        ArrayList arrayList = new ArrayList(objArr.length);
        for (Object obj : objArr) {
            Object invoke2 = getName.invoke(obj, null);
            Intrinsics.checkNotNull(invoke2, "null cannot be cast to non-null type kotlin.String");
            arrayList.add((String) invoke2);
        }
        return arrayList;
    }
}
