package kotlin.reflect.jvm.internal.impl.types.typesApproximation;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeChecker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final TypeParameterDescriptor f34769a;

    /* renamed from: b  reason: collision with root package name */
    private final KotlinType f34770b;

    /* renamed from: c  reason: collision with root package name */
    private final KotlinType f34771c;

    public b(TypeParameterDescriptor typeParameter, KotlinType inProjection, KotlinType outProjection) {
        Intrinsics.checkNotNullParameter(typeParameter, "typeParameter");
        Intrinsics.checkNotNullParameter(inProjection, "inProjection");
        Intrinsics.checkNotNullParameter(outProjection, "outProjection");
        this.f34769a = typeParameter;
        this.f34770b = inProjection;
        this.f34771c = outProjection;
    }

    public final KotlinType a() {
        return this.f34770b;
    }

    public final KotlinType b() {
        return this.f34771c;
    }

    public final TypeParameterDescriptor c() {
        return this.f34769a;
    }

    public final boolean d() {
        return KotlinTypeChecker.DEFAULT.isSubtypeOf(this.f34770b, this.f34771c);
    }
}
