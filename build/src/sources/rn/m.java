package rn;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final l f49010a;

    /* renamed from: b  reason: collision with root package name */
    private final List f49011b;

    public m(l primaryChoice, List backupChoices) {
        Intrinsics.checkNotNullParameter(primaryChoice, "primaryChoice");
        Intrinsics.checkNotNullParameter(backupChoices, "backupChoices");
        this.f49010a = primaryChoice;
        this.f49011b = backupChoices;
    }

    public final List a() {
        return CollectionsKt.L0(CollectionsKt.e(this.f49010a), this.f49011b);
    }

    public final l b() {
        return this.f49010a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof m)) {
            return false;
        }
        m mVar = (m) obj;
        if (Intrinsics.areEqual(this.f49010a, mVar.f49010a) && Intrinsics.areEqual(this.f49011b, mVar.f49011b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f49010a.hashCode() * 31) + this.f49011b.hashCode();
    }

    public String toString() {
        l lVar = this.f49010a;
        List list = this.f49011b;
        return "CameraChoices(primaryChoice=" + lVar + ", backupChoices=" + list + ")";
    }
}
