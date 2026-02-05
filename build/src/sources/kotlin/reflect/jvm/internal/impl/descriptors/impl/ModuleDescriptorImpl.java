package kotlin.reflect.jvm.internal.impl.descriptors.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.Lazy;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.collections.x0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorVisitor;
import kotlin.reflect.jvm.internal.impl.descriptors.InvalidModuleExceptionKt;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleCapability;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PackageFragmentProvider;
import kotlin.reflect.jvm.internal.impl.descriptors.PackageViewDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.PackageViewDescriptorFactory;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.platform.TargetPlatform;
import kotlin.reflect.jvm.internal.impl.storage.MemoizedFunctionToNotNull;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import or.l;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nModuleDescriptorImpl.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ModuleDescriptorImpl.kt\norg/jetbrains/kotlin/descriptors/impl/ModuleDescriptorImpl\n+ 2 coreLib.kt\norg/jetbrains/kotlin/utils/CoreLibKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 4 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,180:1\n19#2:181\n19#2:185\n19#2:186\n19#2:188\n774#3:182\n865#3,2:183\n1869#3,2:189\n1563#3:191\n1634#3,3:192\n1#4:187\n*S KotlinDebug\n*F\n+ 1 ModuleDescriptorImpl.kt\norg/jetbrains/kotlin/descriptors/impl/ModuleDescriptorImpl\n*L\n72#1:181\n75#1:185\n78#1:186\n91#1:188\n72#1:182\n72#1:183,2\n95#1:189,2\n101#1:191\n101#1:192,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ModuleDescriptorImpl extends DeclarationDescriptorImpl implements ModuleDescriptor {

    /* renamed from: i  reason: collision with root package name */
    private final StorageManager f32494i;

    /* renamed from: o  reason: collision with root package name */
    private final KotlinBuiltIns f32495o;

    /* renamed from: p  reason: collision with root package name */
    private final TargetPlatform f32496p;

    /* renamed from: q  reason: collision with root package name */
    private final Name f32497q;

    /* renamed from: r  reason: collision with root package name */
    private final Map f32498r;

    /* renamed from: s  reason: collision with root package name */
    private final PackageViewDescriptorFactory f32499s;

    /* renamed from: t  reason: collision with root package name */
    private ModuleDependencies f32500t;

    /* renamed from: u  reason: collision with root package name */
    private PackageFragmentProvider f32501u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f32502v;

    /* renamed from: w  reason: collision with root package name */
    private final MemoizedFunctionToNotNull f32503w;

    /* renamed from: x  reason: collision with root package name */
    private final Lazy f32504x;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ModuleDescriptorImpl(@NotNull Name moduleName, @NotNull StorageManager storageManager, @NotNull KotlinBuiltIns builtIns, TargetPlatform targetPlatform) {
        this(moduleName, storageManager, builtIns, targetPlatform, null, null, 48, null);
        Intrinsics.checkNotNullParameter(moduleName, "moduleName");
        Intrinsics.checkNotNullParameter(storageManager, "storageManager");
        Intrinsics.checkNotNullParameter(builtIns, "builtIns");
    }

    private final String d() {
        String name = getName().toString();
        Intrinsics.checkNotNullExpressionValue(name, "toString(...)");
        return name;
    }

    private final CompositePackageFragmentProvider e() {
        return (CompositePackageFragmentProvider) this.f32504x.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CompositePackageFragmentProvider f(ModuleDescriptorImpl moduleDescriptorImpl) {
        ModuleDependencies moduleDependencies = moduleDescriptorImpl.f32500t;
        if (moduleDependencies != null) {
            List<ModuleDescriptorImpl> allDependencies = moduleDependencies.getAllDependencies();
            moduleDescriptorImpl.assertValid();
            allDependencies.contains(moduleDescriptorImpl);
            List<ModuleDescriptorImpl> list = allDependencies;
            for (ModuleDescriptorImpl moduleDescriptorImpl2 : list) {
                moduleDescriptorImpl2.isInitialized();
            }
            ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
            for (ModuleDescriptorImpl moduleDescriptorImpl3 : list) {
                PackageFragmentProvider packageFragmentProvider = moduleDescriptorImpl3.f32501u;
                Intrinsics.checkNotNull(packageFragmentProvider);
                arrayList.add(packageFragmentProvider);
            }
            return new CompositePackageFragmentProvider(arrayList, "CompositeProvider@ModuleDescriptor for " + moduleDescriptorImpl.getName());
        }
        throw new AssertionError("Dependencies of module " + moduleDescriptorImpl.d() + " were not set before querying module content");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final PackageViewDescriptor g(ModuleDescriptorImpl moduleDescriptorImpl, FqName fqName) {
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        return moduleDescriptorImpl.f32499s.compute(moduleDescriptorImpl, fqName, moduleDescriptorImpl.f32494i);
    }

    private final boolean isInitialized() {
        if (this.f32501u != null) {
            return true;
        }
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor
    public <R, D> R accept(@NotNull DeclarationDescriptorVisitor<R, D> declarationDescriptorVisitor, D d10) {
        return (R) ModuleDescriptor.DefaultImpls.accept(this, declarationDescriptorVisitor, d10);
    }

    public void assertValid() {
        if (!isValid()) {
            InvalidModuleExceptionKt.moduleInvalidated(this);
        }
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor
    @NotNull
    public KotlinBuiltIns getBuiltIns() {
        return this.f32495o;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor
    public <T> T getCapability(@NotNull ModuleCapability<T> capability) {
        Intrinsics.checkNotNullParameter(capability, "capability");
        T t10 = (T) this.f32498r.get(capability);
        if (t10 == null) {
            return null;
        }
        return t10;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor
    public DeclarationDescriptor getContainingDeclaration() {
        return ModuleDescriptor.DefaultImpls.getContainingDeclaration(this);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor
    @NotNull
    public List<ModuleDescriptor> getExpectedByModules() {
        ModuleDependencies moduleDependencies = this.f32500t;
        if (moduleDependencies != null) {
            return moduleDependencies.getDirectExpectedByDependencies();
        }
        throw new AssertionError("Dependencies of module " + d() + " were not set");
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor
    @NotNull
    public PackageViewDescriptor getPackage(@NotNull FqName fqName) {
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        assertValid();
        return (PackageViewDescriptor) this.f32503w.invoke(fqName);
    }

    @NotNull
    public final PackageFragmentProvider getPackageFragmentProvider() {
        assertValid();
        return e();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor
    @NotNull
    public Collection<FqName> getSubPackagesOf(@NotNull FqName fqName, @NotNull Function1<? super Name, Boolean> nameFilter) {
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        Intrinsics.checkNotNullParameter(nameFilter, "nameFilter");
        assertValid();
        return getPackageFragmentProvider().getSubPackagesOf(fqName, nameFilter);
    }

    public final void initialize(@NotNull PackageFragmentProvider providerForModuleContent) {
        Intrinsics.checkNotNullParameter(providerForModuleContent, "providerForModuleContent");
        isInitialized();
        this.f32501u = providerForModuleContent;
    }

    public boolean isValid() {
        return this.f32502v;
    }

    public final void setDependencies(@NotNull ModuleDependencies dependencies) {
        Intrinsics.checkNotNullParameter(dependencies, "dependencies");
        this.f32500t = dependencies;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor
    public boolean shouldSeeInternalsOf(@NotNull ModuleDescriptor targetModule) {
        Intrinsics.checkNotNullParameter(targetModule, "targetModule");
        if (Intrinsics.areEqual(this, targetModule)) {
            return true;
        }
        ModuleDependencies moduleDependencies = this.f32500t;
        Intrinsics.checkNotNull(moduleDependencies);
        if (CollectionsKt.d0(moduleDependencies.getModulesWhoseInternalsAreVisible(), targetModule) || getExpectedByModules().contains(targetModule) || targetModule.getExpectedByModules().contains(this)) {
            return true;
        }
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.DeclarationDescriptorImpl
    @NotNull
    public String toString() {
        String str;
        StringBuilder sb2 = new StringBuilder();
        sb2.append(super.toString());
        if (!isValid()) {
            sb2.append(" !isValid");
        }
        sb2.append(" packageFragmentProvider: ");
        PackageFragmentProvider packageFragmentProvider = this.f32501u;
        if (packageFragmentProvider != null) {
            str = packageFragmentProvider.getClass().getSimpleName();
        } else {
            str = null;
        }
        sb2.append(str);
        return sb2.toString();
    }

    public /* synthetic */ ModuleDescriptorImpl(Name name, StorageManager storageManager, KotlinBuiltIns kotlinBuiltIns, TargetPlatform targetPlatform, Map map, Name name2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(name, storageManager, kotlinBuiltIns, (i10 & 8) != 0 ? null : targetPlatform, (i10 & 16) != 0 ? o0.i() : map, (i10 & 32) != 0 ? null : name2);
    }

    public final void setDependencies(@NotNull ModuleDescriptorImpl... descriptors) {
        Intrinsics.checkNotNullParameter(descriptors, "descriptors");
        setDependencies(kotlin.collections.i.R0(descriptors));
    }

    public final void setDependencies(@NotNull List<ModuleDescriptorImpl> descriptors) {
        Intrinsics.checkNotNullParameter(descriptors, "descriptors");
        setDependencies(descriptors, x0.d());
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ModuleDescriptorImpl(@NotNull Name moduleName, @NotNull StorageManager storageManager, @NotNull KotlinBuiltIns builtIns, TargetPlatform targetPlatform, @NotNull Map<ModuleCapability<?>, ? extends Object> capabilities, Name name) {
        super(Annotations.Companion.getEMPTY(), moduleName);
        Intrinsics.checkNotNullParameter(moduleName, "moduleName");
        Intrinsics.checkNotNullParameter(storageManager, "storageManager");
        Intrinsics.checkNotNullParameter(builtIns, "builtIns");
        Intrinsics.checkNotNullParameter(capabilities, "capabilities");
        this.f32494i = storageManager;
        this.f32495o = builtIns;
        this.f32496p = targetPlatform;
        this.f32497q = name;
        if (moduleName.isSpecial()) {
            this.f32498r = capabilities;
            PackageViewDescriptorFactory packageViewDescriptorFactory = (PackageViewDescriptorFactory) getCapability(PackageViewDescriptorFactory.Companion.getCAPABILITY());
            this.f32499s = packageViewDescriptorFactory == null ? PackageViewDescriptorFactory.Default.INSTANCE : packageViewDescriptorFactory;
            this.f32502v = true;
            this.f32503w = storageManager.createMemoizedFunction(new g(this));
            this.f32504x = l.a(new h(this));
            return;
        }
        throw new IllegalArgumentException("Module name must be special: " + moduleName);
    }

    public final void setDependencies(@NotNull List<ModuleDescriptorImpl> descriptors, @NotNull Set<ModuleDescriptorImpl> friends) {
        Intrinsics.checkNotNullParameter(descriptors, "descriptors");
        Intrinsics.checkNotNullParameter(friends, "friends");
        setDependencies(new ModuleDependenciesImpl(descriptors, friends, CollectionsKt.l(), x0.d()));
    }
}
