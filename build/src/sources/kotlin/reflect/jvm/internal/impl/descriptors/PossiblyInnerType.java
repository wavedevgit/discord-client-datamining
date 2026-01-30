package kotlin.reflect.jvm.internal.impl.descriptors;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.types.TypeProjection;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class PossiblyInnerType {

    /* renamed from: a  reason: collision with root package name */
    private final ClassifierDescriptorWithTypeParameters f33616a;

    /* renamed from: b  reason: collision with root package name */
    private final List f33617b;

    /* renamed from: c  reason: collision with root package name */
    private final PossiblyInnerType f33618c;

    public PossiblyInnerType(@NotNull ClassifierDescriptorWithTypeParameters classifierDescriptor, @NotNull List<? extends TypeProjection> arguments, PossiblyInnerType possiblyInnerType) {
        Intrinsics.checkNotNullParameter(classifierDescriptor, "classifierDescriptor");
        Intrinsics.checkNotNullParameter(arguments, "arguments");
        this.f33616a = classifierDescriptor;
        this.f33617b = arguments;
        this.f33618c = possiblyInnerType;
    }

    @NotNull
    public final List<TypeProjection> getArguments() {
        return this.f33617b;
    }

    @NotNull
    public final ClassifierDescriptorWithTypeParameters getClassifierDescriptor() {
        return this.f33616a;
    }

    public final PossiblyInnerType getOuterType() {
        return this.f33618c;
    }
}
