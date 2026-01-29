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
    public static final h f33358a = new h();

    /* renamed from: b  reason: collision with root package name */
    private static final a f33359b = new a(null, null, null);

    /* renamed from: c  reason: collision with root package name */
    private static a f33360c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final Method f33361a;

        /* renamed from: b  reason: collision with root package name */
        public final Method f33362b;

        /* renamed from: c  reason: collision with root package name */
        public final Method f33363c;

        public a(Method method, Method method2, Method method3) {
            this.f33361a = method;
            this.f33362b = method2;
            this.f33363c = method3;
        }
    }

    private h() {
    }

    private final a a(kotlin.coroutines.jvm.internal.a aVar) {
        try {
            a aVar2 = new a(Class.class.getDeclaredMethod("getModule", null), aVar.getClass().getClassLoader().loadClass("java.lang.Module").getDeclaredMethod("getDescriptor", null), aVar.getClass().getClassLoader().loadClass("java.lang.module.ModuleDescriptor").getDeclaredMethod(StackTraceHelper.NAME_KEY, null));
            f33360c = aVar2;
            return aVar2;
        } catch (Exception unused) {
            a aVar3 = f33359b;
            f33360c = aVar3;
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
        a aVar = f33360c;
        if (aVar == null) {
            aVar = a(continuation);
        }
        if (aVar != f33359b && (method = aVar.f33361a) != null && (invoke = method.invoke(continuation.getClass(), null)) != null && (method2 = aVar.f33362b) != null && (invoke2 = method2.invoke(invoke, null)) != null) {
            Method method3 = aVar.f33363c;
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
