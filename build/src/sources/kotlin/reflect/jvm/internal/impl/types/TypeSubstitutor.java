package kotlin.reflect.jvm.internal.impl.types;

import com.facebook.react.devsupport.StackTraceHelper;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.CompositeAnnotations;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.FilteredAnnotations;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.resolve.calls.inference.CapturedTypeConstructorKt;
import kotlin.reflect.jvm.internal.impl.types.checker.NewCapturedTypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorType;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorTypeKind;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorUtils;
import kotlin.reflect.jvm.internal.impl.types.typeUtil.TypeUtilsKt;
import kotlin.reflect.jvm.internal.impl.types.typesApproximation.CapturedTypeApproximationKt;
import kotlin.reflect.jvm.internal.impl.utils.ExceptionUtilsKt;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class TypeSubstitutor {
    public static final TypeSubstitutor EMPTY = create(TypeSubstitution.EMPTY);

    /* renamed from: a  reason: collision with root package name */
    private final TypeSubstitution f35088a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements Function1 {
        a() {
        }

        private static /* synthetic */ void a(int i10) {
            throw new IllegalArgumentException(String.format("Argument for @NotNull parameter '%s' of %s.%s must not be null", StackTraceHelper.NAME_KEY, "kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor$1", "invoke"));
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: b */
        public Boolean invoke(FqName fqName) {
            if (fqName == null) {
                a(0);
            }
            return Boolean.valueOf(!fqName.equals(StandardNames.FqNames.unsafeVariance));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f35089a;

        static {
            int[] iArr = new int[d.values().length];
            f35089a = iArr;
            try {
                iArr[d.OUT_IN_IN_POSITION.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f35089a[d.IN_IN_OUT_POSITION.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f35089a[d.NO_CONFLICT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends Exception {
        public c(String str) {
            super(str);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public enum d {
        NO_CONFLICT,
        IN_IN_OUT_POSITION,
        OUT_IN_IN_POSITION
    }

    protected TypeSubstitutor(TypeSubstitution typeSubstitution) {
        if (typeSubstitution == null) {
            a(7);
        }
        this.f35088a = typeSubstitution;
    }

    /* JADX WARN: Removed duplicated region for block: B:13:0x0021 A[FALL_THROUGH] */
    /* JADX WARN: Removed duplicated region for block: B:20:0x0030  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x003b A[FALL_THROUGH] */
    /* JADX WARN: Removed duplicated region for block: B:27:0x0044  */
    /* JADX WARN: Removed duplicated region for block: B:28:0x0049  */
    /* JADX WARN: Removed duplicated region for block: B:29:0x004e  */
    /* JADX WARN: Removed duplicated region for block: B:30:0x0053  */
    /* JADX WARN: Removed duplicated region for block: B:31:0x0058  */
    /* JADX WARN: Removed duplicated region for block: B:32:0x005d  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x0062  */
    /* JADX WARN: Removed duplicated region for block: B:34:0x0067  */
    /* JADX WARN: Removed duplicated region for block: B:35:0x006c  */
    /* JADX WARN: Removed duplicated region for block: B:36:0x0071  */
    /* JADX WARN: Removed duplicated region for block: B:37:0x0076  */
    /* JADX WARN: Removed duplicated region for block: B:38:0x007b  */
    /* JADX WARN: Removed duplicated region for block: B:39:0x0080  */
    /* JADX WARN: Removed duplicated region for block: B:40:0x0085  */
    /* JADX WARN: Removed duplicated region for block: B:41:0x008a  */
    /* JADX WARN: Removed duplicated region for block: B:44:0x0098  */
    /* JADX WARN: Removed duplicated region for block: B:60:0x00c8  */
    /* JADX WARN: Removed duplicated region for block: B:62:0x00cf  */
    /* JADX WARN: Removed duplicated region for block: B:63:0x00d4  */
    /* JADX WARN: Removed duplicated region for block: B:64:0x00d7  */
    /* JADX WARN: Removed duplicated region for block: B:65:0x00da  */
    /* JADX WARN: Removed duplicated region for block: B:66:0x00dd  */
    /* JADX WARN: Removed duplicated region for block: B:67:0x00e0  */
    /* JADX WARN: Removed duplicated region for block: B:68:0x00e5  */
    /* JADX WARN: Removed duplicated region for block: B:69:0x00ea  */
    /* JADX WARN: Removed duplicated region for block: B:70:0x00ed  */
    /* JADX WARN: Removed duplicated region for block: B:71:0x00f2  */
    /* JADX WARN: Removed duplicated region for block: B:74:0x00fc A[ADDED_TO_REGION] */
    /* JADX WARN: Removed duplicated region for block: B:79:0x0107  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static /* synthetic */ void a(int r13) {
        /*
            Method dump skipped, instructions count: 660
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.types.TypeSubstitutor.a(int):void");
    }

    private static void b(int i10, TypeProjection typeProjection, TypeSubstitution typeSubstitution) {
        if (i10 <= 100) {
            return;
        }
        throw new IllegalStateException("Recursion too deep. Most likely infinite loop while substituting " + f(typeProjection) + "; substitution: " + f(typeSubstitution));
    }

    private static d c(Variance variance, Variance variance2) {
        Variance variance3 = Variance.IN_VARIANCE;
        if (variance == variance3 && variance2 == Variance.OUT_VARIANCE) {
            return d.OUT_IN_IN_POSITION;
        }
        if (variance == Variance.OUT_VARIANCE && variance2 == variance3) {
            return d.IN_IN_OUT_POSITION;
        }
        return d.NO_CONFLICT;
    }

    @NotNull
    public static Variance combine(@NotNull Variance variance, @NotNull TypeProjection typeProjection) {
        if (variance == null) {
            a(35);
        }
        if (typeProjection == null) {
            a(36);
        }
        if (typeProjection.isStarProjection()) {
            Variance variance2 = Variance.OUT_VARIANCE;
            if (variance2 == null) {
                a(37);
            }
            return variance2;
        }
        return combine(variance, typeProjection.getProjectionKind());
    }

    @NotNull
    public static TypeSubstitutor create(@NotNull TypeSubstitution typeSubstitution) {
        if (typeSubstitution == null) {
            a(0);
        }
        return new TypeSubstitutor(typeSubstitution);
    }

    @NotNull
    public static TypeSubstitutor createChainedSubstitutor(@NotNull TypeSubstitution typeSubstitution, @NotNull TypeSubstitution typeSubstitution2) {
        if (typeSubstitution == null) {
            a(3);
        }
        if (typeSubstitution2 == null) {
            a(4);
        }
        return create(DisjointKeysUnionTypeSubstitution.create(typeSubstitution, typeSubstitution2));
    }

    private static Annotations d(Annotations annotations) {
        if (annotations == null) {
            a(33);
        }
        if (!annotations.hasAnnotation(StandardNames.FqNames.unsafeVariance)) {
            return annotations;
        }
        return new FilteredAnnotations(annotations, new a());
    }

    private static TypeProjection e(KotlinType kotlinType, TypeProjection typeProjection, TypeParameterDescriptor typeParameterDescriptor, TypeProjection typeProjection2) {
        if (kotlinType == null) {
            a(26);
        }
        if (typeProjection == null) {
            a(27);
        }
        if (typeProjection2 == null) {
            a(28);
        }
        if (!kotlinType.getAnnotations().hasAnnotation(StandardNames.FqNames.unsafeVariance)) {
            if (typeProjection == null) {
                a(29);
            }
            return typeProjection;
        }
        TypeConstructor constructor = typeProjection.getType().getConstructor();
        if (constructor instanceof NewCapturedTypeConstructor) {
            TypeProjection projection = ((NewCapturedTypeConstructor) constructor).getProjection();
            Variance projectionKind = projection.getProjectionKind();
            d c10 = c(typeProjection2.getProjectionKind(), projectionKind);
            d dVar = d.OUT_IN_IN_POSITION;
            if (c10 == dVar) {
                return new TypeProjectionImpl(projection.getType());
            }
            if (typeParameterDescriptor != null && c(typeParameterDescriptor.getVariance(), projectionKind) == dVar) {
                return new TypeProjectionImpl(projection.getType());
            }
            return typeProjection;
        }
        return typeProjection;
    }

    private static String f(Object obj) {
        try {
            return obj.toString();
        } catch (Throwable th2) {
            if (!ExceptionUtilsKt.isProcessCanceledException(th2)) {
                return "[Exception while computing toString(): " + th2 + "]";
            }
            throw th2;
        }
    }

    private TypeProjection g(TypeProjection typeProjection, int i10) {
        KotlinType kotlinType;
        KotlinType type = typeProjection.getType();
        Variance projectionKind = typeProjection.getProjectionKind();
        if (type.getConstructor().mo1197getDeclarationDescriptor() instanceof TypeParameterDescriptor) {
            return typeProjection;
        }
        SimpleType abbreviation = SpecialTypesKt.getAbbreviation(type);
        if (abbreviation != null) {
            kotlinType = replaceWithNonApproximatingSubstitution().substitute(abbreviation, Variance.INVARIANT);
        } else {
            kotlinType = null;
        }
        KotlinType replace = TypeSubstitutionKt.replace(type, h(type.getConstructor().getParameters(), type.getArguments(), i10), this.f35088a.filterAnnotations(type.getAnnotations()));
        if ((replace instanceof SimpleType) && (kotlinType instanceof SimpleType)) {
            replace = SpecialTypesKt.withAbbreviation((SimpleType) replace, (SimpleType) kotlinType);
        }
        return new TypeProjectionImpl(projectionKind, replace);
    }

    private List h(List list, List list2, int i10) {
        ArrayList arrayList = new ArrayList(list.size());
        boolean z10 = false;
        for (int i11 = 0; i11 < list.size(); i11++) {
            TypeParameterDescriptor typeParameterDescriptor = (TypeParameterDescriptor) list.get(i11);
            TypeProjection typeProjection = (TypeProjection) list2.get(i11);
            TypeProjection i12 = i(typeProjection, typeParameterDescriptor, i10 + 1);
            int i13 = b.f35089a[c(typeParameterDescriptor.getVariance(), i12.getProjectionKind()).ordinal()];
            if (i13 != 1 && i13 != 2) {
                if (i13 == 3) {
                    Variance variance = typeParameterDescriptor.getVariance();
                    Variance variance2 = Variance.INVARIANT;
                    if (variance != variance2 && !i12.isStarProjection()) {
                        i12 = new TypeProjectionImpl(variance2, i12.getType());
                    }
                }
            } else {
                i12 = TypeUtils.makeStarProjection(typeParameterDescriptor);
            }
            if (i12 != typeProjection) {
                z10 = true;
            }
            arrayList.add(i12);
        }
        if (!z10) {
            return list2;
        }
        return arrayList;
    }

    private TypeProjection i(TypeProjection typeProjection, TypeParameterDescriptor typeParameterDescriptor, int i10) {
        TypeProjection typeProjection2;
        KotlinType makeNullableIfNeeded;
        if (typeProjection == null) {
            a(18);
        }
        b(i10, typeProjection, this.f35088a);
        if (!typeProjection.isStarProjection()) {
            KotlinType type = typeProjection.getType();
            if (type instanceof TypeWithEnhancement) {
                TypeWithEnhancement typeWithEnhancement = (TypeWithEnhancement) type;
                UnwrappedType origin = typeWithEnhancement.getOrigin();
                KotlinType enhancement = typeWithEnhancement.getEnhancement();
                TypeProjection i11 = i(new TypeProjectionImpl(typeProjection.getProjectionKind(), origin), typeParameterDescriptor, i10 + 1);
                if (i11.isStarProjection()) {
                    return i11;
                }
                return new TypeProjectionImpl(i11.getProjectionKind(), TypeWithEnhancementKt.wrapEnhancement(i11.getType().unwrap(), substitute(enhancement, typeProjection.getProjectionKind())));
            } else if (!DynamicTypesKt.isDynamic(type) && !(type.unwrap() instanceof RawType)) {
                TypeProjection mo1200get = this.f35088a.mo1200get(type);
                if (mo1200get != null) {
                    typeProjection2 = e(type, mo1200get, typeParameterDescriptor, typeProjection);
                } else {
                    typeProjection2 = null;
                }
                Variance projectionKind = typeProjection.getProjectionKind();
                if (typeProjection2 == null && FlexibleTypesKt.isFlexible(type) && !TypeCapabilitiesKt.isCustomTypeParameter(type)) {
                    FlexibleType asFlexibleType = FlexibleTypesKt.asFlexibleType(type);
                    int i12 = i10 + 1;
                    TypeProjection i13 = i(new TypeProjectionImpl(projectionKind, asFlexibleType.getLowerBound()), typeParameterDescriptor, i12);
                    TypeProjection i14 = i(new TypeProjectionImpl(projectionKind, asFlexibleType.getUpperBound()), typeParameterDescriptor, i12);
                    Variance projectionKind2 = i13.getProjectionKind();
                    if (i13.getType() != asFlexibleType.getLowerBound() || i14.getType() != asFlexibleType.getUpperBound()) {
                        return new TypeProjectionImpl(projectionKind2, KotlinTypeFactory.flexibleType(TypeSubstitutionKt.asSimpleType(i13.getType()), TypeSubstitutionKt.asSimpleType(i14.getType())));
                    }
                } else if (!KotlinBuiltIns.isNothing(type) && !KotlinTypeKt.isError(type)) {
                    if (typeProjection2 != null) {
                        d c10 = c(projectionKind, typeProjection2.getProjectionKind());
                        if (!CapturedTypeConstructorKt.isCaptured(type)) {
                            int i15 = b.f35089a[c10.ordinal()];
                            if (i15 != 1) {
                                if (i15 == 2) {
                                    return new TypeProjectionImpl(Variance.OUT_VARIANCE, type.getConstructor().getBuiltIns().getNullableAnyType());
                                }
                            } else {
                                throw new c("Out-projection in in-position");
                            }
                        }
                        CustomTypeParameter customTypeParameter = TypeCapabilitiesKt.getCustomTypeParameter(type);
                        if (typeProjection2.isStarProjection()) {
                            return typeProjection2;
                        }
                        if (customTypeParameter != null) {
                            makeNullableIfNeeded = customTypeParameter.substitutionResult(typeProjection2.getType());
                        } else {
                            makeNullableIfNeeded = TypeUtils.makeNullableIfNeeded(typeProjection2.getType(), type.isMarkedNullable());
                        }
                        if (!type.getAnnotations().isEmpty()) {
                            makeNullableIfNeeded = TypeUtilsKt.replaceAnnotations(makeNullableIfNeeded, new CompositeAnnotations(makeNullableIfNeeded.getAnnotations(), d(this.f35088a.filterAnnotations(type.getAnnotations()))));
                        }
                        if (c10 == d.NO_CONFLICT) {
                            projectionKind = combine(projectionKind, typeProjection2.getProjectionKind());
                        }
                        return new TypeProjectionImpl(projectionKind, makeNullableIfNeeded);
                    }
                    typeProjection = g(typeProjection, i10);
                    if (typeProjection == null) {
                        a(25);
                    }
                }
            }
        }
        return typeProjection;
    }

    @NotNull
    public TypeSubstitution getSubstitution() {
        TypeSubstitution typeSubstitution = this.f35088a;
        if (typeSubstitution == null) {
            a(8);
        }
        return typeSubstitution;
    }

    public boolean isEmpty() {
        return this.f35088a.isEmpty();
    }

    @NotNull
    public TypeSubstitutor replaceWithNonApproximatingSubstitution() {
        TypeSubstitution typeSubstitution = this.f35088a;
        if ((typeSubstitution instanceof IndexedParametersSubstitution) && typeSubstitution.approximateContravariantCapturedTypes()) {
            return new TypeSubstitutor(new IndexedParametersSubstitution(((IndexedParametersSubstitution) this.f35088a).getParameters(), ((IndexedParametersSubstitution) this.f35088a).getArguments(), false));
        }
        return this;
    }

    @NotNull
    public KotlinType safeSubstitute(@NotNull KotlinType kotlinType, @NotNull Variance variance) {
        if (kotlinType == null) {
            a(9);
        }
        if (variance == null) {
            a(10);
        }
        if (isEmpty()) {
            if (kotlinType == null) {
                a(11);
            }
            return kotlinType;
        }
        try {
            KotlinType type = i(new TypeProjectionImpl(variance, kotlinType), null, 0).getType();
            if (type == null) {
                a(12);
            }
            return type;
        } catch (c e10) {
            ErrorType createErrorType = ErrorUtils.createErrorType(ErrorTypeKind.UNABLE_TO_SUBSTITUTE_TYPE, e10.getMessage());
            if (createErrorType == null) {
                a(13);
            }
            return createErrorType;
        }
    }

    public KotlinType substitute(@NotNull KotlinType kotlinType, @NotNull Variance variance) {
        if (kotlinType == null) {
            a(14);
        }
        if (variance == null) {
            a(15);
        }
        TypeProjection substitute = substitute(new TypeProjectionImpl(variance, getSubstitution().prepareTopLevelType(kotlinType, variance)));
        if (substitute == null) {
            return null;
        }
        return substitute.getType();
    }

    public TypeProjection substituteWithoutApproximation(@NotNull TypeProjection typeProjection) {
        if (typeProjection == null) {
            a(17);
        }
        if (isEmpty()) {
            return typeProjection;
        }
        try {
            return i(typeProjection, null, 0);
        } catch (c unused) {
            return null;
        }
    }

    @NotNull
    public static TypeSubstitutor create(@NotNull KotlinType kotlinType) {
        if (kotlinType == null) {
            a(6);
        }
        return create(TypeConstructorSubstitution.create(kotlinType.getConstructor(), kotlinType.getArguments()));
    }

    @NotNull
    public static Variance combine(@NotNull Variance variance, @NotNull Variance variance2) {
        if (variance == null) {
            a(38);
        }
        if (variance2 == null) {
            a(39);
        }
        Variance variance3 = Variance.INVARIANT;
        if (variance == variance3) {
            if (variance2 == null) {
                a(40);
            }
            return variance2;
        } else if (variance2 == variance3) {
            if (variance == null) {
                a(41);
            }
            return variance;
        } else if (variance == variance2) {
            if (variance2 == null) {
                a(42);
            }
            return variance2;
        } else {
            throw new AssertionError("Variance conflict: type parameter variance '" + variance + "' and projection kind '" + variance2 + "' cannot be combined");
        }
    }

    public TypeProjection substitute(@NotNull TypeProjection typeProjection) {
        if (typeProjection == null) {
            a(16);
        }
        TypeProjection substituteWithoutApproximation = substituteWithoutApproximation(typeProjection);
        return (this.f35088a.approximateCapturedTypes() || this.f35088a.approximateContravariantCapturedTypes()) ? CapturedTypeApproximationKt.approximateCapturedTypesIfNecessary(substituteWithoutApproximation, this.f35088a.approximateContravariantCapturedTypes()) : substituteWithoutApproximation;
    }
}
