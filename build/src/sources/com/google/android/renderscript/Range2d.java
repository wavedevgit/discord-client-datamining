package com.google.android.renderscript;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Range2d {

    /* renamed from: a  reason: collision with root package name */
    private final int f16367a;

    /* renamed from: b  reason: collision with root package name */
    private final int f16368b;

    /* renamed from: c  reason: collision with root package name */
    private final int f16369c;

    /* renamed from: d  reason: collision with root package name */
    private final int f16370d;

    public final int a() {
        return this.f16368b;
    }

    public final int b() {
        return this.f16370d;
    }

    public final int c() {
        return this.f16367a;
    }

    public final int d() {
        return this.f16369c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof Range2d) {
            Range2d range2d = (Range2d) obj;
            return this.f16367a == range2d.f16367a && this.f16368b == range2d.f16368b && this.f16369c == range2d.f16369c && this.f16370d == range2d.f16370d;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f16367a) * 31) + Integer.hashCode(this.f16368b)) * 31) + Integer.hashCode(this.f16369c)) * 31) + Integer.hashCode(this.f16370d);
    }

    public String toString() {
        int i10 = this.f16367a;
        int i11 = this.f16368b;
        int i12 = this.f16369c;
        int i13 = this.f16370d;
        return "Range2d(startX=" + i10 + ", endX=" + i11 + ", startY=" + i12 + ", endY=" + i13 + ")";
    }
}
