package ho;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final long f27618a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f27619b;

    public o(long j10, boolean z10) {
        this.f27618a = j10;
        this.f27619b = z10;
    }

    public final long a() {
        return this.f27618a;
    }

    public final boolean b() {
        return this.f27619b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof o)) {
            return false;
        }
        o oVar = (o) obj;
        if (this.f27618a == oVar.f27618a && this.f27619b == oVar.f27619b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Long.hashCode(this.f27618a) * 31) + Boolean.hashCode(this.f27619b);
    }

    public String toString() {
        long j10 = this.f27618a;
        boolean z10 = this.f27619b;
        return "ExtraCameraOptions(dynamicRange=" + j10 + ", previewStabilization=" + z10 + ")";
    }

    public /* synthetic */ o(long j10, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? 1L : j10, (i10 & 2) != 0 ? false : z10);
    }
}
