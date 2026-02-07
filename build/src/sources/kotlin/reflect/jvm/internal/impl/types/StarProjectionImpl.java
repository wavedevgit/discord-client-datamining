package kotlin.reflect.jvm.internal.impl.types;

import kotlin.Lazy;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class StarProjectionImpl extends TypeProjectionBase {

    /* renamed from: a  reason: collision with root package name */
    private final TypeParameterDescriptor f34639a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f34640b;

    public StarProjectionImpl(@NotNull TypeParameterDescriptor typeParameter) {
        Intrinsics.checkNotNullParameter(typeParameter, "typeParameter");
        this.f34639a = typeParameter;
        this.f34640b = qr.l.b(qr.o.f48092e, new u(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final KotlinType a(StarProjectionImpl starProjectionImpl) {
        return StarProjectionImplKt.starProjectionType(starProjectionImpl.f34639a);
    }

    private final KotlinType c() {
        return (KotlinType) this.f34640b.getValue();
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
