package cs;

import cs.z2;
import java.util.ArrayList;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.PropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.TypeParameterReference;
import kotlin.reflect.KClass;
import kotlin.reflect.KProperty;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.components.ReflectKotlinClass;
import kotlin.reflect.jvm.internal.impl.load.kotlin.JvmPackagePartSource;
import kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedContainerSource;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.Variance;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class v2 implements kotlin.reflect.l, x0 {

    /* renamed from: o  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f21270o = {Reflection.property1(new PropertyReference1Impl(v2.class, "upperBounds", "getUpperBounds()Ljava/util/List;", 0))};

    /* renamed from: d  reason: collision with root package name */
    private final TypeParameterDescriptor f21271d;

    /* renamed from: e  reason: collision with root package name */
    private final z2.a f21272e;

    /* renamed from: i  reason: collision with root package name */
    private final w2 f21273i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f21274a;

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
            f21274a = iArr;
        }
    }

    public v2(w2 w2Var, TypeParameterDescriptor descriptor) {
        DeserializedMemberDescriptor deserializedMemberDescriptor;
        w0 w0Var;
        Object accept;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        this.f21271d = descriptor;
        this.f21272e = z2.c(new u2(this));
        if (w2Var == null) {
            DeclarationDescriptor containingDeclaration = getDescriptor().getContainingDeclaration();
            Intrinsics.checkNotNullExpressionValue(containingDeclaration, "getContainingDeclaration(...)");
            if (containingDeclaration instanceof ClassDescriptor) {
                accept = d((ClassDescriptor) containingDeclaration);
            } else if (containingDeclaration instanceof CallableMemberDescriptor) {
                DeclarationDescriptor containingDeclaration2 = ((CallableMemberDescriptor) containingDeclaration).getContainingDeclaration();
                Intrinsics.checkNotNullExpressionValue(containingDeclaration2, "getContainingDeclaration(...)");
                if (containingDeclaration2 instanceof ClassDescriptor) {
                    w0Var = d((ClassDescriptor) containingDeclaration2);
                } else {
                    if (containingDeclaration instanceof DeserializedMemberDescriptor) {
                        deserializedMemberDescriptor = (DeserializedMemberDescriptor) containingDeclaration;
                    } else {
                        deserializedMemberDescriptor = null;
                    }
                    if (deserializedMemberDescriptor != null) {
                        KClass e10 = vr.a.e(b(deserializedMemberDescriptor));
                        Intrinsics.checkNotNull(e10, "null cannot be cast to non-null type kotlin.reflect.jvm.internal.KClassImpl<*>");
                        w0Var = (w0) e10;
                    } else {
                        throw new x2("Non-class callable descriptor must be deserialized: " + containingDeclaration);
                    }
                }
                accept = containingDeclaration.accept(new j(w0Var), Unit.f33298a);
            } else {
                throw new x2("Unknown type parameter container: " + containingDeclaration);
            }
            w2Var = (w2) accept;
        }
        this.f21273i = w2Var;
    }

    private final Class b(DeserializedMemberDescriptor deserializedMemberDescriptor) {
        JvmPackagePartSource jvmPackagePartSource;
        KotlinJvmBinaryClass kotlinJvmBinaryClass;
        Class<?> klass;
        DeserializedContainerSource containerSource = deserializedMemberDescriptor.getContainerSource();
        ReflectKotlinClass reflectKotlinClass = null;
        if (containerSource instanceof JvmPackagePartSource) {
            jvmPackagePartSource = (JvmPackagePartSource) containerSource;
        } else {
            jvmPackagePartSource = null;
        }
        if (jvmPackagePartSource != null) {
            kotlinJvmBinaryClass = jvmPackagePartSource.getKnownJvmBinaryClass();
        } else {
            kotlinJvmBinaryClass = null;
        }
        if (kotlinJvmBinaryClass instanceof ReflectKotlinClass) {
            reflectKotlinClass = kotlinJvmBinaryClass;
        }
        if (reflectKotlinClass != null && (klass = reflectKotlinClass.getKlass()) != null) {
            return klass;
        }
        throw new x2("Container of deserialized member is not resolved: " + deserializedMemberDescriptor);
    }

    private final w0 d(ClassDescriptor classDescriptor) {
        KClass kClass;
        Class q10 = j3.q(classDescriptor);
        if (q10 != null) {
            kClass = vr.a.e(q10);
        } else {
            kClass = null;
        }
        w0 w0Var = (w0) kClass;
        if (w0Var != null) {
            return w0Var;
        }
        throw new x2("Type parameter container is not resolved: " + classDescriptor.getContainingDeclaration());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final List e(v2 v2Var) {
        List<KotlinType> upperBounds = v2Var.getDescriptor().getUpperBounds();
        Intrinsics.checkNotNullExpressionValue(upperBounds, "getUpperBounds(...)");
        List<KotlinType> list = upperBounds;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (KotlinType kotlinType : list) {
            arrayList.add(new t2(kotlinType, null, 2, null));
        }
        return arrayList;
    }

    @Override // cs.x0
    /* renamed from: c */
    public TypeParameterDescriptor getDescriptor() {
        return this.f21271d;
    }

    public boolean equals(Object obj) {
        if (obj instanceof v2) {
            v2 v2Var = (v2) obj;
            if (Intrinsics.areEqual(this.f21273i, v2Var.f21273i) && Intrinsics.areEqual(getName(), v2Var.getName())) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // kotlin.reflect.l
    public String getName() {
        String asString = getDescriptor().getName().asString();
        Intrinsics.checkNotNullExpressionValue(asString, "asString(...)");
        return asString;
    }

    @Override // kotlin.reflect.l
    public List getUpperBounds() {
        Object b10 = this.f21272e.b(this, f21270o[0]);
        Intrinsics.checkNotNullExpressionValue(b10, "getValue(...)");
        return (List) b10;
    }

    @Override // kotlin.reflect.l
    public kotlin.reflect.m getVariance() {
        int i10 = a.f21274a[getDescriptor().getVariance().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    return kotlin.reflect.m.f36139i;
                }
                throw new ir.p();
            }
            return kotlin.reflect.m.f36138e;
        }
        return kotlin.reflect.m.f36137d;
    }

    public int hashCode() {
        return (this.f21273i.hashCode() * 31) + getName().hashCode();
    }

    public String toString() {
        return TypeParameterReference.Companion.toString(this);
    }
}
