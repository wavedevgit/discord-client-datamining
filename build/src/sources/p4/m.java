package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final String f41430a;

    /* renamed from: b  reason: collision with root package name */
    private final int f41431b;

    public m(String workSpecId, int i10) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f41430a = workSpecId;
        this.f41431b = i10;
    }

    public final int a() {
        return this.f41431b;
    }

    public final String b() {
        return this.f41430a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof m)) {
            return false;
        }
        m mVar = (m) obj;
        if (Intrinsics.areEqual(this.f41430a, mVar.f41430a) && this.f41431b == mVar.f41431b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f41430a.hashCode() * 31) + Integer.hashCode(this.f41431b);
    }

    public String toString() {
        return "WorkGenerationalId(workSpecId=" + this.f41430a + ", generation=" + this.f41431b + ')';
    }
}
