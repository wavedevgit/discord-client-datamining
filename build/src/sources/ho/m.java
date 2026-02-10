package ho;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final l f27611a;

    /* renamed from: b  reason: collision with root package name */
    private final List f27612b;

    public m(l primaryChoice, List backupChoices) {
        Intrinsics.checkNotNullParameter(primaryChoice, "primaryChoice");
        Intrinsics.checkNotNullParameter(backupChoices, "backupChoices");
        this.f27611a = primaryChoice;
        this.f27612b = backupChoices;
    }

    public final List a() {
        return CollectionsKt.L0(CollectionsKt.e(this.f27611a), this.f27612b);
    }

    public final l b() {
        return this.f27611a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof m)) {
            return false;
        }
        m mVar = (m) obj;
        if (Intrinsics.areEqual(this.f27611a, mVar.f27611a) && Intrinsics.areEqual(this.f27612b, mVar.f27612b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f27611a.hashCode() * 31) + this.f27612b.hashCode();
    }

    public String toString() {
        l lVar = this.f27611a;
        List list = this.f27612b;
        return "CameraChoices(primaryChoice=" + lVar + ", backupChoices=" + list + ")";
    }
}
