package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final String f41429a;

    /* renamed from: b  reason: collision with root package name */
    private final int f41430b;

    public m(String workSpecId, int i10) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f41429a = workSpecId;
        this.f41430b = i10;
    }

    public final int a() {
        return this.f41430b;
    }

    public final String b() {
        return this.f41429a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof m)) {
            return false;
        }
        m mVar = (m) obj;
        if (Intrinsics.areEqual(this.f41429a, mVar.f41429a) && this.f41430b == mVar.f41430b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f41429a.hashCode() * 31) + Integer.hashCode(this.f41430b);
    }

    public String toString() {
        return "WorkGenerationalId(workSpecId=" + this.f41429a + ", generation=" + this.f41430b + ')';
    }
}
