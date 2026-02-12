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
    private final StorageManager f32822a;

    /* renamed from: b  reason: collision with root package name */
    private final JavaClassFinder f32823b;

    /* renamed from: c  reason: collision with root package name */
    private final KotlinClassFinder f32824c;

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedDescriptorResolver f32825d;

    /* renamed from: e  reason: collision with root package name */
    private final SignaturePropagator f32826e;

    /* renamed from: f  reason: collision with root package name */
    private final ErrorReporter f32827f;

    /* renamed from: g  reason: collision with root package name */
    private final JavaResolverCache f32828g;

    /* renamed from: h  reason: collision with root package name */
    private final JavaPropertyInitializerEvaluator f32829h;

    /* renamed from: i  reason: collision with root package name */
    private final SamConversionResolver f32830i;

    /* renamed from: j  reason: collision with root package name */
    private final JavaSourceElementFactory f32831j;

    /* renamed from: k  reason: collision with root package name */
    private final ModuleClassResolver f32832k;

    /* renamed from: l  reason: collision with root package name */
    private final PackagePartProvider f32833l;

    /* renamed from: m  reason: collision with root package name */
    private final SupertypeLoopChecker f32834m;

    /* renamed from: n  reason: collision with root package name */
    private final LookupTracker f32835n;

    /* renamed from: o  reason: collision with root package name */
    private final ModuleDescriptor f32836o;

    /* renamed from: p  reason: collision with root package name */
    private final ReflectionTypes f32837p;

    /* renamed from: q  reason: collision with root package name */
    private final AnnotationTypeQualifierResolver f32838q;

    /* renamed from: r  reason: collision with root package name */
    private final SignatureEnhancement f32839r;

    /* renamed from: s  reason: collision with root package name */
    private final JavaClassesTracker f32840s;

    /* renamed from: t  reason: collision with root package name */
    private final JavaResolverSettings f32841t;

    /* renamed from: u  reason: collision with root package name */
    private final NewKotlinTypeChecker f32842u;

    /* renamed from: v  reason: collision with root package name */
    private final JavaTypeEnhancementState f32843v;

    /* renamed from: w  reason: collision with root package name */
    private final JavaModuleAnnotationsProvider f32844w;

    /* renamed from: x  reason: collision with root package name */
    private final SyntheticJavaPartsProvider f32845x;

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
        this.f32822a = storageManager;
        this.f32823b = finder;
        this.f32824c = kotlinClassFinder;
        this.f32825d = deserializedDescriptorResolver;
        this.f32826e = signaturePropagator;
        this.f32827f = errorReporter;
        this.f32828g = javaResolverCache;
        this.f32829h = javaPropertyInitializerEvaluator;
        this.f32830i = samConversionResolver;
        this.f32831j = sourceElementFactory;
        this.f32832k = moduleClassResolver;
        this.f32833l = packagePartProvider;
        this.f32834m = supertypeLoopChecker;
        this.f32835n = lookupTracker;
        this.f32836o = module;
        this.f32837p = reflectionTypes;
        this.f32838q = annotationTypeQualifierResolver;
        this.f32839r = signatureEnhancement;
        this.f32840s = javaClassesTracker;
        this.f32841t = settings;
        this.f32842u = kotlinTypeChecker;
        this.f32843v = javaTypeEnhancementState;
        this.f32844w = javaModuleResolver;
        this.f32845x = syntheticPartsProvider;
    }

    @NotNull
    public final AnnotationTypeQualifierResolver getAnnotationTypeQualifierResolver() {
        return this.f32838q;
    }

    @NotNull
    public final DeserializedDescriptorResolver getDeserializedDescriptorResolver() {
        return this.f32825d;
    }

    @NotNull
    public final ErrorReporter getErrorReporter() {
        return this.f32827f;
    }

    @NotNull
    public final JavaClassFinder getFinder() {
        return this.f32823b;
    }

    @NotNull
    public final JavaClassesTracker getJavaClassesTracker() {
        return this.f32840s;
    }

    @NotNull
    public final JavaModuleAnnotationsProvider getJavaModuleResolver() {
        return this.f32844w;
    }

    @NotNull
    public final JavaPropertyInitializerEvaluator getJavaPropertyInitializerEvaluator() {
        return this.f32829h;
    }

    @NotNull
    public final JavaResolverCache getJavaResolverCache() {
        return this.f32828g;
    }

    @NotNull
    public final JavaTypeEnhancementState getJavaTypeEnhancementState() {
        return this.f32843v;
    }

    @NotNull
    public final KotlinClassFinder getKotlinClassFinder() {
        return this.f32824c;
    }

    @NotNull
    public final NewKotlinTypeChecker getKotlinTypeChecker() {
        return this.f32842u;
    }

    @NotNull
    public final LookupTracker getLookupTracker() {
        return this.f32835n;
    }

    @NotNull
    public final ModuleDescriptor getModule() {
        return this.f32836o;
    }

    @NotNull
    public final ModuleClassResolver getModuleClassResolver() {
        return this.f32832k;
    }

    @NotNull
    public final PackagePartProvider getPackagePartProvider() {
        return this.f32833l;
    }

    @NotNull
    public final ReflectionTypes getReflectionTypes() {
        return this.f32837p;
    }

    @NotNull
    public final JavaResolverSettings getSettings() {
        return this.f32841t;
    }

    @NotNull
    public final SignatureEnhancement getSignatureEnhancement() {
        return this.f32839r;
    }

    @NotNull
    public final SignaturePropagator getSignaturePropagator() {
        return this.f32826e;
    }

    @NotNull
    public final JavaSourceElementFactory getSourceElementFactory() {
        return this.f32831j;
    }

    @NotNull
    public final StorageManager getStorageManager() {
        return this.f32822a;
    }

    @NotNull
    public final SupertypeLoopChecker getSupertypeLoopChecker() {
        return this.f32834m;
    }

    @NotNull
    public final SyntheticJavaPartsProvider getSyntheticPartsProvider() {
        return this.f32845x;
    }

    @NotNull
    public final JavaResolverComponents replace(@NotNull JavaResolverCache javaResolverCache) {
        Intrinsics.checkNotNullParameter(javaResolverCache, "javaResolverCache");
        return new JavaResolverComponents(this.f32822a, this.f32823b, this.f32824c, this.f32825d, this.f32826e, this.f32827f, javaResolverCache, this.f32829h, this.f32830i, this.f32831j, this.f32832k, this.f32833l, this.f32834m, this.f32835n, this.f32836o, this.f32837p, this.f32838q, this.f32839r, this.f32840s, this.f32841t, this.f32842u, this.f32843v, this.f32844w, null, 8388608, null);
    }

    public /* synthetic */ JavaResolverComponents(StorageManager storageManager, JavaClassFinder javaClassFinder, KotlinClassFinder kotlinClassFinder, DeserializedDescriptorResolver deserializedDescriptorResolver, SignaturePropagator signaturePropagator, ErrorReporter errorReporter, JavaResolverCache javaResolverCache, JavaPropertyInitializerEvaluator javaPropertyInitializerEvaluator, SamConversionResolver samConversionResolver, JavaSourceElementFactory javaSourceElementFactory, ModuleClassResolver moduleClassResolver, PackagePartProvider packagePartProvider, SupertypeLoopChecker supertypeLoopChecker, LookupTracker lookupTracker, ModuleDescriptor moduleDescriptor, ReflectionTypes reflectionTypes, AnnotationTypeQualifierResolver annotationTypeQualifierResolver, SignatureEnhancement signatureEnhancement, JavaClassesTracker javaClassesTracker, JavaResolverSettings javaResolverSettings, NewKotlinTypeChecker newKotlinTypeChecker, JavaTypeEnhancementState javaTypeEnhancementState, JavaModuleAnnotationsProvider javaModuleAnnotationsProvider, SyntheticJavaPartsProvider syntheticJavaPartsProvider, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(storageManager, javaClassFinder, kotlinClassFinder, deserializedDescriptorResolver, signaturePropagator, errorReporter, javaResolverCache, javaPropertyInitializerEvaluator, samConversionResolver, javaSourceElementFactory, moduleClassResolver, packagePartProvider, supertypeLoopChecker, lookupTracker, moduleDescriptor, reflectionTypes, annotationTypeQualifierResolver, signatureEnhancement, javaClassesTracker, javaResolverSettings, newKotlinTypeChecker, javaTypeEnhancementState, javaModuleAnnotationsProvider, (i10 & 8388608) != 0 ? SyntheticJavaPartsProvider.Companion.getEMPTY() : syntheticJavaPartsProvider);
    }
}
