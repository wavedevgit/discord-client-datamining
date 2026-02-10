package oe;

import android.view.Surface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o0 {

    /* renamed from: a  reason: collision with root package name */
    public final Surface f40663a;

    /* renamed from: b  reason: collision with root package name */
    public final int f40664b;

    /* renamed from: c  reason: collision with root package name */
    public final int f40665c;

    /* renamed from: d  reason: collision with root package name */
    public final int f40666d;

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
        if (this.f40664b == o0Var.f40664b && this.f40665c == o0Var.f40665c && this.f40666d == o0Var.f40666d && this.f40663a.equals(o0Var.f40663a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f40663a.hashCode() * 31) + this.f40664b) * 31) + this.f40665c) * 31) + this.f40666d;
    }

    public o0(Surface surface, int i10, int i11, int i12) {
        a.b(i12 == 0 || i12 == 90 || i12 == 180 || i12 == 270, "orientationDegrees must be 0, 90, 180, or 270");
        this.f40663a = surface;
        this.f40664b = i10;
        this.f40665c = i11;
        this.f40666d = i12;
    }
}
