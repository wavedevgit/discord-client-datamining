package on;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final long f44594a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f44595b;

    public o(long j10, boolean z10) {
        this.f44594a = j10;
        this.f44595b = z10;
    }

    public final long a() {
        return this.f44594a;
    }

    public final boolean b() {
        return this.f44595b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof o)) {
            return false;
        }
        o oVar = (o) obj;
        if (this.f44594a == oVar.f44594a && this.f44595b == oVar.f44595b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Long.hashCode(this.f44594a) * 31) + Boolean.hashCode(this.f44595b);
    }

    public String toString() {
        long j10 = this.f44594a;
        boolean z10 = this.f44595b;
        return "ExtraCameraOptions(dynamicRange=" + j10 + ", previewStabilization=" + z10 + ")";
    }

    public /* synthetic */ o(long j10, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? 1L : j10, (i10 & 2) != 0 ? false : z10);
    }
}
