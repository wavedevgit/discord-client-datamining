package kotlin.reflect.jvm.internal.impl.types.typesApproximation;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeChecker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final TypeParameterDescriptor f35317a;

    /* renamed from: b  reason: collision with root package name */
    private final KotlinType f35318b;

    /* renamed from: c  reason: collision with root package name */
    private final KotlinType f35319c;

    public b(TypeParameterDescriptor typeParameter, KotlinType inProjection, KotlinType outProjection) {
        Intrinsics.checkNotNullParameter(typeParameter, "typeParameter");
        Intrinsics.checkNotNullParameter(inProjection, "inProjection");
        Intrinsics.checkNotNullParameter(outProjection, "outProjection");
        this.f35317a = typeParameter;
        this.f35318b = inProjection;
        this.f35319c = outProjection;
    }

    public final KotlinType a() {
        return this.f35318b;
    }

    public final KotlinType b() {
        return this.f35319c;
    }

    public final TypeParameterDescriptor c() {
        return this.f35317a;
    }

    public final boolean d() {
        return KotlinTypeChecker.DEFAULT.isSubtypeOf(this.f35318b, this.f35319c);
    }
}
