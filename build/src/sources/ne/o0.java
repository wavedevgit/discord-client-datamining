package ne;

import android.view.Surface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o0 {

    /* renamed from: a  reason: collision with root package name */
    public final Surface f38964a;

    /* renamed from: b  reason: collision with root package name */
    public final int f38965b;

    /* renamed from: c  reason: collision with root package name */
    public final int f38966c;

    /* renamed from: d  reason: collision with root package name */
    public final int f38967d;

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
        if (this.f38965b == o0Var.f38965b && this.f38966c == o0Var.f38966c && this.f38967d == o0Var.f38967d && this.f38964a.equals(o0Var.f38964a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f38964a.hashCode() * 31) + this.f38965b) * 31) + this.f38966c) * 31) + this.f38967d;
    }

    public o0(Surface surface, int i10, int i11, int i12) {
        a.b(i12 == 0 || i12 == 90 || i12 == 180 || i12 == 270, "orientationDegrees must be 0, 90, 180, or 270");
        this.f38964a = surface;
        this.f38965b = i10;
        this.f38966c = i11;
        this.f38967d = i12;
    }
}
