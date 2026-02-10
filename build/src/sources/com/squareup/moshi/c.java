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
        final /* synthetic */ Constructor f18022a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Class f18023b;

        a(Constructor constructor, Class cls) {
            this.f18022a = constructor;
            this.f18023b = cls;
        }

        @Override // com.squareup.moshi.c
        public Object b() {
            return this.f18022a.newInstance(null);
        }

        public String toString() {
            return this.f18023b.getName();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class b extends c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Method f18024a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Object f18025b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Class f18026c;

        b(Method method, Object obj, Class cls) {
            this.f18024a = method;
            this.f18025b = obj;
            this.f18026c = cls;
        }

        @Override // com.squareup.moshi.c
        public Object b() {
            return this.f18024a.invoke(this.f18025b, this.f18026c);
        }

        public String toString() {
            return this.f18026c.getName();
        }
    }

    /* renamed from: com.squareup.moshi.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0243c extends c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Method f18027a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Class f18028b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ int f18029c;

        C0243c(Method method, Class cls, int i10) {
            this.f18027a = method;
            this.f18028b = cls;
            this.f18029c = i10;
        }

        @Override // com.squareup.moshi.c
        public Object b() {
            return this.f18027a.invoke(null, this.f18028b, Integer.valueOf(this.f18029c));
        }

        public String toString() {
            return this.f18028b.getName();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class d extends c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Method f18030a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Class f18031b;

        d(Method method, Class cls) {
            this.f18030a = method;
            this.f18031b = cls;
        }

        @Override // com.squareup.moshi.c
        public Object b() {
            return this.f18030a.invoke(null, this.f18031b, Object.class);
        }

        public String toString() {
            return this.f18031b.getName();
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
                return new C0243c(declaredMethod2, cls, intValue);
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
            throw bn.c.t(e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract Object b();
}
