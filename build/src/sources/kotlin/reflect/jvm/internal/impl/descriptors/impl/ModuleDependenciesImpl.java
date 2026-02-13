package kotlin.reflect.jvm.internal.impl.descriptors.impl;

import java.util.List;
import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ModuleDependenciesImpl implements ModuleDependencies {

    /* renamed from: a  reason: collision with root package name */
    private final List f33058a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f33059b;

    /* renamed from: c  reason: collision with root package name */
    private final List f33060c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f33061d;

    public ModuleDependenciesImpl(@NotNull List<ModuleDescriptorImpl> allDependencies, @NotNull Set<ModuleDescriptorImpl> modulesWhoseInternalsAreVisible, @NotNull List<ModuleDescriptorImpl> directExpectedByDependencies, @NotNull Set<ModuleDescriptorImpl> allExpectedByDependencies) {
        Intrinsics.checkNotNullParameter(allDependencies, "allDependencies");
        Intrinsics.checkNotNullParameter(modulesWhoseInternalsAreVisible, "modulesWhoseInternalsAreVisible");
        Intrinsics.checkNotNullParameter(directExpectedByDependencies, "directExpectedByDependencies");
        Intrinsics.checkNotNullParameter(allExpectedByDependencies, "allExpectedByDependencies");
        this.f33058a = allDependencies;
        this.f33059b = modulesWhoseInternalsAreVisible;
        this.f33060c = directExpectedByDependencies;
        this.f33061d = allExpectedByDependencies;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.ModuleDependencies
    @NotNull
    public List<ModuleDescriptorImpl> getAllDependencies() {
        return this.f33058a;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.ModuleDependencies
    @NotNull
    public List<ModuleDescriptorImpl> getDirectExpectedByDependencies() {
        return this.f33060c;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.ModuleDependencies
    @NotNull
    public Set<ModuleDescriptorImpl> getModulesWhoseInternalsAreVisible() {
        return this.f33059b;
    }
}
