package kotlin.coroutines.jvm.internal;

import com.facebook.react.devsupport.StackTraceHelper;
import java.lang.reflect.Method;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {
    @NotNull

    /* renamed from: a  reason: collision with root package name */
    public static final h f32064a = new h();

    /* renamed from: b  reason: collision with root package name */
    private static final a f32065b = new a(null, null, null);

    /* renamed from: c  reason: collision with root package name */
    private static a f32066c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final Method f32067a;

        /* renamed from: b  reason: collision with root package name */
        public final Method f32068b;

        /* renamed from: c  reason: collision with root package name */
        public final Method f32069c;

        public a(Method method, Method method2, Method method3) {
            this.f32067a = method;
            this.f32068b = method2;
            this.f32069c = method3;
        }
    }

    private h() {
    }

    private final a a(kotlin.coroutines.jvm.internal.a aVar) {
        try {
            a aVar2 = new a(Class.class.getDeclaredMethod("getModule", null), aVar.getClass().getClassLoader().loadClass("java.lang.Module").getDeclaredMethod("getDescriptor", null), aVar.getClass().getClassLoader().loadClass("java.lang.module.ModuleDescriptor").getDeclaredMethod(StackTraceHelper.NAME_KEY, null));
            f32066c = aVar2;
            return aVar2;
        } catch (Exception unused) {
            a aVar3 = f32065b;
            f32066c = aVar3;
            return aVar3;
        }
    }

    public final String b(kotlin.coroutines.jvm.internal.a continuation) {
        Method method;
        Object invoke;
        Method method2;
        Object invoke2;
        Object obj;
        Intrinsics.checkNotNullParameter(continuation, "continuation");
        a aVar = f32066c;
        if (aVar == null) {
            aVar = a(continuation);
        }
        if (aVar != f32065b && (method = aVar.f32067a) != null && (invoke = method.invoke(continuation.getClass(), null)) != null && (method2 = aVar.f32068b) != null && (invoke2 = method2.invoke(invoke, null)) != null) {
            Method method3 = aVar.f32069c;
            if (method3 != null) {
                obj = method3.invoke(invoke2, null);
            } else {
                obj = null;
            }
            if (obj instanceof String) {
                return (String) obj;
            }
        }
        return null;
    }
}
