package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotated;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.load.java.AnnotationQualifierApplicabilityType;
import kotlin.reflect.jvm.internal.impl.load.java.AnnotationTypeQualifierResolver;
import kotlin.reflect.jvm.internal.impl.load.java.JavaDefaultQualifiers;
import kotlin.reflect.jvm.internal.impl.load.java.JavaTypeQualifiersByElementType;
import kotlin.reflect.jvm.internal.impl.load.java.descriptors.PossiblyExternalAnnotationDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaAnnotationDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaTypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.name.FqNameUnsafe;
import kotlin.reflect.jvm.internal.impl.resolve.DescriptorUtils;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.TypeUtils;
import kotlin.reflect.jvm.internal.impl.types.TypeWithEnhancementKt;
import kotlin.reflect.jvm.internal.impl.types.checker.SimpleClassicTypeSystemContext;
import kotlin.reflect.jvm.internal.impl.types.model.KotlinTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeParameterMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeSystemInferenceExtensionContext;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c1 extends AbstractSignatureParts {

    /* renamed from: a  reason: collision with root package name */
    private final Annotated f34395a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f34396b;

    /* renamed from: c  reason: collision with root package name */
    private final LazyJavaResolverContext f34397c;

    /* renamed from: d  reason: collision with root package name */
    private final AnnotationQualifierApplicabilityType f34398d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f34399e;

    public /* synthetic */ c1(Annotated annotated, boolean z10, LazyJavaResolverContext lazyJavaResolverContext, AnnotationQualifierApplicabilityType annotationQualifierApplicabilityType, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(annotated, z10, lazyJavaResolverContext, annotationQualifierApplicabilityType, (i10 & 16) != 0 ? false : z11);
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.AbstractSignatureParts
    public Iterable getAnnotations(KotlinTypeMarker kotlinTypeMarker) {
        Intrinsics.checkNotNullParameter(kotlinTypeMarker, "<this>");
        return ((KotlinType) kotlinTypeMarker).getAnnotations();
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.AbstractSignatureParts
    public Iterable getContainerAnnotations() {
        Annotations annotations;
        Annotated annotated = this.f34395a;
        if (annotated != null && (annotations = annotated.getAnnotations()) != null) {
            return annotations;
        }
        return CollectionsKt.l();
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.AbstractSignatureParts
    public AnnotationQualifierApplicabilityType getContainerApplicabilityType() {
        return this.f34398d;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.AbstractSignatureParts
    public JavaTypeQualifiersByElementType getContainerDefaultTypeQualifiers() {
        return this.f34397c.getDefaultTypeQualifiers();
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.AbstractSignatureParts
    public boolean getContainerIsVarargParameter() {
        Annotated annotated = this.f34395a;
        if ((annotated instanceof ValueParameterDescriptor) && ((ValueParameterDescriptor) annotated).getVarargElementType() != null) {
            return true;
        }
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.AbstractSignatureParts
    public boolean getEnableImprovementsInStrictMode() {
        return this.f34397c.getComponents().getSettings().getTypeEnhancementImprovementsInStrictMode();
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.AbstractSignatureParts
    public FqNameUnsafe getFqNameUnsafe(KotlinTypeMarker kotlinTypeMarker) {
        Intrinsics.checkNotNullParameter(kotlinTypeMarker, "<this>");
        ClassDescriptor classDescriptor = TypeUtils.getClassDescriptor((KotlinType) kotlinTypeMarker);
        if (classDescriptor != null) {
            return DescriptorUtils.getFqName(classDescriptor);
        }
        return null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.AbstractSignatureParts
    public boolean getSkipRawTypeArguments() {
        return this.f34399e;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.AbstractSignatureParts
    public boolean isArrayOrPrimitiveArray(KotlinTypeMarker kotlinTypeMarker) {
        Intrinsics.checkNotNullParameter(kotlinTypeMarker, "<this>");
        return KotlinBuiltIns.isArrayOrPrimitiveArray((KotlinType) kotlinTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.AbstractSignatureParts
    public boolean isCovariant() {
        return this.f34396b;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.AbstractSignatureParts
    public boolean isEqual(KotlinTypeMarker kotlinTypeMarker, KotlinTypeMarker other) {
        Intrinsics.checkNotNullParameter(kotlinTypeMarker, "<this>");
        Intrinsics.checkNotNullParameter(other, "other");
        return this.f34397c.getComponents().getKotlinTypeChecker().equalTypes((KotlinType) kotlinTypeMarker, (KotlinType) other);
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.AbstractSignatureParts
    public boolean isFromJava(TypeParameterMarker typeParameterMarker) {
        Intrinsics.checkNotNullParameter(typeParameterMarker, "<this>");
        return typeParameterMarker instanceof LazyJavaTypeParameterDescriptor;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.AbstractSignatureParts
    public boolean isNotNullTypeParameterCompat(KotlinTypeMarker kotlinTypeMarker) {
        Intrinsics.checkNotNullParameter(kotlinTypeMarker, "<this>");
        return ((KotlinType) kotlinTypeMarker).unwrap() instanceof NotNullTypeParameterImpl;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.AbstractSignatureParts
    protected NullabilityQualifierWithMigrationStatus l(NullabilityQualifierWithMigrationStatus nullabilityQualifierWithMigrationStatus, JavaDefaultQualifiers javaDefaultQualifiers) {
        NullabilityQualifierWithMigrationStatus copy$default;
        if (nullabilityQualifierWithMigrationStatus != null && (copy$default = NullabilityQualifierWithMigrationStatus.copy$default(nullabilityQualifierWithMigrationStatus, NullabilityQualifier.NOT_NULL, false, 2, null)) != null) {
            return copy$default;
        }
        if (javaDefaultQualifiers == null) {
            return null;
        }
        return javaDefaultQualifiers.getNullabilityQualifier();
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.AbstractSignatureParts
    /* renamed from: q */
    public boolean forceWarning(AnnotationDescriptor annotationDescriptor, KotlinTypeMarker kotlinTypeMarker) {
        Intrinsics.checkNotNullParameter(annotationDescriptor, "<this>");
        if (!(annotationDescriptor instanceof PossiblyExternalAnnotationDescriptor) || !((PossiblyExternalAnnotationDescriptor) annotationDescriptor).isIdeExternalAnnotation()) {
            if (!(annotationDescriptor instanceof LazyJavaAnnotationDescriptor) || getEnableImprovementsInStrictMode() || (!((LazyJavaAnnotationDescriptor) annotationDescriptor).isFreshlySupportedTypeUseAnnotation() && getContainerApplicabilityType() != AnnotationQualifierApplicabilityType.TYPE_PARAMETER_BOUNDS)) {
                if (kotlinTypeMarker != null && KotlinBuiltIns.isPrimitiveArray((KotlinType) kotlinTypeMarker) && getAnnotationTypeQualifierResolver().isTypeUseAnnotation(annotationDescriptor) && !this.f34397c.getComponents().getSettings().getEnhancePrimitiveArrays()) {
                    return true;
                }
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.AbstractSignatureParts
    /* renamed from: r */
    public AnnotationTypeQualifierResolver getAnnotationTypeQualifierResolver() {
        return this.f34397c.getComponents().getAnnotationTypeQualifierResolver();
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.AbstractSignatureParts
    /* renamed from: s */
    public KotlinType getEnhancedForWarnings(KotlinTypeMarker kotlinTypeMarker) {
        Intrinsics.checkNotNullParameter(kotlinTypeMarker, "<this>");
        return TypeWithEnhancementKt.getEnhancement((KotlinType) kotlinTypeMarker);
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.AbstractSignatureParts
    /* renamed from: t */
    public TypeSystemInferenceExtensionContext getTypeSystem() {
        return SimpleClassicTypeSystemContext.INSTANCE;
    }

    public c1(Annotated annotated, boolean z10, LazyJavaResolverContext containerContext, AnnotationQualifierApplicabilityType containerApplicabilityType, boolean z11) {
        Intrinsics.checkNotNullParameter(containerContext, "containerContext");
        Intrinsics.checkNotNullParameter(containerApplicabilityType, "containerApplicabilityType");
        this.f34395a = annotated;
        this.f34396b = z10;
        this.f34397c = containerContext;
        this.f34398d = containerApplicabilityType;
        this.f34399e = z11;
    }
}
