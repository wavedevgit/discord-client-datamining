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
        final /* synthetic */ Constructor f17902a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Class f17903b;

        a(Constructor constructor, Class cls) {
            this.f17902a = constructor;
            this.f17903b = cls;
        }

        @Override // com.squareup.moshi.c
        public Object b() {
            return this.f17902a.newInstance(null);
        }

        public String toString() {
            return this.f17903b.getName();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class b extends c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Method f17904a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Object f17905b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Class f17906c;

        b(Method method, Object obj, Class cls) {
            this.f17904a = method;
            this.f17905b = obj;
            this.f17906c = cls;
        }

        @Override // com.squareup.moshi.c
        public Object b() {
            return this.f17904a.invoke(this.f17905b, this.f17906c);
        }

        public String toString() {
            return this.f17906c.getName();
        }
    }

    /* renamed from: com.squareup.moshi.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0224c extends c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Method f17907a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Class f17908b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ int f17909c;

        C0224c(Method method, Class cls, int i10) {
            this.f17907a = method;
            this.f17908b = cls;
            this.f17909c = i10;
        }

        @Override // com.squareup.moshi.c
        public Object b() {
            return this.f17907a.invoke(null, this.f17908b, Integer.valueOf(this.f17909c));
        }

        public String toString() {
            return this.f17908b.getName();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class d extends c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Method f17910a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Class f17911b;

        d(Method method, Class cls) {
            this.f17910a = method;
            this.f17911b = cls;
        }

        @Override // com.squareup.moshi.c
        public Object b() {
            return this.f17910a.invoke(null, this.f17911b, Object.class);
        }

        public String toString() {
            return this.f17911b.getName();
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
                return new C0224c(declaredMethod2, cls, intValue);
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
            throw ym.c.t(e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract Object b();
}
