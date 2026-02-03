package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
import kotlin.reflect.jvm.internal.impl.types.model.KotlinTypeMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class AbbreviatedType extends DelegatingSimpleType {

    /* renamed from: e  reason: collision with root package name */
    private final SimpleType f34995e;

    /* renamed from: i  reason: collision with root package name */
    private final SimpleType f34996i;

    public AbbreviatedType(@NotNull SimpleType delegate, @NotNull SimpleType abbreviation) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        Intrinsics.checkNotNullParameter(abbreviation, "abbreviation");
        this.f34995e = delegate;
        this.f34996i = abbreviation;
    }

    @NotNull
    public final SimpleType getAbbreviation() {
        return this.f34996i;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.DelegatingSimpleType
    protected SimpleType getDelegate() {
        return this.f34995e;
    }

    @NotNull
    public final SimpleType getExpandedType() {
        return getDelegate();
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.UnwrappedType
    @NotNull
    public SimpleType replaceAttributes(@NotNull TypeAttributes newAttributes) {
        Intrinsics.checkNotNullParameter(newAttributes, "newAttributes");
        return new AbbreviatedType(getDelegate().replaceAttributes(newAttributes), this.f34996i);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.DelegatingSimpleType
    @NotNull
    public AbbreviatedType replaceDelegate(@NotNull SimpleType delegate) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        return new AbbreviatedType(delegate, this.f34996i);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.UnwrappedType
    @NotNull
    public AbbreviatedType makeNullableAsSpecified(boolean z10) {
        return new AbbreviatedType(getDelegate().makeNullableAsSpecified(z10), this.f34996i.makeNullableAsSpecified(z10));
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.DelegatingSimpleType, kotlin.reflect.jvm.internal.impl.types.UnwrappedType, kotlin.reflect.jvm.internal.impl.types.KotlinType
    @NotNull
    public AbbreviatedType refine(@NotNull KotlinTypeRefiner kotlinTypeRefiner) {
        Intrinsics.checkNotNullParameter(kotlinTypeRefiner, "kotlinTypeRefiner");
        KotlinType refineType = kotlinTypeRefiner.refineType((KotlinTypeMarker) getDelegate());
        Intrinsics.checkNotNull(refineType, "null cannot be cast to non-null type org.jetbrains.kotlin.types.SimpleType");
        KotlinType refineType2 = kotlinTypeRefiner.refineType((KotlinTypeMarker) this.f34996i);
        Intrinsics.checkNotNull(refineType2, "null cannot be cast to non-null type org.jetbrains.kotlin.types.SimpleType");
        return new AbbreviatedType((SimpleType) refineType, (SimpleType) refineType2);
    }
}
