package wn;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final l f54012a;

    /* renamed from: b  reason: collision with root package name */
    private final List f54013b;

    public m(l primaryChoice, List backupChoices) {
        Intrinsics.checkNotNullParameter(primaryChoice, "primaryChoice");
        Intrinsics.checkNotNullParameter(backupChoices, "backupChoices");
        this.f54012a = primaryChoice;
        this.f54013b = backupChoices;
    }

    public final List a() {
        return CollectionsKt.L0(CollectionsKt.e(this.f54012a), this.f54013b);
    }

    public final l b() {
        return this.f54012a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof m)) {
            return false;
        }
        m mVar = (m) obj;
        if (Intrinsics.areEqual(this.f54012a, mVar.f54012a) && Intrinsics.areEqual(this.f54013b, mVar.f54013b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f54012a.hashCode() * 31) + this.f54013b.hashCode();
    }

    public String toString() {
        l lVar = this.f54012a;
        List list = this.f54013b;
        return "CameraChoices(primaryChoice=" + lVar + ", backupChoices=" + list + ")";
    }
}
