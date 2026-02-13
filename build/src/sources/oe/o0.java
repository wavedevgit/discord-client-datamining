package oe;

import android.view.Surface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o0 {

    /* renamed from: a  reason: collision with root package name */
    public final Surface f39558a;

    /* renamed from: b  reason: collision with root package name */
    public final int f39559b;

    /* renamed from: c  reason: collision with root package name */
    public final int f39560c;

    /* renamed from: d  reason: collision with root package name */
    public final int f39561d;

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
        if (this.f39559b == o0Var.f39559b && this.f39560c == o0Var.f39560c && this.f39561d == o0Var.f39561d && this.f39558a.equals(o0Var.f39558a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f39558a.hashCode() * 31) + this.f39559b) * 31) + this.f39560c) * 31) + this.f39561d;
    }

    public o0(Surface surface, int i10, int i11, int i12) {
        a.b(i12 == 0 || i12 == 90 || i12 == 180 || i12 == 270, "orientationDegrees must be 0, 90, 180, or 270");
        this.f39558a = surface;
        this.f39559b = i10;
        this.f39560c = i11;
        this.f39561d = i12;
    }
}
