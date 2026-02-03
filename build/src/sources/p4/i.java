package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    public final String f44973a;

    /* renamed from: b  reason: collision with root package name */
    private final int f44974b;

    /* renamed from: c  reason: collision with root package name */
    public final int f44975c;

    public i(String workSpecId, int i10, int i11) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f44973a = workSpecId;
        this.f44974b = i10;
        this.f44975c = i11;
    }

    public final int a() {
        return this.f44974b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f44973a, iVar.f44973a) && this.f44974b == iVar.f44974b && this.f44975c == iVar.f44975c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f44973a.hashCode() * 31) + Integer.hashCode(this.f44974b)) * 31) + Integer.hashCode(this.f44975c);
    }

    public String toString() {
        return "SystemIdInfo(workSpecId=" + this.f44973a + ", generation=" + this.f44974b + ", systemId=" + this.f44975c + ')';
    }
}
