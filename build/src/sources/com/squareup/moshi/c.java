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
        final /* synthetic */ Constructor f17882a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Class f17883b;

        a(Constructor constructor, Class cls) {
            this.f17882a = constructor;
            this.f17883b = cls;
        }

        @Override // com.squareup.moshi.c
        public Object b() {
            return this.f17882a.newInstance(null);
        }

        public String toString() {
            return this.f17883b.getName();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class b extends c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Method f17884a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Object f17885b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Class f17886c;

        b(Method method, Object obj, Class cls) {
            this.f17884a = method;
            this.f17885b = obj;
            this.f17886c = cls;
        }

        @Override // com.squareup.moshi.c
        public Object b() {
            return this.f17884a.invoke(this.f17885b, this.f17886c);
        }

        public String toString() {
            return this.f17886c.getName();
        }
    }

    /* renamed from: com.squareup.moshi.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0216c extends c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Method f17887a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Class f17888b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ int f17889c;

        C0216c(Method method, Class cls, int i10) {
            this.f17887a = method;
            this.f17888b = cls;
            this.f17889c = i10;
        }

        @Override // com.squareup.moshi.c
        public Object b() {
            return this.f17887a.invoke(null, this.f17888b, Integer.valueOf(this.f17889c));
        }

        public String toString() {
            return this.f17888b.getName();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class d extends c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Method f17890a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Class f17891b;

        d(Method method, Class cls) {
            this.f17890a = method;
            this.f17891b = cls;
        }

        @Override // com.squareup.moshi.c
        public Object b() {
            return this.f17890a.invoke(null, this.f17891b, Object.class);
        }

        public String toString() {
            return this.f17891b.getName();
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
                return new C0216c(declaredMethod2, cls, intValue);
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
            throw an.c.t(e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract Object b();
}
