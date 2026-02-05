package ne;

import android.view.Surface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o0 {

    /* renamed from: a  reason: collision with root package name */
    public final Surface f39609a;

    /* renamed from: b  reason: collision with root package name */
    public final int f39610b;

    /* renamed from: c  reason: collision with root package name */
    public final int f39611c;

    /* renamed from: d  reason: collision with root package name */
    public final int f39612d;

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
        if (this.f39610b == o0Var.f39610b && this.f39611c == o0Var.f39611c && this.f39612d == o0Var.f39612d && this.f39609a.equals(o0Var.f39609a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f39609a.hashCode() * 31) + this.f39610b) * 31) + this.f39611c) * 31) + this.f39612d;
    }

    public o0(Surface surface, int i10, int i11, int i12) {
        a.b(i12 == 0 || i12 == 90 || i12 == 180 || i12 == 270, "orientationDegrees must be 0, 90, 180, or 270");
        this.f39609a = surface;
        this.f39610b = i10;
        this.f39611c = i11;
        this.f39612d = i12;
    }
}
