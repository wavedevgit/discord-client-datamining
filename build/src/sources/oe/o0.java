package oe;

import android.view.Surface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o0 {

    /* renamed from: a  reason: collision with root package name */
    public final Surface f38989a;

    /* renamed from: b  reason: collision with root package name */
    public final int f38990b;

    /* renamed from: c  reason: collision with root package name */
    public final int f38991c;

    /* renamed from: d  reason: collision with root package name */
    public final int f38992d;

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
        if (this.f38990b == o0Var.f38990b && this.f38991c == o0Var.f38991c && this.f38992d == o0Var.f38992d && this.f38989a.equals(o0Var.f38989a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f38989a.hashCode() * 31) + this.f38990b) * 31) + this.f38991c) * 31) + this.f38992d;
    }

    public o0(Surface surface, int i10, int i11, int i12) {
        a.b(i12 == 0 || i12 == 90 || i12 == 180 || i12 == 270, "orientationDegrees must be 0, 90, 180, or 270");
        this.f38989a = surface;
        this.f38990b = i10;
        this.f38991c = i11;
        this.f38992d = i12;
    }
}
