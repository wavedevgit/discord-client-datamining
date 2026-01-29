package on;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final long f44578a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f44579b;

    public o(long j10, boolean z10) {
        this.f44578a = j10;
        this.f44579b = z10;
    }

    public final long a() {
        return this.f44578a;
    }

    public final boolean b() {
        return this.f44579b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof o)) {
            return false;
        }
        o oVar = (o) obj;
        if (this.f44578a == oVar.f44578a && this.f44579b == oVar.f44579b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Long.hashCode(this.f44578a) * 31) + Boolean.hashCode(this.f44579b);
    }

    public String toString() {
        long j10 = this.f44578a;
        boolean z10 = this.f44579b;
        return "ExtraCameraOptions(dynamicRange=" + j10 + ", previewStabilization=" + z10 + ")";
    }

    public /* synthetic */ o(long j10, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? 1L : j10, (i10 & 2) != 0 ? false : z10);
    }
}
