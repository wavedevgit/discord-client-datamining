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
    private final StorageManager f32599a;

    /* renamed from: b  reason: collision with root package name */
    private final JavaClassFinder f32600b;

    /* renamed from: c  reason: collision with root package name */
    private final KotlinClassFinder f32601c;

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedDescriptorResolver f32602d;

    /* renamed from: e  reason: collision with root package name */
    private final SignaturePropagator f32603e;

    /* renamed from: f  reason: collision with root package name */
    private final ErrorReporter f32604f;

    /* renamed from: g  reason: collision with root package name */
    private final JavaResolverCache f32605g;

    /* renamed from: h  reason: collision with root package name */
    private final JavaPropertyInitializerEvaluator f32606h;

    /* renamed from: i  reason: collision with root package name */
    private final SamConversionResolver f32607i;

    /* renamed from: j  reason: collision with root package name */
    private final JavaSourceElementFactory f32608j;

    /* renamed from: k  reason: collision with root package name */
    private final ModuleClassResolver f32609k;

    /* renamed from: l  reason: collision with root package name */
    private final PackagePartProvider f32610l;

    /* renamed from: m  reason: collision with root package name */
    private final SupertypeLoopChecker f32611m;

    /* renamed from: n  reason: collision with root package name */
    private final LookupTracker f32612n;

    /* renamed from: o  reason: collision with root package name */
    private final ModuleDescriptor f32613o;

    /* renamed from: p  reason: collision with root package name */
    private final ReflectionTypes f32614p;

    /* renamed from: q  reason: collision with root package name */
    private final AnnotationTypeQualifierResolver f32615q;

    /* renamed from: r  reason: collision with root package name */
    private final SignatureEnhancement f32616r;

    /* renamed from: s  reason: collision with root package name */
    private final JavaClassesTracker f32617s;

    /* renamed from: t  reason: collision with root package name */
    private final JavaResolverSettings f32618t;

    /* renamed from: u  reason: collision with root package name */
    private final NewKotlinTypeChecker f32619u;

    /* renamed from: v  reason: collision with root package name */
    private final JavaTypeEnhancementState f32620v;

    /* renamed from: w  reason: collision with root package name */
    private final JavaModuleAnnotationsProvider f32621w;

    /* renamed from: x  reason: collision with root package name */
    private final SyntheticJavaPartsProvider f32622x;

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
        this.f32599a = storageManager;
        this.f32600b = finder;
        this.f32601c = kotlinClassFinder;
        this.f32602d = deserializedDescriptorResolver;
        this.f32603e = signaturePropagator;
        this.f32604f = errorReporter;
        this.f32605g = javaResolverCache;
        this.f32606h = javaPropertyInitializerEvaluator;
        this.f32607i = samConversionResolver;
        this.f32608j = sourceElementFactory;
        this.f32609k = moduleClassResolver;
        this.f32610l = packagePartProvider;
        this.f32611m = supertypeLoopChecker;
        this.f32612n = lookupTracker;
        this.f32613o = module;
        this.f32614p = reflectionTypes;
        this.f32615q = annotationTypeQualifierResolver;
        this.f32616r = signatureEnhancement;
        this.f32617s = javaClassesTracker;
        this.f32618t = settings;
        this.f32619u = kotlinTypeChecker;
        this.f32620v = javaTypeEnhancementState;
        this.f32621w = javaModuleResolver;
        this.f32622x = syntheticPartsProvider;
    }

    @NotNull
    public final AnnotationTypeQualifierResolver getAnnotationTypeQualifierResolver() {
        return this.f32615q;
    }

    @NotNull
    public final DeserializedDescriptorResolver getDeserializedDescriptorResolver() {
        return this.f32602d;
    }

    @NotNull
    public final ErrorReporter getErrorReporter() {
        return this.f32604f;
    }

    @NotNull
    public final JavaClassFinder getFinder() {
        return this.f32600b;
    }

    @NotNull
    public final JavaClassesTracker getJavaClassesTracker() {
        return this.f32617s;
    }

    @NotNull
    public final JavaModuleAnnotationsProvider getJavaModuleResolver() {
        return this.f32621w;
    }

    @NotNull
    public final JavaPropertyInitializerEvaluator getJavaPropertyInitializerEvaluator() {
        return this.f32606h;
    }

    @NotNull
    public final JavaResolverCache getJavaResolverCache() {
        return this.f32605g;
    }

    @NotNull
    public final JavaTypeEnhancementState getJavaTypeEnhancementState() {
        return this.f32620v;
    }

    @NotNull
    public final KotlinClassFinder getKotlinClassFinder() {
        return this.f32601c;
    }

    @NotNull
    public final NewKotlinTypeChecker getKotlinTypeChecker() {
        return this.f32619u;
    }

    @NotNull
    public final LookupTracker getLookupTracker() {
        return this.f32612n;
    }

    @NotNull
    public final ModuleDescriptor getModule() {
        return this.f32613o;
    }

    @NotNull
    public final ModuleClassResolver getModuleClassResolver() {
        return this.f32609k;
    }

    @NotNull
    public final PackagePartProvider getPackagePartProvider() {
        return this.f32610l;
    }

    @NotNull
    public final ReflectionTypes getReflectionTypes() {
        return this.f32614p;
    }

    @NotNull
    public final JavaResolverSettings getSettings() {
        return this.f32618t;
    }

    @NotNull
    public final SignatureEnhancement getSignatureEnhancement() {
        return this.f32616r;
    }

    @NotNull
    public final SignaturePropagator getSignaturePropagator() {
        return this.f32603e;
    }

    @NotNull
    public final JavaSourceElementFactory getSourceElementFactory() {
        return this.f32608j;
    }

    @NotNull
    public final StorageManager getStorageManager() {
        return this.f32599a;
    }

    @NotNull
    public final SupertypeLoopChecker getSupertypeLoopChecker() {
        return this.f32611m;
    }

    @NotNull
    public final SyntheticJavaPartsProvider getSyntheticPartsProvider() {
        return this.f32622x;
    }

    @NotNull
    public final JavaResolverComponents replace(@NotNull JavaResolverCache javaResolverCache) {
        Intrinsics.checkNotNullParameter(javaResolverCache, "javaResolverCache");
        return new JavaResolverComponents(this.f32599a, this.f32600b, this.f32601c, this.f32602d, this.f32603e, this.f32604f, javaResolverCache, this.f32606h, this.f32607i, this.f32608j, this.f32609k, this.f32610l, this.f32611m, this.f32612n, this.f32613o, this.f32614p, this.f32615q, this.f32616r, this.f32617s, this.f32618t, this.f32619u, this.f32620v, this.f32621w, null, 8388608, null);
    }

    public /* synthetic */ JavaResolverComponents(StorageManager storageManager, JavaClassFinder javaClassFinder, KotlinClassFinder kotlinClassFinder, DeserializedDescriptorResolver deserializedDescriptorResolver, SignaturePropagator signaturePropagator, ErrorReporter errorReporter, JavaResolverCache javaResolverCache, JavaPropertyInitializerEvaluator javaPropertyInitializerEvaluator, SamConversionResolver samConversionResolver, JavaSourceElementFactory javaSourceElementFactory, ModuleClassResolver moduleClassResolver, PackagePartProvider packagePartProvider, SupertypeLoopChecker supertypeLoopChecker, LookupTracker lookupTracker, ModuleDescriptor moduleDescriptor, ReflectionTypes reflectionTypes, AnnotationTypeQualifierResolver annotationTypeQualifierResolver, SignatureEnhancement signatureEnhancement, JavaClassesTracker javaClassesTracker, JavaResolverSettings javaResolverSettings, NewKotlinTypeChecker newKotlinTypeChecker, JavaTypeEnhancementState javaTypeEnhancementState, JavaModuleAnnotationsProvider javaModuleAnnotationsProvider, SyntheticJavaPartsProvider syntheticJavaPartsProvider, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(storageManager, javaClassFinder, kotlinClassFinder, deserializedDescriptorResolver, signaturePropagator, errorReporter, javaResolverCache, javaPropertyInitializerEvaluator, samConversionResolver, javaSourceElementFactory, moduleClassResolver, packagePartProvider, supertypeLoopChecker, lookupTracker, moduleDescriptor, reflectionTypes, annotationTypeQualifierResolver, signatureEnhancement, javaClassesTracker, javaResolverSettings, newKotlinTypeChecker, javaTypeEnhancementState, javaModuleAnnotationsProvider, (i10 & 8388608) != 0 ? SyntheticJavaPartsProvider.Companion.getEMPTY() : syntheticJavaPartsProvider);
    }
}
