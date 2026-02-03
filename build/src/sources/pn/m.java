package pn;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final l f46377a;

    /* renamed from: b  reason: collision with root package name */
    private final List f46378b;

    public m(l primaryChoice, List backupChoices) {
        Intrinsics.checkNotNullParameter(primaryChoice, "primaryChoice");
        Intrinsics.checkNotNullParameter(backupChoices, "backupChoices");
        this.f46377a = primaryChoice;
        this.f46378b = backupChoices;
    }

    public final List a() {
        return CollectionsKt.L0(CollectionsKt.e(this.f46377a), this.f46378b);
    }

    public final l b() {
        return this.f46377a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof m)) {
            return false;
        }
        m mVar = (m) obj;
        if (Intrinsics.areEqual(this.f46377a, mVar.f46377a) && Intrinsics.areEqual(this.f46378b, mVar.f46378b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f46377a.hashCode() * 31) + this.f46378b.hashCode();
    }

    public String toString() {
        l lVar = this.f46377a;
        List list = this.f46378b;
        return "CameraChoices(primaryChoice=" + lVar + ", backupChoices=" + list + ")";
    }
}
