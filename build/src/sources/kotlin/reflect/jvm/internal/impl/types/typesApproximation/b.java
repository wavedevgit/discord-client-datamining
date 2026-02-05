package kotlin.reflect.jvm.internal.impl.types.typesApproximation;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeChecker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final TypeParameterDescriptor f34749a;

    /* renamed from: b  reason: collision with root package name */
    private final KotlinType f34750b;

    /* renamed from: c  reason: collision with root package name */
    private final KotlinType f34751c;

    public b(TypeParameterDescriptor typeParameter, KotlinType inProjection, KotlinType outProjection) {
        Intrinsics.checkNotNullParameter(typeParameter, "typeParameter");
        Intrinsics.checkNotNullParameter(inProjection, "inProjection");
        Intrinsics.checkNotNullParameter(outProjection, "outProjection");
        this.f34749a = typeParameter;
        this.f34750b = inProjection;
        this.f34751c = outProjection;
    }

    public final KotlinType a() {
        return this.f34750b;
    }

    public final KotlinType b() {
        return this.f34751c;
    }

    public final TypeParameterDescriptor c() {
        return this.f34749a;
    }

    public final boolean d() {
        return KotlinTypeChecker.DEFAULT.isSubtypeOf(this.f34750b, this.f34751c);
    }
}
