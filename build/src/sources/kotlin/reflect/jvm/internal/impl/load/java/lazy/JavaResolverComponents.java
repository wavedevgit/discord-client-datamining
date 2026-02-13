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
    private final StorageManager f33390a;

    /* renamed from: b  reason: collision with root package name */
    private final JavaClassFinder f33391b;

    /* renamed from: c  reason: collision with root package name */
    private final KotlinClassFinder f33392c;

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedDescriptorResolver f33393d;

    /* renamed from: e  reason: collision with root package name */
    private final SignaturePropagator f33394e;

    /* renamed from: f  reason: collision with root package name */
    private final ErrorReporter f33395f;

    /* renamed from: g  reason: collision with root package name */
    private final JavaResolverCache f33396g;

    /* renamed from: h  reason: collision with root package name */
    private final JavaPropertyInitializerEvaluator f33397h;

    /* renamed from: i  reason: collision with root package name */
    private final SamConversionResolver f33398i;

    /* renamed from: j  reason: collision with root package name */
    private final JavaSourceElementFactory f33399j;

    /* renamed from: k  reason: collision with root package name */
    private final ModuleClassResolver f33400k;

    /* renamed from: l  reason: collision with root package name */
    private final PackagePartProvider f33401l;

    /* renamed from: m  reason: collision with root package name */
    private final SupertypeLoopChecker f33402m;

    /* renamed from: n  reason: collision with root package name */
    private final LookupTracker f33403n;

    /* renamed from: o  reason: collision with root package name */
    private final ModuleDescriptor f33404o;

    /* renamed from: p  reason: collision with root package name */
    private final ReflectionTypes f33405p;

    /* renamed from: q  reason: collision with root package name */
    private final AnnotationTypeQualifierResolver f33406q;

    /* renamed from: r  reason: collision with root package name */
    private final SignatureEnhancement f33407r;

    /* renamed from: s  reason: collision with root package name */
    private final JavaClassesTracker f33408s;

    /* renamed from: t  reason: collision with root package name */
    private final JavaResolverSettings f33409t;

    /* renamed from: u  reason: collision with root package name */
    private final NewKotlinTypeChecker f33410u;

    /* renamed from: v  reason: collision with root package name */
    private final JavaTypeEnhancementState f33411v;

    /* renamed from: w  reason: collision with root package name */
    private final JavaModuleAnnotationsProvider f33412w;

    /* renamed from: x  reason: collision with root package name */
    private final SyntheticJavaPartsProvider f33413x;

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
        this.f33390a = storageManager;
        this.f33391b = finder;
        this.f33392c = kotlinClassFinder;
        this.f33393d = deserializedDescriptorResolver;
        this.f33394e = signaturePropagator;
        this.f33395f = errorReporter;
        this.f33396g = javaResolverCache;
        this.f33397h = javaPropertyInitializerEvaluator;
        this.f33398i = samConversionResolver;
        this.f33399j = sourceElementFactory;
        this.f33400k = moduleClassResolver;
        this.f33401l = packagePartProvider;
        this.f33402m = supertypeLoopChecker;
        this.f33403n = lookupTracker;
        this.f33404o = module;
        this.f33405p = reflectionTypes;
        this.f33406q = annotationTypeQualifierResolver;
        this.f33407r = signatureEnhancement;
        this.f33408s = javaClassesTracker;
        this.f33409t = settings;
        this.f33410u = kotlinTypeChecker;
        this.f33411v = javaTypeEnhancementState;
        this.f33412w = javaModuleResolver;
        this.f33413x = syntheticPartsProvider;
    }

    @NotNull
    public final AnnotationTypeQualifierResolver getAnnotationTypeQualifierResolver() {
        return this.f33406q;
    }

    @NotNull
    public final DeserializedDescriptorResolver getDeserializedDescriptorResolver() {
        return this.f33393d;
    }

    @NotNull
    public final ErrorReporter getErrorReporter() {
        return this.f33395f;
    }

    @NotNull
    public final JavaClassFinder getFinder() {
        return this.f33391b;
    }

    @NotNull
    public final JavaClassesTracker getJavaClassesTracker() {
        return this.f33408s;
    }

    @NotNull
    public final JavaModuleAnnotationsProvider getJavaModuleResolver() {
        return this.f33412w;
    }

    @NotNull
    public final JavaPropertyInitializerEvaluator getJavaPropertyInitializerEvaluator() {
        return this.f33397h;
    }

    @NotNull
    public final JavaResolverCache getJavaResolverCache() {
        return this.f33396g;
    }

    @NotNull
    public final JavaTypeEnhancementState getJavaTypeEnhancementState() {
        return this.f33411v;
    }

    @NotNull
    public final KotlinClassFinder getKotlinClassFinder() {
        return this.f33392c;
    }

    @NotNull
    public final NewKotlinTypeChecker getKotlinTypeChecker() {
        return this.f33410u;
    }

    @NotNull
    public final LookupTracker getLookupTracker() {
        return this.f33403n;
    }

    @NotNull
    public final ModuleDescriptor getModule() {
        return this.f33404o;
    }

    @NotNull
    public final ModuleClassResolver getModuleClassResolver() {
        return this.f33400k;
    }

    @NotNull
    public final PackagePartProvider getPackagePartProvider() {
        return this.f33401l;
    }

    @NotNull
    public final ReflectionTypes getReflectionTypes() {
        return this.f33405p;
    }

    @NotNull
    public final JavaResolverSettings getSettings() {
        return this.f33409t;
    }

    @NotNull
    public final SignatureEnhancement getSignatureEnhancement() {
        return this.f33407r;
    }

    @NotNull
    public final SignaturePropagator getSignaturePropagator() {
        return this.f33394e;
    }

    @NotNull
    public final JavaSourceElementFactory getSourceElementFactory() {
        return this.f33399j;
    }

    @NotNull
    public final StorageManager getStorageManager() {
        return this.f33390a;
    }

    @NotNull
    public final SupertypeLoopChecker getSupertypeLoopChecker() {
        return this.f33402m;
    }

    @NotNull
    public final SyntheticJavaPartsProvider getSyntheticPartsProvider() {
        return this.f33413x;
    }

    @NotNull
    public final JavaResolverComponents replace(@NotNull JavaResolverCache javaResolverCache) {
        Intrinsics.checkNotNullParameter(javaResolverCache, "javaResolverCache");
        return new JavaResolverComponents(this.f33390a, this.f33391b, this.f33392c, this.f33393d, this.f33394e, this.f33395f, javaResolverCache, this.f33397h, this.f33398i, this.f33399j, this.f33400k, this.f33401l, this.f33402m, this.f33403n, this.f33404o, this.f33405p, this.f33406q, this.f33407r, this.f33408s, this.f33409t, this.f33410u, this.f33411v, this.f33412w, null, 8388608, null);
    }

    public /* synthetic */ JavaResolverComponents(StorageManager storageManager, JavaClassFinder javaClassFinder, KotlinClassFinder kotlinClassFinder, DeserializedDescriptorResolver deserializedDescriptorResolver, SignaturePropagator signaturePropagator, ErrorReporter errorReporter, JavaResolverCache javaResolverCache, JavaPropertyInitializerEvaluator javaPropertyInitializerEvaluator, SamConversionResolver samConversionResolver, JavaSourceElementFactory javaSourceElementFactory, ModuleClassResolver moduleClassResolver, PackagePartProvider packagePartProvider, SupertypeLoopChecker supertypeLoopChecker, LookupTracker lookupTracker, ModuleDescriptor moduleDescriptor, ReflectionTypes reflectionTypes, AnnotationTypeQualifierResolver annotationTypeQualifierResolver, SignatureEnhancement signatureEnhancement, JavaClassesTracker javaClassesTracker, JavaResolverSettings javaResolverSettings, NewKotlinTypeChecker newKotlinTypeChecker, JavaTypeEnhancementState javaTypeEnhancementState, JavaModuleAnnotationsProvider javaModuleAnnotationsProvider, SyntheticJavaPartsProvider syntheticJavaPartsProvider, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(storageManager, javaClassFinder, kotlinClassFinder, deserializedDescriptorResolver, signaturePropagator, errorReporter, javaResolverCache, javaPropertyInitializerEvaluator, samConversionResolver, javaSourceElementFactory, moduleClassResolver, packagePartProvider, supertypeLoopChecker, lookupTracker, moduleDescriptor, reflectionTypes, annotationTypeQualifierResolver, signatureEnhancement, javaClassesTracker, javaResolverSettings, newKotlinTypeChecker, javaTypeEnhancementState, javaModuleAnnotationsProvider, (i10 & 8388608) != 0 ? SyntheticJavaPartsProvider.Companion.getEMPTY() : syntheticJavaPartsProvider);
    }
}
