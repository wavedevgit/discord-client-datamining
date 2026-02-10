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
    private final StorageManager f32821a;

    /* renamed from: b  reason: collision with root package name */
    private final JavaClassFinder f32822b;

    /* renamed from: c  reason: collision with root package name */
    private final KotlinClassFinder f32823c;

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedDescriptorResolver f32824d;

    /* renamed from: e  reason: collision with root package name */
    private final SignaturePropagator f32825e;

    /* renamed from: f  reason: collision with root package name */
    private final ErrorReporter f32826f;

    /* renamed from: g  reason: collision with root package name */
    private final JavaResolverCache f32827g;

    /* renamed from: h  reason: collision with root package name */
    private final JavaPropertyInitializerEvaluator f32828h;

    /* renamed from: i  reason: collision with root package name */
    private final SamConversionResolver f32829i;

    /* renamed from: j  reason: collision with root package name */
    private final JavaSourceElementFactory f32830j;

    /* renamed from: k  reason: collision with root package name */
    private final ModuleClassResolver f32831k;

    /* renamed from: l  reason: collision with root package name */
    private final PackagePartProvider f32832l;

    /* renamed from: m  reason: collision with root package name */
    private final SupertypeLoopChecker f32833m;

    /* renamed from: n  reason: collision with root package name */
    private final LookupTracker f32834n;

    /* renamed from: o  reason: collision with root package name */
    private final ModuleDescriptor f32835o;

    /* renamed from: p  reason: collision with root package name */
    private final ReflectionTypes f32836p;

    /* renamed from: q  reason: collision with root package name */
    private final AnnotationTypeQualifierResolver f32837q;

    /* renamed from: r  reason: collision with root package name */
    private final SignatureEnhancement f32838r;

    /* renamed from: s  reason: collision with root package name */
    private final JavaClassesTracker f32839s;

    /* renamed from: t  reason: collision with root package name */
    private final JavaResolverSettings f32840t;

    /* renamed from: u  reason: collision with root package name */
    private final NewKotlinTypeChecker f32841u;

    /* renamed from: v  reason: collision with root package name */
    private final JavaTypeEnhancementState f32842v;

    /* renamed from: w  reason: collision with root package name */
    private final JavaModuleAnnotationsProvider f32843w;

    /* renamed from: x  reason: collision with root package name */
    private final SyntheticJavaPartsProvider f32844x;

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
        this.f32821a = storageManager;
        this.f32822b = finder;
        this.f32823c = kotlinClassFinder;
        this.f32824d = deserializedDescriptorResolver;
        this.f32825e = signaturePropagator;
        this.f32826f = errorReporter;
        this.f32827g = javaResolverCache;
        this.f32828h = javaPropertyInitializerEvaluator;
        this.f32829i = samConversionResolver;
        this.f32830j = sourceElementFactory;
        this.f32831k = moduleClassResolver;
        this.f32832l = packagePartProvider;
        this.f32833m = supertypeLoopChecker;
        this.f32834n = lookupTracker;
        this.f32835o = module;
        this.f32836p = reflectionTypes;
        this.f32837q = annotationTypeQualifierResolver;
        this.f32838r = signatureEnhancement;
        this.f32839s = javaClassesTracker;
        this.f32840t = settings;
        this.f32841u = kotlinTypeChecker;
        this.f32842v = javaTypeEnhancementState;
        this.f32843w = javaModuleResolver;
        this.f32844x = syntheticPartsProvider;
    }

    @NotNull
    public final AnnotationTypeQualifierResolver getAnnotationTypeQualifierResolver() {
        return this.f32837q;
    }

    @NotNull
    public final DeserializedDescriptorResolver getDeserializedDescriptorResolver() {
        return this.f32824d;
    }

    @NotNull
    public final ErrorReporter getErrorReporter() {
        return this.f32826f;
    }

    @NotNull
    public final JavaClassFinder getFinder() {
        return this.f32822b;
    }

    @NotNull
    public final JavaClassesTracker getJavaClassesTracker() {
        return this.f32839s;
    }

    @NotNull
    public final JavaModuleAnnotationsProvider getJavaModuleResolver() {
        return this.f32843w;
    }

    @NotNull
    public final JavaPropertyInitializerEvaluator getJavaPropertyInitializerEvaluator() {
        return this.f32828h;
    }

    @NotNull
    public final JavaResolverCache getJavaResolverCache() {
        return this.f32827g;
    }

    @NotNull
    public final JavaTypeEnhancementState getJavaTypeEnhancementState() {
        return this.f32842v;
    }

    @NotNull
    public final KotlinClassFinder getKotlinClassFinder() {
        return this.f32823c;
    }

    @NotNull
    public final NewKotlinTypeChecker getKotlinTypeChecker() {
        return this.f32841u;
    }

    @NotNull
    public final LookupTracker getLookupTracker() {
        return this.f32834n;
    }

    @NotNull
    public final ModuleDescriptor getModule() {
        return this.f32835o;
    }

    @NotNull
    public final ModuleClassResolver getModuleClassResolver() {
        return this.f32831k;
    }

    @NotNull
    public final PackagePartProvider getPackagePartProvider() {
        return this.f32832l;
    }

    @NotNull
    public final ReflectionTypes getReflectionTypes() {
        return this.f32836p;
    }

    @NotNull
    public final JavaResolverSettings getSettings() {
        return this.f32840t;
    }

    @NotNull
    public final SignatureEnhancement getSignatureEnhancement() {
        return this.f32838r;
    }

    @NotNull
    public final SignaturePropagator getSignaturePropagator() {
        return this.f32825e;
    }

    @NotNull
    public final JavaSourceElementFactory getSourceElementFactory() {
        return this.f32830j;
    }

    @NotNull
    public final StorageManager getStorageManager() {
        return this.f32821a;
    }

    @NotNull
    public final SupertypeLoopChecker getSupertypeLoopChecker() {
        return this.f32833m;
    }

    @NotNull
    public final SyntheticJavaPartsProvider getSyntheticPartsProvider() {
        return this.f32844x;
    }

    @NotNull
    public final JavaResolverComponents replace(@NotNull JavaResolverCache javaResolverCache) {
        Intrinsics.checkNotNullParameter(javaResolverCache, "javaResolverCache");
        return new JavaResolverComponents(this.f32821a, this.f32822b, this.f32823c, this.f32824d, this.f32825e, this.f32826f, javaResolverCache, this.f32828h, this.f32829i, this.f32830j, this.f32831k, this.f32832l, this.f32833m, this.f32834n, this.f32835o, this.f32836p, this.f32837q, this.f32838r, this.f32839s, this.f32840t, this.f32841u, this.f32842v, this.f32843w, null, 8388608, null);
    }

    public /* synthetic */ JavaResolverComponents(StorageManager storageManager, JavaClassFinder javaClassFinder, KotlinClassFinder kotlinClassFinder, DeserializedDescriptorResolver deserializedDescriptorResolver, SignaturePropagator signaturePropagator, ErrorReporter errorReporter, JavaResolverCache javaResolverCache, JavaPropertyInitializerEvaluator javaPropertyInitializerEvaluator, SamConversionResolver samConversionResolver, JavaSourceElementFactory javaSourceElementFactory, ModuleClassResolver moduleClassResolver, PackagePartProvider packagePartProvider, SupertypeLoopChecker supertypeLoopChecker, LookupTracker lookupTracker, ModuleDescriptor moduleDescriptor, ReflectionTypes reflectionTypes, AnnotationTypeQualifierResolver annotationTypeQualifierResolver, SignatureEnhancement signatureEnhancement, JavaClassesTracker javaClassesTracker, JavaResolverSettings javaResolverSettings, NewKotlinTypeChecker newKotlinTypeChecker, JavaTypeEnhancementState javaTypeEnhancementState, JavaModuleAnnotationsProvider javaModuleAnnotationsProvider, SyntheticJavaPartsProvider syntheticJavaPartsProvider, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(storageManager, javaClassFinder, kotlinClassFinder, deserializedDescriptorResolver, signaturePropagator, errorReporter, javaResolverCache, javaPropertyInitializerEvaluator, samConversionResolver, javaSourceElementFactory, moduleClassResolver, packagePartProvider, supertypeLoopChecker, lookupTracker, moduleDescriptor, reflectionTypes, annotationTypeQualifierResolver, signatureEnhancement, javaClassesTracker, javaResolverSettings, newKotlinTypeChecker, javaTypeEnhancementState, javaModuleAnnotationsProvider, (i10 & 8388608) != 0 ? SyntheticJavaPartsProvider.Companion.getEMPTY() : syntheticJavaPartsProvider);
    }
}
