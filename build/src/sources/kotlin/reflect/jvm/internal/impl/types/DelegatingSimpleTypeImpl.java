package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class DelegatingSimpleTypeImpl extends DelegatingSimpleType {

    /* renamed from: e  reason: collision with root package name */
    private final SimpleType f35851e;

    public DelegatingSimpleTypeImpl(@NotNull SimpleType delegate) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f35851e = delegate;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.DelegatingSimpleType
    protected SimpleType getDelegate() {
        return this.f35851e;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.UnwrappedType
    @NotNull
    public SimpleType makeNullableAsSpecified(boolean z10) {
        return z10 == isMarkedNullable() ? this : getDelegate().makeNullableAsSpecified(z10).replaceAttributes(getAttributes());
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.UnwrappedType
    @NotNull
    public SimpleType replaceAttributes(@NotNull TypeAttributes newAttributes) {
        Intrinsics.checkNotNullParameter(newAttributes, "newAttributes");
        return newAttributes != getAttributes() ? new t(this, newAttributes) : this;
    }
}
