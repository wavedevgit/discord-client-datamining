package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.NotFoundClasses;
import kotlin.reflect.jvm.internal.impl.descriptors.PackageFragmentDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PackageFragmentProvider;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.deserialization.AdditionalClassPartsProvider;
import kotlin.reflect.jvm.internal.impl.descriptors.deserialization.ClassDescriptorFactory;
import kotlin.reflect.jvm.internal.impl.descriptors.deserialization.PlatformDependentDeclarationFilter;
import kotlin.reflect.jvm.internal.impl.incremental.components.LookupTracker;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.BinaryVersion;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.NameResolver;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.TypeTable;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.VersionRequirementTable;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ConstantValue;
import kotlin.reflect.jvm.internal.impl.resolve.sam.SamConversionResolver;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.EnumEntriesDeserializationSupport;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedContainerSource;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import kotlin.reflect.jvm.internal.impl.types.DefaultTypeAttributeTranslator;
import kotlin.reflect.jvm.internal.impl.types.TypeAttributeTranslator;
import kotlin.reflect.jvm.internal.impl.types.checker.NewKotlinTypeChecker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class DeserializationComponents {

    /* renamed from: a  reason: collision with root package name */
    private final StorageManager f35584a;

    /* renamed from: b  reason: collision with root package name */
    private final ModuleDescriptor f35585b;

    /* renamed from: c  reason: collision with root package name */
    private final DeserializationConfiguration f35586c;

    /* renamed from: d  reason: collision with root package name */
    private final ClassDataFinder f35587d;

    /* renamed from: e  reason: collision with root package name */
    private final AnnotationAndConstantLoader f35588e;

    /* renamed from: f  reason: collision with root package name */
    private final PackageFragmentProvider f35589f;

    /* renamed from: g  reason: collision with root package name */
    private final LocalClassifierTypeSettings f35590g;

    /* renamed from: h  reason: collision with root package name */
    private final ErrorReporter f35591h;

    /* renamed from: i  reason: collision with root package name */
    private final LookupTracker f35592i;

    /* renamed from: j  reason: collision with root package name */
    private final FlexibleTypeDeserializer f35593j;

    /* renamed from: k  reason: collision with root package name */
    private final Iterable f35594k;

    /* renamed from: l  reason: collision with root package name */
    private final NotFoundClasses f35595l;

    /* renamed from: m  reason: collision with root package name */
    private final ContractDeserializer f35596m;

    /* renamed from: n  reason: collision with root package name */
    private final AdditionalClassPartsProvider f35597n;

    /* renamed from: o  reason: collision with root package name */
    private final PlatformDependentDeclarationFilter f35598o;

    /* renamed from: p  reason: collision with root package name */
    private final ExtensionRegistryLite f35599p;

    /* renamed from: q  reason: collision with root package name */
    private final NewKotlinTypeChecker f35600q;

    /* renamed from: r  reason: collision with root package name */
    private final SamConversionResolver f35601r;

    /* renamed from: s  reason: collision with root package name */
    private final List f35602s;

    /* renamed from: t  reason: collision with root package name */
    private final EnumEntriesDeserializationSupport f35603t;

    /* renamed from: u  reason: collision with root package name */
    private final ClassDeserializer f35604u;

    public DeserializationComponents(@NotNull StorageManager storageManager, @NotNull ModuleDescriptor moduleDescriptor, @NotNull DeserializationConfiguration configuration, @NotNull ClassDataFinder classDataFinder, @NotNull AnnotationAndConstantLoader<? extends AnnotationDescriptor, ? extends ConstantValue<?>> annotationAndConstantLoader, @NotNull PackageFragmentProvider packageFragmentProvider, @NotNull LocalClassifierTypeSettings localClassifierTypeSettings, @NotNull ErrorReporter errorReporter, @NotNull LookupTracker lookupTracker, @NotNull FlexibleTypeDeserializer flexibleTypeDeserializer, @NotNull Iterable<? extends ClassDescriptorFactory> fictitiousClassDescriptorFactories, @NotNull NotFoundClasses notFoundClasses, @NotNull ContractDeserializer contractDeserializer, @NotNull AdditionalClassPartsProvider additionalClassPartsProvider, @NotNull PlatformDependentDeclarationFilter platformDependentDeclarationFilter, @NotNull ExtensionRegistryLite extensionRegistryLite, @NotNull NewKotlinTypeChecker kotlinTypeChecker, @NotNull SamConversionResolver samConversionResolver, @NotNull List<? extends TypeAttributeTranslator> typeAttributeTranslators, @NotNull EnumEntriesDeserializationSupport enumEntriesDeserializationSupport) {
        Intrinsics.checkNotNullParameter(storageManager, "storageManager");
        Intrinsics.checkNotNullParameter(moduleDescriptor, "moduleDescriptor");
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        Intrinsics.checkNotNullParameter(classDataFinder, "classDataFinder");
        Intrinsics.checkNotNullParameter(annotationAndConstantLoader, "annotationAndConstantLoader");
        Intrinsics.checkNotNullParameter(packageFragmentProvider, "packageFragmentProvider");
        Intrinsics.checkNotNullParameter(localClassifierTypeSettings, "localClassifierTypeSettings");
        Intrinsics.checkNotNullParameter(errorReporter, "errorReporter");
        Intrinsics.checkNotNullParameter(lookupTracker, "lookupTracker");
        Intrinsics.checkNotNullParameter(flexibleTypeDeserializer, "flexibleTypeDeserializer");
        Intrinsics.checkNotNullParameter(fictitiousClassDescriptorFactories, "fictitiousClassDescriptorFactories");
        Intrinsics.checkNotNullParameter(notFoundClasses, "notFoundClasses");
        Intrinsics.checkNotNullParameter(contractDeserializer, "contractDeserializer");
        Intrinsics.checkNotNullParameter(additionalClassPartsProvider, "additionalClassPartsProvider");
        Intrinsics.checkNotNullParameter(platformDependentDeclarationFilter, "platformDependentDeclarationFilter");
        Intrinsics.checkNotNullParameter(extensionRegistryLite, "extensionRegistryLite");
        Intrinsics.checkNotNullParameter(kotlinTypeChecker, "kotlinTypeChecker");
        Intrinsics.checkNotNullParameter(samConversionResolver, "samConversionResolver");
        Intrinsics.checkNotNullParameter(typeAttributeTranslators, "typeAttributeTranslators");
        Intrinsics.checkNotNullParameter(enumEntriesDeserializationSupport, "enumEntriesDeserializationSupport");
        this.f35584a = storageManager;
        this.f35585b = moduleDescriptor;
        this.f35586c = configuration;
        this.f35587d = classDataFinder;
        this.f35588e = annotationAndConstantLoader;
        this.f35589f = packageFragmentProvider;
        this.f35590g = localClassifierTypeSettings;
        this.f35591h = errorReporter;
        this.f35592i = lookupTracker;
        this.f35593j = flexibleTypeDeserializer;
        this.f35594k = fictitiousClassDescriptorFactories;
        this.f35595l = notFoundClasses;
        this.f35596m = contractDeserializer;
        this.f35597n = additionalClassPartsProvider;
        this.f35598o = platformDependentDeclarationFilter;
        this.f35599p = extensionRegistryLite;
        this.f35600q = kotlinTypeChecker;
        this.f35601r = samConversionResolver;
        this.f35602s = typeAttributeTranslators;
        this.f35603t = enumEntriesDeserializationSupport;
        this.f35604u = new ClassDeserializer(this);
    }

    @NotNull
    public final DeserializationContext createContext(@NotNull PackageFragmentDescriptor descriptor, @NotNull NameResolver nameResolver, @NotNull TypeTable typeTable, @NotNull VersionRequirementTable versionRequirementTable, @NotNull BinaryVersion metadataVersion, DeserializedContainerSource deserializedContainerSource) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
        Intrinsics.checkNotNullParameter(typeTable, "typeTable");
        Intrinsics.checkNotNullParameter(versionRequirementTable, "versionRequirementTable");
        Intrinsics.checkNotNullParameter(metadataVersion, "metadataVersion");
        return new DeserializationContext(this, nameResolver, descriptor, typeTable, versionRequirementTable, metadataVersion, deserializedContainerSource, null, CollectionsKt.l());
    }

    public final ClassDescriptor deserializeClass(@NotNull ClassId classId) {
        Intrinsics.checkNotNullParameter(classId, "classId");
        return ClassDeserializer.deserializeClass$default(this.f35604u, classId, null, 2, null);
    }

    @NotNull
    public final AdditionalClassPartsProvider getAdditionalClassPartsProvider() {
        return this.f35597n;
    }

    @NotNull
    public final AnnotationAndConstantLoader<AnnotationDescriptor, ConstantValue<?>> getAnnotationAndConstantLoader() {
        return this.f35588e;
    }

    @NotNull
    public final ClassDataFinder getClassDataFinder() {
        return this.f35587d;
    }

    @NotNull
    public final ClassDeserializer getClassDeserializer() {
        return this.f35604u;
    }

    @NotNull
    public final DeserializationConfiguration getConfiguration() {
        return this.f35586c;
    }

    @NotNull
    public final ContractDeserializer getContractDeserializer() {
        return this.f35596m;
    }

    @NotNull
    public final EnumEntriesDeserializationSupport getEnumEntriesDeserializationSupport() {
        return this.f35603t;
    }

    @NotNull
    public final ErrorReporter getErrorReporter() {
        return this.f35591h;
    }

    @NotNull
    public final ExtensionRegistryLite getExtensionRegistryLite() {
        return this.f35599p;
    }

    @NotNull
    public final Iterable<ClassDescriptorFactory> getFictitiousClassDescriptorFactories() {
        return this.f35594k;
    }

    @NotNull
    public final FlexibleTypeDeserializer getFlexibleTypeDeserializer() {
        return this.f35593j;
    }

    @NotNull
    public final NewKotlinTypeChecker getKotlinTypeChecker() {
        return this.f35600q;
    }

    @NotNull
    public final LocalClassifierTypeSettings getLocalClassifierTypeSettings() {
        return this.f35590g;
    }

    @NotNull
    public final LookupTracker getLookupTracker() {
        return this.f35592i;
    }

    @NotNull
    public final ModuleDescriptor getModuleDescriptor() {
        return this.f35585b;
    }

    @NotNull
    public final NotFoundClasses getNotFoundClasses() {
        return this.f35595l;
    }

    @NotNull
    public final PackageFragmentProvider getPackageFragmentProvider() {
        return this.f35589f;
    }

    @NotNull
    public final PlatformDependentDeclarationFilter getPlatformDependentDeclarationFilter() {
        return this.f35598o;
    }

    @NotNull
    public final StorageManager getStorageManager() {
        return this.f35584a;
    }

    @NotNull
    public final List<TypeAttributeTranslator> getTypeAttributeTranslators() {
        return this.f35602s;
    }

    public /* synthetic */ DeserializationComponents(StorageManager storageManager, ModuleDescriptor moduleDescriptor, DeserializationConfiguration deserializationConfiguration, ClassDataFinder classDataFinder, AnnotationAndConstantLoader annotationAndConstantLoader, PackageFragmentProvider packageFragmentProvider, LocalClassifierTypeSettings localClassifierTypeSettings, ErrorReporter errorReporter, LookupTracker lookupTracker, FlexibleTypeDeserializer flexibleTypeDeserializer, Iterable iterable, NotFoundClasses notFoundClasses, ContractDeserializer contractDeserializer, AdditionalClassPartsProvider additionalClassPartsProvider, PlatformDependentDeclarationFilter platformDependentDeclarationFilter, ExtensionRegistryLite extensionRegistryLite, NewKotlinTypeChecker newKotlinTypeChecker, SamConversionResolver samConversionResolver, List list, EnumEntriesDeserializationSupport enumEntriesDeserializationSupport, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(storageManager, moduleDescriptor, deserializationConfiguration, classDataFinder, annotationAndConstantLoader, packageFragmentProvider, localClassifierTypeSettings, errorReporter, lookupTracker, flexibleTypeDeserializer, iterable, notFoundClasses, contractDeserializer, (i10 & 8192) != 0 ? AdditionalClassPartsProvider.None.INSTANCE : additionalClassPartsProvider, (i10 & 16384) != 0 ? PlatformDependentDeclarationFilter.All.INSTANCE : platformDependentDeclarationFilter, extensionRegistryLite, (65536 & i10) != 0 ? NewKotlinTypeChecker.Companion.getDefault() : newKotlinTypeChecker, samConversionResolver, (262144 & i10) != 0 ? CollectionsKt.e(DefaultTypeAttributeTranslator.INSTANCE) : list, (i10 & 524288) != 0 ? EnumEntriesDeserializationSupport.Default.INSTANCE : enumEntriesDeserializationSupport);
    }
}
