package kotlin.reflect.jvm.internal.impl.types;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.renderer.DescriptorRenderer;
import kotlin.reflect.jvm.internal.impl.renderer.DescriptorRendererOptions;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.types.model.FlexibleTypeMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class FlexibleType extends UnwrappedType implements FlexibleTypeMarker {

    /* renamed from: e  reason: collision with root package name */
    private final SimpleType f34548e;

    /* renamed from: i  reason: collision with root package name */
    private final SimpleType f34549i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public FlexibleType(@NotNull SimpleType lowerBound, @NotNull SimpleType upperBound) {
        super(null);
        Intrinsics.checkNotNullParameter(lowerBound, "lowerBound");
        Intrinsics.checkNotNullParameter(upperBound, "upperBound");
        this.f34548e = lowerBound;
        this.f34549i = upperBound;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.KotlinType
    @NotNull
    public List<TypeProjection> getArguments() {
        return getDelegate().getArguments();
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.KotlinType
    @NotNull
    public TypeAttributes getAttributes() {
        return getDelegate().getAttributes();
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.KotlinType
    @NotNull
    public TypeConstructor getConstructor() {
        return getDelegate().getConstructor();
    }

    @NotNull
    public abstract SimpleType getDelegate();

    @NotNull
    public final SimpleType getLowerBound() {
        return this.f34548e;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.KotlinType
    @NotNull
    public MemberScope getMemberScope() {
        return getDelegate().getMemberScope();
    }

    @NotNull
    public final SimpleType getUpperBound() {
        return this.f34549i;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.KotlinType
    public boolean isMarkedNullable() {
        return getDelegate().isMarkedNullable();
    }

    @NotNull
    public abstract String render(@NotNull DescriptorRenderer descriptorRenderer, @NotNull DescriptorRendererOptions descriptorRendererOptions);

    @NotNull
    public String toString() {
        return DescriptorRenderer.DEBUG_TEXT.renderType(this);
    }
}
