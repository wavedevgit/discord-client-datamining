package kotlin.reflect.jvm.internal.impl.descriptors;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.types.TypeProjection;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class PossiblyInnerType {

    /* renamed from: a  reason: collision with root package name */
    private final ClassifierDescriptorWithTypeParameters f33600a;

    /* renamed from: b  reason: collision with root package name */
    private final List f33601b;

    /* renamed from: c  reason: collision with root package name */
    private final PossiblyInnerType f33602c;

    public PossiblyInnerType(@NotNull ClassifierDescriptorWithTypeParameters classifierDescriptor, @NotNull List<? extends TypeProjection> arguments, PossiblyInnerType possiblyInnerType) {
        Intrinsics.checkNotNullParameter(classifierDescriptor, "classifierDescriptor");
        Intrinsics.checkNotNullParameter(arguments, "arguments");
        this.f33600a = classifierDescriptor;
        this.f33601b = arguments;
        this.f33602c = possiblyInnerType;
    }

    @NotNull
    public final List<TypeProjection> getArguments() {
        return this.f33601b;
    }

    @NotNull
    public final ClassifierDescriptorWithTypeParameters getClassifierDescriptor() {
        return this.f33600a;
    }

    public final PossiblyInnerType getOuterType() {
        return this.f33602c;
    }
}
