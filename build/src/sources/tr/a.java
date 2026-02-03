package tr;

import java.lang.reflect.Method;
import kotlin.collections.i;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: tr.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class C0628a {
        @NotNull

        /* renamed from: a  reason: collision with root package name */
        public static final C0628a f50232a = new C0628a();

        /* renamed from: b  reason: collision with root package name */
        public static final Method f50233b;

        /* renamed from: c  reason: collision with root package name */
        public static final Method f50234c;

        static {
            Method method;
            Method method2;
            Method[] methods = Throwable.class.getMethods();
            Intrinsics.checkNotNull(methods);
            int length = methods.length;
            int i10 = 0;
            int i11 = 0;
            while (true) {
                method = null;
                if (i11 < length) {
                    method2 = methods[i11];
                    if (Intrinsics.areEqual(method2.getName(), "addSuppressed")) {
                        Class<?>[] parameterTypes = method2.getParameterTypes();
                        Intrinsics.checkNotNullExpressionValue(parameterTypes, "getParameterTypes(...)");
                        if (Intrinsics.areEqual(i.D0(parameterTypes), Throwable.class)) {
                            break;
                        }
                    }
                    i11++;
                } else {
                    method2 = null;
                    break;
                }
            }
            f50233b = method2;
            int length2 = methods.length;
            while (true) {
                if (i10 >= length2) {
                    break;
                }
                Method method3 = methods[i10];
                if (Intrinsics.areEqual(method3.getName(), "getSuppressed")) {
                    method = method3;
                    break;
                }
                i10++;
            }
            f50234c = method;
        }

        private C0628a() {
        }
    }

    public void a(Throwable cause, Throwable exception) {
        Intrinsics.checkNotNullParameter(cause, "cause");
        Intrinsics.checkNotNullParameter(exception, "exception");
        Method method = C0628a.f50233b;
        if (method != null) {
            method.invoke(cause, exception);
        }
    }

    public kotlin.random.c b() {
        return new kotlin.random.b();
    }
}
