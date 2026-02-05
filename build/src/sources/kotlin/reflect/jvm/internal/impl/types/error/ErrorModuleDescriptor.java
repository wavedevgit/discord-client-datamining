package kotlin.reflect.jvm.internal.impl.types.error;

import java.util.Collection;
import java.util.List;
import java.util.Set;
import kotlin.Lazy;
import kotlin.collections.CollectionsKt;
import kotlin.collections.x0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.builtins.DefaultBuiltIns;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorVisitor;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleCapability;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PackageViewDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.Name;
import or.l;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ErrorModuleDescriptor implements ModuleDescriptor {
    @NotNull
    public static final ErrorModuleDescriptor INSTANCE = new ErrorModuleDescriptor();

    /* renamed from: d  reason: collision with root package name */
    private static final Name f34678d;

    /* renamed from: e  reason: collision with root package name */
    private static final List f34679e;

    /* renamed from: i  reason: collision with root package name */
    private static final List f34680i;

    /* renamed from: o  reason: collision with root package name */
    private static final Set f34681o;

    /* renamed from: p  reason: collision with root package name */
    private static final Lazy f34682p;

    static {
        Name special = Name.special(ErrorEntity.ERROR_MODULE.getDebugText());
        Intrinsics.checkNotNullExpressionValue(special, "special(...)");
        f34678d = special;
        f34679e = CollectionsKt.l();
        f34680i = CollectionsKt.l();
        f34681o = x0.d();
        f34682p = l.a(a.f34709d);
    }

    private ErrorModuleDescriptor() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final DefaultBuiltIns b() {
        return DefaultBuiltIns.Companion.getInstance();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor
    public <R, D> R accept(@NotNull DeclarationDescriptorVisitor<R, D> visitor, D d10) {
        Intrinsics.checkNotNullParameter(visitor, "visitor");
        return null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotated
    @NotNull
    public Annotations getAnnotations() {
        return Annotations.Companion.getEMPTY();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor
    @NotNull
    public KotlinBuiltIns getBuiltIns() {
        return (KotlinBuiltIns) f34682p.getValue();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor
    public <T> T getCapability(@NotNull ModuleCapability<T> capability) {
        Intrinsics.checkNotNullParameter(capability, "capability");
        return null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor
    public DeclarationDescriptor getContainingDeclaration() {
        return null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor
    @NotNull
    public List<ModuleDescriptor> getExpectedByModules() {
        return f34680i;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.Named
    @NotNull
    public Name getName() {
        return getStableName();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor
    @NotNull
    public DeclarationDescriptor getOriginal() {
        return this;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor
    @NotNull
    public PackageViewDescriptor getPackage(@NotNull FqName fqName) {
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        throw new IllegalStateException("Should not be called!");
    }

    @NotNull
    public Name getStableName() {
        return f34678d;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor
    @NotNull
    public Collection<FqName> getSubPackagesOf(@NotNull FqName fqName, @NotNull Function1<? super Name, Boolean> nameFilter) {
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        Intrinsics.checkNotNullParameter(nameFilter, "nameFilter");
        return CollectionsKt.l();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor
    public boolean shouldSeeInternalsOf(@NotNull ModuleDescriptor targetModule) {
        Intrinsics.checkNotNullParameter(targetModule, "targetModule");
        return false;
    }
}
