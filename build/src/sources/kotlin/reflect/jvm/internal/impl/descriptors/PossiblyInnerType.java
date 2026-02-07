package kotlin.reflect.jvm.internal.impl.descriptors;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.types.TypeProjection;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class PossiblyInnerType {

    /* renamed from: a  reason: collision with root package name */
    private final ClassifierDescriptorWithTypeParameters f32374a;

    /* renamed from: b  reason: collision with root package name */
    private final List f32375b;

    /* renamed from: c  reason: collision with root package name */
    private final PossiblyInnerType f32376c;

    public PossiblyInnerType(@NotNull ClassifierDescriptorWithTypeParameters classifierDescriptor, @NotNull List<? extends TypeProjection> arguments, PossiblyInnerType possiblyInnerType) {
        Intrinsics.checkNotNullParameter(classifierDescriptor, "classifierDescriptor");
        Intrinsics.checkNotNullParameter(arguments, "arguments");
        this.f32374a = classifierDescriptor;
        this.f32375b = arguments;
        this.f32376c = possiblyInnerType;
    }

    @NotNull
    public final List<TypeProjection> getArguments() {
        return this.f32375b;
    }

    @NotNull
    public final ClassifierDescriptorWithTypeParameters getClassifierDescriptor() {
        return this.f32374a;
    }

    public final PossiblyInnerType getOuterType() {
        return this.f32376c;
    }
}
