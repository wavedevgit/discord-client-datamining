package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final String f41998a;

    /* renamed from: b  reason: collision with root package name */
    private final int f41999b;

    public m(String workSpecId, int i10) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f41998a = workSpecId;
        this.f41999b = i10;
    }

    public final int a() {
        return this.f41999b;
    }

    public final String b() {
        return this.f41998a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof m)) {
            return false;
        }
        m mVar = (m) obj;
        if (Intrinsics.areEqual(this.f41998a, mVar.f41998a) && this.f41999b == mVar.f41999b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f41998a.hashCode() * 31) + Integer.hashCode(this.f41999b);
    }

    public String toString() {
        return "WorkGenerationalId(workSpecId=" + this.f41998a + ", generation=" + this.f41999b + ')';
    }
}
