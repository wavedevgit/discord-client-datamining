package lv;

import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class n {

    /* renamed from: a  reason: collision with root package name */
    private static Constructor f37399a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object a(Method method, Class cls, Object obj, Object[] objArr) {
        Constructor constructor = f37399a;
        if (constructor == null) {
            constructor = l.a().getDeclaredConstructor(Class.class, Integer.TYPE);
            constructor.setAccessible(true);
            f37399a = constructor;
        }
        return m.a(constructor.newInstance(cls, -1)).unreflectSpecial(method, cls).bindTo(obj).invokeWithArguments(objArr);
    }
}
