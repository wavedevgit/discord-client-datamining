package kotlin.reflect.jvm.internal.impl.types;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class TypeParameterErasureOptions {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f35686a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f35687b;

    public TypeParameterErasureOptions(boolean z10, boolean z11) {
        this.f35686a = z10;
        this.f35687b = z11;
    }

    public final boolean getIntersectUpperBounds() {
        return this.f35687b;
    }

    public final boolean getLeaveNonTypeParameterTypes() {
        return this.f35686a;
    }
}
