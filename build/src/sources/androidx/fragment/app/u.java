package androidx.fragment.app;

import androidx.collection.SimpleArrayMap;
import androidx.fragment.app.Fragment;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class u {

    /* renamed from: a  reason: collision with root package name */
    private static final SimpleArrayMap f4394a = new SimpleArrayMap();

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean b(ClassLoader classLoader, String str) {
        try {
            return Fragment.class.isAssignableFrom(c(classLoader, str));
        } catch (ClassNotFoundException unused) {
            return false;
        }
    }

    private static Class c(ClassLoader classLoader, String str) {
        SimpleArrayMap simpleArrayMap = f4394a;
        SimpleArrayMap simpleArrayMap2 = (SimpleArrayMap) simpleArrayMap.get(classLoader);
        if (simpleArrayMap2 == null) {
            simpleArrayMap2 = new SimpleArrayMap();
            simpleArrayMap.put(classLoader, simpleArrayMap2);
        }
        Class cls = (Class) simpleArrayMap2.get(str);
        if (cls == null) {
            Class<?> cls2 = Class.forName(str, false, classLoader);
            simpleArrayMap2.put(str, cls2);
            return cls2;
        }
        return cls;
    }

    public static Class d(ClassLoader classLoader, String str) {
        try {
            return c(classLoader, str);
        } catch (ClassCastException e10) {
            throw new Fragment.k("Unable to instantiate fragment " + str + ": make sure class is a valid subclass of Fragment", e10);
        } catch (ClassNotFoundException e11) {
            throw new Fragment.k("Unable to instantiate fragment " + str + ": make sure class name exists", e11);
        }
    }

    public abstract Fragment a(ClassLoader classLoader, String str);
}
