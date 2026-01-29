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
    private final StorageManager f34116a;

    /* renamed from: b  reason: collision with root package name */
    private final JavaClassFinder f34117b;

    /* renamed from: c  reason: collision with root package name */
    private final KotlinClassFinder f34118c;

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedDescriptorResolver f34119d;

    /* renamed from: e  reason: collision with root package name */
    private final SignaturePropagator f34120e;

    /* renamed from: f  reason: collision with root package name */
    private final ErrorReporter f34121f;

    /* renamed from: g  reason: collision with root package name */
    private final JavaResolverCache f34122g;

    /* renamed from: h  reason: collision with root package name */
    private final JavaPropertyInitializerEvaluator f34123h;

    /* renamed from: i  reason: collision with root package name */
    private final SamConversionResolver f34124i;

    /* renamed from: j  reason: collision with root package name */
    private final JavaSourceElementFactory f34125j;

    /* renamed from: k  reason: collision with root package name */
    private final ModuleClassResolver f34126k;

    /* renamed from: l  reason: collision with root package name */
    private final PackagePartProvider f34127l;

    /* renamed from: m  reason: collision with root package name */
    private final SupertypeLoopChecker f34128m;

    /* renamed from: n  reason: collision with root package name */
    private final LookupTracker f34129n;

    /* renamed from: o  reason: collision with root package name */
    private final ModuleDescriptor f34130o;

    /* renamed from: p  reason: collision with root package name */
    private final ReflectionTypes f34131p;

    /* renamed from: q  reason: collision with root package name */
    private final AnnotationTypeQualifierResolver f34132q;

    /* renamed from: r  reason: collision with root package name */
    private final SignatureEnhancement f34133r;

    /* renamed from: s  reason: collision with root package name */
    private final JavaClassesTracker f34134s;

    /* renamed from: t  reason: collision with root package name */
    private final JavaResolverSettings f34135t;

    /* renamed from: u  reason: collision with root package name */
    private final NewKotlinTypeChecker f34136u;

    /* renamed from: v  reason: collision with root package name */
    private final JavaTypeEnhancementState f34137v;

    /* renamed from: w  reason: collision with root package name */
    private final JavaModuleAnnotationsProvider f34138w;

    /* renamed from: x  reason: collision with root package name */
    private final SyntheticJavaPartsProvider f34139x;

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
        this.f34116a = storageManager;
        this.f34117b = finder;
        this.f34118c = kotlinClassFinder;
        this.f34119d = deserializedDescriptorResolver;
        this.f34120e = signaturePropagator;
        this.f34121f = errorReporter;
        this.f34122g = javaResolverCache;
        this.f34123h = javaPropertyInitializerEvaluator;
        this.f34124i = samConversionResolver;
        this.f34125j = sourceElementFactory;
        this.f34126k = moduleClassResolver;
        this.f34127l = packagePartProvider;
        this.f34128m = supertypeLoopChecker;
        this.f34129n = lookupTracker;
        this.f34130o = module;
        this.f34131p = reflectionTypes;
        this.f34132q = annotationTypeQualifierResolver;
        this.f34133r = signatureEnhancement;
        this.f34134s = javaClassesTracker;
        this.f34135t = settings;
        this.f34136u = kotlinTypeChecker;
        this.f34137v = javaTypeEnhancementState;
        this.f34138w = javaModuleResolver;
        this.f34139x = syntheticPartsProvider;
    }

    @NotNull
    public final AnnotationTypeQualifierResolver getAnnotationTypeQualifierResolver() {
        return this.f34132q;
    }

    @NotNull
    public final DeserializedDescriptorResolver getDeserializedDescriptorResolver() {
        return this.f34119d;
    }

    @NotNull
    public final ErrorReporter getErrorReporter() {
        return this.f34121f;
    }

    @NotNull
    public final JavaClassFinder getFinder() {
        return this.f34117b;
    }

    @NotNull
    public final JavaClassesTracker getJavaClassesTracker() {
        return this.f34134s;
    }

    @NotNull
    public final JavaModuleAnnotationsProvider getJavaModuleResolver() {
        return this.f34138w;
    }

    @NotNull
    public final JavaPropertyInitializerEvaluator getJavaPropertyInitializerEvaluator() {
        return this.f34123h;
    }

    @NotNull
    public final JavaResolverCache getJavaResolverCache() {
        return this.f34122g;
    }

    @NotNull
    public final JavaTypeEnhancementState getJavaTypeEnhancementState() {
        return this.f34137v;
    }

    @NotNull
    public final KotlinClassFinder getKotlinClassFinder() {
        return this.f34118c;
    }

    @NotNull
    public final NewKotlinTypeChecker getKotlinTypeChecker() {
        return this.f34136u;
    }

    @NotNull
    public final LookupTracker getLookupTracker() {
        return this.f34129n;
    }

    @NotNull
    public final ModuleDescriptor getModule() {
        return this.f34130o;
    }

    @NotNull
    public final ModuleClassResolver getModuleClassResolver() {
        return this.f34126k;
    }

    @NotNull
    public final PackagePartProvider getPackagePartProvider() {
        return this.f34127l;
    }

    @NotNull
    public final ReflectionTypes getReflectionTypes() {
        return this.f34131p;
    }

    @NotNull
    public final JavaResolverSettings getSettings() {
        return this.f34135t;
    }

    @NotNull
    public final SignatureEnhancement getSignatureEnhancement() {
        return this.f34133r;
    }

    @NotNull
    public final SignaturePropagator getSignaturePropagator() {
        return this.f34120e;
    }

    @NotNull
    public final JavaSourceElementFactory getSourceElementFactory() {
        return this.f34125j;
    }

    @NotNull
    public final StorageManager getStorageManager() {
        return this.f34116a;
    }

    @NotNull
    public final SupertypeLoopChecker getSupertypeLoopChecker() {
        return this.f34128m;
    }

    @NotNull
    public final SyntheticJavaPartsProvider getSyntheticPartsProvider() {
        return this.f34139x;
    }

    @NotNull
    public final JavaResolverComponents replace(@NotNull JavaResolverCache javaResolverCache) {
        Intrinsics.checkNotNullParameter(javaResolverCache, "javaResolverCache");
        return new JavaResolverComponents(this.f34116a, this.f34117b, this.f34118c, this.f34119d, this.f34120e, this.f34121f, javaResolverCache, this.f34123h, this.f34124i, this.f34125j, this.f34126k, this.f34127l, this.f34128m, this.f34129n, this.f34130o, this.f34131p, this.f34132q, this.f34133r, this.f34134s, this.f34135t, this.f34136u, this.f34137v, this.f34138w, null, 8388608, null);
    }

    public /* synthetic */ JavaResolverComponents(StorageManager storageManager, JavaClassFinder javaClassFinder, KotlinClassFinder kotlinClassFinder, DeserializedDescriptorResolver deserializedDescriptorResolver, SignaturePropagator signaturePropagator, ErrorReporter errorReporter, JavaResolverCache javaResolverCache, JavaPropertyInitializerEvaluator javaPropertyInitializerEvaluator, SamConversionResolver samConversionResolver, JavaSourceElementFactory javaSourceElementFactory, ModuleClassResolver moduleClassResolver, PackagePartProvider packagePartProvider, SupertypeLoopChecker supertypeLoopChecker, LookupTracker lookupTracker, ModuleDescriptor moduleDescriptor, ReflectionTypes reflectionTypes, AnnotationTypeQualifierResolver annotationTypeQualifierResolver, SignatureEnhancement signatureEnhancement, JavaClassesTracker javaClassesTracker, JavaResolverSettings javaResolverSettings, NewKotlinTypeChecker newKotlinTypeChecker, JavaTypeEnhancementState javaTypeEnhancementState, JavaModuleAnnotationsProvider javaModuleAnnotationsProvider, SyntheticJavaPartsProvider syntheticJavaPartsProvider, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(storageManager, javaClassFinder, kotlinClassFinder, deserializedDescriptorResolver, signaturePropagator, errorReporter, javaResolverCache, javaPropertyInitializerEvaluator, samConversionResolver, javaSourceElementFactory, moduleClassResolver, packagePartProvider, supertypeLoopChecker, lookupTracker, moduleDescriptor, reflectionTypes, annotationTypeQualifierResolver, signatureEnhancement, javaClassesTracker, javaResolverSettings, newKotlinTypeChecker, javaTypeEnhancementState, javaModuleAnnotationsProvider, (i10 & 8388608) != 0 ? SyntheticJavaPartsProvider.Companion.getEMPTY() : syntheticJavaPartsProvider);
    }
}
