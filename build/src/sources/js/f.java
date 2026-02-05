package js;

import is.x2;
import java.lang.annotation.Annotation;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.Lazy;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f {
    public static final Object g(Class annotationClass, Map values, List methods) {
        Intrinsics.checkNotNullParameter(annotationClass, "annotationClass");
        Intrinsics.checkNotNullParameter(values, "values");
        Intrinsics.checkNotNullParameter(methods, "methods");
        Lazy a10 = or.l.a(new b(values));
        Object newProxyInstance = Proxy.newProxyInstance(annotationClass.getClassLoader(), new Class[]{annotationClass}, new d(annotationClass, values, or.l.a(new c(annotationClass, values)), a10, methods));
        Intrinsics.checkNotNull(newProxyInstance, "null cannot be cast to non-null type T of kotlin.reflect.jvm.internal.calls.AnnotationConstructorCallerKt.createAnnotationInstance");
        return newProxyInstance;
    }

    public static /* synthetic */ Object h(Class cls, Map map, List list, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            Set<String> keySet = map.keySet();
            ArrayList arrayList = new ArrayList(CollectionsKt.w(keySet, 10));
            for (String str : keySet) {
                arrayList.add(cls.getDeclaredMethod(str, null));
            }
            list = arrayList;
        }
        return g(cls, map, list);
    }

    private static final boolean i(Class cls, List list, Map map, Object obj) {
        Annotation annotation;
        Class cls2;
        boolean areEqual;
        boolean z10;
        KClass a10;
        if (obj instanceof Annotation) {
            annotation = (Annotation) obj;
        } else {
            annotation = null;
        }
        if (annotation != null && (a10 = bs.a.a(annotation)) != null) {
            cls2 = bs.a.b(a10);
        } else {
            cls2 = null;
        }
        if (Intrinsics.areEqual(cls2, cls)) {
            List<Method> list2 = list;
            if (!(list2 instanceof Collection) || !list2.isEmpty()) {
                for (Method method : list2) {
                    Object obj2 = map.get(method.getName());
                    Object invoke = method.invoke(obj, null);
                    if (obj2 instanceof boolean[]) {
                        Intrinsics.checkNotNull(invoke, "null cannot be cast to non-null type kotlin.BooleanArray");
                        areEqual = Arrays.equals((boolean[]) obj2, (boolean[]) invoke);
                        continue;
                    } else if (obj2 instanceof char[]) {
                        Intrinsics.checkNotNull(invoke, "null cannot be cast to non-null type kotlin.CharArray");
                        areEqual = Arrays.equals((char[]) obj2, (char[]) invoke);
                        continue;
                    } else if (obj2 instanceof byte[]) {
                        Intrinsics.checkNotNull(invoke, "null cannot be cast to non-null type kotlin.ByteArray");
                        areEqual = Arrays.equals((byte[]) obj2, (byte[]) invoke);
                        continue;
                    } else if (obj2 instanceof short[]) {
                        Intrinsics.checkNotNull(invoke, "null cannot be cast to non-null type kotlin.ShortArray");
                        areEqual = Arrays.equals((short[]) obj2, (short[]) invoke);
                        continue;
                    } else if (obj2 instanceof int[]) {
                        Intrinsics.checkNotNull(invoke, "null cannot be cast to non-null type kotlin.IntArray");
                        areEqual = Arrays.equals((int[]) obj2, (int[]) invoke);
                        continue;
                    } else if (obj2 instanceof float[]) {
                        Intrinsics.checkNotNull(invoke, "null cannot be cast to non-null type kotlin.FloatArray");
                        areEqual = Arrays.equals((float[]) obj2, (float[]) invoke);
                        continue;
                    } else if (obj2 instanceof long[]) {
                        Intrinsics.checkNotNull(invoke, "null cannot be cast to non-null type kotlin.LongArray");
                        areEqual = Arrays.equals((long[]) obj2, (long[]) invoke);
                        continue;
                    } else if (obj2 instanceof double[]) {
                        Intrinsics.checkNotNull(invoke, "null cannot be cast to non-null type kotlin.DoubleArray");
                        areEqual = Arrays.equals((double[]) obj2, (double[]) invoke);
                        continue;
                    } else if (obj2 instanceof Object[]) {
                        Intrinsics.checkNotNull(invoke, "null cannot be cast to non-null type kotlin.Array<*>");
                        areEqual = Arrays.equals((Object[]) obj2, (Object[]) invoke);
                        continue;
                    } else {
                        areEqual = Intrinsics.areEqual(obj2, invoke);
                        continue;
                    }
                    if (!areEqual) {
                        z10 = false;
                        break;
                    }
                }
            }
            z10 = true;
            if (z10) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int j(Map map) {
        int hashCode;
        int i10 = 0;
        for (Map.Entry entry : map.entrySet()) {
            String str = (String) entry.getKey();
            Object value = entry.getValue();
            if (value instanceof boolean[]) {
                hashCode = Arrays.hashCode((boolean[]) value);
            } else if (value instanceof char[]) {
                hashCode = Arrays.hashCode((char[]) value);
            } else if (value instanceof byte[]) {
                hashCode = Arrays.hashCode((byte[]) value);
            } else if (value instanceof short[]) {
                hashCode = Arrays.hashCode((short[]) value);
            } else if (value instanceof int[]) {
                hashCode = Arrays.hashCode((int[]) value);
            } else if (value instanceof float[]) {
                hashCode = Arrays.hashCode((float[]) value);
            } else if (value instanceof long[]) {
                hashCode = Arrays.hashCode((long[]) value);
            } else if (value instanceof double[]) {
                hashCode = Arrays.hashCode((double[]) value);
            } else if (value instanceof Object[]) {
                hashCode = Arrays.hashCode((Object[]) value);
            } else {
                hashCode = value.hashCode();
            }
            i10 += hashCode ^ (str.hashCode() * 127);
        }
        return i10;
    }

    private static final int k(Lazy lazy) {
        return ((Number) lazy.getValue()).intValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final String l(Class cls, Map map) {
        StringBuilder sb2 = new StringBuilder();
        sb2.append('@');
        sb2.append(cls.getCanonicalName());
        CollectionsKt.v0(map.entrySet(), sb2, ", ", "(", ")", 0, null, e.f31260d, 48, null);
        return sb2.toString();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CharSequence m(Map.Entry entry) {
        String obj;
        Intrinsics.checkNotNullParameter(entry, "entry");
        String str = (String) entry.getKey();
        Object value = entry.getValue();
        if (value instanceof boolean[]) {
            obj = Arrays.toString((boolean[]) value);
            Intrinsics.checkNotNullExpressionValue(obj, "toString(...)");
        } else if (value instanceof char[]) {
            obj = Arrays.toString((char[]) value);
            Intrinsics.checkNotNullExpressionValue(obj, "toString(...)");
        } else if (value instanceof byte[]) {
            obj = Arrays.toString((byte[]) value);
            Intrinsics.checkNotNullExpressionValue(obj, "toString(...)");
        } else if (value instanceof short[]) {
            obj = Arrays.toString((short[]) value);
            Intrinsics.checkNotNullExpressionValue(obj, "toString(...)");
        } else if (value instanceof int[]) {
            obj = Arrays.toString((int[]) value);
            Intrinsics.checkNotNullExpressionValue(obj, "toString(...)");
        } else if (value instanceof float[]) {
            obj = Arrays.toString((float[]) value);
            Intrinsics.checkNotNullExpressionValue(obj, "toString(...)");
        } else if (value instanceof long[]) {
            obj = Arrays.toString((long[]) value);
            Intrinsics.checkNotNullExpressionValue(obj, "toString(...)");
        } else if (value instanceof double[]) {
            obj = Arrays.toString((double[]) value);
            Intrinsics.checkNotNullExpressionValue(obj, "toString(...)");
        } else if (value instanceof Object[]) {
            obj = Arrays.toString((Object[]) value);
            Intrinsics.checkNotNullExpressionValue(obj, "toString(...)");
        } else {
            obj = value.toString();
        }
        return str + '=' + obj;
    }

    private static final String n(Lazy lazy) {
        return (String) lazy.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Object o(Class cls, Map map, Lazy lazy, Lazy lazy2, List list, Object obj, Method method, Object[] objArr) {
        String name = method.getName();
        if (name != null) {
            int hashCode = name.hashCode();
            if (hashCode != -1776922004) {
                if (hashCode != 147696667) {
                    if (hashCode == 1444986633 && name.equals("annotationType")) {
                        return cls;
                    }
                } else if (name.equals("hashCode")) {
                    return Integer.valueOf(k(lazy2));
                }
            } else if (name.equals("toString")) {
                return n(lazy);
            }
        }
        if (Intrinsics.areEqual(name, "equals") && objArr != null && objArr.length == 1) {
            return Boolean.valueOf(i(cls, list, map, kotlin.collections.i.C0(objArr)));
        }
        if (map.containsKey(name)) {
            return map.get(name);
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Method is not supported: ");
        sb2.append(method);
        sb2.append(" (args: ");
        if (objArr == null) {
            objArr = new Object[0];
        }
        sb2.append(kotlin.collections.i.R0(objArr));
        sb2.append(')');
        throw new x2(sb2.toString());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Void p(int i10, String str, Class cls) {
        KClass e10;
        String qualifiedName;
        if (Intrinsics.areEqual(cls, Class.class)) {
            e10 = Reflection.getOrCreateKotlinClass(KClass.class);
        } else if (cls.isArray() && Intrinsics.areEqual(cls.getComponentType(), Class.class)) {
            e10 = Reflection.getOrCreateKotlinClass(KClass[].class);
        } else {
            e10 = bs.a.e(cls);
        }
        if (Intrinsics.areEqual(e10.getQualifiedName(), Reflection.getOrCreateKotlinClass(Object[].class).getQualifiedName())) {
            StringBuilder sb2 = new StringBuilder();
            sb2.append(e10.getQualifiedName());
            sb2.append('<');
            Class<?> componentType = bs.a.b(e10).getComponentType();
            Intrinsics.checkNotNullExpressionValue(componentType, "getComponentType(...)");
            sb2.append(bs.a.e(componentType).getQualifiedName());
            sb2.append('>');
            qualifiedName = sb2.toString();
        } else {
            qualifiedName = e10.getQualifiedName();
        }
        throw new IllegalArgumentException("Argument #" + i10 + ' ' + str + " is not of the required type " + qualifiedName);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Object q(Object obj, Class cls) {
        if (obj instanceof Class) {
            return null;
        }
        if (obj instanceof KClass) {
            obj = bs.a.b((KClass) obj);
        } else if (obj instanceof Object[]) {
            Object[] objArr = (Object[]) obj;
            if (objArr instanceof Class[]) {
                return null;
            }
            if (objArr instanceof KClass[]) {
                Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Array<kotlin.reflect.KClass<*>>");
                KClass[] kClassArr = (KClass[]) obj;
                ArrayList arrayList = new ArrayList(kClassArr.length);
                for (KClass kClass : kClassArr) {
                    arrayList.add(bs.a.b(kClass));
                }
                obj = arrayList.toArray(new Class[0]);
            } else {
                obj = objArr;
            }
        }
        if (!cls.isInstance(obj)) {
            return null;
        }
        return obj;
    }
}
