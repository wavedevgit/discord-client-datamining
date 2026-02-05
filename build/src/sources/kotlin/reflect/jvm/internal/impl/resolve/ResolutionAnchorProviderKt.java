package kotlin.reflect.jvm.internal.impl.resolve;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleCapability;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ResolutionAnchorProviderKt {

    /* renamed from: a  reason: collision with root package name */
    private static final ModuleCapability f34100a = new ModuleCapability("ResolutionAnchorProvider");

    public static final ModuleDescriptor getResolutionAnchorIfAny(@NotNull ModuleDescriptor moduleDescriptor) {
        Intrinsics.checkNotNullParameter(moduleDescriptor, "<this>");
        ResolutionAnchorProvider resolutionAnchorProvider = (ResolutionAnchorProvider) moduleDescriptor.getCapability(f34100a);
        if (resolutionAnchorProvider != null) {
            return resolutionAnchorProvider.getResolutionAnchor(moduleDescriptor);
        }
        return null;
    }
}
