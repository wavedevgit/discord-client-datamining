package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final String f44983a;

    /* renamed from: b  reason: collision with root package name */
    private final int f44984b;

    public m(String workSpecId, int i10) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f44983a = workSpecId;
        this.f44984b = i10;
    }

    public final int a() {
        return this.f44984b;
    }

    public final String b() {
        return this.f44983a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof m)) {
            return false;
        }
        m mVar = (m) obj;
        if (Intrinsics.areEqual(this.f44983a, mVar.f44983a) && this.f44984b == mVar.f44984b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f44983a.hashCode() * 31) + Integer.hashCode(this.f44984b);
    }

    public String toString() {
        return "WorkGenerationalId(workSpecId=" + this.f44983a + ", generation=" + this.f44984b + ')';
    }
}
