package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    public final String f44931a;

    /* renamed from: b  reason: collision with root package name */
    private final int f44932b;

    /* renamed from: c  reason: collision with root package name */
    public final int f44933c;

    public i(String workSpecId, int i10, int i11) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f44931a = workSpecId;
        this.f44932b = i10;
        this.f44933c = i11;
    }

    public final int a() {
        return this.f44932b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f44931a, iVar.f44931a) && this.f44932b == iVar.f44932b && this.f44933c == iVar.f44933c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f44931a.hashCode() * 31) + Integer.hashCode(this.f44932b)) * 31) + Integer.hashCode(this.f44933c);
    }

    public String toString() {
        return "SystemIdInfo(workSpecId=" + this.f44931a + ", generation=" + this.f44932b + ", systemId=" + this.f44933c + ')';
    }
}
