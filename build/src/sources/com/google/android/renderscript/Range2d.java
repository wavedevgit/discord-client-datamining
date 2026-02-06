package com.google.android.renderscript;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Range2d {

    /* renamed from: a  reason: collision with root package name */
    private final int f16227a;

    /* renamed from: b  reason: collision with root package name */
    private final int f16228b;

    /* renamed from: c  reason: collision with root package name */
    private final int f16229c;

    /* renamed from: d  reason: collision with root package name */
    private final int f16230d;

    public final int a() {
        return this.f16228b;
    }

    public final int b() {
        return this.f16230d;
    }

    public final int c() {
        return this.f16227a;
    }

    public final int d() {
        return this.f16229c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof Range2d) {
            Range2d range2d = (Range2d) obj;
            return this.f16227a == range2d.f16227a && this.f16228b == range2d.f16228b && this.f16229c == range2d.f16229c && this.f16230d == range2d.f16230d;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f16227a) * 31) + Integer.hashCode(this.f16228b)) * 31) + Integer.hashCode(this.f16229c)) * 31) + Integer.hashCode(this.f16230d);
    }

    public String toString() {
        int i10 = this.f16227a;
        int i11 = this.f16228b;
        int i12 = this.f16229c;
        int i13 = this.f16230d;
        return "Range2d(startX=" + i10 + ", endX=" + i11 + ", startY=" + i12 + ", endY=" + i13 + ")";
    }
}
