package androidx.lifecycle;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.ArrayIteratorKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class t {

    /* renamed from: a  reason: collision with root package name */
    public static final t f4975a = new t();

    /* renamed from: b  reason: collision with root package name */
    private static final Map f4976b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private static final Map f4977c = new HashMap();

    private t() {
    }

    private final g a(Constructor constructor, Object obj) {
        try {
            Object newInstance = constructor.newInstance(obj);
            Intrinsics.checkNotNull(newInstance);
            android.support.v4.media.session.b.a(newInstance);
            return null;
        } catch (IllegalAccessException e10) {
            throw new RuntimeException(e10);
        } catch (InstantiationException e11) {
            throw new RuntimeException(e11);
        } catch (InvocationTargetException e12) {
            throw new RuntimeException(e12);
        }
    }

    private final Constructor b(Class cls) {
        String str;
        try {
            Package r02 = cls.getPackage();
            String canonicalName = cls.getCanonicalName();
            if (r02 != null) {
                str = r02.getName();
            } else {
                str = "";
            }
            Intrinsics.checkNotNull(str);
            if (str.length() != 0) {
                Intrinsics.checkNotNull(canonicalName);
                canonicalName = canonicalName.substring(str.length() + 1);
                Intrinsics.checkNotNullExpressionValue(canonicalName, "substring(...)");
            }
            Intrinsics.checkNotNull(canonicalName);
            String c10 = c(canonicalName);
            if (str.length() != 0) {
                c10 = str + '.' + c10;
            }
            Class<?> cls2 = Class.forName(c10);
            Intrinsics.checkNotNull(cls2, "null cannot be cast to non-null type java.lang.Class<out androidx.lifecycle.GeneratedAdapter>");
            Constructor<?> declaredConstructor = cls2.getDeclaredConstructor(cls);
            if (!declaredConstructor.isAccessible()) {
                declaredConstructor.setAccessible(true);
            }
            return declaredConstructor;
        } catch (ClassNotFoundException unused) {
            return null;
        } catch (NoSuchMethodException e10) {
            throw new RuntimeException(e10);
        }
    }

    public static final String c(String className) {
        Intrinsics.checkNotNullParameter(className, "className");
        return StringsKt.J(className, ".", "_", false, 4, null) + "_LifecycleAdapter";
    }

    private final int d(Class cls) {
        Map map = f4976b;
        Integer num = (Integer) map.get(cls);
        if (num != null) {
            return num.intValue();
        }
        int g10 = g(cls);
        map.put(cls, Integer.valueOf(g10));
        return g10;
    }

    private final boolean e(Class cls) {
        if (cls != null && o.class.isAssignableFrom(cls)) {
            return true;
        }
        return false;
    }

    public static final m f(Object object) {
        Intrinsics.checkNotNullParameter(object, "object");
        boolean z10 = object instanceof m;
        boolean z11 = object instanceof DefaultLifecycleObserver;
        if (z10 && z11) {
            return new e((DefaultLifecycleObserver) object, (m) object);
        }
        if (z11) {
            return new e((DefaultLifecycleObserver) object, null);
        }
        if (z10) {
            return (m) object;
        }
        Class<?> cls = object.getClass();
        t tVar = f4975a;
        if (tVar.d(cls) == 2) {
            Object obj = f4977c.get(cls);
            Intrinsics.checkNotNull(obj);
            List list = (List) obj;
            if (list.size() == 1) {
                tVar.a((Constructor) list.get(0), object);
                return new m0(null);
            }
            int size = list.size();
            g[] gVarArr = new g[size];
            for (int i10 = 0; i10 < size; i10++) {
                f4975a.a((Constructor) list.get(i10), object);
                gVarArr[i10] = null;
            }
            return new d(gVarArr);
        }
        return new y(object);
    }

    private final int g(Class cls) {
        ArrayList arrayList;
        if (cls.getCanonicalName() == null) {
            return 1;
        }
        Constructor b10 = b(cls);
        if (b10 != null) {
            f4977c.put(cls, CollectionsKt.e(b10));
            return 2;
        } else if (c.f4920c.d(cls)) {
            return 1;
        } else {
            Class superclass = cls.getSuperclass();
            if (e(superclass)) {
                Intrinsics.checkNotNull(superclass);
                if (d(superclass) == 1) {
                    return 1;
                }
                Object obj = f4977c.get(superclass);
                Intrinsics.checkNotNull(obj);
                arrayList = new ArrayList((Collection) obj);
            } else {
                arrayList = null;
            }
            Iterator it = ArrayIteratorKt.iterator(cls.getInterfaces());
            while (it.hasNext()) {
                Class cls2 = (Class) it.next();
                if (e(cls2)) {
                    Intrinsics.checkNotNull(cls2);
                    if (d(cls2) == 1) {
                        return 1;
                    }
                    if (arrayList == null) {
                        arrayList = new ArrayList();
                    }
                    Object obj2 = f4977c.get(cls2);
                    Intrinsics.checkNotNull(obj2);
                    arrayList.addAll((Collection) obj2);
                }
            }
            if (arrayList == null) {
                return 1;
            }
            f4977c.put(cls, arrayList);
            return 2;
        }
    }
}
