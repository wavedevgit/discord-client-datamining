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
    private final StorageManager f33908a;

    /* renamed from: b  reason: collision with root package name */
    private final JavaClassFinder f33909b;

    /* renamed from: c  reason: collision with root package name */
    private final KotlinClassFinder f33910c;

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedDescriptorResolver f33911d;

    /* renamed from: e  reason: collision with root package name */
    private final SignaturePropagator f33912e;

    /* renamed from: f  reason: collision with root package name */
    private final ErrorReporter f33913f;

    /* renamed from: g  reason: collision with root package name */
    private final JavaResolverCache f33914g;

    /* renamed from: h  reason: collision with root package name */
    private final JavaPropertyInitializerEvaluator f33915h;

    /* renamed from: i  reason: collision with root package name */
    private final SamConversionResolver f33916i;

    /* renamed from: j  reason: collision with root package name */
    private final JavaSourceElementFactory f33917j;

    /* renamed from: k  reason: collision with root package name */
    private final ModuleClassResolver f33918k;

    /* renamed from: l  reason: collision with root package name */
    private final PackagePartProvider f33919l;

    /* renamed from: m  reason: collision with root package name */
    private final SupertypeLoopChecker f33920m;

    /* renamed from: n  reason: collision with root package name */
    private final LookupTracker f33921n;

    /* renamed from: o  reason: collision with root package name */
    private final ModuleDescriptor f33922o;

    /* renamed from: p  reason: collision with root package name */
    private final ReflectionTypes f33923p;

    /* renamed from: q  reason: collision with root package name */
    private final AnnotationTypeQualifierResolver f33924q;

    /* renamed from: r  reason: collision with root package name */
    private final SignatureEnhancement f33925r;

    /* renamed from: s  reason: collision with root package name */
    private final JavaClassesTracker f33926s;

    /* renamed from: t  reason: collision with root package name */
    private final JavaResolverSettings f33927t;

    /* renamed from: u  reason: collision with root package name */
    private final NewKotlinTypeChecker f33928u;

    /* renamed from: v  reason: collision with root package name */
    private final JavaTypeEnhancementState f33929v;

    /* renamed from: w  reason: collision with root package name */
    private final JavaModuleAnnotationsProvider f33930w;

    /* renamed from: x  reason: collision with root package name */
    private final SyntheticJavaPartsProvider f33931x;

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
        this.f33908a = storageManager;
        this.f33909b = finder;
        this.f33910c = kotlinClassFinder;
        this.f33911d = deserializedDescriptorResolver;
        this.f33912e = signaturePropagator;
        this.f33913f = errorReporter;
        this.f33914g = javaResolverCache;
        this.f33915h = javaPropertyInitializerEvaluator;
        this.f33916i = samConversionResolver;
        this.f33917j = sourceElementFactory;
        this.f33918k = moduleClassResolver;
        this.f33919l = packagePartProvider;
        this.f33920m = supertypeLoopChecker;
        this.f33921n = lookupTracker;
        this.f33922o = module;
        this.f33923p = reflectionTypes;
        this.f33924q = annotationTypeQualifierResolver;
        this.f33925r = signatureEnhancement;
        this.f33926s = javaClassesTracker;
        this.f33927t = settings;
        this.f33928u = kotlinTypeChecker;
        this.f33929v = javaTypeEnhancementState;
        this.f33930w = javaModuleResolver;
        this.f33931x = syntheticPartsProvider;
    }

    @NotNull
    public final AnnotationTypeQualifierResolver getAnnotationTypeQualifierResolver() {
        return this.f33924q;
    }

    @NotNull
    public final DeserializedDescriptorResolver getDeserializedDescriptorResolver() {
        return this.f33911d;
    }

    @NotNull
    public final ErrorReporter getErrorReporter() {
        return this.f33913f;
    }

    @NotNull
    public final JavaClassFinder getFinder() {
        return this.f33909b;
    }

    @NotNull
    public final JavaClassesTracker getJavaClassesTracker() {
        return this.f33926s;
    }

    @NotNull
    public final JavaModuleAnnotationsProvider getJavaModuleResolver() {
        return this.f33930w;
    }

    @NotNull
    public final JavaPropertyInitializerEvaluator getJavaPropertyInitializerEvaluator() {
        return this.f33915h;
    }

    @NotNull
    public final JavaResolverCache getJavaResolverCache() {
        return this.f33914g;
    }

    @NotNull
    public final JavaTypeEnhancementState getJavaTypeEnhancementState() {
        return this.f33929v;
    }

    @NotNull
    public final KotlinClassFinder getKotlinClassFinder() {
        return this.f33910c;
    }

    @NotNull
    public final NewKotlinTypeChecker getKotlinTypeChecker() {
        return this.f33928u;
    }

    @NotNull
    public final LookupTracker getLookupTracker() {
        return this.f33921n;
    }

    @NotNull
    public final ModuleDescriptor getModule() {
        return this.f33922o;
    }

    @NotNull
    public final ModuleClassResolver getModuleClassResolver() {
        return this.f33918k;
    }

    @NotNull
    public final PackagePartProvider getPackagePartProvider() {
        return this.f33919l;
    }

    @NotNull
    public final ReflectionTypes getReflectionTypes() {
        return this.f33923p;
    }

    @NotNull
    public final JavaResolverSettings getSettings() {
        return this.f33927t;
    }

    @NotNull
    public final SignatureEnhancement getSignatureEnhancement() {
        return this.f33925r;
    }

    @NotNull
    public final SignaturePropagator getSignaturePropagator() {
        return this.f33912e;
    }

    @NotNull
    public final JavaSourceElementFactory getSourceElementFactory() {
        return this.f33917j;
    }

    @NotNull
    public final StorageManager getStorageManager() {
        return this.f33908a;
    }

    @NotNull
    public final SupertypeLoopChecker getSupertypeLoopChecker() {
        return this.f33920m;
    }

    @NotNull
    public final SyntheticJavaPartsProvider getSyntheticPartsProvider() {
        return this.f33931x;
    }

    @NotNull
    public final JavaResolverComponents replace(@NotNull JavaResolverCache javaResolverCache) {
        Intrinsics.checkNotNullParameter(javaResolverCache, "javaResolverCache");
        return new JavaResolverComponents(this.f33908a, this.f33909b, this.f33910c, this.f33911d, this.f33912e, this.f33913f, javaResolverCache, this.f33915h, this.f33916i, this.f33917j, this.f33918k, this.f33919l, this.f33920m, this.f33921n, this.f33922o, this.f33923p, this.f33924q, this.f33925r, this.f33926s, this.f33927t, this.f33928u, this.f33929v, this.f33930w, null, 8388608, null);
    }

    public /* synthetic */ JavaResolverComponents(StorageManager storageManager, JavaClassFinder javaClassFinder, KotlinClassFinder kotlinClassFinder, DeserializedDescriptorResolver deserializedDescriptorResolver, SignaturePropagator signaturePropagator, ErrorReporter errorReporter, JavaResolverCache javaResolverCache, JavaPropertyInitializerEvaluator javaPropertyInitializerEvaluator, SamConversionResolver samConversionResolver, JavaSourceElementFactory javaSourceElementFactory, ModuleClassResolver moduleClassResolver, PackagePartProvider packagePartProvider, SupertypeLoopChecker supertypeLoopChecker, LookupTracker lookupTracker, ModuleDescriptor moduleDescriptor, ReflectionTypes reflectionTypes, AnnotationTypeQualifierResolver annotationTypeQualifierResolver, SignatureEnhancement signatureEnhancement, JavaClassesTracker javaClassesTracker, JavaResolverSettings javaResolverSettings, NewKotlinTypeChecker newKotlinTypeChecker, JavaTypeEnhancementState javaTypeEnhancementState, JavaModuleAnnotationsProvider javaModuleAnnotationsProvider, SyntheticJavaPartsProvider syntheticJavaPartsProvider, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(storageManager, javaClassFinder, kotlinClassFinder, deserializedDescriptorResolver, signaturePropagator, errorReporter, javaResolverCache, javaPropertyInitializerEvaluator, samConversionResolver, javaSourceElementFactory, moduleClassResolver, packagePartProvider, supertypeLoopChecker, lookupTracker, moduleDescriptor, reflectionTypes, annotationTypeQualifierResolver, signatureEnhancement, javaClassesTracker, javaResolverSettings, newKotlinTypeChecker, javaTypeEnhancementState, javaModuleAnnotationsProvider, (i10 & 8388608) != 0 ? SyntheticJavaPartsProvider.Companion.getEMPTY() : syntheticJavaPartsProvider);
    }
}
