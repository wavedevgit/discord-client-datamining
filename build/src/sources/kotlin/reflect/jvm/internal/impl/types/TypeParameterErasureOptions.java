package kotlin.reflect.jvm.internal.impl.types;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class TypeParameterErasureOptions {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f34620a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f34621b;

    public TypeParameterErasureOptions(boolean z10, boolean z11) {
        this.f34620a = z10;
        this.f34621b = z11;
    }

    public final boolean getIntersectUpperBounds() {
        return this.f34621b;
    }

    public final boolean getLeaveNonTypeParameterTypes() {
        return this.f34620a;
    }
}
