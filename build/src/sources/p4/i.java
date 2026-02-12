package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    public final String f41420a;

    /* renamed from: b  reason: collision with root package name */
    private final int f41421b;

    /* renamed from: c  reason: collision with root package name */
    public final int f41422c;

    public i(String workSpecId, int i10, int i11) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f41420a = workSpecId;
        this.f41421b = i10;
        this.f41422c = i11;
    }

    public final int a() {
        return this.f41421b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f41420a, iVar.f41420a) && this.f41421b == iVar.f41421b && this.f41422c == iVar.f41422c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f41420a.hashCode() * 31) + Integer.hashCode(this.f41421b)) * 31) + Integer.hashCode(this.f41422c);
    }

    public String toString() {
        return "SystemIdInfo(workSpecId=" + this.f41420a + ", generation=" + this.f41421b + ", systemId=" + this.f41422c + ')';
    }
}
