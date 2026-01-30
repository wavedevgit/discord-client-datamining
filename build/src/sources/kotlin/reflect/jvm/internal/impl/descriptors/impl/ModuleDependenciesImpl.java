package kotlin.reflect.jvm.internal.impl.descriptors.impl;

import java.util.List;
import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ModuleDependenciesImpl implements ModuleDependencies {

    /* renamed from: a  reason: collision with root package name */
    private final List f33800a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f33801b;

    /* renamed from: c  reason: collision with root package name */
    private final List f33802c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f33803d;

    public ModuleDependenciesImpl(@NotNull List<ModuleDescriptorImpl> allDependencies, @NotNull Set<ModuleDescriptorImpl> modulesWhoseInternalsAreVisible, @NotNull List<ModuleDescriptorImpl> directExpectedByDependencies, @NotNull Set<ModuleDescriptorImpl> allExpectedByDependencies) {
        Intrinsics.checkNotNullParameter(allDependencies, "allDependencies");
        Intrinsics.checkNotNullParameter(modulesWhoseInternalsAreVisible, "modulesWhoseInternalsAreVisible");
        Intrinsics.checkNotNullParameter(directExpectedByDependencies, "directExpectedByDependencies");
        Intrinsics.checkNotNullParameter(allExpectedByDependencies, "allExpectedByDependencies");
        this.f33800a = allDependencies;
        this.f33801b = modulesWhoseInternalsAreVisible;
        this.f33802c = directExpectedByDependencies;
        this.f33803d = allExpectedByDependencies;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.ModuleDependencies
    @NotNull
    public List<ModuleDescriptorImpl> getAllDependencies() {
        return this.f33800a;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.ModuleDependencies
    @NotNull
    public List<ModuleDescriptorImpl> getDirectExpectedByDependencies() {
        return this.f33802c;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.ModuleDependencies
    @NotNull
    public Set<ModuleDescriptorImpl> getModulesWhoseInternalsAreVisible() {
        return this.f33801b;
    }
}
