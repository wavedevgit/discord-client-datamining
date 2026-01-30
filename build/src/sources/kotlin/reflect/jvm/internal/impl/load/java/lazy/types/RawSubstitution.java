package kotlin.reflect.jvm.internal.impl.load.java.lazy.types;

import ir.v;
import java.util.ArrayList;
import java.util.List;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.types.ErasureProjectionComputer;
import kotlin.reflect.jvm.internal.impl.types.FlexibleTypesKt;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.KotlinTypeFactory;
import kotlin.reflect.jvm.internal.impl.types.KotlinTypeKt;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.TypeAttributes;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.TypeParameterUpperBoundEraser;
import kotlin.reflect.jvm.internal.impl.types.TypeProjection;
import kotlin.reflect.jvm.internal.impl.types.TypeProjectionImpl;
import kotlin.reflect.jvm.internal.impl.types.TypeSubstitution;
import kotlin.reflect.jvm.internal.impl.types.TypeUsage;
import kotlin.reflect.jvm.internal.impl.types.Variance;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorTypeKind;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorUtils;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nRawSubstitution.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RawSubstitution.kt\norg/jetbrains/kotlin/load/java/lazy/types/RawSubstitution\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,95:1\n1563#2:96\n1634#2,3:97\n*S KotlinDebug\n*F\n+ 1 RawSubstitution.kt\norg/jetbrains/kotlin/load/java/lazy/types/RawSubstitution\n*L\n73#1:96\n73#1:97,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class RawSubstitution extends TypeSubstitution {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: c  reason: collision with root package name */
    private static final JavaTypeAttributes f34325c;

    /* renamed from: d  reason: collision with root package name */
    private static final JavaTypeAttributes f34326d;

    /* renamed from: a  reason: collision with root package name */
    private final RawProjectionComputer f34327a;

    /* renamed from: b  reason: collision with root package name */
    private final TypeParameterUpperBoundEraser f34328b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    static {
        TypeUsage typeUsage = TypeUsage.COMMON;
        f34325c = JavaTypeAttributesKt.toAttributes$default(typeUsage, false, true, null, 5, null).withFlexibility(JavaTypeFlexibility.FLEXIBLE_LOWER_BOUND);
        f34326d = JavaTypeAttributesKt.toAttributes$default(typeUsage, false, true, null, 5, null).withFlexibility(JavaTypeFlexibility.FLEXIBLE_UPPER_BOUND);
    }

    public RawSubstitution() {
        this(null, 1, null);
    }

    private final Pair b(SimpleType simpleType, ClassDescriptor classDescriptor, JavaTypeAttributes javaTypeAttributes) {
        if (simpleType.getConstructor().getParameters().isEmpty()) {
            return v.a(simpleType, Boolean.FALSE);
        }
        if (KotlinBuiltIns.isArray(simpleType)) {
            TypeProjection typeProjection = simpleType.getArguments().get(0);
            Variance projectionKind = typeProjection.getProjectionKind();
            KotlinType type = typeProjection.getType();
            Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
            return v.a(KotlinTypeFactory.simpleType$default(simpleType.getAttributes(), simpleType.getConstructor(), CollectionsKt.e(new TypeProjectionImpl(projectionKind, d(type, javaTypeAttributes))), simpleType.isMarkedNullable(), (KotlinTypeRefiner) null, 16, (Object) null), Boolean.FALSE);
        } else if (KotlinTypeKt.isError(simpleType)) {
            return v.a(ErrorUtils.createErrorType(ErrorTypeKind.ERROR_RAW_TYPE, simpleType.getConstructor().toString()), Boolean.FALSE);
        } else {
            MemberScope memberScope = classDescriptor.getMemberScope(this);
            Intrinsics.checkNotNullExpressionValue(memberScope, "getMemberScope(...)");
            TypeAttributes attributes = simpleType.getAttributes();
            TypeConstructor typeConstructor = classDescriptor.getTypeConstructor();
            Intrinsics.checkNotNullExpressionValue(typeConstructor, "getTypeConstructor(...)");
            List<TypeParameterDescriptor> parameters = classDescriptor.getTypeConstructor().getParameters();
            Intrinsics.checkNotNullExpressionValue(parameters, "getParameters(...)");
            List<TypeParameterDescriptor> list = parameters;
            ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
            for (TypeParameterDescriptor typeParameterDescriptor : list) {
                RawProjectionComputer rawProjectionComputer = this.f34327a;
                Intrinsics.checkNotNull(typeParameterDescriptor);
                arrayList.add(ErasureProjectionComputer.computeProjection$default(rawProjectionComputer, typeParameterDescriptor, javaTypeAttributes, this.f34328b, null, 8, null));
            }
            return v.a(KotlinTypeFactory.simpleTypeWithNonTrivialMemberScope(attributes, typeConstructor, arrayList, simpleType.isMarkedNullable(), memberScope, new b(classDescriptor, this, simpleType, javaTypeAttributes)), Boolean.TRUE);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SimpleType c(ClassDescriptor classDescriptor, RawSubstitution rawSubstitution, SimpleType simpleType, JavaTypeAttributes javaTypeAttributes, KotlinTypeRefiner kotlinTypeRefiner) {
        ClassDescriptor findClassAcrossModuleDependencies;
        Intrinsics.checkNotNullParameter(kotlinTypeRefiner, "kotlinTypeRefiner");
        ClassId classId = DescriptorUtilsKt.getClassId(classDescriptor);
        if (classId == null || (findClassAcrossModuleDependencies = kotlinTypeRefiner.findClassAcrossModuleDependencies(classId)) == null || Intrinsics.areEqual(findClassAcrossModuleDependencies, classDescriptor)) {
            return null;
        }
        return (SimpleType) rawSubstitution.b(simpleType, findClassAcrossModuleDependencies, javaTypeAttributes).c();
    }

    private final KotlinType d(KotlinType kotlinType, JavaTypeAttributes javaTypeAttributes) {
        ClassifierDescriptor mo1198getDeclarationDescriptor = kotlinType.getConstructor().mo1198getDeclarationDescriptor();
        if (mo1198getDeclarationDescriptor instanceof TypeParameterDescriptor) {
            return d(this.f34328b.getErasedUpperBound((TypeParameterDescriptor) mo1198getDeclarationDescriptor, javaTypeAttributes.markIsRaw(true)), javaTypeAttributes);
        }
        if (mo1198getDeclarationDescriptor instanceof ClassDescriptor) {
            ClassifierDescriptor mo1198getDeclarationDescriptor2 = FlexibleTypesKt.upperIfFlexible(kotlinType).getConstructor().mo1198getDeclarationDescriptor();
            if (mo1198getDeclarationDescriptor2 instanceof ClassDescriptor) {
                Pair b10 = b(FlexibleTypesKt.lowerIfFlexible(kotlinType), (ClassDescriptor) mo1198getDeclarationDescriptor, f34325c);
                SimpleType simpleType = (SimpleType) b10.a();
                boolean booleanValue = ((Boolean) b10.b()).booleanValue();
                Pair b11 = b(FlexibleTypesKt.upperIfFlexible(kotlinType), (ClassDescriptor) mo1198getDeclarationDescriptor2, f34326d);
                SimpleType simpleType2 = (SimpleType) b11.a();
                boolean booleanValue2 = ((Boolean) b11.b()).booleanValue();
                if (!booleanValue && !booleanValue2) {
                    return KotlinTypeFactory.flexibleType(simpleType, simpleType2);
                }
                return new RawTypeImpl(simpleType, simpleType2);
            }
            throw new IllegalStateException(("For some reason declaration for upper bound is not a class but \"" + mo1198getDeclarationDescriptor2 + "\" while for lower it's \"" + mo1198getDeclarationDescriptor + '\"').toString());
        }
        throw new IllegalStateException(("Unexpected declaration kind: " + mo1198getDeclarationDescriptor).toString());
    }

    static /* synthetic */ KotlinType e(RawSubstitution rawSubstitution, KotlinType kotlinType, JavaTypeAttributes javaTypeAttributes, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            javaTypeAttributes = new JavaTypeAttributes(TypeUsage.COMMON, null, false, false, null, null, 62, null);
        }
        return rawSubstitution.d(kotlinType, javaTypeAttributes);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeSubstitution
    public boolean isEmpty() {
        return false;
    }

    public RawSubstitution(TypeParameterUpperBoundEraser typeParameterUpperBoundEraser) {
        RawProjectionComputer rawProjectionComputer = new RawProjectionComputer();
        this.f34327a = rawProjectionComputer;
        this.f34328b = typeParameterUpperBoundEraser == null ? new TypeParameterUpperBoundEraser(rawProjectionComputer, null, 2, null) : typeParameterUpperBoundEraser;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeSubstitution
    @NotNull
    /* renamed from: get */
    public TypeProjectionImpl mo1201get(@NotNull KotlinType key) {
        Intrinsics.checkNotNullParameter(key, "key");
        return new TypeProjectionImpl(e(this, key, null, 2, null));
    }

    public /* synthetic */ RawSubstitution(TypeParameterUpperBoundEraser typeParameterUpperBoundEraser, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : typeParameterUpperBoundEraser);
    }
}
