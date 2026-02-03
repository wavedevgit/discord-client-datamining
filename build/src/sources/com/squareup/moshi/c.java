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
        final /* synthetic */ Constructor f18514a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Class f18515b;

        a(Constructor constructor, Class cls) {
            this.f18514a = constructor;
            this.f18515b = cls;
        }

        @Override // com.squareup.moshi.c
        public Object b() {
            return this.f18514a.newInstance(null);
        }

        public String toString() {
            return this.f18515b.getName();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class b extends c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Method f18516a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Object f18517b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Class f18518c;

        b(Method method, Object obj, Class cls) {
            this.f18516a = method;
            this.f18517b = obj;
            this.f18518c = cls;
        }

        @Override // com.squareup.moshi.c
        public Object b() {
            return this.f18516a.invoke(this.f18517b, this.f18518c);
        }

        public String toString() {
            return this.f18518c.getName();
        }
    }

    /* renamed from: com.squareup.moshi.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0225c extends c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Method f18519a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Class f18520b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ int f18521c;

        C0225c(Method method, Class cls, int i10) {
            this.f18519a = method;
            this.f18520b = cls;
            this.f18521c = i10;
        }

        @Override // com.squareup.moshi.c
        public Object b() {
            return this.f18519a.invoke(null, this.f18520b, Integer.valueOf(this.f18521c));
        }

        public String toString() {
            return this.f18520b.getName();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class d extends c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Method f18522a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Class f18523b;

        d(Method method, Class cls) {
            this.f18522a = method;
            this.f18523b = cls;
        }

        @Override // com.squareup.moshi.c
        public Object b() {
            return this.f18522a.invoke(null, this.f18523b, Object.class);
        }

        public String toString() {
            return this.f18523b.getName();
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
                return new C0225c(declaredMethod2, cls, intValue);
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
            throw tm.c.t(e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract Object b();
}
