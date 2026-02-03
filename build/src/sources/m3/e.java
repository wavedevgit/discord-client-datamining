package m3;

import androidx.lifecycle.n0;
import java.lang.reflect.Constructor;
import java.lang.reflect.Modifier;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    public static final e f37800a = new e();

    private e() {
    }

    public final n0 a(Class modelClass) {
        Intrinsics.checkNotNullParameter(modelClass, "modelClass");
        try {
            Constructor declaredConstructor = modelClass.getDeclaredConstructor(null);
            if (Modifier.isPublic(declaredConstructor.getModifiers())) {
                try {
                    Object newInstance = declaredConstructor.newInstance(null);
                    Intrinsics.checkNotNull(newInstance);
                    return (n0) newInstance;
                } catch (IllegalAccessException e10) {
                    throw new RuntimeException("Cannot create an instance of " + modelClass, e10);
                } catch (InstantiationException e11) {
                    throw new RuntimeException("Cannot create an instance of " + modelClass, e11);
                }
            }
            throw new RuntimeException("Cannot create an instance of " + modelClass);
        } catch (NoSuchMethodException e12) {
            throw new RuntimeException("Cannot create an instance of " + modelClass, e12);
        }
    }
}
