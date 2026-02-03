package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.Collection;
import java.util.List;
import kotlin.collections.x0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorWithSource;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PackageFragmentDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PackageFragmentProviderOptimized;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.storage.MemoizedFunctionToNullable;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import kotlin.reflect.jvm.internal.impl.utils.CollectionsKt;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class AbstractDeserializedPackageFragmentProvider implements PackageFragmentProviderOptimized {

    /* renamed from: a  reason: collision with root package name */
    private final StorageManager f35340a;

    /* renamed from: b  reason: collision with root package name */
    private final KotlinMetadataFinder f35341b;

    /* renamed from: c  reason: collision with root package name */
    private final ModuleDescriptor f35342c;

    /* renamed from: d  reason: collision with root package name */
    protected DeserializationComponents f35343d;

    /* renamed from: e  reason: collision with root package name */
    private final MemoizedFunctionToNullable f35344e;

    public AbstractDeserializedPackageFragmentProvider(@NotNull StorageManager storageManager, @NotNull KotlinMetadataFinder finder, @NotNull ModuleDescriptor moduleDescriptor) {
        Intrinsics.checkNotNullParameter(storageManager, "storageManager");
        Intrinsics.checkNotNullParameter(finder, "finder");
        Intrinsics.checkNotNullParameter(moduleDescriptor, "moduleDescriptor");
        this.f35340a = storageManager;
        this.f35341b = finder;
        this.f35342c = moduleDescriptor;
        this.f35344e = storageManager.createMemoizedFunctionWithNullableValues(new a(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final PackageFragmentDescriptor c(AbstractDeserializedPackageFragmentProvider abstractDeserializedPackageFragmentProvider, FqName fqName) {
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        DeserializedPackageFragment b10 = abstractDeserializedPackageFragmentProvider.b(fqName);
        if (b10 != null) {
            b10.initialize(abstractDeserializedPackageFragmentProvider.d());
            return b10;
        }
        return null;
    }

    protected abstract DeserializedPackageFragment b(FqName fqName);

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.PackageFragmentProviderOptimized
    public void collectPackageFragments(@NotNull FqName fqName, @NotNull Collection<PackageFragmentDescriptor> packageFragments) {
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        Intrinsics.checkNotNullParameter(packageFragments, "packageFragments");
        CollectionsKt.addIfNotNull(packageFragments, this.f35344e.invoke(fqName));
    }

    protected final DeserializationComponents d() {
        DeserializationComponents deserializationComponents = this.f35343d;
        if (deserializationComponents != null) {
            return deserializationComponents;
        }
        Intrinsics.throwUninitializedPropertyAccessException("components");
        return null;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final KotlinMetadataFinder e() {
        return this.f35341b;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final ModuleDescriptor f() {
        return this.f35342c;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final StorageManager g() {
        return this.f35340a;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.PackageFragmentProvider
    @jr.c
    @NotNull
    public List<PackageFragmentDescriptor> getPackageFragments(@NotNull FqName fqName) {
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        return kotlin.collections.CollectionsKt.p(this.f35344e.invoke(fqName));
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.PackageFragmentProvider
    @NotNull
    public Collection<FqName> getSubPackagesOf(@NotNull FqName fqName, @NotNull Function1<? super Name, Boolean> nameFilter) {
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        Intrinsics.checkNotNullParameter(nameFilter, "nameFilter");
        return x0.d();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void h(DeserializationComponents deserializationComponents) {
        Intrinsics.checkNotNullParameter(deserializationComponents, "<set-?>");
        this.f35343d = deserializationComponents;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.PackageFragmentProviderOptimized
    public boolean isEmpty(@NotNull FqName fqName) {
        DeclarationDescriptorWithSource b10;
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        if (this.f35344e.isComputed(fqName)) {
            b10 = (PackageFragmentDescriptor) this.f35344e.invoke(fqName);
        } else {
            b10 = b(fqName);
        }
        if (b10 == null) {
            return true;
        }
        return false;
    }
}
