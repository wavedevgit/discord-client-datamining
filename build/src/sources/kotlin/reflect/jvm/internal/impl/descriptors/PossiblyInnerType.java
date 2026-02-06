package kotlin.reflect.jvm.internal.impl.descriptors;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.types.TypeProjection;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class PossiblyInnerType {

    /* renamed from: a  reason: collision with root package name */
    private final ClassifierDescriptorWithTypeParameters f32326a;

    /* renamed from: b  reason: collision with root package name */
    private final List f32327b;

    /* renamed from: c  reason: collision with root package name */
    private final PossiblyInnerType f32328c;

    public PossiblyInnerType(@NotNull ClassifierDescriptorWithTypeParameters classifierDescriptor, @NotNull List<? extends TypeProjection> arguments, PossiblyInnerType possiblyInnerType) {
        Intrinsics.checkNotNullParameter(classifierDescriptor, "classifierDescriptor");
        Intrinsics.checkNotNullParameter(arguments, "arguments");
        this.f32326a = classifierDescriptor;
        this.f32327b = arguments;
        this.f32328c = possiblyInnerType;
    }

    @NotNull
    public final List<TypeProjection> getArguments() {
        return this.f32327b;
    }

    @NotNull
    public final ClassifierDescriptorWithTypeParameters getClassifierDescriptor() {
        return this.f32326a;
    }

    public final PossiblyInnerType getOuterType() {
        return this.f32328c;
    }
}
