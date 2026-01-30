package ne;

import android.view.Surface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o0 {

    /* renamed from: a  reason: collision with root package name */
    public final Surface f40247a;

    /* renamed from: b  reason: collision with root package name */
    public final int f40248b;

    /* renamed from: c  reason: collision with root package name */
    public final int f40249c;

    /* renamed from: d  reason: collision with root package name */
    public final int f40250d;

    public o0(Surface surface, int i10, int i11) {
        this(surface, i10, i11, 0);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof o0)) {
            return false;
        }
        o0 o0Var = (o0) obj;
        if (this.f40248b == o0Var.f40248b && this.f40249c == o0Var.f40249c && this.f40250d == o0Var.f40250d && this.f40247a.equals(o0Var.f40247a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f40247a.hashCode() * 31) + this.f40248b) * 31) + this.f40249c) * 31) + this.f40250d;
    }

    public o0(Surface surface, int i10, int i11, int i12) {
        a.b(i12 == 0 || i12 == 90 || i12 == 180 || i12 == 270, "orientationDegrees must be 0, 90, 180, or 270");
        this.f40247a = surface;
        this.f40248b = i10;
        this.f40249c = i11;
        this.f40250d = i12;
    }
}
