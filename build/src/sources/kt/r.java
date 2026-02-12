package kt;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class r extends mt.r {

    /* renamed from: d  reason: collision with root package name */
    private final s f35295d;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public r(s names) {
        super(i.f35205a.b(), names.b(), "dayOfWeekName");
        Intrinsics.checkNotNullParameter(names, "names");
        this.f35295d = names;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof r) && Intrinsics.areEqual(this.f35295d.b(), ((r) obj).f35295d.b())) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f35295d.b().hashCode();
    }
}
