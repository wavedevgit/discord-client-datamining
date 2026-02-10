package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    public final String f41419a;

    /* renamed from: b  reason: collision with root package name */
    private final int f41420b;

    /* renamed from: c  reason: collision with root package name */
    public final int f41421c;

    public i(String workSpecId, int i10, int i11) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f41419a = workSpecId;
        this.f41420b = i10;
        this.f41421c = i11;
    }

    public final int a() {
        return this.f41420b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f41419a, iVar.f41419a) && this.f41420b == iVar.f41420b && this.f41421c == iVar.f41421c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f41419a.hashCode() * 31) + Integer.hashCode(this.f41420b)) * 31) + Integer.hashCode(this.f41421c);
    }

    public String toString() {
        return "SystemIdInfo(workSpecId=" + this.f41419a + ", generation=" + this.f41420b + ", systemId=" + this.f41421c + ')';
    }
}
