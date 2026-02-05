package un;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final long f51619a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f51620b;

    public o(long j10, boolean z10) {
        this.f51619a = j10;
        this.f51620b = z10;
    }

    public final long a() {
        return this.f51619a;
    }

    public final boolean b() {
        return this.f51620b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof o)) {
            return false;
        }
        o oVar = (o) obj;
        if (this.f51619a == oVar.f51619a && this.f51620b == oVar.f51620b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Long.hashCode(this.f51619a) * 31) + Boolean.hashCode(this.f51620b);
    }

    public String toString() {
        long j10 = this.f51619a;
        boolean z10 = this.f51620b;
        return "ExtraCameraOptions(dynamicRange=" + j10 + ", previewStabilization=" + z10 + ")";
    }

    public /* synthetic */ o(long j10, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? 1L : j10, (i10 & 2) != 0 ? false : z10);
    }
}
