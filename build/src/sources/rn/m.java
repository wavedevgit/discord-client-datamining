package rn;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final l f49013a;

    /* renamed from: b  reason: collision with root package name */
    private final List f49014b;

    public m(l primaryChoice, List backupChoices) {
        Intrinsics.checkNotNullParameter(primaryChoice, "primaryChoice");
        Intrinsics.checkNotNullParameter(backupChoices, "backupChoices");
        this.f49013a = primaryChoice;
        this.f49014b = backupChoices;
    }

    public final List a() {
        return CollectionsKt.L0(CollectionsKt.e(this.f49013a), this.f49014b);
    }

    public final l b() {
        return this.f49013a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof m)) {
            return false;
        }
        m mVar = (m) obj;
        if (Intrinsics.areEqual(this.f49013a, mVar.f49013a) && Intrinsics.areEqual(this.f49014b, mVar.f49014b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f49013a.hashCode() * 31) + this.f49014b.hashCode();
    }

    public String toString() {
        l lVar = this.f49013a;
        List list = this.f49014b;
        return "CameraChoices(primaryChoice=" + lVar + ", backupChoices=" + list + ")";
    }
}
