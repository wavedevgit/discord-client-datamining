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
        final /* synthetic */ Constructor f18771a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Class f18772b;

        a(Constructor constructor, Class cls) {
            this.f18771a = constructor;
            this.f18772b = cls;
        }

        @Override // com.squareup.moshi.c
        public Object b() {
            return this.f18771a.newInstance(null);
        }

        public String toString() {
            return this.f18772b.getName();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class b extends c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Method f18773a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Object f18774b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Class f18775c;

        b(Method method, Object obj, Class cls) {
            this.f18773a = method;
            this.f18774b = obj;
            this.f18775c = cls;
        }

        @Override // com.squareup.moshi.c
        public Object b() {
            return this.f18773a.invoke(this.f18774b, this.f18775c);
        }

        public String toString() {
            return this.f18775c.getName();
        }
    }

    /* renamed from: com.squareup.moshi.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0224c extends c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Method f18776a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Class f18777b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ int f18778c;

        C0224c(Method method, Class cls, int i10) {
            this.f18776a = method;
            this.f18777b = cls;
            this.f18778c = i10;
        }

        @Override // com.squareup.moshi.c
        public Object b() {
            return this.f18776a.invoke(null, this.f18777b, Integer.valueOf(this.f18778c));
        }

        public String toString() {
            return this.f18777b.getName();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class d extends c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Method f18779a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Class f18780b;

        d(Method method, Class cls) {
            this.f18779a = method;
            this.f18780b = cls;
        }

        @Override // com.squareup.moshi.c
        public Object b() {
            return this.f18779a.invoke(null, this.f18780b, Object.class);
        }

        public String toString() {
            return this.f18780b.getName();
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
            throw dn.c.t(e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract Object b();
}
