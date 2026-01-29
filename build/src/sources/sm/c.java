package sm;

import com.squareup.moshi.a0;
import com.squareup.moshi.g;
import com.squareup.moshi.h;
import com.squareup.moshi.i;
import com.squareup.moshi.j;
import com.squareup.moshi.l;
import com.squareup.moshi.m;
import com.squareup.moshi.w;
import java.lang.annotation.Annotation;
import java.lang.reflect.AnnotatedElement;
import java.lang.reflect.Constructor;
import java.lang.reflect.GenericArrayType;
import java.lang.reflect.GenericDeclaration;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.lang.reflect.TypeVariable;
import java.lang.reflect.WildcardType;
import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    public static final Set f49079a;

    /* renamed from: b  reason: collision with root package name */
    public static final Type[] f49080b;

    /* renamed from: c  reason: collision with root package name */
    public static final Class f49081c;

    /* renamed from: d  reason: collision with root package name */
    private static final Class f49082d;

    /* renamed from: e  reason: collision with root package name */
    private static final Map f49083e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements GenericArrayType {

        /* renamed from: d  reason: collision with root package name */
        private final Type f49084d;

        public a(Type type) {
            this.f49084d = c.a(type);
        }

        public boolean equals(Object obj) {
            if ((obj instanceof GenericArrayType) && a0.d(this, (GenericArrayType) obj)) {
                return true;
            }
            return false;
        }

        @Override // java.lang.reflect.GenericArrayType
        public Type getGenericComponentType() {
            return this.f49084d;
        }

        public int hashCode() {
            return this.f49084d.hashCode();
        }

        public String toString() {
            return c.v(this.f49084d) + "[]";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements ParameterizedType {

        /* renamed from: d  reason: collision with root package name */
        private final Type f49085d;

        /* renamed from: e  reason: collision with root package name */
        private final Type f49086e;

        /* renamed from: i  reason: collision with root package name */
        public final Type[] f49087i;

        public b(Type type, Type type2, Type... typeArr) {
            Type a10;
            if (type2 instanceof Class) {
                Class<?> enclosingClass = ((Class) type2).getEnclosingClass();
                if (type != null) {
                    if (enclosingClass == null || a0.g(type) != enclosingClass) {
                        throw new IllegalArgumentException("unexpected owner type for " + type2 + ": " + type);
                    }
                } else if (enclosingClass != null) {
                    throw new IllegalArgumentException("unexpected owner type for " + type2 + ": null");
                }
            }
            if (type == null) {
                a10 = null;
            } else {
                a10 = c.a(type);
            }
            this.f49085d = a10;
            this.f49086e = c.a(type2);
            this.f49087i = (Type[]) typeArr.clone();
            int i10 = 0;
            while (true) {
                Type[] typeArr2 = this.f49087i;
                if (i10 < typeArr2.length) {
                    typeArr2[i10].getClass();
                    c.b(this.f49087i[i10]);
                    Type[] typeArr3 = this.f49087i;
                    typeArr3[i10] = c.a(typeArr3[i10]);
                    i10++;
                } else {
                    return;
                }
            }
        }

        public boolean equals(Object obj) {
            if ((obj instanceof ParameterizedType) && a0.d(this, (ParameterizedType) obj)) {
                return true;
            }
            return false;
        }

        @Override // java.lang.reflect.ParameterizedType
        public Type[] getActualTypeArguments() {
            return (Type[]) this.f49087i.clone();
        }

        @Override // java.lang.reflect.ParameterizedType
        public Type getOwnerType() {
            return this.f49085d;
        }

        @Override // java.lang.reflect.ParameterizedType
        public Type getRawType() {
            return this.f49086e;
        }

        public int hashCode() {
            return (Arrays.hashCode(this.f49087i) ^ this.f49086e.hashCode()) ^ c.g(this.f49085d);
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder((this.f49087i.length + 1) * 30);
            sb2.append(c.v(this.f49086e));
            if (this.f49087i.length == 0) {
                return sb2.toString();
            }
            sb2.append("<");
            sb2.append(c.v(this.f49087i[0]));
            for (int i10 = 1; i10 < this.f49087i.length; i10++) {
                sb2.append(", ");
                sb2.append(c.v(this.f49087i[i10]));
            }
            sb2.append(">");
            return sb2.toString();
        }
    }

    /* renamed from: sm.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0628c implements WildcardType {

        /* renamed from: d  reason: collision with root package name */
        private final Type f49088d;

        /* renamed from: e  reason: collision with root package name */
        private final Type f49089e;

        public C0628c(Type[] typeArr, Type[] typeArr2) {
            if (typeArr2.length <= 1) {
                if (typeArr.length == 1) {
                    if (typeArr2.length == 1) {
                        typeArr2[0].getClass();
                        c.b(typeArr2[0]);
                        if (typeArr[0] == Object.class) {
                            this.f49089e = c.a(typeArr2[0]);
                            this.f49088d = Object.class;
                            return;
                        }
                        throw new IllegalArgumentException();
                    }
                    typeArr[0].getClass();
                    c.b(typeArr[0]);
                    this.f49089e = null;
                    this.f49088d = c.a(typeArr[0]);
                    return;
                }
                throw new IllegalArgumentException();
            }
            throw new IllegalArgumentException();
        }

        public boolean equals(Object obj) {
            if ((obj instanceof WildcardType) && a0.d(this, (WildcardType) obj)) {
                return true;
            }
            return false;
        }

        @Override // java.lang.reflect.WildcardType
        public Type[] getLowerBounds() {
            Type type = this.f49089e;
            return type != null ? new Type[]{type} : c.f49080b;
        }

        @Override // java.lang.reflect.WildcardType
        public Type[] getUpperBounds() {
            return new Type[]{this.f49088d};
        }

        public int hashCode() {
            int i10;
            Type type = this.f49089e;
            if (type != null) {
                i10 = type.hashCode() + 31;
            } else {
                i10 = 1;
            }
            return i10 ^ (this.f49088d.hashCode() + 31);
        }

        public String toString() {
            if (this.f49089e != null) {
                return "? super " + c.v(this.f49089e);
            } else if (this.f49088d == Object.class) {
                return "?";
            } else {
                return "? extends " + c.v(this.f49088d);
            }
        }
    }

    /*  JADX ERROR: JadxRuntimeException in pass: BlockProcessor
        jadx.core.utils.exceptions.JadxRuntimeException: Unreachable block: B:10:0x0018
        	at jadx.core.dex.visitors.blocks.BlockProcessor.checkForUnreachableBlocks(BlockProcessor.java:81)
        	at jadx.core.dex.visitors.blocks.BlockProcessor.processBlocksTree(BlockProcessor.java:47)
        	at jadx.core.dex.visitors.blocks.BlockProcessor.visit(BlockProcessor.java:39)
        */
    static {
        /*
            java.util.Set r0 = java.util.Collections.EMPTY_SET
            sm.c.f49079a = r0
            r0 = 0
            java.lang.reflect.Type[] r0 = new java.lang.reflect.Type[r0]
            sm.c.f49080b = r0
            r0 = 0
            java.lang.String r1 = getKotlinMetadataClassName()     // Catch: java.lang.ClassNotFoundException -> L13
            java.lang.Class r1 = java.lang.Class.forName(r1)     // Catch: java.lang.ClassNotFoundException -> L13
            goto L14
        L13:
            r1 = r0
        L14:
            sm.c.f49082d = r1
            java.lang.Class<kotlin.jvm.internal.DefaultConstructorMarker> r0 = kotlin.jvm.internal.DefaultConstructorMarker.class
        L18:
            sm.c.f49081c = r0
            java.util.LinkedHashMap r0 = new java.util.LinkedHashMap
            r1 = 16
            r0.<init>(r1)
            java.lang.Class r1 = java.lang.Boolean.TYPE
            java.lang.Class<java.lang.Boolean> r2 = java.lang.Boolean.class
            r0.put(r1, r2)
            java.lang.Class r1 = java.lang.Byte.TYPE
            java.lang.Class<java.lang.Byte> r2 = java.lang.Byte.class
            r0.put(r1, r2)
            java.lang.Class r1 = java.lang.Character.TYPE
            java.lang.Class<java.lang.Character> r2 = java.lang.Character.class
            r0.put(r1, r2)
            java.lang.Class r1 = java.lang.Double.TYPE
            java.lang.Class<java.lang.Double> r2 = java.lang.Double.class
            r0.put(r1, r2)
            java.lang.Class r1 = java.lang.Float.TYPE
            java.lang.Class<java.lang.Float> r2 = java.lang.Float.class
            r0.put(r1, r2)
            java.lang.Class r1 = java.lang.Integer.TYPE
            java.lang.Class<java.lang.Integer> r2 = java.lang.Integer.class
            r0.put(r1, r2)
            java.lang.Class r1 = java.lang.Long.TYPE
            java.lang.Class<java.lang.Long> r2 = java.lang.Long.class
            r0.put(r1, r2)
            java.lang.Class r1 = java.lang.Short.TYPE
            java.lang.Class<java.lang.Short> r2 = java.lang.Short.class
            r0.put(r1, r2)
            java.lang.Class r1 = java.lang.Void.TYPE
            java.lang.Class<java.lang.Void> r2 = java.lang.Void.class
            r0.put(r1, r2)
            java.util.Map r0 = java.util.Collections.unmodifiableMap(r0)
            sm.c.f49083e = r0
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: sm.c.<clinit>():void");
    }

    public static Type a(Type type) {
        if (type instanceof Class) {
            Class cls = (Class) type;
            if (cls.isArray()) {
                return new a(a(cls.getComponentType()));
            }
            return cls;
        } else if (type instanceof ParameterizedType) {
            if (type instanceof b) {
                return type;
            }
            ParameterizedType parameterizedType = (ParameterizedType) type;
            return new b(parameterizedType.getOwnerType(), parameterizedType.getRawType(), parameterizedType.getActualTypeArguments());
        } else if (type instanceof GenericArrayType) {
            if (type instanceof a) {
                return type;
            }
            return new a(((GenericArrayType) type).getGenericComponentType());
        } else if (type instanceof WildcardType) {
            if (type instanceof C0628c) {
                return type;
            }
            WildcardType wildcardType = (WildcardType) type;
            return new C0628c(wildcardType.getUpperBounds(), wildcardType.getLowerBounds());
        } else {
            return type;
        }
    }

    static void b(Type type) {
        if ((type instanceof Class) && ((Class) type).isPrimitive()) {
            throw new IllegalArgumentException("Unexpected primitive " + type + ". Use the boxed type.");
        }
    }

    static Class c(TypeVariable typeVariable) {
        GenericDeclaration genericDeclaration = typeVariable.getGenericDeclaration();
        if (genericDeclaration instanceof Class) {
            return (Class) genericDeclaration;
        }
        return null;
    }

    public static h d(w wVar, Type type, Class cls) {
        Class<?> cls2;
        Constructor<?> declaredConstructor;
        Object[] objArr;
        i iVar = (i) cls.getAnnotation(i.class);
        Class<?> cls3 = null;
        if (iVar == null || !iVar.generateAdapter()) {
            return null;
        }
        try {
            try {
                cls2 = Class.forName(a0.e(cls.getName()), true, cls.getClassLoader());
            } catch (NoSuchMethodException e10) {
                e = e10;
            }
            try {
                if (type instanceof ParameterizedType) {
                    Type[] actualTypeArguments = ((ParameterizedType) type).getActualTypeArguments();
                    try {
                        declaredConstructor = cls2.getDeclaredConstructor(w.class, Type[].class);
                        objArr = new Object[]{wVar, actualTypeArguments};
                    } catch (NoSuchMethodException unused) {
                        declaredConstructor = cls2.getDeclaredConstructor(Type[].class);
                        objArr = new Object[]{actualTypeArguments};
                    }
                } else {
                    try {
                        objArr = new Object[]{wVar};
                        declaredConstructor = cls2.getDeclaredConstructor(w.class);
                    } catch (NoSuchMethodException unused2) {
                        declaredConstructor = cls2.getDeclaredConstructor(null);
                        objArr = new Object[0];
                    }
                }
                declaredConstructor.setAccessible(true);
                return ((h) declaredConstructor.newInstance(objArr)).nullSafe();
            } catch (NoSuchMethodException e11) {
                e = e11;
                cls3 = cls2;
                if (!(type instanceof ParameterizedType) && cls3.getTypeParameters().length != 0) {
                    throw new RuntimeException("Failed to find the generated JsonAdapter constructor for '" + type + "'. Suspiciously, the type was not parameterized but the target class '" + cls3.getCanonicalName() + "' is generic. Consider using Types#newParameterizedType() to define these missing type variables.", e);
                }
                throw new RuntimeException("Failed to find the generated JsonAdapter constructor for " + type, e);
            }
        } catch (ClassNotFoundException e12) {
            throw new RuntimeException("Failed to find the generated JsonAdapter class for " + type, e12);
        } catch (IllegalAccessException e13) {
            throw new RuntimeException("Failed to access the generated JsonAdapter for " + type, e13);
        } catch (InstantiationException e14) {
            throw new RuntimeException("Failed to instantiate the generated JsonAdapter for " + type, e14);
        } catch (InvocationTargetException e15) {
            throw t(e15);
        }
    }

    public static Type e(Type type, Class cls, Class cls2) {
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

    public static boolean f(Annotation[] annotationArr) {
        for (Annotation annotation : annotationArr) {
            if (annotation.annotationType().getSimpleName().equals("Nullable")) {
                return true;
            }
        }
        return false;
    }

    static int g(Object obj) {
        if (obj != null) {
            return obj.hashCode();
        }
        return 0;
    }

    private static String getKotlinMetadataClassName() {
        return "kotlin.Metadata";
    }

    static int h(Object[] objArr, Object obj) {
        for (int i10 = 0; i10 < objArr.length; i10++) {
            if (obj.equals(objArr[i10])) {
                return i10;
            }
        }
        throw new NoSuchElementException();
    }

    public static boolean i(Class cls) {
        Class<? extends Annotation> cls2 = f49082d;
        if (cls2 != null && cls.isAnnotationPresent(cls2)) {
            return true;
        }
        return false;
    }

    public static boolean j(Class cls) {
        String name = cls.getName();
        if (!name.startsWith("android.") && !name.startsWith("androidx.") && !name.startsWith("java.") && !name.startsWith("javax.") && !name.startsWith("kotlin.") && !name.startsWith("kotlinx.") && !name.startsWith("scala.")) {
            return false;
        }
        return true;
    }

    public static Set k(AnnotatedElement annotatedElement) {
        return l(annotatedElement.getAnnotations());
    }

    public static Set l(Annotation[] annotationArr) {
        LinkedHashSet linkedHashSet = null;
        for (Annotation annotation : annotationArr) {
            if (annotation.annotationType().isAnnotationPresent(l.class)) {
                if (linkedHashSet == null) {
                    linkedHashSet = new LinkedHashSet();
                }
                linkedHashSet.add(annotation);
            }
        }
        if (linkedHashSet != null) {
            return Collections.unmodifiableSet(linkedHashSet);
        }
        return f49079a;
    }

    public static String m(String str, g gVar) {
        if (gVar != null) {
            String name = gVar.name();
            if (!"\u0000".equals(name)) {
                return name;
            }
        }
        return str;
    }

    public static String n(String str, AnnotatedElement annotatedElement) {
        return m(str, (g) annotatedElement.getAnnotation(g.class));
    }

    public static j o(String str, String str2, m mVar) {
        String format;
        String q10 = mVar.q();
        if (str2.equals(str)) {
            format = String.format("Required value '%s' missing at %s", str, q10);
        } else {
            format = String.format("Required value '%s' (JSON name '%s') missing at %s", str, str2, q10);
        }
        return new j(format);
    }

    public static Type p(Type type) {
        if (!(type instanceof WildcardType)) {
            return type;
        }
        WildcardType wildcardType = (WildcardType) type;
        if (wildcardType.getLowerBounds().length != 0) {
            return type;
        }
        Type[] upperBounds = wildcardType.getUpperBounds();
        if (upperBounds.length == 1) {
            return upperBounds[0];
        }
        throw new IllegalArgumentException();
    }

    public static Type q(Type type, Class cls, Type type2) {
        return r(type, cls, type2, new LinkedHashSet());
    }

    /* JADX WARN: Code restructure failed: missing block: B:0:?, code lost:
        r10 = r10;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static java.lang.reflect.Type r(java.lang.reflect.Type r8, java.lang.Class r9, java.lang.reflect.Type r10, java.util.Collection r11) {
        /*
        L0:
            boolean r0 = r10 instanceof java.lang.reflect.TypeVariable
            if (r0 == 0) goto L18
            r0 = r10
            java.lang.reflect.TypeVariable r0 = (java.lang.reflect.TypeVariable) r0
            boolean r1 = r11.contains(r0)
            if (r1 == 0) goto Le
            return r10
        Le:
            r11.add(r0)
            java.lang.reflect.Type r10 = s(r8, r9, r0)
            if (r10 != r0) goto L0
            return r10
        L18:
            boolean r0 = r10 instanceof java.lang.Class
            if (r0 == 0) goto L35
            r0 = r10
            java.lang.Class r0 = (java.lang.Class) r0
            boolean r1 = r0.isArray()
            if (r1 == 0) goto L35
            java.lang.Class r10 = r0.getComponentType()
            java.lang.reflect.Type r8 = r(r8, r9, r10, r11)
            if (r10 != r8) goto L30
            return r0
        L30:
            java.lang.reflect.GenericArrayType r8 = com.squareup.moshi.a0.b(r8)
            return r8
        L35:
            boolean r0 = r10 instanceof java.lang.reflect.GenericArrayType
            if (r0 == 0) goto L4b
            java.lang.reflect.GenericArrayType r10 = (java.lang.reflect.GenericArrayType) r10
            java.lang.reflect.Type r0 = r10.getGenericComponentType()
            java.lang.reflect.Type r8 = r(r8, r9, r0, r11)
            if (r0 != r8) goto L46
            return r10
        L46:
            java.lang.reflect.GenericArrayType r8 = com.squareup.moshi.a0.b(r8)
            return r8
        L4b:
            boolean r0 = r10 instanceof java.lang.reflect.ParameterizedType
            r1 = 1
            r2 = 0
            if (r0 == 0) goto L8d
            java.lang.reflect.ParameterizedType r10 = (java.lang.reflect.ParameterizedType) r10
            java.lang.reflect.Type r0 = r10.getOwnerType()
            java.lang.reflect.Type r3 = r(r8, r9, r0, r11)
            if (r3 == r0) goto L5f
            r0 = r1
            goto L60
        L5f:
            r0 = r2
        L60:
            java.lang.reflect.Type[] r4 = r10.getActualTypeArguments()
            int r5 = r4.length
        L65:
            if (r2 >= r5) goto L80
            r6 = r4[r2]
            java.lang.reflect.Type r6 = r(r8, r9, r6, r11)
            r7 = r4[r2]
            if (r6 == r7) goto L7d
            if (r0 != 0) goto L7b
            java.lang.Object r0 = r4.clone()
            r4 = r0
            java.lang.reflect.Type[] r4 = (java.lang.reflect.Type[]) r4
            r0 = r1
        L7b:
            r4[r2] = r6
        L7d:
            int r2 = r2 + 1
            goto L65
        L80:
            if (r0 == 0) goto L8c
            sm.c$b r8 = new sm.c$b
            java.lang.reflect.Type r9 = r10.getRawType()
            r8.<init>(r3, r9, r4)
            return r8
        L8c:
            return r10
        L8d:
            boolean r0 = r10 instanceof java.lang.reflect.WildcardType
            if (r0 == 0) goto Lbf
            java.lang.reflect.WildcardType r10 = (java.lang.reflect.WildcardType) r10
            java.lang.reflect.Type[] r0 = r10.getLowerBounds()
            java.lang.reflect.Type[] r3 = r10.getUpperBounds()
            int r4 = r0.length
            if (r4 != r1) goto Lad
            r1 = r0[r2]
            java.lang.reflect.Type r8 = r(r8, r9, r1, r11)
            r9 = r0[r2]
            if (r8 == r9) goto Lbf
            java.lang.reflect.WildcardType r8 = com.squareup.moshi.a0.l(r8)
            return r8
        Lad:
            int r0 = r3.length
            if (r0 != r1) goto Lbf
            r0 = r3[r2]
            java.lang.reflect.Type r8 = r(r8, r9, r0, r11)
            r9 = r3[r2]
            if (r8 == r9) goto Lbf
            java.lang.reflect.WildcardType r8 = com.squareup.moshi.a0.k(r8)
            return r8
        Lbf:
            return r10
        */
        throw new UnsupportedOperationException("Method not decompiled: sm.c.r(java.lang.reflect.Type, java.lang.Class, java.lang.reflect.Type, java.util.Collection):java.lang.reflect.Type");
    }

    static Type s(Type type, Class cls, TypeVariable typeVariable) {
        Class c10 = c(typeVariable);
        if (c10 != null) {
            Type e10 = e(type, cls, c10);
            if (e10 instanceof ParameterizedType) {
                return ((ParameterizedType) e10).getActualTypeArguments()[h(c10.getTypeParameters(), typeVariable)];
            }
        }
        return typeVariable;
    }

    public static RuntimeException t(InvocationTargetException invocationTargetException) {
        Throwable targetException = invocationTargetException.getTargetException();
        if (!(targetException instanceof RuntimeException)) {
            if (targetException instanceof Error) {
                throw ((Error) targetException);
            }
            throw new RuntimeException(targetException);
        }
        throw ((RuntimeException) targetException);
    }

    public static String u(Type type, Set set) {
        String str;
        StringBuilder sb2 = new StringBuilder();
        sb2.append(type);
        if (set.isEmpty()) {
            str = " (with no annotations)";
        } else {
            str = " annotated " + set;
        }
        sb2.append(str);
        return sb2.toString();
    }

    static String v(Type type) {
        if (type instanceof Class) {
            return ((Class) type).getName();
        }
        return type.toString();
    }

    public static boolean w(Type type, Type type2) {
        return a0.d(type, type2);
    }

    public static j x(String str, String str2, m mVar) {
        String format;
        String q10 = mVar.q();
        if (str2.equals(str)) {
            format = String.format("Non-null value '%s' was null at %s", str, q10);
        } else {
            format = String.format("Non-null value '%s' (JSON name '%s') was null at %s", str, str2, q10);
        }
        return new j(format);
    }
}
