package ne;

import android.view.Surface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o0 {

    /* renamed from: a  reason: collision with root package name */
    public final Surface f39012a;

    /* renamed from: b  reason: collision with root package name */
    public final int f39013b;

    /* renamed from: c  reason: collision with root package name */
    public final int f39014c;

    /* renamed from: d  reason: collision with root package name */
    public final int f39015d;

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
        if (this.f39013b == o0Var.f39013b && this.f39014c == o0Var.f39014c && this.f39015d == o0Var.f39015d && this.f39012a.equals(o0Var.f39012a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f39012a.hashCode() * 31) + this.f39013b) * 31) + this.f39014c) * 31) + this.f39015d;
    }

    public o0(Surface surface, int i10, int i11, int i12) {
        a.b(i12 == 0 || i12 == 90 || i12 == 180 || i12 == 270, "orientationDegrees must be 0, 90, 180, or 270");
        this.f39012a = surface;
        this.f39013b = i10;
        this.f39014c = i11;
        this.f39015d = i12;
    }
}
