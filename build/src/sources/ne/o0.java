package ne;

import android.view.Surface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o0 {

    /* renamed from: a  reason: collision with root package name */
    public final Surface f40110a;

    /* renamed from: b  reason: collision with root package name */
    public final int f40111b;

    /* renamed from: c  reason: collision with root package name */
    public final int f40112c;

    /* renamed from: d  reason: collision with root package name */
    public final int f40113d;

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
        if (this.f40111b == o0Var.f40111b && this.f40112c == o0Var.f40112c && this.f40113d == o0Var.f40113d && this.f40110a.equals(o0Var.f40110a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f40110a.hashCode() * 31) + this.f40111b) * 31) + this.f40112c) * 31) + this.f40113d;
    }

    public o0(Surface surface, int i10, int i11, int i12) {
        a.b(i12 == 0 || i12 == 90 || i12 == 180 || i12 == 270, "orientationDegrees must be 0, 90, 180, or 270");
        this.f40110a = surface;
        this.f40111b = i10;
        this.f40112c = i11;
        this.f40113d = i12;
    }
}
