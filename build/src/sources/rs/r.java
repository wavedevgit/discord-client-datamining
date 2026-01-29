package rs;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class r extends ts.r {

    /* renamed from: d  reason: collision with root package name */
    private final s f48594d;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public r(s names) {
        super(i.f48504a.b(), names.b(), "dayOfWeekName");
        Intrinsics.checkNotNullParameter(names, "names");
        this.f48594d = names;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof r) && Intrinsics.areEqual(this.f48594d.b(), ((r) obj).f48594d.b())) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f48594d.b().hashCode();
    }
}
