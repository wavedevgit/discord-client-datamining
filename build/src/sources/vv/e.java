package vv;

import java.lang.annotation.Annotation;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface e {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class a {
        /* JADX INFO: Access modifiers changed from: protected */
        public static Type b(int i10, ParameterizedType parameterizedType) {
            return e0.g(i10, parameterizedType);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public static Class c(Type type) {
            return e0.h(type);
        }

        public abstract e a(Type type, Annotation[] annotationArr, a0 a0Var);
    }

    Type a();

    Object b(d dVar);
}
