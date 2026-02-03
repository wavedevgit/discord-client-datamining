package ds;

import ds.z2;
import java.lang.reflect.GenericArrayType;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.lang.reflect.WildcardType;
import java.util.ArrayList;
import java.util.List;
import kotlin.Lazy;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.KTypeBase;
import kotlin.jvm.internal.PropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KProperty;
import kotlin.reflect.KTypeProjection;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeAliasDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.ReflectClassUtilKt;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.TypeProjection;
import kotlin.reflect.jvm.internal.impl.types.TypeUtils;
import kotlin.reflect.jvm.internal.impl.types.Variance;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class t2 implements KTypeBase {

    /* renamed from: p  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f22306p = {Reflection.property1(new PropertyReference1Impl(t2.class, "classifier", "getClassifier()Lkotlin/reflect/KClassifier;", 0)), Reflection.property1(new PropertyReference1Impl(t2.class, "arguments", "getArguments()Ljava/util/List;", 0))};

    /* renamed from: d  reason: collision with root package name */
    private final KotlinType f22307d;

    /* renamed from: e  reason: collision with root package name */
    private final z2.a f22308e;

    /* renamed from: i  reason: collision with root package name */
    private final z2.a f22309i;

    /* renamed from: o  reason: collision with root package name */
    private final z2.a f22310o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f22311a;

        static {
            int[] iArr = new int[Variance.values().length];
            try {
                iArr[Variance.INVARIANT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[Variance.IN_VARIANCE.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[Variance.OUT_VARIANCE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f22311a = iArr;
        }
    }

    public t2(KotlinType type, Function0 function0) {
        Intrinsics.checkNotNullParameter(type, "type");
        this.f22307d = type;
        z2.a aVar = null;
        z2.a aVar2 = function0 instanceof z2.a ? (z2.a) function0 : null;
        if (aVar2 != null) {
            aVar = aVar2;
        } else if (function0 != null) {
            aVar = z2.c(function0);
        }
        this.f22308e = aVar;
        this.f22309i = z2.c(new p2(this));
        this.f22310o = z2.c(new q2(this, function0));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final List f(t2 t2Var, Function0 function0) {
        s2 s2Var;
        KTypeProjection d10;
        List<TypeProjection> arguments = t2Var.f22307d.getArguments();
        if (arguments.isEmpty()) {
            return CollectionsKt.l();
        }
        Lazy a10 = jr.l.a(jr.o.f32182e, new r2(t2Var));
        List<TypeProjection> list = arguments;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        int i10 = 0;
        for (Object obj : list) {
            int i11 = i10 + 1;
            if (i10 < 0) {
                CollectionsKt.v();
            }
            TypeProjection typeProjection = (TypeProjection) obj;
            if (typeProjection.isStarProjection()) {
                d10 = KTypeProjection.f33178c.c();
            } else {
                KotlinType type = typeProjection.getType();
                Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
                if (function0 == null) {
                    s2Var = null;
                } else {
                    s2Var = new s2(t2Var, i10, a10);
                }
                t2 t2Var2 = new t2(type, s2Var);
                int i12 = a.f22311a[typeProjection.getProjectionKind().ordinal()];
                if (i12 != 1) {
                    if (i12 != 2) {
                        if (i12 == 3) {
                            d10 = KTypeProjection.f33178c.b(t2Var2);
                        } else {
                            throw new jr.p();
                        }
                    } else {
                        d10 = KTypeProjection.f33178c.a(t2Var2);
                    }
                } else {
                    d10 = KTypeProjection.f33178c.d(t2Var2);
                }
            }
            arrayList.add(d10);
            i10 = i11;
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final List g(t2 t2Var) {
        Type javaType = t2Var.getJavaType();
        Intrinsics.checkNotNull(javaType);
        return ReflectClassUtilKt.getParameterizedTypeArguments(javaType);
    }

    private static final List h(Lazy lazy) {
        return (List) lazy.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Type i(t2 t2Var, int i10, Lazy lazy) {
        Class<?> cls;
        Type javaType = t2Var.getJavaType();
        if (javaType instanceof Class) {
            Class cls2 = (Class) javaType;
            if (cls2.isArray()) {
                cls = cls2.getComponentType();
            } else {
                cls = Object.class;
            }
            Intrinsics.checkNotNull(cls);
            return cls;
        } else if (javaType instanceof GenericArrayType) {
            if (i10 == 0) {
                Type genericComponentType = ((GenericArrayType) javaType).getGenericComponentType();
                Intrinsics.checkNotNull(genericComponentType);
                return genericComponentType;
            }
            throw new x2("Array type has been queried for a non-0th argument: " + t2Var);
        } else if (javaType instanceof ParameterizedType) {
            Type type = (Type) h(lazy).get(i10);
            if (!(type instanceof WildcardType)) {
                return type;
            }
            WildcardType wildcardType = (WildcardType) type;
            Type[] lowerBounds = wildcardType.getLowerBounds();
            Intrinsics.checkNotNullExpressionValue(lowerBounds, "getLowerBounds(...)");
            Type type2 = (Type) kotlin.collections.i.V(lowerBounds);
            if (type2 == null) {
                Type[] upperBounds = wildcardType.getUpperBounds();
                Intrinsics.checkNotNullExpressionValue(upperBounds, "getUpperBounds(...)");
                type2 = (Type) kotlin.collections.i.U(upperBounds);
            }
            Intrinsics.checkNotNull(type2);
            return type2;
        } else {
            throw new x2("Non-generic type has been queried for arguments: " + t2Var);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final kotlin.reflect.d j(t2 t2Var) {
        return t2Var.k(t2Var.f22307d);
    }

    private final kotlin.reflect.d k(KotlinType kotlinType) {
        KotlinType type;
        ClassifierDescriptor mo1200getDeclarationDescriptor = kotlinType.getConstructor().mo1200getDeclarationDescriptor();
        if (mo1200getDeclarationDescriptor instanceof ClassDescriptor) {
            Class<?> q10 = j3.q((ClassDescriptor) mo1200getDeclarationDescriptor);
            if (q10 == null) {
                return null;
            }
            if (q10.isArray()) {
                TypeProjection typeProjection = (TypeProjection) CollectionsKt.S0(kotlinType.getArguments());
                if (typeProjection != null && (type = typeProjection.getType()) != null) {
                    kotlin.reflect.d k10 = k(type);
                    if (k10 != null) {
                        return new w0(j3.f(wr.a.b(cs.b.a(k10))));
                    }
                    throw new x2("Cannot determine classifier for array element type: " + this);
                }
                return new w0(q10);
            } else if (!TypeUtils.isNullableType(kotlinType)) {
                Class<?> primitiveByWrapper = ReflectClassUtilKt.getPrimitiveByWrapper(q10);
                if (primitiveByWrapper != null) {
                    q10 = primitiveByWrapper;
                }
                return new w0(q10);
            } else {
                return new w0(q10);
            }
        } else if (mo1200getDeclarationDescriptor instanceof TypeParameterDescriptor) {
            return new v2(null, (TypeParameterDescriptor) mo1200getDeclarationDescriptor);
        } else {
            if (!(mo1200getDeclarationDescriptor instanceof TypeAliasDescriptor)) {
                return null;
            }
            throw new jr.q("An operation is not implemented: Type alias classifiers are not yet supported");
        }
    }

    public boolean equals(Object obj) {
        if (obj instanceof t2) {
            t2 t2Var = (t2) obj;
            if (Intrinsics.areEqual(this.f22307d, t2Var.f22307d) && Intrinsics.areEqual(getClassifier(), t2Var.getClassifier()) && Intrinsics.areEqual(getArguments(), t2Var.getArguments())) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // kotlin.jvm.internal.KTypeBase, kotlin.reflect.b
    public List getAnnotations() {
        return j3.e(this.f22307d);
    }

    @Override // kotlin.jvm.internal.KTypeBase, kotlin.reflect.KType
    public List getArguments() {
        Object b10 = this.f22310o.b(this, f22306p[1]);
        Intrinsics.checkNotNullExpressionValue(b10, "getValue(...)");
        return (List) b10;
    }

    @Override // kotlin.jvm.internal.KTypeBase, kotlin.reflect.KType
    public kotlin.reflect.d getClassifier() {
        return (kotlin.reflect.d) this.f22309i.b(this, f22306p[0]);
    }

    @Override // kotlin.jvm.internal.KTypeBase
    public Type getJavaType() {
        z2.a aVar = this.f22308e;
        if (aVar != null) {
            return (Type) aVar.invoke();
        }
        return null;
    }

    public int hashCode() {
        int i10;
        int hashCode = this.f22307d.hashCode() * 31;
        kotlin.reflect.d classifier = getClassifier();
        if (classifier != null) {
            i10 = classifier.hashCode();
        } else {
            i10 = 0;
        }
        return ((hashCode + i10) * 31) + getArguments().hashCode();
    }

    @Override // kotlin.jvm.internal.KTypeBase, kotlin.reflect.KType
    public boolean isMarkedNullable() {
        return this.f22307d.isMarkedNullable();
    }

    public final KotlinType l() {
        return this.f22307d;
    }

    public String toString() {
        return d3.f22181a.l(this.f22307d);
    }

    public /* synthetic */ t2(KotlinType kotlinType, Function0 function0, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(kotlinType, (i10 & 2) != 0 ? null : function0);
    }
}
