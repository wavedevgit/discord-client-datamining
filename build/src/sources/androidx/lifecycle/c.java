package androidx.lifecycle;

import androidx.lifecycle.Lifecycle;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class c {

    /* renamed from: c  reason: collision with root package name */
    static c f4466c = new c();

    /* renamed from: a  reason: collision with root package name */
    private final Map f4467a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final Map f4468b = new HashMap();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final Map f4469a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        final Map f4470b;

        a(Map map) {
            this.f4470b = map;
            for (Map.Entry entry : map.entrySet()) {
                Lifecycle.a aVar = (Lifecycle.a) entry.getValue();
                List list = (List) this.f4469a.get(aVar);
                if (list == null) {
                    list = new ArrayList();
                    this.f4469a.put(aVar, list);
                }
                list.add((b) entry.getKey());
            }
        }

        private static void b(List list, LifecycleOwner lifecycleOwner, Lifecycle.a aVar, Object obj) {
            if (list != null) {
                for (int size = list.size() - 1; size >= 0; size--) {
                    ((b) list.get(size)).a(lifecycleOwner, aVar, obj);
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void a(LifecycleOwner lifecycleOwner, Lifecycle.a aVar, Object obj) {
            b((List) this.f4469a.get(aVar), lifecycleOwner, aVar, obj);
            b((List) this.f4469a.get(Lifecycle.a.ON_ANY), lifecycleOwner, aVar, obj);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        final int f4471a;

        /* renamed from: b  reason: collision with root package name */
        final Method f4472b;

        b(int i10, Method method) {
            this.f4471a = i10;
            this.f4472b = method;
            method.setAccessible(true);
        }

        void a(LifecycleOwner lifecycleOwner, Lifecycle.a aVar, Object obj) {
            try {
                int i10 = this.f4471a;
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 != 2) {
                            return;
                        }
                        this.f4472b.invoke(obj, lifecycleOwner, aVar);
                        return;
                    }
                    this.f4472b.invoke(obj, lifecycleOwner);
                    return;
                }
                this.f4472b.invoke(obj, null);
            } catch (IllegalAccessException e10) {
                throw new RuntimeException(e10);
            } catch (InvocationTargetException e11) {
                throw new RuntimeException("Failed to call observer method", e11.getCause());
            }
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f4471a == bVar.f4471a && this.f4472b.getName().equals(bVar.f4472b.getName())) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f4471a * 31) + this.f4472b.getName().hashCode();
        }
    }

    c() {
    }

    private a a(Class cls, Method[] methodArr) {
        int i10;
        a c10;
        Class superclass = cls.getSuperclass();
        HashMap hashMap = new HashMap();
        if (superclass != null && (c10 = c(superclass)) != null) {
            hashMap.putAll(c10.f4470b);
        }
        for (Class<?> cls2 : cls.getInterfaces()) {
            for (Map.Entry entry : c(cls2).f4470b.entrySet()) {
                e(hashMap, (b) entry.getKey(), (Lifecycle.a) entry.getValue(), cls);
            }
        }
        if (methodArr == null) {
            methodArr = b(cls);
        }
        boolean z10 = false;
        for (Method method : methodArr) {
            w wVar = (w) method.getAnnotation(w.class);
            if (wVar != null) {
                Class<?>[] parameterTypes = method.getParameterTypes();
                if (parameterTypes.length > 0) {
                    if (LifecycleOwner.class.isAssignableFrom(parameterTypes[0])) {
                        i10 = 1;
                    } else {
                        throw new IllegalArgumentException("invalid parameter type. Must be one and instanceof LifecycleOwner");
                    }
                } else {
                    i10 = 0;
                }
                Lifecycle.a value = wVar.value();
                if (parameterTypes.length > 1) {
                    if (Lifecycle.a.class.isAssignableFrom(parameterTypes[1])) {
                        if (value == Lifecycle.a.ON_ANY) {
                            i10 = 2;
                        } else {
                            throw new IllegalArgumentException("Second arg is supported only for ON_ANY value");
                        }
                    } else {
                        throw new IllegalArgumentException("invalid parameter type. second arg must be an event");
                    }
                }
                if (parameterTypes.length <= 2) {
                    e(hashMap, new b(i10, method), value, cls);
                    z10 = true;
                } else {
                    throw new IllegalArgumentException("cannot have more than 2 params");
                }
            }
        }
        a aVar = new a(hashMap);
        this.f4467a.put(cls, aVar);
        this.f4468b.put(cls, Boolean.valueOf(z10));
        return aVar;
    }

    private Method[] b(Class cls) {
        try {
            return cls.getDeclaredMethods();
        } catch (NoClassDefFoundError e10) {
            throw new IllegalArgumentException("The observer class has some methods that use newer APIs which are not available in the current OS version. Lifecycles cannot access even other methods so you should make sure that your observer classes only access framework classes that are available in your min API level OR use lifecycle:compiler annotation processor.", e10);
        }
    }

    private void e(Map map, b bVar, Lifecycle.a aVar, Class cls) {
        Lifecycle.a aVar2 = (Lifecycle.a) map.get(bVar);
        if (aVar2 != null && aVar != aVar2) {
            Method method = bVar.f4472b;
            throw new IllegalArgumentException("Method " + method.getName() + " in " + cls.getName() + " already declared with different @OnLifecycleEvent value: previous value " + aVar2 + ", new value " + aVar);
        } else if (aVar2 == null) {
            map.put(bVar, aVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a c(Class cls) {
        a aVar = (a) this.f4467a.get(cls);
        if (aVar != null) {
            return aVar;
        }
        return a(cls, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean d(Class cls) {
        Boolean bool = (Boolean) this.f4468b.get(cls);
        if (bool != null) {
            return bool.booleanValue();
        }
        Method[] b10 = b(cls);
        for (Method method : b10) {
            if (((w) method.getAnnotation(w.class)) != null) {
                a(cls, b10);
                return true;
            }
        }
        this.f4468b.put(cls, Boolean.FALSE);
        return false;
    }
}
