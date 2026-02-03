package com.google.android.renderscript;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Range2d {

    /* renamed from: a  reason: collision with root package name */
    private final int f15853a;

    /* renamed from: b  reason: collision with root package name */
    private final int f15854b;

    /* renamed from: c  reason: collision with root package name */
    private final int f15855c;

    /* renamed from: d  reason: collision with root package name */
    private final int f15856d;

    public final int a() {
        return this.f15854b;
    }

    public final int b() {
        return this.f15856d;
    }

    public final int c() {
        return this.f15853a;
    }

    public final int d() {
        return this.f15855c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof Range2d) {
            Range2d range2d = (Range2d) obj;
            return this.f15853a == range2d.f15853a && this.f15854b == range2d.f15854b && this.f15855c == range2d.f15855c && this.f15856d == range2d.f15856d;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f15853a) * 31) + Integer.hashCode(this.f15854b)) * 31) + Integer.hashCode(this.f15855c)) * 31) + Integer.hashCode(this.f15856d);
    }

    public String toString() {
        int i10 = this.f15853a;
        int i11 = this.f15854b;
        int i12 = this.f15855c;
        int i13 = this.f15856d;
        return "Range2d(startX=" + i10 + ", endX=" + i11 + ", startY=" + i12 + ", endY=" + i13 + ")";
    }
}
