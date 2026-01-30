package kotlin.reflect.jvm.internal.impl.resolve;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.jvm.internal.impl.builtins.PrimitiveType;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.FqNameUnsafe;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.TypeCheckerState;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.checker.ClassicTypeCheckerStateKt;
import kotlin.reflect.jvm.internal.impl.types.checker.ClassicTypeSystemContext;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeChecker;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypePreparator;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
import kotlin.reflect.jvm.internal.impl.types.model.ArgumentList;
import kotlin.reflect.jvm.internal.impl.types.model.CaptureStatus;
import kotlin.reflect.jvm.internal.impl.types.model.CapturedTypeConstructorMarker;
import kotlin.reflect.jvm.internal.impl.types.model.CapturedTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.DefinitelyNotNullTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.DynamicTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.FlexibleTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.KotlinTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.RigidTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.SimpleTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeArgumentListMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeArgumentMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeConstructorMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeParameterMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeVariableTypeConstructorMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeVariance;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class OverridingUtilTypeSystemContext implements ClassicTypeSystemContext {

    /* renamed from: a  reason: collision with root package name */
    private final Map f35404a;

    /* renamed from: b  reason: collision with root package name */
    private final KotlinTypeChecker.TypeConstructorEquality f35405b;

    /* renamed from: c  reason: collision with root package name */
    private final KotlinTypeRefiner f35406c;

    /* renamed from: d  reason: collision with root package name */
    private final KotlinTypePreparator f35407d;

    /* renamed from: e  reason: collision with root package name */
    private final Function2 f35408e;

    public OverridingUtilTypeSystemContext(Map<TypeConstructor, ? extends TypeConstructor> map, @NotNull KotlinTypeChecker.TypeConstructorEquality equalityAxioms, @NotNull KotlinTypeRefiner kotlinTypeRefiner, @NotNull KotlinTypePreparator kotlinTypePreparator, Function2<? super KotlinType, ? super KotlinType, Boolean> function2) {
        Intrinsics.checkNotNullParameter(equalityAxioms, "equalityAxioms");
        Intrinsics.checkNotNullParameter(kotlinTypeRefiner, "kotlinTypeRefiner");
        Intrinsics.checkNotNullParameter(kotlinTypePreparator, "kotlinTypePreparator");
        this.f35404a = map;
        this.f35405b = equalityAxioms;
        this.f35406c = kotlinTypeRefiner;
        this.f35407d = kotlinTypePreparator;
        this.f35408e = function2;
    }

    private final boolean a(TypeConstructor typeConstructor, TypeConstructor typeConstructor2) {
        if (this.f35405b.equals(typeConstructor, typeConstructor2)) {
            return true;
        }
        Map map = this.f35404a;
        if (map == null) {
            return false;
        }
        TypeConstructor typeConstructor3 = (TypeConstructor) map.get(typeConstructor);
        TypeConstructor typeConstructor4 = (TypeConstructor) this.f35404a.get(typeConstructor2);
        if ((typeConstructor3 != null && Intrinsics.areEqual(typeConstructor3, typeConstructor2)) || (typeConstructor4 != null && Intrinsics.areEqual(typeConstructor4, typeConstructor))) {
            return true;
        }
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean areEqualTypeConstructors(@NotNull TypeConstructorMarker c12, @NotNull TypeConstructorMarker c22) {
        Intrinsics.checkNotNullParameter(c12, "c1");
        Intrinsics.checkNotNullParameter(c22, "c2");
        if (c12 instanceof TypeConstructor) {
            if (c22 instanceof TypeConstructor) {
                if (!ClassicTypeSystemContext.DefaultImpls.areEqualTypeConstructors(this, c12, c22) && !a((TypeConstructor) c12, (TypeConstructor) c22)) {
                    return false;
                }
                return true;
            }
            throw new IllegalArgumentException("Failed requirement.");
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public int argumentsCount(@NotNull KotlinTypeMarker kotlinTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.argumentsCount(this, kotlinTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public TypeArgumentListMarker asArgumentList(@NotNull RigidTypeMarker rigidTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.asArgumentList(this, rigidTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.checker.ClassicTypeSystemContext, kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public CapturedTypeMarker asCapturedType(@NotNull SimpleTypeMarker simpleTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.asCapturedType(this, simpleTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public CapturedTypeMarker asCapturedTypeUnwrappingDnn(RigidTypeMarker rigidTypeMarker) {
        Intrinsics.checkNotNullParameter(rigidTypeMarker, "<this>");
        return asCapturedType(originalIfDefinitelyNotNullable(rigidTypeMarker));
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public DefinitelyNotNullTypeMarker asDefinitelyNotNullType(@NotNull RigidTypeMarker rigidTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.asDefinitelyNotNullType(this, rigidTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public DynamicTypeMarker asDynamicType(@NotNull FlexibleTypeMarker flexibleTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.asDynamicType(this, flexibleTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public FlexibleTypeMarker asFlexibleType(@NotNull KotlinTypeMarker kotlinTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.asFlexibleType(this, kotlinTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public TypeArgumentMarker asTypeArgument(@NotNull KotlinTypeMarker kotlinTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.asTypeArgument(this, kotlinTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public SimpleType captureFromArguments(@NotNull RigidTypeMarker rigidTypeMarker, @NotNull CaptureStatus captureStatus) {
        return ClassicTypeSystemContext.DefaultImpls.captureFromArguments(this, rigidTypeMarker, captureStatus);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public CaptureStatus captureStatus(@NotNull CapturedTypeMarker capturedTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.captureStatus(this, capturedTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.checker.ClassicTypeSystemContext
    @NotNull
    public KotlinTypeMarker createFlexibleType(@NotNull RigidTypeMarker rigidTypeMarker, @NotNull RigidTypeMarker rigidTypeMarker2) {
        return ClassicTypeSystemContext.DefaultImpls.createFlexibleType(this, rigidTypeMarker, rigidTypeMarker2);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public List<SimpleTypeMarker> fastCorrespondingSupertypes(RigidTypeMarker rigidTypeMarker, TypeConstructorMarker constructor) {
        Intrinsics.checkNotNullParameter(rigidTypeMarker, "<this>");
        Intrinsics.checkNotNullParameter(constructor, "constructor");
        return null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public TypeArgumentMarker get(TypeArgumentListMarker typeArgumentListMarker, int i10) {
        Intrinsics.checkNotNullParameter(typeArgumentListMarker, "<this>");
        if (typeArgumentListMarker instanceof SimpleTypeMarker) {
            return getArgument((KotlinTypeMarker) typeArgumentListMarker, i10);
        }
        if (typeArgumentListMarker instanceof ArgumentList) {
            TypeArgumentMarker typeArgumentMarker = ((ArgumentList) typeArgumentListMarker).get(i10);
            Intrinsics.checkNotNullExpressionValue(typeArgumentMarker, "get(...)");
            return typeArgumentMarker;
        }
        throw new IllegalStateException(("unknown type argument list type: " + typeArgumentListMarker + ", " + Reflection.getOrCreateKotlinClass(typeArgumentListMarker.getClass())).toString());
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public TypeArgumentMarker getArgument(@NotNull KotlinTypeMarker kotlinTypeMarker, int i10) {
        return ClassicTypeSystemContext.DefaultImpls.getArgument(this, kotlinTypeMarker, i10);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public TypeArgumentMarker getArgumentOrNull(RigidTypeMarker rigidTypeMarker, int i10) {
        Intrinsics.checkNotNullParameter(rigidTypeMarker, "<this>");
        if (i10 >= 0 && i10 < argumentsCount(rigidTypeMarker)) {
            return getArgument(rigidTypeMarker, i10);
        }
        return null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public List<TypeArgumentMarker> getArguments(@NotNull KotlinTypeMarker kotlinTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.getArguments(this, kotlinTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeSystemCommonBackendContext
    @NotNull
    public FqNameUnsafe getClassFqNameUnsafe(@NotNull TypeConstructorMarker typeConstructorMarker) {
        return ClassicTypeSystemContext.DefaultImpls.getClassFqNameUnsafe(this, typeConstructorMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public TypeParameterMarker getParameter(@NotNull TypeConstructorMarker typeConstructorMarker, int i10) {
        return ClassicTypeSystemContext.DefaultImpls.getParameter(this, typeConstructorMarker, i10);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public List<TypeParameterMarker> getParameters(@NotNull TypeConstructorMarker typeConstructorMarker) {
        return ClassicTypeSystemContext.DefaultImpls.getParameters(this, typeConstructorMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeSystemCommonBackendContext
    public PrimitiveType getPrimitiveArrayType(@NotNull TypeConstructorMarker typeConstructorMarker) {
        return ClassicTypeSystemContext.DefaultImpls.getPrimitiveArrayType(this, typeConstructorMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeSystemCommonBackendContext
    public PrimitiveType getPrimitiveType(@NotNull TypeConstructorMarker typeConstructorMarker) {
        return ClassicTypeSystemContext.DefaultImpls.getPrimitiveType(this, typeConstructorMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeSystemCommonBackendContext
    @NotNull
    public KotlinTypeMarker getRepresentativeUpperBound(@NotNull TypeParameterMarker typeParameterMarker) {
        return ClassicTypeSystemContext.DefaultImpls.getRepresentativeUpperBound(this, typeParameterMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public KotlinTypeMarker getType(@NotNull TypeArgumentMarker typeArgumentMarker) {
        return ClassicTypeSystemContext.DefaultImpls.getType(this, typeArgumentMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public TypeParameterMarker getTypeParameter(@NotNull TypeVariableTypeConstructorMarker typeVariableTypeConstructorMarker) {
        return ClassicTypeSystemContext.DefaultImpls.getTypeParameter(this, typeVariableTypeConstructorMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public TypeParameterMarker getTypeParameterClassifier(@NotNull TypeConstructorMarker typeConstructorMarker) {
        return ClassicTypeSystemContext.DefaultImpls.getTypeParameterClassifier(this, typeConstructorMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeSystemCommonBackendContext
    public KotlinTypeMarker getUnsubstitutedUnderlyingType(@NotNull KotlinTypeMarker kotlinTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.getUnsubstitutedUnderlyingType(this, kotlinTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public List<KotlinTypeMarker> getUpperBounds(@NotNull TypeParameterMarker typeParameterMarker) {
        return ClassicTypeSystemContext.DefaultImpls.getUpperBounds(this, typeParameterMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public TypeVariance getVariance(@NotNull TypeArgumentMarker typeArgumentMarker) {
        return ClassicTypeSystemContext.DefaultImpls.getVariance(this, typeArgumentMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeSystemCommonBackendContext
    public boolean hasAnnotation(@NotNull KotlinTypeMarker kotlinTypeMarker, @NotNull FqName fqName) {
        return ClassicTypeSystemContext.DefaultImpls.hasAnnotation(this, kotlinTypeMarker, fqName);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean hasFlexibleNullability(KotlinTypeMarker kotlinTypeMarker) {
        Intrinsics.checkNotNullParameter(kotlinTypeMarker, "<this>");
        if (isMarkedNullable(lowerBoundIfFlexible(kotlinTypeMarker)) != isMarkedNullable(upperBoundIfFlexible(kotlinTypeMarker))) {
            return true;
        }
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean hasRecursiveBounds(@NotNull TypeParameterMarker typeParameterMarker, TypeConstructorMarker typeConstructorMarker) {
        return ClassicTypeSystemContext.DefaultImpls.hasRecursiveBounds(this, typeParameterMarker, typeConstructorMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemOptimizationContext
    public boolean identicalArguments(@NotNull RigidTypeMarker rigidTypeMarker, @NotNull RigidTypeMarker rigidTypeMarker2) {
        return ClassicTypeSystemContext.DefaultImpls.identicalArguments(this, rigidTypeMarker, rigidTypeMarker2);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public KotlinTypeMarker intersectTypes(@NotNull Collection<? extends KotlinTypeMarker> collection) {
        return ClassicTypeSystemContext.DefaultImpls.intersectTypes(this, collection);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isAnyConstructor(@NotNull TypeConstructorMarker typeConstructorMarker) {
        return ClassicTypeSystemContext.DefaultImpls.isAnyConstructor(this, typeConstructorMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isCapturedType(KotlinTypeMarker kotlinTypeMarker) {
        CapturedTypeMarker capturedTypeMarker;
        Intrinsics.checkNotNullParameter(kotlinTypeMarker, "<this>");
        RigidTypeMarker asRigidType = asRigidType(kotlinTypeMarker);
        if (asRigidType != null) {
            capturedTypeMarker = asCapturedTypeUnwrappingDnn(asRigidType);
        } else {
            capturedTypeMarker = null;
        }
        if (capturedTypeMarker != null) {
            return true;
        }
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isClassType(RigidTypeMarker rigidTypeMarker) {
        Intrinsics.checkNotNullParameter(rigidTypeMarker, "<this>");
        return isClassTypeConstructor(typeConstructor(rigidTypeMarker));
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isClassTypeConstructor(@NotNull TypeConstructorMarker typeConstructorMarker) {
        return ClassicTypeSystemContext.DefaultImpls.isClassTypeConstructor(this, typeConstructorMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isCommonFinalClassConstructor(@NotNull TypeConstructorMarker typeConstructorMarker) {
        return ClassicTypeSystemContext.DefaultImpls.isCommonFinalClassConstructor(this, typeConstructorMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isDefinitelyNotNullType(KotlinTypeMarker kotlinTypeMarker) {
        Intrinsics.checkNotNullParameter(kotlinTypeMarker, "<this>");
        RigidTypeMarker asRigidType = asRigidType(kotlinTypeMarker);
        return (asRigidType != null ? asDefinitelyNotNullType(asRigidType) : null) != null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isDenotable(@NotNull TypeConstructorMarker typeConstructorMarker) {
        return ClassicTypeSystemContext.DefaultImpls.isDenotable(this, typeConstructorMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isDynamic(KotlinTypeMarker kotlinTypeMarker) {
        DynamicTypeMarker dynamicTypeMarker;
        Intrinsics.checkNotNullParameter(kotlinTypeMarker, "<this>");
        FlexibleTypeMarker asFlexibleType = asFlexibleType(kotlinTypeMarker);
        if (asFlexibleType != null) {
            dynamicTypeMarker = asDynamicType(asFlexibleType);
        } else {
            dynamicTypeMarker = null;
        }
        if (dynamicTypeMarker != null) {
            return true;
        }
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isError(@NotNull KotlinTypeMarker kotlinTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.isError(this, kotlinTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isFlexible(KotlinTypeMarker kotlinTypeMarker) {
        Intrinsics.checkNotNullParameter(kotlinTypeMarker, "<this>");
        if (asFlexibleType(kotlinTypeMarker) != null) {
            return true;
        }
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isFlexibleWithDifferentTypeConstructors(KotlinTypeMarker kotlinTypeMarker) {
        Intrinsics.checkNotNullParameter(kotlinTypeMarker, "<this>");
        return !Intrinsics.areEqual(typeConstructor(lowerBoundIfFlexible(kotlinTypeMarker)), typeConstructor(upperBoundIfFlexible(kotlinTypeMarker)));
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeSystemCommonBackendContext
    public boolean isInlineClass(@NotNull TypeConstructorMarker typeConstructorMarker) {
        return ClassicTypeSystemContext.DefaultImpls.isInlineClass(this, typeConstructorMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isIntegerLiteralType(RigidTypeMarker rigidTypeMarker) {
        Intrinsics.checkNotNullParameter(rigidTypeMarker, "<this>");
        return isIntegerLiteralTypeConstructor(typeConstructor(rigidTypeMarker));
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isIntegerLiteralTypeConstructor(@NotNull TypeConstructorMarker typeConstructorMarker) {
        return ClassicTypeSystemContext.DefaultImpls.isIntegerLiteralTypeConstructor(this, typeConstructorMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isIntersection(@NotNull TypeConstructorMarker typeConstructorMarker) {
        return ClassicTypeSystemContext.DefaultImpls.isIntersection(this, typeConstructorMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemInferenceExtensionContext
    public boolean isK2() {
        return ClassicTypeSystemContext.DefaultImpls.isK2(this);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isMarkedNullable(@NotNull KotlinTypeMarker kotlinTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.isMarkedNullable(this, kotlinTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isNotNullTypeParameter(@NotNull KotlinTypeMarker kotlinTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.isNotNullTypeParameter(this, kotlinTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isNothing(KotlinTypeMarker kotlinTypeMarker) {
        Intrinsics.checkNotNullParameter(kotlinTypeMarker, "<this>");
        if (isNothingConstructor(typeConstructor(kotlinTypeMarker)) && !isNullableType(kotlinTypeMarker)) {
            return true;
        }
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isNothingConstructor(@NotNull TypeConstructorMarker typeConstructorMarker) {
        return ClassicTypeSystemContext.DefaultImpls.isNothingConstructor(this, typeConstructorMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isNullableType(@NotNull KotlinTypeMarker kotlinTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.isNullableType(this, kotlinTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isOldCapturedType(@NotNull CapturedTypeMarker capturedTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.isOldCapturedType(this, capturedTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isPrimitiveType(@NotNull SimpleTypeMarker simpleTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.isPrimitiveType(this, simpleTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isProjectionNotNull(@NotNull CapturedTypeMarker capturedTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.isProjectionNotNull(this, capturedTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isRawType(@NotNull KotlinTypeMarker kotlinTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.isRawType(this, kotlinTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.checker.ClassicTypeSystemContext, kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isSingleClassifierType(@NotNull RigidTypeMarker rigidTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.isSingleClassifierType(this, rigidTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.checker.ClassicTypeSystemContext, kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isStarProjection(@NotNull TypeArgumentMarker typeArgumentMarker) {
        return ClassicTypeSystemContext.DefaultImpls.isStarProjection(this, typeArgumentMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isStubType(@NotNull RigidTypeMarker rigidTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.isStubType(this, rigidTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isStubTypeForBuilderInference(@NotNull RigidTypeMarker rigidTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.isStubTypeForBuilderInference(this, rigidTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isTypeVariableType(@NotNull KotlinTypeMarker kotlinTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.isTypeVariableType(this, kotlinTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeSystemCommonBackendContext
    public boolean isUnderKotlinPackage(@NotNull TypeConstructorMarker typeConstructorMarker) {
        return ClassicTypeSystemContext.DefaultImpls.isUnderKotlinPackage(this, typeConstructorMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public RigidTypeMarker lowerBoundIfFlexible(KotlinTypeMarker kotlinTypeMarker) {
        RigidTypeMarker lowerBound;
        Intrinsics.checkNotNullParameter(kotlinTypeMarker, "<this>");
        FlexibleTypeMarker asFlexibleType = asFlexibleType(kotlinTypeMarker);
        if (asFlexibleType != null && (lowerBound = lowerBound(asFlexibleType)) != null) {
            return lowerBound;
        }
        RigidTypeMarker asRigidType = asRigidType(kotlinTypeMarker);
        Intrinsics.checkNotNull(asRigidType);
        return asRigidType;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public KotlinTypeMarker lowerType(@NotNull CapturedTypeMarker capturedTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.lowerType(this, capturedTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public KotlinTypeMarker makeDefinitelyNotNullOrNotNull(@NotNull KotlinTypeMarker kotlinTypeMarker, boolean z10) {
        return ClassicTypeSystemContext.DefaultImpls.makeDefinitelyNotNullOrNotNull(this, kotlinTypeMarker, z10);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeSystemCommonBackendContext
    @NotNull
    public KotlinTypeMarker makeNullable(KotlinTypeMarker kotlinTypeMarker) {
        RigidTypeMarker withNullability;
        Intrinsics.checkNotNullParameter(kotlinTypeMarker, "<this>");
        RigidTypeMarker asRigidType = asRigidType(kotlinTypeMarker);
        if (asRigidType != null && (withNullability = withNullability(asRigidType, true)) != null) {
            return withNullability;
        }
        return kotlinTypeMarker;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeCheckerProviderContext
    @NotNull
    public TypeCheckerState newTypeCheckerState(final boolean z10, final boolean z11, final boolean z12) {
        if (this.f35408e == null) {
            return ClassicTypeCheckerStateKt.createClassicTypeCheckerState(z10, z11, this, this.f35407d, this.f35406c);
        }
        final KotlinTypePreparator kotlinTypePreparator = this.f35407d;
        final KotlinTypeRefiner kotlinTypeRefiner = this.f35406c;
        return new TypeCheckerState(z10, z11, z12, this, kotlinTypePreparator, kotlinTypeRefiner) { // from class: kotlin.reflect.jvm.internal.impl.resolve.OverridingUtilTypeSystemContext$newTypeCheckerState$1

            /* renamed from: l  reason: collision with root package name */
            final /* synthetic */ OverridingUtilTypeSystemContext f35409l;

            /* JADX INFO: Access modifiers changed from: package-private */
            {
                this.f35409l = this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.types.TypeCheckerState
            public boolean customIsSubtypeOf(KotlinTypeMarker subType, KotlinTypeMarker superType) {
                Function2 function2;
                Intrinsics.checkNotNullParameter(subType, "subType");
                Intrinsics.checkNotNullParameter(superType, "superType");
                if (subType instanceof KotlinType) {
                    if (superType instanceof KotlinType) {
                        function2 = this.f35409l.f35408e;
                        return ((Boolean) function2.invoke(subType, superType)).booleanValue();
                    }
                    throw new IllegalArgumentException("Failed requirement.");
                }
                throw new IllegalArgumentException("Failed requirement.");
            }
        };
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public SimpleTypeMarker original(@NotNull DefinitelyNotNullTypeMarker definitelyNotNullTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.original(this, definitelyNotNullTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public SimpleTypeMarker originalIfDefinitelyNotNullable(RigidTypeMarker rigidTypeMarker) {
        SimpleTypeMarker original;
        Intrinsics.checkNotNullParameter(rigidTypeMarker, "<this>");
        DefinitelyNotNullTypeMarker asDefinitelyNotNullType = asDefinitelyNotNullType(rigidTypeMarker);
        if (asDefinitelyNotNullType != null && (original = original(asDefinitelyNotNullType)) != null) {
            return original;
        }
        return (SimpleTypeMarker) rigidTypeMarker;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public int parametersCount(@NotNull TypeConstructorMarker typeConstructorMarker) {
        return ClassicTypeSystemContext.DefaultImpls.parametersCount(this, typeConstructorMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public Collection<KotlinTypeMarker> possibleIntegerTypes(@NotNull RigidTypeMarker rigidTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.possibleIntegerTypes(this, rigidTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public TypeArgumentMarker projection(@NotNull CapturedTypeConstructorMarker capturedTypeConstructorMarker) {
        return ClassicTypeSystemContext.DefaultImpls.projection(this, capturedTypeConstructorMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public int size(TypeArgumentListMarker typeArgumentListMarker) {
        Intrinsics.checkNotNullParameter(typeArgumentListMarker, "<this>");
        if (typeArgumentListMarker instanceof RigidTypeMarker) {
            return argumentsCount((KotlinTypeMarker) typeArgumentListMarker);
        }
        if (typeArgumentListMarker instanceof ArgumentList) {
            return ((ArgumentList) typeArgumentListMarker).size();
        }
        throw new IllegalStateException(("unknown type argument list type: " + typeArgumentListMarker + ", " + Reflection.getOrCreateKotlinClass(typeArgumentListMarker.getClass())).toString());
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public TypeCheckerState.SupertypesPolicy substitutionSupertypePolicy(@NotNull RigidTypeMarker rigidTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.substitutionSupertypePolicy(this, rigidTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public Collection<KotlinTypeMarker> supertypes(@NotNull TypeConstructorMarker typeConstructorMarker) {
        return ClassicTypeSystemContext.DefaultImpls.supertypes(this, typeConstructorMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public CapturedTypeConstructorMarker typeConstructor(@NotNull CapturedTypeMarker capturedTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.typeConstructor((ClassicTypeSystemContext) this, capturedTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public RigidTypeMarker upperBoundIfFlexible(KotlinTypeMarker kotlinTypeMarker) {
        RigidTypeMarker upperBound;
        Intrinsics.checkNotNullParameter(kotlinTypeMarker, "<this>");
        FlexibleTypeMarker asFlexibleType = asFlexibleType(kotlinTypeMarker);
        if (asFlexibleType != null && (upperBound = upperBound(asFlexibleType)) != null) {
            return upperBound;
        }
        RigidTypeMarker asRigidType = asRigidType(kotlinTypeMarker);
        Intrinsics.checkNotNull(asRigidType);
        return asRigidType;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public KotlinTypeMarker withNullability(@NotNull KotlinTypeMarker kotlinTypeMarker, boolean z10) {
        return ClassicTypeSystemContext.DefaultImpls.withNullability(this, kotlinTypeMarker, z10);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public SimpleTypeMarker asRigidType(@NotNull KotlinTypeMarker kotlinTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.asRigidType(this, kotlinTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public TypeVariance getVariance(@NotNull TypeParameterMarker typeParameterMarker) {
        return ClassicTypeSystemContext.DefaultImpls.getVariance(this, typeParameterMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    public boolean isDefinitelyNotNullType(RigidTypeMarker rigidTypeMarker) {
        Intrinsics.checkNotNullParameter(rigidTypeMarker, "<this>");
        return asDefinitelyNotNullType(rigidTypeMarker) != null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public SimpleTypeMarker lowerBound(@NotNull FlexibleTypeMarker flexibleTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.lowerBound(this, flexibleTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public KotlinTypeMarker makeDefinitelyNotNullOrNotNull(KotlinTypeMarker kotlinTypeMarker) {
        Intrinsics.checkNotNullParameter(kotlinTypeMarker, "<this>");
        return makeDefinitelyNotNullOrNotNull(kotlinTypeMarker, false);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.checker.ClassicTypeSystemContext, kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public TypeConstructorMarker typeConstructor(@NotNull RigidTypeMarker rigidTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.typeConstructor(this, rigidTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public SimpleTypeMarker upperBound(@NotNull FlexibleTypeMarker flexibleTypeMarker) {
        return ClassicTypeSystemContext.DefaultImpls.upperBound(this, flexibleTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public TypeConstructorMarker typeConstructor(KotlinTypeMarker kotlinTypeMarker) {
        Intrinsics.checkNotNullParameter(kotlinTypeMarker, "<this>");
        RigidTypeMarker asRigidType = asRigidType(kotlinTypeMarker);
        if (asRigidType == null) {
            asRigidType = lowerBoundIfFlexible(kotlinTypeMarker);
        }
        return typeConstructor(asRigidType);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext
    @NotNull
    public SimpleTypeMarker withNullability(@NotNull RigidTypeMarker rigidTypeMarker, boolean z10) {
        return ClassicTypeSystemContext.DefaultImpls.withNullability((ClassicTypeSystemContext) this, rigidTypeMarker, z10);
    }
}
