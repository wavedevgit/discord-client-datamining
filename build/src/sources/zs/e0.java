package zs;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class e0 extends bt.r {

    /* renamed from: d  reason: collision with root package name */
    private final f0 f56469d;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public e0(f0 names) {
        super(i.f56494a.c(), names.b(), "monthName");
        Intrinsics.checkNotNullParameter(names, "names");
        this.f56469d = names;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof e0) && Intrinsics.areEqual(this.f56469d.b(), ((e0) obj).f56469d.b())) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f56469d.b().hashCode();
    }
}
