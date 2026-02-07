package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final String f43716a;

    /* renamed from: b  reason: collision with root package name */
    private final int f43717b;

    public m(String workSpecId, int i10) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f43716a = workSpecId;
        this.f43717b = i10;
    }

    public final int a() {
        return this.f43717b;
    }

    public final String b() {
        return this.f43716a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof m)) {
            return false;
        }
        m mVar = (m) obj;
        if (Intrinsics.areEqual(this.f43716a, mVar.f43716a) && this.f43717b == mVar.f43717b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f43716a.hashCode() * 31) + Integer.hashCode(this.f43717b);
    }

    public String toString() {
        return "WorkGenerationalId(workSpecId=" + this.f43716a + ", generation=" + this.f43717b + ')';
    }
}
