package un;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final l f51612a;

    /* renamed from: b  reason: collision with root package name */
    private final List f51613b;

    public m(l primaryChoice, List backupChoices) {
        Intrinsics.checkNotNullParameter(primaryChoice, "primaryChoice");
        Intrinsics.checkNotNullParameter(backupChoices, "backupChoices");
        this.f51612a = primaryChoice;
        this.f51613b = backupChoices;
    }

    public final List a() {
        return CollectionsKt.L0(CollectionsKt.e(this.f51612a), this.f51613b);
    }

    public final l b() {
        return this.f51612a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof m)) {
            return false;
        }
        m mVar = (m) obj;
        if (Intrinsics.areEqual(this.f51612a, mVar.f51612a) && Intrinsics.areEqual(this.f51613b, mVar.f51613b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f51612a.hashCode() * 31) + this.f51613b.hashCode();
    }

    public String toString() {
        l lVar = this.f51612a;
        List list = this.f51613b;
        return "CameraChoices(primaryChoice=" + lVar + ", backupChoices=" + list + ")";
    }
}
