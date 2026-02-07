package kotlin.reflect.jvm.internal.impl.load.java.lazy;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.builtins.ReflectionTypes;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SupertypeLoopChecker;
import kotlin.reflect.jvm.internal.impl.incremental.components.LookupTracker;
import kotlin.reflect.jvm.internal.impl.load.java.AnnotationTypeQualifierResolver;
import kotlin.reflect.jvm.internal.impl.load.java.JavaClassFinder;
import kotlin.reflect.jvm.internal.impl.load.java.JavaClassesTracker;
import kotlin.reflect.jvm.internal.impl.load.java.JavaModuleAnnotationsProvider;
import kotlin.reflect.jvm.internal.impl.load.java.JavaTypeEnhancementState;
import kotlin.reflect.jvm.internal.impl.load.java.components.JavaPropertyInitializerEvaluator;
import kotlin.reflect.jvm.internal.impl.load.java.components.JavaResolverCache;
import kotlin.reflect.jvm.internal.impl.load.java.components.SignaturePropagator;
import kotlin.reflect.jvm.internal.impl.load.java.sources.JavaSourceElementFactory;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.SignatureEnhancement;
import kotlin.reflect.jvm.internal.impl.load.kotlin.DeserializedDescriptorResolver;
import kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinClassFinder;
import kotlin.reflect.jvm.internal.impl.load.kotlin.PackagePartProvider;
import kotlin.reflect.jvm.internal.impl.resolve.jvm.SyntheticJavaPartsProvider;
import kotlin.reflect.jvm.internal.impl.resolve.sam.SamConversionResolver;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.ErrorReporter;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import kotlin.reflect.jvm.internal.impl.types.checker.NewKotlinTypeChecker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaResolverComponents {

    /* renamed from: a  reason: collision with root package name */
    private final StorageManager f32890a;

    /* renamed from: b  reason: collision with root package name */
    private final JavaClassFinder f32891b;

    /* renamed from: c  reason: collision with root package name */
    private final KotlinClassFinder f32892c;

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedDescriptorResolver f32893d;

    /* renamed from: e  reason: collision with root package name */
    private final SignaturePropagator f32894e;

    /* renamed from: f  reason: collision with root package name */
    private final ErrorReporter f32895f;

    /* renamed from: g  reason: collision with root package name */
    private final JavaResolverCache f32896g;

    /* renamed from: h  reason: collision with root package name */
    private final JavaPropertyInitializerEvaluator f32897h;

    /* renamed from: i  reason: collision with root package name */
    private final SamConversionResolver f32898i;

    /* renamed from: j  reason: collision with root package name */
    private final JavaSourceElementFactory f32899j;

    /* renamed from: k  reason: collision with root package name */
    private final ModuleClassResolver f32900k;

    /* renamed from: l  reason: collision with root package name */
    private final PackagePartProvider f32901l;

    /* renamed from: m  reason: collision with root package name */
    private final SupertypeLoopChecker f32902m;

    /* renamed from: n  reason: collision with root package name */
    private final LookupTracker f32903n;

    /* renamed from: o  reason: collision with root package name */
    private final ModuleDescriptor f32904o;

    /* renamed from: p  reason: collision with root package name */
    private final ReflectionTypes f32905p;

    /* renamed from: q  reason: collision with root package name */
    private final AnnotationTypeQualifierResolver f32906q;

    /* renamed from: r  reason: collision with root package name */
    private final SignatureEnhancement f32907r;

    /* renamed from: s  reason: collision with root package name */
    private final JavaClassesTracker f32908s;

    /* renamed from: t  reason: collision with root package name */
    private final JavaResolverSettings f32909t;

    /* renamed from: u  reason: collision with root package name */
    private final NewKotlinTypeChecker f32910u;

    /* renamed from: v  reason: collision with root package name */
    private final JavaTypeEnhancementState f32911v;

    /* renamed from: w  reason: collision with root package name */
    private final JavaModuleAnnotationsProvider f32912w;

    /* renamed from: x  reason: collision with root package name */
    private final SyntheticJavaPartsProvider f32913x;

    public JavaResolverComponents(@NotNull StorageManager storageManager, @NotNull JavaClassFinder finder, @NotNull KotlinClassFinder kotlinClassFinder, @NotNull DeserializedDescriptorResolver deserializedDescriptorResolver, @NotNull SignaturePropagator signaturePropagator, @NotNull ErrorReporter errorReporter, @NotNull JavaResolverCache javaResolverCache, @NotNull JavaPropertyInitializerEvaluator javaPropertyInitializerEvaluator, @NotNull SamConversionResolver samConversionResolver, @NotNull JavaSourceElementFactory sourceElementFactory, @NotNull ModuleClassResolver moduleClassResolver, @NotNull PackagePartProvider packagePartProvider, @NotNull SupertypeLoopChecker supertypeLoopChecker, @NotNull LookupTracker lookupTracker, @NotNull ModuleDescriptor module, @NotNull ReflectionTypes reflectionTypes, @NotNull AnnotationTypeQualifierResolver annotationTypeQualifierResolver, @NotNull SignatureEnhancement signatureEnhancement, @NotNull JavaClassesTracker javaClassesTracker, @NotNull JavaResolverSettings settings, @NotNull NewKotlinTypeChecker kotlinTypeChecker, @NotNull JavaTypeEnhancementState javaTypeEnhancementState, @NotNull JavaModuleAnnotationsProvider javaModuleResolver, @NotNull SyntheticJavaPartsProvider syntheticPartsProvider) {
        Intrinsics.checkNotNullParameter(storageManager, "storageManager");
        Intrinsics.checkNotNullParameter(finder, "finder");
        Intrinsics.checkNotNullParameter(kotlinClassFinder, "kotlinClassFinder");
        Intrinsics.checkNotNullParameter(deserializedDescriptorResolver, "deserializedDescriptorResolver");
        Intrinsics.checkNotNullParameter(signaturePropagator, "signaturePropagator");
        Intrinsics.checkNotNullParameter(errorReporter, "errorReporter");
        Intrinsics.checkNotNullParameter(javaResolverCache, "javaResolverCache");
        Intrinsics.checkNotNullParameter(javaPropertyInitializerEvaluator, "javaPropertyInitializerEvaluator");
        Intrinsics.checkNotNullParameter(samConversionResolver, "samConversionResolver");
        Intrinsics.checkNotNullParameter(sourceElementFactory, "sourceElementFactory");
        Intrinsics.checkNotNullParameter(moduleClassResolver, "moduleClassResolver");
        Intrinsics.checkNotNullParameter(packagePartProvider, "packagePartProvider");
        Intrinsics.checkNotNullParameter(supertypeLoopChecker, "supertypeLoopChecker");
        Intrinsics.checkNotNullParameter(lookupTracker, "lookupTracker");
        Intrinsics.checkNotNullParameter(module, "module");
        Intrinsics.checkNotNullParameter(reflectionTypes, "reflectionTypes");
        Intrinsics.checkNotNullParameter(annotationTypeQualifierResolver, "annotationTypeQualifierResolver");
        Intrinsics.checkNotNullParameter(signatureEnhancement, "signatureEnhancement");
        Intrinsics.checkNotNullParameter(javaClassesTracker, "javaClassesTracker");
        Intrinsics.checkNotNullParameter(settings, "settings");
        Intrinsics.checkNotNullParameter(kotlinTypeChecker, "kotlinTypeChecker");
        Intrinsics.checkNotNullParameter(javaTypeEnhancementState, "javaTypeEnhancementState");
        Intrinsics.checkNotNullParameter(javaModuleResolver, "javaModuleResolver");
        Intrinsics.checkNotNullParameter(syntheticPartsProvider, "syntheticPartsProvider");
        this.f32890a = storageManager;
        this.f32891b = finder;
        this.f32892c = kotlinClassFinder;
        this.f32893d = deserializedDescriptorResolver;
        this.f32894e = signaturePropagator;
        this.f32895f = errorReporter;
        this.f32896g = javaResolverCache;
        this.f32897h = javaPropertyInitializerEvaluator;
        this.f32898i = samConversionResolver;
        this.f32899j = sourceElementFactory;
        this.f32900k = moduleClassResolver;
        this.f32901l = packagePartProvider;
        this.f32902m = supertypeLoopChecker;
        this.f32903n = lookupTracker;
        this.f32904o = module;
        this.f32905p = reflectionTypes;
        this.f32906q = annotationTypeQualifierResolver;
        this.f32907r = signatureEnhancement;
        this.f32908s = javaClassesTracker;
        this.f32909t = settings;
        this.f32910u = kotlinTypeChecker;
        this.f32911v = javaTypeEnhancementState;
        this.f32912w = javaModuleResolver;
        this.f32913x = syntheticPartsProvider;
    }

    @NotNull
    public final AnnotationTypeQualifierResolver getAnnotationTypeQualifierResolver() {
        return this.f32906q;
    }

    @NotNull
    public final DeserializedDescriptorResolver getDeserializedDescriptorResolver() {
        return this.f32893d;
    }

    @NotNull
    public final ErrorReporter getErrorReporter() {
        return this.f32895f;
    }

    @NotNull
    public final JavaClassFinder getFinder() {
        return this.f32891b;
    }

    @NotNull
    public final JavaClassesTracker getJavaClassesTracker() {
        return this.f32908s;
    }

    @NotNull
    public final JavaModuleAnnotationsProvider getJavaModuleResolver() {
        return this.f32912w;
    }

    @NotNull
    public final JavaPropertyInitializerEvaluator getJavaPropertyInitializerEvaluator() {
        return this.f32897h;
    }

    @NotNull
    public final JavaResolverCache getJavaResolverCache() {
        return this.f32896g;
    }

    @NotNull
    public final JavaTypeEnhancementState getJavaTypeEnhancementState() {
        return this.f32911v;
    }

    @NotNull
    public final KotlinClassFinder getKotlinClassFinder() {
        return this.f32892c;
    }

    @NotNull
    public final NewKotlinTypeChecker getKotlinTypeChecker() {
        return this.f32910u;
    }

    @NotNull
    public final LookupTracker getLookupTracker() {
        return this.f32903n;
    }

    @NotNull
    public final ModuleDescriptor getModule() {
        return this.f32904o;
    }

    @NotNull
    public final ModuleClassResolver getModuleClassResolver() {
        return this.f32900k;
    }

    @NotNull
    public final PackagePartProvider getPackagePartProvider() {
        return this.f32901l;
    }

    @NotNull
    public final ReflectionTypes getReflectionTypes() {
        return this.f32905p;
    }

    @NotNull
    public final JavaResolverSettings getSettings() {
        return this.f32909t;
    }

    @NotNull
    public final SignatureEnhancement getSignatureEnhancement() {
        return this.f32907r;
    }

    @NotNull
    public final SignaturePropagator getSignaturePropagator() {
        return this.f32894e;
    }

    @NotNull
    public final JavaSourceElementFactory getSourceElementFactory() {
        return this.f32899j;
    }

    @NotNull
    public final StorageManager getStorageManager() {
        return this.f32890a;
    }

    @NotNull
    public final SupertypeLoopChecker getSupertypeLoopChecker() {
        return this.f32902m;
    }

    @NotNull
    public final SyntheticJavaPartsProvider getSyntheticPartsProvider() {
        return this.f32913x;
    }

    @NotNull
    public final JavaResolverComponents replace(@NotNull JavaResolverCache javaResolverCache) {
        Intrinsics.checkNotNullParameter(javaResolverCache, "javaResolverCache");
        return new JavaResolverComponents(this.f32890a, this.f32891b, this.f32892c, this.f32893d, this.f32894e, this.f32895f, javaResolverCache, this.f32897h, this.f32898i, this.f32899j, this.f32900k, this.f32901l, this.f32902m, this.f32903n, this.f32904o, this.f32905p, this.f32906q, this.f32907r, this.f32908s, this.f32909t, this.f32910u, this.f32911v, this.f32912w, null, 8388608, null);
    }

    public /* synthetic */ JavaResolverComponents(StorageManager storageManager, JavaClassFinder javaClassFinder, KotlinClassFinder kotlinClassFinder, DeserializedDescriptorResolver deserializedDescriptorResolver, SignaturePropagator signaturePropagator, ErrorReporter errorReporter, JavaResolverCache javaResolverCache, JavaPropertyInitializerEvaluator javaPropertyInitializerEvaluator, SamConversionResolver samConversionResolver, JavaSourceElementFactory javaSourceElementFactory, ModuleClassResolver moduleClassResolver, PackagePartProvider packagePartProvider, SupertypeLoopChecker supertypeLoopChecker, LookupTracker lookupTracker, ModuleDescriptor moduleDescriptor, ReflectionTypes reflectionTypes, AnnotationTypeQualifierResolver annotationTypeQualifierResolver, SignatureEnhancement signatureEnhancement, JavaClassesTracker javaClassesTracker, JavaResolverSettings javaResolverSettings, NewKotlinTypeChecker newKotlinTypeChecker, JavaTypeEnhancementState javaTypeEnhancementState, JavaModuleAnnotationsProvider javaModuleAnnotationsProvider, SyntheticJavaPartsProvider syntheticJavaPartsProvider, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(storageManager, javaClassFinder, kotlinClassFinder, deserializedDescriptorResolver, signaturePropagator, errorReporter, javaResolverCache, javaPropertyInitializerEvaluator, samConversionResolver, javaSourceElementFactory, moduleClassResolver, packagePartProvider, supertypeLoopChecker, lookupTracker, moduleDescriptor, reflectionTypes, annotationTypeQualifierResolver, signatureEnhancement, javaClassesTracker, javaResolverSettings, newKotlinTypeChecker, javaTypeEnhancementState, javaModuleAnnotationsProvider, (i10 & 8388608) != 0 ? SyntheticJavaPartsProvider.Companion.getEMPTY() : syntheticJavaPartsProvider);
    }
}
