package com.squareup.moshi;

import java.io.ObjectInputStream;
import java.io.ObjectStreamClass;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Constructor f17496a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Class f17497b;

        a(Constructor constructor, Class cls) {
            this.f17496a = constructor;
            this.f17497b = cls;
        }

        @Override // com.squareup.moshi.c
        public Object b() {
            return this.f17496a.newInstance(null);
        }

        public String toString() {
            return this.f17497b.getName();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class b extends c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Method f17498a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Object f17499b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Class f17500c;

        b(Method method, Object obj, Class cls) {
            this.f17498a = method;
            this.f17499b = obj;
            this.f17500c = cls;
        }

        @Override // com.squareup.moshi.c
        public Object b() {
            return this.f17498a.invoke(this.f17499b, this.f17500c);
        }

        public String toString() {
            return this.f17500c.getName();
        }
    }

    /* renamed from: com.squareup.moshi.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0206c extends c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Method f17501a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Class f17502b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ int f17503c;

        C0206c(Method method, Class cls, int i10) {
            this.f17501a = method;
            this.f17502b = cls;
            this.f17503c = i10;
        }

        @Override // com.squareup.moshi.c
        public Object b() {
            return this.f17501a.invoke(null, this.f17502b, Integer.valueOf(this.f17503c));
        }

        public String toString() {
            return this.f17502b.getName();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class d extends c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Method f17504a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Class f17505b;

        d(Method method, Class cls) {
            this.f17504a = method;
            this.f17505b = cls;
        }

        @Override // com.squareup.moshi.c
        public Object b() {
            return this.f17504a.invoke(null, this.f17505b, Object.class);
        }

        public String toString() {
            return this.f17505b.getName();
        }
    }

    c() {
    }

    public static c a(Class cls) {
        try {
            try {
                try {
                    try {
                        Constructor declaredConstructor = cls.getDeclaredConstructor(null);
                        declaredConstructor.setAccessible(true);
                        return new a(declaredConstructor, cls);
                    } catch (Exception unused) {
                        throw new IllegalArgumentException("cannot construct instances of " + cls.getName());
                    }
                } catch (NoSuchMethodException unused2) {
                    Class<?> cls2 = Class.forName("sun.misc.Unsafe");
                    Field declaredField = cls2.getDeclaredField("theUnsafe");
                    declaredField.setAccessible(true);
                    return new b(cls2.getMethod("allocateInstance", Class.class), declaredField.get(null), cls);
                }
            } catch (ClassNotFoundException | NoSuchFieldException | NoSuchMethodException unused3) {
                Method declaredMethod = ObjectStreamClass.class.getDeclaredMethod("getConstructorId", Class.class);
                declaredMethod.setAccessible(true);
                int intValue = ((Integer) declaredMethod.invoke(null, Object.class)).intValue();
                Method declaredMethod2 = ObjectStreamClass.class.getDeclaredMethod("newInstance", Class.class, Integer.TYPE);
                declaredMethod2.setAccessible(true);
                return new C0206c(declaredMethod2, cls, intValue);
            } catch (IllegalAccessException unused4) {
                throw new AssertionError();
            }
        } catch (IllegalAccessException unused5) {
            throw new AssertionError();
        } catch (NoSuchMethodException unused6) {
            Method declaredMethod3 = ObjectInputStream.class.getDeclaredMethod("newInstance", Class.class, Class.class);
            declaredMethod3.setAccessible(true);
            return new d(declaredMethod3, cls);
        } catch (InvocationTargetException e10) {
            throw vm.c.t(e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract Object b();
}
