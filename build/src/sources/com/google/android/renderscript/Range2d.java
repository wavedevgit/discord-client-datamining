package com.google.android.renderscript;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Range2d {

    /* renamed from: a  reason: collision with root package name */
    private final int f17256a;

    /* renamed from: b  reason: collision with root package name */
    private final int f17257b;

    /* renamed from: c  reason: collision with root package name */
    private final int f17258c;

    /* renamed from: d  reason: collision with root package name */
    private final int f17259d;

    public final int a() {
        return this.f17257b;
    }

    public final int b() {
        return this.f17259d;
    }

    public final int c() {
        return this.f17256a;
    }

    public final int d() {
        return this.f17258c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof Range2d) {
            Range2d range2d = (Range2d) obj;
            return this.f17256a == range2d.f17256a && this.f17257b == range2d.f17257b && this.f17258c == range2d.f17258c && this.f17259d == range2d.f17259d;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f17256a) * 31) + Integer.hashCode(this.f17257b)) * 31) + Integer.hashCode(this.f17258c)) * 31) + Integer.hashCode(this.f17259d);
    }

    public String toString() {
        int i10 = this.f17256a;
        int i11 = this.f17257b;
        int i12 = this.f17258c;
        int i13 = this.f17259d;
        return "Range2d(startX=" + i10 + ", endX=" + i11 + ", startY=" + i12 + ", endY=" + i13 + ")";
    }
}
