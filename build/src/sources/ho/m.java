package ho;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final l f27612a;

    /* renamed from: b  reason: collision with root package name */
    private final List f27613b;

    public m(l primaryChoice, List backupChoices) {
        Intrinsics.checkNotNullParameter(primaryChoice, "primaryChoice");
        Intrinsics.checkNotNullParameter(backupChoices, "backupChoices");
        this.f27612a = primaryChoice;
        this.f27613b = backupChoices;
    }

    public final List a() {
        return CollectionsKt.L0(CollectionsKt.e(this.f27612a), this.f27613b);
    }

    public final l b() {
        return this.f27612a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof m)) {
            return false;
        }
        m mVar = (m) obj;
        if (Intrinsics.areEqual(this.f27612a, mVar.f27612a) && Intrinsics.areEqual(this.f27613b, mVar.f27613b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f27612a.hashCode() * 31) + this.f27613b.hashCode();
    }

    public String toString() {
        l lVar = this.f27612a;
        List list = this.f27613b;
        return "CameraChoices(primaryChoice=" + lVar + ", backupChoices=" + list + ")";
    }
}
