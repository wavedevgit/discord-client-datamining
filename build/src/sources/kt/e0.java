package kt;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class e0 extends mt.r {

    /* renamed from: d  reason: collision with root package name */
    private final f0 f35180d;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public e0(f0 names) {
        super(i.f35205a.c(), names.b(), "monthName");
        Intrinsics.checkNotNullParameter(names, "names");
        this.f35180d = names;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof e0) && Intrinsics.areEqual(this.f35180d.b(), ((e0) obj).f35180d.b())) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f35180d.b().hashCode();
    }
}
