package wn;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final l f54060a;

    /* renamed from: b  reason: collision with root package name */
    private final List f54061b;

    public m(l primaryChoice, List backupChoices) {
        Intrinsics.checkNotNullParameter(primaryChoice, "primaryChoice");
        Intrinsics.checkNotNullParameter(backupChoices, "backupChoices");
        this.f54060a = primaryChoice;
        this.f54061b = backupChoices;
    }

    public final List a() {
        return CollectionsKt.L0(CollectionsKt.e(this.f54060a), this.f54061b);
    }

    public final l b() {
        return this.f54060a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof m)) {
            return false;
        }
        m mVar = (m) obj;
        if (Intrinsics.areEqual(this.f54060a, mVar.f54060a) && Intrinsics.areEqual(this.f54061b, mVar.f54061b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f54060a.hashCode() * 31) + this.f54061b.hashCode();
    }

    public String toString() {
        l lVar = this.f54060a;
        List list = this.f54061b;
        return "CameraChoices(primaryChoice=" + lVar + ", backupChoices=" + list + ")";
    }
}
