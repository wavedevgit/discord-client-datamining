package xn;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final long f55230a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f55231b;

    public o(long j10, boolean z10) {
        this.f55230a = j10;
        this.f55231b = z10;
    }

    public final long a() {
        return this.f55230a;
    }

    public final boolean b() {
        return this.f55231b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof o)) {
            return false;
        }
        o oVar = (o) obj;
        if (this.f55230a == oVar.f55230a && this.f55231b == oVar.f55231b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Long.hashCode(this.f55230a) * 31) + Boolean.hashCode(this.f55231b);
    }

    public String toString() {
        long j10 = this.f55230a;
        boolean z10 = this.f55231b;
        return "ExtraCameraOptions(dynamicRange=" + j10 + ", previewStabilization=" + z10 + ")";
    }

    public /* synthetic */ o(long j10, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? 1L : j10, (i10 & 2) != 0 ? false : z10);
    }
}
