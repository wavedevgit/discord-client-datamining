package wn;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final long f54019a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f54020b;

    public o(long j10, boolean z10) {
        this.f54019a = j10;
        this.f54020b = z10;
    }

    public final long a() {
        return this.f54019a;
    }

    public final boolean b() {
        return this.f54020b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof o)) {
            return false;
        }
        o oVar = (o) obj;
        if (this.f54019a == oVar.f54019a && this.f54020b == oVar.f54020b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Long.hashCode(this.f54019a) * 31) + Boolean.hashCode(this.f54020b);
    }

    public String toString() {
        long j10 = this.f54019a;
        boolean z10 = this.f54020b;
        return "ExtraCameraOptions(dynamicRange=" + j10 + ", previewStabilization=" + z10 + ")";
    }

    public /* synthetic */ o(long j10, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? 1L : j10, (i10 & 2) != 0 ? false : z10);
    }
}
