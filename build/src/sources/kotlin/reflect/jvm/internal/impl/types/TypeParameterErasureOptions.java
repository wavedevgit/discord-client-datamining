package kotlin.reflect.jvm.internal.impl.types;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class TypeParameterErasureOptions {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f35894a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f35895b;

    public TypeParameterErasureOptions(boolean z10, boolean z11) {
        this.f35894a = z10;
        this.f35895b = z11;
    }

    public final boolean getIntersectUpperBounds() {
        return this.f35895b;
    }

    public final boolean getLeaveNonTypeParameterTypes() {
        return this.f35894a;
    }
}
