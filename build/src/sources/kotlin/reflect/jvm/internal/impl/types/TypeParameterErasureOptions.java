package kotlin.reflect.jvm.internal.impl.types;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class TypeParameterErasureOptions {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f35910a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f35911b;

    public TypeParameterErasureOptions(boolean z10, boolean z11) {
        this.f35910a = z10;
        this.f35911b = z11;
    }

    public final boolean getIntersectUpperBounds() {
        return this.f35911b;
    }

    public final boolean getLeaveNonTypeParameterTypes() {
        return this.f35910a;
    }
}
