package vv;

import java.lang.annotation.Annotation;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class a {
        /* JADX INFO: Access modifiers changed from: protected */
        public static Type a(int i10, ParameterizedType parameterizedType) {
            return e0.g(i10, parameterizedType);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public static Class b(Type type) {
            return e0.h(type);
        }

        public h c(Type type, Annotation[] annotationArr, Annotation[] annotationArr2, a0 a0Var) {
            return null;
        }

        public abstract h d(Type type, Annotation[] annotationArr, a0 a0Var);

        public h e(Type type, Annotation[] annotationArr, a0 a0Var) {
            return null;
        }
    }

    Object a(Object obj);
}
