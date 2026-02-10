package at;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class r extends ct.r {

    /* renamed from: d  reason: collision with root package name */
    private final s f6162d;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public r(s names) {
        super(i.f6072a.b(), names.b(), "dayOfWeekName");
        Intrinsics.checkNotNullParameter(names, "names");
        this.f6162d = names;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof r) && Intrinsics.areEqual(this.f6162d.b(), ((r) obj).f6162d.b())) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f6162d.b().hashCode();
    }
}
