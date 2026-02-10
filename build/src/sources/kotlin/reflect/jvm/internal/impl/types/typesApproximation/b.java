package kotlin.reflect.jvm.internal.impl.types.typesApproximation;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeChecker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final TypeParameterDescriptor f34526a;

    /* renamed from: b  reason: collision with root package name */
    private final KotlinType f34527b;

    /* renamed from: c  reason: collision with root package name */
    private final KotlinType f34528c;

    public b(TypeParameterDescriptor typeParameter, KotlinType inProjection, KotlinType outProjection) {
        Intrinsics.checkNotNullParameter(typeParameter, "typeParameter");
        Intrinsics.checkNotNullParameter(inProjection, "inProjection");
        Intrinsics.checkNotNullParameter(outProjection, "outProjection");
        this.f34526a = typeParameter;
        this.f34527b = inProjection;
        this.f34528c = outProjection;
    }

    public final KotlinType a() {
        return this.f34527b;
    }

    public final KotlinType b() {
        return this.f34528c;
    }

    public final TypeParameterDescriptor c() {
        return this.f34526a;
    }

    public final boolean d() {
        return KotlinTypeChecker.DEFAULT.isSubtypeOf(this.f34527b, this.f34528c);
    }
}
