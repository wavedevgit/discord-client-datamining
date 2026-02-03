package pn;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final long f46384a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f46385b;

    public o(long j10, boolean z10) {
        this.f46384a = j10;
        this.f46385b = z10;
    }

    public final long a() {
        return this.f46384a;
    }

    public final boolean b() {
        return this.f46385b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof o)) {
            return false;
        }
        o oVar = (o) obj;
        if (this.f46384a == oVar.f46384a && this.f46385b == oVar.f46385b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Long.hashCode(this.f46384a) * 31) + Boolean.hashCode(this.f46385b);
    }

    public String toString() {
        long j10 = this.f46384a;
        boolean z10 = this.f46385b;
        return "ExtraCameraOptions(dynamicRange=" + j10 + ", previewStabilization=" + z10 + ")";
    }

    public /* synthetic */ o(long j10, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? 1L : j10, (i10 & 2) != 0 ? false : z10);
    }
}
