package on;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final l f44571a;

    /* renamed from: b  reason: collision with root package name */
    private final List f44572b;

    public m(l primaryChoice, List backupChoices) {
        Intrinsics.checkNotNullParameter(primaryChoice, "primaryChoice");
        Intrinsics.checkNotNullParameter(backupChoices, "backupChoices");
        this.f44571a = primaryChoice;
        this.f44572b = backupChoices;
    }

    public final List a() {
        return CollectionsKt.L0(CollectionsKt.e(this.f44571a), this.f44572b);
    }

    public final l b() {
        return this.f44571a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof m)) {
            return false;
        }
        m mVar = (m) obj;
        if (Intrinsics.areEqual(this.f44571a, mVar.f44571a) && Intrinsics.areEqual(this.f44572b, mVar.f44572b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f44571a.hashCode() * 31) + this.f44572b.hashCode();
    }

    public String toString() {
        l lVar = this.f44571a;
        List list = this.f44572b;
        return "CameraChoices(primaryChoice=" + lVar + ", backupChoices=" + list + ")";
    }
}
