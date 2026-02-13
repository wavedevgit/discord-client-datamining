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
    private final StorageManager f34842a;

    /* renamed from: b  reason: collision with root package name */
    private final ModuleDescriptor f34843b;

    /* renamed from: c  reason: collision with root package name */
    private final DeserializationConfiguration f34844c;

    /* renamed from: d  reason: collision with root package name */
    private final ClassDataFinder f34845d;

    /* renamed from: e  reason: collision with root package name */
    private final AnnotationAndConstantLoader f34846e;

    /* renamed from: f  reason: collision with root package name */
    private final PackageFragmentProvider f34847f;

    /* renamed from: g  reason: collision with root package name */
    private final LocalClassifierTypeSettings f34848g;

    /* renamed from: h  reason: collision with root package name */
    private final ErrorReporter f34849h;

    /* renamed from: i  reason: collision with root package name */
    private final LookupTracker f34850i;

    /* renamed from: j  reason: collision with root package name */
    private final FlexibleTypeDeserializer f34851j;

    /* renamed from: k  reason: collision with root package name */
    private final Iterable f34852k;

    /* renamed from: l  reason: collision with root package name */
    private final NotFoundClasses f34853l;

    /* renamed from: m  reason: collision with root package name */
    private final ContractDeserializer f34854m;

    /* renamed from: n  reason: collision with root package name */
    private final AdditionalClassPartsProvider f34855n;

    /* renamed from: o  reason: collision with root package name */
    private final PlatformDependentDeclarationFilter f34856o;

    /* renamed from: p  reason: collision with root package name */
    private final ExtensionRegistryLite f34857p;

    /* renamed from: q  reason: collision with root package name */
    private final NewKotlinTypeChecker f34858q;

    /* renamed from: r  reason: collision with root package name */
    private final SamConversionResolver f34859r;

    /* renamed from: s  reason: collision with root package name */
    private final List f34860s;

    /* renamed from: t  reason: collision with root package name */
    private final EnumEntriesDeserializationSupport f34861t;

    /* renamed from: u  reason: collision with root package name */
    private final ClassDeserializer f34862u;

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
        this.f34842a = storageManager;
        this.f34843b = moduleDescriptor;
        this.f34844c = configuration;
        this.f34845d = classDataFinder;
        this.f34846e = annotationAndConstantLoader;
        this.f34847f = packageFragmentProvider;
        this.f34848g = localClassifierTypeSettings;
        this.f34849h = errorReporter;
        this.f34850i = lookupTracker;
        this.f34851j = flexibleTypeDeserializer;
        this.f34852k = fictitiousClassDescriptorFactories;
        this.f34853l = notFoundClasses;
        this.f34854m = contractDeserializer;
        this.f34855n = additionalClassPartsProvider;
        this.f34856o = platformDependentDeclarationFilter;
        this.f34857p = extensionRegistryLite;
        this.f34858q = kotlinTypeChecker;
        this.f34859r = samConversionResolver;
        this.f34860s = typeAttributeTranslators;
        this.f34861t = enumEntriesDeserializationSupport;
        this.f34862u = new ClassDeserializer(this);
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
        return ClassDeserializer.deserializeClass$default(this.f34862u, classId, null, 2, null);
    }

    @NotNull
    public final AdditionalClassPartsProvider getAdditionalClassPartsProvider() {
        return this.f34855n;
    }

    @NotNull
    public final AnnotationAndConstantLoader<AnnotationDescriptor, ConstantValue<?>> getAnnotationAndConstantLoader() {
        return this.f34846e;
    }

    @NotNull
    public final ClassDataFinder getClassDataFinder() {
        return this.f34845d;
    }

    @NotNull
    public final ClassDeserializer getClassDeserializer() {
        return this.f34862u;
    }

    @NotNull
    public final DeserializationConfiguration getConfiguration() {
        return this.f34844c;
    }

    @NotNull
    public final ContractDeserializer getContractDeserializer() {
        return this.f34854m;
    }

    @NotNull
    public final EnumEntriesDeserializationSupport getEnumEntriesDeserializationSupport() {
        return this.f34861t;
    }

    @NotNull
    public final ErrorReporter getErrorReporter() {
        return this.f34849h;
    }

    @NotNull
    public final ExtensionRegistryLite getExtensionRegistryLite() {
        return this.f34857p;
    }

    @NotNull
    public final Iterable<ClassDescriptorFactory> getFictitiousClassDescriptorFactories() {
        return this.f34852k;
    }

    @NotNull
    public final FlexibleTypeDeserializer getFlexibleTypeDeserializer() {
        return this.f34851j;
    }

    @NotNull
    public final NewKotlinTypeChecker getKotlinTypeChecker() {
        return this.f34858q;
    }

    @NotNull
    public final LocalClassifierTypeSettings getLocalClassifierTypeSettings() {
        return this.f34848g;
    }

    @NotNull
    public final LookupTracker getLookupTracker() {
        return this.f34850i;
    }

    @NotNull
    public final ModuleDescriptor getModuleDescriptor() {
        return this.f34843b;
    }

    @NotNull
    public final NotFoundClasses getNotFoundClasses() {
        return this.f34853l;
    }

    @NotNull
    public final PackageFragmentProvider getPackageFragmentProvider() {
        return this.f34847f;
    }

    @NotNull
    public final PlatformDependentDeclarationFilter getPlatformDependentDeclarationFilter() {
        return this.f34856o;
    }

    @NotNull
    public final StorageManager getStorageManager() {
        return this.f34842a;
    }

    @NotNull
    public final List<TypeAttributeTranslator> getTypeAttributeTranslators() {
        return this.f34860s;
    }

    public /* synthetic */ DeserializationComponents(StorageManager storageManager, ModuleDescriptor moduleDescriptor, DeserializationConfiguration deserializationConfiguration, ClassDataFinder classDataFinder, AnnotationAndConstantLoader annotationAndConstantLoader, PackageFragmentProvider packageFragmentProvider, LocalClassifierTypeSettings localClassifierTypeSettings, ErrorReporter errorReporter, LookupTracker lookupTracker, FlexibleTypeDeserializer flexibleTypeDeserializer, Iterable iterable, NotFoundClasses notFoundClasses, ContractDeserializer contractDeserializer, AdditionalClassPartsProvider additionalClassPartsProvider, PlatformDependentDeclarationFilter platformDependentDeclarationFilter, ExtensionRegistryLite extensionRegistryLite, NewKotlinTypeChecker newKotlinTypeChecker, SamConversionResolver samConversionResolver, List list, EnumEntriesDeserializationSupport enumEntriesDeserializationSupport, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(storageManager, moduleDescriptor, deserializationConfiguration, classDataFinder, annotationAndConstantLoader, packageFragmentProvider, localClassifierTypeSettings, errorReporter, lookupTracker, flexibleTypeDeserializer, iterable, notFoundClasses, contractDeserializer, (i10 & 8192) != 0 ? AdditionalClassPartsProvider.None.INSTANCE : additionalClassPartsProvider, (i10 & 16384) != 0 ? PlatformDependentDeclarationFilter.All.INSTANCE : platformDependentDeclarationFilter, extensionRegistryLite, (65536 & i10) != 0 ? NewKotlinTypeChecker.Companion.getDefault() : newKotlinTypeChecker, samConversionResolver, (262144 & i10) != 0 ? CollectionsKt.e(DefaultTypeAttributeTranslator.INSTANCE) : list, (i10 & 524288) != 0 ? EnumEntriesDeserializationSupport.Default.INSTANCE : enumEntriesDeserializationSupport);
    }
}
