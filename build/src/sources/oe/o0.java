package oe;

import android.view.Surface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o0 {

    /* renamed from: a  reason: collision with root package name */
    public final Surface f38990a;

    /* renamed from: b  reason: collision with root package name */
    public final int f38991b;

    /* renamed from: c  reason: collision with root package name */
    public final int f38992c;

    /* renamed from: d  reason: collision with root package name */
    public final int f38993d;

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
        if (this.f38991b == o0Var.f38991b && this.f38992c == o0Var.f38992c && this.f38993d == o0Var.f38993d && this.f38990a.equals(o0Var.f38990a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f38990a.hashCode() * 31) + this.f38991b) * 31) + this.f38992c) * 31) + this.f38993d;
    }

    public o0(Surface surface, int i10, int i11, int i12) {
        a.b(i12 == 0 || i12 == 90 || i12 == 180 || i12 == 270, "orientationDegrees must be 0, 90, 180, or 270");
        this.f38990a = surface;
        this.f38991b = i10;
        this.f38992c = i11;
        this.f38993d = i12;
    }
}
