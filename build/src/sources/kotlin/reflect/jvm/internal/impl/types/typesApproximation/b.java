package kotlin.reflect.jvm.internal.impl.types.typesApproximation;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeChecker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final TypeParameterDescriptor f36043a;

    /* renamed from: b  reason: collision with root package name */
    private final KotlinType f36044b;

    /* renamed from: c  reason: collision with root package name */
    private final KotlinType f36045c;

    public b(TypeParameterDescriptor typeParameter, KotlinType inProjection, KotlinType outProjection) {
        Intrinsics.checkNotNullParameter(typeParameter, "typeParameter");
        Intrinsics.checkNotNullParameter(inProjection, "inProjection");
        Intrinsics.checkNotNullParameter(outProjection, "outProjection");
        this.f36043a = typeParameter;
        this.f36044b = inProjection;
        this.f36045c = outProjection;
    }

    public final KotlinType a() {
        return this.f36044b;
    }

    public final KotlinType b() {
        return this.f36045c;
    }

    public final TypeParameterDescriptor c() {
        return this.f36043a;
    }

    public final boolean d() {
        return KotlinTypeChecker.DEFAULT.isSubtypeOf(this.f36044b, this.f36045c);
    }
}
