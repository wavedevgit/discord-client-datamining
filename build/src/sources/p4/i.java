package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    public final String f41988a;

    /* renamed from: b  reason: collision with root package name */
    private final int f41989b;

    /* renamed from: c  reason: collision with root package name */
    public final int f41990c;

    public i(String workSpecId, int i10, int i11) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f41988a = workSpecId;
        this.f41989b = i10;
        this.f41990c = i11;
    }

    public final int a() {
        return this.f41989b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f41988a, iVar.f41988a) && this.f41989b == iVar.f41989b && this.f41990c == iVar.f41990c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f41988a.hashCode() * 31) + Integer.hashCode(this.f41989b)) * 31) + Integer.hashCode(this.f41990c);
    }

    public String toString() {
        return "SystemIdInfo(workSpecId=" + this.f41988a + ", generation=" + this.f41989b + ", systemId=" + this.f41990c + ')';
    }
}
