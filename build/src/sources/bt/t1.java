package bt;

import java.lang.reflect.Array;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Map;
import kotlin.Unit;
import kotlin.jvm.internal.BooleanCompanionObject;
import kotlin.jvm.internal.ByteCompanionObject;
import kotlin.jvm.internal.CharCompanionObject;
import kotlin.jvm.internal.DoubleCompanionObject;
import kotlin.jvm.internal.FloatCompanionObject;
import kotlin.jvm.internal.IntCompanionObject;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.ShortCompanionObject;
import kotlin.jvm.internal.StringCompanionObject;
import kotlin.reflect.KClass;
import kotlin.time.Duration;
import kotlinx.serialization.KSerializer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class t1 {
    private static final Object a(Class cls, String str) {
        try {
            Field declaredField = cls.getDeclaredField(str);
            declaredField.setAccessible(true);
            return declaredField.get(null);
        } catch (Throwable unused) {
            return null;
        }
    }

    public static final KSerializer b(KClass kClass) {
        Intrinsics.checkNotNullParameter(kClass, "<this>");
        return d(kClass, new KSerializer[0]);
    }

    public static final KSerializer c(Class cls, KSerializer... args) {
        Intrinsics.checkNotNullParameter(cls, "<this>");
        Intrinsics.checkNotNullParameter(args, "args");
        if (cls.isEnum() && m(cls)) {
            return e(cls);
        }
        KSerializer k10 = k(cls, (KSerializer[]) Arrays.copyOf(args, args.length));
        if (k10 != null) {
            return k10;
        }
        KSerializer h10 = h(cls);
        if (h10 != null) {
            return h10;
        }
        KSerializer f10 = f(cls, (KSerializer[]) Arrays.copyOf(args, args.length));
        if (f10 != null) {
            return f10;
        }
        if (n(cls)) {
            return new ys.g(wr.a.e(cls));
        }
        return null;
    }

    public static final KSerializer d(KClass kClass, KSerializer... args) {
        Intrinsics.checkNotNullParameter(kClass, "<this>");
        Intrinsics.checkNotNullParameter(args, "args");
        return c(wr.a.b(kClass), (KSerializer[]) Arrays.copyOf(args, args.length));
    }

    private static final KSerializer e(Class cls) {
        Object[] enumConstants = cls.getEnumConstants();
        String canonicalName = cls.getCanonicalName();
        Intrinsics.checkNotNullExpressionValue(canonicalName, "getCanonicalName(...)");
        Intrinsics.checkNotNull(enumConstants, "null cannot be cast to non-null type kotlin.Array<out kotlin.Enum<*>>");
        return new d0(canonicalName, (Enum[]) enumConstants);
    }

    private static final KSerializer f(Class cls, KSerializer... kSerializerArr) {
        Object obj;
        Field field;
        KSerializer j10;
        Object g10 = g(cls);
        if (g10 != null && (j10 = j(g10, (KSerializer[]) Arrays.copyOf(kSerializerArr, kSerializerArr.length))) != null) {
            return j10;
        }
        try {
            Class<?>[] declaredClasses = cls.getDeclaredClasses();
            Intrinsics.checkNotNullExpressionValue(declaredClasses, "getDeclaredClasses(...)");
            int length = declaredClasses.length;
            int i10 = 0;
            Class<?> cls2 = null;
            boolean z10 = false;
            while (true) {
                if (i10 < length) {
                    Class<?> cls3 = declaredClasses[i10];
                    if (Intrinsics.areEqual(cls3.getSimpleName(), "$serializer")) {
                        if (z10) {
                            break;
                        }
                        z10 = true;
                        cls2 = cls3;
                    }
                    i10++;
                } else if (!z10) {
                }
            }
            cls2 = null;
            if (cls2 != null && (field = cls2.getField("INSTANCE")) != null) {
                obj = field.get(null);
            } else {
                obj = null;
            }
            if (obj instanceof KSerializer) {
                return (KSerializer) obj;
            }
        } catch (NoSuchFieldException unused) {
        }
        return null;
    }

    private static final Object g(Class cls) {
        Class<?> cls2;
        Class<?>[] declaredClasses = cls.getDeclaredClasses();
        Intrinsics.checkNotNullExpressionValue(declaredClasses, "getDeclaredClasses(...)");
        int length = declaredClasses.length;
        int i10 = 0;
        while (true) {
            if (i10 < length) {
                cls2 = declaredClasses[i10];
                if (cls2.getAnnotation(f1.class) != null) {
                    break;
                }
                i10++;
            } else {
                cls2 = null;
                break;
            }
        }
        if (cls2 == null) {
            return null;
        }
        String simpleName = cls2.getSimpleName();
        Intrinsics.checkNotNullExpressionValue(simpleName, "getSimpleName(...)");
        return a(cls, simpleName);
    }

    /* JADX WARN: Code restructure failed: missing block: B:22:0x0056, code lost:
        if (r5 == false) goto L21;
     */
    /* JADX WARN: Code restructure failed: missing block: B:38:0x009d, code lost:
        if (r4 == false) goto L38;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static final kotlinx.serialization.KSerializer h(java.lang.Class r11) {
        /*
            java.lang.String r0 = r11.getCanonicalName()
            r1 = 0
            if (r0 == 0) goto Lae
            java.lang.String r2 = "java."
            r3 = 0
            r4 = 2
            boolean r2 = kotlin.text.StringsKt.P(r0, r2, r3, r4, r1)
            if (r2 != 0) goto Lae
            java.lang.String r2 = "kotlin."
            boolean r0 = kotlin.text.StringsKt.P(r0, r2, r3, r4, r1)
            if (r0 == 0) goto L1b
            goto Lae
        L1b:
            java.lang.reflect.Field[] r0 = r11.getDeclaredFields()
            java.lang.String r2 = "getDeclaredFields(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r2)
            int r2 = r0.length
            r6 = r1
            r4 = r3
            r5 = r4
        L28:
            r7 = 1
            if (r4 >= r2) goto L56
            r8 = r0[r4]
            java.lang.String r9 = r8.getName()
            java.lang.String r10 = "INSTANCE"
            boolean r9 = kotlin.jvm.internal.Intrinsics.areEqual(r9, r10)
            if (r9 == 0) goto L53
            java.lang.Class r9 = r8.getType()
            boolean r9 = kotlin.jvm.internal.Intrinsics.areEqual(r9, r11)
            if (r9 == 0) goto L53
            int r9 = r8.getModifiers()
            boolean r9 = java.lang.reflect.Modifier.isStatic(r9)
            if (r9 == 0) goto L53
            if (r5 == 0) goto L51
        L4f:
            r6 = r1
            goto L59
        L51:
            r5 = r7
            r6 = r8
        L53:
            int r4 = r4 + 1
            goto L28
        L56:
            if (r5 != 0) goto L59
            goto L4f
        L59:
            if (r6 != 0) goto L5c
            return r1
        L5c:
            java.lang.Object r0 = r6.get(r1)
            java.lang.reflect.Method[] r11 = r11.getMethods()
            java.lang.String r2 = "getMethods(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r11, r2)
            int r2 = r11.length
            r5 = r1
            r4 = r3
        L6c:
            if (r3 >= r2) goto L9d
            r6 = r11[r3]
            java.lang.String r8 = r6.getName()
            java.lang.String r9 = "serializer"
            boolean r8 = kotlin.jvm.internal.Intrinsics.areEqual(r8, r9)
            if (r8 == 0) goto L9a
            java.lang.Class[] r8 = r6.getParameterTypes()
            java.lang.String r9 = "getParameterTypes(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r8, r9)
            int r8 = r8.length
            if (r8 != 0) goto L9a
            java.lang.Class r8 = r6.getReturnType()
            java.lang.Class<kotlinx.serialization.KSerializer> r9 = kotlinx.serialization.KSerializer.class
            boolean r8 = kotlin.jvm.internal.Intrinsics.areEqual(r8, r9)
            if (r8 == 0) goto L9a
            if (r4 == 0) goto L98
        L96:
            r5 = r1
            goto La0
        L98:
            r5 = r6
            r4 = r7
        L9a:
            int r3 = r3 + 1
            goto L6c
        L9d:
            if (r4 != 0) goto La0
            goto L96
        La0:
            if (r5 != 0) goto La3
            return r1
        La3:
            java.lang.Object r11 = r5.invoke(r0, r1)
            boolean r0 = r11 instanceof kotlinx.serialization.KSerializer
            if (r0 == 0) goto Lae
            kotlinx.serialization.KSerializer r11 = (kotlinx.serialization.KSerializer) r11
            return r11
        Lae:
            return r1
        */
        throw new UnsupportedOperationException("Method not decompiled: bt.t1.h(java.lang.Class):kotlinx.serialization.KSerializer");
    }

    public static final Map i() {
        Map c10 = kotlin.collections.o0.c();
        c10.put(Reflection.getOrCreateKotlinClass(String.class), zs.a.J(StringCompanionObject.INSTANCE));
        c10.put(Reflection.getOrCreateKotlinClass(Character.TYPE), zs.a.D(CharCompanionObject.INSTANCE));
        c10.put(Reflection.getOrCreateKotlinClass(char[].class), zs.a.d());
        c10.put(Reflection.getOrCreateKotlinClass(Double.TYPE), zs.a.E(DoubleCompanionObject.INSTANCE));
        c10.put(Reflection.getOrCreateKotlinClass(double[].class), zs.a.e());
        c10.put(Reflection.getOrCreateKotlinClass(Float.TYPE), zs.a.F(FloatCompanionObject.INSTANCE));
        c10.put(Reflection.getOrCreateKotlinClass(float[].class), zs.a.f());
        c10.put(Reflection.getOrCreateKotlinClass(Long.TYPE), zs.a.H(LongCompanionObject.INSTANCE));
        c10.put(Reflection.getOrCreateKotlinClass(long[].class), zs.a.i());
        c10.put(Reflection.getOrCreateKotlinClass(jr.b0.class), zs.a.y(jr.b0.f32154e));
        c10.put(Reflection.getOrCreateKotlinClass(Integer.TYPE), zs.a.G(IntCompanionObject.INSTANCE));
        c10.put(Reflection.getOrCreateKotlinClass(int[].class), zs.a.g());
        c10.put(Reflection.getOrCreateKotlinClass(jr.z.class), zs.a.x(jr.z.f32202e));
        c10.put(Reflection.getOrCreateKotlinClass(Short.TYPE), zs.a.I(ShortCompanionObject.INSTANCE));
        c10.put(Reflection.getOrCreateKotlinClass(short[].class), zs.a.o());
        c10.put(Reflection.getOrCreateKotlinClass(jr.e0.class), zs.a.z(jr.e0.f32165e));
        c10.put(Reflection.getOrCreateKotlinClass(Byte.TYPE), zs.a.C(ByteCompanionObject.INSTANCE));
        c10.put(Reflection.getOrCreateKotlinClass(byte[].class), zs.a.c());
        c10.put(Reflection.getOrCreateKotlinClass(jr.x.class), zs.a.w(jr.x.f32197e));
        c10.put(Reflection.getOrCreateKotlinClass(Boolean.TYPE), zs.a.B(BooleanCompanionObject.INSTANCE));
        c10.put(Reflection.getOrCreateKotlinClass(boolean[].class), zs.a.b());
        c10.put(Reflection.getOrCreateKotlinClass(Unit.class), zs.a.A(Unit.f33074a));
        c10.put(Reflection.getOrCreateKotlinClass(Void.class), zs.a.l());
        try {
            c10.put(Reflection.getOrCreateKotlinClass(Duration.class), zs.a.K(Duration.f36073e));
        } catch (ClassNotFoundException | NoClassDefFoundError unused) {
        }
        try {
            c10.put(Reflection.getOrCreateKotlinClass(jr.c0.class), zs.a.s());
        } catch (ClassNotFoundException | NoClassDefFoundError unused2) {
        }
        try {
            c10.put(Reflection.getOrCreateKotlinClass(jr.a0.class), zs.a.r());
        } catch (ClassNotFoundException | NoClassDefFoundError unused3) {
        }
        try {
            c10.put(Reflection.getOrCreateKotlinClass(jr.f0.class), zs.a.t());
        } catch (ClassNotFoundException | NoClassDefFoundError unused4) {
        }
        try {
            c10.put(Reflection.getOrCreateKotlinClass(jr.y.class), zs.a.q());
        } catch (ClassNotFoundException | NoClassDefFoundError unused5) {
        }
        try {
            c10.put(Reflection.getOrCreateKotlinClass(gs.a.class), zs.a.v(gs.a.f27390i));
        } catch (ClassNotFoundException | NoClassDefFoundError unused6) {
        }
        return kotlin.collections.o0.b(c10);
    }

    private static final KSerializer j(Object obj, KSerializer... kSerializerArr) {
        Class[] clsArr;
        try {
            if (kSerializerArr.length == 0) {
                clsArr = new Class[0];
            } else {
                int length = kSerializerArr.length;
                Class[] clsArr2 = new Class[length];
                for (int i10 = 0; i10 < length; i10++) {
                    clsArr2[i10] = KSerializer.class;
                }
                clsArr = clsArr2;
            }
            Object invoke = obj.getClass().getDeclaredMethod("serializer", (Class[]) Arrays.copyOf(clsArr, clsArr.length)).invoke(obj, Arrays.copyOf(kSerializerArr, kSerializerArr.length));
            if (!(invoke instanceof KSerializer)) {
                return null;
            }
            return (KSerializer) invoke;
        } catch (NoSuchMethodException unused) {
            return null;
        } catch (InvocationTargetException e10) {
            Throwable cause = e10.getCause();
            if (cause != null) {
                String message = cause.getMessage();
                if (message == null) {
                    message = e10.getMessage();
                }
                throw new InvocationTargetException(cause, message);
            }
            throw e10;
        }
    }

    private static final KSerializer k(Class cls, KSerializer... kSerializerArr) {
        Object a10 = a(cls, "Companion");
        if (a10 == null) {
            return null;
        }
        return j(a10, (KSerializer[]) Arrays.copyOf(kSerializerArr, kSerializerArr.length));
    }

    public static final boolean l(KClass kClass) {
        Intrinsics.checkNotNullParameter(kClass, "<this>");
        return wr.a.b(kClass).isInterface();
    }

    private static final boolean m(Class cls) {
        if (cls.getAnnotation(ys.m.class) == null && cls.getAnnotation(ys.d.class) == null) {
            return true;
        }
        return false;
    }

    private static final boolean n(Class cls) {
        if (cls.getAnnotation(ys.d.class) != null) {
            return true;
        }
        ys.m mVar = (ys.m) cls.getAnnotation(ys.m.class);
        if (mVar != null && Intrinsics.areEqual(Reflection.getOrCreateKotlinClass(mVar.with()), Reflection.getOrCreateKotlinClass(ys.g.class))) {
            return true;
        }
        return false;
    }

    public static final boolean o(KClass rootClass) {
        Intrinsics.checkNotNullParameter(rootClass, "rootClass");
        return wr.a.b(rootClass).isArray();
    }

    public static final Void p(KClass kClass) {
        Intrinsics.checkNotNullParameter(kClass, "<this>");
        u1.f(kClass);
        throw new jr.h();
    }

    public static final Void q(Class cls) {
        Intrinsics.checkNotNullParameter(cls, "<this>");
        throw new ys.n(u1.e(wr.a.e(cls)));
    }

    public static final Object[] r(ArrayList arrayList, KClass eClass) {
        Intrinsics.checkNotNullParameter(arrayList, "<this>");
        Intrinsics.checkNotNullParameter(eClass, "eClass");
        Object newInstance = Array.newInstance(wr.a.b(eClass), arrayList.size());
        Intrinsics.checkNotNull(newInstance, "null cannot be cast to non-null type kotlin.Array<E of kotlinx.serialization.internal.PlatformKt.toNativeArrayImpl>");
        Object[] array = arrayList.toArray((Object[]) newInstance);
        Intrinsics.checkNotNullExpressionValue(array, "toArray(...)");
        return array;
    }
}
