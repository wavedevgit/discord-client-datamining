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
    private final StorageManager f34132a;

    /* renamed from: b  reason: collision with root package name */
    private final JavaClassFinder f34133b;

    /* renamed from: c  reason: collision with root package name */
    private final KotlinClassFinder f34134c;

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedDescriptorResolver f34135d;

    /* renamed from: e  reason: collision with root package name */
    private final SignaturePropagator f34136e;

    /* renamed from: f  reason: collision with root package name */
    private final ErrorReporter f34137f;

    /* renamed from: g  reason: collision with root package name */
    private final JavaResolverCache f34138g;

    /* renamed from: h  reason: collision with root package name */
    private final JavaPropertyInitializerEvaluator f34139h;

    /* renamed from: i  reason: collision with root package name */
    private final SamConversionResolver f34140i;

    /* renamed from: j  reason: collision with root package name */
    private final JavaSourceElementFactory f34141j;

    /* renamed from: k  reason: collision with root package name */
    private final ModuleClassResolver f34142k;

    /* renamed from: l  reason: collision with root package name */
    private final PackagePartProvider f34143l;

    /* renamed from: m  reason: collision with root package name */
    private final SupertypeLoopChecker f34144m;

    /* renamed from: n  reason: collision with root package name */
    private final LookupTracker f34145n;

    /* renamed from: o  reason: collision with root package name */
    private final ModuleDescriptor f34146o;

    /* renamed from: p  reason: collision with root package name */
    private final ReflectionTypes f34147p;

    /* renamed from: q  reason: collision with root package name */
    private final AnnotationTypeQualifierResolver f34148q;

    /* renamed from: r  reason: collision with root package name */
    private final SignatureEnhancement f34149r;

    /* renamed from: s  reason: collision with root package name */
    private final JavaClassesTracker f34150s;

    /* renamed from: t  reason: collision with root package name */
    private final JavaResolverSettings f34151t;

    /* renamed from: u  reason: collision with root package name */
    private final NewKotlinTypeChecker f34152u;

    /* renamed from: v  reason: collision with root package name */
    private final JavaTypeEnhancementState f34153v;

    /* renamed from: w  reason: collision with root package name */
    private final JavaModuleAnnotationsProvider f34154w;

    /* renamed from: x  reason: collision with root package name */
    private final SyntheticJavaPartsProvider f34155x;

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
        this.f34132a = storageManager;
        this.f34133b = finder;
        this.f34134c = kotlinClassFinder;
        this.f34135d = deserializedDescriptorResolver;
        this.f34136e = signaturePropagator;
        this.f34137f = errorReporter;
        this.f34138g = javaResolverCache;
        this.f34139h = javaPropertyInitializerEvaluator;
        this.f34140i = samConversionResolver;
        this.f34141j = sourceElementFactory;
        this.f34142k = moduleClassResolver;
        this.f34143l = packagePartProvider;
        this.f34144m = supertypeLoopChecker;
        this.f34145n = lookupTracker;
        this.f34146o = module;
        this.f34147p = reflectionTypes;
        this.f34148q = annotationTypeQualifierResolver;
        this.f34149r = signatureEnhancement;
        this.f34150s = javaClassesTracker;
        this.f34151t = settings;
        this.f34152u = kotlinTypeChecker;
        this.f34153v = javaTypeEnhancementState;
        this.f34154w = javaModuleResolver;
        this.f34155x = syntheticPartsProvider;
    }

    @NotNull
    public final AnnotationTypeQualifierResolver getAnnotationTypeQualifierResolver() {
        return this.f34148q;
    }

    @NotNull
    public final DeserializedDescriptorResolver getDeserializedDescriptorResolver() {
        return this.f34135d;
    }

    @NotNull
    public final ErrorReporter getErrorReporter() {
        return this.f34137f;
    }

    @NotNull
    public final JavaClassFinder getFinder() {
        return this.f34133b;
    }

    @NotNull
    public final JavaClassesTracker getJavaClassesTracker() {
        return this.f34150s;
    }

    @NotNull
    public final JavaModuleAnnotationsProvider getJavaModuleResolver() {
        return this.f34154w;
    }

    @NotNull
    public final JavaPropertyInitializerEvaluator getJavaPropertyInitializerEvaluator() {
        return this.f34139h;
    }

    @NotNull
    public final JavaResolverCache getJavaResolverCache() {
        return this.f34138g;
    }

    @NotNull
    public final JavaTypeEnhancementState getJavaTypeEnhancementState() {
        return this.f34153v;
    }

    @NotNull
    public final KotlinClassFinder getKotlinClassFinder() {
        return this.f34134c;
    }

    @NotNull
    public final NewKotlinTypeChecker getKotlinTypeChecker() {
        return this.f34152u;
    }

    @NotNull
    public final LookupTracker getLookupTracker() {
        return this.f34145n;
    }

    @NotNull
    public final ModuleDescriptor getModule() {
        return this.f34146o;
    }

    @NotNull
    public final ModuleClassResolver getModuleClassResolver() {
        return this.f34142k;
    }

    @NotNull
    public final PackagePartProvider getPackagePartProvider() {
        return this.f34143l;
    }

    @NotNull
    public final ReflectionTypes getReflectionTypes() {
        return this.f34147p;
    }

    @NotNull
    public final JavaResolverSettings getSettings() {
        return this.f34151t;
    }

    @NotNull
    public final SignatureEnhancement getSignatureEnhancement() {
        return this.f34149r;
    }

    @NotNull
    public final SignaturePropagator getSignaturePropagator() {
        return this.f34136e;
    }

    @NotNull
    public final JavaSourceElementFactory getSourceElementFactory() {
        return this.f34141j;
    }

    @NotNull
    public final StorageManager getStorageManager() {
        return this.f34132a;
    }

    @NotNull
    public final SupertypeLoopChecker getSupertypeLoopChecker() {
        return this.f34144m;
    }

    @NotNull
    public final SyntheticJavaPartsProvider getSyntheticPartsProvider() {
        return this.f34155x;
    }

    @NotNull
    public final JavaResolverComponents replace(@NotNull JavaResolverCache javaResolverCache) {
        Intrinsics.checkNotNullParameter(javaResolverCache, "javaResolverCache");
        return new JavaResolverComponents(this.f34132a, this.f34133b, this.f34134c, this.f34135d, this.f34136e, this.f34137f, javaResolverCache, this.f34139h, this.f34140i, this.f34141j, this.f34142k, this.f34143l, this.f34144m, this.f34145n, this.f34146o, this.f34147p, this.f34148q, this.f34149r, this.f34150s, this.f34151t, this.f34152u, this.f34153v, this.f34154w, null, 8388608, null);
    }

    public /* synthetic */ JavaResolverComponents(StorageManager storageManager, JavaClassFinder javaClassFinder, KotlinClassFinder kotlinClassFinder, DeserializedDescriptorResolver deserializedDescriptorResolver, SignaturePropagator signaturePropagator, ErrorReporter errorReporter, JavaResolverCache javaResolverCache, JavaPropertyInitializerEvaluator javaPropertyInitializerEvaluator, SamConversionResolver samConversionResolver, JavaSourceElementFactory javaSourceElementFactory, ModuleClassResolver moduleClassResolver, PackagePartProvider packagePartProvider, SupertypeLoopChecker supertypeLoopChecker, LookupTracker lookupTracker, ModuleDescriptor moduleDescriptor, ReflectionTypes reflectionTypes, AnnotationTypeQualifierResolver annotationTypeQualifierResolver, SignatureEnhancement signatureEnhancement, JavaClassesTracker javaClassesTracker, JavaResolverSettings javaResolverSettings, NewKotlinTypeChecker newKotlinTypeChecker, JavaTypeEnhancementState javaTypeEnhancementState, JavaModuleAnnotationsProvider javaModuleAnnotationsProvider, SyntheticJavaPartsProvider syntheticJavaPartsProvider, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(storageManager, javaClassFinder, kotlinClassFinder, deserializedDescriptorResolver, signaturePropagator, errorReporter, javaResolverCache, javaPropertyInitializerEvaluator, samConversionResolver, javaSourceElementFactory, moduleClassResolver, packagePartProvider, supertypeLoopChecker, lookupTracker, moduleDescriptor, reflectionTypes, annotationTypeQualifierResolver, signatureEnhancement, javaClassesTracker, javaResolverSettings, newKotlinTypeChecker, javaTypeEnhancementState, javaModuleAnnotationsProvider, (i10 & 8388608) != 0 ? SyntheticJavaPartsProvider.Companion.getEMPTY() : syntheticJavaPartsProvider);
    }
}
