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
    private final StorageManager f32842a;

    /* renamed from: b  reason: collision with root package name */
    private final JavaClassFinder f32843b;

    /* renamed from: c  reason: collision with root package name */
    private final KotlinClassFinder f32844c;

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedDescriptorResolver f32845d;

    /* renamed from: e  reason: collision with root package name */
    private final SignaturePropagator f32846e;

    /* renamed from: f  reason: collision with root package name */
    private final ErrorReporter f32847f;

    /* renamed from: g  reason: collision with root package name */
    private final JavaResolverCache f32848g;

    /* renamed from: h  reason: collision with root package name */
    private final JavaPropertyInitializerEvaluator f32849h;

    /* renamed from: i  reason: collision with root package name */
    private final SamConversionResolver f32850i;

    /* renamed from: j  reason: collision with root package name */
    private final JavaSourceElementFactory f32851j;

    /* renamed from: k  reason: collision with root package name */
    private final ModuleClassResolver f32852k;

    /* renamed from: l  reason: collision with root package name */
    private final PackagePartProvider f32853l;

    /* renamed from: m  reason: collision with root package name */
    private final SupertypeLoopChecker f32854m;

    /* renamed from: n  reason: collision with root package name */
    private final LookupTracker f32855n;

    /* renamed from: o  reason: collision with root package name */
    private final ModuleDescriptor f32856o;

    /* renamed from: p  reason: collision with root package name */
    private final ReflectionTypes f32857p;

    /* renamed from: q  reason: collision with root package name */
    private final AnnotationTypeQualifierResolver f32858q;

    /* renamed from: r  reason: collision with root package name */
    private final SignatureEnhancement f32859r;

    /* renamed from: s  reason: collision with root package name */
    private final JavaClassesTracker f32860s;

    /* renamed from: t  reason: collision with root package name */
    private final JavaResolverSettings f32861t;

    /* renamed from: u  reason: collision with root package name */
    private final NewKotlinTypeChecker f32862u;

    /* renamed from: v  reason: collision with root package name */
    private final JavaTypeEnhancementState f32863v;

    /* renamed from: w  reason: collision with root package name */
    private final JavaModuleAnnotationsProvider f32864w;

    /* renamed from: x  reason: collision with root package name */
    private final SyntheticJavaPartsProvider f32865x;

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
        this.f32842a = storageManager;
        this.f32843b = finder;
        this.f32844c = kotlinClassFinder;
        this.f32845d = deserializedDescriptorResolver;
        this.f32846e = signaturePropagator;
        this.f32847f = errorReporter;
        this.f32848g = javaResolverCache;
        this.f32849h = javaPropertyInitializerEvaluator;
        this.f32850i = samConversionResolver;
        this.f32851j = sourceElementFactory;
        this.f32852k = moduleClassResolver;
        this.f32853l = packagePartProvider;
        this.f32854m = supertypeLoopChecker;
        this.f32855n = lookupTracker;
        this.f32856o = module;
        this.f32857p = reflectionTypes;
        this.f32858q = annotationTypeQualifierResolver;
        this.f32859r = signatureEnhancement;
        this.f32860s = javaClassesTracker;
        this.f32861t = settings;
        this.f32862u = kotlinTypeChecker;
        this.f32863v = javaTypeEnhancementState;
        this.f32864w = javaModuleResolver;
        this.f32865x = syntheticPartsProvider;
    }

    @NotNull
    public final AnnotationTypeQualifierResolver getAnnotationTypeQualifierResolver() {
        return this.f32858q;
    }

    @NotNull
    public final DeserializedDescriptorResolver getDeserializedDescriptorResolver() {
        return this.f32845d;
    }

    @NotNull
    public final ErrorReporter getErrorReporter() {
        return this.f32847f;
    }

    @NotNull
    public final JavaClassFinder getFinder() {
        return this.f32843b;
    }

    @NotNull
    public final JavaClassesTracker getJavaClassesTracker() {
        return this.f32860s;
    }

    @NotNull
    public final JavaModuleAnnotationsProvider getJavaModuleResolver() {
        return this.f32864w;
    }

    @NotNull
    public final JavaPropertyInitializerEvaluator getJavaPropertyInitializerEvaluator() {
        return this.f32849h;
    }

    @NotNull
    public final JavaResolverCache getJavaResolverCache() {
        return this.f32848g;
    }

    @NotNull
    public final JavaTypeEnhancementState getJavaTypeEnhancementState() {
        return this.f32863v;
    }

    @NotNull
    public final KotlinClassFinder getKotlinClassFinder() {
        return this.f32844c;
    }

    @NotNull
    public final NewKotlinTypeChecker getKotlinTypeChecker() {
        return this.f32862u;
    }

    @NotNull
    public final LookupTracker getLookupTracker() {
        return this.f32855n;
    }

    @NotNull
    public final ModuleDescriptor getModule() {
        return this.f32856o;
    }

    @NotNull
    public final ModuleClassResolver getModuleClassResolver() {
        return this.f32852k;
    }

    @NotNull
    public final PackagePartProvider getPackagePartProvider() {
        return this.f32853l;
    }

    @NotNull
    public final ReflectionTypes getReflectionTypes() {
        return this.f32857p;
    }

    @NotNull
    public final JavaResolverSettings getSettings() {
        return this.f32861t;
    }

    @NotNull
    public final SignatureEnhancement getSignatureEnhancement() {
        return this.f32859r;
    }

    @NotNull
    public final SignaturePropagator getSignaturePropagator() {
        return this.f32846e;
    }

    @NotNull
    public final JavaSourceElementFactory getSourceElementFactory() {
        return this.f32851j;
    }

    @NotNull
    public final StorageManager getStorageManager() {
        return this.f32842a;
    }

    @NotNull
    public final SupertypeLoopChecker getSupertypeLoopChecker() {
        return this.f32854m;
    }

    @NotNull
    public final SyntheticJavaPartsProvider getSyntheticPartsProvider() {
        return this.f32865x;
    }

    @NotNull
    public final JavaResolverComponents replace(@NotNull JavaResolverCache javaResolverCache) {
        Intrinsics.checkNotNullParameter(javaResolverCache, "javaResolverCache");
        return new JavaResolverComponents(this.f32842a, this.f32843b, this.f32844c, this.f32845d, this.f32846e, this.f32847f, javaResolverCache, this.f32849h, this.f32850i, this.f32851j, this.f32852k, this.f32853l, this.f32854m, this.f32855n, this.f32856o, this.f32857p, this.f32858q, this.f32859r, this.f32860s, this.f32861t, this.f32862u, this.f32863v, this.f32864w, null, 8388608, null);
    }

    public /* synthetic */ JavaResolverComponents(StorageManager storageManager, JavaClassFinder javaClassFinder, KotlinClassFinder kotlinClassFinder, DeserializedDescriptorResolver deserializedDescriptorResolver, SignaturePropagator signaturePropagator, ErrorReporter errorReporter, JavaResolverCache javaResolverCache, JavaPropertyInitializerEvaluator javaPropertyInitializerEvaluator, SamConversionResolver samConversionResolver, JavaSourceElementFactory javaSourceElementFactory, ModuleClassResolver moduleClassResolver, PackagePartProvider packagePartProvider, SupertypeLoopChecker supertypeLoopChecker, LookupTracker lookupTracker, ModuleDescriptor moduleDescriptor, ReflectionTypes reflectionTypes, AnnotationTypeQualifierResolver annotationTypeQualifierResolver, SignatureEnhancement signatureEnhancement, JavaClassesTracker javaClassesTracker, JavaResolverSettings javaResolverSettings, NewKotlinTypeChecker newKotlinTypeChecker, JavaTypeEnhancementState javaTypeEnhancementState, JavaModuleAnnotationsProvider javaModuleAnnotationsProvider, SyntheticJavaPartsProvider syntheticJavaPartsProvider, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(storageManager, javaClassFinder, kotlinClassFinder, deserializedDescriptorResolver, signaturePropagator, errorReporter, javaResolverCache, javaPropertyInitializerEvaluator, samConversionResolver, javaSourceElementFactory, moduleClassResolver, packagePartProvider, supertypeLoopChecker, lookupTracker, moduleDescriptor, reflectionTypes, annotationTypeQualifierResolver, signatureEnhancement, javaClassesTracker, javaResolverSettings, newKotlinTypeChecker, javaTypeEnhancementState, javaModuleAnnotationsProvider, (i10 & 8388608) != 0 ? SyntheticJavaPartsProvider.Companion.getEMPTY() : syntheticJavaPartsProvider);
    }
}
