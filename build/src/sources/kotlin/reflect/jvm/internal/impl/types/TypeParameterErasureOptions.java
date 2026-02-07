package kotlin.reflect.jvm.internal.impl.types;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class TypeParameterErasureOptions {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f34668a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f34669b;

    public TypeParameterErasureOptions(boolean z10, boolean z11) {
        this.f34668a = z10;
        this.f34669b = z11;
    }

    public final boolean getIntersectUpperBounds() {
        return this.f34669b;
    }

    public final boolean getLeaveNonTypeParameterTypes() {
        return this.f34668a;
    }
}
