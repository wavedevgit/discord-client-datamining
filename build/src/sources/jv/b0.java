package jv;

import java.lang.reflect.Method;
import java.lang.reflect.Type;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class b0 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static b0 b(a0 a0Var, Class cls, Method method) {
        y b10 = y.b(a0Var, cls, method);
        Type genericReturnType = method.getGenericReturnType();
        if (!e0.j(genericReturnType)) {
            if (genericReturnType != Void.TYPE) {
                return p.f(a0Var, method, b10);
            }
            throw e0.n(method, "Service methods cannot return void.", new Object[0]);
        }
        throw e0.n(method, "Method return type must not include a type variable or wildcard: %s", genericReturnType);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract Object a(Object obj, Object[] objArr);
}
