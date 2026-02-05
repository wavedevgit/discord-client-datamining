package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    public final String f44861a;

    /* renamed from: b  reason: collision with root package name */
    private final int f44862b;

    /* renamed from: c  reason: collision with root package name */
    public final int f44863c;

    public i(String workSpecId, int i10, int i11) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f44861a = workSpecId;
        this.f44862b = i10;
        this.f44863c = i11;
    }

    public final int a() {
        return this.f44862b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f44861a, iVar.f44861a) && this.f44862b == iVar.f44862b && this.f44863c == iVar.f44863c) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((this.f44861a.hashCode() * 31) + Integer.hashCode(this.f44862b)) * 31) + Integer.hashCode(this.f44863c);
    }

    public String toString() {
        return "SystemIdInfo(workSpecId=" + this.f44861a + ", generation=" + this.f44862b + ", systemId=" + this.f44863c + ')';
    }
}
