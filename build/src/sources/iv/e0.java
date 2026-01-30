package iv;

import java.lang.annotation.Annotation;
import java.lang.reflect.Array;
import java.lang.reflect.GenericArrayType;
import java.lang.reflect.GenericDeclaration;
import java.lang.reflect.Method;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.lang.reflect.TypeVariable;
import java.lang.reflect.WildcardType;
import java.util.Arrays;
import java.util.NoSuchElementException;
import java.util.Objects;
import kotlin.Unit;
import okhttp3.ResponseBody;
import okio.Buffer;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e0 {

    /* renamed from: a  reason: collision with root package name */
    static final Type[] f31335a = new Type[0];

    /* renamed from: b  reason: collision with root package name */
    private static boolean f31336b = true;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements GenericArrayType {

        /* renamed from: d  reason: collision with root package name */
        private final Type f31337d;

        a(Type type) {
            this.f31337d = type;
        }

        public boolean equals(Object obj) {
            if ((obj instanceof GenericArrayType) && e0.d(this, (GenericArrayType) obj)) {
                return true;
            }
            return false;
        }

        @Override // java.lang.reflect.GenericArrayType
        public Type getGenericComponentType() {
            return this.f31337d;
        }

        public int hashCode() {
            return this.f31337d.hashCode();
        }

        public String toString() {
            return e0.u(this.f31337d) + "[]";
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements ParameterizedType {

        /* renamed from: d  reason: collision with root package name */
        private final Type f31338d;

        /* renamed from: e  reason: collision with root package name */
        private final Type f31339e;

        /* renamed from: i  reason: collision with root package name */
        private final Type[] f31340i;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(Type type, Type type2, Type... typeArr) {
            boolean z10;
            if (type2 instanceof Class) {
                if (type == null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (z10 != (((Class) type2).getEnclosingClass() == null)) {
                    throw new IllegalArgumentException();
                }
            }
            for (Type type3 : typeArr) {
                Objects.requireNonNull(type3, "typeArgument == null");
                e0.b(type3);
            }
            this.f31338d = type;
            this.f31339e = type2;
            this.f31340i = (Type[]) typeArr.clone();
        }

        public boolean equals(Object obj) {
            if ((obj instanceof ParameterizedType) && e0.d(this, (ParameterizedType) obj)) {
                return true;
            }
            return false;
        }

        @Override // java.lang.reflect.ParameterizedType
        public Type[] getActualTypeArguments() {
            return (Type[]) this.f31340i.clone();
        }

        @Override // java.lang.reflect.ParameterizedType
        public Type getOwnerType() {
            return this.f31338d;
        }

        @Override // java.lang.reflect.ParameterizedType
        public Type getRawType() {
            return this.f31339e;
        }

        public int hashCode() {
            int i10;
            int hashCode = Arrays.hashCode(this.f31340i) ^ this.f31339e.hashCode();
            Type type = this.f31338d;
            if (type != null) {
                i10 = type.hashCode();
            } else {
                i10 = 0;
            }
            return hashCode ^ i10;
        }

        public String toString() {
            Type[] typeArr = this.f31340i;
            if (typeArr.length == 0) {
                return e0.u(this.f31339e);
            }
            StringBuilder sb2 = new StringBuilder((typeArr.length + 1) * 30);
            sb2.append(e0.u(this.f31339e));
            sb2.append("<");
            sb2.append(e0.u(this.f31340i[0]));
            for (int i10 = 1; i10 < this.f31340i.length; i10++) {
                sb2.append(", ");
                sb2.append(e0.u(this.f31340i[i10]));
            }
            sb2.append(">");
            return sb2.toString();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements WildcardType {

        /* renamed from: d  reason: collision with root package name */
        private final Type f31341d;

        /* renamed from: e  reason: collision with root package name */
        private final Type f31342e;

        c(Type[] typeArr, Type[] typeArr2) {
            if (typeArr2.length <= 1) {
                if (typeArr.length == 1) {
                    if (typeArr2.length == 1) {
                        typeArr2[0].getClass();
                        e0.b(typeArr2[0]);
                        if (typeArr[0] == Object.class) {
                            this.f31342e = typeArr2[0];
                            this.f31341d = Object.class;
                            return;
                        }
                        throw new IllegalArgumentException();
                    }
                    typeArr[0].getClass();
                    e0.b(typeArr[0]);
                    this.f31342e = null;
                    this.f31341d = typeArr[0];
                    return;
                }
                throw new IllegalArgumentException();
            }
            throw new IllegalArgumentException();
        }

        public boolean equals(Object obj) {
            if ((obj instanceof WildcardType) && e0.d(this, (WildcardType) obj)) {
                return true;
            }
            return false;
        }

        @Override // java.lang.reflect.WildcardType
        public Type[] getLowerBounds() {
            Type type = this.f31342e;
            return type != null ? new Type[]{type} : e0.f31335a;
        }

        @Override // java.lang.reflect.WildcardType
        public Type[] getUpperBounds() {
            return new Type[]{this.f31341d};
        }

        public int hashCode() {
            int i10;
            Type type = this.f31342e;
            if (type != null) {
                i10 = type.hashCode() + 31;
            } else {
                i10 = 1;
            }
            return i10 ^ (this.f31341d.hashCode() + 31);
        }

        public String toString() {
            if (this.f31342e != null) {
                return "? super " + e0.u(this.f31342e);
            } else if (this.f31341d == Object.class) {
                return "?";
            } else {
                return "? extends " + e0.u(this.f31341d);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static ResponseBody a(ResponseBody responseBody) {
        Buffer buffer = new Buffer();
        responseBody.source().e2(buffer);
        return ResponseBody.create(responseBody.contentType(), responseBody.contentLength(), buffer);
    }

    static void b(Type type) {
        if ((type instanceof Class) && ((Class) type).isPrimitive()) {
            throw new IllegalArgumentException();
        }
    }

    private static Class c(TypeVariable typeVariable) {
        GenericDeclaration genericDeclaration = typeVariable.getGenericDeclaration();
        if (genericDeclaration instanceof Class) {
            return (Class) genericDeclaration;
        }
        return null;
    }

    static boolean d(Type type, Type type2) {
        boolean z10;
        if (type == type2) {
            return true;
        }
        if (type instanceof Class) {
            return type.equals(type2);
        }
        if (type instanceof ParameterizedType) {
            if (!(type2 instanceof ParameterizedType)) {
                return false;
            }
            ParameterizedType parameterizedType = (ParameterizedType) type;
            ParameterizedType parameterizedType2 = (ParameterizedType) type2;
            Type ownerType = parameterizedType.getOwnerType();
            Type ownerType2 = parameterizedType2.getOwnerType();
            if (ownerType != ownerType2 && (ownerType == null || !ownerType.equals(ownerType2))) {
                z10 = false;
            } else {
                z10 = true;
            }
            boolean equals = parameterizedType.getRawType().equals(parameterizedType2.getRawType());
            boolean equals2 = Arrays.equals(parameterizedType.getActualTypeArguments(), parameterizedType2.getActualTypeArguments());
            if (z10 && equals && equals2) {
                return true;
            }
            return false;
        } else if (type instanceof GenericArrayType) {
            if (!(type2 instanceof GenericArrayType)) {
                return false;
            }
            return d(((GenericArrayType) type).getGenericComponentType(), ((GenericArrayType) type2).getGenericComponentType());
        } else if (type instanceof WildcardType) {
            if (!(type2 instanceof WildcardType)) {
                return false;
            }
            WildcardType wildcardType = (WildcardType) type;
            WildcardType wildcardType2 = (WildcardType) type2;
            if (Arrays.equals(wildcardType.getUpperBounds(), wildcardType2.getUpperBounds()) && Arrays.equals(wildcardType.getLowerBounds(), wildcardType2.getLowerBounds())) {
                return true;
            }
            return false;
        } else if (!(type instanceof TypeVariable) || !(type2 instanceof TypeVariable)) {
            return false;
        } else {
            TypeVariable typeVariable = (TypeVariable) type;
            TypeVariable typeVariable2 = (TypeVariable) type2;
            if (typeVariable.getGenericDeclaration() == typeVariable2.getGenericDeclaration() && typeVariable.getName().equals(typeVariable2.getName())) {
                return true;
            }
            return false;
        }
    }

    static Type e(Type type, Class cls, Class cls2) {
        if (cls2 == cls) {
            return type;
        }
        if (cls2.isInterface()) {
            Class<?>[] interfaces = cls.getInterfaces();
            int length = interfaces.length;
            for (int i10 = 0; i10 < length; i10++) {
                Class<?> cls3 = interfaces[i10];
                if (cls3 == cls2) {
                    return cls.getGenericInterfaces()[i10];
                }
                if (cls2.isAssignableFrom(cls3)) {
                    return e(cls.getGenericInterfaces()[i10], interfaces[i10], cls2);
                }
            }
        }
        if (!cls.isInterface()) {
            while (cls != Object.class) {
                Class<?> superclass = cls.getSuperclass();
                if (superclass == cls2) {
                    return cls.getGenericSuperclass();
                }
                if (cls2.isAssignableFrom(superclass)) {
                    return e(cls.getGenericSuperclass(), superclass, cls2);
                }
                cls = superclass;
            }
        }
        return cls2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Type f(int i10, ParameterizedType parameterizedType) {
        Type type = parameterizedType.getActualTypeArguments()[i10];
        if (type instanceof WildcardType) {
            return ((WildcardType) type).getLowerBounds()[0];
        }
        return type;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Type g(int i10, ParameterizedType parameterizedType) {
        Type[] actualTypeArguments = parameterizedType.getActualTypeArguments();
        if (i10 >= 0 && i10 < actualTypeArguments.length) {
            Type type = actualTypeArguments[i10];
            if (type instanceof WildcardType) {
                return ((WildcardType) type).getUpperBounds()[0];
            }
            return type;
        }
        throw new IllegalArgumentException("Index " + i10 + " not in range [0," + actualTypeArguments.length + ") for " + parameterizedType);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Class h(Type type) {
        Objects.requireNonNull(type, "type == null");
        if (type instanceof Class) {
            return (Class) type;
        }
        if (type instanceof ParameterizedType) {
            Type rawType = ((ParameterizedType) type).getRawType();
            if (rawType instanceof Class) {
                return (Class) rawType;
            }
            throw new IllegalArgumentException();
        } else if (type instanceof GenericArrayType) {
            return Array.newInstance(h(((GenericArrayType) type).getGenericComponentType()), 0).getClass();
        } else {
            if (type instanceof TypeVariable) {
                return Object.class;
            }
            if (type instanceof WildcardType) {
                return h(((WildcardType) type).getUpperBounds()[0]);
            }
            throw new IllegalArgumentException("Expected a Class, ParameterizedType, or GenericArrayType, but <" + type + "> is of type " + type.getClass().getName());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Type i(Type type, Class cls, Class cls2) {
        if (cls2.isAssignableFrom(cls)) {
            return r(type, cls, e(type, cls, cls2));
        }
        throw new IllegalArgumentException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean j(Type type) {
        String name;
        if (type instanceof Class) {
            return false;
        }
        if (type instanceof ParameterizedType) {
            for (Type type2 : ((ParameterizedType) type).getActualTypeArguments()) {
                if (j(type2)) {
                    return true;
                }
            }
            return false;
        } else if (type instanceof GenericArrayType) {
            return j(((GenericArrayType) type).getGenericComponentType());
        } else {
            if ((type instanceof TypeVariable) || (type instanceof WildcardType)) {
                return true;
            }
            if (type == null) {
                name = "null";
            } else {
                name = type.getClass().getName();
            }
            throw new IllegalArgumentException("Expected a Class, ParameterizedType, or GenericArrayType, but <" + type + "> is of type " + name);
        }
    }

    private static int k(Object[] objArr, Object obj) {
        for (int i10 = 0; i10 < objArr.length; i10++) {
            if (obj.equals(objArr[i10])) {
                return i10;
            }
        }
        throw new NoSuchElementException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean l(Annotation[] annotationArr, Class cls) {
        for (Annotation annotation : annotationArr) {
            if (cls.isInstance(annotation)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean m(Type type) {
        if (!f31336b || type != Unit.class) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static RuntimeException n(Method method, String str, Object... objArr) {
        return o(method, null, str, objArr);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static RuntimeException o(Method method, Throwable th2, String str, Object... objArr) {
        String format = String.format(str, objArr);
        return new IllegalArgumentException(format + "\n    for method " + method.getDeclaringClass().getSimpleName() + "." + method.getName(), th2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static RuntimeException p(Method method, int i10, String str, Object... objArr) {
        String a10 = v.f31457b.a(method, i10);
        return n(method, str + " (" + a10 + ")", objArr);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static RuntimeException q(Method method, Throwable th2, int i10, String str, Object... objArr) {
        String a10 = v.f31457b.a(method, i10);
        return o(method, th2, str + " (" + a10 + ")", objArr);
    }

    /* JADX WARN: Code restructure failed: missing block: B:0:?, code lost:
        r10 = r10;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    static java.lang.reflect.Type r(java.lang.reflect.Type r8, java.lang.Class r9, java.lang.reflect.Type r10) {
        /*
        L0:
            boolean r0 = r10 instanceof java.lang.reflect.TypeVariable
            if (r0 == 0) goto Lf
            java.lang.reflect.TypeVariable r10 = (java.lang.reflect.TypeVariable) r10
            java.lang.reflect.Type r0 = s(r8, r9, r10)
            if (r0 != r10) goto Ld
            return r0
        Ld:
            r10 = r0
            goto L0
        Lf:
            boolean r0 = r10 instanceof java.lang.Class
            if (r0 == 0) goto L2d
            r0 = r10
            java.lang.Class r0 = (java.lang.Class) r0
            boolean r1 = r0.isArray()
            if (r1 == 0) goto L2d
            java.lang.Class r10 = r0.getComponentType()
            java.lang.reflect.Type r8 = r(r8, r9, r10)
            if (r10 != r8) goto L27
            return r0
        L27:
            iv.e0$a r9 = new iv.e0$a
            r9.<init>(r8)
            return r9
        L2d:
            boolean r0 = r10 instanceof java.lang.reflect.GenericArrayType
            if (r0 == 0) goto L44
            java.lang.reflect.GenericArrayType r10 = (java.lang.reflect.GenericArrayType) r10
            java.lang.reflect.Type r0 = r10.getGenericComponentType()
            java.lang.reflect.Type r8 = r(r8, r9, r0)
            if (r0 != r8) goto L3e
            return r10
        L3e:
            iv.e0$a r9 = new iv.e0$a
            r9.<init>(r8)
            return r9
        L44:
            boolean r0 = r10 instanceof java.lang.reflect.ParameterizedType
            r1 = 1
            r2 = 0
            if (r0 == 0) goto L86
            java.lang.reflect.ParameterizedType r10 = (java.lang.reflect.ParameterizedType) r10
            java.lang.reflect.Type r0 = r10.getOwnerType()
            java.lang.reflect.Type r3 = r(r8, r9, r0)
            if (r3 == r0) goto L58
            r0 = r1
            goto L59
        L58:
            r0 = r2
        L59:
            java.lang.reflect.Type[] r4 = r10.getActualTypeArguments()
            int r5 = r4.length
        L5e:
            if (r2 >= r5) goto L79
            r6 = r4[r2]
            java.lang.reflect.Type r6 = r(r8, r9, r6)
            r7 = r4[r2]
            if (r6 == r7) goto L76
            if (r0 != 0) goto L74
            java.lang.Object r0 = r4.clone()
            r4 = r0
            java.lang.reflect.Type[] r4 = (java.lang.reflect.Type[]) r4
            r0 = r1
        L74:
            r4[r2] = r6
        L76:
            int r2 = r2 + 1
            goto L5e
        L79:
            if (r0 == 0) goto L85
            iv.e0$b r8 = new iv.e0$b
            java.lang.reflect.Type r9 = r10.getRawType()
            r8.<init>(r3, r9, r4)
            return r8
        L85:
            return r10
        L86:
            boolean r0 = r10 instanceof java.lang.reflect.WildcardType
            if (r0 == 0) goto Lca
            java.lang.reflect.WildcardType r10 = (java.lang.reflect.WildcardType) r10
            java.lang.reflect.Type[] r0 = r10.getLowerBounds()
            java.lang.reflect.Type[] r3 = r10.getUpperBounds()
            int r4 = r0.length
            if (r4 != r1) goto Lb1
            r3 = r0[r2]
            java.lang.reflect.Type r8 = r(r8, r9, r3)
            r9 = r0[r2]
            if (r8 == r9) goto Lca
            iv.e0$c r9 = new iv.e0$c
            java.lang.reflect.Type[] r10 = new java.lang.reflect.Type[r1]
            java.lang.Class<java.lang.Object> r0 = java.lang.Object.class
            r10[r2] = r0
            java.lang.reflect.Type[] r0 = new java.lang.reflect.Type[r1]
            r0[r2] = r8
            r9.<init>(r10, r0)
            return r9
        Lb1:
            int r0 = r3.length
            if (r0 != r1) goto Lca
            r0 = r3[r2]
            java.lang.reflect.Type r8 = r(r8, r9, r0)
            r9 = r3[r2]
            if (r8 == r9) goto Lca
            iv.e0$c r9 = new iv.e0$c
            java.lang.reflect.Type[] r10 = new java.lang.reflect.Type[r1]
            r10[r2] = r8
            java.lang.reflect.Type[] r8 = iv.e0.f31335a
            r9.<init>(r10, r8)
            return r9
        Lca:
            return r10
        */
        throw new UnsupportedOperationException("Method not decompiled: iv.e0.r(java.lang.reflect.Type, java.lang.Class, java.lang.reflect.Type):java.lang.reflect.Type");
    }

    private static Type s(Type type, Class cls, TypeVariable typeVariable) {
        Class c10 = c(typeVariable);
        if (c10 != null) {
            Type e10 = e(type, cls, c10);
            if (e10 instanceof ParameterizedType) {
                return ((ParameterizedType) e10).getActualTypeArguments()[k(c10.getTypeParameters(), typeVariable)];
            }
        }
        return typeVariable;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void t(Throwable th2) {
        if (!(th2 instanceof VirtualMachineError)) {
            if (!(th2 instanceof ThreadDeath)) {
                if (!(th2 instanceof LinkageError)) {
                    return;
                }
                throw ((LinkageError) th2);
            }
            throw ((ThreadDeath) th2);
        }
        throw ((VirtualMachineError) th2);
    }

    static String u(Type type) {
        if (type instanceof Class) {
            return ((Class) type).getName();
        }
        return type.toString();
    }
}
