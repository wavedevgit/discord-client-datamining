package kotlin.reflect.jvm.internal.impl.types.typesApproximation;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeChecker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final TypeParameterDescriptor f36059a;

    /* renamed from: b  reason: collision with root package name */
    private final KotlinType f36060b;

    /* renamed from: c  reason: collision with root package name */
    private final KotlinType f36061c;

    public b(TypeParameterDescriptor typeParameter, KotlinType inProjection, KotlinType outProjection) {
        Intrinsics.checkNotNullParameter(typeParameter, "typeParameter");
        Intrinsics.checkNotNullParameter(inProjection, "inProjection");
        Intrinsics.checkNotNullParameter(outProjection, "outProjection");
        this.f36059a = typeParameter;
        this.f36060b = inProjection;
        this.f36061c = outProjection;
    }

    public final KotlinType a() {
        return this.f36060b;
    }

    public final KotlinType b() {
        return this.f36061c;
    }

    public final TypeParameterDescriptor c() {
        return this.f36059a;
    }

    public final boolean d() {
        return KotlinTypeChecker.DEFAULT.isSubtypeOf(this.f36060b, this.f36061c);
    }
}
