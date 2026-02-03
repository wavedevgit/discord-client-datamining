package kotlin.reflect.jvm.internal.impl.types;

import kotlin.Lazy;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class StarProjectionImpl extends TypeProjectionBase {

    /* renamed from: a  reason: collision with root package name */
    private final TypeParameterDescriptor f35047a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f35048b;

    public StarProjectionImpl(@NotNull TypeParameterDescriptor typeParameter) {
        Intrinsics.checkNotNullParameter(typeParameter, "typeParameter");
        this.f35047a = typeParameter;
        this.f35048b = lr.l.b(lr.o.f37120e, new u(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final KotlinType a(StarProjectionImpl starProjectionImpl) {
        return StarProjectionImplKt.starProjectionType(starProjectionImpl.f35047a);
    }

    private final KotlinType c() {
        return (KotlinType) this.f35048b.getValue();
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeProjection
    @NotNull
    public Variance getProjectionKind() {
        return Variance.OUT_VARIANCE;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeProjection
    @NotNull
    public KotlinType getType() {
        return c();
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeProjection
    public boolean isStarProjection() {
        return true;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeProjection
    @NotNull
    public TypeProjection refine(@NotNull KotlinTypeRefiner kotlinTypeRefiner) {
        Intrinsics.checkNotNullParameter(kotlinTypeRefiner, "kotlinTypeRefiner");
        return this;
    }
}
