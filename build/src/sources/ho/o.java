package ho;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final long f28187a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f28188b;

    public o(long j10, boolean z10) {
        this.f28187a = j10;
        this.f28188b = z10;
    }

    public final long a() {
        return this.f28187a;
    }

    public final boolean b() {
        return this.f28188b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof o)) {
            return false;
        }
        o oVar = (o) obj;
        if (this.f28187a == oVar.f28187a && this.f28188b == oVar.f28188b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Long.hashCode(this.f28187a) * 31) + Boolean.hashCode(this.f28188b);
    }

    public String toString() {
        long j10 = this.f28187a;
        boolean z10 = this.f28188b;
        return "ExtraCameraOptions(dynamicRange=" + j10 + ", previewStabilization=" + z10 + ")";
    }

    public /* synthetic */ o(long j10, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? 1L : j10, (i10 & 2) != 0 ? false : z10);
    }
}
