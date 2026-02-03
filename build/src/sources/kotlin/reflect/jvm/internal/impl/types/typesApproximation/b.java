package kotlin.reflect.jvm.internal.impl.types.typesApproximation;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeChecker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final TypeParameterDescriptor f35225a;

    /* renamed from: b  reason: collision with root package name */
    private final KotlinType f35226b;

    /* renamed from: c  reason: collision with root package name */
    private final KotlinType f35227c;

    public b(TypeParameterDescriptor typeParameter, KotlinType inProjection, KotlinType outProjection) {
        Intrinsics.checkNotNullParameter(typeParameter, "typeParameter");
        Intrinsics.checkNotNullParameter(inProjection, "inProjection");
        Intrinsics.checkNotNullParameter(outProjection, "outProjection");
        this.f35225a = typeParameter;
        this.f35226b = inProjection;
        this.f35227c = outProjection;
    }

    public final KotlinType a() {
        return this.f35226b;
    }

    public final KotlinType b() {
        return this.f35227c;
    }

    public final TypeParameterDescriptor c() {
        return this.f35225a;
    }

    public final boolean d() {
        return KotlinTypeChecker.DEFAULT.isSubtypeOf(this.f35226b, this.f35227c);
    }
}
