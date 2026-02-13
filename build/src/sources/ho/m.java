package ho;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final l f28180a;

    /* renamed from: b  reason: collision with root package name */
    private final List f28181b;

    public m(l primaryChoice, List backupChoices) {
        Intrinsics.checkNotNullParameter(primaryChoice, "primaryChoice");
        Intrinsics.checkNotNullParameter(backupChoices, "backupChoices");
        this.f28180a = primaryChoice;
        this.f28181b = backupChoices;
    }

    public final List a() {
        return CollectionsKt.L0(CollectionsKt.e(this.f28180a), this.f28181b);
    }

    public final l b() {
        return this.f28180a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof m)) {
            return false;
        }
        m mVar = (m) obj;
        if (Intrinsics.areEqual(this.f28180a, mVar.f28180a) && Intrinsics.areEqual(this.f28181b, mVar.f28181b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f28180a.hashCode() * 31) + this.f28181b.hashCode();
    }

    public String toString() {
        l lVar = this.f28180a;
        List list = this.f28181b;
        return "CameraChoices(primaryChoice=" + lVar + ", backupChoices=" + list + ")";
    }
}
