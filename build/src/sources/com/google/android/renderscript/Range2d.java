package com.google.android.renderscript;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Range2d {

    /* renamed from: a  reason: collision with root package name */
    private final int f16247a;

    /* renamed from: b  reason: collision with root package name */
    private final int f16248b;

    /* renamed from: c  reason: collision with root package name */
    private final int f16249c;

    /* renamed from: d  reason: collision with root package name */
    private final int f16250d;

    public final int a() {
        return this.f16248b;
    }

    public final int b() {
        return this.f16250d;
    }

    public final int c() {
        return this.f16247a;
    }

    public final int d() {
        return this.f16249c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof Range2d) {
            Range2d range2d = (Range2d) obj;
            return this.f16247a == range2d.f16247a && this.f16248b == range2d.f16248b && this.f16249c == range2d.f16249c && this.f16250d == range2d.f16250d;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f16247a) * 31) + Integer.hashCode(this.f16248b)) * 31) + Integer.hashCode(this.f16249c)) * 31) + Integer.hashCode(this.f16250d);
    }

    public String toString() {
        int i10 = this.f16247a;
        int i11 = this.f16248b;
        int i12 = this.f16249c;
        int i13 = this.f16250d;
        return "Range2d(startX=" + i10 + ", endX=" + i11 + ", startY=" + i12 + ", endY=" + i13 + ")";
    }
}
