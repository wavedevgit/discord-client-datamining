package xn;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final l f55223a;

    /* renamed from: b  reason: collision with root package name */
    private final List f55224b;

    public m(l primaryChoice, List backupChoices) {
        Intrinsics.checkNotNullParameter(primaryChoice, "primaryChoice");
        Intrinsics.checkNotNullParameter(backupChoices, "backupChoices");
        this.f55223a = primaryChoice;
        this.f55224b = backupChoices;
    }

    public final List a() {
        return CollectionsKt.L0(CollectionsKt.e(this.f55223a), this.f55224b);
    }

    public final l b() {
        return this.f55223a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof m)) {
            return false;
        }
        m mVar = (m) obj;
        if (Intrinsics.areEqual(this.f55223a, mVar.f55223a) && Intrinsics.areEqual(this.f55224b, mVar.f55224b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f55223a.hashCode() * 31) + this.f55224b.hashCode();
    }

    public String toString() {
        l lVar = this.f55223a;
        List list = this.f55224b;
        return "CameraChoices(primaryChoice=" + lVar + ", backupChoices=" + list + ")";
    }
}
