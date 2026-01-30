package kotlin.reflect.jvm.internal.impl.types;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeAliasDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.types.TypeAliasExpansionReportStrategy;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorTypeKind;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorUtils;
import kotlin.reflect.jvm.internal.impl.types.typeUtil.TypeUtilsKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nTypeAliasExpander.kt\nKotlin\n*S Kotlin\n*F\n+ 1 TypeAliasExpander.kt\norg/jetbrains/kotlin/types/TypeAliasExpander\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,278:1\n1#2:279\n1634#3,3:280\n1573#3:283\n1604#3,4:284\n1573#3:288\n1604#3,4:289\n1878#3,3:293\n*S KotlinDebug\n*F\n+ 1 TypeAliasExpander.kt\norg/jetbrains/kotlin/types/TypeAliasExpander\n*L\n148#1:280,3\n197#1:283\n197#1:284,4\n232#1:288\n232#1:289,4\n249#1:293,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class TypeAliasExpander {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: c  reason: collision with root package name */
    private static final TypeAliasExpander f35886c = new TypeAliasExpander(TypeAliasExpansionReportStrategy.DO_NOTHING.INSTANCE, false);

    /* renamed from: a  reason: collision with root package name */
    private final TypeAliasExpansionReportStrategy f35887a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f35888b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void a(int i10, TypeAliasDescriptor typeAliasDescriptor) {
            if (i10 <= 100) {
                return;
            }
            throw new AssertionError("Too deep recursion while expanding type alias " + typeAliasDescriptor.getName());
        }

        private Companion() {
        }
    }

    public TypeAliasExpander(@NotNull TypeAliasExpansionReportStrategy reportStrategy, boolean z10) {
        Intrinsics.checkNotNullParameter(reportStrategy, "reportStrategy");
        this.f35887a = reportStrategy;
        this.f35888b = z10;
    }

    private final void a(Annotations annotations, Annotations annotations2) {
        HashSet hashSet = new HashSet();
        Iterator<AnnotationDescriptor> it = annotations.iterator();
        while (it.hasNext()) {
            hashSet.add(it.next().getFqName());
        }
        for (AnnotationDescriptor annotationDescriptor : annotations2) {
            if (hashSet.contains(annotationDescriptor.getFqName())) {
                this.f35887a.repeatedAnnotation(annotationDescriptor);
            }
        }
    }

    private final void b(KotlinType kotlinType, KotlinType kotlinType2) {
        TypeSubstitutor create = TypeSubstitutor.create(kotlinType2);
        Intrinsics.checkNotNullExpressionValue(create, "create(...)");
        int i10 = 0;
        for (Object obj : kotlinType2.getArguments()) {
            int i11 = i10 + 1;
            if (i10 < 0) {
                CollectionsKt.v();
            }
            TypeProjection typeProjection = (TypeProjection) obj;
            if (!typeProjection.isStarProjection()) {
                KotlinType type = typeProjection.getType();
                Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
                if (!TypeUtilsKt.containsTypeAliasParameters(type)) {
                    TypeProjection typeProjection2 = kotlinType.getArguments().get(i10);
                    TypeParameterDescriptor typeParameterDescriptor = kotlinType.getConstructor().getParameters().get(i10);
                    if (this.f35888b) {
                        TypeAliasExpansionReportStrategy typeAliasExpansionReportStrategy = this.f35887a;
                        KotlinType type2 = typeProjection2.getType();
                        Intrinsics.checkNotNullExpressionValue(type2, "getType(...)");
                        KotlinType type3 = typeProjection.getType();
                        Intrinsics.checkNotNullExpressionValue(type3, "getType(...)");
                        Intrinsics.checkNotNull(typeParameterDescriptor);
                        typeAliasExpansionReportStrategy.boundsViolationInSubstitution(create, type2, type3, typeParameterDescriptor);
                    }
                }
            }
            i10 = i11;
        }
    }

    private final DynamicType c(DynamicType dynamicType, TypeAttributes typeAttributes) {
        return dynamicType.replaceAttributes(h(dynamicType, typeAttributes));
    }

    private final SimpleType d(SimpleType simpleType, TypeAttributes typeAttributes) {
        if (KotlinTypeKt.isError(simpleType)) {
            return simpleType;
        }
        return TypeSubstitutionKt.replace$default(simpleType, null, h(simpleType, typeAttributes), 1, null);
    }

    private final SimpleType e(SimpleType simpleType, KotlinType kotlinType) {
        SimpleType makeNullableIfNeeded = TypeUtils.makeNullableIfNeeded(simpleType, kotlinType.isMarkedNullable());
        Intrinsics.checkNotNullExpressionValue(makeNullableIfNeeded, "makeNullableIfNeeded(...)");
        return makeNullableIfNeeded;
    }

    private final SimpleType f(SimpleType simpleType, KotlinType kotlinType) {
        return d(e(simpleType, kotlinType), kotlinType.getAttributes());
    }

    private final SimpleType g(TypeAliasExpansion typeAliasExpansion, TypeAttributes typeAttributes, boolean z10) {
        TypeConstructor typeConstructor = typeAliasExpansion.getDescriptor().getTypeConstructor();
        Intrinsics.checkNotNullExpressionValue(typeConstructor, "getTypeConstructor(...)");
        return KotlinTypeFactory.simpleTypeWithNonTrivialMemberScope(typeAttributes, typeConstructor, typeAliasExpansion.getArguments(), z10, MemberScope.Empty.INSTANCE);
    }

    private final TypeAttributes h(KotlinType kotlinType, TypeAttributes typeAttributes) {
        if (KotlinTypeKt.isError(kotlinType)) {
            return kotlinType.getAttributes();
        }
        return typeAttributes.add(kotlinType.getAttributes());
    }

    private final TypeProjection i(TypeProjection typeProjection, TypeAliasExpansion typeAliasExpansion, int i10) {
        UnwrappedType unwrap = typeProjection.getType().unwrap();
        if (!DynamicTypesKt.isDynamic(unwrap)) {
            SimpleType asSimpleType = TypeSubstitutionKt.asSimpleType(unwrap);
            if (!KotlinTypeKt.isError(asSimpleType) && TypeUtilsKt.requiresTypeAliasExpansion(asSimpleType)) {
                TypeConstructor constructor = asSimpleType.getConstructor();
                ClassifierDescriptor mo1198getDeclarationDescriptor = constructor.mo1198getDeclarationDescriptor();
                constructor.getParameters().size();
                asSimpleType.getArguments().size();
                if (!(mo1198getDeclarationDescriptor instanceof TypeParameterDescriptor)) {
                    if (mo1198getDeclarationDescriptor instanceof TypeAliasDescriptor) {
                        TypeAliasDescriptor typeAliasDescriptor = (TypeAliasDescriptor) mo1198getDeclarationDescriptor;
                        if (typeAliasExpansion.isRecursion(typeAliasDescriptor)) {
                            this.f35887a.recursiveTypeAlias(typeAliasDescriptor);
                            return new TypeProjectionImpl(Variance.INVARIANT, ErrorUtils.createErrorType(ErrorTypeKind.RECURSIVE_TYPE_ALIAS, typeAliasDescriptor.getName().toString()));
                        }
                        List<TypeProjection> arguments = asSimpleType.getArguments();
                        ArrayList arrayList = new ArrayList(CollectionsKt.w(arguments, 10));
                        int i11 = 0;
                        for (Object obj : arguments) {
                            int i12 = i11 + 1;
                            if (i11 < 0) {
                                CollectionsKt.v();
                            }
                            arrayList.add(k((TypeProjection) obj, typeAliasExpansion, constructor.getParameters().get(i11), i10 + 1));
                            i11 = i12;
                        }
                        SimpleType j10 = j(TypeAliasExpansion.Companion.create(typeAliasExpansion, typeAliasDescriptor, arrayList), asSimpleType.getAttributes(), asSimpleType.isMarkedNullable(), i10 + 1, false);
                        SimpleType l10 = l(asSimpleType, typeAliasExpansion, i10);
                        if (!DynamicTypesKt.isDynamic(j10)) {
                            j10 = SpecialTypesKt.withAbbreviation(j10, l10);
                        }
                        return new TypeProjectionImpl(typeProjection.getProjectionKind(), j10);
                    }
                    SimpleType l11 = l(asSimpleType, typeAliasExpansion, i10);
                    b(asSimpleType, l11);
                    return new TypeProjectionImpl(typeProjection.getProjectionKind(), l11);
                }
            }
        }
        return typeProjection;
    }

    private final SimpleType j(TypeAliasExpansion typeAliasExpansion, TypeAttributes typeAttributes, boolean z10, int i10, boolean z11) {
        TypeProjection k10 = k(new TypeProjectionImpl(Variance.INVARIANT, typeAliasExpansion.getDescriptor().getUnderlyingType()), typeAliasExpansion, null, i10);
        KotlinType type = k10.getType();
        Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
        SimpleType asSimpleType = TypeSubstitutionKt.asSimpleType(type);
        if (KotlinTypeKt.isError(asSimpleType)) {
            return asSimpleType;
        }
        k10.getProjectionKind();
        a(asSimpleType.getAnnotations(), AnnotationsTypeAttributeKt.getAnnotations(typeAttributes));
        SimpleType makeNullableIfNeeded = TypeUtils.makeNullableIfNeeded(d(asSimpleType, typeAttributes), z10);
        Intrinsics.checkNotNullExpressionValue(makeNullableIfNeeded, "let(...)");
        if (z11) {
            return SpecialTypesKt.withAbbreviation(makeNullableIfNeeded, g(typeAliasExpansion, typeAttributes, z10));
        }
        return makeNullableIfNeeded;
    }

    private final TypeProjection k(TypeProjection typeProjection, TypeAliasExpansion typeAliasExpansion, TypeParameterDescriptor typeParameterDescriptor, int i10) {
        Variance variance;
        KotlinType f10;
        Variance variance2;
        Variance variance3;
        Companion.a(i10, typeAliasExpansion.getDescriptor());
        if (typeProjection.isStarProjection()) {
            Intrinsics.checkNotNull(typeParameterDescriptor);
            TypeProjection makeStarProjection = TypeUtils.makeStarProjection(typeParameterDescriptor);
            Intrinsics.checkNotNullExpressionValue(makeStarProjection, "makeStarProjection(...)");
            return makeStarProjection;
        }
        KotlinType type = typeProjection.getType();
        Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
        TypeProjection replacement = typeAliasExpansion.getReplacement(type.getConstructor());
        if (replacement == null) {
            return i(typeProjection, typeAliasExpansion, i10);
        }
        if (replacement.isStarProjection()) {
            Intrinsics.checkNotNull(typeParameterDescriptor);
            TypeProjection makeStarProjection2 = TypeUtils.makeStarProjection(typeParameterDescriptor);
            Intrinsics.checkNotNullExpressionValue(makeStarProjection2, "makeStarProjection(...)");
            return makeStarProjection2;
        }
        UnwrappedType unwrap = replacement.getType().unwrap();
        Variance projectionKind = replacement.getProjectionKind();
        Intrinsics.checkNotNullExpressionValue(projectionKind, "getProjectionKind(...)");
        Variance projectionKind2 = typeProjection.getProjectionKind();
        Intrinsics.checkNotNullExpressionValue(projectionKind2, "getProjectionKind(...)");
        if (projectionKind2 != projectionKind && projectionKind2 != (variance3 = Variance.INVARIANT)) {
            if (projectionKind == variance3) {
                projectionKind = projectionKind2;
            } else {
                this.f35887a.conflictingProjection(typeAliasExpansion.getDescriptor(), typeParameterDescriptor, unwrap);
            }
        }
        if (typeParameterDescriptor == null || (variance = typeParameterDescriptor.getVariance()) == null) {
            variance = Variance.INVARIANT;
        }
        if (variance != projectionKind && variance != (variance2 = Variance.INVARIANT)) {
            if (projectionKind == variance2) {
                projectionKind = variance2;
            } else {
                this.f35887a.conflictingProjection(typeAliasExpansion.getDescriptor(), typeParameterDescriptor, unwrap);
            }
        }
        a(type.getAnnotations(), unwrap.getAnnotations());
        if (unwrap instanceof DynamicType) {
            f10 = c((DynamicType) unwrap, type.getAttributes());
        } else {
            f10 = f(TypeSubstitutionKt.asSimpleType(unwrap), type);
        }
        return new TypeProjectionImpl(projectionKind, f10);
    }

    private final SimpleType l(SimpleType simpleType, TypeAliasExpansion typeAliasExpansion, int i10) {
        TypeConstructor constructor = simpleType.getConstructor();
        List<TypeProjection> arguments = simpleType.getArguments();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(arguments, 10));
        int i11 = 0;
        for (Object obj : arguments) {
            int i12 = i11 + 1;
            if (i11 < 0) {
                CollectionsKt.v();
            }
            TypeProjection typeProjection = (TypeProjection) obj;
            TypeProjection k10 = k(typeProjection, typeAliasExpansion, constructor.getParameters().get(i11), i10 + 1);
            if (!k10.isStarProjection()) {
                k10 = new TypeProjectionImpl(k10.getProjectionKind(), TypeUtils.makeNullableIfNeeded(k10.getType(), typeProjection.getType().isMarkedNullable()));
            }
            arrayList.add(k10);
            i11 = i12;
        }
        return TypeSubstitutionKt.replace$default(simpleType, arrayList, null, 2, null);
    }

    @NotNull
    public final SimpleType expand(@NotNull TypeAliasExpansion typeAliasExpansion, @NotNull TypeAttributes attributes) {
        Intrinsics.checkNotNullParameter(typeAliasExpansion, "typeAliasExpansion");
        Intrinsics.checkNotNullParameter(attributes, "attributes");
        return j(typeAliasExpansion, attributes, false, 0, true);
    }
}
