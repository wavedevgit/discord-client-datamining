package kotlin.reflect.jvm.internal.impl.descriptors;

import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ModuleCapability<T> {

    /* renamed from: a  reason: collision with root package name */
    private final String f33379a;

    public ModuleCapability(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f33379a = name;
    }

    @NotNull
    public String toString() {
        return this.f33379a;
    }
}
