package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final String f42971a;

    /* renamed from: b  reason: collision with root package name */
    private final int f42972b;

    public m(String workSpecId, int i10) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f42971a = workSpecId;
        this.f42972b = i10;
    }

    public final int a() {
        return this.f42972b;
    }

    public final String b() {
        return this.f42971a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof m)) {
            return false;
        }
        m mVar = (m) obj;
        if (Intrinsics.areEqual(this.f42971a, mVar.f42971a) && this.f42972b == mVar.f42972b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f42971a.hashCode() * 31) + Integer.hashCode(this.f42972b);
    }

    public String toString() {
        return "WorkGenerationalId(workSpecId=" + this.f42971a + ", generation=" + this.f42972b + ')';
    }
}
