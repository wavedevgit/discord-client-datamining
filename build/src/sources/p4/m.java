package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final String f43668a;

    /* renamed from: b  reason: collision with root package name */
    private final int f43669b;

    public m(String workSpecId, int i10) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f43668a = workSpecId;
        this.f43669b = i10;
    }

    public final int a() {
        return this.f43669b;
    }

    public final String b() {
        return this.f43668a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof m)) {
            return false;
        }
        m mVar = (m) obj;
        if (Intrinsics.areEqual(this.f43668a, mVar.f43668a) && this.f43669b == mVar.f43669b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f43668a.hashCode() * 31) + Integer.hashCode(this.f43669b);
    }

    public String toString() {
        return "WorkGenerationalId(workSpecId=" + this.f43668a + ", generation=" + this.f43669b + ')';
    }
}
